/**
 * REKEN - Landing Page & Module Interactive Logic
 * Airlume Aesthetic & Information Architecture Support
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initDownloadModal();
  initStepSwitcher();
  initFaqAccordion();
  initBookingMockup();
  initTestimonialSlider();
});

/* ==========================================================================
   1. Ultra-Modern Navbar, Active Scroll Spy & Mobile Drawer
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('main-header');
  const headerIsland = document.getElementById('header-island-container');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const closeMobile = document.getElementById('mobile-menu-close');

  // Sticky header compression & island glass enhancement
  function handleScroll() {
    if (window.scrollY > 20) {
      header?.classList.add('py-2', 'sm:py-2.5');
      header?.classList.remove('py-3', 'sm:py-4');
      headerIsland?.classList.add('scrolled');
    } else {
      header?.classList.remove('py-2', 'sm:py-2.5');
      header?.classList.add('py-3', 'sm:py-4');
      headerIsland?.classList.remove('scrolled');
    }
    updateNavSpy();
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  // Initial run
  handleScroll();

  // Robust Viewport-Based Scroll Spy
  function updateNavSpy() {
    const sections = ['tentang', 'mitra', 'fitur', 'harga', 'kontak'];
    let currentActive = '';

    for (let i = 0; i < sections.length; i++) {
      const sec = document.getElementById(sections[i]);
      if (sec) {
        const rect = sec.getBoundingClientRect();
        // Section is considered active if its top is within the upper half of screen
        if (rect.top <= 240 && rect.bottom >= 120) {
          currentActive = sections[i];
          break;
        }
      }
    }

    if (currentActive) {
      document.querySelectorAll('.nav-link-item').forEach((link) => {
        if (link.getAttribute('data-target') === currentActive) {
          link.classList.add('active', 'text-brand-blue');
          link.classList.remove('text-slate-600');
        } else if (link.getAttribute('data-target')) {
          link.classList.remove('active', 'text-brand-blue');
          link.classList.add('text-slate-600');
        }
      });
    }
  }

  // Smooth scroll with clearance for floating island navbar
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#!') return;
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        const islandHeight = headerIsland ? headerIsland.offsetHeight + 30 : 90;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - islandHeight;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
        // Update URL hash without jumping
        if (history.pushState) {
          history.pushState(null, null, `#${targetId}`);
        }
      }
    });
  });

  // Mobile menu toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden');
    });
  }

  if (closeMobile && mobileDrawer) {
    closeMobile.addEventListener('click', () => {
      mobileDrawer.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  }

  // Close mobile drawer on backdrop click
  mobileDrawer?.addEventListener('click', (e) => {
    if (e.target === mobileDrawer) {
      mobileDrawer.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  });

  // Close mobile drawer on link click
  const mobileLinks = mobileDrawer?.querySelectorAll('a');
  mobileLinks?.forEach((link) => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  });
}

/* ==========================================================================
   2. Airlume-Style 4-Step Interactive Switcher (How It Works)
   ========================================================================== */
