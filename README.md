# Flamingo Motel — Resmi Web Sitesi

Gelibolu / Güneyli, Çanakkale'de yer alan Flamingo Motel'in resmi web sitesi.  
Vite 5 + vanilla JavaScript + GSAP ile geliştirilmiştir.

## Canlı Site

> Vercel'e deploy edildikten sonra URL buraya eklenecek.

## Özellikler

- **Hero — Düşen Fotoğraf Efekti:** Fare hareket ettirince motel fotoğrafları elastik animasyonla düşüp sekiyor (GSAP)
- **Yumuşak Scroll:** Lenis ile sayfa geçişleri
- **Scroll Reveal Animasyonlar:** GSAP ScrollTrigger ile bölüm geçişleri
- **Canlı Saat:** Çanakkale yerel saati (Europe/Istanbul)
- **Mini Harita:** Gelibolu yarımadası konum göstergesi
- **WhatsApp Entegrasyonu:** Doğrudan rezervasyon butonu
- **Tam Duyarlı Tasarım:** Masaüstü ve mobil uyumlu

## Bölümler

| # | Bölüm | İçerik |
|---|-------|--------|
| I | Misafir Yorumları | Google 4.7 ★ — seçilmiş yorumlar |
| II | Hizmetlerimiz | 7/24 ilgi, Wi-Fi, kahvaltı, akşam yemeği, sohbet alanları |
| III | Odalarımız | Standart, Çift Kişilik, Aile odası, Bahçe |
| IV | Felsefemiz | Misafir önce, doğayla iç içe, ev sıcaklığı |
| V | İletişim | WhatsApp, telefon, adres, Instagram, Google Maps |

## Teknoloji

| Araç | Versiyon | Kullanım |
|------|----------|----------|
| **Vite** | 5.4 | Dev sunucusu ve bundler |
| **GSAP + ScrollTrigger** | 3.12 | Animasyon, scroll reveal |
| **Lenis** | 1.1 | Yumuşak scroll |
| **Vanilla JavaScript** | ES2020 | Çerçevesiz, hafif |
| **Cormorant Garamond** | — | Başlık fontu (Google Fonts) |
| **Manrope** | — | Gövde fontu (Google Fonts) |

## Kurulum

```bash
git clone https://github.com/Methefor/Flamingo-Motel.git
cd Flamingo-Motel
npm install
npm run dev        # → http://localhost:5173
```

## Build & Deploy

```bash
npm run build      # dist/ klasörü oluşturur
npm run preview    # build önizleme
vercel --prod      # Vercel'e deploy
```

## Görseller

`public/images/` klasöründe 10 motel fotoğrafı bulunmaktadır:

| Dosya | İçerik |
|-------|--------|
| img1.jpg | Flamingo Motel dış cephe |
| img2.png | Güneyli kıyısı |
| img3.png | Drone çekimi |
| img4–6.png | Oda fotoğrafları |
| img7.png | Yemek alanı |
| img8.png | Arabiata penne |
| img9.png | Kahvaltı |
| img10.png | Bahçe |

## İletişim

- **WhatsApp / Telefon:** +90 534 500 11 88
- **Adres:** Atatürk Sokak No:12, Güneyli, Gelibolu / Çanakkale
- **Instagram:** [@flamingomotelgelibolu](https://instagram.com/flamingomotelgelibolu)

---

© 2025 Flamingo Motel — Tüm hakları saklıdır.
