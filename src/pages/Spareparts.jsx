import React from 'react';
import { Link } from 'react-router-dom';
import { sparepartsData } from '../data/mockData';

const Spareparts = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Spareparts Inventory</h1>
          <p className="text-gray-500">Kelola stok suku cadang bengkel</p>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
          + Tambah Sparepart
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">ID</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Nama Barang</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Kategori</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Stok</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Harga</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {sparepartsData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm font-bold text-red-600">{item.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{item.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{item.category}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{item.stock} Unit</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  Rp {item.price.toLocaleString('id-ID')}
                </td>
                <td className="px-6 py-4 text-sm">
                  <Link 
                    to={`/spareparts/${item.id}`} 
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Lihat Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Spareparts;