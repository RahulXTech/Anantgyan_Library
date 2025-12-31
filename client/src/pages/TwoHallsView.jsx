import React from "react";
import HallCard from "../components/halls/HallCard";
import { generateSeats } from "../data/seatData";

export default function TwoHallsView() {
  return (
    <section className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            Anantgyan Library – Live Hall View
          </h1>
          <p className="text-gray-600 mt-2">
            Check seat availability in multiple halls
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <HallCard
            title="Hall 1 – Silent Study Zone"
            seats={generateSeats()}
          />
          <HallCard
            title="Hall 2 – AC Study Hall"
            seats={generateSeats()}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          <HallCard
            title="Hall 3 – Silent Study Zone"
            seats={generateSeats()}
          />
          <HallCard
            title="Hall 4 – AC Study Hall"
            seats={generateSeats()}
          />
        </div>

      </div>
    </section>
  );
}
