import { PortfolioItem, ProductCategory } from "@/types/portfolio";

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  tralis: "Tralis Jendela",
  pagar: "Pagar Modern",
  kanopi: "Kanopi",
  railing: "Railing Tangga",
  pintu: "Pintu Besi",
};

// Preset high-resolution architecture images for metalwork
export const PRESET_IMAGES = [
  {
    category: "tralis",
    label: "Tralis Minimalis Kotak Hitam Doff",
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "tralis",
    label: "Tralis Jendela Tempa Klasik Elegan",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "pagar",
    label: "Pagar Besi Laser Cutting Modern",
    url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "pagar",
    label: "Pagar Minimalis Woodplank & Hollow",
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "kanopi",
    label: "Kanopi Carport Alderon Double Layer",
    url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "kanopi",
    label: "Kanopi Kaca Tempered & Rangka WF",
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "railing",
    label: "Railing Tangga Minimalis Industrial",
    url: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "railing",
    label: "Railing Tangga Balkon Kaca & Stainless",
    url: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "pintu",
    label: "Pintu Tralis Besi Expanda Kasa Baja",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  },
];

export const DEFAULT_PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "proj-1",
    title: "Tralis Jendela Minimalis Grid - Cluster NavaPark",
    category: "tralis",
    categoryName: "Tralis Jendela",
    client: "Bpk. Hendra Wijaya",
    location: "BSD City, Tangerang Selatan",
    year: "2024",
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    description:
      "Pemasangan 8 unit tralis jendela ruang tamu & kamar tidur dengan motif kotak grid simetris. Mengutamakan keamanan anti-maling tanpa menghalangi sirkulasi udara dan cahaya alami.",
    specifications: [
      "Besi Hollow Galvanis 40x40 & 20x40 SNI",
      "Ketebalan Besi 1.6 mm Full",
      "Finishing Cat Epoxy Primer + Duco Hitam Doff",
      "Kuncian Dalam & Sekrup Fisher Heavy Duty",
    ],
    estimatedCost: "Rp 3.850.000 (Total 8 Unit)",
    rating: 5,
    clientReview:
      "Hasil las sangat halus dan presisi, cat rapi tidak ada yang belang. Rumah jadi jauh lebih aman dan tetap aesthetic!",
    featured: true,
    createdAt: "2024-08-15",
  },
  {
    id: "proj-2",
    title: "Pagar Laser Cutting Motif Abstrak Mewah - Villa Cinere",
    category: "pagar",
    categoryName: "Pagar Modern",
    client: "Ibu Dian Anggraini",
    location: "Cinere, Depok",
    year: "2024",
    imageUrl:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    description:
      "Pagar lipat 4 daun dengan ornamen plat besi laser cutting CNC presisi dipadu rangka hollow tebal. Menggunakan sistem roda bearing atas bawah yang sangat ringan didorong.",
    specifications: [
      "Plat Besi Hitam Tebal 2.4 mm Laser Cut",
      "Rangka Hollow Galvanis 40x80 Tebal 1.8 mm",
      "Engsel Bubut 1 Inch + Roda Stainless Steel",
      "Finishing Cat Oven Powder Coating Dark Graphite",
    ],
    estimatedCost: "Rp 12.500.000",
    rating: 5,
    clientReview:
      "Pagar impian saya akhirnya terwujud. Desain laser cut-nya rapi sekali dan tetangga banyak yang memuji. Sangat recommended!",
    featured: true,
    createdAt: "2024-09-02",
  },
  {
    id: "proj-3",
    title: "Kanopi Alderon Twinwall Carport 2 Mobil - Cibubur Junction",
    category: "kanopi",
    categoryName: "Kanopi",
    client: "Bpk. Rahmat Santoso",
    location: "Cibubur, Jakarta Timur",
    year: "2024",
    imageUrl:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    description:
      "Pembuatan kanopi carport luas 6x5 meter memakai atap Alderon Twinwall double layer yang mampu meredam panas terik siang hari serta tidak bising saat hujan lebat.",
    specifications: [
      "Atap Alderon Twinwall 10 mm Original",
      "Tiang Utama Hollow 50x100 & Rangka 40x80",
      "Sistem Talang Air Dalam Tersembunyi",
      "Sealant Polyurethane Anti Bocor di Sambungan",
    ],
    estimatedCost: "Rp 15.200.000",
    rating: 5,
    clientReview:
      "Pengerjaan kanopi cuma 3 hari di lokasi setelah fabrikasi bengkel. Teras jadi adem banget, mobil aman dari hujan panas.",
    featured: true,
    createdAt: "2024-07-20",
  },
  {
    id: "proj-4",
    title: "Railing Tangga Minimalis Clean & Handrail Kayu Solid",
    category: "railing",
    categoryName: "Railing Tangga",
    client: "Arsitek Studio Artha",
    location: "Bintaro Sektor 9, Tangerang Selatan",
    year: "2024",
    imageUrl:
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80",
    description:
      "Railing tangga interior rumah split level modern. Kombinasi tiang besi hollow hitam doff dengan handrail kayu Kamper oven yang dipernis natural satin.",
    specifications: [
      "Jari-jari Besi Hollow 20x20 Jarak 9 cm Aman Anak",
      "Tiang Utama Hollow 40x40 Plat Baseplate 8 mm",
      "Handrail Kayu Kamper Samarinda Profil U",
      "Finishing Duco Hitam Doff & Wood Coating",
    ],
    estimatedCost: "Rp 6.400.000",
    rating: 5,
    clientReview:
      "Finishing sambungan lasnya rata mulus tanpa tonjolan. Sangat teliti dalam memperhatikan detail keselamatan.",
    featured: false,
    createdAt: "2024-09-18",
  },
  {
    id: "proj-5",
    title: "Pintu Tralis Kawat Nyamuk Baja Expanda - Summarecon Bekasi",
    category: "pintu",
    categoryName: "Pintu Besi",
    client: "Ibu Fiona Lestari",
    location: "Summarecon Bekasi",
    year: "2024",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description:
      "Pintu dobel pengaman di depan pintu utama. Dilengkapi kawat baja anti sobek agar pintu utama bisa dibuka lebar untuk udara sejuk tanpa takut nyamuk dan serangga.",
    specifications: [
      "Kawat Kasa Baja Anti Sobek / Cakar Kucing",
      "Rangka Hollow Galvanis 30x60 Tebal 1.6 mm",
      "Kunci Handle Pintu Silinder Ganda Solid",
      "Karet Peredam Suara Benturan di Kusen",
    ],
    estimatedCost: "Rp 2.650.000",
    rating: 5,
    clientReview:
      "Bagus banget, kunci kokoh dan kawat bajanya tebal. Sekarang anak-anak bisa main dengan pintu utama terbuka leluasa.",
    featured: false,
    createdAt: "2024-06-11",
  },
  {
    id: "proj-6",
    title: "Tralis Tempa Klasik Gold Accent - Sentul City",
    category: "tralis",
    categoryName: "Tralis Jendela",
    client: "Bpk. Ir. Gunawan",
    location: "Sentul City, Bogor",
    year: "2024",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Tralis besi tempa ulir bermotif klasik mewah dengan aksen cat emas tembaga antik pada ornamen bunga untuk hunian gaya mediterania.",
    specifications: [
      "Besi Nako Ulir 12 mm & Plat Strip Tempa",
      "Ornamen Cor Aluminium Bunga Tembaga",
      "Cat Dasar Anti Karat Zingchromate 2 Lapis",
      "Finishing Cat Antik Tembaga Emas",
    ],
    estimatedCost: "Rp 5.200.000",
    rating: 5,
    clientReview:
      "Nuansa klasik mewahnya sangat menonjol. Tim survei datang tepat waktu dan pengerjaan cepat.",
    featured: true,
    createdAt: "2024-05-24",
  },
];

