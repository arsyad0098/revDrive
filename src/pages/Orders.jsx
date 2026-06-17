import { useState, useRef } from "react";

const serviceData = [
  { wo: "#WO-2024-001", customer: "Budi Santoso",  date: "2024-03-01", cost: "Rp 550.000",   status: "Completed" },
  { wo: "#WO-2024-002", customer: "Siti Aminah",   date: "2024-03-02", cost: "Rp 1.250.000", status: "Pending" },
  { wo: "#WO-2024-003", customer: "Andi Wijaya",   date: "2024-03-03", cost: "Rp 300.000",   status: "Cancelled" },
  { wo: "#WO-2024-004", customer: "Dewi Lestari",  date: "2024-03-04", cost: "Rp 850.000",   status: "Completed" },
  { wo: "#WO-2024-005", customer: "Rizky Fauzi",   date: "2024-03-05", cost: "Rp 2.100.000", status: "Pending" },
  { wo: "#WO-2024-006", customer: "Budi Santoso",  date: "2024-03-06", cost: "Rp 150.000",   status: "Completed" },
];

const STATUS_TABS = ["All", "Completed", "Pending", "Cancelled"];

const tabActiveClass = {
  All: "bg-gray-900 text-white border-gray-900",
  Completed: "bg-green-100 text-green-700 border-green-600",
  Pending: "bg-orange-100 text-orange-600 border-orange-500",
  Cancelled: "bg-red-100 text-red-600 border-red-500",
};

const badgeClass = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-orange-100 text-orange-600",
  Cancelled: "bg-red-100 text-red-600",
};

export default function ServiceList() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  // 1. Inisialisasi useRef untuk elemen input pencarian
  const searchInputRef = useRef(null);

  // 2. Fungsi untuk menghapus teks dan auto-focus kembali ke input
  const handleClearSearch = () => {
    setSearch("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const filtered = serviceData.filter((row) => {
    const q = search.trim().toLowerCase();
    const matchSearch =
      !q ||
      row.wo.toLowerCase().includes(q) ||
      row.customer.toLowerCase().includes(q);
    const matchTab = activeTab === "All" || row.status === activeTab;
    return matchSearch && matchTab;
  });

  const totalPending = serviceData.filter((r) => r.status === "Pending").length;
  const totalCompleted = serviceData.filter((r) => r.status === "Completed").length;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Service List</h1>
          <p className="text-sm text-gray-500 mt-1">Daftar pengerjaan kendaraan di bengkel RevDrive</p>
        </div>
        <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors">
          + Pendaftaran Servis
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-orange-50 rounded-xl p-5">
          <p className="text-sm text-gray-600 mb-2">Total Kendaraan</p>
          <p className="text-4xl font-black text-gray-900">{serviceData.length}</p>
          <p className="text-xs font-bold tracking-widest text-red-500 mt-3">SEMUA RIWAYAT</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-5">
          <p className="text-sm text-gray-600 mb-2">Sedang Antri</p>
          <p className="text-4xl font-black text-gray-900">{totalPending}</p>
          <p className="text-xs font-bold tracking-widest text-blue-500 mt-3">MENUNGGU MEKANIK</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-5">
          <p className="text-sm text-gray-600 mb-2">Selesai</p>
          <p className="text-4xl font-black text-gray-900">{totalCompleted}</p>
          <p className="text-xs font-bold tracking-widest text-purple-500 mt-3">SIAP DIAMBIL</p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="relative flex-1 max-w-sm">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            ref={searchInputRef} // 3. Sambungkan referensi ke elemen input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari No. WO atau nama pelanggan..."
            className="w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
          />
          {/* 4. Tombol Clear (X) yang muncul hanya jika ada teks di pencarian */}
          {search && (
            <button
              onClick={handleClearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
              title="Hapus pencarian"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 border border-gray-200 bg-white px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
            </svg>
            Filter Status
          </button>
          <button className="flex items-center gap-1.5 border border-gray-200 bg-white px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
            Cetak Laporan
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-3">
        {STATUS_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all ${
              activeTab === tab ? tabActiveClass[tab] : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50"
            }`}
          >
            {tab === "All" ? "Semua" : tab}
          </button>
        ))}
      </div>

      {/* Result Count */}
      {(search.trim() || activeTab !== "All") && (
        <p className="text-xs text-gray-500 mb-3">
          Menampilkan <span className="font-semibold text-gray-700">{filtered.length}</span> dari {serviceData.length} data
        </p>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {["NO. WO", "PELANGGAN", "TANGGAL SERVIS", "TOTAL BIAYA", "STATUS", "AKSI"].map((h) => (
                <th key={h} className="px-5 py-3.5 text-left text-xs font-bold text-gray-400 tracking-wider uppercase">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((row) => (
                <tr key={row.wo} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4 font-semibold text-red-500">{row.wo}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-red-100 text-red-500 text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {row.customer[0]}
                      </div>
                      <span className="text-gray-800">{row.customer}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-gray-600">{row.date}</td>
                  <td className="px-5 py-4 font-semibold text-gray-800">{row.cost}</td>
                  <td className="px-5 py-4">
                    <span className={`px-2.5 py-1 rounded text-xs font-bold ${badgeClass[row.status]}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-300 text-lg tracking-widest cursor-pointer hover:text-gray-500">
                    ···
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-16 text-center text-gray-400 text-sm">
                  Tidak ada data yang ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}