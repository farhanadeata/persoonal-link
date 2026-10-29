document.addEventListener('DOMContentLoaded', () => {

  const config = window.SITE_CONFIG || {};
  const animConfig = config.animation || config.effects || {};

  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

  const ICONS = {
    briefcase: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
    mail: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    send: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`,
    coffee: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
    qris: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
    github: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
    instagram: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
    tiktok: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.72 1.34-.07 2.56-.91 2.99-2.16.22-.64.28-1.32.28-1.99.01-5.74-.01-11.48.02-17.22z"/></svg>`,
    facebook: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    linkedin: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
    email: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    globe: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    moreVertical: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>`,
    layers: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    externalLink: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
    code: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    arrowLeft: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
    eye: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`
  };

  function getIconSvg(iconName) {
    return ICONS[iconName] || ICONS.globe;
  }

  const toastEl = document.getElementById('toast');
  const toastMessageEl = document.getElementById('toast-message');
  let toastTimeout = null;

  function showToast(message, duration = 3200) {
    if (!toastEl || !toastMessageEl) return;
    toastMessageEl.textContent = message;
    toastEl.classList.remove('hidden');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastEl.classList.add('hidden');
    }, duration);
  }

  const THEME_STORAGE_KEY = 'frnyx-theme';

  function getSavedTheme() {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') return saved;
    } catch (e) {}

    const defaultPref = (config.appearance && config.appearance.defaultTheme) || 'dark';
    if (defaultPref === 'system') {
      return (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) ? 'light' : 'dark';
    }
    return defaultPref === 'light' ? 'light' : 'dark';
  }

  function applyTheme(theme, save = true) {
    document.documentElement.setAttribute('data-theme', theme);

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', theme === 'light' ? '#F4F5F8' : '#060608');
    }

    if (save) {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
      } catch (e) {}
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme, true);
    showToast(nextTheme === 'dark' ? '🌙 Mode Gelap diaktifkan' : '☀️ Mode Terang diaktifkan', 2200);
  }

  function initTheme() {
    const initialTheme = getSavedTheme();
    applyTheme(initialTheme, false);

    const themeToggleBtn = document.getElementById('btn-theme-toggle');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }

    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
        try {
          if (!localStorage.getItem(THEME_STORAGE_KEY)) {
            applyTheme(e.matches ? 'light' : 'dark', false);
          }
        } catch (err) {}
      });
    }
  }

  function initCinematicBackground() {
    const app = config.appearance || {};
    const bgContainer = document.getElementById('cinematic-bg-container');
    const bgImageEl = document.getElementById('cinematic-bg-image');

    if (!bgContainer || !bgImageEl) return;

    const isMobile = window.innerWidth <= 600;
    const bgPos = isMobile
      ? (app.backgroundPositionMobile || 'center 20%')
      : (app.backgroundPositionDesktop || 'center 25%');

    if (app.backgroundHeightDesktop) {
      document.documentElement.style.setProperty('--bg-height-desktop', app.backgroundHeightDesktop);
    }
    if (app.backgroundHeightMobile) {
      document.documentElement.style.setProperty('--bg-height-mobile', app.backgroundHeightMobile);
    }
    document.documentElement.style.setProperty('--bg-position', bgPos);

    const bgSrc = app.backgroundImage || 'assets/background.jpeg';
    const testImg = new Image();
    testImg.src = bgSrc;
    testImg.onload = () => {
      bgImageEl.style.backgroundImage = `url("${bgSrc}")`;
      bgContainer.style.opacity = '1';
    };
    testImg.onerror = () => {

      const fallbackImg = new Image();
      fallbackImg.src = 'assets/background.jpg';
      fallbackImg.onload = () => {
        bgImageEl.style.backgroundImage = 'url("assets/background.jpg")';
        bgContainer.style.opacity = '1';
      };
      fallbackImg.onerror = () => {

        bgContainer.style.opacity = '0';
      };
    };

    window.addEventListener('resize', () => {
      const isMobileNow = window.innerWidth <= 600;
      const currentBgPos = isMobileNow
        ? (app.backgroundPositionMobile || 'center 20%')
        : (app.backgroundPositionDesktop || 'center 25%');
      document.documentElement.style.setProperty('--bg-position', currentBgPos);
    }, { passive: true });
  }

  function initProfile() {
    const p = config.profile || {};
    const imgEl = document.getElementById('profile-img');
    const fallbackEl = document.getElementById('avatar-fallback');
    const usernameEl = document.getElementById('profile-username');
    const bioEl = document.getElementById('profile-bio');
    const verifiedBadge = document.getElementById('verified-badge');
    const statusContainer = document.getElementById('status-badge-container');
    const availabilityText = document.getElementById('availability-text');
    const navStatusText = document.getElementById('nav-status-text');
    const avatarContainer = document.getElementById('avatar-container');

    if (usernameEl && p.username) usernameEl.textContent = p.username;
    if (navStatusText && p.username) navStatusText.textContent = p.username.replace('@', '') + '.dev';
    if (bioEl && p.bio) bioEl.textContent = p.bio;

    if (verifiedBadge) {
      verifiedBadge.style.display = p.verified ? 'inline-flex' : 'none';
    }

    if (statusContainer && availabilityText) {
      if (p.showBadge && p.badgeText) {
        availabilityText.textContent = p.badgeText;
        statusContainer.style.display = 'flex';
      } else {
        statusContainer.style.display = 'none';
      }
    }

    const avatarSrc = p.image || p.avatar || 'assets/profile.jpg';
    if (imgEl && fallbackEl) {
      imgEl.src = avatarSrc;
      imgEl.onerror = () => {
        imgEl.style.display = 'none';
        fallbackEl.classList.remove('hidden');
      };
      imgEl.onload = () => {
        imgEl.style.display = 'block';
        fallbackEl.classList.add('hidden');
      };
    }

    if (avatarContainer && animConfig.enableIntroSequence !== false) {
      avatarContainer.classList.add('avatar-intro-3d');
    }

    if (avatarContainer) {
      avatarContainer.addEventListener('click', () => {
        const ripple = document.createElement('div');
        ripple.className = 'avatar-ripple';
        avatarContainer.appendChild(ripple);
        setTimeout(() => ripple.remove(), 650);
      });
    }

    if (avatarContainer && animConfig.enableProfile3D !== false && !isTouchDevice) {
      const maxTilt = animConfig.profileTiltMax || 4.5;

      avatarContainer.addEventListener('mousemove', (e) => {
        const rect = avatarContainer.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        const tiltX = -y * maxTilt;
        const tiltY = x * maxTilt;

        avatarContainer.style.transform = `perspective(800px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(1.05, 1.05, 1.05)`;
      });

      avatarContainer.addEventListener('mouseleave', () => {
        avatarContainer.style.transform = '';
      });
    }
  }

  function initTypingAnimation() {
    const p = config.profile || {};
    const typingTexts = p.typingTexts || p.descriptions || [
      "IT Support",
      "Web Developer",
      "IoT Developer",
      "Building Digital Experiences"
    ];

    const typingContainer = document.getElementById('typing-container');
    const typingPrefixEl = document.getElementById('typing-prefix');
    const typingTextEl = document.getElementById('typing-text');

    if (!typingContainer || !typingTextEl) return;

    if (animConfig.enableTyping === false || typingTexts.length === 0) {
      typingContainer.style.display = 'none';
      return;
    }

    if (typingPrefixEl) {
      if (p.typingPrefix && p.typingPrefix.trim()) {
        typingPrefixEl.textContent = p.typingPrefix;
        typingPrefixEl.style.display = 'inline';
      } else {
        typingPrefixEl.style.display = 'none';
      }
    }

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimer = null;

    const typeSpeed = animConfig.typingSpeed || 70;
    const deleteSpeed = animConfig.typingDeleteSpeed || 35;
    const pauseDelay = animConfig.typingPauseDelay || 1800;
    const initialDelay = animConfig.typingInitialDelay || 600;

    function typeStep() {
      const currentFullText = typingTexts[textIndex];

      if (!isDeleting) {
        charIndex++;
        typingTextEl.textContent = currentFullText.substring(0, charIndex);

        if (charIndex === currentFullText.length) {
          isDeleting = true;
          typingTimer = setTimeout(typeStep, pauseDelay);
          return;
        }

        typingTimer = setTimeout(typeStep, typeSpeed);
      } else {
        charIndex--;
        typingTextEl.textContent = currentFullText.substring(0, charIndex);

        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % typingTexts.length;
          typingTimer = setTimeout(typeStep, 350);
          return;
        }

        typingTimer = setTimeout(typeStep, deleteSpeed);
      }
    }

    setTimeout(typeStep, initialDelay);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (typingTimer) clearTimeout(typingTimer);
      } else {
        typingTimer = setTimeout(typeStep, 300);
      }
    });
  }

  function openServiceEmail(emailConfig) {
    const cfg = emailConfig || (config && config.email) || {};
    const recipient = (cfg.recipient || '').trim();

    if (!recipient) {
      showToast("Alamat email belum dikonfigurasi.");
      return;
    }

    const subject = encodeURIComponent(
      cfg.subject || "Permintaan Jasa"
    );

    const body = encodeURIComponent(
      cfg.body ||
      "Halo, saya ingin berdiskusi mengenai proyek dan layanan Anda."
    );

    const mailtoURL = `mailto:${recipient}?subject=${subject}&body=${body}`;

    showToast("Membuka aplikasi email...");
    window.location.href = mailtoURL;
  }

  function initQrisModal() {
    const qrisConfig = config.qris || {};
    const modalTitle = document.getElementById('qris-modal-title');
    const modalSubtitle = document.getElementById('qris-modal-subtitle');
    const qrisImg = document.getElementById('qris-image');
    const qrisFrame = document.getElementById('qris-frame');
    const qrisFallback = document.getElementById('qris-fallback');
    const btnDownload = document.getElementById('btn-download-qris');

    if (modalTitle && qrisConfig.title) modalTitle.textContent = qrisConfig.title;
    if (modalSubtitle && qrisConfig.subtitle) modalSubtitle.textContent = qrisConfig.subtitle;

    const qrisSrc = qrisConfig.image || 'assets/qris.jpeg';
    const downloadName = qrisConfig.downloadFileName || 'qris-farhan.jpeg';

    if (btnDownload) {
      btnDownload.href = qrisSrc;
      btnDownload.setAttribute('download', downloadName);
    }

    if (qrisImg && qrisFrame && qrisFallback) {
      let triedAlt = false;

      qrisImg.onerror = () => {
        if (!triedAlt) {
          triedAlt = true;

          const altSrc = qrisSrc.endsWith('.jpeg')
            ? qrisSrc.replace('.jpeg', '.png')
            : qrisSrc.replace('.png', '.jpeg');
          qrisImg.src = altSrc;
          if (btnDownload) btnDownload.href = altSrc;
          return;
        }

        qrisFrame.classList.add('hidden');
        qrisFallback.classList.remove('hidden');
        if (btnDownload) {
          btnDownload.addEventListener('click', (e) => {
            e.preventDefault();
            showToast('Gambar QRIS belum diunggah di ' + qrisSrc);
          });
        }
      };

      qrisImg.onload = () => {
        qrisFrame.classList.remove('hidden');
        qrisFallback.classList.add('hidden');
      };

      qrisImg.src = qrisSrc;
    }
  }

  const linksContainer = document.getElementById('links-container');
  let activePopover = null;
  let activeLinkData = null;

  function getCardLeadingHtml(item) {

    if (item.id === 'portfolio') {
      return `
        <div class="card-leading card-leading-portfolio" aria-hidden="true">
          <div class="portfolio-3d-scene">
            <div class="portfolio-glow-orb"></div>
            <div class="portfolio-wire-ring ring-1"></div>
            <div class="portfolio-wire-ring ring-2"></div>
            <div class="portfolio-wire-ring ring-3"></div>
            <div class="portfolio-light-orbit"></div>
            <div class="portfolio-core-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
                <line x1="14" y1="4" x2="10" y2="20"></line>
              </svg>
            </div>
          </div>
        </div>
      `;
    }

    if (item.id === 'projects' || item.type === 'gallery') {
      return `
        <div class="card-leading card-leading-projects" aria-hidden="true">
          <div class="projects-3d-scene">
            <div class="projects-ambient-glow"></div>
            <div class="projects-holo-ring ring-outer"></div>
            <div class="projects-holo-ring ring-inner"></div>
            <div class="projects-light-beam"></div>
            <div class="projects-wire-orb"></div>
            <div class="projects-panels-stack">
              <div class="project-mini-panel panel-back"></div>
              <div class="project-mini-panel panel-mid"></div>
              <div class="project-mini-panel panel-front">
                <span class="panel-dot dot-1"></span>
                <span class="panel-dot dot-2"></span>
                <span class="panel-line line-1"></span>
                <span class="panel-line line-2"></span>
              </div>
            </div>
            <div class="projects-sparkles">
              <span class="p-sparkle p-1"></span>
              <span class="p-sparkle p-2"></span>
              <span class="p-sparkle p-3"></span>
            </div>
          </div>
        </div>
      `;
    }

    if (item.id === 'qris' || item.type === 'qris') {
      return `
        <div class="card-leading card-leading-coffee" aria-hidden="true">
          <div class="coffee-3d-scene">
            <div class="coffee-glow-halo"></div>
            <div class="steam-container">
              <span class="steam-trail steam-1"></span>
              <span class="steam-trail steam-2"></span>
              <span class="steam-trail steam-3"></span>
            </div>
            <div class="coffee-cup-core">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </div>
            <div class="coffee-sparkles">
              <span class="sparkle sp-1"></span>
              <span class="sparkle sp-2"></span>
              <span class="sparkle sp-3"></span>
            </div>
          </div>
        </div>
      `;
    }

    if (item.id === 'order' || item.type === 'email') {
      return `
        <div class="card-leading card-leading-order" aria-hidden="true">
          <div class="order-3d-scene">
            <div class="order-neon-glow"></div>
            <div class="order-radar-beam"></div>
            <div class="order-wire-ring"></div>
            <div class="order-light-trail"></div>
            <div class="order-send-core">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </div>
          </div>
        </div>
      `;
    }

    return `
      <div class="card-leading">
        <div class="card-icon-badge">
          ${getIconSvg(item.icon)}
        </div>
      </div>
    `;
  }

  function renderLinks() {
    if (!linksContainer) return;
    linksContainer.innerHTML = '';

    const links = (config.links || []).filter(item => item.enabled !== false);
    const staggerDelay = animConfig.staggerDelayMs || 85;
    const enableCard3D = animConfig.enableCard3D !== false && !isTouchDevice;
    const cardTiltMax = animConfig.cardTiltMax || 4.5;
    const enableGlare = animConfig.enableCardGlare !== false && !isTouchDevice;
    const glareOpacity = animConfig.cardGlareOpacity || 0.20;

    links.forEach((item, index) => {
      const cardWrapper = document.createElement('div');
      cardWrapper.className = 'link-card-wrapper';
      cardWrapper.style.animationDelay = `${0.25 + index * (staggerDelay / 1000)}s`;

      const card = document.createElement('a');
      card.className = 'link-card';

      if (item.type === 'email' || item.id === 'order') {
        const emailConfig = config.email || {};
        const recipient = (emailConfig.recipient || '').trim();
        if (recipient) {
          const subject = encodeURIComponent(emailConfig.subject || "Permintaan Jasa");
          const body = encodeURIComponent(emailConfig.body || "Halo, saya ingin berdiskusi mengenai proyek dan layanan Anda.");
          card.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        } else {
          card.href = '#order';
        }
      } else {
        card.href = item.url || '#';
      }

      card.setAttribute('data-id', item.id || `link-${index}`);
      card.setAttribute('aria-label', `${item.title}: ${item.description || ''}`);

      if (item.external && item.url && !item.url.startsWith('#')) {
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
      }

      const glareHtml = `<div class="card-glare" aria-hidden="true"></div><div class="card-border-highlight" aria-hidden="true"></div><div class="card-shimmer" aria-hidden="true"></div>`;

      const leadingHtml = getCardLeadingHtml(item);

      const badgeHtml = item.badge ? `<span class="card-badge">${item.badge}</span>` : '';
      const descriptionHtml = item.description ? `<p class="card-description">${item.description}</p>` : '';

      const contentHtml = `
        <div class="card-content">
          <div class="card-title-row">
            <span class="card-title">${item.title}</span>
            ${badgeHtml}
          </div>
          ${descriptionHtml}
        </div>
      `;

      const menuBtnHtml = `
        <button
          type="button"
          class="card-menu-btn"
          aria-label="Opsi lainnya untuk ${item.title}"
          title="Opsi link"
          data-index="${index}"
        >
          ${ICONS.moreVertical}
        </button>
      `;

      card.innerHTML = glareHtml + leadingHtml + contentHtml + menuBtnHtml;

      if (enableCard3D) {
        const glareEl = card.querySelector('.card-glare');

        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;

          const tiltX = -y * cardTiltMax;
          const tiltY = x * cardTiltMax;

          card.style.transform = `perspective(800px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-3px)`;

          const pctX = ((x + 0.5) * 100).toFixed(1);
          const pctY = ((y + 0.5) * 100).toFixed(1);
          card.style.setProperty('--mouse-card-x', `${pctX}%`);
          card.style.setProperty('--mouse-card-y', `${pctY}%`);

          if (enableGlare && glareEl) {
            glareEl.style.opacity = glareOpacity;
            glareEl.style.background = `radial-gradient(circle at ${pctX}% ${pctY}%, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0) 65%)`;
          }
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
          if (glareEl) glareEl.style.opacity = '0';
        });
      }

      card.addEventListener('click', (e) => {

        if (e.target.closest('.card-menu-btn')) {
          e.preventDefault();
          e.stopPropagation();
          const btn = e.target.closest('.card-menu-btn');
          openLinkPopover(btn, item);
          return;
        }

        if (item.type === 'gallery' || item.id === 'projects' || item.url === '#projects') {
          e.preventDefault();
          openProjectsGallery();
          return;
        }

        if (item.type === 'qris' || item.id === 'qris' || item.url === '#qris') {
          e.preventDefault();
          openModal('modal-qris');
          return;
        }

        if (item.type === 'email' || item.id === 'order' || item.url === '#order') {
          const emailConfig = config.email || {};
          const recipient = (emailConfig.recipient || '').trim();

          if (!recipient) {
            e.preventDefault();
            showToast("Alamat email belum dikonfigurasi.");
            return;
          }

          showToast("Membuka aplikasi email...");

          if (!card.href || !card.href.startsWith('mailto:')) {
            e.preventDefault();
            openServiceEmail(emailConfig);
          }
          return;
        }

        if (item.id === 'contact' || item.url === '#contact') {
          if (item.url && (item.url.startsWith('http://') || item.url.startsWith('https://'))) {

            return;
          }
          e.preventDefault();
          openModal('modal-contact');
          return;
        }

        if (item.url && item.url.startsWith('#')) {
          e.preventDefault();
          showToast(`Tautan placeholder (${item.url}). Atur di js/config.js`);
        }
      });

      cardWrapper.appendChild(card);
      linksContainer.appendChild(cardWrapper);
    });
  }

  const linkPopover = document.getElementById('link-popover');
  const popoverTitle = document.getElementById('popover-link-title');
  const popoverBtnOpen = document.getElementById('popover-btn-open');
  const popoverBtnCopy = document.getElementById('popover-btn-copy');
  const popoverBtnShare = document.getElementById('popover-btn-share');

  function openLinkPopover(triggerBtn, itemData) {
    if (!linkPopover) return;

    activeLinkData = itemData;
    if (popoverTitle) popoverTitle.textContent = itemData.title;

    if (popoverBtnOpen) {
      if (itemData.type === 'gallery' || itemData.id === 'projects') {
        popoverBtnOpen.querySelector('span').textContent = 'Buka Galeri Proyek';
      } else if (itemData.type === 'qris' || itemData.id === 'qris') {
        popoverBtnOpen.querySelector('span').textContent = 'Buka QRIS';
      } else if (itemData.type === 'email' || itemData.id === 'order') {
        popoverBtnOpen.querySelector('span').textContent = 'Pesan via Email';
      } else {
        popoverBtnOpen.querySelector('span').textContent = 'Buka tautan';
      }
    }

    if (popoverBtnCopy) {
      if (itemData.type === 'email' || itemData.id === 'order') {
        popoverBtnCopy.querySelector('span').textContent = 'Salin alamat email';
      } else {
        popoverBtnCopy.querySelector('span').textContent = 'Salin tautan';
      }
    }

    const rect = triggerBtn.getBoundingClientRect();
    const popoverWidth = 200;

    linkPopover.classList.remove('hidden');
    const popoverHeight = linkPopover.offsetHeight || 135;

    let left = rect.right - popoverWidth;
    let top = rect.bottom + window.scrollY + 6;

    if (left < 10) left = 10;
    if (rect.bottom + popoverHeight > window.innerHeight) {
      top = rect.top + window.scrollY - popoverHeight - 6;
    }

    linkPopover.style.top = `${top}px`;
    linkPopover.style.left = `${left}px`;
    activePopover = linkPopover;
  }

  function closeLinkPopover() {
    if (linkPopover) {
      linkPopover.classList.add('hidden');
      activePopover = null;
    }
  }

  if (popoverBtnOpen) {
    popoverBtnOpen.addEventListener('click', () => {
      if (!activeLinkData) return;
      closeLinkPopover();

      if (activeLinkData.type === 'gallery' || activeLinkData.id === 'projects' || activeLinkData.url === '#projects') {
        openProjectsGallery();
      } else if (activeLinkData.type === 'qris' || activeLinkData.id === 'qris') {
        openModal('modal-qris');
      } else if (activeLinkData.type === 'email' || activeLinkData.id === 'order') {
        openServiceEmail(config.email);
      } else if (activeLinkData.url === '#contact') {
        openModal('modal-contact');
      } else if (activeLinkData.url.startsWith('#')) {
        showToast(`Tautan placeholder (${activeLinkData.url}). Silakan ubah di config.js`);
      } else {
        window.open(activeLinkData.url, '_blank', 'noopener,noreferrer');
      }
    });
  }

  if (popoverBtnCopy) {
    popoverBtnCopy.addEventListener('click', async () => {
      if (!activeLinkData) return;
      closeLinkPopover();

      if (activeLinkData.type === 'email' || activeLinkData.id === 'order') {
        const emailRec = (config.email && config.email.recipient) || '';
        if (emailRec) {
          fallbackCopyText(emailRec);
          showToast(`Alamat email (${emailRec}) disalin!`);
        } else {
          showToast('Alamat email belum diatur di config.js');
        }
        return;
      }

      const targetUrl = activeLinkData.url.startsWith('#')
        ? window.location.origin + window.location.pathname + activeLinkData.url
        : activeLinkData.url;

      fallbackCopyText(targetUrl);
    });
  }

  if (popoverBtnShare) {
    popoverBtnShare.addEventListener('click', async () => {
      if (!activeLinkData) return;
      closeLinkPopover();

      const targetUrl = activeLinkData.url.startsWith('#')
        ? window.location.href
        : activeLinkData.url;

      if (navigator.share) {
        try {
          await navigator.share({
            title: activeLinkData.title,
            text: activeLinkData.description || `Cek tautan dari ${config.profile.username || '@frnyx'}`,
            url: targetUrl
          });
        } catch (err) {
          if (err.name !== 'AbortError') {
            fallbackCopyText(targetUrl);
          }
        }
      } else {
        fallbackCopyText(targetUrl);
      }
    });
  }

  function fallbackCopyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast('Tautan berhasil disalin ke clipboard!');
      }).catch(() => {
        execCommandCopy(text);
      });
    } else {
      execCommandCopy(text);
    }
  }

  function execCommandCopy(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast('Tautan berhasil disalin ke clipboard!');
    } catch (err) {
      showToast('Gagal menyalin tautan');
    }
    document.body.removeChild(tempInput);
  }

  document.addEventListener('click', (e) => {
    if (activePopover && !activePopover.contains(e.target) && !e.target.closest('.card-menu-btn')) {
      closeLinkPopover();
    }
  });

  window.addEventListener('scroll', () => {
    if (activePopover) closeLinkPopover();
  }, { passive: true });

  function renderSocials() {
    const socialsContainer = document.getElementById('socials-container');
    if (!socialsContainer) return;
    socialsContainer.innerHTML = '';

    const socials = (config.socials || []).filter(item => item.enabled !== false);

    socials.forEach((item, index) => {
      const socialItem = document.createElement('div');
      socialItem.className = 'social-item';
      socialItem.style.animationDelay = `${0.65 + index * 0.08}s`;

      const isMailto = item.url.startsWith('mailto:');
      const targetAttr = isMailto ? '' : 'target="_blank" rel="noopener noreferrer"';

      socialItem.innerHTML = `
        <a
          href="${item.url || '#'}"
          class="social-link"
          aria-label="${item.name}"
          ${targetAttr}
        >
          ${getIconSvg(item.icon)}
        </a>
        <span class="social-tooltip">${item.name}</span>
      `;

      socialItem.querySelector('a').addEventListener('click', (e) => {
        if (!item.url || item.url === '#' || item.url === 'https://www.instagram.com/' || item.url === 'https://www.tiktok.com/' || item.url === 'https://www.facebook.com/' || item.url === 'https://www.linkedin.com/') {
          if (!item.url.includes('farhanadeata')) {
            showToast(`Atur link profil ${item.name} Anda di js/config.js`);
          }
        }
      });

      socialsContainer.appendChild(socialItem);
    });
  }

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (modalId === 'modal-contact') {
      const firstInput = modal.querySelector('input');
      if (firstInput) setTimeout(() => firstInput.focus(), 100);
    }
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('hidden');

    const remainingOpenModals = document.querySelectorAll('.custom-modal-backdrop:not(.hidden)');
    if (remainingOpenModals.length === 0) {
      document.body.style.overflow = '';
    }

    if (modalId === 'modal-projects-gallery') {
      try {
        if (window.location.hash === '#projects') {
          history.replaceState(null, null, window.location.pathname + window.location.search);
        }
      } catch (e) {}
    }
  }

  let activeProjectCategory = 'all';

  function openProjectsGallery() {
    try {
      const modal = document.getElementById('modal-projects-gallery');
      if (!modal) {
        throw new Error("Elemen #modal-projects-gallery tidak ditemukan dalam DOM.");
      }
      openModal('modal-projects-gallery');
      renderProjectsFilterTabs();
      renderProjectCards(activeProjectCategory);

      try {
        history.replaceState(null, null, '#projects');
      } catch (e) {}
    } catch (err) {
      console.error("[Frnyx Gallery] Gagal membuka galeri proyek:", err);
      showToast("Gagal membuka galeri proyek: " + (err.message || "Kesalahan internal"));
    }
  }

  window.openProjectsGallery = openProjectsGallery;

  function getProjectMicroVisualHtml(visualType) {
    switch (visualType) {
      case 'dashboard-qr':
        return `
          <div class="project-micro-3d visual-sikudi" aria-hidden="true">
            <div class="qr-scan-line"></div>
            <div class="qr-holo-matrix">
              <span class="matrix-cell c1"></span><span class="matrix-cell c2"></span><span class="matrix-cell c3"></span>
              <span class="matrix-cell c4"></span><span class="matrix-cell c5"></span><span class="matrix-cell c6"></span>
            </div>
            <div class="hud-corner top-left"></div>
            <div class="hud-corner bottom-right"></div>
          </div>
        `;
      case 'cloud-cube':
        return `
          <div class="project-micro-3d visual-nas" aria-hidden="true">
            <div class="storage-cube">
              <div class="cube-face face-front"></div>
              <div class="cube-face face-top"></div>
              <div class="cube-face face-right"></div>
            </div>
            <div class="data-orbit-ring">
              <span class="data-node"></span>
            </div>
            <div class="nas-pulse-wave"></div>
          </div>
        `;
      case 'iot-nodes':
        return `
          <div class="project-micro-3d visual-localink" aria-hidden="true">
            <div class="iot-wave wave-1"></div>
            <div class="iot-wave wave-2"></div>
            <div class="iot-network-nodes">
              <span class="node n-center"></span>
              <span class="node n-left"></span>
              <span class="node n-right"></span>
              <span class="node-line line-l"></span>
              <span class="node-line line-r"></span>
            </div>
          </div>
        `;
      case 'inventory-cube':
        return `
          <div class="project-micro-3d visual-beliaza" aria-hidden="true">
            <div class="inventory-crate">
              <div class="crate-face cr-front"></div>
              <div class="crate-face cr-top"></div>
              <div class="crate-face cr-side"></div>
            </div>
            <div class="stock-pulse-indicator">
              <span class="stock-dot"></span>
            </div>
          </div>
        `;
      case 'ai-orb':
        return `
          <div class="project-micro-3d visual-ifbara" aria-hidden="true">
            <div class="ai-core-orb"></div>
            <div class="ai-neural-ring ring-a"></div>
            <div class="ai-neural-ring ring-b"></div>
            <div class="ai-wave-glow"></div>
          </div>
        `;
      case 'web-layers':
      default:
        return `
          <div class="project-micro-3d visual-portfolio" aria-hidden="true">
            <div class="browser-glass-frame">
              <div class="browser-dot-row"><span class="b-dot"></span><span class="b-dot"></span><span class="b-dot"></span></div>
              <div class="browser-floating-layer layer-1"></div>
              <div class="browser-floating-layer layer-2"></div>
            </div>
          </div>
        `;
    }
  }

  function renderProjectsFilterTabs() {
    const tabsContainer = document.getElementById('gallery-filter-tabs');
    if (!tabsContainer) return;

    const categories = config.projectCategories || [
      { id: "all", name: "All Projects" },
      { id: "web-development", name: "Web Development" },
      { id: "iot-embedded", name: "IoT & Embedded" },
      { id: "cloud-infrastructure", name: "Cloud & Infrastructure" },
      { id: "mobile-development", name: "Mobile Development" }
    ];

    const allProjects = config.projects || [];
    tabsContainer.innerHTML = '';

    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `filter-pill-btn ${cat.id === activeProjectCategory ? 'active' : ''}`;
      btn.setAttribute('data-category', cat.id);

      const count = cat.id === 'all'
        ? allProjects.length
        : allProjects.filter(p => p.categorySlug === cat.id || p.category.toLowerCase().includes(cat.id.replace('-', ' '))).length;

      btn.innerHTML = `
        <span class="filter-pill-name">${cat.name}</span>
        <span class="filter-pill-count">${count}</span>
      `;

      btn.addEventListener('click', () => {
        if (activeProjectCategory === cat.id) return;
        activeProjectCategory = cat.id;

        tabsContainer.querySelectorAll('.filter-pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const grid = document.getElementById('projects-grid');
        if (grid) {
          grid.style.opacity = '0';
          grid.style.transform = 'translateY(10px)';
          setTimeout(() => {
            renderProjectCards(activeProjectCategory);
            grid.style.opacity = '1';
            grid.style.transform = 'translateY(0)';
          }, 180);
        } else {
          renderProjectCards(activeProjectCategory);
        }
      });

      tabsContainer.appendChild(btn);
    });
  }

  function renderProjectCards(categoryFilter = 'all') {
    const grid = document.getElementById('projects-grid');
    const emptyState = document.getElementById('projects-empty-state');
    if (!grid) return;

    grid.innerHTML = '';
    const allProjects = config.projects || [];
    const filtered = categoryFilter === 'all'
      ? allProjects
      : allProjects.filter(p => p.categorySlug === categoryFilter || p.category.toLowerCase().includes(categoryFilter.replace('-', ' ')));

    if (filtered.length === 0) {
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }
    if (emptyState) emptyState.classList.add('hidden');

    filtered.forEach((p, idx) => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.setAttribute('data-id', p.id);
      card.setAttribute('tabindex', '0');
      card.style.animationDelay = `${idx * 0.06}s`;

      const hasLiveDemo = p.links && p.links.liveDemo;
      const hasSourceCode = p.links && p.links.sourceCode;

      card.innerHTML = `
        <div class="project-card-inner">
          <div class="project-card-glare" aria-hidden="true"></div>
          <div class="project-card-shimmer" aria-hidden="true"></div>

          <div class="project-media-wrapper">
            <img
              src="${p.image}"
              alt="Preview proyek ${p.title}"
              class="project-thumb-img"
              loading="lazy"
              decoding="async"
              onerror="this.onerror=null;this.classList.add('img-fallback');"
            />
            <div class="project-media-overlay" aria-hidden="true"></div>
            <div class="project-media-gradient" aria-hidden="true"></div>

            ${getProjectMicroVisualHtml(p.visualType)}

            <div class="project-badges-strip">
              <span class="project-category-badge">${p.category}</span>
              <span class="project-status-badge status-${p.statusType || 'live'}">${p.status}</span>
            </div>
          </div>

          <div class="project-info-body">
            <h3 class="project-title">${p.title}</h3>
            <p class="project-summary">${p.summary}</p>

            <div class="project-tech-tags" aria-label="Teknologi yang digunakan">
              ${(p.technologies || []).slice(0, 4).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
              ${(p.technologies || []).length > 4 ? `<span class="tech-tag tech-more">+${p.technologies.length - 4}</span>` : ''}
            </div>

            <div class="project-card-footer">
              <button type="button" class="btn-project-detail" data-project-id="${p.id}">
                <span>Detail Proyek</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>

              <div class="project-quick-links">
                ${hasLiveDemo ? `
                  <a href="${p.links.liveDemo}" target="_blank" rel="noopener noreferrer" class="quick-link-btn" title="Kunjungi Live Demo (${p.title})" aria-label="Live Demo ${p.title}">
                    ${ICONS.externalLink || ''}
                  </a>
                ` : ''}
                ${hasSourceCode ? `
                  <a href="${p.links.sourceCode}" target="_blank" rel="noopener noreferrer" class="quick-link-btn" title="Buka Source Code GitHub (${p.title})" aria-label="Source Code GitHub ${p.title}">
                    ${ICONS.github || ''}
                  </a>
                ` : ''}
              </div>
            </div>
          </div>
        </div>
      `;

      if (!isTouchDevice && animConfig.card3D !== false) {
        const inner = card.querySelector('.project-card-inner');
        const glare = card.querySelector('.project-card-glare');

        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          const tiltX = -y * 7;
          const tiltY = x * 7;

          inner.style.transform = `perspective(850px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateZ(8px)`;
          if (glare) {
            const glareX = ((x + 0.5) * 100).toFixed(1);
            const glareY = ((y + 0.5) * 100).toFixed(1);
            glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.2) 0%, transparent 60%)`;
            glare.style.opacity = '1';
          }
        });

        card.addEventListener('mouseleave', () => {
          inner.style.transform = '';
          if (glare) glare.style.opacity = '0';
        });
      }

      card.addEventListener('click', (e) => {
        if (e.target.closest('.quick-link-btn')) return;
        openProjectDetail(p.id);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          openProjectDetail(p.id);
        }
      });

      grid.appendChild(card);
    });
  }

  function openProjectDetail(projectId) {
    const allProjects = config.projects || [];
    const p = allProjects.find(item => item.id === projectId);
    if (!p) return;

    const contentContainer = document.getElementById('project-detail-content');
    if (!contentContainer) return;

    const hasLiveDemo = p.links && p.links.liveDemo;
    const hasSourceCode = p.links && p.links.sourceCode;

    contentContainer.innerHTML = `
      <div class="project-detail-grid">

        <div class="detail-media-pane">
          <div class="detail-media-frame">
            <img
              src="${p.image}"
              alt="Screenshot ${p.title}"
              class="detail-hero-img"
              onerror="this.onerror=null;this.src='assets/background.jpeg';"
            />
            <div class="detail-media-gradient"></div>
            <div class="detail-tags-overlay">
              <span class="detail-badge-cat">${p.category}</span>
              <span class="detail-badge-status status-${p.statusType || 'live'}">${p.status}</span>
            </div>
          </div>

          <div class="detail-meta-card">
            <div class="meta-item">
              <span class="meta-label">Peran & Kontribusi</span>
              <span class="meta-val">${p.role || 'Lead Developer'}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Kategori Proyek</span>
              <span class="meta-val">${p.category}</span>
            </div>
          </div>
        </div>

        <div class="detail-info-pane">
          <div class="detail-heading-group">
            <h2 id="project-detail-title" class="detail-project-title">${p.title}</h2>
            <p class="detail-project-lead">${p.summary}</p>
          </div>

          <div class="detail-block">
            <h4 class="detail-block-title">
              <span class="block-icon">🎯</span>
              <span>Permasalahan yang Ingin Diselesaikan</span>
            </h4>
            <p class="detail-block-text">${p.problem}</p>
          </div>

          <div class="detail-block">
            <h4 class="detail-block-title">
              <span class="block-icon">💡</span>
              <span>Solusi & Fitur yang Diimplementasikan</span>
            </h4>
            <p class="detail-block-text">${p.solution}</p>
          </div>

          <div class="detail-block">
            <h4 class="detail-block-title">
              <span class="block-icon">⚙️</span>
              <span>Teknologi yang Digunakan</span>
            </h4>
            <div class="detail-tech-chips">
              ${(p.technologies || []).map(t => `<span class="tech-chip">${t}</span>`).join('')}
            </div>
          </div>

          <div class="detail-footer-actions">
            ${hasLiveDemo ? `
              <a href="${p.links.liveDemo}" target="_blank" rel="noopener noreferrer" class="detail-action-btn btn-demo">
                ${ICONS.externalLink || ''}
                <span>Buka Live Demo</span>
              </a>
            ` : ''}
            ${hasSourceCode ? `
              <a href="${p.links.sourceCode}" target="_blank" rel="noopener noreferrer" class="detail-action-btn btn-repo">
                ${ICONS.github || ''}
                <span>Source Code</span>
              </a>
            ` : ''}
            <button type="button" class="detail-action-btn btn-back-gallery" data-close-modal="modal-project-detail">
              ${ICONS.arrowLeft || ''}
              <span>Kembali ke Galeri</span>
            </button>
          </div>
        </div>
      </div>
    `;

    openModal('modal-project-detail');

    const backBtn = contentContainer.querySelector('.btn-back-gallery');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        closeModal('modal-project-detail');
      });
    }
  }

  function initProjectsGallery() {
    renderProjectsFilterTabs();

    if (window.location.hash === '#projects') {
      setTimeout(openProjectsGallery, 250);
    }

    window.addEventListener('hashchange', () => {
      if (window.location.hash === '#projects') {
        openProjectsGallery();
      }
    });
  }

  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close-modal');
      closeModal(modalId);
    });
  });

  document.querySelectorAll('.custom-modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeModal(backdrop.id);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLinkPopover();
      document.querySelectorAll('.custom-modal-backdrop:not(.hidden)').forEach(modal => {
        closeModal(modal.id);
      });
    }
  });

  const btnSharePage = document.getElementById('btn-share-page');

  if (btnSharePage) {
    btnSharePage.addEventListener('click', () => {
      const shareUrlInput = document.getElementById('share-url-input');
      if (shareUrlInput) shareUrlInput.value = window.location.href;
      openModal('modal-share');
    });
  }

  const btnCopyShareUrl = document.getElementById('btn-copy-share-url');
  if (btnCopyShareUrl) {
    btnCopyShareUrl.addEventListener('click', () => {
      fallbackCopyText(window.location.href);
      showToast('URL profil berhasil disalin!');
    });
  }

  const btnShareWa = document.getElementById('btn-share-whatsapp');
  if (btnShareWa) {
    btnShareWa.addEventListener('click', () => {
      const text = encodeURIComponent(`Lihat profil & portofolio @frnyx: ${window.location.href}`);
      window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    });
  }

  const btnShareTg = document.getElementById('btn-share-telegram');
  if (btnShareTg) {
    btnShareTg.addEventListener('click', () => {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`Lihat profil & portofolio @frnyx`);
      window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
    });
  }

  const btnShareX = document.getElementById('btn-share-x');
  if (btnShareX) {
    btnShareX.addEventListener('click', () => {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`Cek profil & portofolio @frnyx:`);
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    });
  }

  const btnShareNative = document.getElementById('btn-share-native');
  if (btnShareNative) {
    btnShareNative.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: config.meta.title || document.title,
            text: config.meta.description,
            url: window.location.href
          });
        } catch (err) {}
      } else {
        fallbackCopyText(window.location.href);
      }
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value.trim();
      const email = document.getElementById('contact-email')?.value.trim();
      const subject = document.getElementById('contact-subject')?.value.trim();
      const message = document.getElementById('contact-message')?.value.trim();

      if (!name || !email || !message) {
        showToast('Mohon lengkapi semua kolom.');
        return;
      }

      const recipient = (config.email && config.email.recipient) || 'hello@example.com';
      const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(`[Website Contact] ${subject}`)}&body=${encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`)}`;
      window.location.href = mailtoUrl;

      showToast('Aplikasi email Anda dibuka. Pesan siap dikirim!');
      closeModal('modal-contact');
      contactForm.reset();
    });
  }

  const cursorGlow = document.getElementById('cursor-glow');

  let mouseX = 0;
  let mouseY = 0;

  if (!isTouchDevice && animConfig.enableBackgroundParallax !== false) {
    const intensity = animConfig.parallaxIntensity || 0.04;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorGlow && (animConfig.enablePointerGlow !== false && animConfig.enableCursorGlow !== false)) {
        cursorGlow.style.transform = `translate(${mouseX - 250}px, ${mouseY - 250}px)`;
      }

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = (mouseX - centerX) * (intensity / 0.04);
      const deltaY = (mouseY - centerY) * (intensity / 0.04);

      document.documentElement.style.setProperty('--mouse-x', `${deltaX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${deltaY}px`);
    }, { passive: true });
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
  }, { passive: true });

  function initWelcomeScreen() {
    const welcomeEl = document.getElementById('welcome-screen');
    const profileCard = document.getElementById('profile-card');
    if (!welcomeEl) return;

    const welcomeConfig = config.welcomeScreen || {};
    if (welcomeConfig.enabled === false) {
      welcomeEl.classList.add('hidden');
      if (profileCard) profileCard.classList.add('page-revealed');
      return;
    }

    const hasSeenWelcome = sessionStorage.getItem('frnyx_welcome_seen') === 'true';
    const isDirectProjectHash = window.location.hash === '#projects';

    if (hasSeenWelcome || isDirectProjectHash) {
      welcomeEl.classList.add('hidden');
      if (profileCard) profileCard.classList.add('page-revealed');
      return;
    }

    let isWelcomeActive = true;
    let isTerminating = false;
    const timeouts = [];

    function safeTimeout(fn, delay) {
      const id = setTimeout(fn, delay);
      timeouts.push(id);
      return id;
    }

    function clearAllTimeouts() {
      timeouts.forEach(id => clearTimeout(id));
      timeouts.length = 0;
    }

    document.body.style.overflow = 'hidden';

    const wordmarkEl = welcomeEl.querySelector('.welcome-wordmark');
    const titleEl = document.getElementById('welcome-title');
    const subheadlineEl = document.getElementById('welcome-subheadline');
    const consoleBody = document.getElementById('terminal-console-body');
    const statusIndicator = document.getElementById('term-status-indicator');
    const statusLabel = document.getElementById('term-status-label');
    const terminalCard = document.getElementById('welcome-terminal');
    const progressFill = document.getElementById('terminal-progress-bar-fill');
    const progressCounter = document.getElementById('progress-counter');
    const progressStageName = document.getElementById('progress-stage-name');
    const asciiPreview = document.getElementById('terminal-ascii-preview');
    const screenFlash = document.getElementById('welcome-screen-flash');
    const btnSkipIntro = document.getElementById('btn-skip-intro');

    const metaIp = document.getElementById('visitor-meta-ip');
    const metaLocation = document.getElementById('visitor-meta-location');
    const metaTimezone = document.getElementById('visitor-meta-timezone');
    const metaBrowser = document.getElementById('visitor-meta-browser');
    const metaPlatform = document.getElementById('visitor-meta-platform');
    const metaConnection = document.getElementById('visitor-meta-connection');

    if (wordmarkEl && welcomeConfig.brandingText) wordmarkEl.textContent = welcomeConfig.brandingText;
    if (subheadlineEl && welcomeConfig.subtitle) subheadlineEl.textContent = welcomeConfig.subtitle;

    function detectLocalTelemetry() {

      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (metaTimezone) metaTimezone.textContent = tz || 'Asia/Jakarta';
      } catch (e) {
        if (metaTimezone) metaTimezone.textContent = 'UTC';
      }

      const ua = navigator.userAgent || '';
      let browserName = 'Modern Browser';
      if (/edg/i.test(ua)) browserName = 'Microsoft Edge';
      else if (/chrome|crios/i.test(ua)) browserName = 'Google Chrome';
      else if (/firefox|fxios/i.test(ua)) browserName = 'Mozilla Firefox';
      else if (/safari/i.test(ua) && !/chrome/i.test(ua)) browserName = 'Apple Safari';
      else if (/opr\//i.test(ua)) browserName = 'Opera';
      if (metaBrowser) metaBrowser.textContent = browserName;

      let osName = 'Windows';
      if (/iphone|ipad|ipod/i.test(ua)) osName = 'iOS';
      else if (/android/i.test(ua)) osName = 'Android';
      else if (/mac/i.test(ua)) osName = 'macOS';
      else if (/linux/i.test(ua)) osName = 'Linux';
      else if (/win/i.test(ua)) osName = 'Windows';
      if (metaPlatform) metaPlatform.textContent = osName;

      let netStatus = navigator.onLine ? 'Online' : 'Offline';
      if (navigator.connection && navigator.connection.effectiveType) {
        netStatus = `${navigator.connection.effectiveType.toUpperCase()} (Online)`;
      }
      if (metaConnection) metaConnection.textContent = netStatus;
    }

    detectLocalTelemetry();

    function maskIpAddress(rawIp) {
      if (!rawIp || typeof rawIp !== 'string') return 'Unavailable';
      const clean = rawIp.trim();
      if (clean.includes('.')) {
        const parts = clean.split('.');
        if (parts.length === 4) {
          return `${parts[0]}.${parts[1]}.xxx.xxx`;
        }
      } else if (clean.includes(':')) {
        const parts = clean.split(':');
        return `${parts.slice(0, 2).join(':')}:xxxx:xxxx`;
      }
      return clean.substring(0, 4) + '...';
    }

    async function fetchVisitorGeo() {
      if (welcomeConfig.fetchGeoLocation === false) {
        if (metaIp) metaIp.textContent = 'Protected';
        if (metaLocation) metaLocation.textContent = 'Unavailable';
        return;
      }

      const controller = new AbortController();
      const timeoutSec = safeTimeout(() => controller.abort(), welcomeConfig.geoTimeoutMs || 1800);

      try {
        const response = await fetch('https://ipapi.co/json/', {
          signal: controller.signal,
          headers: { 'Accept': 'application/json' }
        });

        clearTimeout(timeoutSec);

        if (response.ok) {
          const data = await response.json();
          if (data && data.ip) {
            const masked = maskIpAddress(data.ip);
            if (metaIp) metaIp.textContent = masked;

            const locParts = [];
            if (data.city) locParts.push(data.city);
            if (data.country_name) locParts.push(data.country_name);
            else if (data.country) locParts.push(data.country);

            if (metaLocation) {
              metaLocation.textContent = locParts.length > 0 ? locParts.join(', ') : 'Unavailable';
            }
            return;
          }
        }
      } catch (err) {

      }

      try {
        const fallbackCtrl = new AbortController();
        const fallbackTimeout = safeTimeout(() => fallbackCtrl.abort(), 1200);
        const res2 = await fetch('https://api.ipify.org?format=json', { signal: fallbackCtrl.signal });
        clearTimeout(fallbackTimeout);
        if (res2.ok) {
          const d2 = await res2.json();
          if (d2 && d2.ip) {
            if (metaIp) metaIp.textContent = maskIpAddress(d2.ip);
            if (metaLocation && metaLocation.textContent.includes('...')) {
              metaLocation.textContent = 'Unavailable';
            }
            return;
          }
        }
      } catch (e) {}

      if (metaIp && metaIp.innerHTML.includes('detecting')) metaIp.textContent = 'Unavailable';
      if (metaLocation && metaLocation.innerHTML.includes('locating')) metaLocation.textContent = 'Unavailable';
    }

    fetchVisitorGeo();

    function updateProgress(percent, stageName) {
      if (progressFill) progressFill.style.width = `${percent}%`;
      if (progressCounter) progressCounter.textContent = `${percent}%`;
      if (progressStageName && stageName) progressStageName.textContent = stageName;

      if (asciiPreview) {
        const totalBars = 20;
        const filled = Math.round((percent / 100) * totalBars);
        const empty = totalBars - filled;
        asciiPreview.textContent = `[${'█'.repeat(filled)}${'░'.repeat(empty)}]`;
      }
    }

    const terminalLines = [
      { text: 'booting personal-link...', stage: 'INITIALIZING INTERFACE', progress: 14, type: 'cmd' },
      { text: 'loading visual interface...', stage: 'INITIALIZING VISUAL EFFECTS', progress: 28, type: 'cmd' },
      { text: 'initializing 3D environment...', stage: 'CONFIGURING 3D', progress: 45, type: 'cmd' },
      { text: 'checking browser capabilities...', stage: 'VERIFYING CAPABILITIES', progress: 58, type: 'cmd' },
      { text: 'retrieving visitor information...', stage: 'GATHERING TELEMETRY', progress: 72, type: 'cmd' },
      { text: 'loading projects and social links...', stage: 'LOADING PROJECT DATA', progress: 85, type: 'cmd' },
      { text: 'preparing your experience...', stage: 'PREPARING TRANSITION', progress: 95, type: 'cmd' },
      { text: 'initialization complete', stage: 'SYSTEM READY', progress: 100, type: 'success' },
      { text: 'welcome to frnyx personal link.', stage: 'EXPERIENCE READY', progress: 100, type: 'welcome' }
    ];

    let currentLineIdx = 0;

    function typeNextLine() {
      if (!isWelcomeActive || isTerminating) return;

      if (currentLineIdx >= terminalLines.length) {
        finishWelcomeScreen(false);
        return;
      }

      const item = terminalLines[currentLineIdx];
      updateProgress(item.progress, item.stage);

      if (!consoleBody) {
        currentLineIdx++;
        safeTimeout(typeNextLine, 120);
        return;
      }

      const lineEl = document.createElement('div');
      lineEl.className = 'term-line';

      const promptEl = document.createElement('span');
      promptEl.className = 'term-prompt';
      promptEl.textContent = '>';

      const cmdEl = document.createElement('span');
      cmdEl.className = `term-cmd ${item.type}`;

      const cursorEl = document.createElement('span');
      cursorEl.className = 'terminal-cursor';
      cursorEl.textContent = '█';

      lineEl.appendChild(promptEl);
      lineEl.appendChild(cmdEl);
      lineEl.appendChild(cursorEl);
      consoleBody.appendChild(lineEl);
      consoleBody.scrollTop = consoleBody.scrollHeight;

      let charIdx = 0;
      const targetText = item.text;
      const baseSpeed = welcomeConfig.typingSpeedMs || 30;

      function typeChar() {
        if (!isWelcomeActive || isTerminating) return;

        if (charIdx < targetText.length) {
          cmdEl.textContent += targetText[charIdx];
          charIdx++;
          consoleBody.scrollTop = consoleBody.scrollHeight;
          const jitter = Math.random() * 20 - 8;
          safeTimeout(typeChar, Math.max(16, baseSpeed + jitter));
        } else {

          cursorEl.remove();
          currentLineIdx++;

          const pause = item.type === 'welcome'
            ? 450
            : (welcomeConfig.linePauseMs || 130);

          safeTimeout(typeNextLine, pause);
        }
      }

      typeChar();
    }

    safeTimeout(typeNextLine, 260);

    const stageEl = document.getElementById('welcome-stage');
    if (!isTouchDevice && stageEl) {
      welcomeEl.addEventListener('mousemove', (e) => {
        if (!isWelcomeActive || isTerminating) return;
        const rect = welcomeEl.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const tiltX = -y * 6;
        const tiltY = x * 6;
        stageEl.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
      }, { passive: true });
    }

    function finishWelcomeScreen(isImmediate = false) {
      if (isTerminating || !isWelcomeActive) return;
      isTerminating = true;
      isWelcomeActive = false;
      clearAllTimeouts();

      try {
        sessionStorage.setItem('frnyx_welcome_seen', 'true');
      } catch (e) {}

      if (statusIndicator) {
        statusIndicator.classList.add('ready');
      }
      if (statusLabel) {
        statusLabel.classList.add('ready');
        statusLabel.textContent = 'READY';
      }
      if (terminalCard) {
        terminalCard.classList.add('terminal-ready');
      }

      if (isImmediate) {

        welcomeEl.classList.add('hidden');
        document.body.style.overflow = '';
        if (profileCard) profileCard.classList.add('page-revealed');
        return;
      }

      updateProgress(100, 'SYSTEM READY');

      if (screenFlash) {
        screenFlash.classList.add('flash-active');
        safeTimeout(() => screenFlash.classList.remove('flash-active'), 320);
      }

      if (terminalCard) {
        terminalCard.style.transform = 'perspective(1000px) scale(0.94) translateZ(-40px)';
      }

      safeTimeout(() => {
        welcomeEl.classList.add('exiting');
        if (profileCard) profileCard.classList.add('page-revealed');
      }, 240);

      safeTimeout(() => {
        welcomeEl.classList.add('hidden');
        document.body.style.overflow = '';
      }, 650);
    }

    if (btnSkipIntro) {
      btnSkipIntro.addEventListener('click', (e) => {
        e.preventDefault();
        finishWelcomeScreen(true);
      });
    }

    const handleKeydown = (e) => {
      if (e.key === 'Escape' && isWelcomeActive) {
        finishWelcomeScreen(true);
        document.removeEventListener('keydown', handleKeydown);
      }
    };
    document.addEventListener('keydown', handleKeydown);

    safeTimeout(() => {
      if (isWelcomeActive) {
        finishWelcomeScreen(false);
      }
    }, 6000);
  }

  initTheme();
  initCinematicBackground();
  initProfile();
  initTypingAnimation();
  initQrisModal();
  renderLinks();
  renderSocials();
  initProjectsGallery();
  initWelcomeScreen();

  console.log('%c[Frnyx Linktree]%c Premium 3D Liquid Glass & Cinematic version initialized.', 'color: #72E6E0; font-weight: bold;', 'color: #FFF;');
});

