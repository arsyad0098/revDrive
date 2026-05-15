import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { sparepartsData } from '../data/mockData';

const SparepartDetail = () => {
  const { id } = useParams();
  
  // Cari data sparepart berdasarkan ID dari URL
  const product = sparepartsData.find((item) => item.id === id);

  if (!product) {
    return <div className="p-10 text-center">Sparepart tidak ditemukan!</div>;
  }

  return (
    <div className="p-6">
      <Link to="/spareparts" className="text-red-600 hover:underline mb-4 inline-block">
        ← Kembali ke Daftar
      </Link>
      
      <div className="bg-white rounded-2xl shadow-lg p-8 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Gambar Produk */}
          <div className="rounded-xl overflow-hidden bg-gray-100 h-80">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info Detail */}
          <div>
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-800 mt-4">{product.name}</h1>
            <p className="text-red-600 text-2xl font-bold mt-2">
              Rp {product.price.toLocaleString('id-ID')}
            </p>
            
            <div className="mt-6 border-t pt-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Brand</span>
                <span className="font-semibold">{product.brand}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Stok Tersedia</span>
                <span className={`font-semibold ${product.stock < 20 ? 'text-orange-500' : 'text-green-600'}`}>
                  {product.stock} Unit
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Kode Part</span>
                <span className="font-semibold text-gray-800">{product.id}</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-bold text-gray-800">Deskripsi:</h4>
              <p className="text-gray-600 mt-2 leading-relaxed">
                {product.description}
              </p>
            </div>
            
            <button className="w-full mt-8 bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 shadow-md transition">
              Gunakan untuk Servis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparepartDetail;