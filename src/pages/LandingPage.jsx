// src/pages/LandingPage.jsx
import React, { useState } from 'react';
// LANGKAH 2: Import gambar Anda di sini
import dashboardImg from '../assets/landingpage2.jpg'; 

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      title: "Booking & Reservasi Online",
      desc: "Pilih jadwal servis dari rumah. Sistem kami meminimalisir antrean panjang di bengkel untuk kenyamanan Anda.",
      icon: "📅",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "Pantau Servis Real-Time",
      desc: "Lacak status kendaraan Anda (Menunggu, Dikerjakan, Selesai) secara transparan langsung dari handphone.",
      icon: "🔍",
      bgColor: "bg-red-50",
      textColor: "text-[#DE2C2C]"
    },
    {
      title: "Riwayat Servis Digital",
      desc: "Semua riwayat perbaikan dan penggantian suku cadang tersimpan rapi untuk diagnosa lebih cepat di masa depan.",
      icon: "📂",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      title: "Program Loyalitas (Poin)",
      desc: "Kumpulkan poin dari setiap transaksi. Tukarkan dengan jasa servis gratis, ganti oli, atau diskon menarik lainnya.",
      icon: "🎁",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      title: "WhatsApp Reminder Otomatis",
      desc: "Dapatkan notifikasi pengingat jadwal servis rutin berikutnya berdasarkan waktu atau estimasi kilometer kendaraan Anda.",
      icon: "💬",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600"
    },
    {
      title: "Transparansi Estimasi Biaya",
      desc: "Dapatkan estimasi biaya perbaikan secara digital untuk disetujui sebelum mekanik kami mulai bekerja.",
      icon: "🧾",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    }
  ];

  const steps = [
    { num: "01", title: "Reservasi", desc: "Akses portal untuk booking jadwal dan sampaikan keluhan awal kendaraan Anda." },
    { num: "02", title: "Check-In", desc: "Datang sesuai jadwal, Service Advisor akan memberikan estimasi biaya transparan." },
    { num: "03", title: "Proses Servis", desc: "Mekanik bekerja, dan Anda dapat memantau status pengerjaan secara real-time." },
    { num: "04", title: "Selesai", desc: "Terima notifikasi via WhatsApp, bayar, dan dapatkan poin loyalitas otomatis!" }
  ];

  const faqs = [
    {
      q: "Kendaraan jenis apa saja yang bisa diservis di RevDrive?",
      a: "Fokus utama dan fasilitas prioritas kami adalah kendaraan roda empat (mobil). Namun, kami juga menyediakan penanganan taktis untuk kendaraan roda dua (motor)."
    },
    {
      q: "Bagaimana cara mendapatkan dan menukarkan poin loyalitas?",
      a: "Anda akan otomatis mendapatkan poin setiap kali selesai melakukan transaksi. Poin yang terkumpul dapat dicek melalui sistem (self-service) dan ditukarkan dengan potongan harga atau servis gratis."
    },
    {
      q: "Apakah saya harus booking terlebih dahulu sebelum datang?",
      a: "Sangat disarankan untuk booking secara online agar Anda mendapatkan kepastian slot. Namun, kami tetap melayani pelanggan walk-in jika slot di hari tersebut masih tersedia."
    },
    {
      q: "Apakah saya akan diberitahu jika kendaraan sudah selesai?",
      a: "Tentu! Sistem kami akan mengirimkan notifikasi otomatis via WhatsApp atau email begitu mekanik memperbarui status kendaraan menjadi 'Selesai'."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 font-sans antialiased scroll-smooth">
      
      {/* 1. NAVBAR */}
      <nav className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-slate-900">
              Rev<span className="text-[#DE2C2C]">Drive</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#tentang" className="hover:text-slate-900 transition-colors">Tentang Kami</a>
            <a href="#fitur" className="hover:text-slate-900 transition-colors">Layanan Digital</a>
            <a href="#cara-kerja" className="hover:text-slate-900 transition-colors">Cara Kerja</a>
            <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Masuk Member</a>
            <a href="/register" className="bg-[#DE2C2C] text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-[#c22424] transition-all">Booking Servis</a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-slate-700 focus:outline-none text-2xl">
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 flex flex-col gap-4 text-center font-medium shadow-lg absolute w-full z-50">
            <a href="#tentang" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 py-2">Tentang Kami</a>
            <a href="#fitur" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 py-2">Layanan Digital</a>
            <a href="#cara-kerja" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 py-2">Cara Kerja</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 py-2">FAQ</a>
            <hr className="border-slate-100" />
            <a href="/login" className="text-slate-600 py-2">Masuk Member</a>
            <a href="/register" className="bg-[#DE2C2C] text-white py-3 rounded-xl">Booking Servis</a>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <header className="max-w-7xl mx-auto px-6 pt-12 lg:pt-16 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-red-50 text-[#DE2C2C] text-xs font-semibold px-4 py-1.5 rounded-full mx-auto lg:mx-0 border border-red-100">
            🚘 Bengkel Otomotif Modern Berbasis Digital
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Servis Kendaraan <br className="hidden sm:inline" />
            Lebih Cepat, <br />
            <span className="text-[#DE2C2C]">Bebas Antre.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Nikmati layanan perawatan mobil terbaik. Booking jadwal via online, pantau status pengerjaan secara real-time, dan kumpulkan poin loyalitas di setiap kunjungan Anda.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="/register" className="inline-block bg-[#DE2C2C] text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-red-500/20 hover:bg-[#c22424] hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center">
              Reservasi Servis Sekarang
            </a>
            <a href="#fitur" className="inline-block bg-white text-slate-700 font-semibold px-8 py-4 rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all text-center">
              Lihat Layanan
            </a>
          </div>
        </div>

        {/* BAGIAN HERO IMAGE */}
        <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
          {/* Layer Ornamen Gradasi di Belakang Gambar */}
          <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-blue-500/20 rounded-3xl blur-3xl -z-10" />
          
          {/* LANGKAH 3: Bingkai dan Tag Image Utama */}
          <div className="bg-white p-3 rounded-3xl shadow-2xl border border-slate-100/80 overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-all duration-500 group">
            <div className="w-full h-auto bg-slate-50 rounded-2xl overflow-hidden aspect-[16/10] flex items-center justify-center">
              <img 
                src={dashboardImg} 
                alt="RevDrive CRM Dashboard Mockup" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-750 ease-out"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </header>

      {/* 3. TENTANG KAMI */}
      <section id="tentang" className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#DE2C2C] mb-3">Tentang RevDrive</h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
            Membangun Hubungan Jangka Panjang Melalui Pengalaman Pelanggan yang Personal
          </p>
          <p className="text-slate-600 leading-relaxed text-lg">
            RevDrive Autosolution hadir dengan visi menjadi bengkel otomotif terdepan yang mengedepankan transparansi, integrasi digital, dan pelayanan unggul. Sistem CRM (Customer Relationship Management) modern kami memastikan setiap riwayat kendaraan Anda tercatat rapi, estimasi biaya yang jelas, dan kepastian suku cadang terjamin.
          </p>
        </div>
      </section>

      {/* 4. FEATURE SECTION */}
      <section id="fitur" className="bg-[#F8F9FA] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#DE2C2C]">Integrasi Sistem CRM</h2>
            <p className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Inovasi Digital untuk Kenyamanan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className={`w-14 h-14 ${feat.bgColor} ${feat.textColor} rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform`}>
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CARA KERJA */}
      <section id="cara-kerja" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#DE2C2C]">Alur Layanan</h2>
            <p className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bagaimana Cara Servis di RevDrive?
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 bg-[#F8F9FA] p-8 rounded-3xl border border-slate-100">
                <div className="text-4xl font-black text-slate-200 mb-4">{step.num}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#DE2C2C]">Pertanyaan Umum</h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Informasi Tambahan Untuk Anda
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all shadow-sm">
              <button onClick={() => toggleFaq(idx)} className="w-full px-6 py-5 text-left flex justify-between items-center font-semibold text-slate-900 hover:bg-slate-50 transition-colors text-sm sm:text-base">
                <span className="pr-4">{faq.q}</span>
                <span className={`text-sm transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#DE2C2C]' : 'text-slate-400'}`}>▼</span>
              </button>
              <div className={`transition-all duration-300 border-t border-slate-50 bg-[#F8F9FA] overflow-hidden ${openFaq === idx ? 'max-h-40 p-6' : 'max-h-0'}`}>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="bg-[#0B1224] text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#DE2C2C]/10 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Waktunya Merawat Kendaraan Anda
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-lg">
            Bergabunglah sebagai member RevDrive Autosolution. Dapatkan transparansi harga, servis berkualitas, dan kumpulkan poin loyalitasnya sekarang.
          </p>
          <div className="pt-6">
            <a href="/register" className="inline-block w-full sm:w-auto bg-[#DE2C2C] text-white font-bold px-10 py-5 rounded-2xl shadow-lg shadow-red-600/30 hover:bg-[#c22424] transition-all transform hover:-translate-y-1 text-center text-lg">
              Booking Jadwal Servis Anda
            </a>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-[#070C19] text-slate-500 py-12 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tight text-white">
              Rev<span className="text-[#DE2C2C]">Drive</span> Autosolution
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-slate-400">
            <a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a>
            <a href="#fitur" className="hover:text-white transition-colors">Layanan</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="/login" className="hover:text-white transition-colors">Login Member</a>
          </div>

          <p className="text-center sm:text-right text-xs text-slate-600">
            &copy; {new Date().getFullYear()} RevDrive Autosolution. Hak Cipta Dilindungi.
          </p>
        </div>
      </footer>

    </div>
  );
}