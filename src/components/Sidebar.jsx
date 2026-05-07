import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { FiTool, FiUsers, FiBox, FiFileText, FiCalendar, FiSettings, FiHeadphones } from "react-icons/fi";

export default function Sidebar() {
    const mainMenu = [
        { name: "Dashboard", path: "/", icon: <MdSpaceDashboard /> },
        { name: "Service List", path: "/orders", icon: <FiTool /> },
        { name: "Schedule", path: "/calendar", icon: <FiCalendar /> },
        { name: "Customers", path: "/customers", icon: <FiUsers /> },
        { name: "Spareparts", path: "/analytics", icon: <FiBox /> },
    ];

    const otherMenu = [
        { name: "Support", path: "/support", icon: <FiHeadphones /> },
        { name: "Settings", path: "/settings", icon: <FiSettings /> },
    ];

    const menuClass = ({ isActive }) =>
        `flex items-center gap-4 px-8 py-3.5 transition-all cursor-pointer group
        ${isActive ? "text-red-500 font-bold" : "text-gray-500 hover:text-red-500"}`;

    return (
        <aside className="w-[240px] bg-[#FAFAFA] min-h-screen flex flex-col border-r border-gray-100">
            <div className="px-8 py-10 flex justify-center">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tighter">
                    Rev<span className="text-red-600">Drive</span>
                </h1>
            </div>

            <nav className="flex-1">
                <p className="px-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Main Menu</p>
                {mainMenu.map((item, idx) => (
                    <NavLink key={idx} to={item.path} end={item.path === "/"} className={menuClass}>
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-sm">{item.name}</span>
                    </NavLink>
                ))}

                <p className="px-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 mt-8">Other</p>
                {otherMenu.map((item, idx) => (
                    <NavLink key={idx} to={item.path} className={menuClass}>
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-sm">{item.name}</span>
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}