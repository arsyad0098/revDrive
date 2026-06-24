import { FiSearch, FiBell, FiMessageSquare, FiChevronDown, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
// Import file GlobalSearch yang barusan kita buat
import { GlobalSearch } from "./GlobalSearch";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Hapus data user dari localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    // Redirect ke halaman login
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center py-6 px-4 bg-white sticky top-0 z-20 font-sans">
      
      {/* Search Container */}
      <div className="relative w-64">
        {/* Menggunakan Komponen GlobalSearch Baru */}
        <GlobalSearch />
        <FiSearch className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex gap-4 text-gray-400">
          <FiBell className="text-xl cursor-pointer hover:text-red-500" />
          <FiMessageSquare className="text-xl cursor-pointer hover:text-red-500" />
        </div>
        
        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-75 transition-opacity">
              <img
                src="https://avatar.iran.liara.run/public/28"
                className="w-9 h-9 rounded-full object-cover"
                alt="profile"
              />
              <span className="text-sm font-bold text-gray-700">
                Arsyad Ramadhan
              </span>
              <FiChevronDown className="text-gray-400" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <div className="px-2 py-1.5">
              <p className="text-sm font-semibold text-gray-900">Arsyad Ramadhan</p>
              <p className="text-xs text-gray-500">arsyad@example.com</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="flex items-center gap-2 cursor-pointer text-red-600 hover:bg-red-50 focus:bg-red-50">
              <FiLogOut className="text-base" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}