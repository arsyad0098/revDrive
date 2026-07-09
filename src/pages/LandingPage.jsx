import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dashboardImg from '../assets/landingpage2.jpg'; 

export default function LandingPage() {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(Boolean(localStorage.getItem('user')));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        navigate('/');
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const features = [
        {
            title: "Booking & Reservasi Online",
            desc: "Pilih jadwal servis dari rumah. Sistem kami meminimalisir antrean panjang di bengkel untuk kenyamanan Anda.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            bgColor: "bg-blue-50",
            textColor: "text-blue-600",
            path: "/booking" 
        },
        {
            title: "Pantau Servis Real-Time",
            desc: "Lacak status kendaraan Anda (Menunggu, Dikerjakan, Selesai) secara transparan langsung dari handphone.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            bgColor: "bg-red-50",
            textColor: "text-[#DE2C2C]",
            path: "/tracking" 
        },
        {
            title: "Riwayat Servis Digital",
            desc: "Semua riwayat perbaikan dan penggantian suku cadang tersimpan rapi untuk diagnosa lebih cepat di masa depan.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            bgColor: "bg-purple-50",
            textColor: "text-purple-600",
            path: "/history" 
        },
        {
            title: "Program Loyalitas (Poin)",
            desc: "Kumpulkan poin dari setiap transaksi. Tukarkan dengan jasa servis gratis, ganti oli, atau diskon menarik lainnya.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 0H4v13a2 2 0 002 2h12a2 2 0 002-2V8H12z" />
                </svg>
            ),
            bgColor: "bg-green-50",
            textColor: "text-green-600",
            path: "/loyalty" 
        },
        {
            title: "WhatsApp Reminder Otomatis",
            desc: "Dapatkan notifikasi pengingat jadwal servis rutin berikutnya berdasarkan waktu atau estimasi kilometer kendaraan Anda.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            bgColor: "bg-emerald-50",
            textColor: "text-emerald-600",
            path: "/reminder" 
        },
        {
            title: "Transparansi Estimasi Biaya",
            desc: "Dapatkan estimasi biaya perbaikan secara digital untuk disetujui sebelum mekanik kami mulai bekerja.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            bgColor: "bg-orange-50",
            textColor: "text-orange-600",
            path: "/estimates" 
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
            a: "Fokus utama dan fasilitas prioritas kami adalah kendaraan roda empat (mobil). Namun, kami juga menyediakan penanganan taktis untuk kendaraan roda dua (motor) dalam proporsi minoritas."
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
                    <button type="button" onClick={() => scrollToSection('tentang')} className="hover:text-slate-900 transition-colors">Tentang Kami</button>
                    <button type="button" onClick={() => scrollToSection('fitur')} className="hover:text-slate-900 transition-colors">Layanan Digital</button>
                    <button type="button" onClick={() => scrollToSection('cara-kerja')} className="hover:text-slate-900 transition-colors">Cara Kerja</button>
                    <button type="button" onClick={() => scrollToSection('faq')} className="hover:text-slate-900 transition-colors">FAQ</button>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Logout</button>
                    ) : (
                        <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Masuk Member</Link>
                    )}
                    <Link to="/booking" className="bg-[#DE2C2C] text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-[#c22424] transition-all">Booking Servis</Link>
                </div>

                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                    className="md:hidden text-slate-700 focus:outline-none text-2xl"
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 flex flex-col gap-4 text-center font-medium shadow-lg absolute left-0 right-0 top-20 w-full z-50">
                    <button type="button" onClick={() => { setIsMobileMenuOpen(false); scrollToSection('tentang'); }} className="text-slate-600 py-2 hover:text-slate-900">Tentang Kami</button>
                    <button type="button" onClick={() => { setIsMobileMenuOpen(false); scrollToSection('fitur'); }} className="text-slate-600 py-2 hover:text-slate-900">Layanan Digital</button>
                    <button type="button" onClick={() => { setIsMobileMenuOpen(false); scrollToSection('cara-kerja'); }} className="text-slate-600 py-2 hover:text-slate-900">Cara Kerja</button>
                    <button type="button" onClick={() => { setIsMobileMenuOpen(false); scrollToSection('faq'); }} className="text-slate-600 py-2 hover:text-slate-900">FAQ</button>
                    <hr className="border-slate-100" />
                    {isLoggedIn ? (
                        <button onClick={() => { setIsMobileMenuOpen(false); handleLogout(); }} className="text-slate-600 py-2 hover:text-slate-900 w-full text-left">Logout</button>
                    ) : (
                        <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 py-2 hover:text-slate-900">Login</Link>
                    )}
                    <Link to="/booking" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#DE2C2C] text-white py-3 rounded-xl text-center font-semibold block">Booking Servis</Link>
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
                    <Link to="/booking" className="inline-block bg-[#DE2C2C] text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-red-500/20 hover:bg-[#c22424] hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center">
                        Reservasi Servis Sekarang
                    </Link>
                    <a href="#fitur" className="inline-block bg-white text-slate-700 font-semibold px-8 py-4 rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all text-center">
                        Lihat Layanan
                    </a>
                </div>
            </div>

            {/* BAGIAN HERO IMAGE */}
            <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-blue-500/20 rounded-3xl blur-3xl -z-10" />
                
                <div className="bg-white p-3 rounded-3xl shadow-2xl border border-slate-100/80 overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-all duration-500 group">
                    <div className="w-full h-auto bg-slate-50 rounded-2xl overflow-hidden aspect-[16/10] flex items-center justify-center">
                        <img 
                            src={dashboardImg} 
                            alt="RevDrive CRM Dashboard Mockup" 
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                            loading="eager"
                        />
                    </div>
                </div>
            </div>
        </header>

        {/* 3. TENTANG KAMI */}
        <section id="tentang" className="py-20 bg-white border-y border-slate-100">
            <div className="max-w-3xl mx-auto px-6 text-center">
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
                    {features.map((feat, idx) => {
                        const isAvailable = ["/booking", "/tracking", "/history", "/loyalty", "/estimates"].includes(feat.path);
                        
                        return (
                            <Link 
                                key={idx} 
                                to={isAvailable ? feat.path : "#"}
                                onClick={(e) => {
                                    if (!isAvailable) {
                                        e.preventDefault(); 
                                    }
                                }}
                                className={`bg-white p-8 rounded-3xl border border-slate-100 transition-all duration-300 flex flex-col group text-left ${
                                    isAvailable 
                                    ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' 
                                    : 'opacity-75 hover:opacity-100 cursor-not-allowed'
                                }`}
                            >
                                <div className={`w-14 h-14 ${feat.bgColor} ${feat.textColor} rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 ${isAvailable ? 'group-hover:scale-110' : ''} transition-transform`}>
                                    {feat.icon}
                                </div>
                                
                                <div className="flex items-start justify-between gap-2 mb-3">
                                    <h3 className="text-xl font-bold text-slate-900">{feat.title}</h3>
                                    {!isAvailable && (
                                        <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md whitespace-nowrap">
                                            Segera Hadir
                                        </span>
                                    )}
                                </div>
                                
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{feat.desc}</p>
                                
                                <div className="text-sm font-semibold text-[#DE2C2C] flex items-center gap-1 mt-auto">
                                    {isAvailable ? (
                                        <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                            {feat.path === "/booking" ? "Mulai Booking" : 
                                             feat.path === "/tracking" ? "Lacak Servis" : 
                                             feat.path === "/history" ? "Cek Riwayat" :
                                             feat.path === "/loyalty" ? "Cek Poin Loyalitas" :
                                             "Lihat Estimasi"} <span>→</span>
                                        </span>
                                    ) : (
                                        <span className="text-slate-400 font-normal text-xs">
                                            Fitur Terkunci
                                        </span>
                                    )}
                                </div>
                            </Link>
                        );
                    })}
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
                        <div key={idx} className="relative z-10 bg-[#F8F9FA] p-8 rounded-3xl border border-slate-100 hover:border-red-100 transition-colors">
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
                        <div className={`transition-all duration-300 border-t border-slate-50 bg-[#F8F9FA] overflow-hidden ${openFaq === idx ? 'max-h-60 p-6' : 'max-h-0'}`}>
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
                    <Link to="/booking" className="inline-block w-full sm:w-auto bg-[#DE2C2C] text-white font-bold px-10 py-5 rounded-2xl shadow-lg shadow-red-600/30 hover:bg-[#c22424] transition-all transform hover:-translate-y-1 text-center text-lg">
                        Booking Jadwal Servis Anda
                    </Link>
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
                    <button type="button" onClick={() => scrollToSection('tentang')} className="hover:text-white transition-colors">Tentang Kami</button>
                    <button type="button" onClick={() => scrollToSection('fitur')} className="hover:text-white transition-colors">Layanan</button>
                    <button type="button" onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">FAQ</button>
                    <Link to="/login" className="hover:text-white transition-colors">Login Member</Link>
                </div>

                <p className="text-center sm:text-right text-xs text-slate-600">
                    &copy; {new Date().getFullYear()} RevDrive Autosolution. Hak Cipta Dilindungi.
                </p>
            </div>
        </footer>

        </div>
    );
}