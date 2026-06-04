export default function Avatar({ name }) {
  return (
    <div className="w-10 h-10 rounded-full bg-red-50 text-[#FA424A] flex items-center justify-center font-bold border border-red-100">
      {name ? name.charAt(0).toUpperCase() : "U"}
    </div>
  );
}