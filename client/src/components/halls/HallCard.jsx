import React from "react";
import HallHeader from "./HallHeader";
import HallSeats from "./HallSeats";
import Legend from "../common/Legend";

export default function HallCard({ title, seats }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <HallHeader title={title} />
      <HallSeats seats={seats} />
      <Legend />
    </div>
  );
}
