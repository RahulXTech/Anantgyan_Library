import { useState } from "react";

const Seats = () => {
  const [search, setSearch] = useState("");

  // Dummy data (replace with backend later)
  const seats = [
    { id: 1, hall: "Hall 1", seatNo: "S-01", status: "Available", student: null },
    { id: 2, hall: "Hall 1", seatNo: "S-02", status: "Occupied", student: "Rahul Sharma" },
    { id: 3, hall: "Hall 2", seatNo: "S-15", status: "Occupied", student: "Ankit Kumar" },
    { id: 4, hall: "Hall 3", seatNo: "S-08", status: "Blocked", student: null },
    { id: 5, hall: "Hall 4", seatNo: "S-22", status: "Available", student: null },
  ];

  // 🔍 Filter logic
  const filteredSeats = seats.filter((seat) =>
    `${seat.hall} ${seat.seatNo} ${seat.student || ""}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          Seat Management
        </h1>
        <p className="text-sm text-slate-500">
          Search by hall, seat number, or student name
        </p>
      </div>

      {/* Search Box */}
      <div className="bg-white rounded-xl shadow p-4">
        <input
          type="text"
          placeholder="🔍 Search by Hall / Seat / Student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Seats Table */}
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
                <tr key={seat.id} className="border-t">
                  <td className="p-3 font-medium">{seat.hall}</td>
                  <td className="p-3">{seat.seatNo}</td>
                  <td className="p-3 text-slate-600">
                    {seat.student || "—"}
                  </td>
                  <td className="p-3">
                    <StatusBadge status={seat.status} />
                  </td>
                  <td className="p-3 space-x-3">
                    {seat.status !== "Blocked" ? (
                      <button className="text-yellow-600 hover:underline font-medium">
                        Block
                      </button>
                    ) : (
                      <button className="text-green-600 hover:underline font-medium">
                        Unblock
                      </button>
                    )}
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

    </div>
  );
};

export default Seats;

/* ================= Status Badge ================= */

const StatusBadge = ({ status }) => (
  <span
    className={`px-3 py-1 rounded-full text-xs font-semibold
      ${
        status === "Available"
          ? "bg-green-100 text-green-700"
          : status === "Occupied"
          ? "bg-red-100 text-red-700"
          : "bg-slate-200 text-slate-700"
      }`}
  >
    {status}
  </span>
);
