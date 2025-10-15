'use client';

import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function FloatingSocials() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3">
      {/* Social Icons */}
      {isOpen && (
        <div className="flex flex-col items-center space-y-3 mb-2 transition-opacity duration-300">
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white hover:scale-110 transition"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white hover:scale-110 transition"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      )}

      {/* Main FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-white text-2xl hover:bg-gray-700 transition"
        aria-label="Toggle Social Links"
      >
        {isOpen ? "×" : "+"}
      </button>
    </div>
  );
}
