import { useState } from "react";
import { FiSearch, FiBell, FiMessageSquare, FiSettings } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Header() {
  // [QUIZ MATERI]: useState mengatur data sementara. isSearchOpen bernilai true/false. 
  // Jika true, modal search akan muncul.
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const pageTitles = {
    "/": "Dashboard",
    "/orders": "Service List",
    "/order-detail": "Service History",
    "/customers": "Customers & Vehicles",
    "/analytics": "Spareparts",
    "/calendar": "Booking Jadwal",
  };

  const title = pageTitles[location.pathname] || "Page";

  return (
    // sticky top-0 bikin header tetap di atas meski halaman di-scroll ke bawah
    <header className="flex justify-between items-center px-8 py-4 bg-white sticky top-0 z-20 font-sans rounded-xl shadow-sm mb-4">
      {/* Search Bar */}
      <div className="relative w-full max-w-md cursor-pointer group" onClick={() => setIsSearchOpen(true)}>
        <div className="flex items-center bg-gray-50 border border-transparent group-hover:border-red-200 rounded-xl px-4 py-2.5 transition-all">
          <FiSearch className="text-gray-400 text-lg" />
          <input
            type="text"
            readOnly
            placeholder="Cari Plat Nomor, Pelanggan, atau Servis..."
            className="bg-transparent border-none outline-none ml-3 text-sm w-full text-gray-700 cursor-pointer placeholder-gray-400"
          />
        </div>
      </div>

      {/* Quick Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-start justify-center z-50 pt-20">
          <div className="bg-white w-full max-w-2xl rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-red-600">Quick Search</h2>
              <FaTimes
                className="cursor-pointer text-gray-400 hover:text-red-500 text-lg transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSearchOpen(false);
                }}
              />
            </div>
            <input
              autoFocus
              type="text"
              placeholder="Ketik plat nomor atau nama mekanik..."
              className="w-full border-b-2 border-red-500 text-xl py-3 outline-none text-gray-700"
            />
            <div className="mt-5 flex gap-2">
              <span className="bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-500 cursor-pointer hover:bg-red-50 hover:text-red-600">
                #Service
              </span>
              <span className="bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-500 cursor-pointer hover:bg-red-50 hover:text-red-600">
                #Sparepart
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Icons & Profile */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <button className="relative p-2.5 bg-gray-50 text-gray-500 hover:bg-red-50 hover:text-red-600 rounded-full transition-colors">
            <FiBell className="text-lg" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-600 border-2 border-white rounded-full"></span>
          </button>
          <button className="relative p-2.5 bg-gray-50 text-gray-500 hover:bg-red-50 hover:text-red-600 rounded-full transition-colors">
            <FiMessageSquare className="text-lg" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-600 border-2 border-white rounded-full"></span>
          </button>
          <button className="p-2.5 bg-gray-50 text-gray-500 hover:bg-red-50 hover:text-red-600 rounded-full transition-colors">
            <FiSettings className="text-lg" />
          </button>
        </div>

        <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
          <span className="text-sm text-gray-600">
            Halo, <b className="text-gray-800">Admin</b>
          </span>
          <img
            src="https://avatar.iran.liara.run/public/28"
            alt="Profile"
            className="w-10 h-10 rounded-full border border-gray-200"
          />
        </div>
      </div>
    </header>
  );
}