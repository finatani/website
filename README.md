# Website FinaTani

![Finatani Homepage Website](/public/finatani_homepage.webp)

Repositori ini berisi **website landing page resmi FinaTani** — aplikasi yang membantu petani dan peternak mencatat aktivitas pertanian serta mengelola keuangan usaha mereka, mulai dari proses awal, panen, hingga penjualan ke konsumen akhir.

Website ini memperkenalkan fitur-fitur utama aplikasi FinaTani:

- **Mudah Mencatat Aktivitas** — daftarkan lahan dan catat setiap aktivitas dengan mudah dan cepat, kapanpun.
- **Pantau Riwayat Aktivitas** — lihat garis waktu pengelolaan pertanian serta kendalikan pemasukan dan pengeluaran.
- **Pengingat Cerdas / AI** — pengingat aktivitas pemeliharaan berbasis AI untuk meningkatkan kualitas dan kuantitas hasil panen.
- **Laporan Aktivitas** — laporan keuangan, panen, dan arus kas dalam bentuk grafik dan garis waktu yang mudah dibaca.

## Teknologi

- [Astro 6](https://astro.build) — framework web statis
- [Tailwind CSS 4](https://tailwindcss.com) — styling (via plugin `@tailwindcss/vite`)
- [Partytown](https://partytown.qwik.dev) — menjalankan skrip pihak ketiga (analytics) di web worker
- TypeScript

## Struktur Proyek

```text
src/
├── components/   # Komponen halaman (HeroSection, About, Feature, Testimonials, dll.)
├── layouts/      # Layout utama halaman
├── pages/        # Halaman: / (default), /id, /en
├── i18n/         # Konfigurasi dua bahasa (Bahasa Indonesia & English)
└── styles/       # CSS global
public/           # Aset statis (gambar, logo, SVG)
```

Website mendukung dua bahasa melalui rute `/id` (default) dan `/en`.

## Menjalankan Secara Lokal

Pastikan [Node.js](https://nodejs.org) sudah terpasang, lalu:

```bash
# Instal dependensi
npm install

# Jalankan server pengembangan di http://localhost:3000
npm run dev

# Build untuk produksi (hasil di folder dist/)
npm run build

# Pratinjau hasil build
npm run preview
```

## Deployment

Website ini di-deploy melalui [Vercel](https://vercel.com) (lihat `vercel.json`). Konfigurasi Firebase Hosting (`firebase.json`) juga tersedia sebagai alternatif.

## Kontribusi

Kami sangat terbuka untuk kontribusi dari siapa saja yang ingin berpartisipasi dalam pengembangan proyek ini. Silakan buka sebuah *pull request* dengan perubahan Anda dan kami akan memeriksa dan meninjau kontribusi Anda.

## Lisensi

Proyek ini tersedia di bawah [lisensi MIT](LICENCE.md).
