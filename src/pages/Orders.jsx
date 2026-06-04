import { useState } from "react";
import { FiPlus, FiSearch, FiFilter, FiEye, FiEdit2, FiTrash2, FiPrinter } from "react-icons/fi";
import PageHeader from "../components/PageHeader"; 
import Table from "../components/Table";
import ServiceStatusBadge from "../components/ServiceStatusBadge";
import Button from "../components/Button";
import Avatar from "../components/Avatar"; // Kita tambahkan avatar biar lebih keren
import { ordersData } from "../data/mockData"; 

export default function Orders() {
    const [orders] = useState(ordersData);

    const totalOrders = orders.length;
    const completedOrders = orders.filter(order => order.status === "Completed").length;
    const pendingOrders = orders.filter(order => order.status === "Pending").length;

    return (
        <div className="space-y-6 animate-fade-in">
            {/* --- HEADER --- */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-50 shadow-sm">
                <div>
                    <h2 className="text-2xl font-extrabold text-gray-900">Service List</h2>
                    <p className="text-xs font-medium text-gray-400 mt-1">Daftar pengerjaan kendaraan di bengkel RevDrive</p>
                </div>
                <Button type="primary" className="flex items-center gap-2">
                    <FiPlus className="text-lg" /> Pendaftaran Servis
                </Button>
            </div>

            {/* --- STAT CARDS (Dibuat Berwarna Seperti Figma) --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#FFEFE7] p-6 rounded-2xl border border-[#FFEFE7] shadow-sm">
                    <p className="text-sm font-bold text-gray-500 mb-1">Total Kendaraan</p>
                    <h3 className="text-4xl font-extrabold text-gray-900">{totalOrders}</h3>
                    <p className="text-[10px] font-bold text-[#FA424A] mt-2 uppercase tracking-wider">Semua Riwayat</p>
                </div>
                <div className="bg-[#E8F0FB] p-6 rounded-2xl border border-[#E8F0FB] shadow-sm">
                    <p className="text-sm font-bold text-gray-500 mb-1">Sedang Antri</p>
                    <h3 className="text-4xl font-extrabold text-gray-900">{pendingOrders}</h3>
                    <p className="text-[10px] font-bold text-blue-600 mt-2 uppercase tracking-wider">Menunggu Mekanik</p>
                </div>
                <div className="bg-[#FDEBF9] p-6 rounded-2xl border border-[#FDEBF9] shadow-sm">
                    <p className="text-sm font-bold text-gray-500 mb-1">Selesai</p>
                    <h3 className="text-4xl font-extrabold text-gray-900">{completedOrders}</h3>
                    <p className="text-[10px] font-bold text-purple-600 mt-2 uppercase tracking-wider">Siap Diambil</p>
                </div>
            </div>

            {/* --- FILTER & SEARCH --- */}
            <div className="flex flex-col md:flex-row gap-3 items-center justify-between bg-white p-4 rounded-xl border border-gray-50 shadow-sm">
                <div className="relative w-full md:w-80">
                    <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                    <input
                        type="text"
                        placeholder="Cari No. WO atau nama pelanggan..."
                        className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#FA424A] focus:bg-white transition"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                        <FiFilter /> Filter Status
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                        <FiPrinter /> Cetak Laporan
                    </button>
                </div>
            </div>

            {/* --- TABLE --- */}
            <Table headers={["No. WO", "Pelanggan", "Tanggal Servis", "Total Biaya", "Status", "Aksi"]}>
                {orders.map((order, index) => (
                    <tr key={index} className="hover:bg-gray-50/70 transition group">
                        {/* No. WO dengan style Kode */}
                        <td className="px-6 py-4">
                            <span className="font-extrabold text-[#FA424A] bg-red-50 px-2 py-1 rounded text-xs">
                                #{order.id}
                            </span>
                        </td>

                        {/* Pelanggan dengan Avatar */}
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                                <Avatar name={order.customerName} />
                                <span className="font-bold text-gray-800 text-sm">{order.customerName}</span>
                            </div>
                        </td>

                        {/* Tanggal */}
                        <td className="px-6 py-4">
                            <div className="text-sm font-semibold text-gray-400">{order.orderDate}</div>
                        </td>

                        {/* Biaya */}
                        <td className="px-6 py-4 font-extrabold text-gray-900 text-sm">
                            Rp {order.totalPrice.toLocaleString('id-ID')}
                        </td>

                        {/* Status */}
                        <td className="px-6 py-4">
                            <ServiceStatusBadge status={order.status} />
                        </td>

                        {/* Tombol Aksi (Tambahan agar lengkap seperti Figma) */}
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition" title="Lihat Detail">
                                    <FiEye className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition" title="Edit">
                                    <FiEdit2 className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-[#FA424A] hover:bg-red-50 rounded-lg transition" title="Hapus">
                                    <FiTrash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </Table>
        </div>
    );
}