import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ToastProvider } from "@/components/layout/ToastProvider";
import { ScrollSpy } from "@/components/layout/ScrollSpy";
import { ScrollAnimations } from "@/components/animations/ScrollAnimations";

const agrandirRegular = localFont({
  src: "../public/fonts/Agrandir-Regular.otf",
  variable: "--font-primary",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
const agrandirGrand = localFont({
  src: "../public/fonts/Agrandir-GrandLight.otf",
  variable: "--font-secondary",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
const agrandirWide = localFont({
  src: "../public/fonts/Agrandir-WideLight.otf",
  variable: "--font-wide",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pureon-banana.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PUREON | From Nature to Quality",
    template: "%s | PUREON",
  },
  description:
    "PUREON manufactures and exports banana powder and fruit and vegetable dry powders, with a focus on quality, hygienic processing and dependable supply.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "PUREON | From Nature to Quality",
    description:
      "Nendharam Banana Health Mix and natural food ingredients from PUREON.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "PUREON | From Nature to Quality",
    description:
      "Nendharam Banana Health Mix and natural food ingredients from PUREON.",
  },
  icons: { icon: "/favicon.svg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "PUREON",
      description:
        "Manufacturing and export company specializing in banana powder and fruit and vegetable dry powders.",
      url: siteUrl,
      email: "pureon04@gmail.com",
      telephone: "+91 63807 06477",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        postalCode: "641407",
        addressCountry: "IN",
      },
    },
    {
      "@type": "Product",
      name: "PUREON Nendharam Banana Health Mix",
      brand: { "@type": "Brand", name: "PUREON" },
      image: `${siteUrl}/images/products/product-front.png`,
      weight: "250 g",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "350",
        availability: "https://schema.org/InStock",
      },
      description:
        "Banana health mix with banana powder, organic cereals, milk solids and natural vitamins & minerals.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${agrandirRegular.variable} ${agrandirGrand.variable} ${agrandirWide.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ToastProvider />
        <ScrollSpy />
        <ScrollAnimations />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
