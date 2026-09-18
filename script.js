// SAILAAB'S DESIGN HOUSE — CATALOG WITH 20 REAL CARPET IMAGES

const productsData = [
  // ── LIVING ROOM / BESTSELLERS ──────────────────────────────────────────
  {
    id: 'p01',
    name: "Ivory Blue Floral Hand-Knotted Carpet",
    category: "hand-knotted",
    badge: "⭐ Bestseller",
    material: "100% Pure Kashmiri Silk on Cotton Warp",
    density: "360 KPSI",
    sizes: ["5×8 Ft", "6×9 Ft", "8×10 Ft", "9×12 Ft", "Custom"],
    image: "/assets/01-ivory-blue-floral-living-room.webp",
    description: "Elegant ivory and blue floral hand-knotted carpet. Traditional Persian motifs with intricate border detailing. Woven in Bhadohi."
  },
  {
    id: 'p02',
    name: "Camel Classic Floral Persian Carpet",
    category: "hand-knotted",
    badge: "⭐ Bestseller",
    material: "Wool & Silk Blend on Cotton Warp",
    density: "300 KPSI",
    sizes: ["5×8 Ft", "6×9 Ft", "8×10 Ft", "9×12 Ft", "Custom"],
    image: "/assets/02-camel-classic-floral-living-room.webp",
    description: "Rich camel and cream classic floral carpet with intricate Persian design. A perennial bestseller from our Bhadohi looms."
  },
  {
    id: 'p03',
    name: "Ivory Charcoal Medallion Premium Carpet",
    category: "hand-knotted",
    badge: "⭐ Bestseller",
    material: "Pure Silk on Cotton Foundation",
    density: "320 KPSI",
    sizes: ["6×9 Ft", "8×10 Ft", "9×12 Ft", "10×14 Ft", "Custom"],
    image: "/assets/03-ivory-charcoal-medallion-living-room.webp",
    description: "Stunning ivory and charcoal central medallion carpet. High-density silk weave for a lustrous sheen and fine pattern detail."
  },
  {
    id: 'p04',
    name: "Greige Abstract Luxury Carpet",
    category: "modern",
    badge: "🆕 New Arrival",
    material: "New Zealand Wool & Bamboo Silk",
    density: "Hand-Tufted Heavy Pile",
    sizes: ["5×8 Ft", "6×9 Ft", "8×10 Ft", "9×12 Ft", "Custom"],
    image: "/assets/04-greige-abstract-luxury-living-room.webp",
    description: "Contemporary greige abstract luxury carpet. Subtle tonal variations in warm greige create a sophisticated, understated elegance."
  },

  // ── IRREGULAR CARPETS ──────────────────────────────────────────────────
  {
    id: 'p05',
    name: "Navy Beige Irregular Shape Rug",
    category: "irregular",
    badge: "🆕 New Arrival",
    material: "Hand-Knotted Wool Blend",
    density: "Irregular Cut Pile",
    sizes: ["Custom Shape & Size"],
    image: "/assets/05-navy-beige-irregular-room.webp",
    description: "Unique navy and beige irregular-shaped rug. Non-rectangular contour adds artistic flair to any modern living space."
  },
  {
    id: 'p06',
    name: "Black Mustard Irregular Statement Rug",
    category: "irregular",
    badge: "Unique Shape",
    material: "Hand-Tufted Wool",
    density: "Heavy Cut Pile",
    sizes: ["Custom Shape & Size"],
    image: "/assets/06-black-mustard-irregular-product.webp",
    description: "Bold black and mustard yellow irregular rug. A dramatic statement piece that redefines conventional rug boundaries."
  },
  {
    id: 'p07',
    name: "Face Art Irregular Designer Rug",
    category: "irregular",
    badge: "Art Piece",
    material: "Hand-Tufted Premium Wool",
    density: "Sculptured Pile",
    sizes: ["Custom Shape & Size"],
    image: "/assets/07-face-art-irregular-product.webp",
    description: "Artistic face-motif irregular rug. Hand-crafted sculptured pile work turns this carpet into a wearable piece of wall or floor art."
  },
  {
    id: 'p08',
    name: "Ivory Cloud Irregular Shaggy Rug",
    category: "irregular",
    badge: "🆕 New Arrival",
    material: "Premium Shaggy Wool",
    density: "Extra Deep Shaggy Pile",
    sizes: ["Custom Shape & Size"],
    image: "/assets/08-ivory-cloud-irregular-room.webp",
    description: "Soft ivory cloud-shaped shaggy rug. Irregular cloud outline with ultra-plush pile makes it perfect for kids' rooms and bedrooms."
  },

  // ── CLASSIC / HAND-KNOTTED ─────────────────────────────────────────────
  {
    id: 'p09',
    name: "Burgundy Persian Heritage Carpet",
    category: "hand-knotted",
    badge: "⭐ Bestseller",
    material: "Hand-Knotted Pure Wool",
    density: "280 KPSI",
    sizes: ["5×8 Ft", "6×9 Ft", "8×10 Ft", "9×12 Ft", "Custom"],
    image: "/assets/09-burgundy-persian-living-room.webp",
    description: "Deep burgundy Persian carpet with all-over floral vines and classic ivory border. A timeless Bhadohi heritage piece."
  },
  {
    id: 'p10',
    name: "Teal Botanical Modern Carpet",
    category: "modern",
    badge: "New Design",
    material: "Wool & Silk Blend",
    density: "Hand-Tufted Dense Pile",
    sizes: ["5×8 Ft", "6×9 Ft", "8×10 Ft", "Custom"],
    image: "/assets/10-teal-botanical-living-room.webp",
    description: "Vibrant teal carpet with large-scale botanical leaf motifs. A bold modern design that brings fresh energy to any room."
  },
  {
    id: 'p11',
    name: "Beige Charcoal Geometric Carpet",
    category: "modern",
    badge: "Modern Design",
    material: "New Zealand Wool Flatweave",
    density: "High Density Flatweave",
    sizes: ["4×6 Ft", "5×8 Ft", "6×9 Ft", "8×10 Ft", "Custom"],
    image: "/assets/11-beige-charcoal-geometric-room.webp",
    description: "Crisp beige and charcoal geometric diamond pattern. Clean Scandinavian-inspired design, durable flatweave construction."
  },
  {
    id: 'p12',
    name: "Sage Green Abstract Luxury Carpet",
    category: "modern",
    badge: "Trending",
    material: "Bamboo Silk & Wool Blend",
    density: "Hand-Tufted Plush Pile",
    sizes: ["5×8 Ft", "6×9 Ft", "8×10 Ft", "9×12 Ft", "Custom"],
    image: "/assets/12-sage-green-abstract-room.webp",
    description: "Calming sage green abstract carpet with subtle tonal brushstroke texture. Brings a serene, nature-inspired feel to your space."
  },
  {
    id: 'p13',
    name: "Cobalt Blue Abstract Statement Carpet",
    category: "modern",
    badge: "Bold Color",
    material: "Bamboo Silk & NZ Wool",
    density: "Hand-Tufted Dense Pile",
    sizes: ["5×8 Ft", "6×9 Ft", "8×10 Ft", "9×12 Ft", "Custom"],
    image: "/assets/13-cobalt-blue-abstract-room.webp",
    description: "Striking cobalt blue abstract carpet. Rich jewel-toned pile with fluid brushwork patterns for dramatic modern interiors."
  },

  // ── JUTE CARPETS ───────────────────────────────────────────────────────
  {
    id: 'p14',
    name: "Rust Border Natural Jute Carpet",
    category: "jute",
    badge: "Eco-Friendly",
    material: "100% Natural Jute",
    density: "Hand-Woven Flatweave",
    sizes: ["4×6 Ft", "5×8 Ft", "6×9 Ft", "8×10 Ft", "Custom"],
    image: "/assets/14-rust-border-jute-room.webp",
    description: "Natural jute carpet with contrasting rust-coloured bordered edge. Eco-friendly, biodegradable and perfect for boho-chic interiors."
  },
  {
    id: 'p15',
    name: "Round Natural Jute Rug",
    category: "jute",
    badge: "Eco-Friendly",
    material: "100% Natural Jute",
    density: "Hand-Braided Round",
    sizes: ["3 Ft Dia", "4 Ft Dia", "5 Ft Dia", "6 Ft Dia", "Custom"],
    image: "/assets/15-round-natural-jute-reading-room.webp",
    description: "Hand-braided round natural jute rug. Concentric circular pattern in warm natural tones. Ideal for reading nooks and dining areas."
  },

  // ── SHAGGY CARPETS ─────────────────────────────────────────────────────
  {
    id: 'p16',
    name: "Charcoal Shaggy Plush Carpet",
    category: "shaggy",
    badge: "Ultra Soft",
    material: "Chunky Hand-Tufted NZ Wool",
    density: "35mm Deep Shaggy Pile",
    sizes: ["4×6 Ft", "5×8 Ft", "6×9 Ft", "8×10 Ft", "Custom"],
    image: "/assets/16-charcoal-shaggy-living-room.webp",
    description: "Deep charcoal shaggy carpet with ultra-plush 35mm pile. Luxuriously soft underfoot — perfect for living rooms and media lounges."
  },
  {
    id: 'p17',
    name: "Ivory Shaggy Bedroom Carpet",
    category: "shaggy",
    badge: "Bedroom Pick",
    material: "Premium NZ Wool Shaggy",
    density: "30mm Deep Shaggy Pile",
    sizes: ["4×6 Ft", "5×8 Ft", "6×9 Ft", "8×10 Ft", "Custom"],
    image: "/assets/17-ivory-shaggy-bedroom.webp",
    description: "Pure ivory shaggy bedroom carpet. Wake up every morning on the softest, cloudiest pile. The ultimate bedroom luxury upgrade."
  },

  // ── KIDS / DINING / BEDROOM ────────────────────────────────────────────
  {
    id: 'p18',
    name: "Pastel Rainbow Kids Room Carpet",
    category: "kids",
    badge: "Kids Favourite",
    material: "Soft Anti-Allergen Wool",
    density: "Safe Low Pile",
    sizes: ["3×5 Ft", "4×6 Ft", "5×8 Ft", "Custom"],
    image: "/assets/18-pastel-rainbow-kids-room.webp",
    description: "Cheerful pastel rainbow carpet designed for children's rooms. Non-toxic, hypoallergenic pile — fun colours and completely safe."
  },
  {
    id: 'p19',
    name: "Blue Grey Dining Room Carpet",
    category: "dining",
    badge: "Dining Room",
    material: "Easy-Clean Wool Blend",
    density: "Low Pile Flatweave",
    sizes: ["6×9 Ft", "8×10 Ft", "9×12 Ft", "Custom"],
    image: "/assets/19-blue-grey-dining-room.webp",
    description: "Sophisticated blue-grey dining room carpet. Stain-resistant easy-clean pile, precisely sized to anchor a full dining table set."
  },
  {
    id: 'p20',
    name: "Blush Botanical Bedroom Carpet",
    category: "bedroom",
    badge: "Bedroom Pick",
    material: "Bamboo Silk & NZ Wool",
    density: "Hand-Tufted Plush Pile",
    sizes: ["4×6 Ft", "5×8 Ft", "6×9 Ft", "8×10 Ft", "Custom"],
    image: "/assets/20-blush-botanical-bedroom.webp",
    description: "Romantic blush pink carpet with delicate botanical leaf print. Adds warmth and feminine elegance to master bedrooms."
  }
];

