import React, { useState } from "react";
import { FiTruck, FiCalendar, FiClock, FiFileText, FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function BookingPage() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form state berdasarkan atribut data customer di laporan CRM
  const [formData, setFormData] = useState({
    noPolisi: "",
    merek: "",
    model: "",
    tahun: "",
    jenisServis: "Servis Berkala",
    keluhan: "",
    tanggal: "",
    jam: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi pengiriman data
    console.log("Data Booking:", formData);
    setIsSubmitted(true);
    
    // Kirim notifikasi WhatsApp simulasi (opsional)
    // window.open(`https://wa.me/62812345678?text=Halo RevDrive, saya ingin booking servis untuk mobil ${formData.noPolisi}`);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiCheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Booking Berhasil!</h2>
          <p className="text-gray-500 mb-8">
            Data reservasi kamu sudah masuk ke sistem kami. Konfirmasi jadwal akan dikirimkan via WhatsApp.
          </p>
          <button 
            onClick={() => navigate("/")}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header Nav (Senada dengan Landing Page) */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tighter cursor-pointer" onClick={() => navigate("/")}>
              Rev<span className="text-red-600">Drive</span>
            </h1>
          </div>
          <button onClick={() => navigate("/")} className="text-gray-600 hover:text-red-600 font-medium">Batal</button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10">
          <span className="bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            Reservasi Online
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-4 tracking-tight">
            Booking Servis Kendaraan
          </h2>
          <p className="text-gray-500 mt-2 text-lg">
            Isi detail kendaraan dan pilih jadwal yang tersedia.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Section 1: Informasi Kendaraan */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <div className="flex items-center gap-3 mb-2 text-red-600">
              <FiTruck size={20} />
              <h3 className="font-bold text-gray-900 uppercase text-sm tracking-widest">Informasi Kendaraan</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nomor Polisi (Plat)</label>
                <input 
                  required
                  placeholder="Contoh: B 1234 ABC"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
                  onChange={(e) => setFormData({...formData, noPolisi: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Merek</label>
                  <input 
                    required
                    placeholder="Contoh: Toyota"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none"
                    onChange={(e) => setFormData({...formData, merek: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tahun</label>
                  <input 
                    required
                    type="number"
                    placeholder="2022"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none"
                    onChange={(e) => setFormData({...formData, tahun: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tipe / Model</label>
                <input 
                  required
                  placeholder="Contoh: Avanza Veloz"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none"
                  onChange={(e) => setFormData({...formData, model: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Section 2: Jadwal & Keluhan */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2 text-red-600">
                <FiCalendar size={20} />
                <h3 className="font-bold text-gray-900 uppercase text-sm tracking-widest">Detail & Jadwal</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tanggal</label>
                  <input 
                    required
                    type="date"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none"
                    onChange={(e) => setFormData({...formData, tanggal: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Waktu</label>
                  <select 
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none appearance-none"
                    onChange={(e) => setFormData({...formData, jam: e.target.value})}
                  >
                    <option value="">Pilih Jam</option>
                    <option value="09:00">09:00 WIB</option>
                    <option value="11:00">11:00 WIB</option>
                    <option value="14:00">14:00 WIB</option>
                    <option value="16:00">16:00 WIB</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <FiFileText size={14} /> Keluhan / Kebutuhan Servis
                </label>
                <textarea 
                  required
                  rows="4"
                  placeholder="Jelaskan kendala kendaraan Anda (Contoh: Ganti oli, rem bunyi, AC tidak dingin)"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none resize-none"
                  onChange={(e) => setFormData({...formData, keluhan: e.target.value})}
                ></textarea>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-200 transition-all hover:-translate-y-1 active:translate-y-0 mt-4"
            >
              Konfirmasi Reservasi
            </button>
          </div>
        </form>

        <p className="text-center text-gray-400 text-sm mt-12">
          Dengan melakukan reservasi, Anda menyetujui syarat dan ketentuan layanan RevDrive Autosolution.
        </p>
      </main>
    </div>
  );
}