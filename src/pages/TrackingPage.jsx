// src/pages/TrackingPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiClock, FiCheckCircle, FiTool, FiTruck, FiArrowLeft, FiAlertCircle, FiPackage } from "react-icons/fi";

export default function TrackingPage() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [userBookings, setUserBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Load user dan filter bookings dari localStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setCurrentUser(user);

    if (user.email) {
      const orders = JSON.parse(localStorage.getItem("orders") || "[]");
      const filtered = orders.filter(order => order.customerEmail === user.email);
      setUserBookings(filtered);
    }
  }, []);

  const statusColors = {
    "Menunggu": { badge: "bg-orange-100 text-orange-600" },
    "Diperiksa": { badge: "bg-blue-100 text-blue-600" },
    "Dikerjakan": { badge: "bg-purple-100 text-purple-600" },
    "Siap diambil": { badge: "bg-green-100 text-green-600" }
  };

  if (!currentUser?.email) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Silakan Login Terlebih Dahulu</h2>
          <button
            onClick={() => navigate("/login")}
            className="bg-[#DE2C2C] hover:bg-[#c22424] text-white font-bold py-3 px-8 rounded-2xl transition-all"
          >
            Ke Halaman Login
          </button>
        </div>
      </div>
    );
  }

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

      <main className="max-w-5xl mx-auto px-6 py-12">
        {!selectedBooking ? (
          <>
            {/* JUDUL HALAMAN */}
            <div className="text-center mb-10">
              <span className="bg-red-50 text-[#DE2C2C] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-red-100">
                Real-Time Tracking
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
                Pantau Status Servis
              </h2>
              <p className="text-slate-500 mt-2 text-base max-w-lg mx-auto">
                Lihat daftar servis kendaraan Anda dan pantau progres pengerjaan secara real-time.
              </p>
            </div>

            {/* DAFTAR BOOKING */}
            <div className="space-y-4">
              {userBookings.length > 0 ? (
                userBookings.map(booking => {
                  const colors = statusColors[booking.status] || statusColors["Menunggu"];
                  const activeStep = booking.trackingSteps?.find(s => s.status === "active");
                  
                  return (
                    <div
                      key={booking.wo}
                      onClick={() => setSelectedBooking(booking)}
                      className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all cursor-pointer transform hover:scale-[1.01]"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`w-14 h-14 ${colors.badge} rounded-2xl flex items-center justify-center shrink-0`}>
                            <FiTruck size={28} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2 flex-wrap">
                              <h3 className="text-lg font-bold text-slate-900">
                                {booking.noPolisi}
                              </h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-bold ${colors.badge}`}>
                                {booking.status}
                              </span>
                            </div>
                            <p className="text-slate-600 font-semibold">{booking.vehicle}</p>
                            <p className="text-sm text-slate-500 mt-1 flex items-center gap-1.5">
                              <FiAlertCircle size={14} /> {booking.keluhan}
                            </p>
                            <div className="flex gap-4 mt-3 text-sm text-slate-600 flex-wrap">
                              <span className="flex items-center gap-1">
                                <FiPackage size={14} /> {booking.wo}
                              </span>
                              <span className="flex items-center gap-1">
                                <FiClock size={14} /> {booking.date} {booking.jam}
                              </span>
                            </div>
                          </div>
                        </div>

                        {activeStep && (
                          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl w-full sm:w-auto">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Status Terkini</p>
                            <p className="font-bold text-[#DE2C2C]">{activeStep.title}</p>
                            <p className="text-sm text-slate-600 mt-1">{activeStep.desc}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 text-center">
                  <FiPackage size={48} className="mx-auto text-slate-300 mb-4" />
                  <p className="text-slate-600 font-semibold">Belum ada booking servis</p>
                  <p className="text-slate-500 text-sm mt-2">Buat booking servis untuk mulai memantau status pengerjaan kendaraan Anda</p>
                  <button
                    onClick={() => navigate("/booking")}
                    className="mt-6 bg-[#DE2C2C] hover:bg-[#c22424] text-white font-bold py-3 px-8 rounded-2xl transition-all"
                  >
                    Buat Booking Servis
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          /* DETAIL TRACKING */
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button
              onClick={() => setSelectedBooking(null)}
              className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors mb-6"
            >
              <FiArrowLeft /> Kembali ke Daftar
            </button>

            {/* KARTU INFO KENDARAAN & STATUS */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center mb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-red-50 text-[#DE2C2C] rounded-2xl flex items-center justify-center shrink-0">
                  <FiTruck size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">
                    {selectedBooking.noPolisi}
                  </h3>
                  <p className="text-slate-500 font-medium">{selectedBooking.vehicle}</p>
                  <p className="text-sm text-slate-400 mt-1 flex items-center gap-1.5">
                    <FiAlertCircle size={14} /> Keluhan: {selectedBooking.keluhan}
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl w-full sm:w-auto text-left sm:text-right">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Jadwal Booking</p>
                <div className="flex items-center sm:justify-end gap-2 text-slate-900 font-black text-lg">
                  <FiClock className="text-[#DE2C2C]" /> {selectedBooking.date}
                </div>
                <p className="text-xs text-slate-500 mt-1">{selectedBooking.jam}</p>
              </div>
            </div>

            {/* KARTU PROGRESS BAR */}
            {selectedBooking.trackingSteps && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-8 flex items-center gap-2">
                  <FiTool className="text-[#DE2C2C]" /> Status Pengerjaan Terkini
                </h3>
                
                <div className="relative">
                  {/* Garis vertikal background (untuk versi HP) */}
                  <div className="absolute left-[21px] top-4 bottom-4 w-0.5 bg-slate-100 sm:hidden"></div>

                  <div className="flex flex-col sm:flex-row justify-between relative gap-6 sm:gap-0">
                    {selectedBooking.trackingSteps.map((step, idx) => {
                      
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
                          {idx !== selectedBooking.trackingSteps.length - 1 && (
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
            )}
          </div>
        )}
      </main>
    </div>
  );
}