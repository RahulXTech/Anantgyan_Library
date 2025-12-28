import React from 'react'

function RoomSectoin() {
  return (
    <>
        <section className="p-6">
  <h2 className="text-2xl font-semibold text-slate-800 mb-6">
    Library Rooms – Anantgyan Library
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

    {/* Room 1 */}
    <div className="rounded-xl border bg-white shadow-sm hover:shadow-lg transition">
      <div className="p-5">
        <h3 className="text-lg font-semibold text-indigo-600">
          Room 1 – Morning Batch
        </h3>

        <p className="text-sm text-slate-500 mt-1">
          ⏰ 7:00 AM – 3:00 PM (8 Hrs)
        </p>

        <p className="mt-3 text-slate-700 font-medium">
          💰 Fee: ₹500 / Month
        </p>

        <p className="text-sm text-slate-500 mt-1">
          🪑 Seats: 30 (Example)
        </p>

        <button className="mt-4 w-full py-2 rounded-lg bg-green-100 text-green-700 font-medium">
          Available
        </button>
      </div>
    </div>

    {/* Room 2 */}
    <div className="rounded-xl border bg-white shadow-sm hover:shadow-lg transition">
      <div className="p-5">
        <h3 className="text-lg font-semibold text-indigo-600">
          Room 2 – Evening Batch
        </h3>

        <p className="text-sm text-slate-500 mt-1">
          ⏰ 3:00 PM – 11:00 PM (8 Hrs)
        </p>

        <p className="mt-3 text-slate-700 font-medium">
          💰 Fee: ₹500 / Month
        </p>

        <p className="text-sm text-slate-500 mt-1">
          🪑 Seats: 28
        </p>

        <button className="mt-4 w-full py-2 rounded-lg bg-green-100 text-green-700 font-medium">
          Available
        </button>
      </div>
    </div>

    {/* Room 3 */}
    <div className="rounded-xl border bg-white shadow-sm hover:shadow-lg transition">
      <div className="p-5">
        <h3 className="text-lg font-semibold text-indigo-600">
          Room 3 – Long Hours
        </h3>

        <p className="text-sm text-slate-500 mt-1">
          ⏰ 7:00 AM – 11:00 PM (16 Hrs)
        </p>

        <p className="mt-3 text-slate-700 font-medium">
          💰 Fee: ₹800 / Month
        </p>

        <p className="text-sm text-slate-500 mt-1">
          🪑 Seats: 25
        </p>

        <button className="mt-4 w-full py-2 rounded-lg bg-yellow-100 text-yellow-700 font-medium">
          Limited Seats
        </button>
      </div>
    </div>

    {/* Room 4 */}
    <div className="rounded-xl border bg-white shadow-sm hover:shadow-lg transition">
      <div className="p-5">
        <h3 className="text-lg font-semibold text-indigo-600">
          Room 4 – 24×7 Room
        </h3>

        <p className="text-sm text-slate-500 mt-1">
          ⏰ 24 Hours × 7 Days
        </p>

        <p className="mt-3 text-slate-700 font-medium">
          💰 Fee: ₹1600 / Month
        </p>

        <p className="text-sm text-slate-500 mt-1">
          🪑 Seats: 20
        </p>

        <button className="mt-4 w-full py-2 rounded-lg bg-red-100 text-red-700 font-medium">
          Full
        </button>
      </div>
    </div>

  </div>
</section>

    </>
  )
}

export default RoomSectoin