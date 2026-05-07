import { useNavigate } from "react-router-dom";

export default function ErrorPage({ code, title, description, image }) {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center text-center">
            {/* Gambar Error dengan Proporsi WeHR */}
            <div className="w-full max-w-sm mb-4 relative">
                <div className="absolute inset-0 bg-red-100 blur-[50px] rounded-full opacity-30 -z-10"></div>
                <img 
                    src={image} 
                    alt="Error Illustration" 
                    className="w-full h-auto object-contain drop-shadow-md"
                />
            </div>

            {/* Kode Error (Opsional, jika ingin ditampilkan sebagai background text) */}
            {code && (
                <span className="text-[120px] font-black text-[#161E54]/5 absolute top-20 pointer-events-none select-none">
                    {code}
                </span>
            )}

            {/* Typography WeHR: Bold & Dark Blue */}
            <h2 className="text-3xl font-bold text-[#161E54] mb-2">
                {title}
            </h2>
            
            {/* Description WeHR: Medium Gray & Balanced Width */}
            <p className="text-gray-400 max-w-sm mb-8 text-sm font-medium leading-relaxed">
                {description}
            </p>

            {/* Single Button: Merah WeHR */}
            <button 
                onClick={() => navigate("/")}
                className="bg-[#FF5151] hover:bg-[#ee4545] text-white px-10 py-3 rounded-lg font-bold shadow-lg shadow-red-100 transition-all active:scale-95"
            >
                Kembali ke Dashboard
            </button>
            
            <div className="mt-10 border-t border-gray-100 pt-6 w-full max-w-[150px]">
                <p className="text-[10px] text-gray-300 uppercase tracking-widest font-bold">
                    RevDrive System
                </p>
            </div>
        </div>
    );
}