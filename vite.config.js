import path from 'path' // 1. Tambahkan import path dari Node
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import "tailwindcss";
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // 2. Tambahkan block resolve alias dari modul dosen di bawah ini
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})