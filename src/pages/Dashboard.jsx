import { FiTool, FiCheckCircle, FiClock, FiDollarSign, FiCalendar } from "react-icons/fi";
import { 
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend 
} from 'recharts';

const areaData = [
    { name: 'Senin', service: 12 },
    { name: 'Selasa', service: 18 },
    { name: 'Rabu', service: 15 },
    { name: 'Kamis', service: 22 },
    { name: 'Jumat', service: 30 },
    { name: 'Sabtu', service: 45 },
    { name: 'Minggu', service: 40 },
];

const pieData = [
    { name: 'Ganti Oli', value: 45 },
    { name: 'Servis Berkala', value: 35 },
    { name: 'Perbaikan Mesin', value: 20 },
];
const COLORS = ['#DC2626', '#10B981', '#3B82F6']; // Red, Green, Blue

export default function Dashboard() {
    return (
        <div className="font-sans">
            {/* Dashboard Title & Filter */}
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Dashboard Bengkel</h2>
                    <p className="text-sm text-gray-500 mt-1">Pantau kendaraan masuk dan antrian hari ini.</p>
                </div>
                <button className="flex items-center gap-3 bg-white border border-gray-200 px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all text-sm font-semibold text-gray-700">
                    <div className="bg-red-50 p-1.5 rounded-lg text-red-600">
                        <FiCalendar />
                    </div>
                    <div className="text-left flex flex-col">
                        <span className="text-[10px] text-gray-400 font-medium">Filter Tanggal</span>
                        <span>Hari Ini</span>
                    </div>
                </button>
            </div>

            {/* 1. STATS CARDS */}
            {/* [QUIZ MATERI]: grid-cols-4 membagi row menjadi 4 kolom yang sama rata. gap-6 memberi jarak antar kartu */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="bg-blue-50 rounded-full p-4 text-blue-600"><FiTool className="text-3xl" /></div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-extrabold text-gray-800">24</span>
                        <span className="text-sm text-gray-500 font-medium mt-0.5">Total Servis</span>
                    </div>
                </div>

                <div className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="bg-orange-50 rounded-full p-4 text-orange-500"><FiClock className="text-3xl" /></div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-extrabold text-gray-800">8</span>
                        <span className="text-sm text-gray-500 font-medium mt-0.5">Sedang Dikerjakan</span>
                    </div>
                </div>

                <div className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="bg-green-50 rounded-full p-4 text-green-500"><FiCheckCircle className="text-3xl" /></div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-extrabold text-gray-800">16</span>
                        <span className="text-sm text-gray-500 font-medium mt-0.5">Selesai / Diambil</span>
                    </div>
                </div>

                <div className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="bg-red-50 rounded-full p-4 text-red-600"><FiDollarSign className="text-3xl" /></div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-extrabold text-gray-800">Rp 4.5M</span>
                        <span className="text-sm text-gray-500 font-medium mt-0.5">Pendapatan</span>
                    </div>
                </div>
            </div>

            {/* 2. CHARTS SECTION */}
            <div className="grid lg:grid-cols-12 gap-6">
                
                {/* PIE CHART */}
                <div className="lg:col-span-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-gray-800">Kategori Servis</h3>
                    </div>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={pieData} innerRadius={60} outerRadius={85} paddingAngle={5} dataKey="value" stroke="none">
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36} iconType="circle" />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* AREA CHART */}
                <div className="lg:col-span-7 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <h3 className="text-lg font-bold text-gray-800">Grafik Kendaraan Masuk</h3>
                            <p className="text-xs text-gray-400 mt-1">Minggu ini</p>
                        </div>
                    </div>
                    <div className="h-[250px] mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={areaData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorService" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#DC2626" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="#DC2626" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 11, fill: '#9ca3af'}} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 11, fill: '#9ca3af'}} />
                                <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                <Area type="monotone" dataKey="service" stroke="#DC2626" fillOpacity={1} fill="url(#colorService)" strokeWidth={3} activeDot={{ r: 6, strokeWidth: 0, fill: '#DC2626' }} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}