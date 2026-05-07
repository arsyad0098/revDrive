import ErrorPage from "../components/ErrorPage";
import NotFoundImage from "../assets/404-revDrive.png"; 

export default function NotFound() {
    return (
        // Menggunakan min-h-screen agar posisi selalu di tengah viewport
        <div className="min-h-screen flex items-center justify-center bg-[#F8F9FB] p-6">
            <div className="w-full max-w-md">
                <ErrorPage 
                    title="404 - Halaman Tidak Ditemukan"
                    description="Oops! Sepertinya Anda tersesat. Halaman yang Anda cari tidak tersedia atau sedang dalam perbaikan mekanik kami."
                    image={NotFoundImage} 
                />
            </div>
        </div>
    );
}