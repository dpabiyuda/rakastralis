"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-destructive">Terjadi Kesalahan</h1>
        <p className="text-muted-foreground">{error.message || "Sesuatu yang tidak terduga terjadi."}</p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Coba Lagi
        </button>
      </div>
    </div>
  );
}
