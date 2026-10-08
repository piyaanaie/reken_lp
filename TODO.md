# TODO: Checklist Landing Page & Floating Island Navbar Reken

Fokus pengembangan diarahkan khusus pada **Ultra-Modern Living Navbar** dan **Landing Page Publik** aplikasi rental mobil & pariwisata Yogyakarta (**Reken.id**).

---

## 🚀 Navbar Architecture (6 Elemen Wajib)
- [x] **Tentang Kami** (`#tentang` / `tentang.html`)
- [x] **Mitra** (`#mitra` / Program Kemitraan Reken)
- [x] **Fitur** (`#fitur` / 8 AI & Telematics Features)
- [x] **Harga** (`#harga` / Katalog Sewa & Tour Jogja)
- [x] **Kontak** (`#kontak` / `kontak.html`)
- [x] **Download Sekarang** (CTA Glow Shimmering Button & Modal Interaktif)

---

## 🎨 Visual Aesthetics & Micro-Interactions (Aturan Desain Terverifikasi)
- [x] **Floating Island Container (`.header-island`)**:
  - [x] Frosted glassmorphism `backdrop-blur-2xl` dengan specular edge highlight.
  - [x] Dual-layer border & ambient shadow elevation.
  - [x] Kompresi vertikal dinamis saat discroll (`.scrolled`).
- [x] **Brand Logo Asli (`src/images/logo.png`)**:
  - [x] Menggunakan asset gambar logo asli (`src/images/logo.png`), bukan icon SVG buatan.
  - [x] Favicon diselaraskan ke `src/images/logo.png`.
- [x] **Kepatuhan Aturan Desain**:
  - [x] **Didalam badge tidak boleh ada icon**: Semua badge text-only (tanpa dot, tanpa icon, tanpa emoji).
  - [x] **Icon library Font Awesome 6**: Tidak menggunakan icon system buatan tangan; seluruh icon menggunakan library Font Awesome 6.
  - [x] **Jumlah Badge Terukur**: Menghilangkan badge berlebihan pada menu navbar dan drawer; tampilan bersih dan elegan.
  - [x] **Bebas Efek Pulse**: Menghilangkan seluruh efek pulse (`animate-pulse`, `animate-ping`, `.live-beacon-ring`).
  - [x] **Logo Real Image**: Menggunakan `src/images/logo.png` di header, drawer, dan footer di seluruh halaman.
- [x] **Active Scroll Spy & Smooth Scroll (`src/script.js`)**:
  - [x] Viewport detection presisi dengan `getBoundingClientRect()`.
  - [x] Smooth scroll dengan kalkulasi offset tinggi floating navbar island.
  - [x] Mobile drawer responsive dengan glassmorphism backdrop dan link lengkap.

---

## 🧹 Pembersihan File & Folder Usang
- [x] Hapus seluruh file dashboard & modul backend operasional yang tidak relevan:
  - `customers.html` (dihapus)
  - `dashboard.html` (dihapus)
  - `drivers.html` (dihapus)
  - `inbox.html` (dihapus)
  - `travel-orders.html` (dihapus)
  - `vehicles.html` (dihapus)
  - `whatsapp-instances.html` (dihapus)
- [x] Pembersihan tautan mati (*dead links*) di seluruh halaman:
  - `index.html` (semua tautan internal aktif ke anchor atau halaman terkait)
  - `tentang.html` (selaras dengan floating navbar)
  - `kontak.html` (selaras dengan floating navbar & modal download terpasang)
- [x] Pembaruan `sitemap.xml` agar hanya mengindeks halaman pemasaran aktif.

---

## 🔍 Status Verifikasi
- [x] 100% Bebas dari tautan 404 / broken link.
- [x] Desain floating navbar teruji responsif di desktop dan mobile drawer.
- [x] Modal download dapat dibuka dari tombol CTA navbar di seluruh halaman (`index.html`, `tentang.html`, `kontak.html`).
