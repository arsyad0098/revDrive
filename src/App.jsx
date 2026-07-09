// src/App.jsx
import React, { Suspense } from "react"; 
import { Route, Routes, Navigate } from "react-router-dom";

// 1. Layout tetap pakai import biasa
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Loading from "./components/Loading";

import "./assets/tailwind.css";

// Menambahkan lazy import untuk Landing Page & Fitur Publik
const LandingPage  = React.lazy(() => import("./pages/LandingPage"));
const BookingPage  = React.lazy(() => import("./pages/BookingPage"));
const TrackingPage = React.lazy(() => import("./pages/TrackingPage"));
const HistoryPage  = React.lazy(() => import("./pages/HistoryPage"));
const LoyaltyPage  = React.lazy(() => import("./pages/LoyaltyPage"));
// Tambahkan lazy import baru untuk halaman estimasi biaya
const EstimatesPage = React.lazy(() => import("./pages/EstimatesPage"));

// Lazy import untuk halaman Dashboard & Fitur CRM
const Dashboard       = React.lazy(() => import("./pages/Dashboard"));
const Orders          = React.lazy(() => import("./pages/Orders"));
const Customers       = React.lazy(() => import("./pages/Customers"));
const Spareparts      = React.lazy(() => import("./pages/Spareparts"));
const SparepartDetail = React.lazy(() => import("./pages/SparepartDetail"));

// Lazy import untuk halaman Auth & Error
const Login    = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const Forgot   = React.lazy(() => import("./pages/Forgot"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function RequireAuth({ children }) {
  return localStorage.getItem("user") ? children : <Navigate to="/login" replace />;
}

function RequireAdmin({ children }) {
  const user = localStorage.getItem("user");
  const parsedUser = user ? JSON.parse(user) : null;
  return parsedUser && parsedUser.role === "admin" ? children : <Navigate to="/login" replace />;
}

function RedirectIfAuth({ children }) {
  return localStorage.getItem("user") ? <Navigate to="/dashboard" replace /> : children;
}

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Route Publik Utama */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/booking" element={<RequireAuth><BookingPage /></RequireAuth>} />
        <Route path="/tracking" element={<RequireAuth><TrackingPage /></RequireAuth>} />
        <Route path="/history" element={<RequireAuth><HistoryPage /></RequireAuth>} />
        <Route path="/loyalty" element={<RequireAuth><LoyaltyPage /></RequireAuth>} />
        {/* Daftarkan rute baru untuk transparansi estimasi biaya di bawah ini */}
        <Route path="/estimates" element={<RequireAuth><EstimatesPage /></RequireAuth>} />

        {/* Route yang menggunakan Sidebar & Header (MainLayout Admin) */}
        <Route element={<RequireAdmin><MainLayout /></RequireAdmin>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/spareparts" element={<Spareparts />} />
          <Route path="/spareparts/:id" element={<SparepartDetail />} />
        </Route>

        {/* Route untuk halaman Auth */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<RedirectIfAuth><Login /></RedirectIfAuth>} />
          <Route path="/register" element={<RedirectIfAuth><Register /></RedirectIfAuth>} />
          <Route path="/forgot" element={<RedirectIfAuth><Forgot /></RedirectIfAuth>} />
        </Route>

        {/* Catch-all route untuk halaman tidak ditemukan */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}