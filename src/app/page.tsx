"use client";

import * as React from "react";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  Wrench,
  Sparkles,
  Phone,
  MessageCircle,
  Ruler,
  Star,
  CheckCircle2,
  ArrowRight,
  Clock,
  MapPin,
  ChevronRight,
  Hammer,
  Layers,
  Flame,
  Award,
  Menu,
  X,
  Lock,
  ExternalLink,
  Grid,
  Home as HomeIcon,
  TrendingUp,
  Plus,
  Minus,
  Check,
  BadgeCheck,
  Quote,
  Eye,
  SlidersHorizontal,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  PortfolioItem,
  ProductCategory,
} from "@/types/portfolio";
import {
  getStoredPortfolioItems,
  CATEGORY_LABELS,
} from "@/lib/portfolio-data";

const PRODUCTS = [
  {
    id: "tralis",
    category: "Tralis Jendela",
    title: "Tralis Jendela Minimalis & Klasik",
    description:
      "Pengaman jendela kokoh berdesain modern elegan, menggunakan hollow galvanis tebal anti maling dengan finishing cat oven anti karat.",
    price: "Mulai Rp 350.000 / m²",
    features: [
      "Besi Hollow Galvanis 4x4 & 2x4 SNI",
      "Pilihan Model: Kotak Simetris, Klasik, & Laser Cut",
      "Proteksi Cat Dasar Anti Karat Epoxy Primer",
      "Garansi Sambungan Las 1 Tahun Penuh",
    ],
    tag: "Terlaris",
  },
  {
    id: "pagar",
    category: "Pagar Modern",
    title: "Pagar Rumah Minimalis & Laser Cutting",
    description:
      "Pagar besi tangguh tahan cuaca ekstrem dengan variasi motif laser cutting CNC presisi atau kombinasi woodplank mewah.",
    price: "Mulai Rp 650.000 / m²",
    features: [
      "Plat Besi Laser Cut 2mm - 3mm Presisi",
      "Rangka Hollow Tebal 1.6mm - 2.0mm",
      "Roda Stainless Steel & Engsel Bearing Halus",
      "Finishing Cat Duco / Powder Coating",
    ],
    tag: "Favorit",
  },
  {
    id: "kanopi",
    category: "Kanopi",
    title: "Kanopi Alderon & Kaca Tempered",
    description:
      "Kanopi peredam panas matahari dan kedap suara rintik hujan, melindungi kendaraan carport dan teras rumah Anda dengan sempurna.",
    price: "Mulai Rp 550.000 / m²",
    features: [
      "Atap Alderon Twinwall / Solarflat / Kaca Tempered",
      "Rangka Kolom Besi WF / Hollow Tebal Kokoh",
      "Sistem Talang Air Dalam Anti Bocor",
      "Tahan Panas Terik UV & Badai Hujan",
    ],
    tag: "Tahan Puluhan Tahun",
  },
  {
    id: "railing",
    category: "Railing Tangga",
    title: "Railing Tangga & Balkon Mewah",
    description:
      "Pegangan tangga artistik dan aman untuk interior maupun balkon lantai dua dengan pengelasan presisi halus tanpa cacat.",
    price: "Mulai Rp 450.000 / m¹",
    features: [
      "Handrail Kayu Kamper / Besi Hollow / Stainless",
      "Kombinasi Kaca Tempered 10mm atau Jari-jari Rapat",
      "Pengelasan TIG / MIG Halus Mulus",
      "Standar Keamanan Tinggi Ramah Anak",
    ],
    tag: "Finishing Mewah",
  },
  {
    id: "pintu",
    category: "Pintu Besi",
    title: "Pintu Kawat Nyamuk & Tralis Dobel",
    description:
      "Pintu pengaman berlapis kawat baja (kasa nyamuk baja) menjaga aliran angin segar tanpa kompromi keamanan hunian.",
    price: "Mulai Rp 1.850.000 / unit",
    features: [
      "Kawat Kasa Baja Anti Sobek / Anti Gunting",
      "Sistem Kunci Ganda Multi-Point Lock",
      "Termasuk Handle Lever & Karet Redam Benturan",
      "Pilihan Warna Custom Sesuai Kusen Pintu",
    ],
    tag: "Keamanan Ekstra",
  },
];

