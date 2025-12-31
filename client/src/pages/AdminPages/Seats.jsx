import { useState, useEffect } from "react";
import axios from "axios";

const Seats = () => {
  const [search, setSearch] = useState("");
  const [seats, setSeats] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [currentSeat, setCurrentSeat] = useState(null);

  const [form, setForm] = useState({
    roomId: "",
    seatNumber: "",
    student: "",
  });

  // Fetch all seats
  const fetchSeats = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/seats");
      setSeats(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch all rooms
  const fetchRooms = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/rooms");
      setRooms(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSeats();
    fetchRooms();
  }, []);

  // Filtered seats based on search
  const filteredSeats = seats.filter((seat) =>
    `${seat.room?.hall} ${seat.seatNumber} ${seat.student || ""}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Add seat
  const handleAddSeat = async () => {
    if (!form.roomId || !form.seatNumber) return alert("Fill all fields!");
    try {
      const res = await axios.post("http://localhost:5000/api/seats", {
        roomId: form.roomId,
        seatNumber: form.seatNumber,
        student: form.student || "",
      });

      // Immediately show in table
      setSeats((prev) => [
        ...prev,
        { ...res.data.seat, room: rooms.find((r) => r._id === form.roomId) },
      ]);

      // 🔥 FIX-5: ROOM collection me seat bhi add karo
      await axios.put("http://localhost:5000/api/rooms/assign-seat", {
        roomId: form.roomId,
        seatNo: form.seatNumber,
        student: form.student || "",
      });

      // 🔥 rooms refresh (hall RED/GREEN fix)
      fetchRooms();

      setShowAdd(false);
      setForm({ roomId: "", seatNumber: "", student: "" });
    } catch (err) {
      console.log(err);
    }
  };

  // Edit seat
  const handleEditSeat = async () => {
    if (!form.roomId || !form.seatNumber) return alert("Fill all fields!");
    try {
      const res = await axios.put(
        `http://localhost:5000/api/seats/${currentSeat._id}`,
        {
          roomId: form.roomId,
          seatNumber: form.seatNumber,
          student: form.student || "",
        }
      );

      setSeats((prev) =>
        prev.map((s) =>
          s._id === currentSeat._id
            ? {
                ...res.data.seat,
                room: rooms.find((r) => r._id === form.roomId),
              }
            : s
        )
      );

      setShowEdit(false);
      setCurrentSeat(null);
      setForm({ roomId: "", seatNumber: "", student: "" });
    } catch (err) {
      console.log(err);
    }
  };

  // Delete seat
  const handleDeleteSeat = async (seat) => {
    if (window.confirm("Are you sure to delete this seat?")) {
      await axios.delete(`http://localhost:5000/api/seats/${seat._id}`);
      setSeats((prev) => prev.filter((s) => s._id !== seat._id));
    }
  };

  // Assign / Unassign seat
  const toggleSeat = async (seat) => {
    try {
      if (seat.isBooked) {
        // ================= UNASSIGN SEAT (Seat collection) =================
        const res = await axios.put(
          `http://localhost:5000/api/seats/unbook/${seat._id}`
        );

        setSeats((prev) =>
          prev.map((s) =>
            s._id === seat._id ? { ...res.data.seat, room: s.room } : s
          )
        );

        // ================= FIX-4: Room ko bhi update karo =================
        await axios.put("http://localhost:5000/api/rooms/unassign-seat", {
          roomId: seat.room._id, // 👈 room id
          seatNo: seat.seatNumber, // 👈 seat number
        });

        fetchRooms(); // 🔥 IMPORTANT: rooms refresh (RED/GREEN fix)
      } else {
        const studentName = prompt(
          "Enter student name:",
          seat.student || "Assigned"
        );
        if (!studentName) return;

        // ================= ASSIGN SEAT (Seat collection) =================
        const res = await axios.put(
          `http://localhost:5000/api/seats/book/${seat._id}`,
          { student: studentName }
        );

        setSeats((prev) =>
          prev.map((s) =>
            s._id === seat._id ? { ...res.data.seat, room: s.room } : s
          )
        );

        // ================= FIX-4: Room ko bhi update karo =================
        await axios.put("http://localhost:5000/api/rooms/assign-seat", {
          roomId: seat.room._id, // 👈 room id
          seatNo: seat.seatNumber, // 👈 seat number
          student: studentName,
        });

        fetchRooms(); // 🔥 IMPORTANT: rooms refresh (RED/GREEN fix)
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Get available seat numbers for selected room
  const getAvailableSeats = (roomId) => {
    if (!roomId) return [];
    const room = rooms.find((r) => r._id === roomId);
    if (!room) return [];

    const existingSeats = seats
      .filter((s) => s.room?._id === roomId)
      .map((s) => s.seatNumber);

    const numbers = [];
    for (let i = 1; i <= room.totalSeats; i++) {
      if (!existingSeats.includes(i.toString())) numbers.push(i.toString());
    }
    return numbers;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Seat Management
          </h1>
          <p className="text-sm text-slate-500">
            Search by hall, seat number, or student name
          </p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          + Add Seat
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow p-4">
        <input
          type="text"
          placeholder="🔍 Search by Hall / Seat / Student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 text-sm"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="p-3 text-left">Hall</th>
              <th className="p-3 text-left">Seat No</th>
              <th className="p-3 text-left">Student</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredSeats.length > 0 ? (
              filteredSeats.map((seat) => (
                <tr key={seat._id} className="border-t">
                  <td className="p-3 font-medium">{seat.room?.hall}</td>
                  <td className="p-3">{seat.seatNumber}</td>
                  <td className="p-3 text-slate-600">{seat.student || "—"}</td>
                  <td className="p-3">
                    <StatusBadge
                      status={seat.isBooked ? "Occupied" : "Available"}
                    />
                  </td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => toggleSeat(seat)}
                      className={`font-medium hover:underline ${
                        seat.isBooked ? "text-green-600" : "text-yellow-600"
                      }`}
                    >
                      {seat.isBooked ? "Unassign" : "Assign"}
                    </button>
                    <button
                      onClick={() => {
                        setCurrentSeat(seat);
                        setForm({
                          roomId: seat.room?._id || "",
                          seatNumber: seat.seatNumber,
                          student: seat.student,
                        });
                        setShowEdit(true);
                      }}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteSeat(seat)}
                      className="font-medium text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-6 text-center text-slate-500">
                  No matching seats found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {(showAdd || showEdit) && (
        <SeatModal
          form={form}
          setForm={setForm}
          onClose={() => {
            setShowAdd(false);
            setShowEdit(false);
            setCurrentSeat(null);
          }}
          onSubmit={showAdd ? handleAddSeat : handleEditSeat}
          rooms={rooms}
          getAvailableSeats={getAvailableSeats}
        />
      )}
    </div>
  );
};

export default Seats;

// ---------- Seat Modal ----------
const SeatModal = ({
  form,
  setForm,
  onClose,
  onSubmit,
  rooms,
  getAvailableSeats,
}) => {
  const availableSeats = getAvailableSeats(form.roomId);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-96 space-y-4">
        <h2 className="text-lg font-semibold">Seat</h2>

        <select
          className="w-full border rounded-lg px-3 py-2"
          value={form.roomId}
          onChange={(e) =>
            setForm({ ...form, roomId: e.target.value, seatNumber: "" })
          }
        >
          <option value="">Select Room</option>
          {rooms.map((r) => (
            <option key={r._id} value={r._id}>
              {r.hall} – {r.roomName}
            </option>
          ))}
        </select>

        <select
          className="w-full border rounded-lg px-3 py-2 mt-2"
          value={form.seatNumber}
          onChange={(e) => setForm({ ...form, seatNumber: e.target.value })}
        >
          <option value="">Select Seat Number</option>
          {availableSeats.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Student Name (optional)"
          value={form.student}
          onChange={(e) => setForm({ ...form, student: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 mt-2"
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 border rounded-lg">
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const StatusBadge = ({ status }) => (
  <span
    className={`px-3 py-1 rounded-full text-xs font-semibold ${
      status === "Available"
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    {status}
  </span>
);
