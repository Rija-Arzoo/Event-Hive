import mongoose from 'mongoose';

const seatSchema = new mongoose.Schema(
  {
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
      required: [true, 'A seat must belong to a specific event'],
      index: true // Indexed because we will constantly query seats by event ID
    },
    seatNumber: {
      type: String,
      required: [true, 'Seat number is required (e.g., A-12)']
    },
    price: {
      type: Number,
      required: [true, 'Seat price is required']
    },
    status: {
      type: String,
      enum: ['available', 'locked', 'booked'],
      default: 'available'
    },
    // Track who is holding the seat temporarily during checkout
    lockedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null
    },
    lockExpiresAt: {
      type: Date,
      default: null
    }
  },
  { timestamps: true }
);

// Compound index: Ensures that a single seat number cannot exist twice within the SAME event
seatSchema.index({ event: 1, seatNumber: 1 }, { unique: true });

const Seat = mongoose.model('Seat', seatSchema);
export default Seat;