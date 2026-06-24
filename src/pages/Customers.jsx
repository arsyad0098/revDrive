import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import PageHeader from "../components/PageHeader";
import { FiUsers, FiUserPlus, FiUserCheck, FiSearch, FiTrash2, FiEdit2 } from "react-icons/fi";
import Table from "../components/Table";
import LoyaltyBadge from "../components/LoyaltyBadge";
import StatCard from "../components/StatCard";

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

export default function Customers() {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState(""); // State untuk fitur pencarian
    const [editingId, setEditingId] = useState(null);   // State penanda jika sedang mengedit

    // Form State untuk Tambah & Edit User
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", loyalty: "Bronze", password: "password123"
    });

    // --- READ (Ambil Data) ---
    const fetchCustomers = async () => {
        const { data, error } = await supabase.from("users").select("*").order("created_at", { ascending: false });
        if (!error && data) setCustomers(data);
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    // --- CREATE & UPDATE (Simpan Data) ---
    const handleSaveCustomer = async () => {
        setLoading(true);

        if (editingId) {
            // Logika UPDATE data ke Supabase
            const { error } = await supabase
                .from("users")
                .update({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    loyalty: formData.loyalty
                })
                .eq("id", editingId);

            if (!error) {
                fetchCustomers();
                setIsDialogOpen(false);
                setEditingId(null);
                setFormData({ name: "", email: "", phone: "", loyalty: "Bronze", password: "password123" });
            } else {
                alert("Gagal memperbarui pelanggan: " + error.message);
            }
        } else {
            // Logika CREATE data baru ke Supabase
            const { error } = await supabase.from("users").insert([formData]);
            
            if (!error) {
                fetchCustomers();
                setIsDialogOpen(false);
                setFormData({ name: "", email: "", phone: "", loyalty: "Bronze", password: "password123" });
            } else {
                alert("Gagal menambahkan pelanggan: " + error.message);
            }
        }
        setLoading(false);
    };

    // --- Persiapan Data saat Tombol Edit Diklik ---
    const handleEditClick = (cust) => {
        setEditingId(cust.id);
        setFormData({
            name: cust.name || "",
            email: cust.email || "",
            phone: cust.phone || "",
            loyalty: cust.loyalty || "Bronze",
            password: cust.password || "password123"
        });
        setIsDialogOpen(true);
    };

    // --- DELETE (Hapus Data) ---
    const handleDelete = async (id) => {
        if(window.confirm("Apakah anda yakin ingin menghapus pelanggan ini?")) {
            const { error } = await supabase.from("users").delete().eq("id", id);
            if(!error) fetchCustomers();
        }
    };

    // --- FILTER PENCARIAN ---
    const filteredCustomers = customers.filter((cust) => {
        const matchName = cust.name?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchEmail = cust.email?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchPhone = cust.phone?.includes(searchQuery);
        return matchName || matchEmail || matchPhone;
    });

    const goldMembers = customers.filter((cust) => cust.loyalty === "Gold").length;

    return (
        <div className="font-sans space-y-6 animate-fade-in">
            <PageHeader title="Customers" breadcrumb={["Dashboard", "Customers"]}>
                {/* Fitur Pencarian Dinamis */}
                <div className="hidden md:flex items-center bg-gray-50 border border-gray-100 rounded-full px-4 py-2 hover:border-red-300 transition">
                    <FiSearch className="text-gray-400 text-lg" />
                    <input 
                        type="text" 
                        placeholder="Cari Pelanggan..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent border-none outline-none ml-2 text-sm w-48" 
                    />
                </div>

                <Dialog open={isDialogOpen} onOpenChange={(open) => {
                    setIsDialogOpen(open);
                    if(!open) {
                        setEditingId(null); // Reset mode jika dialog ditutup paksa
                        setFormData({ name: "", email: "", phone: "", loyalty: "Bronze", password: "password123" });
                    }
                }}>
                    <DialogTrigger asChild>
                        <button 
                            onClick={() => {
                                setEditingId(null);
                                setFormData({ name: "", email: "", phone: "", loyalty: "Bronze", password: "password123" });
                            }}
                            className="flex items-center gap-2 bg-[#FA424A] hover:bg-red-600 text-white rounded-full px-6 py-2 text-sm font-semibold shadow-sm transition"
                        >
                            <FiUserPlus className="text-lg" /> Tambah Pelanggan
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md bg-white p-6 rounded-2xl shadow-xl">
                        <DialogHeader>
                            <DialogTitle className="text-lg font-extrabold text-gray-900">
                                {editingId ? "Ubah Data Pelanggan" : "Tambah Pelanggan Baru"}
                            </DialogTitle>
                            <DialogDescription className="text-sm text-gray-500">
                                {editingId ? "Perbarui informasi data profil pelanggan terpilih." : "Masukkan data profil pelanggan baru untuk database."}
                            </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-4 my-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-gray-700">Nama Lengkap</label>
                                <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#FA424A]" placeholder="Masukkan nama lengkap..." />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-gray-700">Alamat Email</label>
                                <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#FA424A]" placeholder="contoh@email.com" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-gray-700">No. HP / WhatsApp</label>
                                <input type="text" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#FA424A]" placeholder="081234567890" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-gray-700">Tipe Keanggotaan (Loyalty)</label>
                                <select value={formData.loyalty} onChange={(e) => setFormData({...formData, loyalty: e.target.value})} className="border border-gray-200 rounded-lg p-2.5 text-sm bg-white focus:outline-none focus:border-[#FA424A]">
                                    <option value="Bronze">Bronze</option>
                                    <option value="Silver">Silver</option>
                                    <option value="Gold">Gold</option>
                                </select>
                            </div>
                        </div>

                        <DialogFooter className="flex justify-end gap-2 mt-4">
                            <DialogClose asChild>
                                <button type="button" className="px-4 py-2 text-sm font-bold text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition">Batal</button>
                            </DialogClose>
                            <button type="button" onClick={handleSaveCustomer} disabled={loading} className="px-4 py-2 text-sm font-bold bg-[#FA424A] text-white rounded-lg hover:bg-red-600 transition">
                                {loading ? "Menyimpan..." : editingId ? "Simpan Perubahan" : "Simpan Pelanggan"}
                            </button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </PageHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard title="Total Pelanggan" value={customers.length} icon={<FiUsers className="text-2xl" />} bgColor="bg-[#E8F0FB]" iconBg="bg-blue-100" iconColor="text-blue-600" footer="Seluruh database CRM" />
                <StatCard title="Pelanggan Aktif" value={customers.length > 0 ? customers.length - 1 : 0} icon={<FiUserCheck className="text-2xl" />} bgColor="bg-[#E7F8F0]" iconBg="bg-green-100" iconColor="text-green-600" footer="Transaksi bulan ini" />
                <StatCard title="Member Gold" value={goldMembers} icon={<FiUserPlus className="text-2xl" />} bgColor="bg-[#FFF4E5]" iconBg="bg-orange-100" iconColor="text-orange-600" footer="Pelanggan prioritas VIP" />
            </div>

            <Table headers={["Nama", "Email", "No. HP", "Tipe Member", "Aksi"]}>
                {filteredCustomers.map((cust, idx) => (
                    <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50/70 transition group">
                        <td className="py-4 px-6 font-bold text-gray-800">{cust.name}</td>
                        <td className="py-4 px-6 text-gray-500 text-sm">{cust.email}</td>
                        <td className="py-4 px-6 font-medium text-gray-700">{cust.phone || "-"}</td>
                        <td className="py-4 px-6"><LoyaltyBadge loyalty={cust.loyalty || "Bronze"} /></td>
                        <td className="py-4 px-6 flex items-center gap-2">
                            {/* Tambahan Tombol Edit */}
                            <button onClick={() => handleEditClick(cust)} className="text-blue-500 hover:bg-blue-50 p-2 rounded-lg transition" title="Edit User">
                                <FiEdit2 />
                            </button>
                            <button onClick={() => handleDelete(cust.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition" title="Hapus User">
                                <FiTrash2 />
                            </button>
                        </td>
                    </tr>
                ))}
            </Table>
        </div>
    );
}