import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "WordBit - Free Online Text Tools", template: "%s | WordBit" },
  description: "Free online text tools suite. Word counter, case converter, lorem ipsum generator, character counter, text repeater, and duplicate line remover. Fast, accurate, mobile-friendly — no signup required.",
  keywords: [
    "text tools", "online text tools", "free text tools", "text utility", "text editor online",
    "word counter", "character counter", "case converter", "lorem ipsum generator",
    "text repeater", "remove duplicates", "text manipulation", "string tools",
    "writing tools", "content tools", "SEO text tools", "text formatter",
    "text analyzer", "word count online", "text processing", "string manipulation",
    "text converter", "text generator", "copywriting tools", "blogging tools",
    "wordbit", "wordbit.io", "free online tools", "no signup text tools",
    "instant text tools", "fast text tools", "mobile text tools",
  ],
  authors: [{ name: "WordBit" }],
  metadataBase: new URL("https://wordbit.io"),
  alternates: {},
  openGraph: {
    type: "website", locale: "en_US", url: "https://wordbit.io", siteName: "WordBit",
    title: "WordBit - Free Online Text Tools",
    description: "Free online text tools suite. Fast, accurate, no signup required.",
    images: [{ url: "https://wordbit.io/og-image.png", width: 1200, height: 630, alt: "WordBit - Free Online Text Tools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordBit - Free Online Text Tools",
    description: "Free online text tools suite. Fast, accurate, no signup required.",
    images: ["https://wordbit.io/og-image.png"],
  },
  verification: {
    google: "1Y84dKVlrjXBgCgkswjjDIhmQwxDxNzjIGDpO1xLHtM",
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2929111398730262" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white">
        <TopNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
