# Product Requirements Document (PRD): Reken Multi-Page Informational Website

## 1. Executive Summary & Latar Belakang
**Reken** adalah platform rental mobil dan penyedia jasa transportasi wisata terkemuka yang berbasis di **Yogyakarta**. Reken menghadirkan solusi mobilitas lengkap bagi wisatawan lokal, mancanegara, pelaku bisnis, hingga instansi korporat. Layanan utama mencakup:
- **Sewa Mobil Lepas Kunci (Self-Drive):** Unit kendaraan tahun muda dengan transmisi matic dan manual.
- **Sewa All-In Supir + BBM:** Didampingi pengemudi lokal ramah yang menguasai rute serta rekomendasi kuliner & spot foto terbaik di Jogja.
- **Paket Wisata Yogyakarta:** Eksplorasi Candi Borobudur, Prambanan, Lava Tour Merapi, Pantai Pasir Putih Gunungkidul, hingga Hutan Pinus Mangunan.
- **Antar-Jemput Bandara & Luar Kota:** Shuttle Bandara Internasional Yogyakarta (YIA), Stasiun Tugu & Lempuyangan, serta drop-off luar kota (Solo, Semarang, Surabaya).

Sesuai arahan produk, proyek ini difokuskan **secara menyeluruh pada Landing Page Multi-Halaman Publik (Informational Website & Company Profile)** untuk menyajikan informasi layanan yang transparan, mudah diakses, berdaya konversi tinggi, serta dikemas dengan visual modern bertema **Airlume Aesthetic**.

---

## 2. Arsitektur Navbar & Navigasi Terpadu (Floating Island Navbar)

Website berpusat pada **Ultra-Modern Floating Island Navbar** yang memuat 6 komponen penting sesuai mandat pengguna:

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│              STRUKTUR ULTRA-MODERN FLOATING ISLAND NAVBAR REKEN.ID                     │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  1. TENTANG KAMI                                                                       │
│     - Desktop / Mobile: Tautan ke seksi #tentang pada beranda & halaman tentang.html   │
│     - Konten: Profil PT Reken Technologies Indonesia, visi, misi, dan nilai layanan.   │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  2. MITRA (Dengan Living Badge "Join")                                                 │
│     - Desktop / Mobile: Tautan ke seksi #mitra                                         │
│     - Konten: Kemitraan Pemilik Mobil (Rev-share 75-80%), Driver Wisata, & Hotel/B2B   │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  3. FITUR                                                                              │
│     - Desktop / Mobile: Tautan ke seksi #fitur                                         │
│     - Konten: Grid 8 kapabilitas AI booking, telematika live, optimasi rute Jogja      │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  4. HARGA                                                                              │
│     - Desktop / Mobile: Tautan ke seksi #harga                                         │
│     - Konten: Katalog paket sewa lepas kunci, all-in supir, tur wisata, HiAce rombongan│
├────────────────────────────────────────────────────────────────────────────────────────┤
│  5. KONTAK                                                                             │
│     - Desktop / Mobile: Tautan ke seksi #kontak pada beranda & halaman kontak.html     │
│     - Konten: Hotline WhatsApp 24 Jam, alamat 3 pool fisik Jogja, form interaktif      │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  6. DOWNLOAD SEKARANG (Call-To-Action Button)                                          │
│     - Desktop / Mobile: Tombol animasi shimmer sweep yang membuka modal interaktif     │
│     - Konten: Modal QR Code SVG dengan switcher Aplikasi Pelanggan vs Aplikasi Mitra   │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Spesifikasi Rinci Setiap Halaman

