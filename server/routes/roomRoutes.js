import express from "express";
import {
  createRoom,
  getRooms,
  getRoomById,
  assignSeat,
  unassignSeat,
  updateRoom,
  deleteRoom,
} from "../controllers/roomController.js";

const router = express.Router();

router.post("/", createRoom);
router.get("/", getRooms);
router.get("/:id", getRoomById);
router.put("/assign-seat", assignSeat);
router.put("/unassign-seat", unassignSeat);
router.put("/:id", updateRoom);
router.delete("/:id", deleteRoom);

export default router;
