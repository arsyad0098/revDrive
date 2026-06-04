export default function StatCard({ title, value, icon, bgColor, iconBg, iconColor, footer }) {
    return (
        <div className={`${bgColor} p-6 rounded-2xl shadow-sm border border-transparent hover:shadow-md transition`}>
            <div className={`w-10 h-10 ${iconBg} ${iconColor} rounded-full flex items-center justify-center mb-4 text-xl`}>
                {icon}
            </div>
            <h3 className="text-3xl font-extrabold text-gray-900">{value}</h3>
            <p className="text-sm font-bold text-gray-700 mt-1">{title}</p>
            {footer && (
                <p className={`text-xs font-semibold ${iconColor} mt-3 bg-white/50 inline-block px-2 py-1 rounded-md`}>
                    {footer}
                </p>
            )}
        </div>
    );
}