### 3.1 Beranda Utama (`index.html`)
- **Tujuan:** Menjadi etalase utama yang memukau pengguna pada pandangan pertama (*first-impression impact*), mengenalkan diferensiasi Reken, dan mengonversi pengunjung menjadi pemesan.
- **Komponen Utama:**
  1. *Header Navigation*: Sticky glassmorphism bar dengan menu navigasi ke seluruh halaman multi-page dan tombol CTA konsultasi.
  2. *Hero Section*: Judul bertenaga, badge pill status operasional, dual-button action, dan mockup kartu unit kendaraan siap jalan.
  3. *Interactive 4-Step Switcher*: Mengadaptasi kartu navigasi interaktif (`Prev / Next`) yang menjelaskan siklus reservasi armada secara dinamis.
  4. *Bento Grid Keunggulan*: Layout modern berbobot tinggi menampilkan efisiensi 70%, supir berlisensi wisata, grafik pertumbuhan, dan level loyalitas.
  5. *8-Card AI Features Grid*: Layout grid 4x2 yang menampilkan keunggulan teknologi (Smart AI Booking Matcher, Live Fleet Telematics, Dynamic Route Optimization, Driver Allocation System, Transparent Digital Invoicing, 24/7 Emergency Roadside Assistance, Airport Flight Tracker Integration, Smart Maintenance Health Index).
  6. *Fleet Preview & Tour Teaser*: Cuplikan 3 armada paling favorit dan paket wisata unggulan.
  7. *Dark Ribbed Testimonials*: Tampilan ulasan pelanggan bintang lima dengan latar tekstur vertikal cobalt gelap.
  8. *Floating CTA*: Kartu aksi menonjol ("Ready To Drive Smarter With Reken?") dengan tombol langsung ke armada dan kontak.
  9. *Footer Giant Watermark*: Tipografi monumental "REKEN" di bagian bawah layar.

### 3.2 Halaman Profil (`tentang.html`)
- **Tujuan:** Membangun kredibilitas, transparansi legalitas, dan kepercayaan calon penyewa yang datang ke Yogyakarta.
- **Fitur Kunci:**
  - Cerita perjalanan Reken dari garasi lokal hingga menjadi penyedia armada 40+ unit.
  - Visi memodernisasi industri sewa kendaraan di D.I. Yogyakarta dengan standar servis hotel berbintang.
  - Tiga pilar nilai: *Transparansi Tanpa Biaya Tersembunyi*, *Kondisi Unit Prima Bersertifikasi*, dan *Pelayanan Ramah Khas Jogja*.
  - Detail 3 titik pool operasional untuk mempermudah koordinasi penjemputan.

### 3.3 Halaman Katalog Armada (`armada.html`)
- **Tujuan:** Memudahkan penyewa memilih jenis mobil yang sesuai dengan jumlah rombongan, budget, dan preferensi transmisi.
- **Fitur Kunci:**
  - Filter kategori instan (City Car, MPV Keluarga, Innova Zenix, Luxury SUV, Minibus Rombongan).
  - Spesifikasi komprehensif: Konsumsi BBM, bagasi koper, fitur kenyamanan kabin.
  - Tab harga transparan: Harga Lepas Kunci 24 Jam vs Harga All-In Supir + BBM 12 Jam.
  - Tombol aksi langsung "Booking Unit Ini" yang mengarahkan pesan WhatsApp dengan pesan otomatis terformat.

### 3.4 Halaman Paket Wisata & Drop Luar Kota (`wisata.html`)
- **Tujuan:** Menyediakan paket liburan komplit tanpa repot memikirkan rute jalan, tiket masuk, dan operasional bensin.
- **Fitur Kunci:**
  - 4 Paket Utama: *Jogja Heritage & Sunrise*, *Merapi Lava Tour Adventure*, *Eksotisme Pantai Selatan & Goa Pindul*, serta *Sunset Romantis & Kuliner Malam*.
  - Rincian destinasi per jam, fasilitas all-in (mobil, supir, bensin, tiket masuk, parkir).
  - Tabel tarif flat antar-jemput Bandara YIA Kulon Progo ke berbagai penjuru kota Jogja.
  - Layanan drop-off satu arah (*one-way trip*) ke kota Solo, Semarang, Boyolali, Magelang, dan Surabaya.

