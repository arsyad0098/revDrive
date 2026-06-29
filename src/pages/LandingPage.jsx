// src/pages/LandingPage.jsx
import React, { useState } from 'react';

export default function LandingPage() {
  // State untuk interaksi FAQ Accordion
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Data Fitur diadaptasi dari struktur dashboard asli
  const features = [
    {
      title: "Manajemen Servis Real-Time",
      desc: "Pantau antrean kendaraan yang sedang dikerjakan oleh mekanik secara langsung tanpa perlu konfirmasi manual.",
      icon: "⚙️",
      bgColor: "bg-red-50",
      textColor: "text-[#DE2C2C]"
    },
    {
      title: "Kontrol Stok Sparepart",
      desc: "Notifikasi otomatis saat stok komponen kritis mulai menipis. Hindari penundaan servis akibat part kosong.",
      icon: "🔧",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "Database CRM Pelanggan",
      desc: "Simpan riwayat servis dan kirim pengingat berkala otomatis untuk meningkatkan retensi kunjungan pelanggan.",
      icon: "👤",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    }
  ];

  // Data FAQ berdasarkan prinsip Launch UI (Pertanyaan asli & Jawaban singkat)
  const faqs = [
    {
      q: "Apakah data pelanggan bengkel saya aman?",
      a: "Sangat aman. Semua data CRM dienkripsi dan disimpan menggunakan infrastruktur cloud tepercaya dengan backup berkala."
    },
    {
      q: "Apakah aplikasi ini sulit digunakan oleh mekanik awam?",
      a: "Tidak. RevDrive didesain dengan antarmuka yang sangat simpel dan minimalis agar mudah dipahami bahkan oleh mekanik yang gaptek sekalipun."
    },
    {
      q: "Apakah ada biaya tersembunyi setelah mendaftar?",
      a: "Tidak ada. Kami menawarkan model freemium, di mana fitur dasar gratis selamanya dan fitur premium transparan tanpa biaya siluman."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 font-sans antialiased scroll-smooth">
      
      {/* 1. NAVBAR (Identitas & Navigasi) */}
      <nav className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-slate-900">
              Rev<span className="text-[#DE2C2C]">Drive</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#fitur" className="hover:text-slate-900 transition-colors">Fitur</a>
            <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Masuk
            </a>
            <a href="/register" className="bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-slate-800 transition-all">
              Daftar Gratis
            </a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION (Attention) */}
      <header className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-red-50 text-[#DE2C2C] text-xs font-semibold px-3 py-1 rounded-full">
            🚀 Modul CRM Bengkel Terintegrasi
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Kelola Bengkel <br />
            <span className="text-[#DE2C2C]">Lebih Efisien,</span> <br />
            Omset Melejit.
          </h1>
          <p className="text-slate-600 text-lg max-w-xl leading-relaxed">
            Pantau antrean servis, kelola stok sparepart, hingga analisis keuntungan bengkel Anda secara real-time dalam satu dashboard modern.
          </p>
          <div className="pt-2">
            <a href="/register" className="inline-block bg-[#DE2C2C] text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-red-500/20 hover:bg-[#c22424] hover:shadow-xl hover:shadow-red-500/30 transition-all transform hover:-translate-y-0.5">
              Mulai Transformasi Bengkel
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-transparent rounded-3xl blur-2xl -z-10" />
          <div className="bg-white p-3 rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="w-full h-auto bg-slate-100 rounded-xl aspect-[16/10] flex items-center justify-center text-slate-400 font-medium text-sm p-4 text-center">
              [ Screenshot Dashboard Admin RevDrive Anda ]
            </div>
          </div>
        </div>
      </header>

      {/* 3. AREA MIDDLE: FEATURE SECTION (Interest) */}
      <section id="fitur" className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#DE2C2C]">Fitur Unggulan</h2>
            <p className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Dirancang Khusus untuk Kebutuhan Bengkel Modern
            </p>
          </div>

          {/* Grid Layout Sesuai Dashboard Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-[#F8F9FA] p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Icon Bulat Pastel ala Dashboard */}
                  <div className={`w-12 h-12 ${feat.bgColor} ${feat.textColor} rounded-2xl flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-110 transition-transform`}>
                    {feat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AREA MIDDLE: FAQ SECTION (Desire) */}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#DE2C2C]">Pertanyaan Umum</h2>
          <p className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Punya Pertanyaan? Kami Punya Jawabannya
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all shadow-sm">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                <span className={`text-xl transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#DE2C2C]' : 'text-slate-400'}`}>
                  ▼
                </span>
              </button>
              
              <div className={`transition-all duration-300 border-t border-slate-50 bg-[#F8F9FA] overflow-hidden ${openFaq === idx ? 'max-h-40 p-6' : 'max-h-0'}`}>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}