import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/Common/ScrollUp";
import StructuredData from "@/components/SEO/StructuredData";
import { Providers } from "./providers";
import { Space_Grotesk, Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";
import "@/styles/index.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jimdistribution.ma";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "JIM DISTRIBUTION | Distribution Agroalimentaire & FMCG - Nord du Maroc",
    template: "%s | JIM DISTRIBUTION",
  },
  description:
    "Leader de la distribution agroalimentaire, logistique d'entreposage et représentation commerciale de marques FMCG dans le Nord du Maroc (Tanger, Tétouan, Martil, Al Hoceïma, Larache).",
  keywords: [
    "distribution agroalimentaire maroc",
    "distributeur fmcg nord maroc",
    "grossiste agroalimentaire tanger",
    "fournisseur produits alimentaires tetouan",
    "representation commerciale marques maroc",
    "logistique chaine du froid maroc",
    "distribution gms et chr maroc",
    "jim distribution",
    "jim distribution martil",
    "entreposage frigorifique tanger tetouan",
  ],
  authors: [{ name: "JIM DISTRIBUTION" }],
  creator: "JIM DISTRIBUTION",
  publisher: "JIM DISTRIBUTION",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    title: "JIM DISTRIBUTION | Distribution Agroalimentaire & FMCG - Nord du Maroc",
    description:
      "Votre partenaire de référence pour la distribution, le stockage sous température dirigée et la représentation commerciale des marques dans le Nord du Maroc.",
    siteName: "JIM DISTRIBUTION",
    images: [
      {
        url: "/images/hero/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "JIM DISTRIBUTION - Flotte logistique et entreposage Nord du Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JIM DISTRIBUTION | Distribution Agroalimentaire Nord du Maroc",
    description:
      "Distribution agroalimentaire, stockage aux normes et représentation de marques à Tanger, Tétouan, Martil et région.",
    images: ["/images/hero/hero-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="fr">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <StructuredData type="global" />
      </head>

      <body
        className={`bg-[#f6faff] dark:bg-[#141d23] text-[#141d23] dark:text-[#f6faff] ${spaceGrotesk.variable} ${geist.variable} ${geistMono.variable} ${geist.className}`}
      >
        <Providers>
          <div className="isolate">
            <Header />
            {children}
            <Footer />
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}


