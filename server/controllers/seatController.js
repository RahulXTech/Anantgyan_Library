import Seat from "../models/Seat.js";
import Room from "../models/Room.js";
import mongoose from "mongoose";

/* ================= CREATE SEAT ================= */
export const createSeat = async (req, res) => {
  try {
    const { seatNumber, roomId, student } = req.body; // ✅ student added

    if (!seatNumber || !roomId) {
      return res.status(400).json({ message: "seatNumber & roomId required" });
    }

    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    // optional: duplicate seat check
    const alreadyExists = await Seat.findOne({ room: roomId, seatNumber });
    if (alreadyExists) {
      return res.status(400).json({ message: "Seat already exists in this room" });
    }

    const seat = await Seat.create({
      seatNumber,
     room: mongoose.Types.ObjectId(roomId), // ✅ ensure ObjectId
      student: student || "",
      isBooked: student ? true : false
    });

    res.status(201).json({
      message: "Seat created successfully",
      seat
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


/* ================= GET ALL SEATS ================= */
export const getSeats = async (req, res) => {
  try {
    const seats = await Seat.find().populate("room", "roomName hall");
    res.json(seats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* ================= GET SEATS BY ROOM ================= */
export const getSeatsByRoom = async (req, res) => {
  try {
    const { roomId } = req.params;

     //old code
    // const seats = await Seat.find({ room: roomId });

  //fixed code
    if (!mongoose.Types.ObjectId.isValid(roomId)) {
      return res.status(400).json({ message: "Invalid room ID" });
    }

    const seats = await Seat.find({ room: new mongoose.Types.ObjectId(roomId) });
    res.json(seats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* ================= BOOK SEAT ================= */
export const bookSeat = async (req, res) => {
  try {
    const { id } = req.params;
    const { student } = req.body;

    const seat = await Seat.findById(id);
    if (!seat) return res.status(404).json({ message: "Seat not found" });

    if (seat.isBooked) {
      return res.status(400).json({ message: "Seat already booked" });
    }

    seat.isBooked = true;
    seat.student = student || "Assigned";

    await seat.save();

    res.json({ message: "Seat booked successfully", seat });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* ================= UNBOOK SEAT ================= */
export const unbookSeat = async (req, res) => {
  try {
    const { id } = req.params;

    const seat = await Seat.findById(id);
    if (!seat) return res.status(404).json({ message: "Seat not found" });

    seat.isBooked = false;
    seat.student = "";

    await seat.save();

    res.json({ message: "Seat unbooked successfully", seat });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* ================= DELETE SEAT ================= */
export const deleteSeat = async (req, res) => {
  try {
    const { id } = req.params;

    const seat = await Seat.findByIdAndDelete(id);
    if (!seat) {
      return res.status(404).json({ message: "Seat not found" });
    }

    res.json({ message: "Seat deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
