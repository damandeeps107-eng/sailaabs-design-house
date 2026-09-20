// SAILAAB'S DESIGN HOUSE — CATALOG & INTERACTIVE FEATURES

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
  renderBestsellers();
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
  initWishlistEvents();
  updateWishlistBadge();
  updateCartBadge();
});

// ── SCROLL REVEAL SYSTEM ────────────────────────────────────────────────────
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const revealMap = [
    { selector: '.section-tag, .trade-tag, .why-tag, .eyebrow-label', cls: 'reveal', delay: 0 },
    { selector: '.section-heading, .about-heritage-heading, .why-heading, .process-main-heading, .trade-heading, .about-subheading', cls: 'reveal', delay: 1 },
    { selector: '.section-desc, .section-subtext, .about-lead, .why-subtext, .trade-desc', cls: 'reveal', delay: 2 },
    { selector: '.about-img-frame, .why-us-img-frame, .trade-img-frame', cls: 'reveal-img', delay: 0 },
    { selector: '.why-us-img-col', cls: 'reveal-left', delay: 0 },
    { selector: '.why-us-content-col', cls: 'reveal-right', delay: 0 },
    { selector: '.stat-box, .why-stat', cls: 'reveal', delay: 0 },
    { selector: '.pillar-card', cls: 'reveal', delay: 0 },
    { selector: '.collection-card', cls: 'reveal', delay: 0 },
  ];

  revealMap.forEach(({ selector, cls, delay }) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      if (!el.classList.contains('reveal') && !el.classList.contains('reveal-left') && !el.classList.contains('reveal-right') && !el.classList.contains('reveal-img')) {
        el.classList.add(cls);
        if (delay > 0) el.classList.add(`reveal-delay-${delay}`);
      }
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-img').forEach(el => observer.observe(el));
}

// Background Slider
function initBgSlider() {
  const slides = document.querySelectorAll('.hero-slide, .bg-slide');
  if (!slides || slides.length === 0) return;
  let idx = 0;

  function showSlide(nextIdx) {
    slides[idx].classList.remove('active');
    idx = (nextIdx + slides.length) % slides.length;
    slides[idx].classList.add('active');
  }

  let interval = setInterval(() => showSlide(idx + 1), 5000);

  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      clearInterval(interval);
      showSlide(idx - 1);
      interval = setInterval(() => showSlide(idx + 1), 5000);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      clearInterval(interval);
      showSlide(idx + 1);
      interval = setInterval(() => showSlide(idx + 1), 5000);
    });
  }
}

// ── WISHLIST STATE & LOGIC ──────────────────────────────────────────────────
const WISHLIST_STORAGE_KEY = 'sailaab_wishlist';

