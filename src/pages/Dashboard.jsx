import { FiMoreHorizontal, FiCheck, FiActivity } from "react-icons/fi";

export default function Dashboard() {
    return (
        <div className="font-sans text-gray-900">
            <h2 className="text-2xl font-bold mb-6">Dashboard Bengkel</h2>

            <div className="grid grid-cols-12 gap-6">
                
                {/* --- KOLOM UTAMA (KIRI & TENGAH) --- */}
                <div className="col-span-12 lg:col-span-8 space-y-6">
                    
                    {/* 3 Kartu Statistik Kecil (Warna Pastel) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-[#FFEFE7] p-5 rounded-2xl">
                            <h4 className="font-bold text-lg text-gray-800">24</h4>
                            <p className="text-sm text-gray-600">Total Servis</p>
                            <p className="text-xs text-red-500 mt-2 font-medium">4 Perlu penanganan segera</p>
                        </div>
                        <div className="bg-[#E8F0FB] p-5 rounded-2xl">
                            <h4 className="font-bold text-lg text-gray-800">10</h4>
                            <p className="text-sm text-gray-600">Sedang Dikerjakan</p>
                            <p className="text-xs text-blue-500 mt-2 font-medium">4 Mekanik aktif</p>
                        </div>
                        <div className="bg-[#FDEBF9] p-5 rounded-2xl">
                            <h4 className="font-bold text-lg text-gray-800">16</h4>
                            <p className="text-sm text-gray-600">Selesai Hari Ini</p>
                            <p className="text-xs text-purple-500 mt-2 font-medium">Siap diambil pelanggan</p>
                        </div>
                    </div>

                    {/* 2 Kartu Data Lebar (Dengan Indikator Pertumbuhan) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm flex justify-between items-center">
                            <div>
                                <p className="text-sm font-bold text-gray-500">Total Pelanggan</p>
                                <h3 className="text-3xl font-bold my-2 text-gray-800">30</h3>
                                <p className="text-[10px] text-gray-400">Database CRM RevDrive</p>
                            </div>
                            <div className="bg-red-50 text-red-500 text-xs px-2 py-1 rounded-md font-bold">+2% Bulan lalu</div>
                        </div>
                        <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm flex justify-between items-center">
                            <div>
                                <p className="text-sm font-bold text-gray-500">Target Bulanan</p>
                                <h3 className="text-3xl font-bold my-2 text-gray-800">85%</h3>
                                <p className="text-[10px] text-gray-400">Dari target 100 unit</p>
                            </div>
                            <div className="bg-red-50 text-red-500 text-xs px-2 py-1 rounded-md font-bold">+5% Bulan lalu</div>
                        </div>
                    </div>

                    {/* Bagian Pengumuman (Announcement) */}
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                        <div className="p-5 flex justify-between items-center border-b border-gray-50">
                            <h3 className="font-bold text-gray-800">Pengumuman Bengkel</h3>
                            <div className="text-xs border rounded-md px-2 py-1 text-gray-400">
                                Hari ini, {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </div>
                        </div>
                        <div className="p-5 space-y-4">
                            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
                                <div>
                                    <p className="text-sm font-medium text-gray-800">Update Stok Oli Shell Helix</p>
                                    <p className="text-[10px] text-gray-400">5 Menit yang lalu</p>
                                </div>
                                <div className="flex gap-4 text-gray-400">
                                    <FiCheck className="cursor-pointer hover:text-green-500" />
                                    <FiMoreHorizontal className="cursor-pointer hover:text-red-500" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
                                <div>
                                    <p className="text-sm font-medium text-gray-800">Jadwal Training Mekanik Baru</p>
                                    <p className="text-[10px] text-gray-400">Kemarin, 12:30</p>
                                </div>
                                <div className="flex gap-4 text-gray-400">
                                    <FiCheck className="cursor-pointer hover:text-green-500" />
                                    <FiMoreHorizontal className="cursor-pointer hover:text-red-500" />
                                </div>
                            </div>
                        </div>
                        <button className="w-full py-3 text-red-500 font-bold text-sm border-t border-gray-50 hover:bg-red-50 transition-colors">
                            Lihat Semua Pengumuman
                        </button>
                    </div>
                </div>

                {/* --- KOLOM SAMPING (KANAN) --- */}
                <div className="col-span-12 lg:col-span-4 space-y-6">
                    
                    {/* Kartu Aktivitas Terkini (Gelap) */}
                    <div className="bg-[#161E54] text-white rounded-2xl overflow-hidden shadow-lg">
                        <div className="p-5 bg-[#1B2559]">
                            <h3 className="font-bold">Aktivitas Terkini</h3>
                        </div>
                        <div className="p-6">
                            <p className="text-[10px] opacity-60">10.40 AM, Jumat 10 Sept</p>
                            <h4 className="font-bold text-lg mt-1 text-white">Servis #RD-1002 Selesai</h4>
                            <p className="text-xs opacity-80 mt-2 leading-relaxed">
                                Kendaraan pelanggan <b>Budi Santoso</b> telah melewati tahap final check oleh kepala mekanik. [cite: 83]
                            </p>
                            <div className="flex justify-between items-center mt-8">
                                <p className="text-[10px] opacity-70">Total 12 aktivitas hari ini</p>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-red-600 transition-all">
                                    Lihat Detail
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Jadwal Booking Mendatang */}
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                        <div className="p-5 flex justify-between items-center border-b border-gray-50">
                            <h3 className="font-bold text-gray-800">Jadwal Booking</h3>
                            <p className="text-xs text-red-500 font-bold cursor-pointer hover:underline">Lihat Semua</p>
                        </div>
                        <div className="p-5 space-y-4">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Prioritas Utama</p>
                            <div className="bg-gray-50 p-3 rounded-xl border-l-4 border-orange-400 flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-800">Servis Berkala Pajero</p>
                                    <p className="text-[10px] text-gray-400">Hari ini - 11.30 WIB</p>
                                </div>
                                <FiActivity className="text-gray-300" />
                            </div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-4">Lainnya</p>
                            <div className="bg-gray-50 p-3 rounded-xl border-l-4 border-blue-400">
                                <p className="text-sm font-medium text-gray-800">Ganti Oli Fortuner</p>
                                <p className="text-[10px] text-gray-400">Besok - 09.00 WIB</p>
                            </div>
                        </div>
                        <button className="w-full py-3 text-red-500 font-bold text-sm border-t border-gray-50 hover:bg-red-50 transition-colors">
                            Buat Jadwal Baru
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}