import Room from "../models/Room.js";
import Seat from "../models/Seat.js";

/* ================= CREATE ROOM ================= */
export const createRoom = async (req, res) => {
  try {
    const { hall, roomName, timing, fee, totalSeats } = req.body;

    if (!hall || !roomName || !timing || !fee || !totalSeats) {
      return res.status(400).json({ message: "All fields required" });
    }

    // 🔹 Room document ke liye embedded seats
    const seats = [];
    for (let i = 1; i <= totalSeats; i++) {
      seats.push({ seatNo: i, occupied: false, student: "" });
    }

    // 🔹 Create Room
    const room = await Room.create({
      hall,
      roomName,
      timing,
      fee,
      totalSeats,
      status: "Available",
      seats,
    });

    // 🔥 IMPORTANT: Seat collection me bhi seats create karo
    for (let i = 1; i <= totalSeats; i++) {
      await Seat.create({
        seatNumber: i.toString(),
        room: room._id,
        isBooked: false,
        student: "",
      });
    }

    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* ================= GET ALL ROOMS ================= */
export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* ================= GET ROOM BY ID ================= */
export const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: "Room not found" });
    res.json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* ================= ASSIGN SEAT ================= */
export const assignSeat = async (req, res) => {
  try {
    const { roomId, seatNo, student } = req.body;

    const room = await Room.findById(roomId);
    if (!room) return res.status(404).json({ message: "Room not found" });

    const seat = room.seats.find((s) => s.seatNo === Number(seatNo));
    if (!seat) return res.status(404).json({ message: "Seat not found" });

    seat.occupied = true;
    seat.student = student;
    room.status = "Occupied";

    await room.save();
    res.json(room);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ================= UNASSIGN SEAT ================= */
export const unassignSeat = async (req, res) => {
  try {
    const { roomId, seatNo } = req.body;

    const room = await Room.findById(roomId);
    if (!room) return res.status(404).json({ message: "Room not found" });

    const seat = room.seats.find((s) => s.seatNo === Number(seatNo));
    if (!seat) return res.status(404).json({ message: "Seat not found" });

    seat.occupied = false;
    seat.student = "";

    room.status = room.seats.some((s) => s.occupied)
      ? "Occupied"
      : "Available";

    await room.save();
    res.json(room);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ================= UPDATE ROOM ================= */
export const updateRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const { hall, roomName, timing, fee, totalSeats } = req.body;

    const room = await Room.findById(id);
    if (!room) return res.status(404).json({ message: "Room not found" });

    room.hall = hall;
    room.roomName = roomName;
    room.timing = timing;
    room.fee = fee;

    // 🔹 Agar totalSeats change hue
    if (totalSeats !== room.totalSeats) {
      const seats = [];
      for (let i = 1; i <= totalSeats; i++) {
        const existing = room.seats.find((s) => s.seatNo === i);
        seats.push(existing || { seatNo: i, occupied: false, student: "" });
      }
      room.totalSeats = totalSeats;
      room.seats = seats;
    }

    room.status = room.seats.some((s) => s.occupied)
      ? "Occupied"
      : "Available";

    await room.save();
    res.json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* ================= DELETE ROOM ================= */
export const deleteRoom = async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);

    // 🔥 Optional but recommended: Seat collection bhi clean
    await Seat.deleteMany({ room: req.params.id });

    res.json({ message: "Room deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
