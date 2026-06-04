export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-10">
      <div className="container mx-auto px-8 text-center flex justify-between items-center">
        <p className="text-gray-500 text-sm">© 2026 RevDrive. All rights reserved.</p>
        <div className="flex gap-4 text-sm text-gray-500">
          <a href="#" className="hover:text-red-600">Support</a>
          <a href="#" className="hover:text-red-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}
