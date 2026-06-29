// src/pages/LandingPage.jsx
import React from 'react';
// Catatan: Jika ingin menggunakan button bawaan dari components/ui/button, silakan diimport
// import { Button } from '../components/ui/button'; 

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 font-sans antialiased">
      
      {/* 1. NAVBAR (Identitas & Navigasi) */}
      <nav className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-slate-900">
              Rev<span className="text-[#DE2C2C]">Drive</span>
            </span>
          </div>

          {/* Menu Navigasi - Batasi agar tidak ramai */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#fitur" className="hover:text-slate-900 transition-colors">Fitur</a>
            <a href="#testimoni" className="hover:text-slate-900 transition-colors">Testimoni</a>
            <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
          </div>

          {/* Secondary CTA */}
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
        {/* Kolom Kiri: Pesan Teks */}
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
          
          {/* Primary CTA */}
          <div className="pt-2">
            <a href="/register" className="inline-block bg-[#DE2C2C] text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-red-500/20 hover:bg-[#c22424] hover:shadow-xl hover:shadow-red-500/30 transition-all transform hover:-translate-y-0.5">
              Mulai Transformasi Bengkel
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Visual Pendukung */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-transparent rounded-3xl blur-2xl -z-10" />
          {/* Tempatkan Screenshot Dashboard Bengkel Kamu di Sini */}
          <div className="bg-white p-3 rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="w-full h-auto bg-slate-100 rounded-xl aspect-[16/10] flex items-center justify-center text-slate-400 font-medium">
              [ Masukkan Mockup / SS Dashboard Bengkel RevDrive ]
            </div>
          </div>
        </div>
      </header>

    </div>
  );
}