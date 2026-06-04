export default function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-[1440px] mx-auto py-8 px-8 ${className}`}>
      {children}
    </div>
  );
}