// Touch Scroll Gesture Tracker — Ensures smooth dragging without accidental modal clicks
let touchStartX = 0;
let touchStartY = 0;
let touchIsScrolling = false;

document.addEventListener('touchstart', (e) => {
  if (e.touches && e.touches[0]) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchIsScrolling = false;
  }
}, { passive: true });

document.addEventListener('touchmove', (e) => {
  if (e.touches && e.touches[0]) {
    const dx = Math.abs(e.touches[0].clientX - touchStartX);
    const dy = Math.abs(e.touches[0].clientY - touchStartY);
    if (dx > 8 || dy > 8) {
      touchIsScrolling = true;
    }
  }
}, { passive: true });

document.addEventListener('DOMContentLoaded', () => {
  initBgSlider();
  renderCatalog('all');
  initTabs();
  initCalculator();
  initContactForm();
  initModal();
  initFaqAccordion();
  initNavScroll();
  initMobileMenu();
  initReviewsTape();
  initScrollReveal();
});

// ── SCROLL REVEAL SYSTEM ────────────────────────────────────────────────────
// Adds reveal animation classes to key elements, then watches with IntersectionObserver
function initScrollReveal() {
  // Only animate if user hasn't requested reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Automatically assign reveal classes to key section elements
  const revealMap = [
    // Section tags always fade up
    { selector: '.section-tag, .trade-tag, .why-tag, .eyebrow-label', cls: 'reveal', delay: 0 },
    // Major headings fade up with slight delay
    { selector: '.section-heading, .about-heritage-heading, .why-heading, .process-main-heading, .trade-heading, .about-subheading', cls: 'reveal', delay: 1 },
    // Body text
    { selector: '.section-desc, .section-subtext, .about-lead, .why-subtext, .trade-desc', cls: 'reveal', delay: 2 },
    // Images reveal with scale
    { selector: '.about-img-frame, .why-us-img-frame, .trade-img-frame', cls: 'reveal-img', delay: 0 },
    // Left columns slide in
    { selector: '.why-us-img-col', cls: 'reveal-left', delay: 0 },
    // Right columns slide in
    { selector: '.why-us-content-col', cls: 'reveal-right', delay: 0 },
    // Process steps stagger
    { selector: '.process-step-editorial:nth-child(1)', cls: 'reveal', delay: 1 },
    { selector: '.process-step-editorial:nth-child(3)', cls: 'reveal', delay: 2 },
    { selector: '.process-step-editorial:nth-child(5)', cls: 'reveal', delay: 3 },
    // Feature items
    { selector: '.why-feat', cls: 'reveal', delay: 0 },
    // Stats
    { selector: '.stat-box, .why-stat', cls: 'reveal', delay: 0 },
    // Pillar cards
    { selector: '.pillar-card', cls: 'reveal', delay: 0 },
    // Collection cards stagger
    { selector: '.collection-card', cls: 'reveal', delay: 0 },
    // Trade blocks
    { selector: '.trade-service-block', cls: 'reveal', delay: 0 },
    // Editorial strips
    { selector: '.editorial-statement-heading', cls: 'reveal', delay: 1 },
    // Contact & insta
    { selector: '.contact-details, .contact-form-card', cls: 'reveal', delay: 0 },
  ];

  // Apply classes — don't double-assign
  revealMap.forEach(({ selector, cls, delay }) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      if (!el.classList.contains('reveal') && !el.classList.contains('reveal-left') && !el.classList.contains('reveal-right') && !el.classList.contains('reveal-img')) {
        el.classList.add(cls);
        if (delay > 0) el.classList.add(`reveal-delay-${delay}`);
        // For groups (feat, stat, pillar, collection), stagger each item
        else if (selector.includes(',') === false && delay === 0) {
          const idx = i % 4;
          if (idx > 0) el.classList.add(`reveal-delay-${idx}`);
        }
      }
    });
  });

  // Create observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  // Observe all reveal elements
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-img').forEach(el => {
    observer.observe(el);
  });
}



