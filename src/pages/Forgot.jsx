import { Link } from "react-router-dom";

export default function Forgot() {
    return (
        <div>
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#161E54] mb-1">Reset Password</h2>
                <p className="text-gray-400 text-sm px-4">Kami akan mengirimkan link pemulihan ke email Anda</p>
            </div>

            <form className="space-y-6">
                <div>
                    <label className="block text-xs font-bold text-[#161E54] uppercase tracking-wider mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none text-sm" placeholder="you@example.com" />
                </div>
                <button type="submit" className="w-full bg-[#161E54] hover:bg-[#0e143a] text-white font-bold py-3 rounded-lg transition-all">
                    Send Reset Link
                </button>
            </form>

            <div className="mt-8 text-center">
                <Link to="/login" className="text-sm text-gray-500 hover:text-red-600 font-medium">← Kembali ke Login</Link>
            </div>
        </div>
    )
}