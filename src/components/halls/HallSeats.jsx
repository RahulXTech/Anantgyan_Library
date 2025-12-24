import React from "react";
import Seat from "./Seat";

export default function HallSeats({ seats }) {
  const rows = Array.from({ length: 10 }, (_, i) =>
    seats.slice(i * 5, i * 5 + 5)
  );

  return (
    <div className="flex flex-col items-center gap-3">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex gap-3"
          style={{ transform: `scale(${1 + rowIndex * 0.025})` }}
        >
          {row.map((occupied, seatIndex) => (
            <Seat
              key={seatIndex}
              number={rowIndex * 5 + seatIndex + 1}
              occupied={occupied}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
