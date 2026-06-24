import React, { Suspense } from "react"; 
import { Route, Routes, Navigate } from "react-router-dom";

// 1. Layout tetap pakai import biasa
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Loading from "./components/Loading";

import "./assets/tailwind.css";

// [REVISION]: Tambahkan lazy import untuk halaman Spareparts & Detail
const Dashboard       = React.lazy(() => import("./pages/Dashboard"));
const Orders          = React.lazy(() => import("./pages/Orders"));
const Customers       = React.lazy(() => import("./pages/Customers"));
const Spareparts      = React.lazy(() => import("./pages/Spareparts"));
const SparepartDetail = React.lazy(() => import("./pages/SparepartDetail"));

const Login           = React.lazy(() => import("./pages/Login"));
const Register        = React.lazy(() => import("./pages/Register"));
const Forgot          = React.lazy(() => import("./pages/Forgot"));
const NotFound        = React.lazy(() => import("./pages/NotFound"));

function RequireAuth({ children }) {
  return localStorage.getItem("user") ? children : <Navigate to="/login" replace />;
}

function RedirectIfAuth({ children }) {
  return localStorage.getItem("user") ? <Navigate to="/" replace /> : children;
}

export default function App() {
  return (
    /**
     * Suspense akan menangani loading state saat user berpindah ke halaman lazy-load
     */
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Route yang menggunakan Sidebar & Header (MainLayout) */}
        <Route element={<RequireAuth><MainLayout /></RequireAuth>}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />

          {/* Implementasi Dynamic Route untuk Project CRM */}
          <Route path="spareparts" element={<Spareparts />} />
          <Route path="spareparts/:id" element={<SparepartDetail />} />
        </Route>

        {/* Route untuk halaman Auth */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<RedirectIfAuth><Login /></RedirectIfAuth>} />
          <Route path="register" element={<RedirectIfAuth><Register /></RedirectIfAuth>} />
          <Route path="forgot" element={<RedirectIfAuth><Forgot /></RedirectIfAuth>} />
        </Route>

        {/* Catch-all route untuk halaman tidak ditemukan */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}