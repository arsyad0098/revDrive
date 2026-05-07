import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F8F9FB]">
            <div className="bg-white p-10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-md border border-gray-100">
                <div className="flex flex-col items-center mb-8">
                    <h1 className="text-3xl font-bold text-[#161E54] tracking-tight flex items-center gap-2">
                        <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white text-xl italic">R</div>
                        RevDrive
                    </h1>
                </div>

                <Outlet/>

                <p className="text-center text-xs text-gray-400 mt-8 font-medium">
                    © 2026 RevDrive Workshop CRM. All rights reserved.
                </p>
            </div>
        </div>
    )
}