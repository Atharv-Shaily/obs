import { Request, Response } from 'express';
import crypto from 'crypto';
import { Types } from 'mongoose';
import Trek from '../models/Trek';
import Booking from '../models/Booking';
import { processCompletedTrek } from '../services/loyaltyService';

/**
 * POST /api/payments/initiate
 * Initiates a payment:
 * 1. Resolves/Creates the Trek document in DB.
 * 2. Creates/Finds a Pending Booking.
 * 3. Generates the PayU signature hash using Merchant Key & Salt.
 * 4. Returns the form arguments and action URL.
 */
export const initiatePayment = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = new Types.ObjectId(req.user!.id);
    const email = req.user!.email;
    const { trekTitle, amount } = req.body as { trekTitle: string; amount: number };

    if (!trekTitle || !amount) {
      res.status(400).json({ message: 'trekTitle and amount are required.' });
      return;
    }

    // 1. Look up the trek by title. If not found, create a default entry so the system doesn't break.
    const searchTitle = trekTitle.replace(/\s+Trek$/i, '').trim();
    let trek = await Trek.findOne({ title: { $regex: new RegExp(searchTitle, 'i') } });
    if (!trek) {
      trek = await Trek.create({
        title: trekTitle,
        description: `Auto-generated trek entry for: ${trekTitle}`,
        loyaltyReward: 500, // default reward
      });
    }

    // 2. Block re-booking a Completed trek; reuse a Pending booking; allow fresh booking after Cancellation.
    let booking = await Booking.findOne({
      userId,
      trekId: trek._id,
      status: { $in: ['Pending', 'Completed'] }, // only look at active bookings
    });

    if (booking?.status === 'Completed') {
      res.status(409).json({ message: 'You have already completed this trek and cannot book it again.' });
      return;
    }

    if (!booking) {
      // No active booking — either first time or re-booking after cancellation
      try {
        booking = await Booking.create({
          userId,
          trekId: trek._id,
          status: 'Pending',
        });
      } catch (createError: any) {
        // Guard against race conditions where two requests slip through simultaneously
        if (createError?.code === 11000) {
          res.status(409).json({ message: 'You already have an active booking for this trek.' });
          return;
        }
        throw createError;
      }
    }
    // else: reuse the existing Pending booking

    // 3. Prepare parameters for PayU
    const key = process.env.PAYU_MERCHANT_KEY || 'default_key';
    const salt = process.env.PAYU_MERCHANT_SALT || 'default_salt';
    const txnid = booking._id.toString();
    const productinfo = trekTitle.replace(/[^a-zA-Z0-9 ]/g, '').substring(0, 80);
    const firstname = email.split('@')[0].replace(/[^a-zA-Z0-9]/g, '') || 'customer';
    
    // Construct URLs relative to current request host (surl/furl point to callback webhook)
    const surl = `${req.protocol}://${req.get('host')}/api/payments/payu-callback`;
    const furl = `${req.protocol}://${req.get('host')}/api/payments/payu-callback`;

    // Hash formula: sha512(key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5||||||SALT)
    const hashString = `${key}|${txnid}|${amount.toFixed(2)}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;
    const hash = crypto.createHash('sha512').update(hashString).digest('hex');

    res.status(200).json({
      key,
      txnid,
      amount: amount.toFixed(2),
      productinfo,
      firstname,
      email,
      hash,
      surl,
      furl,
      actionUrl: process.env.PAYU_ACTION_URL || 'https://test.payu.in/_payment', // default to Sandbox URL
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error initiating payment.', error });
  }
};

/**
 * POST /api/payments/payu-callback
 * PayU Webhook / Callback endpoint:
 * 1. Verifies the SHA-512 signature hash to prevent tampering.
 * 2. If status is 'success', sets the Booking status to 'Completed'.
 * 3. Triggers processCompletedTrek() to award loyalty points.
 * 4. Redirects the user's browser back to the frontend profile page.
 */
export const payuCallback = async (req: Request, res: Response): Promise<void> => {
  try {
    const { status, txnid, hash, amount, productinfo, firstname, email } = req.body;
    
    if (!status || !txnid || !hash) {
      res.status(400).send('Invalid callback parameters.');
      return;
    }

    const key = process.env.PAYU_MERCHANT_KEY || 'default_key';
    const salt = process.env.PAYU_MERCHANT_SALT || 'default_salt';

    // Reverse Hash formula: sha512(SALT|status||||||udf5|udf4|udf3|udf2|udf1|email|firstname|productinfo|amount|txnid|key)
    const calculatedHashString = `${salt}|${status}|||||||||||${email}|${firstname}|${productinfo}|${amount}|${txnid}|${key}`;
    const calculatedHash = crypto.createHash('sha512').update(calculatedHashString).digest('hex');

    if (calculatedHash.toLowerCase() !== hash.toLowerCase()) {
      console.error('PayU hash verification failed!', { calculated: calculatedHash, received: hash });
      res.status(400).send('Hash verification failed.');
      return;
    }

    if (status === 'success') {
      const booking = await Booking.findById(txnid);
      if (booking) {
        const wasAlreadyCompleted = booking.status === 'Completed';
        if (!wasAlreadyCompleted) {
          booking.status = 'Completed';
          await booking.save();
          
          // Award loyalty points & update rank
          await processCompletedTrek(booking.userId, booking.trekId);
        }
      }
    }

    // Redirect user back to profile page with payment status query param
    const redirectUrl = process.env.FRONTEND_URL 
      ? `${process.env.FRONTEND_URL}/profile?payment=success`
      : '/profile?payment=success';

    res.redirect(redirectUrl);
  } catch (error) {
    console.error('Error in PayU callback:', error);
    res.status(500).send('Internal server error processing payment.');
  }
};