const stepsData = [
  {
    stepNumber: 'Step 01',
    highlightTitle: 'AI Pencocokan Armada & Estimasi Tarif Instan',
    description:
      'Pelanggan memasukkan kebutuhan perjalanan (durasi sewa, rute Jogja/luar kota, pilihan lepas kunci atau include driver). Algoritma Reken seketika memfilter armada terdekat dengan status ready dan tarif transparan tanpa biaya tersembunyi.',
    previewRoute: 'Bandara YIA ➔ Kota Yogyakarta (Malioboro)',
    previewFleet: 'Toyota Innova Reborn All-In',
    indicatorIdx: 0,
  },
  {
    stepNumber: 'Step 02',
    highlightTitle: 'Konfirmasi Otomatis via WhatsApp Copilot',
    description:
      'Sistem sinkronisasi WhatsApp Reken secara otomatis merespons pesan masuk pelanggan dengan draf penawaran presisi, form verifikasi KTP/SIM digital, dan invoice deposit aman tanpa perlu menunggu admin manual.',
    previewRoute: 'Verifikasi Identitas & DP Aman',
    previewFleet: 'Draf Balasan Otomatis WhatsApp AI Terkirim',
    indicatorIdx: 1,
  },
  {
    stepNumber: 'Step 03',
    highlightTitle: 'Penugasan Supir Handal & Rute Teroptimasi',
    description:
      'Modul Drivers mengalokasikan pengemudi berpengalaman yang berstatus Standby. Pengemudi menerima jadwal tugas di ponsel, lengkap dengan detail tamu, titik penjemputan, dan rute wisata Yogyakarta.',
    previewRoute: 'Sopir Siap: Mas Budi Santoso (Rating 4.9 ★)',
    previewFleet: 'Unit Siap Bersih & Full BBM',
    indicatorIdx: 2,
  },
  {
    stepNumber: 'Step 04',
    highlightTitle: 'Perjalanan Nyaman & Pelaporan Riwayat Digital',
    description:
      'Perjalanan terpantau real-time pada dashboard operasional. Setelah sewa selesai, sistem mencatat riwayat pemakaian, kilometer akhir, ulasan pelanggan, serta akumulasi loyalty points.',
    previewRoute: 'Trip Selesai & Laporan Operasional Masuk',
    previewFleet: 'Status Unit: Kembali Tersedia di Pool',
    indicatorIdx: 3,
  },
];

function initStepSwitcher() {
  let currentStep = 0;
  const stepNumberEl = document.getElementById('step-number');
  const stepTitleEl = document.getElementById('step-title');
  const stepDescEl = document.getElementById('step-desc');
  const stepRouteEl = document.getElementById('step-preview-route');
  const stepFleetEl = document.getElementById('step-preview-fleet');
  const prevBtn = document.getElementById('step-prev-btn');
  const nextBtn = document.getElementById('step-next-btn');
  const dotsContainer = document.getElementById('step-dots-indicator');

  if (!stepTitleEl || !prevBtn || !nextBtn) return;

  function updateStepUI() {
    const data = stepsData[currentStep];

    // Animasi fade halus
    stepTitleEl.style.opacity = '0';
    stepDescEl.style.opacity = '0';

    setTimeout(() => {
      if (stepNumberEl) stepNumberEl.textContent = data.stepNumber;
      stepTitleEl.innerHTML = formatStepTitle(data.highlightTitle);
      if (stepDescEl) stepDescEl.textContent = data.description;
      if (stepRouteEl) stepRouteEl.textContent = data.previewRoute;
      if (stepFleetEl) stepFleetEl.textContent = data.previewFleet;

      stepTitleEl.style.opacity = '1';
      stepDescEl.style.opacity = '1';
    }, 150);

    // Update Dots / Pills
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.step-dot');
      dots.forEach((dot, index) => {
        if (index === currentStep) {
          dot.className = 'step-dot h-2 w-8 rounded-full bg-brand-blue transition-all duration-300';
        } else {
          dot.className = 'step-dot h-2 w-2 rounded-full bg-slate-300 transition-all duration-300';
        }
      });
    }

    // Toggle disabled state button styling
    prevBtn.classList.toggle('opacity-50', currentStep === 0);
    prevBtn.classList.toggle('cursor-not-allowed', currentStep === 0);
    nextBtn.classList.toggle('opacity-50', currentStep === stepsData.length - 1);
    nextBtn.classList.toggle('cursor-not-allowed', currentStep === stepsData.length - 1);
  }

  function formatStepTitle(rawTitle) {
    // Memberikan aksen warna electric blue pada kata kunci
    const parts = rawTitle.split('&');
    if (parts.length > 1) {
      return `${parts[0]} <span class="text-brand-blue font-extrabold">& ${parts[1]}</span>`;
    }
    return rawTitle;
  }

  prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      updateStepUI();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentStep < stepsData.length - 1) {
      currentStep++;
      updateStepUI();
    }
  });

  // Inisialisasi awal
  updateStepUI();
}

