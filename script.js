// SAILAAB'S DESIGN HOUSE — CATALOG WITH 20 REAL CARPET IMAGES

const productsData = [
  // ── LIVING ROOM / BESTSELLERS ──────────────────────────────────────────
  {
    id: 'p01',
    name: "Ivory Blue Floral Hand-Knotted Carpet",
    category: "hand-knotted",
    badge: "⭐ Bestseller",
    price: 28500,
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
    price: 24000,
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
    price: 32000,
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
    price: 18500,
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
    price: 21000,
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
    price: 19500,
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
    price: 22500,
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
    price: 17500,
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
    price: 29500,
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
    price: 21500,
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
    price: 16500,
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
    price: 23000,
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
    price: 25000,
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
    price: 11500,
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
    price: 8900,
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
    price: 18000,
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
    price: 16500,
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
    price: 12500,
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
    price: 20500,
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
    price: 19000,
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
  initCartEvents();
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

// Catalog Renderer — Image-only cards, hover overlay & smooth loading
function renderCatalog(filter = 'all') {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? productsData
    : productsData.filter(p => p.category === filter);

  grid.innerHTML = filtered.length === 0
    ? `<p style="grid-column:1/-1;text-align:center;color:#888;padding:40px 0">No products in this category.</p>`
    : filtered.map((p, idx) => {
        const isPriority = idx < 4;
        return `
    <div class="product-card" onclick="openModal('${p.id}')">
      <div class="product-img-box">
        <img 
          src="${p.image}" 
          alt="${p.name}" 
          loading="${isPriority ? 'eager' : 'lazy'}" 
          ${isPriority ? 'fetchpriority="high"' : ''}
          decoding="async" 
          class="carpet-img"
          onload="this.classList.add('is-loaded'); this.parentElement.classList.add('is-loaded');"
        >
        <span class="product-badge">${p.badge}</span>

        <!-- Hover overlay — fades in on desktop, always-on on mobile -->
        <div class="card-overlay">
          <p class="overlay-name">${p.name}</p>
          <div class="card-price-tag">Starting ₹${(p.price || 18500).toLocaleString('en-IN')}</div>
          <div class="card-actions-row">
            <span class="overlay-btn" onclick="openModal('${p.id}')">
              <i class="fa-solid fa-eye"></i> Details
            </span>
            <button class="btn-card-add-cart" onclick="event.stopPropagation(); addToCart('${p.id}', null, event)">
              <i class="fa-solid fa-bag-shopping"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
    }).join('');
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

  let selectedSize = (p.sizes && p.sizes[0]) || "Standard";

  const sizePillsHtml = (p.sizes || ["Standard"]).map((s, i) => `
    <button type="button" class="size-pill ${i === 0 ? 'active' : ''}" data-size="${s}">
      ${s}
    </button>
  `).join('');

  const modalCta = isClient
    ? `<a href="javascript:void(0)" class="btn btn-black-block" style="pointer-events: none; cursor: default;">
        <i class="fa-brands fa-whatsapp"></i> Inquire on WhatsApp (+91 92193 40149)
      </a>`
    : `<a href="https://wa.me/919219340149?text=${encodeURIComponent("Hello Sailaab's Design House, I am inquiring about " + p.name + " (" + p.category + ", Size: " + selectedSize + ")")}" target="_blank" rel="noopener noreferrer" class="btn btn-black-block" id="modal-wa-btn">
        <i class="fa-brands fa-whatsapp"></i> Inquire on WhatsApp
      </a>`;

  modalBody.innerHTML = `
    <div class="modal-img-wrap">
      <img src="${p.image}" alt="${p.name}" decoding="async" class="modal-carpet-img">
    </div>
    <h3 style="font-family:var(--font-serif);font-size:1.55rem;font-weight:600;color:var(--text-primary);margin:14px 0 6px;line-height:1.25">${p.name}</h3>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:6px">
      <span style="font-size:11.5px;text-transform:uppercase;color:var(--gold-luxury);font-weight:700;letter-spacing:1.8px">${p.category} · ${p.badge}</span>
      <span style="font-size:1.15rem;font-weight:700;color:var(--text-primary);font-family:var(--font-serif)">Starting ₹${(p.price || 18500).toLocaleString('en-IN')}</span>
    </div>
    <p style="margin:10px 0 14px;font-size:14.5px;color:var(--text-secondary);line-height:1.6;font-weight:400">${p.description}</p>
    
    <!-- Size Selector -->
    <div class="modal-size-select-wrap">
      <label class="modal-size-label">Select Loom Dimensions:</label>
      <div class="modal-size-pills" id="modal-size-pills">
        ${sizePillsHtml}
      </div>
    </div>

    <div style="font-size:13.5px;margin-bottom:18px;display:flex;flex-direction:column;gap:5px;color:var(--text-secondary)">
      <p><strong style="color:var(--text-primary);font-weight:650">Material:</strong> ${p.material}</p>
      <p><strong style="color:var(--text-primary);font-weight:650">Density/Weave:</strong> ${p.density}</p>
      <p><strong style="color:var(--text-primary);font-weight:650">Manufacturer:</strong> Sailaab's Design House, Bhadohi Looms</p>
    </div>

    <div class="modal-action-row">
      <button type="button" class="btn btn-modal-add-cart" id="modal-add-cart-btn">
        <i class="fa-solid fa-bag-shopping"></i> Add to Cart
      </button>
      ${modalCta}
    </div>`;

  // Attach size selection listeners
  const pillBtns = modalBody.querySelectorAll('.size-pill');
  pillBtns.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      pillBtns.forEach(b => b.classList.remove('active'));
      pill.classList.add('active');
      selectedSize = pill.getAttribute('data-size');
      const waBtn = document.getElementById('modal-wa-btn');
      if (waBtn && !isClient) {
        waBtn.href = `https://wa.me/919219340149?text=${encodeURIComponent("Hello Sailaab's Design House, I am inquiring about " + p.name + " (" + p.category + ", Size: " + selectedSize + ")")}`;
      }
    });
  });

  const addCartBtn = document.getElementById('modal-add-cart-btn');
  addCartBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    addToCart(p.id, selectedSize);
    modal.classList.remove('active');
  });

  modal.classList.add('active');
};

