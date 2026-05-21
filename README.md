<div align="center">

<img src="https://flamingo-motel.vercel.app/flamingo-motel-logo.svg" alt="Flamingo Motel" width="220" />

# Flamingo Motel — Official Website

**A cinematic, multi-language hospitality website built with Vite 5 + GSAP**

[![Live Demo](https://img.shields.io/badge/Live_Demo-flamingo--motel.vercel.app-b87a3d?style=for-the-badge&logo=vercel&logoColor=white)](https://flamingo-motel.vercel.app)
&nbsp;
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
&nbsp;
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com)
&nbsp;
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com)

---

<img src="https://flamingo-motel.vercel.app/Drone%20%C3%A7ekimi%20ai.png" alt="Flamingo Motel — Gelibolu Güneyli aerial view" width="100%" style="border-radius:4px;" />

*Gelibolu · Güneyli · Çanakkale, Türkiye — 40.4030° N · 26.6786° E*

</div>

---

## Overview

Flamingo Motel is a boutique seafront motel on the Gallipoli Peninsula. This repository contains its complete official website — a **zero-framework, performance-first** implementation that delivers a luxury hospitality experience through cinematic animations, AI-enhanced photography, and a polished multi-language interface.

> **Live:** [flamingo-motel.vercel.app](https://flamingo-motel.vercel.app)

---

## Features

### Cinematic Visual Experience
- **AI-Enhanced Hero Slideshow** — Three high-quality AI-upscaled photos (drone aerial, coastline, motel exterior) with Ken Burns motion (30 s slow pan), GSAP crossfade, and hover-pause
- **Color Grading** — CSS `saturate(1.18) contrast(1.06)` on every slide for a rich, warm palette
- **Film Grain Overlay** — SVG `feTurbulence` fractalNoise at 4.5% opacity for a high-end photographic texture
- **Cinematic Vignette** — Triple-layer gradient: bottom fade, left veil, and radial lens falloff
- **Section Backgrounds** — Each page section has its own AI-photo backdrop with independent overlay tuning

### Animated Navigation
- **Amber Wave Shimmer** — Gradient line sweeps the nav bottom edge on a 5-second loop
- **Button Light Sweep** — "Book Now" CTA has a 28° skewed light pass every 5 seconds
- **Staggered Numeral Pulse** — Roman numerals (I–V) breathe in sequence with 1.4 s offset

### Preloader
- Logo fade-in with scale spring, amber draw-line, location tagline — all CSS keyframe animation
- Hero entrance sequence (headline reveal, label slide, CTA appear) starts *after* the preloader exits

### Scroll & Motion
- **Lenis** smooth scroll (duration 1.4 s, exponential easing) as the single scroll source
- **GSAP ScrollTrigger** for reveal animations: text slides up, practice items stagger left, room cards scale in
- **Sticky hero** that stays fixed while the page stack scrolls over it

### Photo Gallery & Lightbox
- 10-image editorial grid — featured hero shot spans 2×2, secondary image spans 2 wide
- Full-screen lightbox with scale entrance animation
- **Keyboard navigation** (← → Escape) + **touch swipe** (≥ 48 px threshold) for mobile
- Image counter (1 / 10 style)

### 4-Language Interface
Full translation coverage across **TR · EN · BG · EL** (Turkish, English, Bulgarian, Greek):
- Nav labels, hero headline & subtitle, all section eyebrows/headings
- Service item names & descriptions, room card labels, approach philosophy columns
- Contact section, address (country name localized), footer
- Language persisted in `localStorage` — survives page refresh
- `lang` attribute on `<html>` updated for accessibility

### Floating WhatsApp Button
- Enters with spring animation once the hero scrolls out of view (GSAP ScrollTrigger)
- iOS safe-area aware (`env(safe-area-inset-bottom)`)
- Green glow deepens on hover

### Google Maps Embed
- Precise coordinates (40.4030° N, 26.6786° E) — no API key required
- Grayscale + contrast filter that color-reveals on hover

### SEO & Social
- **OpenGraph** — title, description, image, url, locale
- **Twitter Card** — `summary_large_image`
- **Schema.org `LodgingBusiness`** — name, address, geo, phone, images, aggregate rating (4.7 ★ / 116 reviews), amenity features

### Mobile-First Responsive
| Breakpoint | Behaviour |
|---|---|
| > 1024 px | Full 4-col gallery, 3-col reviews, desktop nav |
| 900–1024 px | 3-col gallery, reviews stack |
| 600–900 px | 2-col gallery, map 260 px, compact lang switcher |
| < 600 px | Lang switcher hidden, swipe lightbox, iOS safe area FAB, map 200 px |

---

## Technology Stack

| Tool | Version | Role |
|---|---|---|
| **Vite** | 5.4 | Build tool, dev server, module bundler |
| **GSAP + ScrollTrigger** | 3.12 | All animations — entrance, scroll reveal, counter |
| **Lenis** | 1.1 | Smooth scroll driver |
| **Vanilla JavaScript** | ES2020 | No framework — minimal footprint |
| **CSS Custom Properties** | — | Design tokens (color, easing, typography) |
| **Cormorant Garamond** | 300 / 400 / 500 | Display serif (headlines) |
| **Manrope** | 300–600 | UI sans-serif (body, nav, labels) |
| **Vercel** | — | Deployment & CDN |

**Bundle (gzipped):** ~140 KB total — `gsap + lenis` isolated in their own chunk via `manualChunks`.

---

## Project Structure

```
meridian-studio/
├── public/
│   ├── flamingo-motel-logo.svg      # SVG brand mark
│   ├── Drone çekimi ai.png          # AI-enhanced aerial hero
│   ├── Güneyli denizi ai.png        # AI-enhanced sea hero
│   ├── Flamingo motel ai.png        # AI-enhanced exterior hero
│   └── images/                      # Original motel photography (10 photos)
├── src/
│   ├── script.js                    # Boot, slideshow, gallery, i18n, preloader, FAB
│   ├── styles.css                   # All styles — tokens, layout, animations, responsive
│   ├── translations.js              # TR / EN / BG / EL string maps
│   └── shaders.js                   # (legacy, unused — kept for reference)
├── index.html                       # Single-page document with Schema.org + OG
├── vite.config.js                   # Build config with manualChunks
└── vercel.json                      # Vercel deployment config
```

---

## Quick Start

```bash
git clone https://github.com/Methefor/Flamingo-Motel.git
cd Flamingo-Motel
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # Production build → dist/
npm run preview    # Preview the build locally
```

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#0a0907` | Page background |
| `--fg` | `#ede8df` | Primary text |
| `--fg-dim` | `rgba(237,232,223,0.45)` | Secondary text |
| `--accent` | `#b87a3d` | Amber brand colour |
| `--ease-out` | `cubic-bezier(0.22,1,0.36,1)` | Signature spring easing |

---

## Page Sections

| # | Section | Background | Language Support |
|---|---|---|---|
| Hero | Cinematic slideshow | AI drone · sea · exterior | ✓ |
| I | Guest Reviews | Güneyli sea photo | ✓ |
| II | Services | Aerial drone photo | ✓ |
| III | Rooms | Motel exterior photo | ✓ |
| · | Photo Gallery | Aerial photo backdrop | ✓ |
| IV | Why Flamingo | CSS gradient — amber hairlines + radial glows | ✓ |
| V | Contact | Blurred sea + scan-line overlay | ✓ |

---

## Contact

| Channel | Details |
|---|---|
| WhatsApp | [+90 534 500 11 88](https://wa.me/905345001188) |
| Address | Atatürk Sokak No:12, Güneyli, Gelibolu, Çanakkale |
| Instagram | [@flamingomotelgelibolu](https://instagram.com/flamingomotelgelibolu) |
| Maps | [Google Maps — 40.4030° N, 26.6786° E](https://maps.google.com/?q=Flamingo+Motel+Güneyli+Gelibolu) |

---

<div align="center">

© 2025 Flamingo Motel — All rights reserved  
Güneyli · Gelibolu · Çanakkale, Türkiye

</div>