// Background Slider
function initBgSlider() {
  const slides = document.querySelectorAll('.bg-slide');
  if (!slides || slides.length === 0) return;
  let idx = 0;
  setInterval(() => {
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }, 4500);
}

// Catalog Renderer — Image-only cards, hover overlay
function renderCatalog(filter = 'all') {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? productsData
    : productsData.filter(p => p.category === filter);

  grid.innerHTML = filtered.length === 0
    ? `<p style="grid-column:1/-1;text-align:center;color:#888;padding:40px 0">No products in this category.</p>`
    : filtered.map(p => `
    <div class="product-card" onclick="openModal('${p.id}')">
      <div class="product-img-box">
        <img src="${p.image}" alt="${p.name}" loading="lazy" decoding="async" class="carpet-img">
        <span class="product-badge">${p.badge}</span>

        <!-- Hover overlay — fades in on desktop, always-on on mobile -->
        <div class="card-overlay">
          <p class="overlay-name">${p.name}</p>
          <span class="overlay-btn">
            <i class="fa-solid fa-eye" style="font-size:.65rem"></i> View Carpet
          </span>
        </div>
      </div>
    </div>
  `).join('');
}


window.filterCatalog = function(categoryKey) {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(t => { if (t.getAttribute('data-filter') === categoryKey) t.click(); });
  document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
};

