# 🌐 Frnyx — Premium iOS Liquid Glass, 3D Parallax & Cinematic Linktree

Website personal landing page & link-in-bio bertaraf profesional yang modern, premium, dan imersif. Dilengkapi dengan material **iOS-inspired Liquid Glass**, mode ganda **Dark Mode & Light Mode**, **Cinematic Photo Background** dengan smooth gradient mask & layered parallax, tombol kartu **Capsule Liquid Glass 3D Tilt & Specular Glare**, animasi mengetik (**Typing Engine**), modal pembayaran **QRIS interaktif**, pemesanan jasa via **Email (mailto)**, menu tiga titik fungsional, custom **Favicon / Logo**, serta konfigurasi terpusat.

Dibangun murni menggunakan **Vanilla HTML5, CSS3 kustom, dan Vanilla JavaScript** tanpa framework berat, tanpa build step, dan siap di-deploy langsung ke **GitHub Pages** maupun **Vercel Static Hosting**.

---

## 📸 Fitur Unggulan

- 💎 **iOS Liquid Glass Material**: Efek kaca ultra-realistis menggunakan kombinasi `backdrop-filter: blur(24px) saturate(180%)`, border transparan dengan highlight tepi kaca, inner specular reflection, dan ambient shadows dinamis.
- 🌓 **Dual Theme (Dark Mode & Light Mode)**:
  - **Dark Mode**: Material charcoal dark glass, teks putih kontras tinggi, aksen cyan futuristik halus, dan dark cinematic overlay.
  - **Light Mode**: Material milky light glass yang segar dan mewah, tipografi gelap (`#0D0D11`), soft shadow ambient, dan light cinematic blend.
  - Tombol ganti tema minimalis berbentuk kapsul bundar di top nav dengan animasi rotasi/crossfade ikon Matahari ☀️ & Bulan 🌙.
  - Preferensi tema tersimpan otomatis di `localStorage` dan mendeteksi preferensi sistem (`prefers-color-scheme`) tanpa kilatan putih saat dimuat ulang (*zero theme flash*).
- 🃏 **Desktop Centered Profile Card & Mobile Full-Bleed Layout**:
  - **Desktop**: Tampilan personal profile card yang mengambang elegan di tengah layar (lebar 440–520 px, border radius 28 px, border tipis kaca, dan ambient shadow mewah), dengan latar belakang luar organik dark aesthetic tetap terlihat mengelilingi card. Card tidak terpotong pada layar laptop/desktop pendek.
  - **Mobile**: Tampilan menyatu 100% penuh ke layar tanpa kotak tepi desktop (*native full-bleed mobile web app*), scroll lancar tanpa batasan tinggi kaku, dan bebas horizontal scroll.
- 🎬 **Seamless Cinematic Photo Background**:
  - Foto background (`assets/background.jpeg`) menyatu sempurna ke warna dasar (*seamless multi-layer gradient mask & soft blur transition*) tanpa garis potong horizontal yang terlihat.
  - Menyesuaikan otomatis dengan Dark Mode (menghilang ke charcoal `#0e0e12`) dan Light Mode (menghilang ke putih `#FFFFFF`).
  - Dilengkapi parallax halus yang responsif terhadap pergerakan mouse dan scroll.
- 👤 **Foto Profil 3D & Rotating Conic Ring**: Foto profil dengan cincin gradasi berputar halus (`conic-gradient`), interaktif 3D tilt mengikuti kursor, ripple effect saat diklik, dan badge verified.
- ⌨️ **Animasi Mengetik (Typing Engine)**: Deskripsi profesi bergantian secara mulus (`IT Support`, `Web Developer`, `IoT Developer`, `Building Digital Experiences`) dengan kursor berkedip dan *zero layout shift*.
- 💊 **3 Kartu Utama Capsule Liquid Glass (Pure 3D CSS Objects & Animated Typography)**:
  - **My Portfolio (3D Digital Identity)**: Wireframe rings 3D berputar pada multi-sumbu, glowing cyan-violet core orb, orbiting light photon, dan aksen hover gradien. Membuka tautan portofolio eksternal.
  - **Give Me a Coffee ☕ (Interactive 3D Support)**: Cangkir kopi 3D mengambang dengan 3 uap bergelombang yang naik perlahan, warm golden/amber glowing halo, dan partikel pendar halus. Membuka **Modal QRIS Liquid Glass** mandiri dengan tombol unduh.
  - **Pesan Jasa (Futuristic Contact Interaction)**: Communication orb dengan expanding radar pulse, rotating gyroscopic wireframe ring, dan ikon send pesawat yang meluncur halus. Membuka aplikasi email secara native dengan template pesan terisi otomatis.