// ── 22. BESPOKE CART STATE & LOGIC ──────────────────────────────────────────
const CART_STORAGE_KEY = 'sailaab_bespoke_cart';

function getCart() {
  try {
    const data = localStorage.getItem(CART_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (e) {}
  updateCartBadge();
  renderCartDrawer();
}

window.addToCart = function(productId, customSize = null, event = null) {
  if (event) event.stopPropagation();
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const size = customSize || (product.sizes && product.sizes[0]) || "Standard";
  const cart = getCart();

  const existingIdx = cart.findIndex(item => item.id === productId && item.size === size);
  if (existingIdx > -1) {
    cart[existingIdx].qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      material: product.material,
      image: product.image,
      sizes: product.sizes || ["Standard"],
      size: size,
      price: product.price || 18500,
      qty: 1
    });
  }

  saveCart(cart);
  showCartToast(`"${product.name}" (${size}) added to cart!`);
};

window.updateCartQty = function(index, delta) {
  const cart = getCart();
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart(cart);
};

window.removeFromCart = function(index) {
  const cart = getCart();
  if (!cart[index]) return;
  const removedName = cart[index].name;
  cart.splice(index, 1);
  saveCart(cart);
  showCartToast(`Removed "${removedName}" from cart.`);
};

window.updateCartItemSize = function(index, newSize) {
  const cart = getCart();
  if (!cart[index]) return;
  cart[index].size = newSize;
  saveCart(cart);
};

window.clearCart = function() {
  saveCart([]);
  showCartToast("Cart cleared.");
};

function updateCartBadge() {
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const headerBadge = document.getElementById('cart-badge');
  const floatBadge = document.getElementById('floating-cart-badge');
  const countText = document.getElementById('cart-items-count-text');
  const floatBtn = document.getElementById('floating-cart-btn');

  if (headerBadge) headerBadge.textContent = totalCount;
  if (floatBadge) floatBadge.textContent = totalCount;
  if (countText) countText.textContent = `${totalCount} ${totalCount === 1 ? 'carpet' : 'carpets'} selected`;

  if (floatBtn) {
    if (totalCount > 0) {
      floatBtn.classList.add('has-items');
    } else {
      floatBtn.classList.remove('has-items');
    }
  }
}

