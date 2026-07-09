export const customersData = [
    { id: "CUST-001", name: "Budi Santoso", email: "budi@gmail.com", phone: "081234567890", loyalty: "Gold" },
    { id: "CUST-002", name: "Siti Aminah", email: "siti@yahoo.com", phone: "085678901234", loyalty: "Silver" },
    { id: "CUST-003", name: "Andi Wijaya", email: "andi@outlook.com", phone: "082134567812", loyalty: "Bronze" },
    { id: "CUST-004", name: "Dewi Lestari", email: "dewi@gmail.com", phone: "081398765432", loyalty: "Gold" },
    { id: "CUST-005", name: "Rizky Fauzi", email: "rizky@pcr.ac.id", phone: "081212121212", loyalty: "Silver" },
];

// Data untuk halaman Orders
export const ordersData = [
    { 
        id: "WO-2024-001", 
        customerName: "Budi Santoso", 
        orderDate: "2024-03-01", 
        totalPrice: 550000, 
        status: "Completed" 
    },
    { 
        id: "WO-2024-002", 
        customerName: "Siti Aminah", 
        orderDate: "2024-03-02", 
        totalPrice: 1250000, 
        status: "Pending" 
    },
    { 
        id: "WO-2024-003", 
        customerName: "Andi Wijaya", 
        orderDate: "2024-03-03", 
        totalPrice: 300000, 
        status: "Cancelled" 
    },
    { 
        id: "WO-2024-004", 
        customerName: "Dewi Lestari", 
        orderDate: "2024-03-04", 
        totalPrice: 850000, 
        status: "Completed" 
    },
    { 
        id: "WO-2024-005", 
        customerName: "Rizky Fauzi", 
        orderDate: "2024-03-05", 
        totalPrice: 2100000, 
        status: "Pending" 
    },
    { 
        id: "WO-2024-006", 
        customerName: "Budi Santoso", 
        orderDate: "2024-03-06", 
        totalPrice: 150000, 
        status: "Completed" 
    }
];
// Data Lengkap Sparepart Mobil RevDrive
export const sparepartsData = [
  {
    id: "SPP-001",
    name: "Oli Mesin Shell Helix Ultra 5W-40",
    category: "Pelumas",
    price: 750000,
    stock: 12,
    brand: "Shell",
    description: "Oli mesin full sintetis dengan teknologi PurePlus untuk perlindungan maksimal mesin modern dari endapan lumpur.",
    image: "https://images.unsplash.com/photo-1635843343100-1cc67936a751?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "SPP-002",
    name: "Kampas Rem Depan Brembo (Toyota Fortuner)",
    category: "Pengereman",
    price: 1250000,
    stock: 8,
    brand: "Brembo",
    description: "Kampas rem keramik berperforma tinggi. Pakem, tidak berisik, dan minim debu untuk SUV besar.",
    image: "https://images.unsplash.com/photo-1598501479155-90b512335136?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "SPP-003",
    name: "Filter Oli Denso (Toyota/Daihatsu)",
    category: "Filter",
    price: 65000,
    stock: 40,
    brand: "Denso",
    description: "Saringan oli dengan efisiensi tinggi untuk menjaga kebersihan pelumas mesin mobil keluarga.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "SPP-004",
    name: "Aki GS Astra Maintenance Free 45Ah",
    category: "Elektrikal",
    price: 980000,
    stock: 5,
    brand: "GS Astra",
    description: "Aki kering bebas perawatan dengan daya starter tinggi, cocok untuk Avanza, Xenia, dan mobil 1500cc lainnya.",
    image: "https://images.unsplash.com/photo-1620939511593-2900ee693f01?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "SPP-005",
    name: "Shockbreaker Depan Kayaba Ultra",
    category: "Kaki-kaki",
    price: 1850000,
    stock: 4,
    brand: "Kayaba",
    description: "Shockbreaker gas tipe heavy duty untuk kenyamanan berkendara di jalanan yang tidak rata.",
    image: "https://images.unsplash.com/photo-1599256872237-5dcc0fbe966a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "SPP-006",
    name: "Busi Iridium Denso Tough",
    category: "Mesin",
    price: 150000,
    stock: 24,
    brand: "Denso",
    description: "Busi ujung iridium 0.4mm untuk pengapian yang lebih fokus, membuat tarikan mesin lebih enteng dan irit bbm.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "SPP-007",
    name: "Turbocharger Kit IHI RHF4",
    category: "Mesin",
    price: 8500000,
    stock: 2,
    brand: "IHI Turbo",
    description: "Komponen induksi udara paksa untuk meningkatkan tenaga mesin diesel secara signifikan.",
    image: "https://images.unsplash.com/photo-1600706432502-77a0e2e327fc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "SPP-008",
    name: "Ban Michelin Pilot Sport 5 (225/45 R18)",
    category: "Ban",
    price: 2450000,
    stock: 10,
    brand: "Michelin",
    description: "Ban performa tinggi dengan daya cengkeram luar biasa di kondisi jalan basah maupun kering.",
    image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80"
  }
];

