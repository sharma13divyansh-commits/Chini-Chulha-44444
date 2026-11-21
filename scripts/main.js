
const getCategories = () => (typeof MENU_CATEGORIES !== 'undefined' ? MENU_CATEGORIES : (window.MENU_CATEGORIES || []));
const getMenuItems = () => (typeof MENU_ITEMS !== 'undefined' ? MENU_ITEMS : (window.MENU_ITEMS || []));
const getGalleryItems = () => (typeof GALLERY_ITEMS !== 'undefined' ? GALLERY_ITEMS : (window.GALLERY_ITEMS || []));

/**
 * CHINI CHULHA - PREMIUM RESTAURANT INTERACTIVITY & SCRIPTING
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.querySelector('.site-header');
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const backToTopBtn = document.getElementById('backToTop');
  const statusBadge = document.getElementById('liveStatusBadge');
  const toastMsg = document.getElementById('toastMsg');

  // Menu Elements
  const categoryTabsContainer = document.getElementById('categoryTabs');
  const menuGrid = document.getElementById('menuGrid');
  const menuSearchInput = document.getElementById('menuSearchInput');
  const dietPills = document.querySelectorAll('.diet-pill');
  const originalMenuModal = document.getElementById('originalMenuModal');
  const openMenuModalBtn = document.getElementById('openMenuModalBtn');
  const closeMenuModalBtn = document.getElementById('closeMenuModalBtn');

  // Gallery Elements
  const galleryGrid = document.getElementById('galleryGrid');
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  // State
  let currentCategory = 'all';
  let currentDiet = 'all';
  let searchQuery = '';
  let currentLightboxIndex = 0;
  let activeGalleryItems = [];

  // ==========================================
  // 1. LIVE OPENING HOURS STATUS (12 PM - 12 AM IST)
  // ==========================================
  function updateLiveStatus() {
    if (!statusBadge) return;
    
    // Calculate current time in IST (UTC+5.5)
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const istTime = new Date(utcTime + (3600000 * 5.5));
    const hours = istTime.getHours();

    // Open from 12:00 PM (12) to 12:00 AM (midnight, 0 or 24)
    // In 24h: 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23 are open
    const isOpen = (hours >= 12 && hours < 24);

    if (isOpen) {
      statusBadge.innerHTML = `
        <span class="status-dot"></span>
        <span class="hero-badge-text">Open Today • 12:00 PM – 12:00 AM</span>
      `;
    } else {
      statusBadge.innerHTML = `
        <span class="status-dot" style="background:#f59e0b; box-shadow:0 0 10px #f59e0b;"></span>
        <span class="hero-badge-text" style="color:#f59e0b;">Opens at 12:00 PM Today</span>
      `;
    }
  }
  updateLiveStatus();

  // ==========================================
  // 2. HEADER SCROLL & STICKY NAVBAR
  // ==========================================
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      if (backToTopBtn) backToTopBtn.classList.add('visible');
    } else {
      header.classList.remove('scrolled');
      if (backToTopBtn) backToTopBtn.classList.remove('visible');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================
  // 3. MOBILE NAVIGATION DRAWER
  // ==========================================
  function openMobileNav() {
    mobileNav.classList.add('open');
    mobileNavBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    mobileNavBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (navToggle) navToggle.addEventListener('click', openMobileNav);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileNav);
  if (mobileNavBackdrop) mobileNavBackdrop.addEventListener('click', closeMobileNav);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });

  // ==========================================
  // 4. SCROLLSPY ACTIVE LINK HIGHLIGHTING
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // ==========================================
  // 5. TOAST NOTIFICATION HELPER
  // ==========================================
  function showToast(message) {
    if (!toastMsg) return;
    toastMsg.textContent = message;
    toastMsg.classList.add('show');
    setTimeout(() => {
      toastMsg.classList.remove('show');
    }, 2800);
  }

  // Copy to clipboard helper
  window.copyToClipboard = function(text, label) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied ${label} to clipboard!`);
      }).catch(() => {
        showToast(`Phone: ${text}`);
      });
    } else {
      showToast(`Phone: ${text}`);
    }
  };

  // ==========================================
  // 6. RENDER MENU CATEGORIES TABS
  // ==========================================
  function renderCategoryTabs() {
    if (!categoryTabsContainer) return;
    categoryTabsContainer.innerHTML = '';

    getCategories().forEach(cat => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `category-tab-btn ${cat.id === currentCategory ? 'active' : ''}`;
      btn.innerHTML = `<span class="cat-icon">${cat.icon}</span> <span>${cat.name}</span>`;
      btn.addEventListener('click', () => {
        currentCategory = cat.id;
        document.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        renderMenuItems();
      });
      categoryTabsContainer.appendChild(btn);
    });
  }

  // ==========================================
  // 7. RENDER MENU ITEMS
  // ==========================================
  function renderMenuItems() {
    if (!menuGrid) return;

    // Filter items
    const filtered = getMenuItems().filter(item => {
      // Category match
      const catMatch = (currentCategory === 'all' || item.categoryId === currentCategory);

      // Dietary match
      let dietMatch = true;
      if (currentDiet === 'veg') dietMatch = item.isVeg === true;
      if (currentDiet === 'nonveg') dietMatch = item.isNonVeg === true;

      // Search match
      let searchMatch = true;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        searchMatch = item.name.toLowerCase().includes(q) || 
                      (item.description && item.description.toLowerCase().includes(q)) ||
                      (item.extraNote && item.extraNote.toLowerCase().includes(q));
      }

      return catMatch && dietMatch && searchMatch;
    });

    if (filtered.length === 0) {
      menuGrid.innerHTML = `
        <div class="menu-empty-state">
          <i class="fa-solid fa-utensils"></i>
          <h3>No Menu Items Found</h3>
          <p>We couldn't find any dishes matching "${searchQuery}". Try selecting another category or clearing your search.</p>
        </div>
      `;
      return;
    }

    menuGrid.innerHTML = filtered.map(item => {
      // Veg / Non-Veg badge
      const dietMarkerHtml = item.isNonVeg
        ? `<div class="dietary-marker non-veg" title="Non-Vegetarian"></div>`
        : `<div class="dietary-marker veg" title="Vegetarian"></div>`;

      // Badge
      const badgeHtml = item.badge 
        ? `<div class="menu-card-badge">${item.badge}</div>` 
        : (item.popular ? `<div class="menu-card-badge">Popular</div>` : '');

      // Multi-size pricing or single price display
      let priceDisplayHtml = '';
      if (item.pricingType === 'sizes' && item.prices) {
        if (item.prices.s !== undefined) {
          // Pizza sizes: S, M, L
          priceDisplayHtml = `
            <div class="size-pricing-box">
              <span class="size-pricing-label">Portion Sizes & Prices</span>
              <div class="size-pill-row">
                <div class="size-pill">
                  <span class="size-name">Small (S)</span>
                  <span class="size-price">₹${item.prices.s}</span>
                </div>
                <div class="size-pill">
                  <span class="size-name">Medium (M)</span>
                  <span class="size-price">₹${item.prices.m}</span>
                </div>
                <div class="size-pill">
                  <span class="size-name">Large (L)</span>
                  <span class="size-price">₹${item.prices.l}</span>
                </div>
              </div>
            </div>
          `;
        } else if (item.prices.regular !== undefined) {
          // Beverage sizes: Regular, Large
          priceDisplayHtml = `
            <div class="size-pricing-box">
              <span class="size-pricing-label">Sizes & Prices</span>
              <div class="size-pill-row">
                <div class="size-pill">
                  <span class="size-name">Regular</span>
                  <span class="size-price">₹${item.prices.regular}</span>
                </div>
                <div class="size-pill">
                  <span class="size-name">Large</span>
                  <span class="size-price">₹${item.prices.large}</span>
                </div>
              </div>
            </div>
          `;
        }
      }

      // Top corner single price (or starting price)
      let headerPrice = '';
      if (item.pricingType === 'single') {
        headerPrice = `₹${item.price}`;
      } else if (item.prices && item.prices.s !== undefined) {
        headerPrice = `from ₹${item.prices.s}`;
      } else if (item.prices && item.prices.regular !== undefined) {
        headerPrice = `from ₹${item.prices.regular}`;
      }

      // Extra note (e.g. Cheese Burst topping)
      const extraNoteHtml = item.extraNote 
        ? `<div class="extra-note-box"><i class="fa-solid fa-cheese"></i> ${item.extraNote}</div>` 
        : '';

      // Get category name
      const categoryObj = getCategories().find(c => c.id === item.categoryId);
      const catDisplayName = categoryObj ? categoryObj.name : 'Delicious Food';

      // WhatsApp inquiry message
      const encodedMsg = encodeURIComponent(`Hi Chini Chulha! I'd like to ask about "${item.name}" from your menu.`);
      const waUrl = `https://wa.me/919650247114?text=${encodedMsg}`;

      return `
        <article class="menu-card" data-category="${item.categoryId}">
          <div class="menu-card-img-wrap">
            <img src="${item.image}" alt="${item.name} at Chini Chulha" loading="lazy" class="menu-card-img" />
            ${badgeHtml}
            ${dietMarkerHtml}
          </div>
          <div class="menu-card-content">
            <div class="menu-card-header">
              <h3 class="menu-card-title">${item.name}</h3>
              <div class="menu-card-price-tag">${headerPrice}</div>
            </div>
            <p class="menu-card-desc">${item.description || ''}</p>
            ${extraNoteHtml}
            ${priceDisplayHtml}
            <div class="menu-card-footer">
              <span class="category-tag">${catDisplayName}</span>
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-inquire" title="Inquire on WhatsApp">
                <i class="fa-brands fa-whatsapp"></i> Inquire
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Dietary filter click listeners
  dietPills.forEach(pill => {
    pill.addEventListener('click', () => {
      dietPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentDiet = pill.getAttribute('data-diet');
      renderMenuItems();
    });
  });

  // Search input listener
  if (menuSearchInput) {
    menuSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderMenuItems();
    });
  }

  // ==========================================
  // 8. ORIGINAL MENU MODAL
  // ==========================================
  if (openMenuModalBtn && originalMenuModal) {
    openMenuModalBtn.addEventListener('click', () => {
      originalMenuModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeMenuModalBtn && originalMenuModal) {
    closeMenuModalBtn.addEventListener('click', () => {
      originalMenuModal.classList.remove('active');
      document.body.style.overflow = '';
    });

    originalMenuModal.addEventListener('click', (e) => {
      if (e.target === originalMenuModal) {
        originalMenuModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ==========================================
  // 9. FOOD GALLERY & LIGHTBOX
  // ==========================================
  function renderGallery(filter = 'all') {
    if (!galleryGrid) return;

    activeGalleryItems = (filter === 'all')
      ? getGalleryItems()
      : getGalleryItems().filter(item => item.category === filter);

    galleryGrid.innerHTML = activeGalleryItems.map((item, index) => {
      const isFeatured = item.isRealStore ? 'featured' : '';
      const realBadgeHtml = item.isRealStore
        ? `<div class="gallery-real-badge"><i class="fa-solid fa-store"></i> Authentic Storefront</div>`
        : (item.isRealDish 
            ? `<div class="gallery-real-badge" style="border-color:var(--color-red); color:var(--color-red-light);"><i class="fa-solid fa-bowl-food"></i> Authentic Dish Photo</div>` 
            : '');

      return `
        <div class="gallery-item ${isFeatured}" data-index="${index}" onclick="openLightbox(${index})">
          <img src="${item.src}" alt="${item.title}" loading="lazy" />
          ${realBadgeHtml}
          <div class="gallery-item-overlay">
            <h4 class="gallery-item-title">${item.title}</h4>
            <p class="gallery-item-desc">${item.description}</p>
          </div>
        </div>
      `;
    }).join('');
  }

  // Filter gallery
  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderGallery(cat);
    });
  });

  // Lightbox functions
  window.openLightbox = function(index) {
    if (!lightboxModal || !activeGalleryItems[index]) return;
    currentLightboxIndex = index;
    updateLightboxContent();
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function updateLightboxContent() {
    const item = activeGalleryItems[currentLightboxIndex];
    if (!item) return;
    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.description;
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener('click', () => {
      currentLightboxIndex = (currentLightboxIndex - 1 + activeGalleryItems.length) % activeGalleryItems.length;
      updateLightboxContent();
    });
  }
  if (lightboxNextBtn) {
    lightboxNextBtn.addEventListener('click', () => {
      currentLightboxIndex = (currentLightboxIndex + 1) % activeGalleryItems.length;
      updateLightboxContent();
    });
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Keyboard navigation for modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightboxModal && lightboxModal.classList.contains('active')) closeLightbox();
      if (originalMenuModal && originalMenuModal.classList.contains('active')) {
        originalMenuModal.classList.remove('active');
        document.body.style.overflow = '';
      }
      if (mobileNav && mobileNav.classList.contains('open')) closeMobileNav();
    } else if (lightboxModal && lightboxModal.classList.contains('active')) {
      if (e.key === 'ArrowLeft') {
        currentLightboxIndex = (currentLightboxIndex - 1 + activeGalleryItems.length) % activeGalleryItems.length;
        updateLightboxContent();
      } else if (e.key === 'ArrowRight') {
        currentLightboxIndex = (currentLightboxIndex + 1) % activeGalleryItems.length;
        updateLightboxContent();
      }
    }
  });

  // ==========================================
  // INITIALIZATION
  // ==========================================
  renderCategoryTabs();
  renderMenuItems();
  renderGallery('all');
});
