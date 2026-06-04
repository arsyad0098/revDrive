export default function Badge({ children, type = "primary" }) {
  const types = {
    primary: "bg-blue-50 text-blue-600",
    secondary: "bg-gray-100 text-gray-600",
    success: "bg-green-50 text-green-600",
    danger: "bg-red-50 text-[#FA424A]",
    warning: "bg-orange-50 text-orange-600",
  };
  return (
    <span className={`${types[type]} px-3 py-1 rounded-md text-xs font-bold tracking-wide`}>
      {children}
    </span>
  );
}