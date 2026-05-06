import React, { Suspense } from "react"; 
import { Route, Routes } from "react-router-dom";

// 1. Layout tetap pakai import biasa (karena ini kerangka utama yang harus langsung di-load)
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Loading from "./components/Loading";

// [QUIZ MATERI]: React.lazy() digunakan untuk "Code Splitting". 
// Artinya, file komponen ini hanya akan didownload oleh browser JIKA user membuka halamannya.
// Ini bikin initial load website jadi jauh lebih cepat!
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders    = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Login     = React.lazy(() => import("./pages/Login"));
const Register  = React.lazy(() => import("./pages/Register"));
const Forgot    = React.lazy(() => import("./pages/Forgot"));
const NotFound  = React.lazy(() => import("./pages/NotFound"));

import "./assets/tailwind.css";

export default function App() {
  return (
    /**
     * [QUIZ MATERI]: <Suspense> WAJIB ada jika pakai React.lazy().
     * fallback={<Loading />} fungsinya menampilkan komponen Loading SEMENTARA 
     * menunggu file lazy berhasil didownload oleh browser.
     */
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}