- 💳 **Fitur QRIS Liquid Glass Mandiri**: Pengunjung dapat melihat dan mengunduh kode QRIS Anda dari file lokal `assets/qris.jpeg` (atau `assets/qris.png`). Jika gambar belum ada, tersedia fallback ramah tanpa broken image.
- 📱 **5 Platform Media Sosial**: Instagram, TikTok, Facebook, LinkedIn, dan GitHub tersusun rapi di bagian bawah dengan ikon SVG tajam dan tooltip.
- 🖼️ **Dukungan Favicon & Logo Pribadi**: Siap menggunakan `assets/logo.png`, `assets/favicon.ico`, atau `assets/apple-touch-icon.png` Anda dengan fallback otomatis ke `assets/favicon.svg`.
- ⚙️ **Menu Tiga Titik Fungsional**: Setiap kartu memiliki menu popover untuk membuka link, menyalin tautan / email, dan membagikan via Web Share API.
- 🎛️ **Konfigurasi Terpusat (`js/config.js`)**: Semua nama, bio, tautan, foto background, QRIS, email pemesanan, ikon sosial, dan efek animasi diatur dalam satu file saja tanpa perlu menyentuh HTML atau CSS.

---

## 📁 Struktur Direktori

```text
frnyx-linktree/
├── index.html              # Struktur semantik utama, background container & modal
├── README.md               # Dokumentasi lengkap proyek
├── vercel.json             # Konfigurasi static hosting & caching Vercel
├── assets/
│   ├── background.jpeg     # Foto cinematic background Anda (bisa diganti)
│   ├── profile.jpeg        # Foto profil avatar @frnyx
│   ├── portfolio.png       # Thumbnail untuk kartu portfolio
│   ├── coffee.png          # Thumbnail untuk kartu Give me a coffee ☕
│   ├── qris.jpeg           # Gambar QRIS pembayaran Anda (bisa diganti)
│   ├── favicon.svg         # Favicon vektor modern monogram F
│   └── logo.png            # (Opsional) Logo pribadi Anda untuk favicon
├── css/
│   └── style.css           # Styling Liquid Glass, Dark/Light mode, 3D tilt & animasi
└── js/
    ├── config.js           # Konfigurasi data terpusat (EDIT DI SINI)
    └── script.js           # Logika tema, background parallax, 3D tilt, typing, QRIS, & mailto
```

---

## 🚀 Panduan Kustomisasi & Penggunaan

### 1. Cara Menjalankan Website Secara Lokal

Anda tidak memerlukan Node.js, npm, PHP, atau server backend apa pun!

- **Cara 1 (Langsung):** Klik dua kali pada file `index.html` untuk langsung membukanya di browser favorit Anda (Chrome, Edge, Firefox, Safari).
- **Cara 2 (VS Code Live Server):** Buka folder proyek di VS Code, klik kanan pada `index.html`, lalu pilih **"Open with Live Server"**.
- **Cara 3 (Python Simple Server):** Buka terminal pada folder proyek lalu jalankan:
  ```bash
  python -m http.server 8000
  ```
  Kemudian buka `http://localhost:8000` di browser Anda.

---

### 2. Cara Mengganti Foto Cinematic Background

