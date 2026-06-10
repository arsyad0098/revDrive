import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { FiUsers, FiUserPlus, FiUserCheck, FiSearch } from "react-icons/fi";
import Table from "../components/Table";
import LoyaltyBadge from "../components/LoyaltyBadge";
import Button from "../components/Button"; 
import StatCard from "../components/StatCard";
import { customersData } from "../data/mockData";

// --- IMPORT DIALOG SHADCN UI (Menggunakan Alias @) ---
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
// -----------------------------------------------------

export default function Customers() {
    const [customers] = useState(customersData);
    const goldMembers = customers.filter(
        (cust) => cust.loyalty === "Gold"
    ).length;

    return (
        <div className="font-sans space-y-6 animate-fade-in">
            {/* --- HEADER --- */}
            <PageHeader title="Customers" breadcrumb={["Dashboard", "Customers"]}>
                <div className="hidden md:flex items-center bg-gray-50 border border-gray-100 rounded-full px-4 py-2 hover:border-red-300 transition">
                    <FiSearch className="text-gray-400 text-lg" />
                    <input
                        type="text"
                        placeholder="Cari Pelanggan..."
                        className="bg-transparent border-none outline-none ml-2 text-sm w-48"
                    />
                </div>

                {/* --- DIALOG COMPONENT UNTUK TAMBAH PELANGGAN --- */}
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="flex items-center gap-2 bg-[#FA424A] hover:bg-red-600 text-white rounded-full px-6 py-2 text-sm font-semibold shadow-sm transition">
                            <FiUserPlus className="text-lg" /> Tambah Pelanggan
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md bg-white p-6 rounded-2xl shadow-xl">
                        <DialogHeader>
                            <DialogTitle className="text-lg font-extrabold text-gray-900">Tambah Pelanggan Baru</DialogTitle>
                            <DialogDescription className="text-sm text-gray-500">
                                Masukkan data profil pelanggan baru untuk database CRM RevDrive.
                            </DialogDescription>
                        </DialogHeader>
                        
                        {/* Form Input Pelanggan */}
                        <div className="space-y-4 my-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-gray-700">Nama Lengkap</label>
                                <input type="text" className="border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#FA424A]" placeholder="Masukkan nama lengkap..." />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-gray-700">Alamat Email</label>
                                <input type="email" className="border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#FA424A]" placeholder="contoh@email.com" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-gray-700">No. HP / WhatsApp</label>
                                <input type="text" className="border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#FA424A]" placeholder="Contoh: 081234567890" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-gray-700">Tipe Keanggotaan (Loyalty)</label>
                                <select className="border border-gray-200 rounded-lg p-2.5 text-sm bg-white focus:outline-none focus:border-[#FA424A]">
                                    <option value="Bronze">Bronze</option>
                                    <option value="Silver">Silver</option>
                                    <option value="Gold">Gold</option>
                                </select>
                            </div>
                        </div>

                        <DialogFooter className="flex justify-end gap-2 mt-4">
                            <DialogClose asChild>
                                <button type="button" className="px-4 py-2 text-sm font-bold text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                                    Batal
                                </button>
                            </DialogClose>
                            <button type="button" className="px-4 py-2 text-sm font-bold bg-[#FA424A] text-white rounded-lg hover:bg-red-600 transition">
                                Simpan Pelanggan
                            </button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                {/* ------------------------------------------------ */}
            </PageHeader>

            {/* --- STAT CARDS DENGAN DESAIN FULL COLOR (SEPERTI DASHBOARD) 🔥 --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard
                    title="Total Pelanggan"
                    value={customers.length}
                    icon={<FiUsers className="text-2xl" />}
                    bgColor="bg-[#E8F0FB]"      // Latar biru muda pastel
                    iconBg="bg-blue-100"
                    iconColor="text-blue-600"
                    footer="Seluruh database CRM"
                />
                <StatCard
                    title="Pelanggan Aktif"
                    value={customers.length - 2}
                    icon={<FiUserCheck className="text-2xl" />}
                    bgColor="bg-[#E7F8F0]"      // Latar hijau muda pastel
                    iconBg="bg-green-100"
                    iconColor="text-green-600"
                    footer="Transaksi bulan ini"
                />
                <StatCard
                    title="Member Gold"
                    value={goldMembers}
                    icon={<FiUserPlus className="text-2xl" />}
                    bgColor="bg-[#FFF4E5]"      // Latar oranye/kuning pastel
                    iconBg="bg-orange-100"
                    iconColor="text-orange-600"
                    footer="Pelanggan prioritas VIP"
                />
            </div>

            {/* --- TABLE --- */}
            <Table
                headers={[
                    "ID Pelanggan",
                    "Nama",
                    "Email",
                    "No. HP (WhatsApp)",
                    "Tipe Member",
                ]}
            >
                {customers.map((cust, idx) => (
                    <tr
                        key={idx}
                        className="border-b border-gray-50 hover:bg-gray-50/70 transition group"
                    >
                        <td className="py-4 px-6 font-medium text-[#FA424A] bg-red-50/30">
                            #{cust.id}
                        </td>
                        <td className="py-4 px-6 font-bold text-gray-800">{cust.name}</td>
                        <td className="py-4 px-6 text-gray-500 text-sm">{cust.email}</td>
                        <td className="py-4 px-6 font-medium text-gray-700">
                            {cust.phone}
                        </td>
                        <td className="py-4 px-6">
                            <LoyaltyBadge loyalty={cust.loyalty} />
                        </td>
                    </tr>
                ))}
            </Table>
        </div>
    );
}