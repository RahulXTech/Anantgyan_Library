import { useState, useEffect } from "react";
import axios from "axios";


const Rooms = () => {
  const halls = ["Hall 1", "Hall 2", "Hall 3", "Hall 4"];
  const [activeHall, setActiveHall] = useState("Hall 1");
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [form, setForm] = useState({ hall: "", roomName: "", timing: "", fee: "", totalSeats: "" });

  // Fetch all rooms
 const fetchRooms = async () => {
  const res = await axios.get("http://localhost:5000/api/rooms");
  setRooms(res.data);

  // 🔥 FIX: selectedRoom ko fresh data se sync karo
  if (selectedRoom?._id) {
    const updated = res.data.find((r) => r._id === selectedRoom._id);
    if (updated) setSelectedRoom(updated);
  }
};

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleAddRoom = async () => {
    if (!form.hall || !form.roomName || !form.timing || !form.fee || !form.totalSeats)
      return alert("All fields required");

    await axios.post("http://localhost:5000/api/rooms", form);
    setForm({ hall: "", roomName: "", timing: "", fee: "", totalSeats: "" });
    setShowAdd(false);
    fetchRooms();
  };

  const handleEditRoom = async () => {
    await axios.put(`http://localhost:5000/api/rooms/${selectedRoom._id}`, form);
    setShowEdit(false);
    setSelectedRoom(null);
    fetchRooms();
  };

  const handleDeleteRoom = async (room) => {
    if (window.confirm("Are you sure to delete this room?")) {
      await axios.delete(`http://localhost:5000/api/rooms/${room._id}`);
      fetchRooms();
    }
  };

  // Rooms filtered by active hall
  const hallRooms = rooms.filter((r) => r.hall === activeHall);

  return (
    <div className="space-y-6">

      {/* Hall Buttons */}
      <div className="flex gap-3 flex-wrap">
        {halls.map((hall) => (
          <button
            key={hall}
            onClick={() => {
              setActiveHall(hall);
              setSelectedRoom(null);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              activeHall === hall
                ? "bg-indigo-600 text-white shadow"
                : "bg-white border text-slate-700 hover:bg-slate-100"
            }`}
          >
            {hall}
          </button>
        ))}
      </div>

      {/* Add Room Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowAdd(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          + Add Room
        </button>
      </div>

      {/* Room Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {hallRooms.map((room) => (
          <div
            key={room._id}
            className={`p-4 rounded-lg shadow cursor-pointer border ${
              room.seats.some((s) => s.occupied) ? "bg-red-200" : "bg-green-200"
            }`}
            onClick={() => setSelectedRoom(room)}
          >
            <h2 className="text-lg font-semibold">{room.roomName}</h2>
            <p>Total Seats: {room.totalSeats}</p>
            <p>Timing: {room.timing}</p>
            <p>Fee: ₹{room.fee}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedRoom(room);
                  setForm({
                    hall: room.hall,
                    roomName: room.roomName,
                    timing: room.timing,
                    fee: room.fee,
                    totalSeats: room.totalSeats,
                  });
                  setShowEdit(true);
                }}
                className="px-2 py-1 text-sm bg-blue-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteRoom(room);
                }}
                className="px-2 py-1 text-sm bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Room Seats */}
      {selectedRoom && (
        <div className="mt-6 bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold">{selectedRoom.roomName} – Seats</h2>
          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-3 mt-4">
            {selectedRoom.seats.map((seat) => (
              <div
                key={seat.seatNo}
                className={`rounded-lg h-16 flex flex-col items-center justify-center text-[12px] font-medium text-center leading-tight ${
                  seat.occupied ? "bg-red-500 text-white" : "bg-green-500 text-white hover:scale-105"
                }`}
              >
                <div className="text-[11px] opacity-90">Seat {seat.seatNo}</div>
                <div className="mt-1 px-1 truncate w-full">{seat.occupied ? seat.student : "Available"}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add/Edit Modal */}
      {(showAdd || showEdit) && (
        <RoomModal
          form={form}
          setForm={setForm}
          onClose={() => {
            setShowAdd(false);
            setShowEdit(false);
            setSelectedRoom(null);
          }}
          onSubmit={showAdd ? handleAddRoom : handleEditRoom}
        />
      )}
    </div>
  );
};

export default Rooms;

// ---------- Room Modal ----------
const RoomModal = ({ form, setForm, onClose, onSubmit }) => (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-6 w-96 space-y-4">
      <h2 className="text-lg font-semibold">Room</h2>
      <input
        type="text"
        placeholder="Hall"
        value={form.hall}
        onChange={(e) => setForm({ ...form, hall: e.target.value })}
        className="w-full border rounded-lg px-3 py-2"
      />
      <input
        type="text"
        placeholder="Room Name"
        value={form.roomName}
        onChange={(e) => setForm({ ...form, roomName: e.target.value })}
        className="w-full border rounded-lg px-3 py-2"
      />
      <input
        type="text"
        placeholder="Timing"
        value={form.timing}
        onChange={(e) => setForm({ ...form, timing: e.target.value })}
        className="w-full border rounded-lg px-3 py-2"
      />
      <input
        type="number"
        placeholder="Fee"
        value={form.fee}
        onChange={(e) => setForm({ ...form, fee: e.target.value })}
        className="w-full border rounded-lg px-3 py-2"
      />
      <input
        type="number"
        placeholder="Total Seats"
        value={form.totalSeats}
        onChange={(e) => setForm({ ...form, totalSeats: e.target.value })}
        className="w-full border rounded-lg px-3 py-2"
      />
      <div className="flex justify-end gap-3">
        <button onClick={onClose} className="px-4 py-2 border rounded-lg">
          Cancel
        </button>
        <button onClick={onSubmit} className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
          Save
        </button>
      </div>
    </div>
  </div>
);
