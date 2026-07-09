import { useState, useRef } from "react";

const loadOrders = () => {
  const saved = localStorage.getItem("orders");
  if (!saved) return [];
  try {
    const orders = JSON.parse(saved);
    return orders.map((order) => ({
      ...order,
      customerName: order.customerName || "",
      customerEmail: order.customerEmail || "",
      customerPhone: order.customerPhone || "",
      vehicle: order.vehicle || `${order.merek || ""} ${order.model || ""}`.trim(),
    }));
  } catch {
    return [];
  }
};

const STATUS_TABS = ["All", "Menunggu", "Diperbaiki", "Siap diambil"];

const tabActiveClass = {
  All: "bg-gray-900 text-white border-gray-900",
  Menunggu: "bg-orange-100 text-orange-600 border-orange-500",
  Diperbaiki: "bg-blue-100 text-blue-700 border-blue-500",
  "Siap diambil": "bg-green-100 text-green-700 border-green-500",
};

const badgeClass = {
  Menunggu: "bg-orange-100 text-orange-600",
  Diperbaiki: "bg-blue-100 text-blue-700",
  "Siap diambil": "bg-green-100 text-green-700",
};

export default function ServiceList() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [serviceData, setServiceData] = useState(loadOrders);
  const [expandedWo, setExpandedWo] = useState(null);
  const [editingOrder, setEditingOrder] = useState(null);
  const searchInputRef = useRef(null);

  const saveOrders = (nextOrders) => {
    localStorage.setItem("orders", JSON.stringify(nextOrders));
    setServiceData(nextOrders);
  };

  const handleClearSearch = () => {
    setSearch("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleDelete = (wo) => {
    const confirmed = window.confirm("Hapus booking ini dari daftar?\nTindakan ini tidak dapat dibatalkan.");
    if (!confirmed) return;
    const nextOrders = serviceData.filter((row) => row.wo !== wo);
    saveOrders(nextOrders);
    if (expandedWo === wo) setExpandedWo(null);
    if (editingOrder?.wo === wo) setEditingOrder(null);
  };

  const handleEdit = (row) => {
    setEditingOrder({ ...row });
  };

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setEditingOrder((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const nextOrders = serviceData.map((row) => (row.wo === editingOrder.wo ? editingOrder : row));
    saveOrders(nextOrders);
    setEditingOrder(null);
  };

  const filtered = serviceData.filter((row) => {
    const q = search.trim().toLowerCase();
    const matchSearch =
      !q ||
      row.wo.toLowerCase().includes(q) ||
      row.customerName?.toLowerCase().includes(q) ||
      row.customerEmail?.toLowerCase().includes(q) ||
      row.customerPhone?.toLowerCase().includes(q) ||
      row.noPolisi.toLowerCase().includes(q) ||
      row.vehicle?.toLowerCase().includes(q) ||
      row.keluhan.toLowerCase().includes(q);
    const matchTab = activeTab === "All" || row.status === activeTab;
    return matchSearch && matchTab;
  });

  const totalPending = serviceData.filter((r) => r.status === "Menunggu").length;
  const totalDiperbaiki = serviceData.filter((r) => r.status === "Diperbaiki").length;
  const totalReady = serviceData.filter((r) => r.status === "Siap diambil").length;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Daftar Booking</h1>
          <p className="text-sm text-gray-500 mt-1">Kelola pesan reservasi dan status servis pelanggan.</p>
        </div>
        <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors">
          + Pendaftaran Servis
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-orange-50 rounded-xl p-5">
          <p className="text-sm text-gray-600 mb-2">Total Booking</p>
          <p className="text-4xl font-black text-gray-900">{serviceData.length}</p>
          <p className="text-xs font-bold tracking-widest text-red-500 mt-3">SEMUA</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-5">
          <p className="text-sm text-gray-600 mb-2">Menunggu</p>
          <p className="text-4xl font-black text-gray-900">{totalPending}</p>
          <p className="text-xs font-bold tracking-widest text-blue-500 mt-3">DALAM ANTRIAN</p>
        </div>
        <div className="bg-green-50 rounded-xl p-5">
          <p className="text-sm text-gray-600 mb-2">Siap diambil</p>
          <p className="text-4xl font-black text-gray-900">{totalReady}</p>
          <p className="text-xs font-bold tracking-widest text-green-500 mt-3">SELESAI</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-3">
        <div className="relative flex-1 max-w-sm">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={searchInputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari No. WO, pelanggan, plat, atau keluhan..."
            className="w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
          />
          {search && (
            <button
              onClick={handleClearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
              title="Hapus pencarian"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 border border-gray-200 bg-white px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            Filter Status
          </button>
          <button className="flex items-center gap-1.5 border border-gray-200 bg-white px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="6 9 12 15 18 9" />
            </svg>
            Cetak Laporan
          </button>
        </div>
      </div>

      <div className="flex gap-2 mb-3 overflow-x-auto">
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

      {(search.trim() || activeTab !== "All") && (
        <p className="text-xs text-gray-500 mb-3">
          Menampilkan <span className="font-semibold text-gray-700">{filtered.length}</span> dari {serviceData.length} data
        </p>
      )}

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {['Informasi Pelanggan', 'Kendaraan', 'JADWAL', 'STATUS', 'AKSI'].map((h) => (
                <th key={h} className="px-5 py-3.5 text-left text-xs font-bold text-gray-400 tracking-wider uppercase">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((row) => (
                <>
                  <tr key={row.wo} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4 align-top">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-red-100 text-red-500 text-xs font-bold flex items-center justify-center shrink-0">
                            {(row.customerName || "P")[0]}
                          </div>
                          <span className="text-gray-800 font-semibold">{row.customerName || "Pelanggan"}</span>
                        </div>
                        {row.customerEmail ? <div className="text-xs text-gray-500">Email: {row.customerEmail}</div> : <div className="text-xs text-gray-500">Email: -</div>}
                        {row.customerPhone ? <div className="text-xs text-gray-500">No. HP: {row.customerPhone}</div> : <div className="text-xs text-gray-500">No. HP: -</div>}
                        <div className="text-xs text-gray-500">No. WO: {row.wo}</div>
                      </div>
                    </td>
                    <td className="px-5 py-4 align-top">
                      <div className="text-xs text-gray-500 font-medium">No. Polisi: {row.noPolisi}</div>
                      <div className="text-xs text-gray-500">{row.vehicle}</div>
                      <div className="text-xs text-gray-500">Tahun {row.tahun}</div>
                    </td>
                    <td className="px-5 py-4 align-top text-gray-700">
                      <div className="font-semibold">{row.date}</div>
                      <div className="text-xs text-gray-500">{row.jam}</div>
                    </td>
                    <td className="px-5 py-4 align-top">
                      <span className={`px-2.5 py-1 rounded text-xs font-bold ${badgeClass[row.status] || 'bg-gray-100 text-gray-600'}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 align-top space-y-2">
                      <button
                        onClick={() => setExpandedWo(expandedWo === row.wo ? null : row.wo)}
                        className="w-full text-left text-xs font-semibold text-red-600 hover:text-red-800"
                      >
                        {expandedWo === row.wo ? 'Sembunyikan Detail' : 'Lihat Detail'}
                      </button>
                      <button
                        onClick={() => handleEdit(row)}
                        className="w-full bg-gray-100 text-gray-700 rounded-xl px-3 py-2 text-xs font-semibold hover:bg-gray-200"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(row.wo)}
                        className="w-full bg-red-50 text-red-600 rounded-xl px-3 py-2 text-xs font-semibold hover:bg-red-100"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                  {expandedWo === row.wo && (
                    <tr key={`${row.wo}-detail`} className="bg-gray-50">
                      <td colSpan={5} className="px-5 py-4 text-sm text-gray-600">
                        <div className="grid gap-3 sm:grid-cols-2">
                          <div className="rounded-2xl bg-white p-4 border border-gray-100 shadow-sm">
                            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Keluhan Pelanggan</h3>
                            <p className="text-gray-700">{row.keluhan || '-'}</p>
                          </div>
                          <div className="rounded-2xl bg-white p-4 border border-gray-100 shadow-sm">
                            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Detail Booking</h3>
                            <p className="text-gray-700">Jenis Servis: {row.jenisServis}</p>
                            <p className="text-gray-700">No. Polisi: {row.noPolisi}</p>
                            <p className="text-gray-700">Waktu: {row.jam}</p>
                          </div>
                          <div className="rounded-2xl bg-white p-4 border border-gray-100 shadow-sm">
                            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Informasi Pelanggan</h3>
                            <p className="text-gray-700">Nama: {row.customerName || "-"}</p>
                            <p className="text-gray-700">Email: {row.customerEmail || "-"}</p>
                            <p className="text-gray-700">No. HP: {row.customerPhone || "-"}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-16 text-center text-gray-400 text-sm">
                  Tidak ada data yang ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {editingOrder && (
        <div className="mt-8 bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Edit Booking {editingOrder.wo}</h2>
              <p className="text-sm text-gray-500">Ubah detail order dan status pelanggan.</p>
            </div>
            <button
              onClick={() => setEditingOrder(null)}
              className="text-gray-500 hover:text-gray-900 text-sm font-semibold"
            >
              Batal
            </button>
          </div>

          <form onSubmit={handleSave} className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Nomor Polisi</label>
                <input
                  name="noPolisi"
                  value={editingOrder.noPolisi}
                  onChange={handleChangeEdit}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-100"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Merek</label>
                <input
                  name="merek"
                  value={editingOrder.merek}
                  onChange={handleChangeEdit}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-100"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Model / Tipe</label>
                <input
                  name="model"
                  value={editingOrder.model}
                  onChange={handleChangeEdit}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-100"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Tahun</label>
                <input
                  name="tahun"
                  type="number"
                  value={editingOrder.tahun}
                  onChange={handleChangeEdit}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-100"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Tanggal Servis</label>
                <input
                  name="date"
                  type="date"
                  value={editingOrder.date}
                  onChange={handleChangeEdit}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-100"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Waktu Servis</label>
                <input
                  name="jam"
                  type="time"
                  value={editingOrder.jam}
                  onChange={handleChangeEdit}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-100"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Status</label>
                <select
                  name="status"
                  value={editingOrder.status}
                  onChange={handleChangeEdit}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-100"
                >
                  <option value="Menunggu">Menunggu</option>
                  <option value="Diperbaiki">Diperbaiki</option>
                  <option value="Siap diambil">Siap diambil</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Keluhan</label>
                <textarea
                  name="keluhan"
                  value={editingOrder.keluhan}
                  onChange={handleChangeEdit}
                  rows="4"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-100 resize-none"
                />
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-wrap gap-3 justify-end">
              <button
                type="button"
                onClick={() => setEditingOrder(null)}
                className="rounded-2xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                type="submit"
                className="rounded-2xl bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700"
              >
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
