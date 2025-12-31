import express from "express";
import {
  createSeat,
  getSeats,
  getSeatsByRoom,
  bookSeat,
  unbookSeat,
  deleteSeat
} from "../controllers/seatController.js";

const router = express.Router();

router.post("/", createSeat);                 // Create seat
router.get("/", getSeats);                    // All seats
router.get("/room/:roomId", getSeatsByRoom);  // Seats by room
router.get("/rooms/:roomId", getSeatsByRoom);
router.put("/book/:id", bookSeat);            // Book seat
router.put("/unbook/:id", unbookSeat);        // Unbook seat
router.delete("/:id", deleteSeat);             // Delete seat

export default router;
