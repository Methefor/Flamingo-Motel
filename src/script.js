import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

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

// ── BOOT ─────────────────────────────────────────────────────────────────
function boot() {
  initSlideshow();
  initHeroEntrance();
  initClock();
  initNavEffect();
  initCardHover();
  initRevealAnimations();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
