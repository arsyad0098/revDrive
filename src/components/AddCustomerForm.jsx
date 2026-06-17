import React, { useRef, useEffect } from "react";

export default function AddCustomerForm({ onSubmit }) {
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current?.value || "";
    const phone = e.target.elements.phone?.value || "";
    const payload = { name, phone };
    if (onSubmit) onSubmit(payload);
    // reset
    e.target.reset();
    nameRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md w-full max-w-md">
      <h3 className="text-lg font-bold mb-3">Tambah Pelanggan</h3>
      <div className="mb-3">
        <label className="block text-xs font-medium mb-1">Nama Pelanggan</label>
        <input ref={nameRef} name="name" type="text" className="w-full px-3 py-2 border rounded" placeholder="Nama lengkap" required />
      </div>
      <div className="mb-4">
        <label className="block text-xs font-medium mb-1">No. Telepon</label>
        <input name="phone" type="text" className="w-full px-3 py-2 border rounded" placeholder="0812xxxx" />
      </div>
      <div className="flex gap-2 justify-end">
        <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded">Simpan</button>
      </div>
    </form>
  );
}
