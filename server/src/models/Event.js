import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Event title is required'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Event description is required']
    },
    date: {
      type: Date,
      required: [true, 'Event date and time are required']
    },
    venue: {
      type: String,
      required: [true, 'Venue location is required']
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'An event must be assigned to an organizer'],
      index: true
    },
    isApproved: {
      type: Boolean,
      default: false // Admins must approve an event before it goes live on the platform
    }
  },
  { timestamps: true }
);

const Event = mongoose.model('Event', eventSchema);
export default Event;