const STORAGE_KEY = "bisnis_tralis_portfolio_items_v1";

export function getStoredPortfolioItems(): PortfolioItem[] {
  if (typeof window === "undefined") {
    return DEFAULT_PORTFOLIO_ITEMS;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PORTFOLIO_ITEMS));
      return DEFAULT_PORTFOLIO_ITEMS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return DEFAULT_PORTFOLIO_ITEMS;
  } catch (e) {
    console.error("Failed to load portfolio items from localStorage", e);
    return DEFAULT_PORTFOLIO_ITEMS;
  }
}

export function savePortfolioItems(items: PortfolioItem[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent("portfolio-updated", { detail: items }));
  } catch (e) {
    console.error("Failed to save portfolio items to localStorage", e);
  }
}

export function addPortfolioItem(
  newItem: Omit<PortfolioItem, "id" | "createdAt">
): PortfolioItem {
  const current = getStoredPortfolioItems();
  const created: PortfolioItem = {
    ...newItem,
    id: `proj-${Date.now()}`,
    createdAt: new Date().toISOString().split("T")[0],
  };
  const updated = [created, ...current];
  savePortfolioItems(updated);
  return created;
}

export function deletePortfolioItem(id: string): void {
  const current = getStoredPortfolioItems();
  const updated = current.filter((item) => item.id !== id);
  savePortfolioItems(updated);
}

export function toggleFeaturedPortfolioItem(id: string): void {
  const current = getStoredPortfolioItems();
  const updated = current.map((item) =>
    item.id === id ? { ...item, featured: !item.featured } : item
  );
  savePortfolioItems(updated);
}

export function resetPortfolioToDefault(): void {
  savePortfolioItems(DEFAULT_PORTFOLIO_ITEMS);
}