### 3.5 Halaman Prosedur & Syarat Sewa (`cara-sewa.html`)
- **Tujuan:** Memberikan transparansi hukum dan kenyamanan syarat sewa agar calon pelanggan merasa aman dan tidak ragu bertransaksi.
- **Fitur Kunci:**
  - 4 Langkah Mudah: Konsultasi Unit & Tanggal -> Verifikasi Dokumen Digital -> Handover Unit Bersih -> Pengembalian Fleksibel.
  - Panduan dokumen wisatawan: KTP asli, SIM A aktif, tiket pesawat/kereta pulang-pergi, serta voucher hotel di Jogja.
  - Panduan sewa all-in supir: Tanpa jaminan dokumen rumit, cukup konfirmasi jadwal jemput.
  - Aturan overtime (10%/jam), kebijakan bahan bakar (kembali pada posisi yang sama), dan jaminan kebersihan unit.

### 3.6 Halaman Kontak & Lokasi Pool (`kontak.html`)
- **Tujuan:** Menjadi saluran komunikasi cepat (*fast-response hub*) dan peta penjemputan armada.
- **Fitur Kunci:**
  - Kartu kontak cepat: WhatsApp CS 24 Jam, Telepon Kantor, Email Resmi, dan Informasi Jam Standby.
  - Formulir interaktif pemesanan sewa mobil yang merangkum rincian tamu lalu membuka obrolan WhatsApp terformat rapi dengan satu klik.
  - Penjelasan 3 lokasi pool fisik di Yogyakarta dengan estimasi waktu tempuh ke pusat kota.
  - Informasi jaminan gratis ongkir pengantaran mobil ke hotel atau stasiun.

---

## 4. Desain Visual & Standar "Airlume"

Antarmuka menerapkan sistem desain konsisten:
- **Warna Utama:**
  - `brand-deep`: `#081142` (Cobalt pekat premium)
  - `brand-navy`: `#0D1B66` (Navy elegan)
  - `brand-blue`: `#12289E` (Biru royal khas Reken)
  - `brand-electric`: `#2563EB` (Biru elektrik aksen)
  - `brand-sky`: `#38BDF8` (Sky blue highlight)
  - `brand-pill`: `#EDF2FE` (Periwinkle lembut untuk badge)
- **Tekstur & Pola:**
  - `.dark-ribbed`: Latar belakang gelap dengan garis vertikal bergaris fluted (*ribbed texture*).
  - `.photo-slats`: Penutup gambar portrait bergaris vertikal khas Airlume.
  - `.btn-capsule` & `.btn-arrow-circle`: Tombol aksi berbentuk kapsul dengan ikon panah di dalam lingkaran.
  - `.giant-watermark`: Tipografi teks monolitik "REKEN" di footer setiap halaman.
- **Tipografi:** Google Fonts `Plus Jakarta Sans` dengan rentang bobot 400, 500, 600, 700, 800, dan 900.

---

## 5. Rencana Pengujian & Verifikasi Kualitas
1. **Verifikasi Tautan (Zero Broken Links):**
   - Seluruh tautan navigasi desktop dan mobile drawer terhubung tepat antara `index.html`, `tentang.html`, `armada.html`, `wisata.html`, `cara-sewa.html`, dan `kontak.html`.
2. **Uji Responsivitas:**
   - Seluruh halaman diuji pada resolusi Mobile (375px - 414px), Tablet (768px - 1024px), dan Desktop (1280px+).
3. **Uji Integrasi Formulir:**
   - Form konsultasi pada `kontak.html` dan tombol booking di `armada.html` sukses memformat parameter URL WhatsApp secara akurat.
4. **Verifikasi SEO & Berkas Mesin Pencari:**
   - `sitemap.xml` dan `robots.txt` mencerminkan 6 halaman multi-page resmi Reken.
