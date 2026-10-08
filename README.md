# Reken - Multi-Page Landing Page & Company Profile

Selamat datang di repositori resmi **Reken.id** — Platform Rental Mobil & Layanan Transportasi Wisata Berbasis di **Yogyakarta**.

Reken menyediakan solusi mobilitas terlengkap di D.I. Yogyakarta, mencakup sewa mobil lepas kunci harian/mingguan, sewa mobil all-in supir berpengalaman, paket wisata terpadu (Borobudur, Merapi Lava Tour, Candi Prambanan, Pantai Gunungkidul), antar-jemput Bandara YIA Kulon Progo, serta layanan drop-off luar kota (Solo, Semarang, Surabaya).

Repositori ini berfokus secara murni pada **Landing Page Multi-Halaman Publik (Informational Multi-Page Website & Company Profile)** yang memuat informasi komprehensif, transparan, dan interaktif dengan desain kelas dunia bertema **Airlume-Inspired Aesthetic**.

---

## 🎨 Desain Visual (Airlume-Inspired Aesthetic)

Antarmuka Reken mengadopsi bahasa visual modern berstandar tinggi:
- **Palet Warna Tailwind:**
  - *Deep Cobalt & Navy:* `brand-deep` (`#081142`), `brand-navy` (`#0D1B66`), `brand-blue` (`#12289E`)
  - *Electric & Sky Accent:* `brand-electric` (`#2563EB`), `brand-sky` (`#38BDF8`)
  - *Soft Periwinkle Tint:* `brand-pill` (`#EDF2FE`) untuk badge kapsul
  - *Dark Ribbed Texture:* Gradasi gelap `#050A26` hingga `#0A1340` dengan tekstur vertikal fluted bergaris
- **Pill Badges & Capsule Buttons:** Tombol bulat lonjong (`rounded-full`) dengan ikon panah di dalam lingkaran (`btn-capsule`).
- **Bento Grid Keunggulan:** Tata letak modern berbobot tinggi menampilkan efisiensi operasional 70%, profil driver berlisensi wisata, grafik pertumbuhan, dan level loyalitas.
- **8-Card AI Features Grid:** Tampilan fitur cerdas teknologi Reken (Smart AI Booking Matcher, Live Fleet Telematics, Dynamic Route Optimization, Driver Allocation System, Transparent Digital Invoicing, 24/7 Roadside Assistance, Airport Flight Tracker, Smart Maintenance Index).
- **Dark Ribbed Testimonials:** Seksi ulasan pelanggan dengan latar gelap bertekstur fluted dan rating pill bintang (`5.0 ★`).
- **Giant Watermark Footer:** Tipografi raksasa bertuliskan **REKEN** di dasar setiap halaman.

---

## 🏛️ Arsitektur Navbar & Halaman Pemasaran

Website difokuskan pada halaman landing page publik dengan **Ultra-Modern Floating Island Navbar** yang terdiri dari 6 komponen utama:

1. **Tentang Kami** (`#tentang` / `tentang.html`): Profil Reken, cerita pendirian, 3 pilar layanan, serta lokasi pool.
2. **Mitra** (`#mitra`): Program kemitraan pemilik armada (bagi hasil 75-80%), driver wisata terverifikasi, dan hotel/agen travel.
3. **Fitur** (`#fitur`): 8-card grid kapabilitas AI & telematika cerdas Reken.
4. **Harga** (`#harga`): Penawaran tarif transparan sewa lepas kunci, all-in driver, paket wisata Jogja, dan HiAce rombongan.
5. **Kontak** (`#kontak` / `kontak.html`): Layanan hotline CS 24/7 WhatsApp, lokasi 3 pool fisik di Yogyakarta, dan form pesan interaktif.
6. **Download Sekarang** (CTA Action): Tombol beranimasi shimmer beam yang membuka modal interaktif unduh aplikasi dengan QR Code SVG untuk Pelanggan dan Mitra.

```text
reken_project/
├── index.html       # Beranda Utama (Hero, Floating Navbar, How It Works, Bento Grid, AI Grid, Mitra, Harga, Kontak, Download Modal)
├── tentang.html     # Tentang Kami (Profil Perusahaan, Visi, Misi, Legalitas, 3 Lokasi Pool, Download Modal)
├── kontak.html      # Kontak & Lokasi Pool (Hotline WA 24/7, Peta 3 Pool Jogja, Form Reservasi Interaktif, Download Modal)
│
├── src/
│   ├── style.css    # Custom CSS: Floating Island Navbar, Shimmer Sweep Button, Luminous Indicators, Dark Ribbed Texture, Modal Scale
│   ├── script.js    # Interaktivitas: Viewport Scroll Spy, Offset Smooth Scrolling, Download Modal Switcher, FAQ Accordion, Testimonial Slider
│   └── images/      # Aset gambar & ilustrasi
├── robots.txt       # Aturan perayapan mesin pencari (SEO)
├── sitemap.xml      # Peta situs XML resmi
├── PRD.md           # Product Requirements Document
├── README.md        # Dokumentasi proyek
└── TODO.md          # Checklist status pengembangan
```

---

## ⚡ Fitur Living Floating Island Navbar

- **Glassmorphism Frosted Capsule:** Kontainer kapsul rounded-full dengan efek `backdrop-blur-2xl`, dual border, dan specular top reflection.
- **Living Brand Radar Beacon:** Indikator logo dengan gelombang radar hijau (`animate-ping` + `live-beacon-ring`) dan status `Online 24/7`.
- **Lively Navigation Links:** Magnetic pill hover background, active gradient underbar, dan pulse badge `Join` pada menu Mitra.
- **Shimmering Download CTA:** Tombol gradient royal blue dengan sapuan berkas cahaya (*light beam shimmer sweep*) dan ikon download animasi bounce.
- **Interactive Download Modal:** Modal pop-up dengan switch tab Aplikasi Pelanggan vs Aplikasi Mitra, dilengkapi QR Code SVG dan link store.
- **Precision Viewport Scroll Spy:** Navigasi otomatis mengenali seksi aktif saat discroll dengan perhitungan posisi `getBoundingClientRect()`.

---

## 🚀 Cara Menjalankan Proyek

Website ini dibangun menggunakan **HTML5 Semantik murni, Tailwind CSS v3 Play CDN, dan Vanilla JavaScript**, sehingga **tidak memerlukan dependensi Node.js (`npm install`) atau build tool**:

1. **Buka Langsung di Browser:**
   - Cukup buka file `index.html` dengan Google Chrome, Edge, Safari, atau Firefox.
2. **Menggunakan VS Code Live Server:**
   - Buka folder proyek di VS Code, klik kanan pada `index.html` dan pilih *Open with Live Server*.
3. **Menggunakan Local Server Ringan:**
   ```bash
   # Menggunakan Python 3
   python -m http.server 3000

   # Atau menggunakan npx serve
   npx serve .
   ```
   Akses situs di `http://localhost:3000`.

---

## 📄 Lisensi
Hak Cipta &copy; 2026 **Reken Technologies Indonesia**. Seluruh hak cipta dilindungi undang-undang.
