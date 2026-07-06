// src/pages/HistoryPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HistoryPage() {
    const [plateNumber, setPlateNumber] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [historyData, setHistoryData] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!plateNumber) return;
        
        setIsSearching(true);
        // Simulasi hit API CRM
        setTimeout(() => {
            setIsSearching(false);
            setHistoryData([
                {
                    id: "INV-20230815",
                    date: "15 Agustus 2023",
                    type: "Servis Berkala 40.000 KM",
                    mechanic: "Budi Santoso",
                    notes: "Kondisi rem depan sudah menipis, disarankan ganti di servis berikutnya.",
                    parts: ["Oli Mesin TMO 10W-40", "Filter Oli", "Filter Udara"],
                    cost: "Rp 850.000"
                },
                {
                    id: "INV-20230210",
                    date: "10 Februari 2023",
                    type: "Ganti Sparepart & Tune Up",
                    mechanic: "Joko Anwar",
                    notes: "Busi diganti 4 set, mesin kembali responsif.",
                    parts: ["Busi Iridium x4", "Cairan Injector Cleaner"],
                    cost: "Rp 620.000"
                }
            ]);
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-[#F8F9FA] text-slate-800 font-sans antialiased scroll-smooth">
            {/* Navbar (Senada dengan LandingPage) */}
            <nav className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="text-2xl font-black tracking-tight text-slate-900">
                            Rev<span className="text-[#DE2C2C]">Drive</span>
                        </span>
                    </Link>
                    <Link to="/" className="text-sm font-medium text-slate-600 hover:text-[#DE2C2C] transition-colors flex items-center gap-1">
                        <span>←</span> Kembali ke Beranda
                    </Link>
                </div>
            </nav>

            <main className="max-w-3xl mx-auto px-6 py-16 lg:py-20">
                <div className="text-center mb-12 space-y-3">
                    <div className="inline-flex items-center gap-2 bg-red-50 text-[#DE2C2C] text-xs font-semibold px-4 py-1.5 rounded-full border border-red-100">
                        📂 Riwayat Digital
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Lacak Rekam Jejak Kendaraan
                    </h1>
                    <p className="text-slate-600 text-base max-w-xl mx-auto leading-relaxed">
                        Masukkan Nomor Polisi (Plat) kendaraan Anda untuk melihat riwayat servis, penggantian suku cadang, dan estimasi dari mekanik kami.
                    </p>
                </div>

                {/* Form Pencarian */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg shadow-slate-200/40 border border-slate-100 mb-12">
                    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
                        <input 
                            type="text" 
                            placeholder="Contoh: BM 1234 ABC" 
                            value={plateNumber}
                            onChange={(e) => setPlateNumber(e.target.value.toUpperCase())}
                            className="flex-grow px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#DE2C2C] transition-all font-semibold text-slate-700 uppercase placeholder:normal-case placeholder:font-normal placeholder:text-slate-400"
                            required
                        />
                        <button 
                            type="submit" 
                            disabled={isSearching}
                            className="bg-[#DE2C2C] text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-red-500/20 hover:bg-[#c22424] hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
                        >
                            {isSearching ? "Mencari Data..." : "Cari Riwayat"}
                        </button>
                    </form>
                </div>

                {/* Hasil Pencarian */}
                {historyData && (
                    <div className="space-y-6 animate-fade-in">
                        <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center justify-between">
                            <span>Hasil Pencarian: <span className="text-[#DE2C2C]">{plateNumber}</span></span>
                            <span className="text-xs font-semibold bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">
                                {historyData.length} Data Ditemukan
                            </span>
                        </h2>
                        
                        {historyData.map((record, index) => (
                            <div key={index} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DE2C2C]" />
                                
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-3">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">{record.type}</h3>
                                        <p className="text-sm text-slate-500 mt-1">{record.date} • Dikerjakan oleh <span className="font-medium text-slate-700">{record.mechanic}</span></p>
                                    </div>
                                    <span className="bg-red-50 text-[#DE2C2C] text-xs font-bold px-3 py-1.5 rounded-full border border-red-100 whitespace-nowrap">
                                        {record.id}
                                    </span>
                                </div>

                                <div className="bg-slate-50 p-4 rounded-2xl mb-5 border border-slate-100">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1.5">Catatan Mekanik</h4>
                                    <p className="text-slate-700 text-sm italic">"{record.notes}"</p>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 mt-4 pt-5 border-t border-slate-100">
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Suku Cadang Diganti:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {record.parts.map((part, idx) => (
                                                <span key={idx} className="bg-white border border-slate-200 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-xl shadow-sm">
                                                    {part}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-left sm:text-right w-full sm:w-auto bg-slate-50 sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none border border-slate-100 sm:border-none">
                                        <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Total Biaya</span>
                                        <span className="text-lg font-black text-slate-900">{record.cost}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="bg-white p-5 rounded-2xl text-sm border border-slate-200 mt-8 flex items-start gap-4 shadow-sm">
                            <div className="w-10 h-10 bg-red-50 text-[#DE2C2C] rounded-xl flex items-center justify-center text-xl shrink-0">
                                💡
                            </div>
                            <p className="text-slate-600 leading-relaxed pt-1">
                                Menyimpan riwayat servis secara digital memudahkan Service Advisor RevDrive mendiagnosa masalah kendaraan Anda di masa depan dengan lebih cepat dan presisi.
                            </p>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}