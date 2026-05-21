import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { TRANSLATIONS } from './translations.js';

gsap.registerPlugin(ScrollTrigger);

// ── LENIS ────────────────────────────────────────────────────────────────
const lenis = new Lenis({
  duration: 1.4,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(time => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// ── CINEMATIC SLIDESHOW ───────────────────────────────────────────────────
// Each slide shows for HOLD_MS, then cross-fades over FADE_MS
const HOLD_MS = 6000;
const FADE_MS = 1800;

function initSlideshow() {
  const slides  = Array.from(document.querySelectorAll('.hero-slideshow .slide'));
  const counter = document.querySelector('.counter-current');
  if (!slides.length) return;

  let current = 0;

  function goTo(next) {
    const cur  = slides[current];
    const nxt  = slides[next];
    const num  = String(next + 1).padStart(2, '0');

    // Cross-fade
    gsap.to(cur,  { opacity: 0, duration: FADE_MS / 1000, ease: 'power2.inOut' });
    gsap.fromTo(nxt,
      { opacity: 0 },
      { opacity: 1, duration: FADE_MS / 1000, ease: 'power2.inOut' },
    );

    // Counter
    if (counter) {
      gsap.to(counter, { opacity: 0, y: -6, duration: 0.25, onComplete: () => {
        counter.textContent = num;
        gsap.to(counter, { opacity: 1, y: 0, duration: 0.25 });
      }});
    }

    current = next;
  }

  // Start first slide — others start invisible (CSS sets opacity:0 on slide-2, slide-3)
  let timer = setInterval(() => {
    goTo((current + 1) % slides.length);
  }, HOLD_MS);

  // Pause on hover (desktop)
  const hero = document.getElementById('hero');
  hero.addEventListener('mouseenter', () => clearInterval(timer));
  hero.addEventListener('mouseleave', () => {
    timer = setInterval(() => goTo((current + 1) % slides.length), HOLD_MS);
  });
}

// ── HERO ENTRANCE ────────────────────────────────────────────────────────
function initHeroEntrance() {
  // Slide 1 fades in (CSS starts it at opacity:0, GSAP reveals it)
  gsap.to('.slide-1', { opacity: 1, duration: 1.6, ease: 'power2.out', delay: 0.1 });

  gsap.fromTo('.hero-headline .line',
    { y: '110%', opacity: 0, rotateZ: 2 },
    { y: '0%', opacity: 1, rotateZ: 0, duration: 1.3, stagger: 0.12, ease: 'power4.out', delay: 0.6 },
  );
  gsap.fromTo('.hero-label',   { opacity: 0, x: -14 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 });
  gsap.fromTo('.hero-sub',     { opacity: 0, y: 20  }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 1.6 });
  gsap.fromTo('.hero-cta-row', { opacity: 0, y: 14  }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 2.0 });
  gsap.fromTo('.hero-slide-counter', { opacity: 0   }, { opacity: 1, duration: 1,   ease: 'power2.out', delay: 2.4 });
  gsap.fromTo('#site-nav',     { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.15 });
}

// ── SCROLL REVEALS ───────────────────────────────────────────────────────
function initRevealAnimations() {
  gsap.utils.toArray('.reveal-text').forEach(el => {
    gsap.fromTo(el,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' } },
    );
  });
  gsap.utils.toArray('.practice-item').forEach((item, i) => {
    gsap.fromTo(item,
      { x: -22, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.65, ease: 'power3.out', delay: i * 0.07,
        scrollTrigger: { trigger: item, start: 'top 87%' } },
    );
  });
  gsap.utils.toArray('.field-card').forEach((card, i) => {
    gsap.fromTo(card,
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.75, ease: 'power3.out', delay: i * 0.09,
        scrollTrigger: { trigger: card, start: 'top 88%' } },
    );
  });
}