const ADVANTAGES = [
  {
    icon: ShieldCheck,
    title: "Material Besi SNI Asli",
    description:
      "Hanya menggunakan besi hollow galvanis dan plat tebal berkualitas asli SNI, tidak pernah memakai besi tipis banci.",
  },
  {
    icon: Flame,
    title: "Cat Oven & Epoxy Anti Karat",
    description:
      "Proteksi berlapis: cairan penetral karat, primer epoxy anti korosi, dan cat duco tahan cuaca ekstrem bertahun-tahun.",
  },
  {
    icon: Hammer,
    title: "Tukang Las Presisi & Berpengalaman",
    description:
      "Tim aplikator las berstandar industri dengan pengalaman 10+ tahun menghasilkan sambungan las rata, rapi, dan kokoh.",
  },
  {
    icon: Ruler,
    title: "Gratis Survei & Desain 3D",
    description:
      "Layanan survei pengukuran langsung ke rumah/proyek Anda beserta konsultasi model tanpa dipungut biaya sepeserpun.",
  },
  {
    icon: Award,
    title: "Garansi Konstruksi 1 Tahun",
    description:
      "Jaminan kepuasan pelanggan penuh dengan surat garansi perbaikan konstruksi pengelasan dan engsel secara cuma-cuma.",
  },
  {
    icon: Clock,
    title: "Pengerjaan Tepat Waktu",
    description:
      "Jadwal fabrikasi bengkel dan instalasi di lokasi terikat komitmen waktu yang jelas dan dapat dipantau.",
  },
];