/* ==========================================================================
   3. Accordion FAQ
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isOpen = !content.classList.contains('hidden');

      // Tutup semua item lain
      faqItems.forEach((other) => {
        const otherContent = other.querySelector('.faq-content');
        const otherIcon = other.querySelector('.faq-icon');
        otherContent?.classList.add('hidden');
        otherIcon?.classList.remove('rotate-180');
      });

      // Toggle status saat ini
      if (!isOpen) {
        content.classList.remove('hidden');
        icon?.classList.add('rotate-180');
      }
    });
  });
}

/* ==========================================================================
   4. Mockup Pencarian Armada & Booking Cepat
   ========================================================================== */
function initBookingMockup() {
  const searchForm = document.getElementById('hero-booking-form');
  const toast = document.getElementById('booking-toast');

  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const origin = document.getElementById('mockup-origin')?.value || 'YIA Kulon Progo';
      const dest = document.getElementById('mockup-dest')?.value || 'Malioboro Jogja';

      showToast(`Mencari armada terbaik dari ${origin} ke ${dest}...`);
      setTimeout(() => {
        showToast(`Tersedia 6 Unit Ready! Diskon booking hari ini 15%.`);
      }, 1800);
    });
  }
}

function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className =
      'fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-brand-deep text-white px-5 py-3 rounded-2xl shadow-2xl border border-blue-500/30 text-sm font-medium transition-all duration-300 transform translate-y-12 opacity-0 pointer-events-none';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <i class="fa-solid fa-circle-check text-emerald-400"></i>
    <span>${message}</span>
  `;

  toast.classList.remove('translate-y-12', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-12', 'opacity-0', 'pointer-events-none');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 4000);
}

/* ==========================================================================
   5. Testimonial Slider / Nav
   ========================================================================== */
function initTestimonialSlider() {
  const container = document.getElementById('testimonial-scroll-container');
  const prevBtn = document.getElementById('testi-prev-btn');
  const nextBtn = document.getElementById('testi-next-btn');

  if (!container || !prevBtn || !nextBtn) return;

  prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: -340, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: 340, behavior: 'smooth' });
  });
}

/* ==========================================================================
   6. Interactive Download App Modal (Customer & Partner Apps)
   ========================================================================== */
function initDownloadModal() {
  const modal = document.getElementById('download-modal');
  const openBtns = document.querySelectorAll('.btn-open-download-modal');
  const closeBtn = document.getElementById('download-modal-close');
  const tabCustomer = document.getElementById('tab-download-customer');
  const tabPartner = document.getElementById('tab-download-partner');
  const contentCustomer = document.getElementById('download-customer-content');
  const contentPartner = document.getElementById('download-partner-content');

  if (!modal) return;

  function openModal() {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }

  openBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-backdrop-trigger')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Switch tabs in download modal
  if (tabCustomer && tabPartner && contentCustomer && contentPartner) {
    tabCustomer.addEventListener('click', () => {
      tabCustomer.className = 'flex-1 py-2.5 rounded-full text-xs font-bold transition-all bg-brand-deep text-white shadow-sm';
      tabPartner.className = 'flex-1 py-2.5 rounded-full text-xs font-bold transition-all text-slate-600 hover:text-slate-900';
      contentCustomer.classList.remove('hidden');
      contentPartner.classList.add('hidden');
    });

    tabPartner.addEventListener('click', () => {
      tabPartner.className = 'flex-1 py-2.5 rounded-full text-xs font-bold transition-all bg-brand-deep text-white shadow-sm';
      tabCustomer.className = 'flex-1 py-2.5 rounded-full text-xs font-bold transition-all text-slate-600 hover:text-slate-900';
      contentPartner.classList.remove('hidden');
      contentCustomer.classList.add('hidden');
    });
  }
}