function getWishlist() {
  try {
    const data = localStorage.getItem(WISHLIST_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function saveWishlist(list) {
  try {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {}
  updateWishlistBadge();
  renderWishlistDrawer();
}

window.toggleWishlist = function(productId, event = null) {
  if (event) event.stopPropagation();
  let list = getWishlist();
  const idx = list.indexOf(productId);
  const p = productsData.find(prod => prod.id === productId);

  if (idx > -1) {
    list.splice(idx, 1);
    showCartToast(`Removed "${p ? p.name : 'Carpet'}" from Wishlist.`);
  } else {
    list.push(productId);
    showCartToast(`❤️ Saved "${p ? p.name : 'Carpet'}" to Wishlist!`);
  }

  saveWishlist(list);
  renderBestsellers();
  renderCatalog();
};

function updateWishlistBadge() {
  const list = getWishlist();
  const count = list.length;
  document.querySelectorAll('.wishlist-badge, #bottom-wishlist-badge').forEach(b => {
    b.textContent = count;
  });
  const countText = document.getElementById('wishlist-items-count-text');
  if (countText) countText.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;
}

function initWishlistEvents() {
  const wishlistBtn = document.getElementById('bottom-nav-wishlist');
  const drawer = document.getElementById('wishlist-drawer');
  const closeBtn = document.getElementById('wishlist-close-btn');
  const backdrop = document.getElementById('wishlist-backdrop');

  function openDrawer() {
    renderWishlistDrawer();
    drawer?.classList.add('active');
    backdrop?.classList.add('active');
  }

  function closeDrawer() {
    drawer?.classList.remove('active');
    backdrop?.classList.remove('active');
  }

  wishlistBtn?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);

  const moveAllBtn = document.getElementById('btn-move-all-cart');
  moveAllBtn?.addEventListener('click', () => {
    const list = getWishlist();
    if (list.length === 0) return;
    list.forEach(id => addToCart(id));
    saveWishlist([]);
    closeDrawer();
    showCartToast('Moved all Wishlist items to Cart!');
  });
}

function renderWishlistDrawer() {
  const body = document.getElementById('wishlist-items-body');
  if (!body) return;

  const list = getWishlist();
  if (list.length === 0) {
    body.innerHTML = `
      <div style="text-align:center;padding:40px 20px;color:#777">
        <i class="fa-regular fa-heart" style="font-size:2.8rem;color:#ccc;margin-bottom:12px;display:block"></i>
        <p style="font-size:15px;font-weight:600;color:#222;margin-bottom:6px">Your Wishlist is Empty</p>
        <p style="font-size:13px;line-height:1.5">Tap the heart icon on any carpet card to save your favourite designs here!</p>
      </div>`;
    return;
  }

  const items = productsData.filter(p => list.includes(p.id));
  body.innerHTML = items.map(p => `
    <div class="cart-item-row" style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid #eee;align-items:center">
      <img src="${p.image}" alt="${p.name}" style="width:64px;height:64px;object-fit:cover;border-radius:6px">
      <div style="flex:1">
        <h4 style="font-size:13.5px;font-weight:600;margin:0 0 4px;line-height:1.3;color:#111">${p.name}</h4>
        <div style="font-size:13px;font-weight:700;color:var(--accent-burgundy)">Rs. ${p.price.toLocaleString('en-IN')}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end">
        <button onclick="addToCart('${p.id}')" style="background:var(--accent-burgundy);color:#fff;border:none;padding:6px 10px;border-radius:4px;font-size:11px;font-weight:700;cursor:pointer">
          + Cart
        </button>
        <button onclick="toggleWishlist('${p.id}')" style="background:none;border:none;color:#999;font-size:13px;cursor:pointer">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  `).join('');
}

// Bestsellers Renderer (2-Column Grid matching reference video)
function renderBestsellers() {
  const grid = document.getElementById('bestsellers-grid');
  if (!grid) return;

  const bestsellers = productsData.filter(p => (p.badge || '').includes('Bestseller') || p.price > 20000).slice(0, 4);
  const wishlist = getWishlist();

  grid.innerHTML = bestsellers.map((p, idx) => {
    const isWishlisted = wishlist.includes(p.id);
    return `
    <div class="product-card-v" onclick="openModal('${p.id}')">
      <div class="p-img-box">
        <img src="${p.image}" alt="${p.name}" loading="${idx < 2 ? 'eager' : 'lazy'}" decoding="async">
        <span class="p-discount-badge">-50%</span>
        <button type="button" class="p-wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${p.id}', event)" aria-label="Add to Wishlist">
          <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>
      </div>
      <div class="p-info-box">
        <h3 class="p-title">${p.name}</h3>
        <div class="p-stars">
          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        </div>
        <div class="p-price-row">
          <span class="p-price-current">Rs. ${(p.price || 18500).toLocaleString('en-IN')}.00</span>
          <span class="p-price-old">Rs. ${((p.price || 18500) * 2).toLocaleString('en-IN')}.00</span>
        </div>
      </div>
    </div>
  `;
  }).join('');
}

// Catalog Renderer — 2-Column Product Grid
function renderCatalog(filter = 'all') {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? productsData
    : productsData.filter(p => p.category === filter);

  const wishlist = getWishlist();

  grid.innerHTML = filtered.length === 0
    ? `<p style="grid-column:1/-1;text-align:center;color:#888;padding:40px 0">No products in this category.</p>`
    : filtered.map((p, idx) => {
        const isPriority = idx < 4;
        const isWishlisted = wishlist.includes(p.id);
        return `
    <div class="product-card-v" onclick="openModal('${p.id}')">
      <div class="p-img-box">
        <img 
          src="${p.image}" 
          alt="${p.name}" 
          loading="${isPriority ? 'eager' : 'lazy'}" 
          ${isPriority ? 'fetchpriority="high"' : ''}
          decoding="async"
        >
        <span class="p-discount-badge">-50%</span>
        <button type="button" class="p-wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${p.id}', event)" aria-label="Add to Wishlist">
          <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>
      </div>
      <div class="p-info-box">
        <h3 class="p-title">${p.name}</h3>
        <div class="p-stars">
          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        </div>
        <div class="p-price-row">
          <span class="p-price-current">Rs. ${(p.price || 18500).toLocaleString('en-IN')}.00</span>
          <span class="p-price-old">Rs. ${((p.price || 18500) * 2).toLocaleString('en-IN')}.00</span>
        </div>
      </div>
    </div>
  `;
    }).join('');
}

window.filterCategory = function(catKey, btnEl) {
  if (btnEl) {
    const parent = btnEl.parentElement;
    if (parent) {
      parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    }
    btnEl.classList.add('active');
  }
  renderCatalog(catKey);
};

window.filterCatalog = function(categoryKey) {
  renderCatalog(categoryKey);
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
    const msg = `Hello Sailaab's Design House (+91 92193 40149),

Custom Rug Specs:
- Style: ${style}
- Dimensions: ${w} Ft × ${l} Ft (${area} Sq. Ft.)
- Shape: ${shape}

Please share price quote.`;
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
      const waMsg = `Hello Sailaab's Design House,

New Inquiry:
- Name: ${name}
- Phone: ${phone}
- Message: ${msg}`;
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

// ── PRODUCT DETAIL MODAL WITH COUPON & SIZES ────────────────────────────────
window.openModal = function(id) {
  if (touchIsScrolling) return;
  const p = productsData.find(prod => prod.id === id);
  if (!p) return;

  const modal = document.getElementById('product-modal');
  const modalBody = document.getElementById('modal-body');
  const isClient = document.body.classList.contains('client-preview');

  let selectedSize = (p.sizes && p.sizes[0]) || "5×8 Ft";
  let sizeMultiplier = 1.0;
  let appliedCoupon = null;
  let discountAmount = 0;
  let qty = 1;

  function calculatePrice() {
    let basePrice = (p.price || 18500);
    if (selectedSize.includes('6×9')) sizeMultiplier = 1.3;
    else if (selectedSize.includes('8×10')) sizeMultiplier = 1.7;
    else if (selectedSize.includes('9×12')) sizeMultiplier = 2.3;
    else if (selectedSize.includes('10×14')) sizeMultiplier = 2.8;
    else sizeMultiplier = 1.0;

    let totalBeforeDiscount = Math.round(basePrice * sizeMultiplier) * qty;
    discountAmount = 0;

    if (appliedCoupon === 'SAILAAB10') {
      discountAmount = Math.round(totalBeforeDiscount * 0.10);
    } else if (appliedCoupon === 'WELCOME500') {
      discountAmount = 500;
    } else if (appliedCoupon === 'BHADOHI15') {
      discountAmount = Math.round(totalBeforeDiscount * 0.15);
    } else if (appliedCoupon === 'FESTIVE20') {
      discountAmount = Math.round(totalBeforeDiscount * 0.20);
    }

    let finalPrice = Math.max(0, totalBeforeDiscount - discountAmount);
    return { totalBeforeDiscount, discountAmount, finalPrice };
  }

  function updateModalUI() {
    const { totalBeforeDiscount, discountAmount, finalPrice } = calculatePrice();
    const priceDisplay = document.getElementById('modal-price-display');
    const oldPriceDisplay = document.getElementById('modal-old-price-display');
    const couponMsg = document.getElementById('modal-coupon-msg');
    const waBtn = document.getElementById('modal-wa-btn');

    if (priceDisplay) priceDisplay.textContent = `₹${finalPrice.toLocaleString('en-IN')}`;
    if (oldPriceDisplay) oldPriceDisplay.textContent = `₹${(totalBeforeDiscount * 2).toLocaleString('en-IN')}`;

    if (couponMsg) {
      if (appliedCoupon && discountAmount > 0) {
        couponMsg.className = 'coupon-msg success';
        couponMsg.innerHTML = `<i class="fa-solid fa-circle-check"></i> Coupon <strong>${appliedCoupon}</strong> applied! Saved ₹${discountAmount.toLocaleString('en-IN')}`;
      } else if (appliedCoupon) {
        couponMsg.className = 'coupon-msg error';
        couponMsg.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Invalid Coupon Code. Try <strong>SAILAAB10</strong> or <strong>WELCOME500</strong>`;
      } else {
        couponMsg.className = 'coupon-msg';
        couponMsg.textContent = '';
      }
    }

    if (waBtn && !isClient) {
      const waText = `Hello Sailaab's Design House! I want to order:
- Carpet: ${p.name}
- Size: ${selectedSize}
- Quantity: ${qty}
- Final Price: ₹${finalPrice.toLocaleString('en-IN')} ${appliedCoupon ? '(Coupon ' + appliedCoupon + ' applied)' : ''}

Please share delivery & loom dispatch time.`;
      waBtn.href = `https://wa.me/919219340149?text=${encodeURIComponent(waText)}`;
    }
  }

  const sizePillsHtml = (p.sizes || ["5×8 Ft", "6×9 Ft", "8×10 Ft", "9×12 Ft"]).map((s, i) => `
    <button type="button" class="size-pill ${i === 0 ? 'active' : ''}" data-size="${s}">
      ${s}
    </button>
  `).join('');

  const isWishlisted = getWishlist().includes(p.id);

  modalBody.innerHTML = `
    <div class="modal-img-wrap">
      <img src="${p.image}" alt="${p.name}" decoding="async" class="modal-carpet-img">
      <span class="modal-discount-badge">-50% OFF</span>
    </div>
    <div class="modal-content-details">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-top:12px">
        <div>
          <span class="modal-category-tag">${p.category.toUpperCase()} • ${p.badge}</span>
          <h3 class="modal-title">${p.name}</h3>
        </div>
        <button class="modal-wishlist-toggle ${isWishlisted ? 'active' : ''}" id="modal-wishlist-btn" title="Add to Wishlist">
          <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>
      </div>

      <div class="modal-price-box">
        <span class="modal-current-price" id="modal-price-display">₹${(p.price || 18500).toLocaleString('en-IN')}</span>
        <span class="modal-old-price" id="modal-old-price-display">₹${((p.price || 18500) * 2).toLocaleString('en-IN')}</span>
        <span class="modal-tax-tag">Inclusive of All Taxes • Free Shipping</span>
      </div>

      <p class="modal-desc">${p.description}</p>
      
      <!-- Size Selector -->
      <div class="modal-section-block">
        <label class="modal-block-label"><i class="fa-solid fa-ruler-combined"></i> Select Loom Size:</label>
        <div class="modal-size-pills" id="modal-size-pills">
          ${sizePillsHtml}
        </div>
      </div>

      <!-- Specs -->
      <div class="modal-specs-box">
        <p><strong>Material:</strong> ${p.material}</p>
        <p><strong>Density:</strong> ${p.density}</p>
        <p><strong>Origin:</strong> Handcrafted in Bhadohi & Varanasi Looms</p>
      </div>

      <!-- Coupon Code Apply Box -->
      <div class="modal-section-block coupon-section">
        <label class="modal-block-label"><i class="fa-solid fa-ticket"></i> Apply Discount Coupon:</label>
        <div class="coupon-input-group">
          <input type="text" id="modal-coupon-input" placeholder="e.g. SAILAAB10, WELCOME500" uppercase>
          <button type="button" id="modal-apply-coupon-btn" class="coupon-apply-btn">APPLY</button>
        </div>
        <div class="quick-coupon-pills">
          <span class="quick-coupon-pill" data-code="SAILAAB10">🏷️ SAILAAB10 (10% OFF)</span>
          <span class="quick-coupon-pill" data-code="WELCOME500">🏷️ WELCOME500 (₹500 OFF)</span>
          <span class="quick-coupon-pill" data-code="BHADOHI15">🏷️ BHADOHI15 (15% OFF)</span>
        </div>
        <div id="modal-coupon-msg" class="coupon-msg"></div>
      </div>

      <!-- Quantity Row -->
      <div class="modal-qty-row">
        <span style="font-weight:600;font-size:14px;color:#333">Quantity:</span>
        <div class="qty-counter">
          <button type="button" id="modal-qty-minus">-</button>
          <span id="modal-qty-val">1</span>
          <button type="button" id="modal-qty-plus">+</button>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="modal-action-row">
        <button type="button" class="btn btn-modal-add-cart" id="modal-add-cart-btn">
          <i class="fa-solid fa-bag-shopping"></i> ADD TO CART
        </button>
        <a href="#" target="_blank" rel="noopener noreferrer" class="btn btn-modal-wa" id="modal-wa-btn">
          <i class="fa-brands fa-whatsapp"></i> ORDER ON WHATSAPP
        </a>
      </div>
    </div>`;

  // Attach Listeners inside Modal
  const pillBtns = modalBody.querySelectorAll('.size-pill');
  pillBtns.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      pillBtns.forEach(b => b.classList.remove('active'));
      pill.classList.add('active');
      selectedSize = pill.getAttribute('data-size');
      updateModalUI();
    });
  });

  // Coupon Apply
  const couponInput = document.getElementById('modal-coupon-input');
  const applyBtn = document.getElementById('modal-apply-coupon-btn');
  const quickPills = modalBody.querySelectorAll('.quick-coupon-pill');

  function triggerApply(code) {
    appliedCoupon = (code || couponInput?.value || '').trim().toUpperCase();
    if (couponInput) couponInput.value = appliedCoupon;
    updateModalUI();
  }

  applyBtn?.addEventListener('click', () => triggerApply());
  quickPills.forEach(qp => {
    qp.addEventListener('click', () => triggerApply(qp.getAttribute('data-code')));
  });

  // Quantity Counter
  const minusBtn = document.getElementById('modal-qty-minus');
  const plusBtn = document.getElementById('modal-qty-plus');
  const qtyVal = document.getElementById('modal-qty-val');

  minusBtn?.addEventListener('click', () => {
    if (qty > 1) { qty--; if (qtyVal) qtyVal.textContent = qty; updateModalUI(); }
  });
  plusBtn?.addEventListener('click', () => {
    qty++; if (qtyVal) qtyVal.textContent = qty; updateModalUI();
  });

  // Wishlist toggle inside modal
  const modalWishlistBtn = document.getElementById('modal-wishlist-btn');
  modalWishlistBtn?.addEventListener('click', () => {
    toggleWishlist(p.id);
    const activeNow = getWishlist().includes(p.id);
    modalWishlistBtn.classList.toggle('active', activeNow);
    modalWishlistBtn.querySelector('i').className = activeNow ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
  });

  // Add to Cart
  const addCartBtn = document.getElementById('modal-add-cart-btn');
  addCartBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const { finalPrice } = calculatePrice();
    addToCart(p.id, selectedSize, null, finalPrice, qty);
    modal.classList.remove('active');
  });

  updateModalUI();
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

