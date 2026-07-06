// src/pages/TrackingPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiClock, FiCheckCircle, FiTool, FiTruck, FiActivity, FiArrowLeft, FiAlertCircle } from "react-icons/fi";

export default function TrackingPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isTracking, setIsTracking] = useState(false);

  // Simulasi proses pencarian data
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      setIsTracking(true);
    }
  };

  // Data status pengerjaan berdasarkan Use Case 06 dari laporan CRM
  const trackingSteps = [
    { id: 1, title: "Antri", desc: "Menunggu giliran pengerjaan", status: "completed" },
    { id: 2, title: "Diperiksa", desc: "Inspeksi oleh Service Advisor", status: "completed" },
    { id: 3, title: "Dikerjakan", desc: "Mekanik sedang melakukan perbaikan", status: "active" },
    { id: 4, title: "Quality Check", desc: "Pengecekan standar kualitas akhir", status: "pending" },
    { id: 5, title: "Selesai", desc: "Kendaraan siap diambil & bayar", status: "pending" }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-slate-800">
      {/* HEADER */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <span className="text-2xl font-black tracking-tight text-slate-900">
              Rev<span className="text-[#DE2C2C]">Drive</span>
            </span>
          </div>
          <button 
            onClick={() => navigate("/")} 
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#DE2C2C] transition-colors"
          >
            <FiArrowLeft /> Kembali ke Beranda
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* JUDUL HALAMAN */}
        <div className="text-center mb-10">
          <span className="bg-red-50 text-[#DE2C2C] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-red-100">
            Real-Time Tracking
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Pantau Status Servis
          </h2>
          <p className="text-slate-500 mt-2 text-base max-w-lg mx-auto">
            Masukkan Nomor Polisi atau Nomor Booking untuk melacak progres pengerjaan kendaraan Anda secara real-time.
          </p>
        </div>

        {/* FORM PENCARIAN */}
        {!isTracking ? (
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 max-w-xl mx-auto transform transition-all">
            <form onSubmit={handleSearch} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nomor Polisi / Booking ID</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <FiSearch size={20} />
                  </div>
                  <input 
                    type="text" 
                    required
                    placeholder="Contoh: BM 1234 PCR atau REV-0987"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#DE2C2C] focus:border-transparent outline-none transition-all text-slate-700 font-medium"
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#DE2C2C] hover:bg-[#c22424] text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-500/20 transition-all active:scale-[0.98] mt-2 flex justify-center items-center gap-2"
              >
                <FiActivity size={18} /> Lacak Kendaraan
              </button>
            </form>
          </div>
        ) : (
          
          /* TAMPILAN TRACKING (MUNCUL SETELAH PENCARIAN) */
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* KARTU INFO KENDARAAN & ESTIMASI */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-red-50 text-[#DE2C2C] rounded-2xl flex items-center justify-center shrink-0">
                  <FiTruck size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">
                    {searchQuery.toUpperCase()}
                  </h3>
                  <p className="text-slate-500 font-medium">Toyota Avanza Veloz (2022)</p>
                  <p className="text-sm text-slate-400 mt-1 flex items-center gap-1.5">
                    <FiAlertCircle size={14} /> Keluhan: Ganti Oli & Rem Bunyi
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl w-full sm:w-auto text-left sm:text-right">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Estimasi Selesai</p>
                <div className="flex items-center sm:justify-end gap-2 text-slate-900 font-black text-lg">
                  <FiClock className="text-[#DE2C2C]" /> 14:30 WIB
                </div>
                <p className="text-xs text-slate-500 mt-1">Hari ini</p>
              </div>
            </div>

            {/* KARTU PROGRESS BAR (Sesuai Use Case 06) */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-8 flex items-center gap-2">
                <FiTool className="text-[#DE2C2C]" /> Status Pengerjaan Terkini
              </h3>
              
              <div className="relative">
                {/* Garis vertikal background (untuk versi HP) */}
                <div className="absolute left-[21px] top-4 bottom-4 w-0.5 bg-slate-100 sm:hidden"></div>

                <div className="flex flex-col sm:flex-row justify-between relative gap-6 sm:gap-0">
                  {trackingSteps.map((step, idx) => {
                    
                    // Logika pewarnaan berdasarkan status
                    let dotClass = "bg-white border-4 border-slate-200 text-transparent";
                    let textClass = "text-slate-400";
                    let lineClass = "bg-slate-100";
                    
                    if (step.status === "completed") {
                      dotClass = "bg-[#DE2C2C] border-4 border-red-100 text-white";
                      textClass = "text-slate-800 font-bold";
                      lineClass = "bg-[#DE2C2C]";
                    } else if (step.status === "active") {
                      dotClass = "bg-white border-4 border-[#DE2C2C] text-[#DE2C2C] shadow-[0_0_15px_rgba(222,44,44,0.3)] animate-pulse";
                      textClass = "text-[#DE2C2C] font-black";
                    }

                    return (
                      <div key={step.id} className="relative flex sm:flex-col items-center gap-4 sm:gap-3 flex-1 z-10 group">
                        
                        {/* Garis konektor horizontal (untuk versi Desktop) */}
                        {idx !== trackingSteps.length - 1 && (
                          <div className={`hidden sm:block absolute top-5 left-[50%] w-full h-1 ${lineClass} -z-10 rounded-full`}></div>
                        )}

                        {/* Lingkaran Indikator */}
                        <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${dotClass}`}>
                          {step.status === "completed" ? <FiCheckCircle size={20} /> : <span className="text-sm font-bold">{step.id}</span>}
                        </div>

                        {/* Teks Status */}
                        <div className="sm:text-center">
                          <h4 className={`text-sm sm:text-base ${textClass}`}>{step.title}</h4>
                          <p className="text-xs text-slate-500 sm:max-w-[120px] mx-auto mt-1 sm:leading-tight">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* TOMBOL BATAL/KEMBALI */}
            <div className="text-center pt-4">
              <button 
                onClick={() => setIsTracking(false)}
                className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              >
                Cek Kendaraan Lain
              </button>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}