function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderCatalog(tab.getAttribute('data-filter'));
    });
  });
}

function initCalculator() {
  const widthInp = document.getElementById('calc-width');
  const lengthInp = document.getElementById('calc-length');
  const resArea = document.getElementById('res-area');
  const resTime = document.getElementById('res-time');
  const submitBtn = document.getElementById('btn-submit-calc');

  function update() {
    const w = parseFloat(widthInp?.value) || 0;
    const l = parseFloat(lengthInp?.value) || 0;
    const area = w * l;
    if (resArea) resArea.textContent = `${area.toFixed(1)} Sq. Ft.`;
    if (resTime) resTime.textContent = area > 100 ? "4–5 Weeks (Bhadohi Looms)" : "2–3 Weeks (Bhadohi Looms)";
  }

  widthInp?.addEventListener('input', update);
  lengthInp?.addEventListener('input', update);

  submitBtn?.addEventListener('click', () => {
    const style = document.getElementById('calc-style')?.value || '';
    const w = widthInp?.value || '';
    const l = lengthInp?.value || '';
    const shape = document.getElementById('calc-shape')?.value || '';
    const area = (parseFloat(w) * parseFloat(l)).toFixed(1);
    const msg = `Hello Sailaab's Design House (+91 92193 40149),\n\nCustom Rug Specs:\n- Style: ${style}\n- Dimensions: ${w} Ft × ${l} Ft (${area} Sq. Ft.)\n- Shape: ${shape}\n\nPlease share price quote.`;
    window.open(`https://wa.me/919219340149?text=${encodeURIComponent(msg)}`, '_blank');
  });
}

