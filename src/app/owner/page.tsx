"use client";

import * as React from "react";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  Plus,
  Trash2,
  Star,
  Image as ImageIcon,
  CheckCircle2,
  ArrowLeft,
  Lock,
  LogOut,
  Sparkles,
  ExternalLink,
  Layers,
  MapPin,
  Calendar,
  DollarSign,
  RotateCcw,
  Eye,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  PortfolioItem,
  ProductCategory,
} from "@/types/portfolio";
import {
  getStoredPortfolioItems,
  addPortfolioItem,
  deletePortfolioItem,
  toggleFeaturedPortfolioItem,
  resetPortfolioToDefault,
  CATEGORY_LABELS,
  PRESET_IMAGES,
} from "@/lib/portfolio-data";
import { ThemeToggle } from "@/components/theme-toggle";

const DEFAULT_PIN = "owner123";

export default function OwnerPortal() {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
  const [pinInput, setPinInput] = React.useState<string>("");
  const [loginError, setLoginError] = React.useState<string>("");

  // Portfolio items state
  const [items, setItems] = React.useState<PortfolioItem[]>([]);
  const [isSuccessToast, setIsSuccessToast] = React.useState<string>("");

  // Form state
  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState<ProductCategory>("tralis");
  const [client, setClient] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [year, setYear] = React.useState(new Date().getFullYear().toString());
  const [imageUrl, setImageUrl] = React.useState(PRESET_IMAGES[0].url);
  const [description, setDescription] = React.useState("");
  const [specsText, setSpecsText] = React.useState(
    "Besi Hollow Galvanis 4x4 tebal 1.6mm SNI\nFinishing Cat Epoxy Primer + Duco Hitam Doff\nGaransi Sambungan Las 1 Tahun"
  );
  const [estimatedCost, setEstimatedCost] = React.useState("Rp 3.500.000");
  const [rating, setRating] = React.useState(5);
  const [clientReview, setClientReview] = React.useState("Pengerjaan sangat rapi, kuat, dan tepat waktu.");
  const [featured, setFeatured] = React.useState(true);

  // Check login on mount
  React.useEffect(() => {
    const authSession = sessionStorage.getItem("bisnis_tralis_owner_auth");
    if (authSession === "true") {
      setIsAuthenticated(true);
    }
    setItems(getStoredPortfolioItems());

    const handleUpdate = (e: any) => {
      setItems(e.detail || getStoredPortfolioItems());
    };
    window.addEventListener("portfolio-updated", handleUpdate);
    return () => window.removeEventListener("portfolio-updated", handleUpdate);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === DEFAULT_PIN || pinInput === "admin" || pinInput === "owner") {
      setIsAuthenticated(true);
      sessionStorage.setItem("bisnis_tralis_owner_auth", "true");
      setLoginError("");
    } else {
      setLoginError("Password salah. Silakan gunakan password default: owner123");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("bisnis_tralis_owner_auth");
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !client.trim() || !location.trim()) {
      alert("Mohon lengkapi Nama Proyek, Klien, dan Lokasi.");
      return;
    }

    const specifications = specsText
      .split("\n")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const created = addPortfolioItem({
      title: title.trim(),
      category,
      categoryName: CATEGORY_LABELS[category],
      client: client.trim(),
      location: location.trim(),
      year: year.trim() || new Date().getFullYear().toString(),
      imageUrl: imageUrl.trim() || PRESET_IMAGES[0].url,
      description: description.trim() || "Proyek fabrikasi dan pemasangan konstruksi besi berkualitas standar SNI.",
      specifications: specifications.length > 0 ? specifications : ["Material Standar SNI", "Finishing Anti Karat"],
      estimatedCost: estimatedCost.trim() || undefined,
      rating,
      clientReview: clientReview.trim() || undefined,
      featured,
    });

    // Reset form fields
    setTitle("");
    setClient("");
    setLocation("");
    setDescription("");
    setIsSuccessToast(`Proyek "${created.title}" berhasil ditambahkan ke portofolio!`);
    setTimeout(() => setIsSuccessToast(""), 4000);
  };

  const handleDelete = (id: string, projectTitle: string) => {
    if (confirm(`Yakin ingin menghapus proyek "${projectTitle}" dari portofolio?`)) {
      deletePortfolioItem(id);
      setIsSuccessToast("Proyek berhasil dihapus.");
      setTimeout(() => setIsSuccessToast(""), 3000);
    }
  };

  const handleToggleFeatured = (id: string) => {
    toggleFeaturedPortfolioItem(id);
  };

  const handleReset = () => {
    if (confirm("Reset portofolio ke contoh data awal bawaan sistem?")) {
      resetPortfolioToDefault();
      setIsSuccessToast("Portofolio direset ke data default.");
      setTimeout(() => setIsSuccessToast(""), 3000);
    }
  };

  // If not authenticated, show login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="h-12 w-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center mx-auto shadow-md shadow-sky-600/30">
              <Lock className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Portal Pemilik (Owner)</h1>
            <p className="text-sm text-slate-500">
              Masuk untuk menambah dan mengelola galeri portofolio hasil proyek Tralis Anda.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700">Password / PIN Owner</label>
              <Input
                type="password"
                placeholder="Masukkan password..."
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="bg-slate-50 border-slate-300 h-11"
                autoFocus
              />
              <p className="text-xs text-slate-400">
                Password default akses cepat: <code className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-mono">owner123</code>
              </p>
            </div>

            {loginError && (
              <div className="text-xs bg-rose-50 text-rose-600 border border-rose-200 rounded-lg p-3">
                {loginError}
              </div>
            )}

            <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold h-11">
              Masuk ke Dashboard Owner
            </Button>
          </form>

          <div className="pt-4 border-t border-slate-100 text-center">
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-800">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Beranda Pelanggan
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Toast Notification */}
      {isSuccessToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
          <span className="text-sm font-medium">{isSuccessToast}</span>
        </div>
      )}

      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold shadow-md shadow-sky-600/20">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <span className="font-extrabold text-base sm:text-lg text-slate-900">
                Dashboard Owner
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
                Admin Portofolio
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/" target="_blank" className="hidden sm:inline-flex">
              <Button variant="outline" size="sm" className="gap-1.5 text-slate-700">
                <Eye className="h-4 w-4" />
                <span>Lihat Tampilan Web</span>
              </Button>
            </Link>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-slate-600 hover:text-rose-600 gap-1.5"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Keluar</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 flex-1">
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-white border-slate-200">
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Portofolio</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">{items.length}</p>
              </div>
              <div className="h-11 w-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                <Layers className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200">
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Proyek Unggulan</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-500 mt-1">
                  {items.filter((i) => i.featured).length}
                </p>
              </div>
              <div className="h-11 w-11 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center font-bold">
                <Star className="h-5 w-5 fill-amber-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200">
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Rata-rata Rating</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600 mt-1">5.0 / 5.0</p>
              </div>
              <div className="h-11 w-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <CheckCircle2 className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200">
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Status Tampilan</p>
                <p className="text-sm font-bold text-slate-900 mt-2 flex items-center gap-1.5 text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Live ke Pelanggan
                </p>
              </div>
              <Link href="/" target="_blank">
                <Button size="icon" variant="ghost" className="text-slate-400 hover:text-slate-700">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Form and List Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form: Tambah Portofolio Baru */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
              <div className="h-9 w-9 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold">
                <Plus className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Input Portofolio Proyek Baru</h2>
                <p className="text-xs text-slate-500">Proyek langsung tampil di halaman depan website.</p>
              </div>
            </div>

            <form onSubmit={handleCreateProject} className="space-y-4">
              {/* Judul Proyek */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Nama Proyek / Model Tralis *
                </label>
                <Input
                  required
                  placeholder="Contoh: Tralis Jendela Minimalis Rumah Hook"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-slate-50 border-slate-300"
                />
              </div>

              {/* Kategori */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Kategori *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as ProductCategory)}
                    className="w-full h-10 px-3 rounded-md border border-slate-300 bg-slate-50 text-sm font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  >
                    <option value="tralis">Tralis Jendela</option>
                    <option value="pagar">Pagar Modern</option>
                    <option value="kanopi">Kanopi</option>
                    <option value="railing">Railing Tangga</option>
                    <option value="pintu">Pintu Besi</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Tahun Pengerjaan
                  </label>
                  <Input
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="2024"
                    className="bg-slate-50 border-slate-300"
                  />
                </div>
              </div>

              {/* Klien & Lokasi */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Nama Klien *
                  </label>
                  <Input
                    required
                    placeholder="Contoh: Bpk. Bambang"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    className="bg-slate-50 border-slate-300"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Lokasi / Perumahan *
                  </label>
                  <Input
                    required
                    placeholder="Contoh: Bintaro, Tangsel"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="bg-slate-50 border-slate-300"
                  />
                </div>
              </div>

              {/* Estimasi Biaya & Rating */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Biaya / Nilai Proyek
                  </label>
                  <Input
                    placeholder="Contoh: Rp 4.500.000"
                    value={estimatedCost}
                    onChange={(e) => setEstimatedCost(e.target.value)}
                    className="bg-slate-50 border-slate-300"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Rating Kepuasan
                  </label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(parseInt(e.target.value))}
                    className="w-full h-10 px-3 rounded-md border border-slate-300 bg-slate-50 text-sm font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  >
                    <option value="5">⭐⭐⭐⭐⭐ (5 Bintang)</option>
                    <option value="4">⭐⭐⭐⭐ (4 Bintang)</option>
                  </select>
                </div>
              </div>

              {/* Foto Proyek */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                  <span>Foto Hasil Proyek (URL Gambar)</span>
                  <span className="text-[11px] text-sky-600 font-normal">Bisa pakai preset di bawah</span>
                </label>
                <Input
                  placeholder="https://images.unsplash.com/..."
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="bg-slate-50 border-slate-300 text-xs"
                />

                {/* Preset Image Chooser */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-semibold text-slate-500">Pilih Cepat Foto Sesuai Kategori:</span>
                  <div className="grid grid-cols-3 gap-2">
                    {PRESET_IMAGES.slice(0, 6).map((preset, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => {
                          setImageUrl(preset.url);
                          setCategory(preset.category as ProductCategory);
                        }}
                        className={`text-left p-1.5 rounded-lg border text-[11px] transition-all relative overflow-hidden group ${
                          imageUrl === preset.url
                            ? "border-sky-600 bg-sky-50 font-bold"
                            : "border-slate-200 bg-white hover:bg-slate-50"
                        }`}
                      >
                        <div className="h-10 rounded bg-slate-100 overflow-hidden mb-1">
                          <img
                            src={preset.url}
                            alt={preset.label}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <span className="truncate block text-slate-800 text-[10px]">{preset.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Deskripsi Proyek */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Deskripsi Singkat
                </label>
                <Textarea
                  rows={2}
                  placeholder="Jelaskan kebutuhan pelanggan dan hasil pengerjaan..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-slate-50 border-slate-300 text-sm"
                />
              </div>

              {/* Spesifikasi Bahan (per baris) */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Spesifikasi Bahan & Cat (1 baris per poin)
                </label>
                <Textarea
                  rows={3}
                  value={specsText}
                  onChange={(e) => setSpecsText(e.target.value)}
                  className="bg-slate-50 border-slate-300 text-xs font-mono"
                  placeholder="Besi Hollow 4x4 tebal 1.6mm&#10;Cat Epoxy Primer Anti Karat&#10;Garansi 1 Tahun"
                />
              </div>

              {/* Testimoni Klien */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Testimoni / Ulasan Klien
                </label>
                <Input
                  value={clientReview}
                  onChange={(e) => setClientReview(e.target.value)}
                  placeholder="Komentar kepuasan klien..."
                  className="bg-slate-50 border-slate-300 text-sm"
                />
              </div>

              {/* Checkbox Featured */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="featured"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-sky-600 accent-sky-600"
                />
                <label htmlFor="featured" className="text-xs font-medium text-slate-700 cursor-pointer">
                  Jadikan Proyek Unggulan (Tampil paling atas dengan badge favorit)
                </label>
              </div>

              <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold h-11 gap-2 shadow-md shadow-sky-600/20">
                <Plus className="h-5 w-5" />
                Simpan & Publikasikan ke Website
              </Button>
            </form>
          </div>

          {/* List: Kelola Daftar Portofolio */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Daftar Portofolio Aktif ({items.length})</h2>
                <p className="text-xs text-slate-500">Portofolio ini langsung dilihat pelanggan di halaman utama.</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="text-xs gap-1.5 text-slate-600 hover:text-slate-900"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset Data Awal
              </Button>
            </div>

            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-sm hover:border-slate-300 transition-all flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-20 w-24 rounded-lg bg-slate-100 overflow-hidden shrink-0 border border-slate-200">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline" className="text-[11px] font-semibold border-sky-300 text-sky-700 bg-sky-50">
                          {item.categoryName}
                        </Badge>
                        {item.featured && (
                          <Badge className="bg-amber-100 text-amber-800 border-amber-300 text-[10px] font-semibold gap-1">
                            <Star className="h-3 w-3 fill-amber-500" />
                            Unggulan
                          </Badge>
                        )}
                        <span className="text-xs text-slate-400">{item.year}</span>
                      </div>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-slate-400" />
                        {item.client} &bull; {item.location}
                      </p>
                      {item.estimatedCost && (
                        <p className="text-xs font-semibold text-emerald-600">
                          {item.estimatedCost}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleToggleFeatured(item.id)}
                      className={`h-9 px-2.5 text-xs gap-1 ${
                        item.featured ? "text-amber-500 hover:text-amber-600" : "text-slate-400 hover:text-slate-700"
                      }`}
                      title={item.featured ? "Hapus dari Unggulan" : "Jadikan Unggulan"}
                    >
                      <Star className={`h-4 w-4 ${item.featured ? "fill-amber-500" : ""}`} />
                      <span className="hidden sm:inline">{item.featured ? "Unggulan" : "Biasa"}</span>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDelete(item.id, item.title)}
                      className="h-9 px-2.5 text-xs text-rose-500 hover:text-rose-700 hover:bg-rose-50"
                      title="Hapus proyek"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="hidden sm:inline">Hapus</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
