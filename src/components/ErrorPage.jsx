import { useNavigate } from "react-router-dom";

export default function ErrorPage({ code, title, description, image }) {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] p-6 font-sans text-center">
            
            {/* Gambar Error */}
            <div className="w-full max-w-md mb-8 relative">
                {/* Blur background diganti ke merah agar sesuai tema bengkel */}
                <div className="absolute inset-0 bg-red-100 blur-[80px] rounded-full opacity-50 -z-10"></div>
                <img 
                    src={image} 
                    alt={`Error ${code}`} 
                    className="w-full h-auto drop-shadow-md hover:scale-105 transition-transform duration-500 rounded-2xl"
                />
            </div>

            {/* Kode Error */}
            {/* Gradient warna diubah jadi dominan merah */}
            <h1 className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 tracking-tight mb-4">
                {code}
            </h1>

            {/* Title Error */}
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {title || "Waduh! Ada masalah di sistem."}
            </h2>
            
            {/* Deskripsi Error */}
            <p className="text-gray-500 max-w-md mb-10 text-lg leading-relaxed">
                {description || "Halaman yang kamu cari sepertinya tidak ditemukan atau sedang dalam perbaikan mekanik kami."}
            </p>

            {/* Tombol Back to Home */}
            {/* Warna tombol disesuaikan dengan merah RevDrive */}
            <button 
                onClick={() => navigate("/")}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-full font-bold shadow-md hover:-translate-y-1 transition-all duration-200"
            >
                Kembali ke Dashboard
            </button>
        </div>
    );
}