// ── NAV ──────────────────────────────────────────────────────────────────
function initNavEffect() {
  const nav = document.getElementById('site-nav');
  ScrollTrigger.create({
    start: '80px top',
    onEnter:     () => nav.classList.add('scrolled'),
    onLeaveBack: () => nav.classList.remove('scrolled'),
  });
}

// ── CLOCK ────────────────────────────────────────────────────────────────
function initClock() {
  const el = document.getElementById('live-time');
  if (!el) return;
  const tick = () => {
    el.textContent = new Date().toLocaleTimeString('tr-TR', {
      timeZone: 'Europe/Istanbul', hour12: false,
    });
  };
  tick();
  setInterval(tick, 1000);
}

// ── CARD HOVER ───────────────────────────────────────────────────────────
function initCardHover() {
  document.querySelectorAll('.field-card').forEach(card => {
    const img = card.querySelector('.field-card-img');
    card.addEventListener('mouseenter', () => gsap.to(img, { scale: 1.04, duration: 0.5, ease: 'power2.out' }));
    card.addEventListener('mouseleave', () => gsap.to(img, { scale: 1,    duration: 0.5, ease: 'power2.inOut' }));
  });
}

// ── PRELOADER ─────────────────────────────────────────────────────────────
function initPreloader() {
  const pl = document.getElementById('preloader');
  if (!pl) { initHeroEntrance(); return; }

  const start = () => {
    setTimeout(() => {
      pl.classList.add('done');
      setTimeout(initHeroEntrance, 700);
    }, 1800);
  };

  if (document.readyState === 'complete') {
    start();
  } else {
    window.addEventListener('load', start, { once: true });
  }
}

// ── FLOATING WHATSAPP BUTTON ──────────────────────────────────────────────
function initFAB() {
  const fab = document.getElementById('whatsappFab');
  if (!fab) return;
  ScrollTrigger.create({
    start: '100vh top',
    onEnter:     () => fab.classList.add('visible'),
    onLeaveBack: () => fab.classList.remove('visible'),
  });
}

// ── PHOTO GALLERY + LIGHTBOX ──────────────────────────────────────────────
function initGallery() {
  const thumbs = Array.from(document.querySelectorAll('.gallery-thumb'));
  const lb     = document.getElementById('lightbox');
  const lbImg  = document.getElementById('lbImg');
  const lbCtr  = document.getElementById('lbCounter');
  if (!thumbs.length || !lb) return;

  let current = 0;
  const total = thumbs.length;

  const open = i => {
    current = ((i % total) + total) % total;
    lbImg.src = thumbs[current].dataset.src;
    lbImg.alt = thumbs[current].getAttribute('aria-label') || '';
    if (lbCtr) lbCtr.textContent = `${current + 1} / ${total}`;
    lb.classList.add('active');
    lb.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    lb.classList.remove('active');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => { lbImg.src = ''; }, 350);
  };

  thumbs.forEach((t, i) => t.addEventListener('click', () => open(i)));
  document.getElementById('lbClose').addEventListener('click', close);
  document.getElementById('lbPrev').addEventListener('click',  () => open(current - 1));
  document.getElementById('lbNext').addEventListener('click',  () => open(current + 1));
  lb.addEventListener('click', e => { if (e.target === lb) close(); });

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('active')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  open(current - 1);
    if (e.key === 'ArrowRight') open(current + 1);
  });
}

// ── LANGUAGE SWITCHER ─────────────────────────────────────────────────────
let currentLang = localStorage.getItem('fm-lang') || 'tr';

