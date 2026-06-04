export default function BookingItem({ title, time, type = "normal" }) {
  const isPriority = type === "priority";
  return (
    <div className={`p-4 rounded-xl mb-3 flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.03)] bg-white border-l-4 ${isPriority ? 'border-l-orange-400' : 'border-l-[#FA424A]'}`}>
      <div>
        <h4 className="text-sm font-bold text-gray-800">{title}</h4>
        <p className="text-xs font-medium text-gray-400 mt-1">{time}</p>
      </div>
      <button className="text-gray-300 hover:text-[#FA424A] transition">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
      </button>
    </div>
  );
}