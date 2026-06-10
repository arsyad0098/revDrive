import { useState } from "react";
import { FiPlus, FiSearch, FiFilter, FiEye, FiEdit2, FiTrash2, FiPrinter, FiMoreHorizontal } from "react-icons/fi";
import PageHeader from "../components/PageHeader"; 
import Table from "../components/Table";
import ServiceStatusBadge from "../components/ServiceStatusBadge";
import Button from "../components/Button"; // Ini custom button punyamu
import Avatar from "../components/Avatar"; 
import { ordersData } from "../data/mockData"; 

// --- IMPORT SHADCN UI (Sudah pakai path alias "@") ---
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// ----------------------------------------------------

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
                
                {/* --- DIALOG SHADCN --- */}
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="flex items-center gap-2 bg-[#FA424A] hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
                            <FiPlus className="text-lg" /> Pendaftaran Servis
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md bg-white p-6 rounded-2xl shadow-xl">
                        <DialogHeader>
                            <DialogTitle className="text-lg font-extrabold text-gray-900">Pendaftaran Servis Baru</DialogTitle>
                            <DialogDescription className="text-sm text-gray-500">
                                Buat Work Order (WO) baru untuk kendaraan yang masuk.
                            </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-4 my-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-gray-700">Nama Pelanggan</label>
                                <input type="text" className="border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#FA424A]" placeholder="Cari atau input nama..." />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-gray-700">Keluhan Kendaraan</label>
                                <textarea className="border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#FA424A]" placeholder="Contoh: Ganti oli mesin dan cek rem" rows={3}></textarea>
                            </div>
                        </div>

                        <DialogFooter className="flex justify-end gap-2 mt-4">
                            <DialogClose asChild>
                                <button type="button" className="px-4 py-2 text-sm font-bold text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                                    Batal
                                </button>
                            </DialogClose>
                            <button type="button" className="px-4 py-2 text-sm font-bold bg-[#FA424A] text-white rounded-lg hover:bg-red-600 transition">
                                Simpan WO
                            </button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            {/* --- STAT CARDS --- */}
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
                        <td className="px-6 py-4">
                            <span className="font-extrabold text-[#FA424A] bg-red-50 px-2 py-1 rounded text-xs">
                                #{order.id}
                            </span>
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                                <Avatar name={order.customerName} />
                                <span className="font-bold text-gray-800 text-sm">{order.customerName}</span>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <div className="text-sm font-semibold text-gray-400">{order.orderDate}</div>
                        </td>
                        <td className="px-6 py-4 font-extrabold text-gray-900 text-sm">
                            Rp {order.totalPrice.toLocaleString('id-ID')}
                        </td>
                        <td className="px-6 py-4">
                            <ServiceStatusBadge status={order.status} />
                        </td>

                        {/* --- DROPDOWN MENU SHADCN --- */}
                        <td className="px-6 py-4">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="p-2 text-gray-400 hover:text-gray-800 bg-gray-50 hover:bg-gray-200 rounded-lg transition" title="Menu Aksi">
                                        <FiMoreHorizontal className="w-5 h-5" />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-40 bg-white border border-gray-100 rounded-xl shadow-lg p-1 z-50">
                                    <DropdownMenuLabel className="text-xs font-bold text-gray-400 px-2 py-1">Aksi Servis</DropdownMenuLabel>
                                    <DropdownMenuSeparator className="bg-gray-100 my-1" />
                                    <DropdownMenuItem className="flex items-center gap-2 px-2 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg cursor-pointer outline-none transition">
                                        <FiEye className="w-4 h-4" /> Lihat Detail
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="flex items-center gap-2 px-2 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-orange-500 rounded-lg cursor-pointer outline-none transition">
                                        <FiEdit2 className="w-4 h-4" /> Edit Order
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator className="bg-gray-100 my-1" />
                                    <DropdownMenuItem className="flex items-center gap-2 px-2 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg cursor-pointer outline-none transition">
                                        <FiTrash2 className="w-4 h-4" /> Hapus
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </td>
                    </tr>
                ))}
            </Table>
        </div>
    );
}