function applyLang(lang) {
  const T   = TRANSLATIONS[lang] || TRANSLATIONS.tr;
  const txt = (sel, key) => { const el = document.querySelector(sel); if (el) el.textContent = T[key]; };
  const htm = (sel, key) => { const el = document.querySelector(sel); if (el) el.innerHTML   = T[key]; };

  // Nav
  txt('.nav-cta', 'nav.cta');
  document.querySelectorAll('.nav-links a').forEach((a, i) => {
    const k = `nav.tip.${i + 1}`;
    if (T[k]) a.dataset.label = T[k];
  });

  // Hero
  txt('.hero-label',    'hero.label');
  txt('.line-1',        'hero.line1');
  txt('.line-2 em',     'hero.line2');
  htm('.hero-sub',      'hero.sub');
  txt('.btn-ghost',     'hero.cta.ghost');
  txt('.minimap-label', 'hero.maplabel');
  const heroCta = document.querySelector('.hero-cta-row .btn-primary');
  if (heroCta) heroCta.lastChild.textContent = ' ' + T['hero.cta.main'];

  // Reviews
  txt('.section-reviews .section-eyebrow', 'r.eyebrow');
  htm('.section-reviews .section-heading', 'r.heading');
  txt('.reviews-intro', 'r.intro');

  // Services
  txt('.section-practice .section-eyebrow', 's.eyebrow');
  htm('.section-practice .section-heading', 's.heading');
  document.querySelectorAll('.practice-name').forEach((el, i) => { el.textContent = T[`s.0${i+1}.n`] || el.textContent; });
  document.querySelectorAll('.practice-desc').forEach((el, i) => { el.textContent = T[`s.0${i+1}.d`] || el.textContent; });

  // Rooms
  txt('.section-field .section-eyebrow', 'rm.eyebrow');
  htm('.section-field .section-heading', 'rm.heading');
  document.querySelectorAll('.field-card-client').forEach((el, i) => { el.textContent = T[`rm.c${i+1}`] || el.textContent; });
  txt('.field-cta .btn-primary', 'rm.cta');

  // Gallery
  txt('.section-gallery .section-eyebrow', 'g.eyebrow');
  htm('.section-gallery .section-heading', 'g.heading');

  // Approach
  txt('.section-approach .section-eyebrow', 'ap.eyebrow');
  htm('.section-approach .section-heading', 'ap.heading');
  document.querySelectorAll('.approach-col h3').forEach((el, i) => { el.textContent = T[`ap.c${i+1}.h`] || el.textContent; });
  document.querySelectorAll('.approach-col p').forEach((el,  i) => { el.textContent = T[`ap.c${i+1}.p`] || el.textContent; });

  // Contact
  txt('.section-conversation .section-eyebrow', 'c.eyebrow');
  htm('.conversation-heading', 'c.heading');
  txt('.conversation-sub',     'c.sub');
  const lbls = document.querySelectorAll('.contact-info-label');
  if (lbls[0]) lbls[0].textContent = T['c.addr.lbl'];
  if (lbls[1]) lbls[1].textContent = T['c.phone.lbl'];
  if (lbls[2]) lbls[2].textContent = T['c.links.lbl'];
  const addrEl = document.querySelector('.contact-info-block p:not(.contact-info-label)');
  if (addrEl) addrEl.innerHTML = T['c.addr.val'];

  // Footer
  const ftSpans = document.querySelectorAll('.site-footer span');
  if (ftSpans[2]) ftSpans[2].textContent = T['footer.rights'];

  // FAB aria
  const fab = document.getElementById('whatsappFab');
  if (fab) fab.setAttribute('aria-label', T['fab.label']);

  currentLang = lang;
  localStorage.setItem('fm-lang', lang);
  document.documentElement.lang = lang;
}

function initLangSwitcher() {
  const btns = document.querySelectorAll('.lang-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      applyLang(btn.dataset.lang);
    });
  });

  if (currentLang !== 'tr') {
    const saved = document.querySelector(`.lang-btn[data-lang="${currentLang}"]`);
    if (saved) {
      btns.forEach(b => b.classList.remove('is-active'));
      saved.classList.add('is-active');
      applyLang(currentLang);
    }
  }
}

// ── BOOT ─────────────────────────────────────────────────────────────────
function boot() {
  initSlideshow();
  initClock();
  initNavEffect();
  initCardHover();
  initRevealAnimations();
  initFAB();
  initGallery();
  initLangSwitcher();
  initPreloader(); // triggers hero entrance after logo animates out
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
