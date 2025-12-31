import mongoose from "mongoose";
import Student from "../models/Student.js";
import Seat from "../models/Seat.js";
import Room from "../models/Room.js";

export const addStudent = async (req, res) => {
  try {
    const { name, email, seatNumber, room, expiry, mobile } = req.body;

    if (!name || !email || !seatNumber || !room) {
      return res.status(400).json({ message: "All fields required" });
    }

    const roomObjId = new mongoose.Types.ObjectId(room);

    // ✅ Book seat
    const seat = await Seat.findOneAndUpdate(
      { seatNumber, room: roomObjId, isBooked: false },
      { isBooked: true, student: name },
      { new: true }
    );

    if (!seat) {
      return res.status(400).json({ message: "Seat already booked" });
    }

    // ✅ Create student
    const student = await Student.create({
      name,
      email,
      seatNumber,
      room: roomObjId,
      expiry,
      mobile,
    });

    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📥 READ
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✏️ UPDATE STUDENT
export const updateStudent = async (req, res) => {
  try {
    const prev = await Student.findById(req.params.id);
    if (!prev) return res.status(404).json({ message: "Student not found" });

    const newRoom = new mongoose.Types.ObjectId(req.body.room);

    // 🟡 seat changed
    if (prev.seatNumber !== req.body.seatNumber) {
      // old seat free
      await Seat.findOneAndUpdate(
        { seatNumber: prev.seatNumber, room: prev.room },
        { isBooked: false, student: "" }
      );

      // new seat book
      await Seat.findOneAndUpdate(
        { seatNumber: req.body.seatNumber, room: newRoom },
        { isBooked: true, student: req.body.name }
      );
    }

    const updated = await Student.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        room: newRoom,
      },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ❌ DELETE STUDENT
export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Not found" });

    await Seat.findOneAndUpdate(
      { seatNumber: student.seatNumber, room: student.room },
      { isBooked: false, student: "" }
    );

    await Student.findByIdAndDelete(req.params.id);

    res.json({ message: "Student deleted & seat freed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
