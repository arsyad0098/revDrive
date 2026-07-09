import { useState, useEffect } from "react"; // 1. Tambahkan import hooks ini
import { FiTool, FiSettings, FiCheckCircle, FiTrendingUp, FiArrowUpRight, FiEdit2, FiChevronDown } from "react-icons/fi";
import AnnouncementItem from "../components/AnnouncementItem";
import BookingItem from "../components/BookingItem";
import StatCard from "../components/StatCard";

export default function Dashboard() {
    // 2. State untuk menyimpan waktu saat ini
    const [currentTime, setCurrentTime] = useState(new Date());
    const [orders, setOrders] = useState([]);
    const [announcements, setAnnouncements] = useState([
        { id: 1, title: "Update Stok Oli Shell Helix", time: "5 Menit yang lalu" },
        { id: 2, title: "Jadwal Training Mekanik Baru", time: "Kemarin, 12:30" },
    ]);
    const [showAllAnnouncements, setShowAllAnnouncements] = useState(false);
    const [editingAnnouncementId, setEditingAnnouncementId] = useState(null);
    const [isAddingAnnouncement, setIsAddingAnnouncement] = useState(false);
    const [announcementDraft, setAnnouncementDraft] = useState({ title: "", time: "" });

    // 3. Implementasi useEffect untuk Jam Real-Time
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Berjalan setiap 1 detik

        // Cleanup function untuk mencegah memory leak saat pindah halaman
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const saved = localStorage.getItem("orders");
        if (!saved) return;
        try {
            const parsed = JSON.parse(saved);
            setOrders(Array.isArray(parsed) ? parsed : []);
        } catch {
            setOrders([]);
        }
    }, []);

    const handleToggleAnnouncements = () => {
        setShowAllAnnouncements((prev) => !prev);
    };

    const handleStartAnnouncementEdit = (announcement) => {
        setEditingAnnouncementId(announcement.id);
        setAnnouncementDraft({ title: announcement.title, time: announcement.time });
        setIsAddingAnnouncement(false);
    };

    const handleAddAnnouncement = () => {
        setAnnouncementDraft({ title: "", time: "" });
        setIsAddingAnnouncement(true);
        setEditingAnnouncementId(null);
    };

    const handleAnnouncementChange = (field, value) => {
        setAnnouncementDraft((prev) => ({ ...prev, [field]: value }));
    };

    const handleSaveAnnouncement = () => {
        if (isAddingAnnouncement) {
            const nextAnnouncement = {
                id: Date.now(),
                title: announcementDraft.title || "Pengumuman Baru",
                time: announcementDraft.time || "Baru saja",
            };
            setAnnouncements((prev) => [nextAnnouncement, ...prev]);
            setIsAddingAnnouncement(false);
            setAnnouncementDraft({ title: "", time: "" });
            return;
        }

        setAnnouncements((prev) =>
            prev.map((item) =>
                item.id === editingAnnouncementId ? { ...item, ...announcementDraft } : item
            )
        );
        setEditingAnnouncementId(null);
        setAnnouncementDraft({ title: "", time: "" });
    };

    const handleCancelAnnouncementEdit = () => {
        setEditingAnnouncementId(null);
        setIsAddingAnnouncement(false);
        setAnnouncementDraft({ title: "", time: "" });
    };

    const handlePrioritizeOrder = (wo) => {
        setOrders((prev) => {
            const index = prev.findIndex((order) => order.wo === wo);
            if (index === -1) return prev;
            const item = prev[index];
            const next = [item, ...prev.slice(0, index), ...prev.slice(index + 1)];
            localStorage.setItem("orders", JSON.stringify(next));
            return next;
        });
    };

    // Format tampilan waktu dan tanggal
    const timeString = currentTime.toLocaleTimeString('id-ID', {
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
    const dateString = currentTime.toLocaleDateString('id-ID', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    const totalOrders = orders.length;
    const totalPending = orders.filter((order) => order.status === "Menunggu").length;
    const totalInProgress = orders.filter((order) => order.status === "Diperbaiki").length;
    const totalReady = orders.filter((order) => order.status === "Siap diambil").length;
    const totalCustomers = new Set(
        orders.map((order) => (order.customerName || order.customerEmail || order.customerPhone || order.wo).trim())
    ).size;

    const upcomingOrders = orders
        .filter((order) => order.date && order.jam)
        .sort((a, b) => `${a.date} ${a.jam}`.localeCompare(`${b.date} ${b.jam}`))
        .slice(0, 3);

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header Dashboard yang sudah dimodifikasi ditambah Widget Jam */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-extrabold text-gray-900">Dashboard Bengkel</h2>
                    <p className="text-sm text-gray-500 mt-1">Pantau aktivitas operasional RevDrive secara real-time.</p>
                </div>
                
                {/* Widget Jam Digital Hasil useEffect */}
                <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-100 text-right hidden md:block">
                    <p className="text-xl font-bold text-[#FA424A] tracking-wider font-mono">
                        {timeString}
                    </p>
                    <p className="text-[10px] font-extrabold text-gray-400 mt-1 uppercase tracking-widest">
                        {dateString}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* --- KOLOM UTAMA (KIRI & TENGAH) --- */}
                <div className="col-span-12 lg:col-span-8 space-y-6">
                    
                    {/* 3 Kartu Statistik Menggunakan Komponen StatCard */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <StatCard 
                            title="Total Servis"
                            value={totalOrders.toString()}
                            icon={<FiSettings />}
                            bgColor="bg-[#FFEFE7]"
                            iconBg="bg-red-100"
                            iconColor="text-[#FA424A]"
                            footer="Data dari Orders"
                        />

                        <StatCard 
                            title="Menunggu"
                            value={totalPending.toString()}
                            icon={<FiTool />}
                            bgColor="bg-[#E8F0FB]"
                            iconBg="bg-blue-100"
                            iconColor="text-blue-600"
                            footer="Dalam antrian servis"
                        />

                        <StatCard 
                            title="Siap diambil"
                            value={totalReady.toString()}
                            icon={<FiCheckCircle />}
                            bgColor="bg-[#FDEBF9]"
                            iconBg="bg-purple-100"
                            iconColor="text-purple-600"
                            footer="Selesai dan siap"
                        />
                    </div>

                    {/* 2 Kartu Data Lebar */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex justify-between items-center relative overflow-hidden">
                            <div>
                                <p className="text-sm font-bold text-gray-500 mb-1">Total Pelanggan</p>
                                <h3 className="text-4xl font-extrabold text-gray-900 mb-1">{totalCustomers}</h3>
                                <p className="text-xs font-medium text-gray-400">Akun terdaftar di Orders</p>
                            </div>
                            <div className="bg-green-50 text-green-600 text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1">
                                <FiArrowUpRight /> {orders.length ? `+${Math.max(0, totalCustomers - 1)}% bulan lalu` : "-"}
                            </div>
                        </div>
                        <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex justify-between items-center">
                            <div>
                                <p className="text-sm font-bold text-gray-500 mb-1">Target Bulanan</p>
                                <h3 className="text-4xl font-extrabold text-gray-900 mb-1">85%</h3>
                                <p className="text-xs font-medium text-gray-400">Dari target 100 unit</p>
                            </div>
                            <div className="bg-green-50 text-green-600 text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1">
                                <FiArrowUpRight /> +5% Bulan lalu
                            </div>
                        </div>
                    </div>

                    {/* Bagian Pengumuman */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg">Pengumuman Bengkel</h3>
                                <p className="text-xs text-gray-500 mt-1">Kelola informasi penting bengkel di sini.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500 font-medium bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-md">
                                    {dateString}
                                </span>
                                <button
                                    onClick={handleAddAnnouncement}
                                    className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl text-xs font-semibold transition"
                                >
                                    + Tambah Pengumuman
                                </button>
                            </div>
                        </div>
                        <div className="space-y-3">
                            {(isAddingAnnouncement ? [{ id: "new", title: "", time: "" }, ...(showAllAnnouncements ? announcements : announcements.slice(0, 2))] : (showAllAnnouncements ? announcements : announcements.slice(0, 2))).map((announcement) => {
                                const isNew = announcement.id === "new";
                                const isEditing = editingAnnouncementId === announcement.id;
                                return (
                                    <div key={announcement.id} className="rounded-2xl bg-gray-50 p-4 border border-gray-100 shadow-sm">
                                        {(isNew || isEditing) ? (
                                            <div className="space-y-3">
                                                <div>
                                                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Judul</label>
                                                    <input
                                                        value={announcementDraft.title}
                                                        onChange={(e) => handleAnnouncementChange("title", e.target.value)}
                                                        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-100"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Waktu</label>
                                                    <input
                                                        value={announcementDraft.time}
                                                        onChange={(e) => handleAnnouncementChange("time", e.target.value)}
                                                        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-100"
                                                    />
                                                </div>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={handleSaveAnnouncement}
                                                        className="rounded-2xl bg-red-600 px-4 py-2 text-xs font-bold text-white hover:bg-red-700"
                                                    >
                                                        Simpan
                                                    </button>
                                                    <button
                                                        onClick={handleCancelAnnouncementEdit}
                                                        className="rounded-2xl border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100"
                                                    >
                                                        Batal
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <h4 className="text-sm font-bold text-gray-800">{announcement.title}</h4>
                                                    <p className="text-[11px] font-medium text-gray-400 mt-1">{announcement.time}</p>
                                                </div>
                                                <button
                                                    onClick={() => handleStartAnnouncementEdit(announcement)}
                                                    className="text-gray-500 hover:text-gray-900 text-xs font-semibold flex items-center gap-2"
                                                >
                                                    <FiEdit2 /> Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        <button
                            onClick={handleToggleAnnouncements}
                            className="w-full mt-4 py-3 text-[#FA424A] font-bold text-sm bg-red-50 hover:bg-red-100 rounded-xl transition duration-200 flex items-center justify-center gap-2"
                        >
                            {showAllAnnouncements ? "Sembunyikan Pengumuman" : "Lihat Semua Pengumuman"}
                            <FiChevronDown className={`transition-transform ${showAllAnnouncements ? "rotate-180" : ""}`} />
                        </button>
                    </div>
                </div>

                {/* --- KOLOM SAMPING (KANAN) --- */}
                <div className="col-span-12 lg:col-span-4 space-y-6">
                    <div className="bg-[#161E54] text-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(22,30,84,0.15)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 blur-xl"></div>
                        <h3 className="font-bold mb-6 text-white/90 flex items-center gap-2">
                            <FiTrendingUp /> Aktivitas Terkini
                        </h3>
                        <div className="bg-white/10 p-4 rounded-xl border border-white/5">
                            <p className="text-[10px] font-medium opacity-70 mb-1">{timeString}</p> {/* Waktu disesuaikan real-time */}
                            <h4 className="font-bold text-lg text-white">Servis #RD-1002 Selesai</h4>
                            <p className="text-xs opacity-80 mt-2 leading-relaxed font-light">
                                Kendaraan pelanggan <b className="font-bold text-white">Budi Santoso</b> telah melewati tahap final check oleh kepala mekanik.
                            </p>
                        </div>
                        <div className="flex justify-between items-center mt-6">
                            <p className="text-[10px] font-medium opacity-60">Total 12 aktivitas hari ini</p>
                            <button className="bg-[#FA424A] hover:bg-red-500 shadow-lg shadow-red-500/30 px-5 py-2.5 rounded-lg text-xs font-bold transition">
                                Detail
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-gray-900 text-lg">Jadwal Booking</h3>
                            <button
                                onClick={() => window.location.href = "/orders"}
                                className="text-[#FA424A] text-xs font-bold hover:underline"
                            >
                                Lihat Semua
                            </button>
                        </div>
                        <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-3">Prioritas berdasarkan tanggal terdekat</p>
                        {upcomingOrders.length > 0 ? (
                            upcomingOrders.map((order, index) => (
                                <BookingItem
                                    key={order.wo}
                                    title={`${order.customerName || "Pelanggan"}`}
                                    time={`${order.date} • ${order.jam}`}
                                    customerName={order.customerName}
                                    customerEmail={order.customerEmail}
                                    customerPhone={order.customerPhone}
                                    vehicle={order.vehicle}
                                    actionLabel={index === 0 ? "Prioritaskan" : undefined}
                                    onAction={index === 0 ? () => handlePrioritizeOrder(order.wo) : undefined}
                                    type={index === 0 ? "priority" : "normal"}
                                />
                            ))
                        ) : (
                            <p className="text-sm text-gray-500">Belum ada booking terjadwal.</p>
                        )}
                        <button className="w-full mt-6 py-3 border-2 border-dashed border-gray-200 text-gray-500 font-bold text-sm rounded-xl hover:bg-gray-50 hover:text-[#FA424A] hover:border-red-200 transition duration-200">
                            + Buat Jadwal Baru
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}