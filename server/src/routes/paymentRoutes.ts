import { Router } from 'express';
import authGuard from '../middlewares/authGuard';
import { initiatePayment, payuCallback } from '../controllers/paymentController';

const paymentRouter = Router();

// Route to initiate a payment (generates PayU parameters & signature hash)
// Requires a valid JWT token
paymentRouter.post('/initiate', authGuard, initiatePayment);

// Route for PayU callback/webhook (server-to-server POST from PayU)
// MUST BE PUBLIC so that PayU servers can send transaction notifications
paymentRouter.post('/payu-callback', payuCallback);

export default paymentRouter;
