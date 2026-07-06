// src/pages/LoyaltyPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoyaltyPage() {
    const [phoneOrId, setPhoneOrId] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [memberData, setMemberData] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!phoneOrId) return;

        setIsSearching(true);
        // Simulasi hit API CRM RevDrive untuk data Loyalitas
        setTimeout(() => {
            setIsSearching(false);
            setMemberData({
                name: "Ahmad Rifai",
                memberId: "RD-2024-8891",
                tier: "Gold Member",
                totalPoints: 1250,
                joinedDate: "12 Januari 2024",
                history: [
                    { id: "TX-99102", date: "15 Agustus 2023", desc: "Servis Berkala 40.000 KM (INV-20230815)", points: "+150 Poin", type: "earn" },
                    { id: "TX-98421", date: "10 Februari 2023", desc: "Ganti Sparepart & Tune Up (INV-20230210)", points: "+100 Poin", type: "earn" },
                    { id: "TX-97210", date: "05 Desember 2023", desc: "Penukaran Voucher Diskon Jasa Rp 50.000", points: "-200 Poin", type: "redeem" }
                ],
                rewards: [
                    { id: "RW-01", title: "Diskon Jasa Servis Rp 50.000", cost: 200, icon: "🧾", available: true },
                    { id: "RW-02", title: "Gratis Oli Mesin TMO 10W-40 (1 Liter)", cost: 500, icon: "🛢️", available: true },
                    { id: "RW-03", title: "Gratis Jasa Spooring & Balancing", cost: 750, icon: "🚗", available: true },
                    { id: "RW-04", title: "Merchandise Eksklusif RevDrive (Kaos/Topi)", cost: 400, icon: "🧢", available: true }
                ]
            });
        }, 1200);
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
                    <div className="inline-flex items-center gap-2 bg-red-50 text-[#DE2C2C] text-xs font-semibold px-4 py-1.5 rounded-full border border-red-100">
                        🎁 Program Loyalitas Pelanggan
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        RevDrive Rewards Club
                    </h1>
                    <p className="text-slate-600 text-base max-w-xl mx-auto leading-relaxed">
                        Kumpulkan poin dari setiap transaksi perawatan kendaraan Anda. Tukarkan dengan keuntungan eksklusif dan servis gratis.
                    </p>
                </div>

                {/* Form Pencarian Member */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg shadow-slate-200/40 border border-slate-100 mb-12">
                    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
                        <input 
                            type="text" 
                            placeholder="Masukkan No. Handphone atau ID Member (Contoh: 0812xxxx)" 
                            value={phoneOrId}
                            onChange={(e) => setPhoneOrId(e.target.value)}
                            className="flex-grow px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#DE2C2C] transition-all font-semibold text-slate-700 placeholder:font-normal placeholder:text-slate-400"
                            required
                        />
                        <button 
                            type="submit" 
                            disabled={isSearching}
                            className="bg-[#DE2C2C] text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-red-500/20 hover:bg-[#c22424] hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
                        >
                            {isSearching ? "Memverifikasi..." : "Cek Poin Saya"}
                        </button>
                    </form>
                </div>

                {/* Hasil Pencarian / Data Member */}
                {memberData && (
                    <div className="space-y-8 animate-fade-in">
                        
                        {/* Ringkasan Profil & Poin */}
                        <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#DE2C2C]/30 to-transparent pointer-events-none" />
                            
                            <div className="space-y-1 relative z-10 md:col-span-2">
                                <span className="inline-block text-[11px] font-bold uppercase tracking-widest bg-yellow-500 text-slate-950 px-2.5 py-1 rounded-md mb-2">
                                    ⭐ {memberData.tier}
                                </span>
                                <h2 className="text-2xl font-black tracking-tight">{memberData.name}</h2>
                                <p className="text-sm text-slate-400">ID Anggota: {memberData.memberId} • Bergabung sejak {memberData.joinedDate}</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center relative z-10 md:col-span-1">
                                <span className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Total Poin Aktif</span>
                                <span className="text-3xl font-black text-yellow-400">{memberData.totalPoints} <span className="text-sm font-bold text-white">Poin</span></span>
                            </div>
                        </div>

                        {/* Pembagian Grid: Katalog Rewards vs Riwayat */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            
                            {/* Kiri: Katalog Penukaran */}
                            <div className="lg:col-span-2 space-y-4">
                                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">🎁 Katalog Penukaran Hadiah</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Perbaikan: Menambahkan optional chaining (?) agar tidak crash jika data rewards kosong */}
                                    {memberData.rewards?.map((reward) => {
                                        const canRedeem = memberData.totalPoints >= reward.cost;
                                        return (
                                            <div key={reward.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between group">
                                                <div>
                                                    <div className="w-10 h-10 bg-slate-50 text-xl rounded-xl flex items-center justify-center border border-slate-100 mb-3 group-hover:scale-110 transition-transform">
                                                        {reward.icon}
                                                    </div>
                                                    <h4 className="font-bold text-slate-900 text-sm leading-snug mb-1">{reward.title}</h4>
                                                    <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100">
                                                        {reward.cost} Poin
                                                    </span>
                                                </div>

                                                <button
                                                    disabled={!canRedeem}
                                                    className={`w-full text-xs font-bold py-2.5 rounded-xl mt-4 transition-all ${
                                                        canRedeem 
                                                        ? 'bg-slate-900 text-white hover:bg-[#DE2C2C] shadow-md shadow-slate-900/10' 
                                                        : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                                    }`}
                                                >
                                                    {canRedeem ? "Tukarkan Hadiah" : "Poin Tidak Cukup"}
                                                </button>
                                            </div>
                                        );
                                    })}
                                    {(!memberData.rewards || memberData.rewards.length === 0) && (
                                        <p className="text-sm text-slate-500">Katalog hadiah belum tersedia.</p>
                                    )}
                                </div>
                            </div>

                            {/* Kanan: Riwayat Mutasi Poin */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">📜 Aktivitas Poin</h3>
                                <div className="space-y-3">
                                    {/* Perbaikan: Menambahkan optional chaining (?) untuk history */}
                                    {memberData.history?.map((hist, idx) => (
                                        <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex justify-between items-center text-xs">
                                            <div className="space-y-1 pr-2">
                                                <p className="font-bold text-slate-800 leading-tight">{hist.desc}</p>
                                                <p className="text-slate-400">{hist.date}</p>
                                            </div>
                                            <span className={`font-black whitespace-nowrap px-2 py-1 rounded ${
                                                hist.type === 'earn' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                                            }`}>
                                                {hist.points}
                                            </span>
                                        </div>
                                    ))}
                                    {(!memberData.history || memberData.history.length === 0) && (
                                        <p className="text-sm text-slate-500">Belum ada riwayat poin.</p>
                                    )}
                                </div>
                            </div>

                        </div>

                        {/* Catatan Sesuai Ketentuan Laporan */}
                        <div className="bg-white p-5 rounded-2xl text-sm border border-slate-200 flex items-start gap-4 shadow-sm">
                            <div className="w-10 h-10 bg-red-50 text-[#DE2C2C] rounded-xl flex items-center justify-center text-xl shrink-0">
                                📢
                            </div>
                            <div className="text-slate-600 leading-relaxed pt-0.5">
                                <p className="font-semibold text-slate-900 text-sm mb-0.5">Ketentuan Pengumpulan Poin</p>
                                <p className="text-xs">Poin diperoleh otomatis setelah pembayaran divalidasi oleh kasir bengkel. Masa berlaku poin adalah 12 bulan sejak tanggal transaksi pengerjaan kendaraan.</p>
                            </div>
                        </div>

                    </div>
                )}
            </main>
        </div>
    );
}