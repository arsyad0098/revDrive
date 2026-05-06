import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    // [QUIZ MATERI]: min-h-screen memastikan tinggi div minimal sama dengan tinggi layar browser.
    // flex membuat elemen di dalamnya berjajar (default ke samping/row).
    <div className="bg-gray-100 min-h-screen flex">
      <div className="flex flex-row flex-1">
        <Sidebar />
        
        {/* flex-1 membuat area konten mengambil sisa ruang yang tidak dipakai oleh Sidebar */}
        <div className="flex-1 p-4">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
}