import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    room: { type: String, required: true },

    // backend naming
    seatNumber: { type: String, required: true },

    // frontend compatibility ke liye optional
    expiry: { type: String },
    mobile: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
