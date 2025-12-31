import cron from "node-cron";
import Room from "../models/Room.js";

cron.schedule("0 0 * * *", async () => {
  const rooms = await Room.find();
  rooms.forEach(room => {
    room.seats.forEach(seat => seat.isBooked = false);
    room.save();
  });
  console.log("Seats reset");
});
