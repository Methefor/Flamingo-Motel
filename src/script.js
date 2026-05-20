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

// ── FALLING IMAGES (Codrops "Made With GSAP") ────────────────────────────
function initFallingImages() {
  const root = document.getElementById('hero');
  const pool = root.querySelectorAll('.hero-media-pool img');
  const srcs = Array.from(pool).map(img => img.getAttribute('src'));

  let incr = 0, oldX = 0, oldY = 0, firstMove = true, idx = 0;

  const isTouch    = window.matchMedia('(hover: none)').matches;
  const resetDist  = window.innerWidth / (isTouch ? 5 : 9);

  const clampX = gsap.utils.clamp(0, window.innerWidth);
  const clampY = gsap.utils.clamp(0, window.innerHeight);

  function applyMove(cx, cy) {
    const x = clampX(cx);
    const y = clampY(cy);

    if (firstMove) { firstMove = false; oldX = x; oldY = y; return; }

    incr += Math.abs(x - oldX) + Math.abs(y - oldY);

    if (incr > resetDist) {
      incr = 0;
      spawnImage(x, y, x - oldX, y - oldY);
    }

    oldX = x; oldY = y;
  }

  function spawnImage(x, y, dx) {
    if (y > window.innerHeight - 140) return;

    const img = document.createElement('img');
    img.src       = srcs[idx];
    img.className = 'hero-falling-img';
    root.appendChild(img);

    const H = window.innerHeight;

    const tl = gsap.timeline({
      onComplete: () => {
        if (root.contains(img)) root.removeChild(img);
        tl.kill();
      },
    });

    // 1. Pop into existence with elastic scale-in
    tl.fromTo(img,
      { x, y, xPercent: -50, yPercent: -50, scaleX: 1.3, scaleY: 1.3, rotation: (Math.random() - 0.5) * 22, opacity: 1 },
      { scaleX: 1, scaleY: 1, ease: 'elastic.out(2, 0.6)', duration: 0.4 },
    );

    // 2. Drift sideways (parallel to scale-in)
    tl.fromTo(img, { x },
      { x: '+=' + dx * 2, rotation: 0, ease: 'power1.in', duration: 0.4 },
      '<',
    );

    // 3. Fall to bottom
    tl.fromTo(img, { y },
      { y: '+=' + (H - y), scale: 0.9, yPercent: -95, ease: 'back.in(1.1)', duration: 0.4 },
      '<',
    );

    // 4. Bounce
    tl.to(img, {
      x: '+=' + dx * 1.6,
      rotation: (Math.random() - 0.5) * 42,
      ease: 'power1.in',
      duration: 0.3,
    });
    tl.to(img, {
      yPercent: 150,
      ease: 'back.in(' + (1.5 + (1 - y / H)) + ')',
      duration: 0.3,
    }, '<');

    idx = (idx + 1) % srcs.length;
  }

  root.addEventListener('mousemove', e => applyMove(e.clientX, e.clientY));
  root.addEventListener('touchstart', e => {
    if (e.touches?.[0]) applyMove(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  root.addEventListener('touchmove', e => {
    if (e.touches?.[0]) applyMove(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
}

// ── GSAP HERO ENTRANCE ───────────────────────────────────────────────────
function initHeroEntrance() {
  const lines = document.querySelectorAll('.hero-headline .line');
  gsap.fromTo(lines,
    { y: '110%', opacity: 0, rotateZ: 2 },
    { y: '0%', opacity: 1, rotateZ: 0, duration: 1.3, stagger: 0.12, ease: 'power4.out', delay: 0.5 },
  );
  gsap.fromTo('.hero-label',
    { opacity: 0, x: -14 },
    { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 },
  );
  gsap.fromTo('.hero-sub',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 1.55 },
  );
  gsap.fromTo('.hero-cta-row',
    { opacity: 0, y: 14 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1.95 },
  );
  gsap.fromTo('.hero-hint',
    { opacity: 0 },
    { opacity: 1, duration: 1, ease: 'power2.out', delay: 3.0 },
  );
  gsap.fromTo('#site-nav',
    { opacity: 0, y: -12 },
    { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.15 },
  );
}

// ── SCROLL REVEALS ───────────────────────────────────────────────────────
function initRevealAnimations() {
  gsap.utils.toArray('.reveal-text').forEach(el => {
    gsap.fromTo(el,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      },
    );
  });

  gsap.utils.toArray('.practice-item').forEach((item, i) => {
    gsap.fromTo(item,
      { x: -22, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.65, ease: 'power3.out', delay: i * 0.07,
        scrollTrigger: { trigger: item, start: 'top 87%' },
      },
    );
  });

  gsap.utils.toArray('.field-card').forEach((card, i) => {
    gsap.fromTo(card,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 0.75, ease: 'power3.out', delay: i * 0.09,
        scrollTrigger: { trigger: card, start: 'top 88%' },
      },
    );
  });
}

// ── NAV SCROLL EFFECT ────────────────────────────────────────────────────
function initNavEffect() {
  const nav = document.getElementById('site-nav');
  ScrollTrigger.create({
    start: '80px top',
    onEnter:     () => nav.classList.add('scrolled'),
    onLeaveBack: () => nav.classList.remove('scrolled'),
  });
}

// ── LIVE CLOCK (Çanakkale / Istanbul time) ───────────────────────────────
function initClock() {
  const el = document.getElementById('live-time');
  if (!el) return;
  const tick = () => {
    el.textContent = new Date().toLocaleTimeString('tr-TR', {
      timeZone: 'Europe/Istanbul',
      hour12:   false,
    });
  };
  tick();
  setInterval(tick, 1000);
}

// ── FIELD CARD HOVER ─────────────────────────────────────────────────────
function initCardHover() {
  document.querySelectorAll('.field-card').forEach(card => {
    const img = card.querySelector('.field-card-img');
    card.addEventListener('mouseenter', () => gsap.to(img, { scale: 1.04, duration: 0.5, ease: 'power2.out' }));
    card.addEventListener('mouseleave', () => gsap.to(img, { scale: 1,    duration: 0.5, ease: 'power2.inOut' }));
  });
}

// ── HINT FADE OUT on first interaction ───────────────────────────────────
function initHintFade() {
  const hint = document.querySelector('.hero-hint');
  if (!hint) return;
  const hide = () => {
    gsap.to(hint, { opacity: 0, duration: 0.5, onComplete: () => hint.remove() });
    document.getElementById('hero').removeEventListener('mousemove', hide);
    document.getElementById('hero').removeEventListener('touchstart', hide);
  };
  document.getElementById('hero').addEventListener('mousemove', hide, { once: true });
  document.getElementById('hero').addEventListener('touchstart', hide, { once: true, passive: true });
}

// ── BOOT ─────────────────────────────────────────────────────────────────
function boot() {
  initClock();
  initNavEffect();
  initCardHover();
  initHeroEntrance();
  initRevealAnimations();
  initFallingImages();
  initHintFade();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
