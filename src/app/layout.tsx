import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "sans-serif",
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  title: "Website Bisnis Tralis - Bengkel Las & Spesialis Tralis Modern",
  description:
    "Website resmi Bisnis Tralis. Spesialis tralis jendela minimalis, pagar modern, kanopi berkualitas, dan railing tangga dengan harga terbaik.",
  keywords: ["tralis", "tralis jendela", "kanopi", "pagar besi", "bengkel las", "bisnis tralis"],
  authors: [{ name: "Bisnis Tralis" }],
  openGraph: {
    title: "Website Bisnis Tralis - Bengkel Las & Spesialis Tralis Modern",
    description: "Solusi Pengaman & Dekorasi Rumah Berkualitas Tinggi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