function updateCartBadge() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  document.querySelectorAll('.cart-badge, #bottom-cart-badge').forEach(b => {
    b.textContent = totalItems;
  });
  const countText = document.getElementById('cart-items-count-text');
  if (countText) countText.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;
}

window.addToCart = function(productId, customSize = null, event = null, customPrice = null, quantity = 1) {
  if (event) event.stopPropagation();
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const size = customSize || (product.sizes && product.sizes[0]) || "5×8 Ft";
  const price = customPrice || product.price || 18500;
  const cart = getCart();

  const existingIdx = cart.findIndex(item => item.id === productId && item.size === size);
  if (existingIdx > -1) {
    cart[existingIdx].qty += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      material: product.material,
      image: product.image,
      sizes: product.sizes || ["5×8 Ft"],
      size: size,
      price: price,
      qty: quantity
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

function initCartEvents() {
  const cartBtn = document.getElementById('header-cart-btn');
  const bottomCartBtn = document.getElementById('bottom-nav-cart');
  const drawer = document.getElementById('cart-drawer');
  const closeBtn = document.getElementById('cart-close-btn');
  const backdrop = document.getElementById('cart-backdrop');
  const clearBtn = document.getElementById('btn-clear-cart');
  const checkoutBtn = document.getElementById('btn-whatsapp-checkout');

  function openCart() {
    renderCartDrawer();
    drawer?.classList.add('active');
    backdrop?.classList.add('active');
  }

  function closeCart() {
    drawer?.classList.remove('active');
    backdrop?.classList.remove('active');
  }

  cartBtn?.addEventListener('click', openCart);
  bottomCartBtn?.addEventListener('click', openCart);
  closeBtn?.addEventListener('click', closeCart);
  backdrop?.addEventListener('click', closeCart);

  clearBtn?.addEventListener('click', () => {
    saveCart([]);
    showCartToast('Cleared shopping cart.');
  });

  checkoutBtn?.addEventListener('click', () => {
    const cart = getCart();
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    let summary = `Hello Sailaab's Design House (+91 92193 40149),

I would like to order the following bespoke carpets:

`;
    let total = 0;

    cart.forEach((item, i) => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;
      summary += `${i + 1}. ${item.name}
   - Size: ${item.size}
   - Qty: ${item.qty}
   - Price: ₹${itemTotal.toLocaleString('en-IN')}

`;
    });

    summary += `Total Order Amount: ₹${total.toLocaleString('en-IN')}

Please share dispatch timeline & showroom payment details.`;
    window.open(`https://wa.me/919219340149?text=${encodeURIComponent(summary)}`, '_blank');
  });
}

function renderCartDrawer() {
  const body = document.getElementById('cart-items-body');
  const totalEl = document.getElementById('cart-total-price');
  if (!body) return;

  const cart = getCart();
  if (cart.length === 0) {
    body.innerHTML = `
      <div style="text-align:center;padding:40px 20px;color:#777">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5" style="margin:0 auto 12px;display:block">
          <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
        <p style="font-size:15px;font-weight:600;color:#222;margin-bottom:6px">Your Cart is Empty</p>
        <p style="font-size:13px;line-height:1.5">Browse our luxury Bhadohi hand-knotted collection and select carpets for your space.</p>
      </div>`;
    if (totalEl) totalEl.textContent = '₹0';
    return;
  }

  let total = 0;
  body.innerHTML = cart.map((item, idx) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    return `
      <div class="cart-item-row" style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid #eee;align-items:center">
        <img src="${item.image}" alt="${item.name}" style="width:64px;height:64px;object-fit:cover;border-radius:6px">
        <div style="flex:1">
          <h4 style="font-size:13.5px;font-weight:600;margin:0 0 2px;line-height:1.3;color:#111">${item.name}</h4>
          <div style="font-size:11.5px;color:#666;margin-bottom:4px">Size: <strong>${item.size}</strong></div>
          <div style="font-size:13px;font-weight:700;color:var(--accent-burgundy)">₹${itemTotal.toLocaleString('en-IN')}</div>
        </div>
        <div style="display:flex;align-items:center;gap:6px">
          <button onclick="updateCartQty(${idx}, -1)" style="width:24px;height:24px;border:1px solid #ccc;background:#f9f9f9;border-radius:3px;font-weight:700;cursor:pointer">-</button>
          <span style="font-size:13px;font-weight:700;width:16px;text-align:center">${item.qty}</span>
          <button onclick="updateCartQty(${idx}, 1)" style="width:24px;height:24px;border:1px solid #ccc;background:#f9f9f9;border-radius:3px;font-weight:700;cursor:pointer">+</button>
          <button onclick="removeFromCart(${idx})" style="background:none;border:none;color:#999;font-size:13px;margin-left:4px;cursor:pointer">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (totalEl) totalEl.textContent = `₹${total.toLocaleString('en-IN')}`;
}

function showCartToast(msg) {
  const toast = document.getElementById('cart-toast');
  const toastMsg = document.getElementById('toast-message');
  if (toast && toastMsg) {
    toastMsg.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
}

function initFaqAccordion() {
  const accs = document.querySelectorAll('.faq-accordion-item');
  accs.forEach(acc => {
    const q = acc.querySelector('.faq-q');
    q?.addEventListener('click', () => {
      accs.forEach(other => { if (other !== acc) other.classList.remove('active'); });
      acc.classList.toggle('active');
    });
  });
}

function initNavScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(l => {
    l.addEventListener('click', (e) => {
      const targetId = l.getAttribute('href')?.replace('#', '');
      if (!targetId || targetId === 'home') return;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const closeBtn = document.getElementById('mobile-nav-close');
  const backdrop = document.getElementById('mobile-nav-backdrop');

  function openDrawer() {
    drawer?.classList.add('active');
    backdrop?.classList.add('active');
  }

  function closeDrawer() {
    drawer?.classList.remove('active');
    backdrop?.classList.remove('active');
  }

  hamburger?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);
}

function initReviewsTape() {
  const track = document.getElementById('reviewsSliderTrack');
  const prevBtn = document.getElementById('reviewsPrevBtn');
  const nextBtn = document.getElementById('reviewsNextBtn');
  const dotsContainer = document.getElementById('reviewsDots');

  if (!track) return;

  const cards = track.querySelectorAll('.luxury-testimonial-card');
  if (cards.length === 0) return;

  // Build pagination dots dynamically
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    cards.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = `reviews-dot ${idx === 0 ? 'active' : ''}`;
      dot.ariaLabel = `Go to review slide ${idx + 1}`;
      dot.addEventListener('click', () => {
        const cardWidth = cards[0].offsetWidth + 24;
        track.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
      });
      dotsContainer.appendChild(dot);
    });
  }

  // Prev / Next button click handlers
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const cardWidth = cards[0].offsetWidth + 24;
      track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const cardWidth = cards[0].offsetWidth + 24;
      track.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
  }

  // Update active indicator dot on scroll
  track.addEventListener('scroll', () => {
    if (!dotsContainer) return;
    const cardWidth = cards[0].offsetWidth + 24;
    const activeIndex = Math.round(track.scrollLeft / cardWidth);
    const dots = dotsContainer.querySelectorAll('.reviews-dot');
    dots.forEach((dot, idx) => {
      if (idx === activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  });
}

window.showAccountToast = function() {
  showCartToast('🔑 Customer Login & Order History coming soon! Contact support on WhatsApp.');
};
