import { useState } from "react";

const Rooms = () => {
  const halls = ["Hall 1", "Hall 2", "Hall 3", "Hall 4"];
  const [activeHall, setActiveHall] = useState("Hall 1");

  // Dummy data (replace with backend later)
  const seats = Array.from({ length: 50 }, (_, i) => ({
    seatNo: i + 1,
    occupied: i % 3 === 0,
    student: i % 3 === 0 ? `Student ${i + 1}` : null,
  }));

  return (
    <div className="space-y-6">

      {/* Hall Buttons */}
      <div className="flex gap-3 flex-wrap">
        {halls.map((hall) => (
          <button
            key={hall}
            onClick={() => setActiveHall(hall)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition
              ${
                activeHall === hall
                  ? "bg-indigo-600 text-white shadow"
                  : "bg-white border text-slate-700 hover:bg-slate-100"
              }`}
          >
            {hall}
          </button>
        ))}
      </div>

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          {activeHall} – Seat Layout
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          🟢 Available seat &nbsp; | &nbsp; 🔴 Occupied seat (Student Assigned)
        </p>
      </div>

      {/* Seat Grid (UNCHANGED SIZE & STYLE) */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-3">

          {seats.map((seat) => (
            <div
              key={seat.seatNo}
              className={`rounded-lg h-16 flex flex-col items-center justify-center
                text-[12px] font-medium text-center leading-tight
                transition-all cursor-pointer
                ${
                  seat.occupied
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white hover:scale-105"
                }`}
            >
              {/* Seat Number */}
              <div className="text-[11px] opacity-90">
                Seat {seat.seatNo}
              </div>

              {/* Student Name / Available */}
              <div className="mt-1 px-1 truncate w-full">
                {seat.occupied ? seat.student : "Available"}
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Legend / Note (STYLE IMPROVED) */}
      <div className="flex gap-6 text-sm bg-slate-50 px-4 py-2 rounded-lg">
        <Legend color="bg-green-500" label="Available Seat" />
        <Legend color="bg-red-500" label="Occupied Seat" />
      </div>

    </div>
  );
};

export default Rooms;

/* ---------- Helper Component ---------- */

const Legend = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <div className={`w-4 h-4 rounded ${color}`} />
    <span className="text-slate-700 font-medium">{label}</span>
  </div>
);
