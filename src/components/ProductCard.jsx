import Card from "./Card";

export default function ProductCard({ image, title, category, price, description }) {
  return (
    <Card className="p-0 overflow-hidden group hover:shadow-lg transition duration-300">
      <div className="w-full h-48 bg-gray-50 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition duration-300" />
      </div>
      <div className="p-5">
        <span className="inline-block bg-red-50 text-[#FA424A] text-[10px] uppercase tracking-wider px-3 py-1 rounded-full mb-3 font-bold">
          {category}
        </span>
        <h2 className="text-md font-bold mb-1 text-gray-900 line-clamp-1">{title}</h2>
        <p className="text-gray-400 text-xs mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mt-4 border-t border-gray-50 pt-4">
          <h3 className="text-lg font-extrabold text-gray-900">
            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price)}
          </h3>
          <button className="bg-red-50 hover:bg-red-100 text-[#FA424A] font-bold px-4 py-2 rounded-lg transition text-xs">
            Detail
          </button>
        </div>
      </div>
    </Card>
  );
}