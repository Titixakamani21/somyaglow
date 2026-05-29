/* ══════════════════════════════════════════════════════════════
   SOUMYA GLOW — script.js
   ══════════════════════════════════════════════════════════════ */

/* ── Data ───────────────────────────────────────────────────── */
const SOAPS = [
  {
    name: "Aloe Vera",
    benefit: "Deep hydration",
    price: 99,
    img: "images/aloe.png",
    desc: "Deeply hydrates and soothes dry, irritated skin. Rich in natural aloe vera gel and nourishing plant oils."
  },
  {
    name: "Neem + Charcoal",
    benefit: "Antibacterial, detox",
    price: 129,
    img: "images/neem-charcoal.png",
    desc: "Powerful antibacterial action from pure neem leaf. Activated charcoal draws out impurities from deep within pores."
  },
  {
    name: "Multani Mitti + Turmeric",
    benefit: "Brightening, cooling",
    price: 129,
    img: "images/haldi.png",
    desc: "Fuller's earth absorbs excess oil and cools skin. Turmeric brightens and evens skin tone."
  },
  {
    name: "Coffee",
    benefit: "Natural exfoliation",
    price: 109,
    img: "images/coffee.png",
    desc: "Finely ground coffee gently exfoliates dead skin cells, revealing smoother, brighter skin."
  },
  {
    name: "Coffee + Charcoal",
    benefit: "Deep detox",
    price: 199,
    img: "images/coffee-charcoal.png",
    desc: "The ultimate detox bar. Coffee exfoliates while activated charcoal performs a deep pore cleanse."
  },
  {
    name: "Rose",
    benefit: "Soothing, aromatic",
    price: 109,
    img: "images/rose.png",
    desc: "Infused with real rose petals and rose water. Soothes sensitive skin with a natural fragrance."
  },
  {
    name: "Multani Mitti",
    benefit: "Clarifying, balancing",
    price: 99,
    img: "images/multani.png",
    desc: "Pure Fuller's earth balances oily skin, minimises pores, and leaves skin feeling refreshed."
  }
];

const REASONS = [
  {
    title: "Pure Herbal Ingredients",
    desc: "Every bar is made with real herbs — no synthetic fragrances, no parabens, no SLS."
  },
  {
    title: "Handcrafted in Small Batches",
    desc: "Each bar is poured, cut, and cured by hand to ensure quality and freshness."
  },
  {
    title: "No Harsh Chemicals",
    desc: "Free from sulfates, parabens, artificial colors, and synthetic preservatives. Safe for all skin types."
  }
];

const TESTIMONIALS = [
  {
    quote: "I've been using the Neem + Charcoal soap for two months and my skin has never been clearer. No more breakouts.",
    name: "Ananya S.",
    location: "Bengaluru"
  },
  {
    quote: "The Rose soap smells incredible — not artificial at all. It's become a non-negotiable part of my morning ritual.",
    name: "Meera P.",
    location: "Mumbai"
  },
  {
    quote: "Ordered the Heritage Luxury Box as a Diwali gift for my mother. She absolutely loved it.",
    name: "Rohan K.",
    location: "Delhi"
  },
  {
    quote: "The Coffee soap is the best natural exfoliator I've ever used. My skin feels so smooth after every wash.",
    name: "Priya T.",
    location: "Pune"
  }
];

const HAMPERS = [
  {
    name: "The Classic Ritual",
    desc: "3 soaps of your choice — perfect for gifting or starting your herbal journey.",
    includes: "3 soaps of your choice",
    price: 299,
    tag: "Most Popular",
    highlight: false
  },
  {
    name: "The Glow Collection",
    desc: "Four handpicked soaps for a complete skincare ritual. Beautifully packaged.",
    includes: "4 soaps of your choice",
    price: 399,
    tag: "Best Value",
    highlight: true
  },
  {
    name: "Heritage Luxury Box",
    desc: "All 7 Soumya Glow soaps in our signature forest green gift box with gold ribbon.",
    includes: "All 7 soaps",
    price: 799,
    tag: "Complete Set",
    highlight: false
  },
  {
    name: "Corporate Gifting Set",
    desc: "Minimum 10 boxes. Custom branding available. Perfect for Diwali & corporate events.",
    includes: "Min 10 boxes, customizable",
    price: 699,
    tag: "Bulk Order",
    highlight: false,
    priceNote: "/box"
  }
];

/* ── Render Soap Cards ──────────────────────────────────────── */
const soapGrid = document.getElementById('soap-grid');
const soapOpts = document.getElementById('soap-options');

SOAPS.forEach((soap, i) => {
  const delay = (i % 4) * 60;

  const card = document.createElement('div');
  card.className = 'soap-card fade-up';
  if (delay) card.setAttribute('data-delay', delay);

  card.innerHTML = `
    <div class="soap-img-area">
      <img src="${soap.img}" alt="${soap.name}" />
    </div>
    <div class="soap-body">
      <h3 class="soap-name">${soap.name}</h3>
      <p class="soap-benefit">${soap.benefit}</p>
      <p class="soap-desc">${soap.desc}</p>
      <div class="soap-foot">
        <span class="soap-price">₹${soap.price}</span>
        <button
          class="btn-outline dark"
          style="min-height:34px;padding:5px 14px;font-size:0.72rem;"
          data-soap="${soap.name}"
        >Order</button>
      </div>
    </div>
  `;

  // Expand card on click
  card.addEventListener('click', () => card.classList.toggle('expanded'));

  // Order button — open WhatsApp (don't bubble to expand)
  card.querySelector('button').addEventListener('click', e => {
    e.stopPropagation();
    const msg = encodeURIComponent(`Hi! I'd like to order the ${soap.name} soap from Soumya Glow.`);
    window.open(`https://wa.me/919423569932?text=${msg}`, '_blank');
  });

  soapGrid.appendChild(card);

  // Populate order form dropdown
  const opt = document.createElement('option');
  opt.value   = `${soap.name} — ₹${soap.price}`;
  opt.textContent = `${soap.name} — ₹${soap.price}`;
  soapOpts.appendChild(opt);
});