function renderCartDrawer() {
  const body = document.getElementById('cart-items-body');
  const totalPriceEl = document.getElementById('cart-total-price');
  const footerEl = document.getElementById('cart-drawer-footer');
  if (!body) return;

  const cart = getCart();

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-bag-shopping cart-empty-icon"></i>
        <h4 class="cart-empty-title">Your Bespoke Selection is Empty</h4>
        <p class="cart-empty-desc">Select handcrafted rugs from our collections crafted on traditional Bhadohi looms.</p>
        <button class="btn-explore-carpets" onclick="closeCartDrawer(); document.getElementById('catalog')?.scrollIntoView({behavior:'smooth'});">
          <i class="fa-solid fa-compass"></i> Explore Carpets
        </button>
      </div>
    `;
    if (totalPriceEl) totalPriceEl.textContent = "₹0";
    if (footerEl) footerEl.style.display = "none";
    return;
  }

  if (footerEl) footerEl.style.display = "flex";

  let grandTotal = 0;

  body.innerHTML = cart.map((item, idx) => {
    const itemTotal = (item.price || 18500) * item.qty;
    grandTotal += itemTotal;

    const sizeOptions = (item.sizes || ["Standard"]).map(s => `
      <option value="${s}" ${s === item.size ? 'selected' : ''}>${s}</option>
    `).join('');

    return `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <div>
            <span class="cart-item-cat">${item.category}</span>
            <h5 class="cart-item-name">${item.name}</h5>
            <select class="cart-size-select" onchange="updateCartItemSize(${idx}, this.value)">
              ${sizeOptions}
            </select>
          </div>
          <div class="cart-item-bottom">
            <span class="cart-item-price">₹${itemTotal.toLocaleString('en-IN')}</span>
            <div class="cart-qty-stepper">
              <button class="cart-qty-btn" onclick="updateCartQty(${idx}, -1)" aria-label="Decrease quantity">−</button>
              <span class="cart-qty-val">${item.qty}</span>
              <button class="cart-qty-btn" onclick="updateCartQty(${idx}, 1)" aria-label="Increase quantity">+</button>
            </div>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${idx})" title="Remove item" aria-label="Remove item">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    `;
  }).join('');

  if (totalPriceEl) {
    totalPriceEl.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
  }
}

window.openCartDrawer = function() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  renderCartDrawer();
  drawer?.classList.add('active');
  backdrop?.classList.add('active');
  drawer?.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

window.closeCartDrawer = function() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  drawer?.classList.remove('active');
  backdrop?.classList.remove('active');
  drawer?.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

