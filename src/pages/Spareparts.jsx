import { useState } from "react";
import { FiPlus, FiSearch, FiFilter, FiEdit2, FiTrash2, FiBox, FiAlertCircle, FiArchive, FiEye } from "react-icons/fi";
import PageHeader from "../components/PageHeader"; 
import Table from "../components/Table";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { sparepartsData } from '../data/mockData';

export default function Spareparts() {
  const [spareparts] = useState(sparepartsData);

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
        <Button type="primary" className="flex items-center gap-2">
          <FiPlus className="text-lg" /> Tambah Sparepart
        </Button>
      </div>

      {/* --- STAT CARDS (Warna Pastel Khas Figma) --- */}
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
        <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition">
          <FiFilter /> Filter Kategori
        </button>
      </div>

      {/* --- TABLE --- */}
      <Table headers={["ID Barang", "Nama Barang", "Kategori", "Stok", "Harga Satuan", "Aksi"]}>
        {spareparts.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50/70 transition">
            {/* ID Barang */}
            <td className="px-6 py-4">
              <span className="font-extrabold text-[#FA424A] bg-red-50 px-2.5 py-1.5 rounded-lg text-xs border border-red-100">
                {item.id}
              </span>
            </td>

            {/* Nama Barang */}
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                  <FiBox className="w-4 h-4" />
                </div>
                <span className="font-bold text-gray-800 text-sm">{item.name}</span>
              </div>
            </td>

            {/* Kategori */}
            <td className="px-6 py-4">
              <Badge type="secondary">{item.category}</Badge>
            </td>

            {/* Stok dengan kondisi warna */}
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

            {/* Harga */}
            <td className="px-6 py-4 font-extrabold text-gray-900 text-sm">
              Rp {item.price.toLocaleString('id-ID')}
            </td>

            {/* Aksi (Selalu Muncul) */}
            <td className="px-6 py-4">
              <div className="flex items-center gap-1.5">
                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition" title="Detail">
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