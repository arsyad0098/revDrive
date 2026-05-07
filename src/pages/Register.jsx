import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div>
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#161E54] mb-1">Create Account ✨</h2>
                <p className="text-gray-400 text-sm">Daftar sekarang untuk mulai mengelola</p>
            </div>

            <form className="space-y-5">
                <div>
                    <label className="block text-xs font-bold text-[#161E54] uppercase tracking-wider mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none text-sm" placeholder="you@example.com" required />
                </div>
                <div>
                    <label className="block text-xs font-bold text-[#161E54] uppercase tracking-wider mb-2">Password</label>
                    <input type="password" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none text-sm" placeholder="********" required />
                </div>
                <div>
                    <label className="block text-xs font-bold text-[#161E54] uppercase tracking-wider mb-2">Confirm Password</label>
                    <input type="password" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none text-sm" placeholder="********" required />
                </div>

                <button type="submit" className="w-full bg-[#FF5151] hover:bg-[#ee4545] text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-red-100 mt-2">
                    Daftar Akun
                </button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm">
                    Sudah punya akun? <Link to="/login" className="text-red-600 font-bold hover:underline">Masuk Sekarang</Link>
                </p>
            </div>
        </div>
    );
}