

import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true
    },
    message: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);
