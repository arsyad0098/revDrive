// src/pages/EstimatesPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function EstimatesPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [estimateData, setEstimateData] = useState(null);
    const [isApproved, setIsApproved] = useState(false);
    const [hasActioned, setHasActioned] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!searchQuery) return;

        setIsSearching(true);
        // Simulasi hit API CRM RevDrive untuk data Transparansi Estimasi Biaya
        setTimeout(() => {
            setIsSearching(false);
            setIsApproved(false);
            setHasActioned(false);
            setEstimateData({
                estimateNo: "EST-2026-0704",
                date: "06 Juli 2026",
                customerName: "Ahmad Rifai",
                vehicle: "Toyota Avanza Veloz (B 1234 ABC)",
                serviceAdvisor: "Hendra Wijaya (SA-02)",
                complaint: "Suara mesin kasar saat akselerasi, rem depan berdecit, dan jadwal Servis Berkala 40.000 KM.",
                items: [
                    { id: 1, type: "Suku Cadang", name: "Oli Mesin TMO Synthetic 10W-40 (4 Liter)", qty: 1, price: 380000 },
                    { id: 2, type: "Suku Cadang", name: "Filter Oli Original Toyota", qty: 1, price: 75000 },
                    { id: 3, type: "Suku Cadang", name: "Brake Pad / Kampas Rem Depan", qty: 1, price: 420000 },
                    { id: 4, type: "Jasa Servis", name: "Paket Servis Berkala 40.000 KM & Tune Up", qty: 1, price: 350000 },
                    { id: 5, type: "Jasa Servis", name: "Jasa Penggantian & Kalibrasi Rem Depan", qty: 1, price: 120000 }
                ],
                discount: 50000, // Diskon poin loyalitas / promo
                taxRate: 0.11    // PPN 11%
            });
        }, 1000);
    };

    // Hitung Kalkulasi Biaya
    const calculateTotal = () => {
        if (!estimateData) return { subtotal: 0, tax: 0, total: 0 };
        const subtotal = estimateData.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
        const subtotalAfterDiscount = subtotal - estimateData.discount;
        const tax = subtotalAfterDiscount * estimateData.taxRate;
        const total = subtotalAfterDiscount + tax;
        return { subtotal, tax, total };
    };

    const { subtotal, tax, total } = calculateTotal();

    const handleAction = (status) => {
        setHasActioned(true);
        if (status === 'approve') {
            setIsApproved(true);
        } else {
            setIsApproved(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F8F9FA] text-slate-800 font-sans antialiased scroll-smooth">
            {/* Navbar */}
            <nav className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-black tracking-tight text-slate-900">
                        Rev<span className="text-[#DE2C2C]">Drive</span>
                    </Link>
                    <Link to="/" className="text-sm font-medium text-slate-600 hover:text-[#DE2C2C] transition-colors flex items-center gap-1">
                        <span>←</span> Kembali ke Beranda
                    </Link>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
                <div className="text-center mb-12 space-y-3">
                    <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-xs font-semibold px-4 py-1.5 rounded-full border border-orange-100">
                        🧾 Transparansi Estimasi Digital
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Persetujuan Estimasi Biaya
                    </h1>
                    <p className="text-slate-600 text-base max-w-xl mx-auto leading-relaxed">
                        Masukkan Nomor Plat Kendaraan atau Nomor Estimasi Anda untuk meninjau rincian nota serta memberikan persetujuan sebelum mekanik bekerja.
                    </p>
                </div>

                {/* Form Pencarian */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg shadow-slate-200/40 border border-slate-100 mb-12">
                    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
                        <input 
                            type="text" 
                            placeholder="Masukkan No. Polisi atau No. Estimasi (Contoh: B 1234 ABC)" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value.toUpperCase())}
                            className="flex-grow px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#DE2C2C] transition-all font-semibold text-slate-700 placeholder:font-normal placeholder:text-slate-400"
                            required
                        />
                        <button 
                            type="submit" 
                            disabled={isSearching}
                            className="bg-[#DE2C2C] text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-red-500/20 hover:bg-[#c22424] hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                        >
                            {isSearching ? "Mencari Data..." : "Lihat Rincian Biaya"}
                        </button>
                    </form>
                </div>

                {/* Hasil Data Estimasi */}
                {estimateData && (
                    <div className="space-y-8 animate-fade-in">
                        
                        {/* Header Status Nota */}
                        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">No. Estimasi Digital</p>
                                <h2 className="text-xl font-black text-slate-900">{estimateData.estimateNo}</h2>
                                <p className="text-xs text-slate-500 mt-1">Dibuat pada: {estimateData.date} • Oleh: {estimateData.serviceAdvisor}</p>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-xs font-semibold text-slate-400 mb-1">Status Persetujuan:</span>
                                {!hasActioned ? (
                                    <span className="bg-amber-50 text-amber-600 border border-amber-200 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide">
                                        ⏳ Menunggu Keputusan
                                    </span>
                                ) : isApproved ? (
                                    <span className="bg-green-50 text-green-600 border border-green-200 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide">
                                        ✅ Disetujui Pelanggan
                                    </span>
                                ) : (
                                    <span className="bg-red-50 text-[#DE2C2C] border border-red-200 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide">
                                        ❌ Ditolak / Revisi
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Rincian Kendaraan & Keluhan */}
                        <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-md space-y-4">
                            <h3 className="text-md font-bold text-slate-200 border-b border-white/10 pb-2 flex items-center gap-2">
                                🚗 Data Unit & Keluhan Masuk
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="text-slate-400 text-xs">Nama Pelanggan / Pemilik</p>
                                    <p className="font-bold text-base">{estimateData.customerName}</p>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-xs">Identitas Kendaraan</p>
                                    <p className="font-bold text-base text-yellow-400">{estimateData.vehicle}</p>
                                </div>
                                <div className="md:col-span-2 bg-white/5 p-4 rounded-xl border border-white/5 mt-2">
                                    <p className="text-slate-400 text-xs font-semibold mb-1">Deskripsi Masalah (CRM Ticket Summary):</p>
                                    <p className="text-slate-200 leading-relaxed text-xs italic">"{estimateData.complaint}"</p>
                                </div>
                            </div>
                        </div>

                        {/* Tabel Rincian Biaya Item */}
                        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                                <h3 className="font-bold text-slate-900 text-sm">🛠️ Breakdown Suku Cadang & Jasa Mekanik</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                    <thead>
                                        <tr className="bg-slate-100/50 text-slate-500 font-bold border-b border-slate-100">
                                            <th className="p-4 pl-6">Kategori</th>
                                            <th className="p-4">Deskripsi Item</th>
                                            <th className="p-4 text-center">Qty</th>
                                            <th className="p-4 text-right pr-6">Harga Satuan</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                                        {estimateData.items.map((item) => (
                                            <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                                                <td className="p-4 pl-6">
                                                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${
                                                        item.type === 'Suku Cadang' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                                                    }`}>
                                                        {item.type}
                                                    </span>
                                                </td>
                                                <td className="p-4 font-bold text-slate-900">{item.name}</td>
                                                <td className="p-4 text-center text-slate-500">{item.qty}</td>
                                                <td className="p-4 text-right pr-6 font-semibold text-slate-900">Rp {item.price.toLocaleString('id-ID')}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Sesi Totalan Finansial */}
                            <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col items-end space-y-2 text-sm">
                                <div className="w-full max-w-xs flex justify-between text-slate-500 font-medium">
                                    <span>Subtotal Item:</span>
                                    <span className="text-slate-900 font-semibold">Rp {subtotal.toLocaleString('id-ID')}</span>
                                </div>
                                <div className="w-full max-w-xs flex justify-between text-emerald-600 font-bold">
                                    <span>Potongan / Diskon:</span>
                                    <span>- Rp {estimateData.discount.toLocaleString('id-ID')}</span>
                                </div>
                                <div className="w-full max-w-xs flex justify-between text-slate-500 font-medium">
                                    <span>PPN (11%):</span>
                                    <span className="text-slate-900 font-semibold">Rp {tax.toLocaleString('id-ID')}</span>
                                </div>
                                <div className="w-full max-w-xs flex justify-between text-base font-black border-t border-slate-200 pt-3 text-slate-900">
                                    <span>Grand Total:</span>
                                    <span className="text-[#DE2C2C] text-lg">Rp {total.toLocaleString('id-ID')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Aksi Persetujuan Digital */}
                        {!hasActioned ? (
                            <div className="bg-amber-50/50 border border-amber-100 p-6 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-4 items-center shadow-sm">
                                <div className="md:col-span-1">
                                    <h4 className="font-bold text-slate-900 text-sm mb-1">Konfirmasi Tindakan</h4>
                                    <p className="text-xs text-slate-500">Mekanik tidak akan melakukan pembongkaran sampai Anda memberikan respon.</p>
                                </div>
                                <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 justify-end">
                                    <button 
                                        onClick={() => handleAction('reject')}
                                        className="bg-white border border-slate-200 text-slate-700 text-xs font-bold px-6 py-3.5 rounded-xl hover:bg-red-50 hover:text-[#DE2C2C] hover:border-red-200 transition-all text-center"
                                    >
                                        ❌ Tolak & Ajukan Revisi Biaya
                                    </button>
                                    <button 
                                        onClick={() => handleAction('approve')}
                                        className="bg-slate-900 text-white text-xs font-bold px-8 py-3.5 rounded-xl hover:bg-[#DE2C2C] shadow-md shadow-slate-900/10 transition-all text-center"
                                    >
                                        🚀 Setujui Estimasi & Mulai Kerjakan
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className={`p-6 rounded-3xl border flex items-start gap-4 shadow-sm animate-fade-in ${
                                isApproved ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'
                            }`}>
                                <div className="text-2xl pt-0.5">{isApproved ? "🎉" : "📨"}</div>
                                <div>
                                    <h4 className={`font-bold text-sm ${isApproved ? 'text-green-800' : 'text-red-800'}`}>
                                        {isApproved ? "Estimasi Berhasil Disetujui!" : "Penolakan Estimasi Dikirim"}
                                    </h4>
                                    <p className={`text-xs mt-1 leading-relaxed ${isApproved ? 'text-green-600' : 'text-red-600'}`}>
                                        {isApproved 
                                            ? "Sistem CRM telah memperbarui status tiket kendaraan Anda. Pemberitahuan instruksi kerja otomatis dikirim ke gawai mekanik utama untuk segera memulai proses servis kendaraan Anda."
                                            : "Pemberitahuan penolakan biaya telah masuk ke sistem Service Advisor. Tim RevDrive akan segera menghubungi Anda kembali melalui WhatsApp atau Telepon untuk mengajukan alternatif penyesuaian suku cadang."
                                        }
                                    </p>
                                </div>
                            </div>
                        )}

                    </div>
                )}
            </main>
        </div>
    );
}