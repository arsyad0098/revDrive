export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 p-6 ${className}`}>
      {children}
    </div>
  );
}