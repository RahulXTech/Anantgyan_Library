const Review = () => {
  // Dummy data (replace with backend later)
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      hall: "Hall 1",
      seat: "Seat 12",
      rating: 5,
      comment: "Very peaceful environment, perfect for long study hours.",
      status: "Approved",
      date: "10 Sep 2025",
    },
    {
      id: 2,
      name: "Ankit Kumar",
      hall: "Hall 2",
      seat: "Seat 27",
      rating: 4,
      comment: "Good seating and lighting. AC works well.",
      status: "Pending",
      date: "12 Sep 2025",
    },
    {
      id: 3,
      name: "Sudhir Sharma",
      hall: "Hall 3",
      seat: "Seat 8",
      rating: 3,
      comment: "Sometimes Wi-Fi is slow, otherwise fine.",
      status: "Pending",
      date: "14 Sep 2025",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          Student Reviews
        </h1>
        <p className="text-sm text-slate-500">
          Manage and monitor student feedback
        </p>
      </div>

      {/* Reviews Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="p-3 text-left">S.No</th>
              <th className="p-3 text-left">Student</th>
              <th className="p-3 text-left">Hall / Seat</th>
              <th className="p-3 text-left">Rating</th>
              <th className="p-3 text-left">Review</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {reviews.map((r, index) => (
              <tr key={r.id} className="border-t">
                <td className="p-3">{index + 1}</td>

                <td className="p-3 font-medium">{r.name}</td>

                <td className="p-3 text-slate-600">
                  {r.hall} • {r.seat}
                </td>

                <td className="p-3">
                  <Stars value={r.rating} />
                </td>

                <td className="p-3 text-slate-600 max-w-xs">
                  {r.comment}
                </td>

                <td className="p-3 text-slate-500">
                  {r.date}
                </td>

                <td className="p-3">
                  <StatusBadge status={r.status} />
                </td>

                <td className="p-3 space-x-3">
                  {r.status === "Pending" && (
                    <button className="text-green-600 font-medium hover:underline">
                      Approve
                    </button>
                  )}
                  <button className="text-red-600 font-medium hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Review;

/* ================= Helper Components ================= */

const Stars = ({ value }) => {
  return (
    <div className="flex gap-1 text-yellow-500">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= value ? "" : "text-slate-300"}>
          ★
        </span>
      ))}
    </div>
  );
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold
        ${
          status === "Approved"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
    >
      {status}
    </span>
  );
};
