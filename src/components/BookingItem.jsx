export default function BookingItem({
  title,
  time,
  type = "normal",
  customerName,
  customerEmail,
  customerPhone,
  vehicle,
  actionLabel,
  onAction,
}) {
  const isPriority = type === "priority";
  return (
    <div className={`p-4 rounded-xl mb-3 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)] border-l-4 ${isPriority ? 'border-l-orange-400' : 'border-l-[#FA424A]'}`}>
      <div className="flex items-center justify-between gap-3">
        <div>
          <h4 className="text-sm font-bold text-gray-800">{title}</h4>
          <p className="text-xs font-medium text-gray-400 mt-1">{time}</p>
        </div>
        {actionLabel && onAction ? (
          <button
            onClick={onAction}
            className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1.5 rounded-full hover:bg-red-100 transition"
          >
            {actionLabel}
          </button>
        ) : (
          <button className="text-gray-300 hover:text-[#FA424A] transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
          </button>
        )}
      </div>
      <div className="mt-4 grid gap-2 text-xs text-gray-500">
        {vehicle && <div><span className="font-semibold text-gray-700">Kendaraan:</span> {vehicle}</div>}
        {customerName && <div><span className="font-semibold text-gray-700">Pelanggan:</span> {customerName}</div>}
        {customerEmail && <div><span className="font-semibold text-gray-700">Email:</span> {customerEmail}</div>}
        {customerPhone && <div><span className="font-semibold text-gray-700">No. HP:</span> {customerPhone}</div>}
      </div>
    </div>
  );
}