let toastTimeout = null;
function showCartToast(msg) {
  const toast = document.getElementById('cart-toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

function sendWhatsAppCartInquiry() {
  const cart = getCart();
  if (cart.length === 0) {
    showCartToast("Your cart is empty.");
    return;
  }

  const isClient = document.body.classList.contains('client-preview');
  if (isClient) return;

  let text = "Namaste Sailaab's Design House!\nI would like to request a direct loom quote for my bespoke carpet selection:\n\n";
  let total = 0;

  cart.forEach((item, i) => {
    const sub = (item.price || 18500) * item.qty;
    total += sub;
    text += `${i + 1}. *${item.name}*\n   • Size: ${item.size}\n   • Quantity: ${item.qty}\n   • Est. Loom Price: ₹${sub.toLocaleString('en-IN')}\n\n`;
  });

  text += `--------------------------------\n`;
  text += `*Estimated Total:* ₹${total.toLocaleString('en-IN')}\n`;
  text += `(Direct Loom Factory Estimate — Bhadohi Looms)\n\n`;
  text += `Please confirm loom weaving availability, custom sizing, and shipping timeline.`;

  const url = `https://wa.me/919219340149?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

function initCartEvents() {
  const headerCartBtn = document.getElementById('header-cart-btn');
  const floatingCartBtn = document.getElementById('floating-cart-btn');
  const closeBtn = document.getElementById('cart-close-btn');
  const backdrop = document.getElementById('cart-backdrop');
  const clearBtn = document.getElementById('btn-clear-cart');
  const waCheckoutBtn = document.getElementById('btn-whatsapp-checkout');

  headerCartBtn?.addEventListener('click', openCartDrawer);
  floatingCartBtn?.addEventListener('click', openCartDrawer);
  closeBtn?.addEventListener('click', closeCartDrawer);
  backdrop?.addEventListener('click', closeCartDrawer);
  clearBtn?.addEventListener('click', clearCart);
  waCheckoutBtn?.addEventListener('click', sendWhatsAppCartInquiry);

  // Initial render
  updateCartBadge();
  renderCartDrawer();
}

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

// Infinite Reviews Horizontal Tape — High-performance RAF scroller with full mobile swipe & touch drag
function initReviewsTape() {
  const wrapper = document.getElementById('reviewsTapeWrapper');
  if (!wrapper) return;
  const track = wrapper.querySelector('.reviews-tape-track');
  if (!track) return;

  // Kill CSS animation so JS has full 60fps control without CSS/reduced-motion clashes
  track.style.animation = 'none';
  track.style.webkitAnimation = 'none';
  track.style.willChange = 'transform';

  let currentX = 0;
  const speed = 0.9; // Smooth luxury scrolling speed (px per frame)
  let isPaused = false;
  let isDragging = false;
  let startTouchX = 0;
  let startTouchY = 0;
  let startX = 0;
  let isHorizontalDrag = null;
  let resumeTimer = null;

  // Track width calculations
  const getHalfWidth = () => {
    // Total width divided by 2 (since 2 identical sets of 6 cards exist)
    const w = track.scrollWidth;
    return w > 0 ? w / 2 : 1800;
  };

  function step() {
    if (!isPaused && !isDragging) {
      currentX -= speed;
      const halfWidth = getHalfWidth();
      if (halfWidth > 0 && Math.abs(currentX) >= halfWidth) {
        currentX += halfWidth;
      }
      track.style.transform = `translate3d(${currentX}px, 0, 0)`;
    }
    requestAnimationFrame(step);
  }

  // Desktop hover pause
  wrapper.addEventListener('mouseenter', () => {
    isPaused = true;
  });
  wrapper.addEventListener('mouseleave', () => {
    if (!isDragging) isPaused = false;
  });

  // Mobile Touch Swipe & Drag: allows natural swiping while scrolling continuously
  wrapper.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    clearTimeout(resumeTimer);
    startTouchX = e.touches[0].clientX;
    startTouchY = e.touches[0].clientY;
    startX = currentX;
    isDragging = false;
    isHorizontalDrag = null;
  }, { passive: true });

  wrapper.addEventListener('touchmove', (e) => {
    if (e.touches.length !== 1) return;
    const diffX = e.touches[0].clientX - startTouchX;
    const diffY = e.touches[0].clientY - startTouchY;

    if (isHorizontalDrag === null) {
      if (Math.abs(diffX) > 6 || Math.abs(diffY) > 6) {
        isHorizontalDrag = Math.abs(diffX) >= Math.abs(diffY);
      }
    }

    if (isHorizontalDrag) {
      isDragging = true;
      currentX = startX + diffX;
      const halfWidth = getHalfWidth();
      if (halfWidth > 0) {
        while (currentX > 0) currentX -= halfWidth;
        while (Math.abs(currentX) >= halfWidth) currentX += halfWidth;
      }
      track.style.transform = `translate3d(${currentX}px, 0, 0)`;
    }
  }, { passive: true });

  const handleTouchEnd = () => {
    if (isDragging) {
      isDragging = false;
      isHorizontalDrag = null;
      const halfWidth = getHalfWidth();
      if (halfWidth > 0) {
        while (currentX > 0) currentX -= halfWidth;
        while (Math.abs(currentX) >= halfWidth) currentX += halfWidth;
      }
    }
    // Briefly delay before resuming smooth crawl
    isPaused = true;
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      isPaused = false;
    }, 400);
  };

  wrapper.addEventListener('touchend', handleTouchEnd, { passive: true });
  wrapper.addEventListener('touchcancel', handleTouchEnd, { passive: true });

  // Mouse Drag on Desktop
  let mouseStartX = 0;
  let isMouseDown = false;

  wrapper.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    mouseStartX = e.clientX;
    startX = currentX;
    wrapper.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    const diffX = e.clientX - mouseStartX;
    if (Math.abs(diffX) > 3) {
      isDragging = true;
      currentX = startX + diffX;
      const halfWidth = getHalfWidth();
      if (halfWidth > 0) {
        while (currentX > 0) currentX -= halfWidth;
        while (Math.abs(currentX) >= halfWidth) currentX += halfWidth;
      }
      track.style.transform = `translate3d(${currentX}px, 0, 0)`;
    }
  });

  window.addEventListener('mouseup', () => {
    if (isMouseDown) {
      isMouseDown = false;
      isDragging = false;
      wrapper.style.cursor = 'grab';
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        isPaused = false;
      }, 400);
    }
  });

  // Start smooth 60fps RAF loop
  requestAnimationFrame(step);
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