1. Siapkan foto horizontal atau bernuansa dramatis/sinematik milik Anda.
2. Simpan file foto ke folder `assets/` dengan nama `background.jpeg` (atau `background.jpg`).
3. Buka `js/config.js` pada bagian `appearance` untuk mengatur posisi dan tinggi viewport:
   ```javascript
   appearance: {
     backgroundImage: "assets/background.jpeg", // Path file foto Anda
     backgroundPositionDesktop: "center 25%",   // Fokus crop foto di desktop
     backgroundPositionMobile: "center 20%",    // Fokus crop foto di mobile
     backgroundHeightDesktop: "52vh",           // Tinggi area foto di desktop (~50% viewport)
     backgroundHeightMobile: "46vh",            // Tinggi area foto di mobile
     defaultTheme: "dark",                      // "dark", "light", atau "system"
     backgroundParallax: true                   // Parallax foto berlapis
   }
   ```
4. Foto akan menyatu secara halus ke warna dasar (*seamless gradient mask*) tanpa garis potong horizontal. Jika foto belum tersedia, sistem otomatis menampilkan latar belakang organik abstrak tanpa broken image.

---

### 3. Cara Mengganti Favicon & Logo Pribadi

Website sudah dikonfigurasi untuk langsung mengenali logo pribadi Anda:
1. Simpan logo Anda di folder `assets/` dengan nama `logo.png` (disarankan PNG transparan 512x512 atau 192x192).
2. Opsi tambahan jika tersedia:
   - `assets/favicon.ico`
   - `assets/favicon-32x32.png`
   - `assets/favicon-16x16.png`
   - `assets/apple-touch-icon.png`
3. Jika Anda belum mengunggah `logo.png`, website otomatis menggunakan `assets/favicon.svg` (ikon monogram 'F' modern cyan) tanpa broken image atau error 404.

---

### 4. Cara Mengganti Gambar QRIS (Kartu "Give me a coffee ☕")

1. Simpan gambar QRIS Anda di folder `assets/` dengan nama `qris.jpeg` (atau `qris.png`).
2. Buka `js/config.js` pada bagian `qris`:
   ```javascript
   qris: {
     title: "Support My Work",
     subtitle: "Scan QRIS untuk memberikan dukungan",
     image: "assets/qris.jpeg",              // Path file QRIS lokal
     downloadFileName: "qris-farhan.jpeg",  // Nama file saat diunduh pengunjung
     enabled: true
   }
   ```
3. Saat kartu diklik, modal Liquid Glass akan terbuka menampilkan gambar QRIS dengan tombol **Unduh QRIS** dan **Tutup**. Jika gambar belum diunggah, modal menampilkan kartu fallback informatif.

---

### 5. Cara Mengatur Email Pemesanan Jasa (Kartu "Pesan Jasa")

Buka file `js/config.js`, cari bagian `email`:

```javascript
email: {
  recipient: "nahraf270803@gmail.com", // Alamat email penerima Anda
  subject: "Permintaan Jasa",
  body: "Halo, saya ingin berdiskusi mengenai proyek dan layanan Anda."
}
```

Jika alamat email belum diisi, tombol tidak akan membuka link kosong, melainkan menampilkan notifikasi toast yang jelas bahwa alamat email belum dikonfigurasi. Ketika sudah terisi, tombol memicu pembukaan aplikasi email (*native mail client*) secara langsung.

Saat pengunjung mengklik tombol **Pesan Jasa**, aplikasi email mereka (Gmail, Outlook, Mail Apple, dll.) akan langsung terbuka dengan penerima, subjek, dan draft pesan terisi otomatis.

---

### 6. Cara Mengganti Tautan Portofolio & Formulir Kontak

Buka file `js/config.js` pada bagian `links`:

```javascript
links: [
  {
    id: "portfolio",
    title: "My Portfolio",
    description: "Explore my projects & showcase",
    url: "https://farhanadeata.github.io/", // URL portofolio Anda
    icon: "briefcase",
    thumbnail: "assets/portfolio.png",
    badge: "Featured",
    enabled: true,
    external: true
  },
  {
    id: "contact",
    title: "Formulir Kontak",
    description: "Let's collaborate & work together",
    url: "#contact", // Ganti dengan URL Google Forms jika punya (misal: "https://forms.gle/...")
    icon: "mail",
    badge: "Fast Response",
    enabled: true,
    external: false
  },
  ...
]
```

