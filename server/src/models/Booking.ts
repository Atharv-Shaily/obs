import { Schema, model, Document, Types } from 'mongoose';

export interface IBooking extends Document {
  userId: Types.ObjectId;
  trekId: Types.ObjectId;
  status: 'Pending' | 'Completed' | 'Cancelled';
}

const BookingSchema = new Schema<IBooking>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    trekId: {
      type: Schema.Types.ObjectId,
      ref: 'Trek',
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Completed', 'Cancelled'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

/**
 * Partial unique index: enforces that a user can have at most one ACTIVE
 * (Pending or Completed) booking per trek. Cancelled bookings are excluded
 * from this index, so a user can re-book the same trek after cancellation.
 */
BookingSchema.index(
  { userId: 1, trekId: 1 },
  {
    unique: true,
    partialFilterExpression: { status: { $in: ['Pending', 'Completed'] } },
    name: 'unique_active_booking_per_user_trek',
  }
);

const Booking = model<IBooking>('Booking', BookingSchema);

export default Booking;
