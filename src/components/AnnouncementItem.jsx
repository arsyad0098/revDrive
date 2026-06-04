export default function AnnouncementItem({ title, time }) {
  return (
    <div className="flex items-start gap-4 py-3 border-b border-gray-50 last:border-0 group cursor-pointer hover:bg-gray-50 px-2 rounded-lg transition-all">
      <div className="text-[#FA424A] mt-0.5">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-bold text-gray-800">{title}</h4>
        <p className="text-[11px] font-medium text-gray-400 mt-1">{time}</p>
      </div>
      <button className="text-gray-300 hover:text-gray-500">
         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
      </button>
    </div>
  );
}