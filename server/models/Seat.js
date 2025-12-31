import mongoose from "mongoose";

const seatSchema = new mongoose.Schema(
  {
    seatNumber: {
      type: String,
      required: true,
      trim: true
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true
    },
    isBooked: {
      type: Boolean,
      default: false
    },
    student: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

export default mongoose.model("Seat", seatSchema);
