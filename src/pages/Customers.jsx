import { useState } from "react";
import PageHeader from "../components/PageHeader"; 
import { FiUsers, FiUserPlus, FiUserCheck, FiSearch } from "react-icons/fi"; 

// [QUIZ MATERI]: Import data pelanggan dari mockData.js
import { customersData } from "../data/mockData";

export default function Customers() {
    const [customers, setCustomers] = useState(customersData);

    // Hitung jumlah member Gold
    const goldMembers = customers.filter(cust => cust.loyalty === "Gold").length;

    return (
        <div className="font-sans">
            <PageHeader title="Customers" breadcrumb={["Dashboard", "Customers"]}>
                <div className="hidden md:flex items-center bg-gray-50 border border-gray-100 rounded-full px-4 py-2 hover:border-red-300">
                    <FiSearch className="text-gray-400 text-lg" />
                    <input type="text" placeholder="Cari Pelanggan..." className="bg-transparent border-none outline-none ml-2 text-sm w-48" />
                </div>
                <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md transition-all">
                    <FiUserPlus className="text-lg" /> Tambah Pelanggan
                </button>
            </PageHeader>

            <div className="py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-blue-50 text-blue-500 rounded-lg"><FiUsers className="text-2xl" /></div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Total Pelanggan</p>
                            <h3 className="text-2xl font-bold text-gray-800">{customers.length}</h3>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-green-50 text-green-500 rounded-lg"><FiUserCheck className="text-2xl" /></div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Pelanggan Aktif</p>
                            <h3 className="text-2xl font-bold text-gray-800">{customers.length - 2}</h3>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-yellow-50 text-yellow-600 rounded-lg"><FiUserPlus className="text-2xl" /></div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Member Gold</p>
                            <h3 className="text-2xl font-bold text-gray-800">{goldMembers}</h3>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-100">
                                    <th className="py-4 px-6 font-semibold">ID Pelanggan</th>
                                    <th className="py-4 px-6 font-semibold">Nama</th>
                                    <th className="py-4 px-6 font-semibold">Email</th>
                                    <th className="py-4 px-6 font-semibold">No. HP (WhatsApp)</th>
                                    <th className="py-4 px-6 font-semibold text-center">Tipe Member</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-gray-700">
                                {customers.map((cust, idx) => (
                                    <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50">
                                        <td className="py-4 px-6 font-medium text-red-600">{cust.id}</td>
                                        <td className="py-4 px-6 font-bold text-gray-800">{cust.name}</td>
                                        <td className="py-4 px-6">{cust.email}</td>
                                        <td className="py-4 px-6 font-medium">{cust.phone}</td>
                                        <td className="py-4 px-6 text-center">
                                            {/* Pewarnaan dinamis berdasarkan tipe loyalty */}
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                                                cust.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
                                                cust.loyalty === 'Silver' ? 'bg-gray-100 text-gray-600 border-gray-200' :
                                                'bg-orange-50 text-orange-700 border-orange-200' // Bronze
                                            }`}>
                                                {cust.loyalty}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}