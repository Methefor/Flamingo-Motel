# Flamingo Motel — Sunum Videosu Çekim Rehberi

**Tavsiye araçlar:** OBS Studio (ücretsiz) · Windows Game Bar (Win + G) · Loom  
**Tavsiye çözünürlük:** 1920×1080 veya 2560×1440  
**Tavsiye süre:** 90–120 saniye  
**Müzik tarzı:** Yavaş ambient / sinematik enstrümantal (örn. Epidemic Sound "Coastal Calm")

---

## Çekim Listesi (Shot List)

### 1. AÇILIŞ — Preloader (0–8 sn)

- Tarayıcıyı tam ekran yap (`F11`)
- Sayfayı yenile (`F5`) ve preloader animasyonunu kaydet
- **Göster:** Logo fade-in → amber çizgi draw → "Güneyli · Gelibolu" tagline → ekran kararmaya başlar
- *Efekt notu: Tam ekran kayıt başlamadan önce preloader aktif olsun*

---

### 2. HERO GİRİŞİ — Drone Çekimi (8–22 sn)

- Preloader çekildikten sonra:
  - "Eşsiz Bir / Deneyim" başlığı yukarı kayıyor
  - "Gelibolu · Güneyli · Çanakkale" etiketi belirir
  - Alt metin ve butonlar gelir
- **Göster:** Ken Burns hareketi — drone fotoğrafı yavaşça sola kayıyor
- Nav'daki amber shimmer çizgisini göster (yavaşça yaklaştır sol üst köşeye)
- **"Randevu Al" butonuna fareyi götür** — ışık süpürme animasyonunu göster

---

### 3. HERO — Slayt Geçişi (22–32 sn)

- 6 saniye bekle → otomatik geçiş: Drone → Güneyli Denizi
- **Göster:** GSAP crossfade geçişi + sağ altta sayaç "01 — 02" geçişi
- Sol altta koordinat + saat widget'ını göster
- Sağ altta mini haritayı göster (pulse animasyonu)

---

### 4. SCROLL — Bölümler Arası Geçiş (32–55 sn)

Yavaşça scroll et, her bölümde 3–4 saniye dur:

**Reviews (I):**
- Güneyli denizi arka planı + review kartları reveal animasyonu
- "4.7 ★ Google" vurgula

**Services (II):**
- Drone aerial arka planı + hizmet listesi soldan kayarak geliyor

**Rooms (III):**
- Motel dış cephe arka planı + 4 kart scale-in animasyonu
- Deniz Alanı → Kahvaltı & Yemek → Oda → Kahvaltı kartlarını göster

---

### 5. GALERİ (55–70 sn)

- Galeri bölümüne scroll et
- **Göster:** 10 fotoğraflık editorial grid (drone shot 2×2 büyük)
- **Bir fotoğrafa tıkla** → lightbox açılıyor (scale animasyonu)
- Sağ/sol ok ile 2–3 fotoğraf arası geç
- ESC ile kapat

---

### 6. NEDEN FLAMINGO + İLETİŞİM (70–85 sn)

**Approach (IV):**
- CSS yaratıcı arka plan: köşegen amber çizgiler + ışık efektleri
- 3 kolon reveal animasyonu

**Contact (V):**
- Blur'lu deniz arka planı + scan-line dokusu
- Google Maps embed → haritaya hover (renk açılıyor)

---

### 7. DİL DEĞİŞTİRME (85–100 sn)

- Sağ üstte `TR · EN · BG · EL` dil seçicisini göster
- **EN** tıkla → tüm sayfa İngilizce'ye geçiyor (hero dahil)
- **BG** tıkla → Bulgarca (Кирилик karakterler)
- **EL** tıkla → Yunanca (Yunan alfabesi)
- **TR**'ye geri dön

---

### 8. MOBİL GÖRÜNÜM (100–115 sn)

Tarayıcı DevTools'u aç (`F12`) → Responsive Mode:

- iPhone 14 Pro boyutu seç (390×844)
- Sayfayı yenile → preloader mobile'da da düzgün
- Hero'yu göster (tam ekran, responsive başlık)
- Aşağı kaydır → WhatsApp FAB yeşil butonu belirir
- Galeri: 2 sütun grid → bir fotoğrafa dokun → lightbox
- Parmakla sola kaydır (mouse drag) → bir sonraki fotoğraf

---

### 9. KAPANIŞ (115–120 sn)

- Desktop görünüme geri dön
- `flamingo-motel.vercel.app` adres çubuğunu göster
- Hero'a scroll et → logo ve headline'a yakın plan
- Fade to black

---

## Kurgu / Montaj Notları

- Tüm geçişler arasında **smooth crossfade** (0.5 sn)
- Müzik: videonun tamamı boyunca arka planda, final kararmasında kısılıyor
- **Alt yazı önerileri:**
  - `0:02` → "Flamingo Motel — Resmî Web Sitesi"
  - `0:08` → "Güneyli, Gelibolu · Türkiye"
  - `0:32` → "GSAP + Lenis ile Sinematik Animasyonlar"
  - `0:55` → "10 Fotoğraflı Galeri + Lightbox"
  - `1:25` → "4 Dil Desteği: TR · EN · BG · EL"
  - `1:40` → "flamingo-motel.vercel.app"

---

## Hızlı Kayıt (OBS ile)

1. OBS aç → Sources: "Display Capture"
2. Settings → Output → 1080p60 veya 1440p30
3. Hotkey: `Alt + F9` kayıt başlat/dur
4. Çektikten sonra DaVinci Resolve (ücretsiz) ile müzik ve alt yazı ekle