/* ── Render Why Cards ───────────────────────────────────────── */
const whyGrid = document.getElementById('why-grid');

REASONS.forEach((r, i) => {
  const card = document.createElement('div');
  card.className = 'why-card fade-up';
  if (i) card.setAttribute('data-delay', i * 60);

  card.innerHTML = `
    <h3 class="why-title">${r.title}</h3>
    <p class="why-desc">${r.desc}</p>
  `;

  whyGrid.appendChild(card);
});

/* ── Render Testimonials ────────────────────────────────────── */
const testGrid = document.getElementById('test-grid');

TESTIMONIALS.forEach((t, i) => {
  const card = document.createElement('div');
  card.className = 'test-card fade-up';
  if (i) card.setAttribute('data-delay', i * 60);

  card.innerHTML = `
    <div class="test-stars">★★★★★</div>
    <p class="test-quote">"${t.quote}"</p>
    <div>
      <div class="test-name">${t.name}</div>
      <div class="test-loc">${t.location}</div>
    </div>
  `;

  testGrid.appendChild(card);
});

/* ── Render Hamper Cards ────────────────────────────────────── */
const hamperGrid = document.getElementById('hamper-grid');
const hamperOpts = document.getElementById('hamper-options');

HAMPERS.forEach((h, i) => {
  const card = document.createElement('div');
  card.className = `hamper-card ${h.highlight ? 'highlight' : 'normal'} fade-up`;
  if (i) card.setAttribute('data-delay', i * 60);

  card.innerHTML = `
    <span class="hamper-tag ${h.highlight ? 'highlight' : 'normal'}">${h.tag}</span>
    <h3 class="hamper-name">${h.name}</h3>
    <p class="hamper-desc">${h.desc}</p>
    <p class="hamper-includes">Includes: ${h.includes}</p>
    <div class="hamper-foot">
      <div>
        <span class="hamper-price">₹${h.price.toLocaleString('en-IN')}</span>
        ${h.priceNote ? `<span class="hamper-price-note">${h.priceNote}</span>` : ''}
      </div>
      <button class="btn-outline" style="min-height:34px;padding:5px 14px;font-size:0.72rem;">Enquire</button>
    </div>
  `;

  card.querySelector('button').addEventListener('click', () => {
    const msg = encodeURIComponent(`Hi! I'm interested in the "${h.name}" gift hamper from Soumya Glow.`);
    window.open(`https://wa.me/919423569932?text=${msg}`, '_blank');
  });

  hamperGrid.appendChild(card);

  // Populate order form dropdown
  const opt = document.createElement('option');
  opt.value       = `${h.name} — ₹${h.price}`;
  opt.textContent = `${h.name} — ₹${h.price}`;
  hamperOpts.appendChild(opt);
});

/* ── Footer Year ────────────────────────────────────────────── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ── Scroll Helpers ─────────────────────────────────────────── */
function navTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

/* ── Navigation Scroll State ────────────────────────────────── */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── Mobile Menu ────────────────────────────────────────────── */
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const ham  = document.getElementById('hamburger');
  const open = menu.classList.toggle('open');
  ham.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

function mobileNav(id) {
  toggleMenu();
  setTimeout(() => navTo(id), 300);
}

/* ── Order Form (WhatsApp pre-fill) ─────────────────────────── */
function submitOrder(e) {
  e.preventDefault();

  const name    = document.getElementById('o-name').value;
  const phone   = document.getElementById('o-phone').value;
  const product = document.getElementById('o-product').value;
  const qty     = document.getElementById('o-qty').value;
  const address = document.getElementById('o-address').value;
  const notes   = document.getElementById('o-notes').value;

  const msg = encodeURIComponent(
    `*New Order — Soumya Glow*\n\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Product: ${product}\n` +
    `Qty: ${qty}\n` +
    `Address: ${address}\n` +
    `Notes: ${notes || 'None'}`
  );

  window.open(`https://wa.me/919423569932?text=${msg}`, '_blank');
}

/* ── Contact Form (WhatsApp redirect) ───────────────────────── */
function submitContact(e) {
  e.preventDefault();

  const name    = document.getElementById('c-name').value;
  const email   = document.getElementById('c-email').value;
  const message = document.getElementById('c-message').value;
  const btn     = document.getElementById('c-submit');

  const msg = encodeURIComponent(`Hi! I'm ${name} (${email}).\n\n${message}`);
  window.open(`https://wa.me/919423569932?text=${msg}`, '_blank');

  btn.textContent = 'Opening WhatsApp…';
  setTimeout(() => { btn.textContent = 'Send Message'; }, 4000);
}

/* ── Intersection Observer — fade-up ────────────────────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ── Hero Entrance Animation ────────────────────────────────── */
setTimeout(() => {
  document.querySelectorAll('.hero-anim').forEach(el => el.classList.add('visible'));
}, 100);