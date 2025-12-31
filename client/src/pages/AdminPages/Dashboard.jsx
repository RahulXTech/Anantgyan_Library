const Dashboard = () => {
  return (
    <div className="space-y-6">

      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h1>
        <p className="text-sm text-slate-500">
          Library overview & statistics
        </p>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Total Students"
          value="120"
          icon="👨‍🎓"
          color="from-indigo-500 to-indigo-700"
        />

        <StatCard
          title="Total Seats"
          value="150"
          icon="🪑"
          color="from-blue-500 to-blue-700"
        />

        <StatCard
          title="Available Seats"
          value="30"
          icon="✅"
          color="from-green-500 to-green-700"
        />

        <StatCard
          title="Occupied Seats"
          value="120"
          icon="❌"
          color="from-red-500 to-red-700"
        />

      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Payment Status */}
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="font-semibold text-slate-700 mb-4">
            💳 Payment Status
          </h2>

          <div className="space-y-3 text-sm">
            <Row label="Paid Students" value="95" />
            <Row label="Pending Payments" value="25" danger />
            <Row label="Total Collection" value="₹78,000" />
          </div>
        </div>

        {/* Expiry Alerts */}
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="font-semibold text-slate-700 mb-4">
            ⏰ Expiry Alerts
          </h2>

          <div className="space-y-3 text-sm">
            <Row label="Expiring Today" value="3" danger />
            <Row label="Expiring in 7 Days" value="8" warning />
            <Row label="Expired" value="2" danger />
          </div>
        </div>

      </div>

      {/* Room Overview */}
      <div className="bg-white rounded-xl shadow p-5">
        <h2 className="font-semibold text-slate-700 mb-4">
          🏠 Room Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">

          <RoomCard room="Room 1" total="40" available="8" />
          <RoomCard room="Room 2" total="35" available="5" />
          <RoomCard room="Room 3" total="45" available="12" />
          <RoomCard room="24×7 Room" total="30" available="5" />

        </div>
      </div>

    </div>
  );
};

export default Dashboard;

/* ------------------ Components ------------------ */

const StatCard = ({ title, value, icon, color }) => (
  <div
    className={`rounded-xl p-5 text-white bg-gradient-to-r ${color}
                shadow-lg transition transform hover:scale-[1.03]`}
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm opacity-90">{title}</p>
        <h2 className="text-3xl font-bold mt-1">{value}</h2>
      </div>
      <div className="text-4xl opacity-80">{icon}</div>
    </div>
  </div>
);

const Row = ({ label, value, danger, warning }) => (
  <div className="flex justify-between">
    <span className="text-slate-600">{label}</span>
    <span
      className={`font-semibold ${
        danger
          ? "text-red-600"
          : warning
          ? "text-yellow-600"
          : "text-slate-800"
      }`}
    >
      {value}
    </span>
  </div>
);

const RoomCard = ({ room, total, available }) => (
  <div className="border rounded-lg p-4">
    <h3 className="font-medium text-slate-700">{room}</h3>
    <p className="text-xs text-slate-500 mt-1">
      Total Seats: {total}
    </p>
    <p className="text-xs text-green-600 mt-1">
      Available: {available}
    </p>
  </div>
);