---

### 7. Cara Mengatur URL Media Sosial (5 Platform)

Buka `js/config.js` pada bagian `socials`:

```javascript
socials: [
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/Farhanadeata",
    icon: "instagram",
    enabled: true
  },
  {
    id: "tiktok",
    name: "TikTok",
    url: "https://www.tiktok.com/@thisnahraf.com/",
    icon: "tiktok",
    enabled: true
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "https://www.facebook.com/farhan1113/.com/",
    icon: "facebook",
    enabled: true
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/farhan-ade-atalarik-a6826b24b.com/",
    icon: "linkedin",
    enabled: true
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/farhanadeata",
    icon: "github",
    enabled: true
  }
]
```

---

### 8. Cara Mengatur Animasi Mengetik & Efek 3D

Buka `js/config.js` pada bagian `profile.typingTexts` dan `animation`:

```javascript
profile: {
  typingPrefix: "",
  typingTexts: [
    "IT Support",
    "Web Developer",
    "IoT Developer",
    "Building Digital Experiences"
  ]
},

animation: {
  enableIntroSequence: true,      // Animasi intro berurutan saat dibuka
  enableTyping: true,             // Animasi mengetik deskripsi
  enableProfile3D: true,          // Tilt 3D pada foto profil
  enableCard3D: true,             // Tilt 3D pada kartu tautan
  enableCardGlare: true,          // Kilauan cahaya yang mengikuti kursor
  enableBackgroundParallax: true, // Parallax latar belakang
  
  typingSpeed: 70,                // Kecepatan mengetik (ms/karakter)
  typingDeleteSpeed: 35,          // Kecepatan menghapus (ms/karakter)
  typingPauseDelay: 1800,         // Jeda sebelum teks dihapus (ms)
  
  profileTiltMax: 4.5,            // Maksimal sudut rotasi avatar (derajat)
  cardTiltMax: 4.5                // Maksimal sudut rotasi kartu (derajat)
}
```

---

## 🚢 Panduan Deploy ke GitHub Pages & Vercel

### A. Mengunggah Proyek ke Repository GitHub

1. Buat repository baru di [GitHub](https://github.com/new), beri nama misalnya `frnyx-linktree` (atur sebagai **Public**).
2. Buka terminal di folder proyek ini (`f:\link tree farhan`), lalu jalankan:
   ```bash
   git init
   git add .
   git commit -m "feat: upgrade to premium 3d interactive linktree with qris & email ordering"
   git branch -M main
   git remote add origin https://github.com/<username-github-anda>/frnyx-linktree.git
   git push -u origin main
   ```

---

### B. Mengaktifkan GitHub Pages (Gratis)

1. Masuk ke repository Anda di GitHub.
2. Buka tab **Settings** > pilih menu **Pages** di bilah kiri.
3. Pada bagian **Build and deployment**:
   - **Source**: pilih `Deploy from a branch`.
   - **Branch**: pilih `main` dan folder `/ (root)`.
4. Klik **Save**.
5. Tunggu 1–2 menit, website Anda akan tayang langsung di:
   `https://<username-github-anda>.github.io/frnyx-linktree/`

---

### C. Menghubungkan Repository ke Vercel

1. Masuk ke [Vercel Dashboard](https://vercel.com/dashboard).
2. Klik tombol **"Add New..."** > pilih **"Project"**.
3. Hubungkan akun GitHub Anda dan pilih repository `frnyx-linktree`.
4. Pada halaman konfigurasi project:
   - **Framework Preset**: Pilih **`Other`**
   - **Root Directory**: `.` (biarkan default)
   - **Build Command**: *Kosongkan* (tidak digunakan)
   - **Output Directory**: `.` (atau kosongkan)
   - **Install Command**: *Kosongkan*
5. Klik **"Deploy"**.
6. Website akan langsung aktif dengan URL seperti `https://frnyx-linktree.vercel.app`.

---

## 📄 Hak Cipta & Lisensi

Dibuat dengan cinta dan ketelitian untuk **Farhan (@frnyx)**.
Bebas digunakan dan dikembangkan untuk keperluan personal branding.
