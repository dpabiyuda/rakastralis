export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
        <h2 className="text-2xl font-semibold">Halaman Tidak Ditemukan</h2>
        <p className="text-muted-foreground">
          Maaf, halaman yang Anda cari tidak ada.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
}