const FAQS = [
  {
    question: "Apakah survei pengukuran ke lokasi dikenakan biaya?",
    answer:
      "Tidak! Survei pengukuran langsung ke rumah atau proyek Anda 100% GRATIS dan tanpa kewajiban apa pun. Tim kami akan membawakan sampel bahan, mengukur secara detail, dan memberikan rincian anggaran di tempat.",
  },
  {
    question: "Berapa lama proses pembuatan dan pemasangan?",
    answer:
      "Rata-rata pembuatan di bengkel memakan waktu 5–12 hari kerja tergantung luas dan tingkat kerumitan desain. Proses instalasi di rumah biasanya selesai hanya dalam 1–2 hari kerja.",
  },
  {
    question: "Apakah bisa request desain kustom atau bawa foto model sendiri?",
    answer:
      "Sangat bisa! Anda cukup mengirimkan foto contoh dari Pinterest, Instagram, maupun gambar arsitek. Tim kami akan menyesuaikan dimensi dan spesifikasi material agar presisi dengan ukuran rumah Anda.",
  },
  {
    question: "Bagaimana sistem pembayaran pemesanan?",
    answer:
      "Pembayaran bertahap yang aman: DP 30%–50% saat kesepakatan desain (untuk belanja material fabrikasi), dan pelunasan dibayarkan setelah tralis atau pagar terpasang sempurna dengan kepuasan Anda.",
  },
  {
    question: "Apakah ada garansi setelah pemasangan selesai?",
    answer:
      "Ya, setiap proyek kami berikan garansi resmi perbaikan sambungan las dan engsel selama 1 tahun penuh. Jika ada kendala, tim kami segera datang tanpa dipungut biaya tambahan.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Dynamic Portfolio from Storage
  const [portfolioList, setPortfolioList] = React.useState<PortfolioItem[]>([]);
  const [activeCategoryFilter, setActiveCategoryFilter] = React.useState<string>("all");
  const [selectedProjectDetail, setSelectedProjectDetail] = React.useState<PortfolioItem | null>(null);

  // Estimator State
  const [selectedProduct, setSelectedProduct] = React.useState<string>("tralis");
  const [width, setWidth] = React.useState<number>(2.5);
  const [height, setHeight] = React.useState<number>(1.5);
  const [materialTier, setMaterialTier] = React.useState<"standar" | "premium" | "luxury">("premium");

  // Load portfolio from storage
  React.useEffect(() => {
    setPortfolioList(getStoredPortfolioItems());

    const handlePortfolioUpdate = (e: any) => {
      setPortfolioList(e.detail || getStoredPortfolioItems());
    };
    window.addEventListener("portfolio-updated", handlePortfolioUpdate);
    return () => window.removeEventListener("portfolio-updated", handlePortfolioUpdate);
  }, []);

  // Filtered portfolio
  const filteredPortfolio = React.useMemo(() => {
    if (activeCategoryFilter === "all") return portfolioList;
    return portfolioList.filter((item) => item.category === activeCategoryFilter);
  }, [portfolioList, activeCategoryFilter]);

  // Round numbers cleanly to nearest 50,000 for realistic, professional pricing
  const roundToNearest = (num: number, roundTo = 50000) => {
    return Math.round(num / roundTo) * roundTo;
  };

  // Cost calculation
  const calculateEstimate = () => {
    const area = Math.max(1, width * height);
    let baseRate = 350000;
    let productName = "Tralis Jendela";
    if (selectedProduct === "pagar") {
      baseRate = 650000;
      productName = "Pagar Modern";
    }
    if (selectedProduct === "kanopi") {
      baseRate = 550000;
      productName = "Kanopi Atap";
    }
    if (selectedProduct === "railing") {
      baseRate = 450000;
      productName = "Railing Tangga";
    }
    if (selectedProduct === "pintu") {
      baseRate = 950000;
      productName = "Pintu Besi Tralis";
    }

    let multiplier = 1.0;
    let materialName = "Standar SNI (1.2mm)";
    if (materialTier === "premium") {
      multiplier = 1.25;
      materialName = "Premium Anti Karat (1.6mm + Epoxy)";
    }
    if (materialTier === "luxury") {
      multiplier = 1.6;
      materialName = "Heavy Duty Laser (2.0mm / Plat CNC)";
    }

    const calculatedRaw = area * baseRate * multiplier;
    const minPrice = roundToNearest(calculatedRaw * 0.95);
    const maxPrice = roundToNearest(calculatedRaw * 1.1);

    return {
      productName,
      materialName,
      area: area.toFixed(1),
      minPrice,
      maxPrice,
      minFormatted: minPrice.toLocaleString("id-ID"),
      maxFormatted: maxPrice.toLocaleString("id-ID"),
    };
  };

  const estimate = calculateEstimate();

  const getWaLink = (messageText: string) => {
    return `https://wa.me/6281234567890?text=${encodeURIComponent(messageText)}`;
  };

  const estimatorWaMessage = `Halo Bisnis Tralis, saya ingin konsultasi dan survei gratis untuk kebutuhan:\n- Jenis: ${
    estimate.productName
  }\n- Ukuran: ${width}m x ${height}m (${estimate.area} m²)\n- Pilihan Bahan: ${
    estimate.materialName
  }\n- Estimasi di Web: Rp ${estimate.minFormatted} - Rp ${estimate.maxFormatted}\nMohon jadwal survei ke alamat rumah saya. Terima kasih!`;

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-900 flex flex-col font-sans selection:bg-sky-500/20">
      {/* Top Special Notice Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium border-b border-sky-900/50 shadow-sm flex items-center justify-center gap-2">
        <Sparkles className="h-4 w-4 animate-pulse text-amber-400 shrink-0" />
        <span>
          <strong>Promo Spesial Workshop:</strong> Gratis Survei Pengukuran ke Rumah & Konsultasi Desain 3D (Area Jabodetabek)!
        </span>
      </div>

      {/* Modern Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3.5 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-sky-600 via-sky-700 to-indigo-800 flex items-center justify-center text-white shadow-md shadow-sky-600/30 group-hover:scale-105 transition-transform duration-200 border border-white/20">
              <Shield className="h-5 w-5 fill-white/25 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-none group-hover:text-sky-600 transition-colors">
                Bisnis Tralis
              </span>
              <span className="text-[11px] text-slate-500 font-semibold tracking-wide uppercase mt-1">
                Bengkel Las & Spesialis Konstruksi Besi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Flow: Portofolio -> Produk -> Keunggulan -> Estimasi -> FAQ -> Kontak */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-slate-600">
            <Link
              href="#portofolio"
              className="px-3.5 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              <span>Portofolio Hasil Proyek</span>
            </Link>
            <Link
              href="#produk"
              className="px-3.5 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              Produk & Layanan
            </Link>
            <Link
              href="#keunggulan"
              className="px-3.5 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              Keunggulan
            </Link>
            <Link
              href="#estimasi"
              className="px-3.5 py-2 rounded-lg text-sky-700 bg-sky-50 hover:bg-sky-100 font-bold transition-all flex items-center gap-1.5"
            >
              <SlidersHorizontal className="h-3.5 w-3.5 text-sky-600" />
              <span>Kalkulator Biaya</span>
            </Link>
            <Link
              href="#faq"
              className="px-3.5 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              FAQ
            </Link>
            <Link
              href="#kontak"
              className="px-3.5 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              Kontak
            </Link>
          </nav>

          {/* Top Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/owner" className="hidden sm:inline-flex">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold h-9 rounded-lg"
                title="Portal Pemilik untuk input dan kelola foto portofolio"
              >
                <Lock className="h-3.5 w-3.5 text-sky-600" />
                <span>Area Owner</span>
              </Button>
            </Link>

            <ThemeToggle />

            <a
              href={getWaLink("Halo Bisnis Tralis, saya ingin konsultasi produk dan survei gratis.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
            >
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-9 px-4 rounded-lg gap-2 shadow-sm shadow-emerald-600/30">
                <MessageCircle className="h-4 w-4" />
                <span>Konsultasi WA</span>
              </Button>
            </a>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-slate-700 h-9 w-9"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-2 shadow-xl animate-in slide-in-from-top-2">
            <Link
              href="#portofolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-bold text-sky-700 hover:bg-slate-50"
            >
              ✨ Portofolio Hasil Proyek
            </Link>
            <Link
              href="#produk"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Produk & Layanan
            </Link>
            <Link
              href="#keunggulan"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Keunggulan
            </Link>
            <Link
              href="#estimasi"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-bold bg-sky-50 text-sky-700"
            >
              🧮 Kalkulator Simulasi Biaya
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              FAQ
            </Link>
            <Link
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Kontak & Lokasi
            </Link>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link href="/owner" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full gap-2 border-slate-300 text-slate-800">
                  <Lock className="h-4 w-4 text-sky-600" />
                  Area Owner (Input Portofolio)
                </Button>
              </Link>
              <a
                href={getWaLink("Halo Bisnis Tralis, saya ingin konsultasi produk dan survei gratis.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-2 shadow-md shadow-emerald-600/20">
                  <MessageCircle className="h-4 w-4" />
                  Chat WhatsApp Sekarang
                </Button>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-sky-50/50 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100/90 px-3.5 py-1 text-xs font-bold text-sky-800 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Bengkel Las & Spesialis Konstruksi Besi Sejak 2011</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Pengaman Rumah Elegan & Tralis Modern{" "}
                <span className="bg-gradient-to-r from-sky-600 via-sky-700 to-indigo-700 bg-clip-text text-transparent">
                  Standar SNI
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Lindungi rumah dan percantik estetika hunian dengan Tralis Jendela Minimalis, Pagar Laser Cutting CNC,
                Kanopi Alderon, dan Railing Tangga dari besi galvanis tebal anti-karat bergaransi resmi 1 tahun.
              </p>

              {/* Key Trust Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Besi Hollow SNI Tebal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Cat Oven Anti Karat</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Gratis Survei & Desain 3D</span>
                </div>
              </div>

              {/* Dual CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <Link href="#portofolio" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white font-bold h-12 px-7 rounded-xl shadow-lg shadow-sky-600/25 gap-2">
                    <Sparkles className="h-4 w-4 text-amber-300" />
                    Lihat Galeri Hasil Proyek
                  </Button>
                </Link>
                <a
                  href={getWaLink(
                    "Halo Bisnis Tralis, saya mau klaim GRATIS survei lokasi & konsultasi desain 3D untuk rumah saya."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white font-bold h-12 px-6 rounded-xl border-slate-300 text-slate-800 hover:bg-slate-50 gap-2 shadow-sm">
                    <MessageCircle className="h-4 w-4 text-emerald-600" />
                    Gratis Survei & Desain
                  </Button>
                </a>
              </div>

              {/* Micro Stats */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 max-w-lg">
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">1.500+</p>
                  <p className="text-xs text-slate-500 font-medium">Proyek Selesai</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-sky-600">100%</p>
                  <p className="text-xs text-slate-500 font-medium">Material SNI Asli</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600">4.9 / 5.0</p>
                  <p className="text-xs text-slate-500 font-medium">Rating Kepuasan</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white p-3">
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
                    alt="Pagar dan Tralis Modern Hasil Bengkel Las"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/95 text-slate-900 backdrop-blur-md border border-slate-200 font-bold px-3 py-1 shadow-sm">
                      Proyek Unggulan #1
                    </Badge>
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold text-sky-300">Pagar Laser Cutting + Tralis Jendela</p>
                    <p className="text-sm font-bold text-white">Cluster NavaPark, BSD City</p>
                  </div>
                </div>

                {/* Floating Glassmorphism Badges */}
                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-3 shadow-xl flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-slate-900">Garansi 1 Tahun</p>
                    <p className="text-[10px] text-slate-500 font-medium">Sambungan las & engsel resmi</p>
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-2.5 shadow-xl flex items-center gap-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-800">4.9 / 5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PORTFOLIO SECTION (CUSTOMER SHOWCASE & EXPLORATION) */}
      <section id="portofolio" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3 max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1 text-xs font-bold text-sky-700">
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                <span>Galeri Nyata Hasil Pengerjaan</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Portofolio Proyek yang Sudah Kami Buat
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Bukti kualitas nyata tralis jendela, pagar laser cutting, kanopi, dan railing tangga langsung di lokasi klien.
                Setiap pengerjaan difabrikasi dengan ketelitian tinggi dan garansi resmi.
              </p>
            </div>

            {/* Quick Link to Owner Portal */}
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-2xl flex items-center justify-between gap-3 shrink-0">
              <div className="text-left">
                <p className="text-xs font-bold text-slate-800">Pemilik Bisnis Tralis?</p>
                <p className="text-[11px] text-slate-500">Input proyek terbaru Anda sekarang.</p>
              </div>
              <Link href="/owner">
                <Button size="sm" className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold gap-1.5 rounded-xl">
                  <Lock className="h-3.5 w-3.5" />
                  + Input Proyek
                </Button>
              </Link>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: "all", label: "Semua Proyek" },
              { id: "tralis", label: "Tralis Jendela" },
              { id: "pagar", label: "Pagar Modern" },
              { id: "kanopi", label: "Kanopi" },
              { id: "railing", label: "Railing Tangga" },
              { id: "pintu", label: "Pintu Besi" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                  activeCategoryFilter === cat.id
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/25 font-bold"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <Card
                key={item.id}
                className="bg-white border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Container */}
                  <div
                    className="relative h-60 w-full overflow-hidden bg-slate-100 cursor-pointer"
                    onClick={() => setSelectedProjectDetail(item)}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-85" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <Badge className="bg-white/95 text-slate-900 backdrop-blur-md border border-slate-200 text-xs font-bold shadow-sm">
                        {item.categoryName}
                      </Badge>
                      {item.featured && (
                        <Badge className="bg-amber-500 text-white text-xs font-bold gap-1 shadow-sm">
                          <Star className="h-3 w-3 fill-white" />
                          Unggulan
                        </Badge>
                      )}
                    </div>

                    {/* Bottom overlay text */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                      <p className="text-xs flex items-center gap-1 font-medium text-slate-200">
                        <MapPin className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                        {item.client} &bull; {item.location} ({item.year})
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <h3
                      onClick={() => setSelectedProjectDetail(item)}
                      className="font-bold text-lg text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1 cursor-pointer"
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Specifications List */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Spesifikasi Material:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {item.specifications.slice(0, 2).map((spec, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Client Review Quote */}
                    {item.clientReview && (
                      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs text-slate-600 italic">
                        <div className="flex items-center gap-1 text-amber-500 mb-1 not-italic">
                          {[...Array(item.rating || 5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-amber-500" />
                          ))}
                        </div>
                        &ldquo;{item.clientReview}&rdquo;
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 pt-0 space-y-2 border-t border-slate-100 mt-2">
                  <div className="flex items-center justify-between text-xs pt-3">
                    <span className="text-slate-500 font-medium">Estimasi Nilai Proyek:</span>
                    <span className="font-extrabold text-slate-900 text-sm">
                      {item.estimatedCost || "Sesuai Ukuran"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProjectDetail(item)}
                      className="w-full text-xs font-semibold border-slate-300 hover:bg-slate-100 rounded-xl"
                    >
                      Lihat Spek
                    </Button>
                    <a
                      href={getWaLink(
                        `Halo Bisnis Tralis, saya tertarik dengan model proyek "${item.title}" (${item.categoryName}) di lokasi ${item.location}. Boleh minta estimasi harga untuk rumah saya?`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold gap-1 rounded-xl shadow-sm">
                        <MessageCircle className="h-3.5 w-3.5" />
                        Pesan Model Ini
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredPortfolio.length === 0 && (
            <div className="text-center py-12 bg-slate-50 rounded-3xl border border-slate-200 space-y-3">
              <Layers className="h-10 w-10 text-slate-400 mx-auto" />
              <h3 className="text-base font-bold text-slate-700">Belum ada proyek di kategori ini</h3>
              <p className="text-xs text-slate-500">
                Pemilik dapat menambahkan proyek baru melalui Dashboard Owner.
              </p>
              <Link href="/owner">
                <Button size="sm" className="bg-sky-600 text-white rounded-xl">
                  + Input Portofolio Baru
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 3. PRODUCT CATALOG SECTION */}
      <section id="produk" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <Badge variant="outline" className="border-sky-300 text-sky-700 bg-sky-50 font-bold">
            Katalog Layanan
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Produk & Layanan Fabrikasi Besi
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Dibuat secara presisi di bengkel las mandiri dengan material terbaik dan finishing berkualitas tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((prod) => (
            <Card
              key={prod.id}
              className="bg-white border-slate-200 flex flex-col justify-between hover:shadow-xl hover:border-sky-300 transition-all duration-300 relative group overflow-hidden rounded-3xl"
            >
              <div className="absolute top-4 right-4">
                <Badge className="bg-sky-50 text-sky-700 border border-sky-200 font-bold">
                  {prod.tag}
                </Badge>
              </div>
              <CardHeader className="space-y-2">
                <span className="text-xs uppercase tracking-wider font-extrabold text-sky-600">
                  {prod.category}
                </span>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {prod.title}
                </CardTitle>
                <CardDescription className="text-sm text-slate-500 line-clamp-2">
                  {prod.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200">
                  <span className="text-xs text-slate-500 block font-medium">Estimasi Biaya Bahan & Las</span>
                  <span className="text-lg font-extrabold text-slate-900">{prod.price}</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  {prod.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <a
                  href={getWaLink(
                    `Halo Bisnis Tralis, saya tertarik dengan layanan ${prod.title}. Boleh minta info detail dan katalog fotonya?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button variant="outline" className="w-full font-bold border-slate-300 text-slate-800 hover:bg-sky-600 hover:text-white hover:border-transparent transition-all gap-2 rounded-xl">
                    <span>Tanya Produk Ini</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US (KEUNGGULAN BENGKEL) */}
      <section id="keunggulan" className="py-20 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <Badge variant="outline" className="border-sky-300 text-sky-700 bg-sky-50 font-bold">
              Keunggulan Kami
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Mengapa Memilih Bisnis Tralis?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Kami mengutamakan keselamatan keluarga Anda dengan pengerjaan besi kuat, presisi, dan estetika tinggi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-3xl p-6 space-y-3 hover:border-sky-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="h-12 w-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{adv.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. KALKULATOR SIMULASI BIAYA (PLACED AFTER EXPLORATION) */}
      <section id="estimasi" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100 px-3.5 py-1 text-xs font-bold text-sky-800 shadow-sm">
              <SlidersHorizontal className="h-3.5 w-3.5 text-sky-600" />
              <span>Kalkulator Mandiri & Transparan</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Sudah Menemukan Model Pilihan? Hitung Estimasinya di Sini!
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Setelah melihat hasil portofolio kami, tentukan perkiraan biaya sesuai ukuran ruangan dan kebutuhan rumah Anda dalam 3 langkah mudah.
            </p>
          </div>

          {/* Interactive Calculator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Card: Configurator Controls (7 Cols) */}
            <div className="lg:col-span-7 bg-slate-50/70 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-7">
              {/* Step 1: Product Category Selector */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-sky-600 text-white text-[11px] font-bold flex items-center justify-center">
                      1
                    </span>
                    <span>Pilih Kategori Produk</span>
                  </label>
                  <span className="text-[11px] text-slate-500 font-medium">Klik salah satu produk</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: "tralis", label: "Tralis Jendela", icon: Grid, rate: "Rp 350rb/m²" },
                    { id: "pagar", label: "Pagar Besi", icon: Layers, rate: "Rp 650rb/m²" },
                    { id: "kanopi", label: "Kanopi Atap", icon: HomeIcon, rate: "Rp 550rb/m²" },
                    { id: "railing", label: "Railing Tangga", icon: TrendingUp, rate: "Rp 450rb/m¹" },
                    { id: "pintu", label: "Pintu Tralis", icon: Shield, rate: "Rp 950rb/unit" },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isSelected = selectedProduct === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedProduct(item.id)}
                        className={`p-3.5 rounded-2xl border text-left transition-all duration-200 relative group flex flex-col justify-between ${
                          isSelected
                            ? "border-sky-600 bg-white shadow-md ring-2 ring-sky-600/30"
                            : "border-slate-200 bg-white hover:bg-slate-100 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-2">
                          <div
                            className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                              isSelected
                                ? "bg-sky-600 text-white shadow-sm shadow-sky-600/30"
                                : "bg-slate-100 text-slate-600 group-hover:text-slate-900"
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          {isSelected && (
                            <span className="h-4 w-4 rounded-full bg-sky-600 text-white flex items-center justify-center text-[10px]">
                              ✓
                            </span>
                          )}
                        </div>
                        <div>
                          <p className={`text-xs font-bold ${isSelected ? "text-sky-950 font-extrabold" : "text-slate-800"}`}>
                            {item.label}
                          </p>
                          <p className="text-[10px] text-slate-500 font-medium mt-0.5">{item.rate}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Dimension Sliders */}
              <div className="space-y-4 pt-2 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-sky-600 text-white text-[11px] font-bold flex items-center justify-center">
                      2
                    </span>
                    <span>Tentukan Ukuran (Meter)</span>
                  </label>
                  <span className="text-xs font-extrabold text-sky-700 bg-white border border-sky-200 px-2.5 py-0.5 rounded-full shadow-sm">
                    Total Luas: {estimate.area} m²
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  {/* Slider 1: Lebar / Panjang */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                      <span>Panjang / Lebar</span>
                      <span className="text-sm font-extrabold text-sky-700">{width} Meter</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="12"
                      step="0.5"
                      value={width}
                      onChange={(e) => setWidth(parseFloat(e.target.value))}
                      aria-label="Lebar atau panjang dalam meter"
                    />
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold pt-1">
                      <button
                        type="button"
                        onClick={() => setWidth(Math.max(1, width - 0.5))}
                        className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700 font-bold"
                      >
                        - 0.5m
                      </button>
                      <span>1m s/d 12m</span>
                      <button
                        type="button"
                        onClick={() => setWidth(Math.min(12, width + 0.5))}
                        className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700 font-bold"
                      >
                        + 0.5m
                      </button>
                    </div>
                  </div>

                  {/* Slider 2: Tinggi */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                      <span>Tinggi</span>
                      <span className="text-sm font-extrabold text-sky-700">{height} Meter</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="4.5"
                      step="0.1"
                      value={height}
                      onChange={(e) => setHeight(parseFloat(e.target.value))}
                      aria-label="Tinggi dalam meter"
                    />
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold pt-1">
                      <button
                        type="button"
                        onClick={() => setHeight(Math.max(0.5, parseFloat((height - 0.2).toFixed(1))))}
                        className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700 font-bold"
                      >
                        - 0.2m
                      </button>
                      <span>0.5m s/d 4.5m</span>
                      <button
                        type="button"
                        onClick={() => setHeight(Math.min(4.5, parseFloat((height + 0.2).toFixed(1))))}
                        className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700 font-bold"
                      >
                        + 0.2m
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick Preset Buttons */}
                <div className="flex items-center gap-1.5 flex-wrap pt-1">
                  <span className="text-[11px] text-slate-500 font-medium">Contoh Ukuran Cepat:</span>
                  {[
                    { label: "Jendela Kamar (1.5 × 1.2m)", w: 1.5, h: 1.2, p: "tralis" },
                    { label: "Pagar Rumah (3.0 × 1.8m)", w: 3.0, h: 1.8, p: "pagar" },
                    { label: "Carport (5.0 × 4.0m)", w: 5.0, h: 4.0, p: "kanopi" },
                  ].map((preset, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setWidth(preset.w);
                        setHeight(preset.h);
                        setSelectedProduct(preset.p);
                      }}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-sky-100 hover:text-sky-800 transition-colors shadow-sm"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Material Quality Tier */}
              <div className="space-y-3 pt-2 border-t border-slate-200">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-sky-600 text-white text-[11px] font-bold flex items-center justify-center">
                    3
                  </span>
                  <span>Pilihan Spesifikasi Kualitas Material</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    {
                      id: "standar",
                      label: "Standar SNI",
                      desc: "Hollow Galvanis 1.2mm",
                      badge: "Ekonomis",
                    },
                    {
                      id: "premium",
                      label: "Premium Anti Karat",
                      desc: "Hollow 1.6mm + Epoxy Primer",
                      badge: "Paling Diminati",
                      isRecommended: true,
                    },
                    {
                      id: "luxury",
                      label: "Heavy Duty Luxury",
                      desc: "Hollow 2.0mm / Plat Laser Cut",
                      badge: "Maksimal",
                    },
                  ].map((tier) => {
                    const isSelected = materialTier === tier.id;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setMaterialTier(tier.id as any)}
                        className={`p-3.5 rounded-2xl border text-left transition-all duration-200 relative ${
                          isSelected
                            ? "border-sky-600 bg-white shadow-md ring-2 ring-sky-600/30"
                            : "border-slate-200 bg-white hover:bg-slate-100"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span
                            className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                              tier.isRecommended
                                ? "bg-amber-100 text-amber-800 border border-amber-300"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {tier.badge}
                          </span>
                          <span
                            className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? "border-sky-600 bg-sky-600 text-white text-[10px]"
                                : "border-slate-300 bg-white"
                            }`}
                          >
                            {isSelected && "✓"}
                          </span>
                        </div>
                        <p className="text-xs font-bold text-slate-900">{tier.label}</p>
                        <p className="text-[11px] text-slate-500 font-medium mt-0.5">{tier.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Card: Executive Live Quote Slip (5 Cols) */}
            <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-500 via-indigo-600 to-emerald-500" />

              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-sky-600 block">
                      Rincian Penawaran
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900">Perkiraan Biaya</h3>
                  </div>
                  <Badge className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold">
                    ● Real-Time
                  </Badge>
                </div>

                {/* Selected Summary Items */}
                <div className="space-y-2.5 text-xs text-slate-600 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/70">
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Jenis Produk:</span>
                    <span className="font-bold text-slate-900">{estimate.productName}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Dimensi Ruangan:</span>
                    <span className="font-bold text-slate-900">
                      {width}m × {height}m ({estimate.area} m²)
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Grade Bahan:</span>
                    <span className="font-bold text-slate-900">{estimate.materialName}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Finishing Cat:</span>
                    <span className="font-bold text-emerald-700">Epoxy Primer Anti Karat</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500 font-medium">Survei & Desain 3D:</span>
                    <span className="font-extrabold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full text-[10px]">
                      GRATIS (Rp 0)
                    </span>
                  </div>
                </div>

                {/* Price Display Box */}
                <div className="bg-gradient-to-br from-sky-50 via-white to-sky-100/50 p-5 rounded-2xl border border-sky-200 text-center space-y-1">
                  <span className="text-xs font-semibold text-slate-500 block">Kisaran Total Anggaran:</span>
                  <p className="text-2xl sm:text-3xl font-extrabold text-sky-900 tracking-tight">
                    Rp {estimate.minFormatted} - Rp {estimate.maxFormatted}
                  </p>
                  <p className="text-[11px] text-slate-500 pt-1">
                    *Sudah mencakup bahan SNI, perakitan las bengkel, cat anti karat, dan ongkos pasang standar.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <a
                  href={getWaLink(estimatorWaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold h-12 text-sm rounded-xl gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02]">
                    <MessageCircle className="h-5 w-5" />
                    Kunci Estimasi Ini via WhatsApp
                  </Button>
                </a>

                {/* Trust guarantees under button */}
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-500 text-center pt-1">
                  <div className="flex items-center justify-center gap-1">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Survei Jabodetabek Gratis</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Garansi Las 1 Tahun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ ACCORDION SECTION */}
      <section id="faq" className="py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <Badge variant="outline" className="border-sky-300 text-sky-700 bg-sky-50 font-bold">
              Pertanyaan Umum
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Tanya Jawab Seputar Pemesanan (FAQ)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Informasi lengkap dan transparan sebelum Anda memutuskan memesan.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-slate-200 bg-white rounded-2xl px-5 py-1 shadow-sm"
              >
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 7. CONTACT & CTA SECTION */}
      <section id="kontak" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold backdrop-blur-md">
              <Phone className="h-3.5 w-3.5 text-sky-400" />
              <span>Respon Cepat Setiap Hari</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Ingin Rumah Anda Lebih Aman dan Elegan?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Hubungi tim bengkel las kami sekarang untuk mendapatkan jadwal survei lokasi dan konsultasi langsung dengan
              kepala teknisi kami. 100% Gratis tanpa biaya survei!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={getWaLink(
                  "Halo Bisnis Tralis, saya ingin jadwalkan survei ke alamat rumah saya untuk tralis dan pagar."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 h-12 text-base gap-2 shadow-lg shadow-emerald-500/20 rounded-xl">
                  <MessageCircle className="h-5 w-5" />
                  Chat WhatsApp Sekarang
                </Button>
              </a>
              <a href="tel:+6281234567890">
                <Button size="lg" variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold h-12 text-base gap-2 rounded-xl">
                  <Phone className="h-4 w-4" />
                  Telepon Workshop
                </Button>
              </a>
            </div>

            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sky-400 shrink-0" />
                <span>Workshop: Jl. Industri Besi No. 88</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-sky-400 shrink-0" />
                <span>Senin - Sabtu: 08.00 - 17.00 WIB</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                <span>Melayani Jabodetabek & Sekitarnya</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-12 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
              T
            </div>
            <span className="font-bold text-slate-900">Website Bisnis Tralis</span>
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold">
            <Link href="#portofolio" className="hover:text-slate-900">
              Portofolio
            </Link>
            <Link href="#produk" className="hover:text-slate-900">
              Produk
            </Link>
            <Link href="#keunggulan" className="hover:text-slate-900">
              Keunggulan
            </Link>
            <Link href="#estimasi" className="hover:text-slate-900">
              Simulasi Biaya
            </Link>
            <Link href="#faq" className="hover:text-slate-900">
              FAQ
            </Link>
            <Link href="/owner" className="text-sky-600 hover:text-sky-700 flex items-center gap-1 font-bold">
              <Lock className="h-3 w-3" />
              Area Owner
            </Link>
          </div>
        </div>
      </footer>

      {/* Modal Dialog Detail Proyek Portofolio */}
      {selectedProjectDetail && (
        <Dialog open={!!selectedProjectDetail} onOpenChange={(open) => !open && setSelectedProjectDetail(null)}>
          <DialogContent className="max-w-2xl bg-white border-slate-200 p-0 overflow-hidden rounded-3xl shadow-2xl">
            <div className="relative h-72 w-full bg-slate-100">
              <img
                src={selectedProjectDetail.imageUrl}
                alt={selectedProjectDetail.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className="bg-white/95 text-slate-900 backdrop-blur-md border border-slate-200 font-bold">
                  {selectedProjectDetail.categoryName}
                </Badge>
                {selectedProjectDetail.featured && (
                  <Badge className="bg-amber-500 text-white font-bold">
                    Proyek Unggulan
                  </Badge>
                )}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <DialogHeader>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                  <MapPin className="h-3.5 w-3.5 text-sky-600" />
                  <span>
                    {selectedProjectDetail.client} &bull; {selectedProjectDetail.location} ({selectedProjectDetail.year})
                  </span>
                </div>
                <DialogTitle className="text-2xl font-bold text-slate-900">
                  {selectedProjectDetail.title}
                </DialogTitle>
                <DialogDescription className="text-sm text-slate-600 pt-1 leading-relaxed">
                  {selectedProjectDetail.description}
                </DialogDescription>
              </DialogHeader>

              {/* Specifications */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Rincian Spesifikasi Konstruksi:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {selectedProjectDetail.specifications.map((spec, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProjectDetail.clientReview && (
                <div className="border-l-4 border-amber-500 pl-4 py-1 text-xs text-slate-600 italic">
                  &ldquo;{selectedProjectDetail.clientReview}&rdquo;
                  <span className="block not-italic font-bold text-slate-800 mt-1">
                    — {selectedProjectDetail.client}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <span className="text-xs text-slate-500 block">Estimasi Nilai Proyek:</span>
                  <span className="text-lg font-extrabold text-slate-900">
                    {selectedProjectDetail.estimatedCost || "Sesuai Ukuran"}
                  </span>
                </div>
                <a
                  href={getWaLink(
                    `Halo Bisnis Tralis, saya melihat portofolio "${selectedProjectDetail.title}" di website. Saya ingin memesan model serupa untuk rumah saya di daerah [Alamat Saya].`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-2 rounded-xl">
                    <MessageCircle className="h-4 w-4" />
                    Pesan Model Ini via WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
