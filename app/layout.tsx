import type { Metadata, Viewport } from "next";
import { NavigationProgress } from "@/components/NavigationProgress";
import { WebVitals } from "@/components/WebVitals";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tryzeon - AI × 時尚科技新創",
    template: "%s | Tryzeon"
  },
  description: "一張照片即可虛擬試穿，讓時尚購物更智能、更有趣。Tryzeon 提供 AI 虛擬試穿、動態影片生成、AI OOTD 推薦、時尚趨勢數據分析等完整解決方案。",
  keywords: ["AI", "虛擬試穿", "時尚科技", "Tryzeon", "AI試穿", "虛擬換裝", "時尚AI", "OOTD", "穿搭推薦", "動態影片"],
  authors: [{ name: "Tryzeon Team" }],
  creator: "Tryzeon",
  publisher: "Tryzeon",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "https://tryzeon.com",
    title: "Tryzeon - AI × 時尚科技新創",
    description: "一張照片即可虛擬試穿，讓時尚購物更智能、更有趣。",
    siteName: "Tryzeon",
    images: [
      {
        url: "/brand-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Tryzeon - AI 虛擬試穿",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tryzeon - AI × 時尚科技新創",
    description: "一張照片即可虛擬試穿，讓時尚購物更智能、更有趣。",
    images: ["/brand-hero.jpg"],
    creator: "@tryzeon",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F8F5F1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tryzeon',
    description: '一張照片即可虛擬試穿，讓時尚購物更智能、更有趣。',
    url: 'https://tryzeon.com',
    logo: 'https://tryzeon.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'tryzeon.team@gmail.com',
      contactType: 'Customer Service',
      areaServed: 'TW',
      availableLanguage: ['zh-TW', 'en'],
    },
    sameAs: [
      'https://www.instagram.com/tryzeon',
    ],
    foundingDate: '2024',
    founders: [
      {
        '@type': 'Person',
        name: 'Tryzeon Team',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TW',
    },
  };

  return (
    <html lang="zh-TW">
      <head>
        {/* Preload critical pages */}
        <link rel="prefetch" href="/experience" as="document" />
        <link rel="prefetch" href="/learn-more" as="document" />
        <link rel="prefetch" href="/demo" as="document" />
        <link rel="prefetch" href="/business" as="document" />
        <link rel="prefetch" href="/join" as="document" />
        <link rel="prefetch" href="/explore" as="document" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <NavigationProgress />
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
