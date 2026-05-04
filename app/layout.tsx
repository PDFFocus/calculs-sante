import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ConsentBanner from "@/components/ConsentBanner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://calculs-sante.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Calculateurs de santé gratuits — Calculs Santé",
    template: "%s — Calculs Santé",
  },
  description:
    "Calculateurs de santé gratuits : IMC, métabolisme de base, poids idéal, calories journalières, date d'accouchement. Résultats instantanés et explications claires.",
  openGraph: {
    siteName: "Calculs Santé",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900 font-sans">
        <SiteHeader />
        {children}
        <SiteFooter />
        <ConsentBanner />
      </body>
    </html>
  );
}