function initContactForm() {
  const form = document.getElementById('main-contact-form');
  const alertBox = document.getElementById('contact-alert');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cnt-name')?.value || '';
    const phone = document.getElementById('cnt-phone')?.value || '';
    const msg = document.getElementById('cnt-msg')?.value || '';
    alertBox?.classList.remove('hidden');
    form.reset();
    setTimeout(() => {
      const waMsg = `Hello Sailaab's Design House,\n\nNew Inquiry:\n- Name: ${name}\n- Phone: ${phone}\n- Message: ${msg}`;
      window.open(`https://wa.me/919219340149?text=${encodeURIComponent(waMsg)}`, '_blank');
    }, 800);
  });
}

function initModal() {
  const modal = document.getElementById('product-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  closeBtn?.addEventListener('click', () => modal?.classList.remove('active'));
  modal?.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
}

window.openModal = function(id) {
  if (touchIsScrolling) return;
  const p = productsData.find(prod => prod.id === id);
  if (!p) return;
  const modal = document.getElementById('product-modal');
  const modalBody = document.getElementById('modal-body');
  const isClient = document.body.classList.contains('client-preview');
  const modalCta = isClient
    ? `<a href="javascript:void(0)" class="btn btn-black-block" style="pointer-events: none; cursor: default;">
        <i class="fa-brands fa-whatsapp"></i> Inquire on WhatsApp (+91 92193 40149)
      </a>`
    : `<a href="https://wa.me/919219340149?text=${encodeURIComponent("Hello Sailaab's Design House, I am inquiring about " + p.name + " (" + p.category + ")")}" target="_blank" rel="noopener noreferrer" class="btn btn-black-block">
        <i class="fa-brands fa-whatsapp"></i> Inquire on WhatsApp (+91 92193 40149)
      </a>`;
  modalBody.innerHTML = `
    <div class="modal-img-wrap">
      <img src="${p.image}" alt="${p.name}" decoding="async" class="modal-carpet-img">
    </div>
    <h3 style="font-family:var(--font-serif);font-size:1.55rem;font-weight:600;color:var(--text-primary);margin:14px 0 6px;line-height:1.25">${p.name}</h3>
    <span style="font-size:11.5px;text-transform:uppercase;color:var(--gold-luxury);font-weight:700;letter-spacing:1.8px;display:inline-block">${p.category} · ${p.badge}</span>
    <p style="margin:12px 0 16px;font-size:15px;color:var(--text-secondary);line-height:1.6;font-weight:400">${p.description}</p>
    <div style="font-size:14px;margin-bottom:22px;display:flex;flex-direction:column;gap:6px;color:var(--text-secondary)">
      <p><strong style="color:var(--text-primary);font-weight:650">Material:</strong> ${p.material}</p>
      <p><strong style="color:var(--text-primary);font-weight:650">Density/Weave:</strong> ${p.density}</p>
      <p><strong style="color:var(--text-primary);font-weight:650">Manufacturer:</strong> Sailaab's Design House, Bhadohi</p>
    </div>
    ${modalCta}`;
  modal.classList.add('active');
};

// FAQ Accordion Handler
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// Active Nav Link on Scroll
function initNavScroll() {
  const sections = document.querySelectorAll('section[id], div[id="home"]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-item');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links .mobile-nav-item');

  const header = document.getElementById('main-header');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    let current = 'home';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id') || 'home';
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });

    mobileNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Mobile Menu Drawer Handler
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const backdrop = document.getElementById('mobile-nav-backdrop');
  const closeBtn = document.getElementById('mobile-nav-close');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

  function openMenu() {
    drawer?.classList.add('open');
    backdrop?.classList.add('open');
    document.body.classList.add('menu-open');
    drawer?.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    drawer?.classList.remove('open');
    backdrop?.classList.remove('open');
    document.body.classList.remove('menu-open');
    drawer?.setAttribute('aria-hidden', 'true');
  }

  hamburgerBtn?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  backdrop?.addEventListener('click', closeMenu);

  mobileNavItems.forEach(item => {
    item.addEventListener('click', () => {
      closeMenu();
    });
  });
}

