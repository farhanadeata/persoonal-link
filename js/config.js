const SITE_CONFIG = {

  profile: {
    username: "@frnyx",
    displayName: "frnyx",
    tagline: "Frontend Developer",
    image: "assets/profile.jpeg",
    avatar: "assets/profile.jpeg",
    verified: true,
    badgeText: "Available for projects",
    showBadge: true,

    bio: "Transforming Ideas into Digital Solutions",

    typingPrefix: "",
    typingTexts: [
      "IT Support",
      "Web Developer",
      "IoT Developer",
      "Building Digital Experiences"
    ]
  },

  appearance: {
    backgroundImage: "assets/background.jpeg",
    backgroundPositionDesktop: "center 25%",
    backgroundPositionMobile: "center 20%",
    backgroundHeightDesktop: "52vh",
    backgroundHeightMobile: "46vh",
    defaultTheme: "dark",
    enableThemeToggle: true,
    liquidGlass: true,
    backgroundParallax: true,
    pointerGlow: true,
    profile3D: true,
    card3D: true
  },

  branding: {
    logo: "assets/logo.png",
    favicon: "assets/logo.png",
    appleTouchIcon: "assets/profile.jpeg",
    siteName: "Frnyx"
  },

  email: {
    recipient: "nahraf270803@gmail.com",
    subject: "Permintaan Jasa",
    body: "Halo, saya ingin berdiskusi mengenai proyek dan layanan Anda."
  },

  qris: {
    title: "Support My Work",
    subtitle: "Scan QRIS untuk memberikan dukungan",
    image: "assets/qris.jpeg",
    downloadFileName: "qris-farhan.jpeg",
    enabled: true
  },

  meta: {
    title: "Frnyx — Personal Links & Portfolio",
    description: "Official link-in-bio of Farhan (@Frnyx). Explore my portfolio, contact form, hire services, QRIS support, and socials.",
    siteUrl: "https://farhanadeata.github.io/",
    author: "Farhan / Frnyx",
    keywords: "Farhan, Frnyx, Linktree, Portfolio, Frontend Developer, IT Support, IoT, Indonesia"
  },

  links: [
    {
      id: "portfolio",
      title: "My Portfolio",
      description: "Explore my projects & showcase",
      url: "https://farhanadeata.github.io/",
      icon: "briefcase",
      thumbnail: "",
      badge: "Featured",
      enabled: true,
      external: true
    },
    {
      id: "projects",
      title: "My Projects",
      description: "Explore the things I've built.",
      url: "#projects",
      type: "gallery",
      icon: "layers",
      thumbnail: "",
      badge: "Showcase",
      enabled: true,
      external: false
    },
    {
      id: "qris",
      title: "Give Me a Coffee ☕",
      description: "Support my work & open-source projects",
      url: "#qris",
      type: "qris",
      icon: "coffee",
      thumbnail: "",
      badge: "Support",
      enabled: true,
      external: false
    },
    {
      id: "order",
      title: "Pesan Jasa",
      description: "Let's discuss your project",
      url: "#order",
      type: "email",
      icon: "send",
      thumbnail: "",
      badge: "Hire Me",
      enabled: true,
      external: false
    }
  ],

  projects: [
    {
      id: "sikudi",
      title: "SI-KUDI",
      category: "Web Development",
      categorySlug: "web-development",
      status: "Production Ready",
      statusType: "live",
      summary: "Sistem informasi pendaftaran dan pengelolaan kunjungan berbasis web untuk mendukung digitalisasi layanan rumah tahanan.",
      problem: "Antrean fisik pendaftaran kunjungan tahanan yang memakan waktu lama, risiko kesalahan pendataan manual identitas pengunjung, serta sulitnya memantau jadwal dan riwayat kunjungan secara real-time.",
      solution: "Membangun sistem registrasi kunjungan online terpadu, verifikasi data pengunjung dan narapidana, integrasi tiket digital QR Code otomatis untuk verifikasi cepat di loket, serta dashboard monitoring jadwal dan kuota kunjungan untuk petugas rutan.",
      technologies: ["PHP", "MySQL", "JavaScript", "QR Code", "Bootstrap", "Responsive UI"],
      role: "Lead Fullstack Developer",
      image: "assets/projects/sikudi.png",
      visualType: "dashboard-qr",
      links: {
        liveDemo: "https://sikudi.my.id/",
        sourceCode: ""
      }
    },

    {
      id: "Simpati",
      title: "SIMPATI",
      category: "Web Development",
      categorySlug: "web-development",
      status: "Production Ready",
      statusType: "live",
      summary: "Sistem informasi pendaftaran dan pengelolaan kunjungan berbasis web untuk mendukung digitalisasi layanan rumah tahanan.",
      problem: "Antrean fisik pendaftaran kunjungan tahanan yang memakan waktu lama, risiko kesalahan pendataan manual identitas pengunjung, serta sulitnya memantau jadwal dan riwayat kunjungan secara real-time.",
      solution: "Membangun sistem registrasi kunjungan online terpadu, verifikasi data pengunjung dan narapidana, integrasi tiket digital QR Code otomatis untuk verifikasi cepat di loket, serta dashboard monitoring jadwal dan kuota kunjungan untuk petugas rutan.",
      technologies: ["PHP", "MySQL", "JavaScript", "QR Code", "Bootstrap", "Responsive UI"],
      role: "Lead Fullstack Developer",
      image: "assets/projects/simpati.png",
      visualType: "dashboard-qr",
      links: {
        liveDemo: "https://rutankelas1plg.sikudi.my.id/",
        sourceCode: ""
      }
    },

    {
      id: "nas-cloud",
      title: "NAS Personal Cloud",
      category: "Cloud & Infrastructure",
      categorySlug: "cloud-infrastructure",
      status: "Private Cloud Server",
      statusType: "infra",
      summary: "Implementasi penyimpanan jaringan berbasis Armbian dan Nextcloud untuk mendukung penyimpanan serta berbagi file dalam lingkungan kampus.",
      problem: "Keterbatasan kuota layanan penyimpanan cloud komersial pihak ketiga serta kebutuhan kolaborasi berbagi dataset riset berukuran besar secara privat, cepat, dan aman pada jaringan lokal kampus.",
      solution: "Mengkonfigurasi server NAS hemat daya berbasis single-board computer Armbian OS, dashboard CasaOS, dan container Nextcloud server mandiri dengan enkripsi berkas, sinkronisasi otomatis multi-platform, serta manajemen privilege pengguna.",
      technologies: ["Armbian", "Nextcloud", "Linux", "CasaOS", "Docker", "Networking"],
      role: "System Administrator & DevOps",
      image: "assets/projects/nas.png",
      visualType: "cloud-cube",
      links: {
        liveDemo: "",
        sourceCode: ""
      }
    },
    {
      id: "localink",
      title: "LOCALINK",
      category: "IoT & Embedded",
      categorySlug: "iot-embedded",
      status: "Offline Experiment",
      statusType: "iot",
      summary: "Eksperimen komunikasi lokal berbasis ESP8266 dengan antarmuka web untuk bertukar pesan dalam jaringan lokal tanpa bergantung pada koneksi internet.",
      problem: "Ketiadaan sarana komunikasi digital instan ketika terjadi gangguan jaringan internet publik, ketiadaan sinyal seluler, atau situasi darurat di area terpencil.",
      solution: "Mengkonfigurasi modul mikrokontroler ESP8266 sebagai Soft-AP mandiri dan web server lokal. Pengguna dapat langsung terhubung ke jaringan Wi-Fi perangkat tanpa kuota data dan membuka captive portal responsif untuk berkirim pesan instan real-time via WebSocket.",
      technologies: ["ESP8266", "Arduino / C++", "HTML5", "CSS3", "JavaScript", "WebSocket"],
      role: "IoT Engineer & Firmware Developer",
      image: "assets/projects/localink.png",
      visualType: "iot-nodes",
      links: {
        liveDemo: "",
        sourceCode: "https://github.com/farhanadeata/LOCALINK"
      }
    },
    {
      id: "beliazashop",
      title: "BeliazaShop",
      category: "Mobile Development",
      categorySlug: "mobile-development",
      status: "Open Source App",
      statusType: "repo",
      summary: "Aplikasi manajemen stok dan inventaris berbasis Flutter untuk pencatatan produk dan pengelolaan persediaan.",
      problem: "Pelaku UMKM retail sering kesulitan mencatat stok barang secara manual, rentan terjadi selisih stok fisik dengan catatan buku, serta lambatnya pelacakan barang masuk dan keluar.",
      solution: "Membangun aplikasi mobile cross-platform responsif dengan database offline-first SQLite, pencatatan SKU dan kategori barang, peringatan batas minimum stok produk, serta kalkulasi nilai aset barang secara real-time.",
      technologies: ["Flutter", "Dart", "SQLite", "State Management", "Material Design"],
      role: "Mobile App Developer",
      image: "assets/projects/beliazashop.jpeg",
      visualType: "inventory-cube",
      links: {
        liveDemo: "",
        sourceCode: "https://github.com/farhanadeata/flutter-stock-management"
      }
    },

    {
      id: "Netblast",
      title: "Netblast",
      category: "IoT & Embedded",
      categorySlug: "iot-embedded",
      status: "Open Source App",
      statusType: "repo",
      summary: "Firmware edukatif berbasis ESP8266 & contoh untuk pengujian ketahanan **terkendali, tampilan status perangkat, dan pembelajaran jaringan IoT.",
      problem: "",
      solution: "",
      technologies: ["Arduino", "ESP8266", "pentasting", "education"],
      role: "Mobile App Developer",
      image: "assets/projects/netblast.png",
      visualType: "inventory-cube",
      links: {
        liveDemo: "",
        sourceCode: "https://github.com/farhanadeata/flutter-stock-management"
      }
    },

  ],

  projectCategories: [
    { id: "all", name: "All Projects" },
    { id: "web-development", name: "Web Development" },
    { id: "iot-embedded", name: "IoT & Embedded" },
    { id: "cloud-infrastructure", name: "Cloud & Infrastructure" },
    { id: "mobile-development", name: "Mobile Development" }
  ],

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
  ],

  animation: {
    enableIntroSequence: true,
    enableTyping: true,
    enableProfile3D: true,
    enableFloatingAvatar: true,
    enableCard3D: true,
    enableCardGlare: true,
    enableBackgroundParallax: true,
    enableBlobMotion: true,
    enablePointerGlow: true,
    staggerLinks: true,

    typingSpeed: 70,
    typingDeleteSpeed: 35,
    typingPauseDelay: 1800,
    typingInitialDelay: 600,

    profileTiltMax: 4.5,
    cardTiltMax: 4.5,
    cardGlareOpacity: 0.25,

    floatingSpeedSec: 4.5,
    staggerDelayMs: 85,
    introDurationSec: 1.2,
    parallaxIntensity: 0.04
  },

  welcomeScreen: {
    enabled: true,
    title: "WELCOME TO PERSONAL LINK",
    brandingText: "FRNYX",
    subtitle: "Initializing your digital experience...",
    tagline: "Transforming Ideas into Digital Solutions",
    sessionRemember: true,
    allowSkip: true,
    typingSpeedMs: 32,
    linePauseMs: 140,
    maskVisitorIp: true,
    fetchGeoLocation: true,
    geoTimeoutMs: 1800
  },

  get effects() {
    return this.animation;
  },

  theme: {
    accentColor: "#72E6E0",
    accentHover: "#4ECCD3"
  },

  footer: {
    copyright: "© 2026 Frnyx",
    note: "Crafted with care & precision"
  }
};

if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
}

