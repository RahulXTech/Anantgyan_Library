import mongoose from "mongoose";

const seatSchema = new mongoose.Schema({
  seatNo: Number,
  occupied: Boolean,
  student: String,
});

const roomSchema = new mongoose.Schema(
  {
    hall: String,
    roomName: String,
    timing: String,
    fee: Number,
    totalSeats: Number,
    status: String,
    seats: [seatSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Room", roomSchema);
