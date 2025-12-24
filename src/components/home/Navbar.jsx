import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Brand */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          Anantgyan Library
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <Link to="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-blue-600">Gallery</Link>
          </li>
          <li>
            <Link to="/halls" className="hover:text-blue-600">Halls</Link>
          </li>
          <li>
            <Link to="/ebooks" className="hover:text-blue-600">E-Book</Link>
          </li>
          <li>
            <Link to="/facilities" className="hover:text-blue-600">Facilities</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </li>

          {/* More Dropdown */}
          <li className="relative group cursor-pointer">
            <span className="hover:text-blue-600">More ▾</span>
            <ul className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 w-44">
              <li>
                <Link to="/rules" className="block px-4 py-2 hover:bg-gray-100">
                  Rules
                </Link>
              </li>
              <li>
                <Link to="/timings" className="block px-4 py-2 hover:bg-gray-100">
                  Timings
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="block px-4 py-2 hover:bg-gray-100">
                  Success Stories
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 font-medium">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link to="/halls" onClick={closeMenu}>Halls</Link>
          <Link to="/ebooks" onClick={closeMenu}>E-Book</Link>
          <Link to="/facilities" onClick={closeMenu}>Facilities</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/rules" onClick={closeMenu}>Rules</Link>
          <Link to="/timings" onClick={closeMenu}>Timings</Link>
          <Link to="/success-stories" onClick={closeMenu}>Success Stories</Link>
        </div>
      )}
    </nav>
  );
}
