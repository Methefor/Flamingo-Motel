<div align="center">

<img src="https://raw.githubusercontent.com/Methefor/Flamingo-Motel/main/public/flamingo-motel-logo.svg" alt="Flamingo Motel" width="240" />

<h1>Flamingo Motel</h1>

<p><strong>Sinematik, çok dilli otel web sitesi — Gelibolu · Güneyli · Çanakkale</strong></p>

[![Live Site](https://img.shields.io/badge/🌐_Canlı_Site-flamingo--motel.vercel.app-b87a3d?style=for-the-badge)](https://flamingo-motel.vercel.app)
&nbsp;
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
&nbsp;
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com)
&nbsp;
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com)

</div>

---

## Demo

> **Canlı:** [flamingo-motel.vercel.app](https://flamingo-motel.vercel.app)

[![Flamingo Motel — Web Sitesi Demo](https://img.youtube.com/vi/cbshpoSWgQk/maxresdefault.jpg)](https://youtu.be/cbshpoSWgQk)

---

<div align="center">

### Ekran Görüntüleri

<table>
  <tr>
    <td align="center" width="50%">
      <img src="https://raw.githubusercontent.com/Methefor/Flamingo-Motel/main/public/Drone%20%C3%A7ekimi%20ai.png" width="100%" alt="Hero — Drone Çekimi" />
      <sub><b>Hero · Sinematik Slayt & Ken Burns</b></sub>
    </td>
    <td align="center" width="50%">
      <img src="https://raw.githubusercontent.com/Methefor/Flamingo-Motel/main/public/G%C3%BCneyli%20denizi%20ai.png" width="100%" alt="Güneyli Denizi" />
      <sub><b>Reviews · Google 4.7 ★ Rozeti</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <img src="https://raw.githubusercontent.com/Methefor/Flamingo-Motel/main/public/Flamingo%20motel%20ai.png" width="100%" alt="Flamingo Motel Dış Cephe" />
      <sub><b>Rooms · Hover Rezervasyon Overlay</b></sub>
    </td>
    <td align="center" width="50%">
      <img src="https://raw.githubusercontent.com/Methefor/Flamingo-Motel/main/public/images/img8.png" width="100%" alt="Kahvaltı Alanı" />
      <sub><b>Gallery · Editorial Grid & Lightbox</b></sub>
    </td>
  </tr>
</table>

</div>

---

## Özellikler

### Sinematik Görsel Deneyim
- **AI-Enhanced Slideshow** — 3 fotoğraf (drone aerial, kıyı, motel dış cephe) 30 saniyelik Ken Burns hareketi, GSAP crossfade geçişi, hover-pause
- **Film Grain** — SVG `feTurbulence` fractalNoise dokusu (%4.5 opaklık) high-end fotoğraf hissi
- **Triple Vignette** — Alt fade, sol perde, radial lens falloff ile sinematik çerçeveleme
- **Color Grade** — Her slaytta `saturate(1.18) contrast(1.06)` ile sıcak amber ton
- **Scroll Progress Bar** — Sayfa üstünde amber ilerleyici çizgi

### Animasyonlar & Scroll
- **Lenis** smooth scroll (1.4 s, üstel ease) — tek scroll kaynağı
- **GSAP ScrollTrigger** — metin yukarı kayar, hizmet kalemleri soldan gelir, oda kartları scale-in ile açılır
- **Sticky Hero** — page stack hero üzerinden kayarken sabit kalır
- **Counter Animasyonu** — 4.7 puanı viewport'a girince 0.0'dan sayılır
- **Preloader Yüzdesi** — 0% → 100% gerçek zamanlı sayaç

### Navigasyon
- **Amber Wave Shimmer** — Nav alt kenarında 5 saniyelik gradient tarama
- **Button Light Sweep** — "Randevu Al" butonunda 28° skewed ışık geçişi
- **Staggered Pulse** — I–V rakamları 1.4 sn gecikmeli ritimle nefes alır
- **Hover Tooltip** — Roman rakamların altında bölüm adı belirir

### Google Reviews Rozeti
- **4.7 ★** — 116 Google değerlendirmesi, görünür sayaç animasyonu
- "Tüm Yorumları Gör" bağlantısı ile Google Maps entegrasyonu

### Oda Kartları
- Her karta hover'da koyu overlay + **"Rezervasyon Yap"** butonu yukarı kayarak açılır
- GSAP ile bağımsız image scale + CSS backdrop-filter

### Fotoğraf Galerisi & Lightbox
- **10 fotoğraflık editorial grid** — featured shot 2×2, ikincil 2 geniş
- Fullscreen lightbox — scale entrance animasyonu
- **Klavye** (← → Escape) + **touch swipe** (≥48 px eşik) mobil desteği
- Hover'da büyüteç ikonu overlay (CSS `::before`)
- Sayaç: `1 / 10` format

### 4 Dil Desteği

| TR | EN | BG | EL |
|:---:|:---:|:---:|:---:|
| Türkçe | İngilizce | Bulgarca | Yunanca |

- Tüm bölümler tam çeviri kapsamında: nav, hero, yorumlar, hizmetler, odalar, galeri, felsefe, iletişim, footer
- `localStorage`'da dil tercihi kalıcı — sayfa yenilenmesine karşı korumalı
- `<html lang>` attribute güncelleniyor (erişilebilirlik)

### WhatsApp FAB
- 100vh scroll sonrası spring animasyonu ile girer
- **Pulse ring** — yeşil titreşim halkası animasyonu
- **Tooltip** — hover'da "WhatsApp ile Ulaş" soldan kayar
- iOS safe-area uyumlu: `env(safe-area-inset-bottom)`

### İletişim & Harita
- Google Maps embed — 40.4030° N, 26.6786° E hassas koordinat
- Grayscale filtreli harita → hover'da tam renk açılır
- `scan-line` texture + ambient glow (cinematic screen efekti)

### SEO & Sosyal
- **OpenGraph** — başlık, açıklama, görsel, URL, locale
- **Twitter Card** — `summary_large_image`
- **Schema.org `LodgingBusiness`** — tam adres, geo, telefon, görseller, 4.7★ aggregate rating

### Mobil-First Responsive

| Ekran | Davranış |
|---|---|
| > 1024 px | 4-kolon galeri, 3-kolon yorumlar, tam nav |
| 900–1024 px | 3-kolon galeri, yorumlar tek kolon |
| 600–900 px | 2-kolon galeri, kompakt dil seçici |
| < 600 px | Dil seçici gizli, swipe lightbox, iOS safe-area FAB |

---

## Teknoloji Yığını

| Araç | Versiyon | Rol |
|---|---|---|
| **Vite** | 5.4 | Build tool, dev server, modül bundler |
| **GSAP + ScrollTrigger** | 3.12 | Tüm animasyonlar — giriş, scroll reveal, sayaç |
| **Lenis** | 1.1 | Smooth scroll sürücüsü |
| **Vanilla JS** | ES2020 | Framework yok — minimum ayak izi |
| **CSS Custom Properties** | — | Tasarım tokenları (renk, easing, tipografi) |
| **Cormorant Garamond** | 300/400/500 | Başlık serif |
| **Manrope** | 300–600 | UI sans-serif |
| **Vercel** | — | Deployment & CDN |

**Bundle (gzipped):** `~140 KB` toplam · GSAP + Lenis ayrı chunk

---

## Proje Yapısı

```
flamingo-motel.com/
├── public/
│   ├── flamingo-motel-logo.svg      # SVG marka logosu
│   ├── Drone çekimi ai.png          # AI-enhanced aerial hero
│   ├── Güneyli denizi ai.png        # AI-enhanced kıyı hero
│   ├── Flamingo motel ai.png        # AI-enhanced dış cephe hero
│   └── images/                      # Orijinal motel fotoğrafları (10 adet)
├── src/
│   ├── script.js                    # Boot, slideshow, gallery, i18n, preloader, FAB
│   ├── styles.css                   # Tüm stiller — tokenlar, layout, animasyonlar
│   ├── translations.js              # TR / EN / BG / EL string haritaları
│   └── shaders.js                   # (ilerideki 3D için ayrılmış)
├── index.html                       # Schema.org + OG meta ile single-page döküman
├── vite.config.js                   # manualChunks ile build config
└── vercel.json                      # Vercel deployment config
```

---

## Kurulum

```bash
git clone https://github.com/Methefor/Flamingo-Motel.git
cd Flamingo-Motel
npm install
npm run dev        # → http://localhost:5173
```

```bash
npm run build      # Production → dist/
npm run preview    # Build'i local'de önizle
```

---

## Tasarım Sistemi

| Token | Değer | Kullanım |
|---|---|---|
| `--bg` | `#0a0907` | Sayfa arka planı |
| `--fg` | `#ede8df` | Ana metin |
| `--fg-dim` | `rgba(237,232,223,0.45)` | İkincil metin |
| `--accent` | `#b87a3d` | Amber marka rengi |
| `--serif` | Cormorant Garamond | Başlıklar |
| `--sans` | Manrope | UI metni |
| `--ease-out` | `cubic-bezier(0.22,1,0.36,1)` | İmza spring easing |

---

## Bölümler

| # | Bölüm | Arka Plan | Dil Desteği |
|---|---|---|---|
| Hero | Sinematik slayt · 3 slide | AI drone · deniz · dış cephe | ✓ |
| I | Misafir Yorumları + Google Rozeti | Güneyli denizi | ✓ |
| II | Hizmetler | Drone aerial | ✓ |
| III | Odalar + Hover Overlay | Motel dış cephe | ✓ |
| · | Galeri + Lightbox | Drone arka planı | ✓ |
| IV | Neden Flamingo? | CSS gradient — amber hairlines + radial glow | ✓ |
| V | İletişim + Harita | Blur deniz + scan-line | ✓ |

---

## İletişim

| Kanal | Bilgi |
|---|---|
| WhatsApp | [+90 534 500 11 88](https://wa.me/905345001188) |
| Instagram | [@flamingomotelgelibolu](https://instagram.com/flamingomotelgelibolu) |
| Adres | Atatürk Sokak No:12, Güneyli, Gelibolu, Çanakkale |
| Harita | [Google Maps — 40.4030° N, 26.6786° E](https://maps.google.com/?q=Flamingo+Motel+Güneyli+Gelibolu) |

---

<div align="center">

Made with precision for **Flamingo Motel**  
Güneyli · Gelibolu · Çanakkale, Türkiye  
© 2025 — Tüm hakları saklıdır

</div>
