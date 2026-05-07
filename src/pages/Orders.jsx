import { useState } from "react";
import PageHeader from "../components/PageHeader"; 
import { FiPlus, FiSearch, FiTool, FiClock, FiCheckCircle } from "react-icons/fi"; 

// [QUIZ MATERI]: Import data asli dari mockData.js
import { ordersData } from "../data/mockData"; 

export default function Orders() {
    const [orders, setOrders] = useState(ordersData);

    const formatRupiah = (number) => {
        return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(number);
    };

    // Kalkulasi summary untuk dashboard mini
    const totalOrders = orders.length;
    const completedOrders = orders.filter(order => order.status === "Completed").length;
    const pendingOrders = orders.filter(order => order.status === "Pending").length;

    return (
        <div className="font-sans">
            <PageHeader title="Service List" breadcrumb={["Dashboard", "Service List"]}>
                <div className="hidden md:flex items-center bg-gray-50 border border-gray-100 rounded-full px-4 py-2 hover:border-red-300 focus-within:border-red-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-red-50">
                    <FiSearch className="text-gray-400 text-lg" />
                    <input type="text" placeholder="Cari Nama Pelanggan..." className="bg-transparent border-none outline-none ml-2 text-sm w-48 text-gray-700" />
                </div>
                <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md transition-all">
                    <FiPlus className="text-lg" /> Pendaftaran Servis
                </button>
            </PageHeader>

            <div className="py-8">
                {/* Mini Dashboard Data */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><FiTool className="text-2xl" /></div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Total Kendaraan</p>
                            <h3 className="text-2xl font-bold text-gray-800">{totalOrders}</h3>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-orange-50 text-orange-500 rounded-lg"><FiClock className="text-2xl" /></div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Sedang Antri/Pending</p>
                            <h3 className="text-2xl font-bold text-gray-800">{pendingOrders}</h3>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-green-50 text-green-500 rounded-lg"><FiCheckCircle className="text-2xl" /></div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Selesai</p>
                            <h3 className="text-2xl font-bold text-gray-800">{completedOrders}</h3>
                        </div>
                    </div>
                </div>

                {/* Table Data */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-100">
                                    <th className="py-4 px-6 font-semibold">No. WO</th>
                                    <th className="py-4 px-6 font-semibold">Pelanggan</th>
                                    <th className="py-4 px-6 font-semibold">Tanggal Servis</th>
                                    <th className="py-4 px-6 font-semibold">Total Biaya</th>
                                    <th className="py-4 px-6 font-semibold text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-gray-700">
                                {orders.map((order, index) => (
                                    <tr key={index} className="border-b border-gray-50 hover:bg-gray-50">
                                        <td className="py-4 px-6 font-bold text-red-600">{order.id}</td>
                                        <td className="py-4 px-6 font-medium text-gray-800">{order.customerName}</td>
                                        <td className="py-4 px-6 font-semibold text-gray-500">{order.orderDate}</td>
                                        <td className="py-4 px-6 font-medium text-gray-700">{formatRupiah(order.totalPrice)}</td>
                                        <td className="py-4 px-6 text-center">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                                order.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                                                'bg-red-100 text-red-700' // Untuk Cancelled
                                            }`}>
                                                {order.status}
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