// Infinite Reviews Horizontal Tape — pause on touch interaction for mobile
function initReviewsTape() {
  const wrapper = document.getElementById('reviewsTapeWrapper');
  if (!wrapper) return;
  let resumeTimer = null;

  wrapper.addEventListener('touchstart', () => {
    clearTimeout(resumeTimer);
    wrapper.classList.add('is-paused');
  }, { passive: true });

  wrapper.addEventListener('touchend', () => {
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      wrapper.classList.remove('is-paused');
    }, 2500);
  }, { passive: true });
}

// Global Client Lockdown — Intercept and prevent all WhatsApp, Call (tel:), and Inquire links from opening ONLY in client-preview mode
document.addEventListener('click', (e) => {
  if (!document.body.classList.contains('client-preview')) return;
  const target = e.target.closest('a, button');
  if (!target) return;
  const href = (target.getAttribute('href') || '').toLowerCase();
  const text = (target.textContent || '').toLowerCase();

  if (
    href.startsWith('tel:') ||
    href.includes('wa.me') ||
    href.includes('whatsapp') ||
    href.includes('api.whatsapp.com') ||
    text.includes('whatsapp') ||
    text.includes('inquire') ||
    target.classList.contains('header-wa-btn') ||
    target.classList.contains('btn-mobile-wa') ||
    target.classList.contains('btn-mobile-call') ||
    target.classList.contains('why-cta-btn') ||
    target.classList.contains('btn-trade-wa') ||
    target.classList.contains('btn-dark-cta') ||
    target.classList.contains('btn-black-block')
  ) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
}, true);
