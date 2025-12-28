import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const baseLink =
    "group flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 " +
    "transition-all duration-200 ease-in-out " +
    "hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 " +
    "hover:text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]";

  const activeLink =
    "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg";

  return (
    <aside className="w-64 bg-gradient-to-b from-slate-900 to-slate-950 p-4">
      {/* Logo / Title */}
      <div className="mb-8 px-2">
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          📚 Anantgyan
        </h1>
        <p className="text-xs text-slate-400 tracking-wider">
          Library Admin Panel
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 text-[15px] font-medium">

        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `${baseLink} ${isActive ? activeLink : ""}`
          }
        >
          <span className="text-lg">📊</span>
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/students"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? activeLink : ""}`
          }
        >
          <span className="text-lg">👨‍🎓</span>
          Students
        </NavLink>

        <NavLink
          to="/admin/rooms"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? activeLink : ""}`
          }
        >
          <span className="text-lg">🏠</span>
          Rooms
        </NavLink>

        <NavLink
          to="/admin/seats"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? activeLink : ""}`
          }
        >
          <span className="text-lg">🪑</span>
          Seats
        </NavLink>

        <NavLink
          to="/admin/review"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? activeLink : ""}`
          }
        >
          <span className="text-lg">⭐</span>
          Review
        </NavLink>

        {/* Divider */}
        <div className="border-t border-slate-700 my-4" />

        {/* Logout */}
        <div
          className="group flex items-center gap-3 px-4 py-3 rounded-xl
                     text-red-400 cursor-pointer
                     transition-all duration-200
                     hover:bg-red-500 hover:text-white
                     hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="text-lg">🚪</span>
          Logout
        </div>

      </nav>
    </aside>
  );
};

export default Sidebar;
