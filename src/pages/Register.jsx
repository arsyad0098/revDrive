import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { FiArrowLeft } from "react-icons/fi"; // Mengimport icon panah kiri

export default function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    
    // Menambahkan field phone ke state awal form
    const [formData, setFormData] = useState({ 
        name: "", 
        email: "", 
        phone: "", 
        password: "", 
        confirmPassword: "" 
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("Password tidak cocok!");
            setLoading(false);
            return;
        }

        // Insert ke tabel users Supabase dengan memetakan phone -> phone_number
        const { data, error } = await supabase
            .from("users")
            .insert([{ 
                name: formData.name, 
                email: formData.email, 
                phone_number: formData.phone, // <-- Memasukkan nomor HP ke kolom phone_number Supabase
                password: formData.password 
            }]);

        if (error) {
            setError(error.message || "Gagal mendaftar. Email mungkin sudah digunakan.");
        } else {
            setSuccess("Pendaftaran berhasil! Mengalihkan ke halaman login...");
            setTimeout(() => navigate("/login"), 2000);
        }
        setLoading(false);
    };

    return (
        <div>
            {/* Tombol Kembali ke Landing Page */}
            <div className="mb-6">
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-slate-900 transition-colors group"
                >
                    <FiArrowLeft className="text-base group-hover:-translate-x-0.5 transition-transform" />
                    Kembali ke Landing Page
                </Link>
            </div>

            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#161E54] mb-1">Create Account ✨</h2>
                <p className="text-gray-400 text-sm">Daftar sekarang untuk mulai mengelola</p>
            </div>

            {error && <div className="bg-red-50 text-red-500 p-3 rounded-lg text-xs mb-4">{error}</div>}
            {success && <div className="bg-green-50 text-green-600 p-3 rounded-lg text-xs mb-4">{success}</div>}

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-xs font-bold text-[#161E54] uppercase tracking-wider mb-2">Nama Lengkap</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-red-500 outline-none text-sm" placeholder="John Doe" required />
                </div>
                <div>
                    <label className="block text-xs font-bold text-[#161E54] uppercase tracking-wider mb-2">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-red-500 outline-none text-sm" placeholder="you@example.com" required />
                </div>
                {/* Tambahan Input Field Nomor HP / WhatsApp */}
                <div>
                    <label className="block text-xs font-bold text-[#161E54] uppercase tracking-wider mb-2">Nomor HP / WhatsApp</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-red-500 outline-none text-sm" placeholder="081234567890" required />
                </div>
                <div>
                    <label className="block text-xs font-bold text-[#161E54] uppercase tracking-wider mb-2">Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-red-500 outline-none text-sm" placeholder="********" required />
                </div>
                <div>
                    <label className="block text-xs font-bold text-[#161E54] uppercase tracking-wider mb-2">Confirm Password</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-red-500 outline-none text-sm" placeholder="********" required />
                </div>

                <button type="submit" disabled={loading} className="w-full bg-[#FF5151] hover:bg-[#ee4545] text-white font-bold py-3 rounded-lg transition-all shadow-lg mt-2">
                    {loading ? "Mendaftar..." : "Daftar Akun"}
                </button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm">Sudah punya akun? <Link to="/login" className="text-red-600 font-bold hover:underline">Masuk Sekarang</Link></p>
            </div>
        </div>
    );
}