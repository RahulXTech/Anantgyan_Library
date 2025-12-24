import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Library Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Anantgyan Library
          </h2>
          <p className="text-sm leading-relaxed">
            A peaceful and disciplined study space designed for focused learning
            and exam preparation.
          </p>
          <p className="mt-3 text-sm">
            📍 15-B, Sachchidanand Nagar, Bhopal (M.P.)
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Facilities</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact Us
          </h3>
          <p className="text-sm">📞 Phone: +91-XXXXXXXXXX</p>
          <p className="text-sm mt-2">✉️ Email: info@anantgyanlibrary.com</p>
          <p className="text-sm mt-2">
            🕒 Open: 24×7 (As per plan availability)
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Anantgyan Library. All rights reserved.
      </div>
    </footer>
  );
}
