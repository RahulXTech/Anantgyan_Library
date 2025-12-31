import React, { useState, useEffect } from "react";

const Students = () => {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [form, setForm] = useState({
    _id: null,
    name: "",
    room: "",
    seat: "",
    expiry: "",
    mobile: "",
    email: "",
  });

  const [data, setData] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [availableSeats, setAvailableSeats] = useState([]);

  // ================= INITIAL LOAD =================
  useEffect(() => {
    fetchStudents();
    fetchRooms();
  }, []);

  // ================= FETCH STUDENTS =================
  const fetchStudents = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/students", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const students = await res.json();
      const formatted = students.map((s) => ({
        _id: s._id,
        name: s.name || "",
        room: s.room || "",
        seat: s.seatNumber || "",
        expiry: s.expiry || "",
        mobile: s.mobile || "",
        email: s.email || "",
      }));
      setData(formatted);
    } catch (err) {
      console.error(err);
    }
  };

  // ================= FETCH ROOMS =================
  const fetchRooms = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/rooms", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const roomsData = await res.json();
      setRooms(roomsData);
    } catch (err) {
      console.error(err);
    }
  };

  // ================= FETCH SEATS WHEN ROOM CHANGES =================
  useEffect(() => {
    if (!form.room) {
      setAvailableSeats([]);
      return;
    }

    const fetchSeats = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/seats/room/${form.room}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const seats = await res.json();
        const freeSeats = seats.filter((s) => !s.isBooked);
        setAvailableSeats(freeSeats);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSeats();
  }, [form.room]);

  // ================= SEARCH =================
  const filtered = data.filter((s) =>
    Object.values(s).some((v) =>
      v?.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  // ================= DELETE =================
  const handleDelete = async (index) => {
    if (!window.confirm("Delete student?")) return;

    try {
      const student = data[index];
      await fetch(`http://localhost:5000/api/students/${student._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const updated = [...data];
      updated.splice(index, 1);
      setData(updated);
    } catch (err) {
      console.error(err);
    }
  };

  // ================= EDIT =================
  const handleEdit = (student, index) => {
    setEditIndex(index);
    setForm({ ...student });
  };

  // ================= CREATE / UPDATE =================
  const handleUpdate = async () => {
    try {
      const payload = {
        name: form.name,
        email: form.email,
        room: form.room,
        seatNumber: form.seat,
        expiry: form.expiry,
        mobile: form.mobile,
      };

      if (!form._id) {
        // ➕ CREATE STUDENT
        const res = await fetch("http://localhost:5000/api/students", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(payload),
        });
        const saved = await res.json();
        setData([
          ...data,
          {
            _id: saved._id,
            ...form,
          },
        ]);
      } else {
        // ✏️ UPDATE STUDENT
        const res = await fetch(
          `http://localhost:5000/api/students/${form._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(payload),
          }
        );
        const updated = await res.json();
        const newData = [...data];
        newData[editIndex] = {
          _id: updated._id,
          name: updated.name,
          room: updated.room,
          seat: updated.seatNumber,
          expiry: updated.expiry,
          mobile: updated.mobile,
          email: updated.email,
        };
        setData(newData);
      }

      setEditIndex(null);
    } catch (err) {
      console.error(err);
    }
  };

  // ================= UI =================
  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow px-4 py-3 flex items-center gap-3">
          <button
            className="md:hidden text-xl"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <input
            type="text"
            placeholder="Search students..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full max-w-sm"
          />
        </header>

        <div className="p-4">
          <button
            onClick={() =>
              handleEdit(
                {
                  _id: null,
                  name: "",
                  room: "",
                  seat: "",
                  expiry: "",
                  mobile: "",
                  email: "",
                },
                data.length
              )
            }
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            ➕ Create Student
          </button>
        </div>

        <div className="px-4 pb-6 overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow text-sm">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "Name",
                  "Room",
                  "Seat",
                  "Expiry",
                  "Mobile",
                  "Email",
                  "Actions",
                ].map((h) => (
                  <th key={h} className="p-3 text-left">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((s, i) => (
                <tr key={s._id} className="border-t">
                  <td className="p-3">{s.name}</td>
                  <td className="p-3">{s.room}</td>
                  <td className="p-3">{s.seat}</td>
                  <td className="p-3">{s.expiry}</td>
                  <td className="p-3">{s.mobile}</td>
                  <td className="p-3">{s.email}</td>
                  <td className="p-3 space-x-3">
                    <button
                      className="text-blue-600"
                      onClick={() => handleEdit(s, i)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600"
                      onClick={() => handleDelete(i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {editIndex !== null && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-3">
            <input
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border p-2 w-full rounded"
            />

            {/* ROOM DROPDOWN */}
            <select
              value={form.room}
              onChange={(e) =>
                setForm({ ...form, room: e.target.value, seat: "" })
              }
              className="border p-2 w-full rounded"
            >
              <option value="">Select Room</option>
              {rooms.map((r) => (
                <option key={r._id} value={r._id}>
                  {r.hall} - {r.roomName}
                </option>
              ))}
            </select>

            {/* SEAT DROPDOWN */}
            <select
              value={form.seat}
              onChange={(e) => setForm({ ...form, seat: e.target.value })}
              className="border p-2 w-full rounded"
            >
              <option value="">Select Seat</option>
              {availableSeats.map((s) => (
                <option key={s._id} value={s.seatNumber}>
                  Seat {s.seatNumber}
                </option>
              ))}
            </select>

            <input
              placeholder="Expiry"
              value={form.expiry}
              onChange={(e) => setForm({ ...form, expiry: e.target.value })}
              className="border p-2 w-full rounded"
            />
            <input
              placeholder="Mobile"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              className="border p-2 w-full rounded"
            />
            <input
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border p-2 w-full rounded"
            />

            <div className="flex justify-end gap-3 pt-3">
              <button onClick={() => setEditIndex(null)}>Cancel</button>
              <button
                onClick={handleUpdate}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;
