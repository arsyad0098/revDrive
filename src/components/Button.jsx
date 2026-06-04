export default function Button({ children, type = "primary", className = "", ...props }) {
  const types = {
    primary: "bg-[#FA424A] hover:bg-red-600 text-white shadow-md shadow-red-200",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-700",
    success: "bg-green-500 hover:bg-green-600 text-white",
    danger: "bg-[#FA424A] hover:bg-red-600 text-white",
    warning: "bg-orange-500 hover:bg-orange-600 text-white",
    outline: "bg-white border-2 border-[#FA424A] text-[#FA424A] hover:bg-red-50",
  };

  return (
    <button className={`${types[type]} px-5 py-2.5 rounded-lg font-bold text-sm transition duration-200 ${className}`} {...props}>
      {children}
    </button>
  );
}