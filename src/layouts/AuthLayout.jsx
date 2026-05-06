import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        // [QUIZ MATERI]: items-center & justify-center memastikan box form login berada persis di tengah layar
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md border-t-4 border-red-600">
                <div className="flex items-center justify-center mb-6">
                    <h1 className="text-4xl font-poppins font-extrabold text-gray-800 tracking-tight">
                        <span>Rev</span>
                        <span className="text-red-600">Drive</span>
                    </h1>
                </div>

                <Outlet/>

                <p className="text-center text-sm text-gray-500 mt-6">
                    © 2026 RevDrive Workshop CRM. All rights reserved.
                </p>
            </div>
        </div>
    )
}