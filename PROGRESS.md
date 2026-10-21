# Arunika Cliff Villas — Progress

Last updated: 2026-10-22. Repo: github.com/mpratama17/arunica-cliff-villa

Landing page villa **fiktif** di tebing Lombok — template UMKM yang bisa
dijual + portofolio untuk klien freelance. Pitch: booking langsung, tanpa
komisi OTA. Layout meniru referensi "Paradise Villa" (hero inset, 3 kartu,
statement, amenities, review, lokasi+peta, FAQ+booking, footer kartu).

## Keputusan
- Stack: HTML + CSS + JS dasar, tanpa framework/build. 3 file: `index.html`,
  `style.css`, `script.js`. Font Plus Jakarta Sans (pendekatan ke referensi).
- Konten Inggris, `lang="en"`. Footer "Fictional demo. Photos from Unsplash."
- Foto: Unsplash (non-premium), kredit di `images/CREDITS.md`.
  `images/hero-original.jpeg` = placeholder 736px lama (sumber tak jelas,
  tidak dipakai di halaman).
- 3 kartu = 3 tipe kamar (Ocean $180, Garden $150, Family $260). Form booking
  hitung malam × harga → `wa.me` (nomor placeholder di `script.js`).

## Status
- [x] Fix overflow mobile (grid `minmax(0,1fr)`) di FAQ/form
- [x] Semua section + responsif + menu HP + form WhatsApp + scroll reveal
- [x] Diverifikasi di browser: hero/section desktop, menu HP buka/tutup,
      hitung total, validasi check-out, URL WhatsApp ter-encode benar
- [ ] `/code-review` + `/simplify` belum dijalankan
- [ ] Ganti nomor WhatsApp & alamat/email placeholder
- [ ] Peta: embed Selong Belanak (tanpa API key) — tidak render di Chrome headless, cek manual di browser
- [x] Commit pertama di `main`, push ke GitHub, README + `screenshots/`
- [ ] Deploy Vercel, lalu tambahkan link demo ke README
