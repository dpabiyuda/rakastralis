# Website Bisnis Tralis

Website bisnis profesional yang dibangun dengan **Next.js 14**, **TypeScript**, **Tailwind CSS**, dan **Shadcn/UI**.

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn/UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)

## 📁 Struktur Project

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/                # API Routes
│   │   │   └── health/        # Health check endpoint
│   │   ├── globals.css         # Global styles & CSS Variables
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── loading.tsx         # Loading state
│   │   ├── error.tsx           # Error boundary
│   │   └── not-found.tsx       # 404 page
│   ├── components/
│   │   ├── ui/                 # Shadcn/UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── select.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── toast.tsx
│   │   │   └── index.ts        # Barrel exports
│   │   └── providers/
│   │       └── theme-provider.tsx
│   ├── config/
│   │   └── site.ts             # Site configuration
│   ├── hooks/
│   │   ├── use-toast.ts        # Toast notifications hook
│   │   └── index.ts
│   ├── lib/
│   │   ├── utils.ts            # Utility functions (cn)
│   │   └── api.ts              # API utilities
│   └── types/
│       └── index.ts            # Global TypeScript types
├── .env.example                # Template environment variables
├── .env.local                  # Local environment (tidak di-commit)
├── .gitignore
├── .eslintrc.js
├── components.json             # Shadcn/UI config
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🛠️ Cara Menjalankan

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Instalasi

1. Clone repositori ini
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy file environment:
   ```bash
   cp .env.example .env.local
   ```
4. Jalankan development server:
   ```bash
   npm run dev
   ```
5. Buka [http://localhost:3000](http://localhost:3000) di browser

### Menambah Komponen Shadcn/UI

Setelah setup, gunakan CLI Shadcn untuk menambah komponen baru:
```bash
npx shadcn-ui@latest add [component-name]
# Contoh:
npx shadcn-ui@latest add navigation-menu
npx shadcn-ui@latest add sheet
npx shadcn-ui@latest add carousel
```

## 🌟 Fitur Utama

- **Light Mode Elegan & Modern**: Tampilan default light mode yang bersih, kontras tinggi, dan nyaman untuk pelanggan.
- **Portofolio Hasil Proyek Real**: Galeri visual proyek (tralis jendela, pagar laser cutting, kanopi alderon, railing tangga, pintu besi) lengkap dengan filter kategori, detail material, rating, ulasan klien, dan tombol pesan langsung via WhatsApp.
- **Portal Pemilik / Owner Dashboard (`/owner`)**:
  - Halaman khusus bagi pemilik bengkel untuk menginput, mengedit, dan menghapus portofolio hasil pengerjaan.
  - Password akses default: `owner123` (bisa diakses via link "Area Owner" di header & footer).
  - Pilihan cepat foto preset rekomendasi atau input custom URL foto hasil pengerjaan bengkel.
  - Opsi menjadikan proyek sebagai "Unggulan (Featured)".
- **Kalkulator Simulasi Biaya Interaktif**: Menghitung estimasi biaya pembuatan secara otomatis berdasarkan ukuran (meter) dan grade material.
- **Otomatis Buka Browser**: Menjalankan `npm run dev` atau `npm dev` langsung meluncurkan browser ke `http://localhost:3000`.

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` / `npm dev` | Menjalankan dev server & otomatis membuka localhost di browser |
| `npm run build` | Build untuk production |
| `npm start` | Menjalankan production server |
| `npm run lint` | Menjalankan ESLint |

## 🔑 Akses Portal Owner

Buka browser ke [http://localhost:3000/owner](http://localhost:3000/owner)
- **Password Default:** `owner123`

## 📄 License

MIT

