// Konfigurasi aplikasi
export const siteConfig = {
  name: "Website Bisnis Tralis",
  description: "Solusi Terbaik untuk Kebutuhan Anda",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  links: {
    instagram: "https://instagram.com/",
    whatsapp: "https://wa.me/62",
  },
  nav: [
    { label: "Beranda", href: "/" },
    { label: "Produk", href: "/products" },
    { label: "Tentang Kami", href: "/about" },
    { label: "Kontak", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
