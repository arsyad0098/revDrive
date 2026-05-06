import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { FiTool, FiUsers, FiBox, FiFileText, FiCalendar } from "react-icons/fi"; // Ubah icon bengkel

export default function Sidebar() {
    const menuItems = [
        { id: "menu-1", name: "Dashboard", path: "/", icon: <MdSpaceDashboard /> },
        { id: "menu-2", name: "Service List", path: "/orders", icon: <FiTool /> },
        { id: "menu-3", name: "Service History", path: "/order-detail", icon: <FiFileText /> },
        { id: "menu-4", name: "Customers & Vehicles", path: "/customers", icon: <FiUsers /> },
        { id: "menu-5", name: "Spareparts", path: "/analytics", icon: <FiBox /> },
        { id: "menu-6", name: "Booking Jadwal", path: "/calendar", icon: <FiCalendar /> },
    ];

    // 🔥 class dipisah biar reusable. Warna diganti jadi Red khas bengkel (RevDrive)
    const menuClass = ({ isActive }) =>
        `flex items-center gap-4 px-4 py-3 rounded-xl transition-all cursor-pointer group
        ${
            isActive
                ? "text-red-600 bg-red-50 font-extrabold border-l-4 border-red-600"
                : "text-gray-600 hover:text-red-600 hover:bg-red-50 hover:font-bold"
        }`;

    return (
        <aside className="w-[260px] bg-white min-h-screen flex flex-col border-r border-gray-100 z-10 font-sans shadow-sm">
            
            {/* Logo */}
            <div className="px-8 py-6">
                <h1 className="text-3xl font-extrabold text-gray-800 flex items-center tracking-tight">
                    Rev<span className="text-red-600">Drive</span>
                </h1>
                <p className="text-xs font-medium text-gray-400 mt-1">Workshop Management CRM</p>
            </div>

            {/* Menus */}
            <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
                <ul className="list-none p-0 m-0">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <NavLink
                                to={item.path}
                                end={item.path === "/"}
                                className={menuClass}
                            >
                                {({ isActive }) => (
                                    <>
                                        <span className={`text-xl transition-transform ${!isActive && "group-hover:scale-110"}`}>
                                            {item.icon}
                                        </span>
                                        <span className="text-sm">{item.name}</span>
                                    </>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}