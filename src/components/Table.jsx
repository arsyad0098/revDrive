export default function Table({ headers, children }) {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-50">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50 border-b border-gray-100">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50 text-sm text-gray-700">
          {children}
        </tbody>
      </table>
    </div>
  );
}