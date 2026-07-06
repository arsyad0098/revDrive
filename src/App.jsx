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

function RedirectIfAuth({ children }) {
  return localStorage.getItem("user") ? <Navigate to="/dashboard" replace /> : children;
}

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Route Publik Utama */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/tracking" element={<TrackingPage />} /> 
        <Route path="/history" element={<HistoryPage />} /> 
        <Route path="/loyalty" element={<LoyaltyPage />} />
        {/* Daftarkan rute baru untuk transparansi estimasi biaya di bawah ini */}
        <Route path="/estimates" element={<EstimatesPage />} />

        {/* Route yang menggunakan Sidebar & Header (MainLayout Admin) */}
        <Route element={<RequireAuth><MainLayout /></RequireAuth>}>
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