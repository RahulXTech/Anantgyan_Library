import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/facilities", label: "Facilities" },
    { path: "/contact", label: "Contact" },
    { path: "/login", label: "Login" },
  ];

  return (
    <nav className="sticky top-0 z-50">
      <div className="backdrop-blur-xl bg-white/80 shadow-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold text-blue-700 tracking-wide"
          >
            Anantgyan <span className="text-blue-500">Library</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`relative transition ${
                    location.pathname === item.path
                      ? "text-blue-600"
                      : "hover:text-blue-600"
                  }`}
                >
                  {item.label}

                  {/* Active Underline */}
                  {location.pathname === item.path && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded-full"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-gray-800"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-200 animate__animated animate__fadeInDown px-6 py-5 space-y-4 font-medium">
          <Link to="/" onClick={closeMenu} className="block">
            Home
          </Link>
          <Link to="/about" onClick={closeMenu} className="block">
            About
          </Link>
          <Link to="/facilities" onClick={closeMenu} className="block">
            Facilities
          </Link>
          <Link to="/halls" onClick={closeMenu} className="block">
            Halls
          </Link>
          <Link to="/rules" onClick={closeMenu} className="block">
            Rules
          </Link>
          <Link to="/contact" onClick={closeMenu} className="block">
            Contact
          </Link>
          <Link to="/login" onClick={closeMenu} className="block">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}