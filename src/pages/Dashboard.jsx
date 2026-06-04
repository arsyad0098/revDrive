import { FiTool, FiSettings, FiCheckCircle, FiTrendingUp, FiArrowUpRight } from "react-icons/fi";
import AnnouncementItem from "../components/AnnouncementItem";
import BookingItem from "../components/BookingItem";
import StatCard from "../components/StatCard"; // SEKARANG TERPAKAI 🔥

export default function Dashboard() {
    return (
        <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl font-extrabold text-gray-900">Dashboard Bengkel</h2>

            <div className="grid grid-cols-12 gap-6">
                {/* --- KOLOM UTAMA (KIRI & TENGAH) --- */}
                <div className="col-span-12 lg:col-span-8 space-y-6">
                    
                    {/* 3 Kartu Statistik Menggunakan Komponen StatCard */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <StatCard 
                            title="Total Servis"
                            value="24"
                            icon={<FiSettings />}
                            bgColor="bg-[#FFEFE7]"
                            iconBg="bg-red-100"
                            iconColor="text-[#FA424A]"
                            footer="4 Perlu penanganan"
                        />

                        <StatCard 
                            title="Sedang Dikerjakan"
                            value="10"
                            icon={<FiTool />}
                            bgColor="bg-[#E8F0FB]"
                            iconBg="bg-blue-100"
                            iconColor="text-blue-600"
                            footer="4 Mekanik aktif"
                        />

                        <StatCard 
                            title="Selesai Hari Ini"
                            value="16"
                            icon={<FiCheckCircle />}
                            bgColor="bg-[#FDEBF9]"
                            iconBg="bg-purple-100"
                            iconColor="text-purple-600"
                            footer="Siap diambil"
                        />
                    </div>

                    {/* 2 Kartu Data Lebar */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex justify-between items-center relative overflow-hidden">
                            <div>
                                <p className="text-sm font-bold text-gray-500 mb-1">Total Pelanggan</p>
                                <h3 className="text-4xl font-extrabold text-gray-900 mb-1">30</h3>
                                <p className="text-xs font-medium text-gray-400">Database CRM RevDrive</p>
                            </div>
                            <div className="bg-green-50 text-green-600 text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1">
                                <FiArrowUpRight /> +2% Bulan lalu
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
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-gray-900 text-lg">Pengumuman Bengkel</h3>
                            <span className="text-xs text-gray-500 font-medium bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-md">
                                Hari ini, {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </span>
                        </div>
                        <div className="space-y-1">
                            <AnnouncementItem title="Update Stok Oli Shell Helix" time="5 Menit yang lalu" />
                            <AnnouncementItem title="Jadwal Training Mekanik Baru" time="Kemarin, 12:30" />
                        </div>
                        <button className="w-full mt-4 py-3 text-[#FA424A] font-bold text-sm bg-red-50 hover:bg-red-100 rounded-xl transition duration-200">
                            Lihat Semua Pengumuman
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
                            <p className="text-[10px] font-medium opacity-70 mb-1">10.40 AM, Jumat 10 Sept</p>
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
                            <button className="text-[#FA424A] text-xs font-bold hover:underline">Lihat Semua</button>
                        </div>
                        <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-3">Prioritas Utama</p>
                        <BookingItem title="Servis Berkala Pajero" time="Hari ini - 11.30 WIB" type="priority" />
                        <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mt-6 mb-3">Lainnya</p>
                        <BookingItem title="Ganti Oli Fortuner" time="Besok - 09.00 WIB" />
                        <button className="w-full mt-6 py-3 border-2 border-dashed border-gray-200 text-gray-500 font-bold text-sm rounded-xl hover:bg-gray-50 hover:text-[#FA424A] hover:border-red-200 transition duration-200">
                            + Buat Jadwal Baru
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}