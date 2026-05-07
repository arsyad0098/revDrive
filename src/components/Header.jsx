import { FiSearch, FiBell, FiMessageSquare, FiChevronDown } from "react-icons/fi";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-4 bg-white sticky top-0 z-20 font-sans">
      <div className="relative w-64">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-[#FAFAFA] border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-red-300"
        />
        <FiSearch className="absolute right-3 top-3 text-gray-400" />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex gap-4 text-gray-400">
          <FiBell className="text-xl cursor-pointer hover:text-red-500" />
          <FiMessageSquare className="text-xl cursor-pointer hover:text-red-500" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer group">
          <img
            src="https://avatar.iran.liara.run/public/28"
            className="w-9 h-9 rounded-full object-cover"
            alt="profile"
          />
          <span className="text-sm font-bold text-gray-700 group-hover:text-red-500">Arsyad Ramadhan</span>
          <FiChevronDown className="text-gray-400" />
        </div>
      </div>
    </header>
  );
}