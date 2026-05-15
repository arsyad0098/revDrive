import React, { Suspense } from "react"; 
import { Route, Routes } from "react-router-dom";

// 1. Layout tetap pakai import biasa
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Loading from "./components/Loading";

import "./assets/tailwind.css";

// [REVISION]: Tambahkan lazy import untuk halaman Spareparts & Detail
const Dashboard       = React.lazy(() => import("./pages/Dashboard"));
const Orders          = React.lazy(() => import("./pages/Orders"));
const Customers       = React.lazy(() => import("./pages/Customers"));
const Spareparts      = React.lazy(() => import("./pages/Spareparts"));      // <-- Baru
const SparepartDetail = React.lazy(() => import("./pages/SparepartDetail")); // <-- Baru (Dynamic Route)

const Login           = React.lazy(() => import("./pages/Login"));
const Register        = React.lazy(() => import("./pages/Register"));
const Forgot          = React.lazy(() => import("./pages/Forgot"));
const NotFound        = React.lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    /**
     * Suspense akan menangani loading state saat user berpindah ke halaman lazy-load
     */
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Route yang menggunakan Sidebar & Header (MainLayout) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          
          {/* Implementasi Dynamic Route untuk Project CRM */}
          <Route path="/spareparts" element={<Spareparts />} />
          <Route path="/spareparts/:id" element={<SparepartDetail />} />
        </Route>

        {/* Route untuk halaman Auth */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Catch-all route untuk halaman tidak ditemukan */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}