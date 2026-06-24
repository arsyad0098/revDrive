import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [dataForm, setDataForm] = useState({ email: "", password: "" });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({ ...dataForm, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        // Cek login langsung ke tabel users Supabase
        const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("email", dataForm.email)
            .eq("password", dataForm.password)
            .single();

        if (error || !data) {
            setError("Login gagal, Email atau Password salah!");
        } else {
            // Bisa simpan data user ke localStorage jika butuh
            localStorage.setItem("user", JSON.stringify(data));
            navigate("/");
        }
        setLoading(false);
    };

    return (
        <div>
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#161E54] mb-1">Welcome Back 👋</h2>
                <p className="text-gray-400 text-sm">Masuk untuk mengelola bengkel Anda</p>
            </div>

            {error && (
                <div className="bg-red-50 text-red-500 p-3 rounded-lg text-xs mb-5 flex items-center border border-red-100 font-medium">
                    <BsFillExclamationDiamondFill className="me-2 text-base" /> {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-xs font-bold text-[#161E54] uppercase tracking-wider mb-2">Email</label>
                    <input type="email" name="email" value={dataForm.email} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-red-500 outline-none text-sm" placeholder="admin@revdrive.com" required />
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                        <label className="block text-xs font-bold text-[#161E54] uppercase tracking-wider">Password</label>
                        <Link to="/forgot" className="text-xs text-red-600 hover:underline font-semibold">Lupa Password?</Link>
                    </div>
                    <input type="password" name="password" value={dataForm.password} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-red-500 outline-none text-sm" placeholder="********" required />
                </div>

                <button type="submit" disabled={loading} className="w-full bg-[#FF5151] hover:bg-[#ee4545] text-white font-bold py-3 rounded-lg shadow-lg flex justify-center items-center gap-2">
                    {loading ? <ImSpinner2 className="animate-spin text-lg" /> : "Masuk ke Dashboard"}
                </button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm">Belum punya akun? <Link to="/register" className="text-red-600 font-bold hover:underline">Daftar Sekarang</Link></p>
            </div>
        </div>
    );
}