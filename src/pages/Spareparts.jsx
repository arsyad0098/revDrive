import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. TAMBAHKAN IMPORT INI
import { 
  FiPlus, FiSearch, FiFilter, FiEdit2, FiTrash2, 
  FiBox, FiAlertCircle, FiArchive, FiEye, FiMoreHorizontal 
} from "react-icons/fi";
import PageHeader from "../components/PageHeader"; 
import Table from "../components/Table";
import Badge from "../components/Badge";
import { sparepartsData } from '../data/mockData';

// --- IMPORT SHADCN UI ---
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
// ------------------------

export default function Spareparts() {
  const [spareparts] = useState(sparepartsData);
  const navigate = useNavigate(); // 2. INISIALISASI NAVIGATE DI SINI

  // Logika sederhana untuk statistik
  const totalItems = spareparts.length;
  const lowStock = spareparts.filter(item => item.stock < 10).length;
  const categories = [...new Set(spareparts.map(item => item.category))].length;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-50 shadow-sm">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">Spareparts Inventory</h2>
          <p className="text-xs font-medium text-gray-400 mt-1">Manajemen stok suku cadang dan ketersediaan gudang RevDrive</p>
        </div>
        
        {/* --- DIALOG TAMBAH SPAREPART --- */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="flex items-center gap-2 bg-[#FA424A] hover:bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition cursor-pointer">
              <FiPlus className="text-lg" /> Tambah Sparepart
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md bg-white p-6 rounded-2xl shadow-xl">
            <DialogHeader>
              <DialogTitle className="text-lg font-extrabold text-gray-900">Tambah Suku Cadang Baru</DialogTitle>
              <DialogDescription className="text-sm text-gray-500">
                Masukkan detail barang baru ke dalam inventaris bengkel.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 my-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-gray-700">Nama Barang</label>
                <input type="text" className="border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#FA424A]" placeholder="Contoh: Kampas Rem Depan" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-gray-700">Kategori</label>
                <select className="border border-gray-200 rounded-lg p-2.5 text-sm bg-white focus:outline-none focus:border-[#FA424A]">
                  <option value="Brakes">Brakes</option>
                  <option value="Engine">Engine</option>
                  <option value="Transmission">Transmission</option>
                  <option value="Suspension">Suspension</option>
                  <option value="General">General</option>
                </select>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col gap-1.5 w-1/2">
                  <label className="text-sm font-bold text-gray-700">Stok Awal</label>
                  <input type="number" className="border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#FA424A]" placeholder="0" />
                </div>
                <div className="flex flex-col gap-1.5 w-1/2">
                  <label className="text-sm font-bold text-gray-700">Harga Satuan (Rp)</label>
                  <input type="number" className="border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#FA424A]" placeholder="150000" />
                </div>
              </div>
            </div>

            <DialogFooter className="flex justify-end gap-2 mt-4">
              <DialogClose asChild>
                <button type="button" className="px-4 py-2 text-sm font-bold text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                  Batal
                </button>
              </DialogClose>
              <button type="button" className="px-4 py-2 text-sm font-bold bg-[#FA424A] text-white rounded-lg hover:bg-red-600 transition cursor-pointer">
                Simpan Barang
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* --- STAT CARDS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#E8F0FB] p-6 rounded-2xl border border-[#E8F0FB] shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-bold text-gray-500 mb-1">Total Suku Cadang</p>
              <h3 className="text-4xl font-extrabold text-gray-900">{totalItems}</h3>
            </div>
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
              <FiBox className="w-6 h-6" />
            </div>
          </div>
          <p className="text-[10px] font-bold text-blue-600 mt-4 uppercase tracking-wider">Item Terdaftar</p>
        </div>

        <div className="bg-[#FFEFE7] p-6 rounded-2xl border border-[#FFEFE7] shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-bold text-gray-500 mb-1">Stok Menipis</p>
              <h3 className="text-4xl font-extrabold text-gray-900">{lowStock}</h3>
            </div>
            <div className="p-2 bg-red-100 text-[#FA424A] rounded-lg">
              <FiAlertCircle className="w-6 h-6" />
            </div>
          </div>
          <p className="text-[10px] font-bold text-[#FA424A] mt-4 uppercase tracking-wider">Perlu Restock Segera</p>
        </div>

        <div className="bg-[#FDEBF9] p-6 rounded-2xl border border-[#FDEBF9] shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-bold text-gray-500 mb-1">Kategori</p>
              <h3 className="text-4xl font-extrabold text-gray-900">{categories}</h3>
            </div>
            <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
              <FiArchive className="w-6 h-6" />
            </div>
          </div>
          <p className="text-[10px] font-bold text-purple-600 mt-4 uppercase tracking-wider">Jenis Komponen</p>
        </div>
      </div>

      {/* --- FILTER & SEARCH --- */}
      <div className="flex flex-col md:flex-row gap-3 items-center justify-between bg-white p-4 rounded-xl border border-gray-50 shadow-sm">
        <div className="relative w-full md:w-80">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
          <input
            type="text"
            placeholder="Cari nama barang atau ID..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#FA424A] focus:bg-white transition"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition cursor-pointer">
          <FiFilter /> Filter Kategori
        </button>
      </div>

      {/* --- TABLE --- */}
      <Table headers={["ID Barang", "Nama Barang", "Kategori", "Stok", "Harga Satuan", "Aksi"]}>
        {spareparts.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50/70 transition group">
            <td className="px-6 py-4">
              <span className="font-extrabold text-[#FA424A] bg-red-50 px-2.5 py-1.5 rounded-lg text-xs border border-red-100">
                {item.id}
              </span>
            </td>

            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                  <FiBox className="w-4 h-4" />
                </div>
                <span className="font-bold text-gray-800 text-sm">{item.name}</span>
              </div>
            </td>

            <td className="px-6 py-4">
              <Badge type="secondary">{item.category}</Badge>
            </td>

            <td className="px-6 py-4">
              <div className="flex flex-col">
                <span className={`font-extrabold text-sm ${item.stock < 10 ? 'text-[#FA424A]' : 'text-gray-700'}`}>
                  {item.stock} Unit
                </span>
                {item.stock < 10 && (
                  <span className="text-[9px] font-bold text-[#FA424A] uppercase tracking-tighter">Low Stock!</span>
                )}
              </div>
            </td>

            <td className="px-6 py-4 font-extrabold text-gray-900 text-sm">
              Rp {item.price.toLocaleString('id-ID')}
            </td>

            <td className="px-6 py-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="p-2 text-gray-400 hover:text-gray-800 bg-gray-50 hover:bg-gray-200 rounded-lg transition cursor-pointer" title="Menu Aksi">
                    <FiMoreHorizontal className="w-5 h-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40 bg-white border border-gray-100 rounded-xl shadow-lg p-1 z-50">
                  <DropdownMenuLabel className="text-xs font-bold text-gray-400 px-2 py-1">Aksi Barang</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-100 my-1" />
                  
                  {/* FIX: SEKARANG TOMBOL INI SUDAH BISA DIKLIK DAN BERPINDAH HALAMAN */}
                  <DropdownMenuItem 
                    onClick={() => navigate(`/spareparts/${item.id}`)}
                    className="flex items-center gap-2 px-2 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg cursor-pointer outline-none transition"
                  >
                    <FiEye className="w-4 h-4" /> Detail Barang
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem className="flex items-center gap-2 px-2 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-orange-500 rounded-lg cursor-pointer outline-none transition">
                    <FiEdit2 className="w-4 h-4" /> Edit Stok
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator className="bg-gray-100 my-1" />
                  <DropdownMenuItem className="flex items-center gap-2 px-2 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg cursor-pointer outline-none transition">
                    <FiTrash2 className="w-4 h-4" /> Hapus Barang
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