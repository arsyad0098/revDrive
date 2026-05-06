import ErrorPage from "../components/ErrorPage";
// Import gambar dari folder assets (pastikan namanya sesuai dengan yang kamu save)
import ChefImage from "../assets/404-revDrive.png"; 

export default function NotFound() {
    return (
        <ErrorPage 
            title="Halaman Tidak Ditemukan."
            description="Maaf, URL yang Anda tuju salah. Silakan kembali ke halaman Dashboard untuk melanjutkan aktivitas."
            image={ChefImage} 
        />
    );
}