// Data untuk halaman Tracking - Daftar Booking dengan Status Servis berdasarkan User
export const bookingsData = [
  {
    id: "WO-2024-001",
    userEmail: "budi@gmail.com",
    customerName: "Budi Santoso",
    vehicle: "Toyota Avanza (2022)",
    licensePlate: "BM 1234 PCR",
    status: "Diperiksa",
    complaint: "Ganti Oli & Rem Bunyi",
    bookingDate: "2024-03-15",
    bookingTime: "10:00",
    estimatedFinish: "2024-03-15 14:30",
    trackingSteps: [
      { id: 1, title: "Antri", desc: "Menunggu giliran pengerjaan", status: "completed" },
      { id: 2, title: "Diperiksa", desc: "Inspeksi oleh Service Advisor", status: "active" },
      { id: 3, title: "Dikerjakan", desc: "Mekanik sedang melakukan perbaikan", status: "pending" },
      { id: 4, title: "Quality Check", desc: "Pengecekan standar kualitas akhir", status: "pending" },
      { id: 5, title: "Selesai", desc: "Kendaraan siap diambil & bayar", status: "pending" }
    ]
  },
  {
    id: "WO-2024-002",
    userEmail: "budi@gmail.com",
    customerName: "Budi Santoso",
    vehicle: "Honda Civic (2020)",
    licensePlate: "BM 5678 ABC",
    status: "Selesai",
    complaint: "Service Berkala & Ganti Filter",
    bookingDate: "2024-03-10",
    bookingTime: "08:30",
    estimatedFinish: "2024-03-10 12:00",
    trackingSteps: [
      { id: 1, title: "Antri", desc: "Menunggu giliran pengerjaan", status: "completed" },
      { id: 2, title: "Diperiksa", desc: "Inspeksi oleh Service Advisor", status: "completed" },
      { id: 3, title: "Dikerjakan", desc: "Mekanik sedang melakukan perbaikan", status: "completed" },
      { id: 4, title: "Quality Check", desc: "Pengecekan standar kualitas akhir", status: "completed" },
      { id: 5, title: "Selesai", desc: "Kendaraan siap diambil & bayar", status: "completed" }
    ]
  },
  {
    id: "WO-2024-003",
    userEmail: "siti@yahoo.com",
    customerName: "Siti Aminah",
    vehicle: "Daihatsu Xenia (2019)",
    licensePlate: "D 9876 XYZ",
    status: "Menunggu",
    complaint: "Perbaikan AC Mobil",
    bookingDate: "2024-03-20",
    bookingTime: "14:00",
    estimatedFinish: "2024-03-20 16:30",
    trackingSteps: [
      { id: 1, title: "Antri", desc: "Menunggu giliran pengerjaan", status: "active" },
      { id: 2, title: "Diperiksa", desc: "Inspeksi oleh Service Advisor", status: "pending" },
      { id: 3, title: "Dikerjakan", desc: "Mekanik sedang melakukan perbaikan", status: "pending" },
      { id: 4, title: "Quality Check", desc: "Pengecekan standar kualitas akhir", status: "pending" },
      { id: 5, title: "Selesai", desc: "Kendaraan siap diambil & bayar", status: "pending" }
    ]
  },
  {
    id: "WO-2024-004",
    userEmail: "andi@outlook.com",
    customerName: "Andi Wijaya",
    vehicle: "Suzuki Ertiga (2021)",
    licensePlate: "AG 1111 DEF",
    status: "Dikerjakan",
    complaint: "Ganti Kampas Rem",
    bookingDate: "2024-03-18",
    bookingTime: "11:00",
    estimatedFinish: "2024-03-18 15:00",
    trackingSteps: [
      { id: 1, title: "Antri", desc: "Menunggu giliran pengerjaan", status: "completed" },
      { id: 2, title: "Diperiksa", desc: "Inspeksi oleh Service Advisor", status: "completed" },
      { id: 3, title: "Dikerjakan", desc: "Mekanik sedang melakukan perbaikan", status: "active" },
      { id: 4, title: "Quality Check", desc: "Pengecekan standar kualitas akhir", status: "pending" },
      { id: 5, title: "Selesai", desc: "Kendaraan siap diambil & bayar", status: "pending" }
    ]
  }
];