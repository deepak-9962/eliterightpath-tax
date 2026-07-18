import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Elite Right Path Tax Consultancy | Expert Tax & GST Services",
    template: "%s | Elite Right Path Tax Consultancy",
  },
  description:
    "Expert income tax, GST, accounting, and business registration services in Tamil Nadu. Guided by Mr. Raj Paudel — Guiding you on the right path to financial compliance and growth.",
  keywords: [
    "tax consultancy",
    "GST filing",
    "income tax return",
    "ITR filing",
    "accounting services",
    "business registration",
    "tax consultant Tamil Nadu",
    "GST registration",
    "Elite Right Path Tax Consultancy",
  ],
  authors: [{ name: "Elite Right Path Tax Consultancy" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Elite Right Path Tax Consultancy",
    title: "Elite Right Path Tax Consultancy | Expert Tax & GST Services",
    description:
      "Expert income tax, GST, accounting, and business registration services. Guiding you on the right path to financial compliance and growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["AccountingService", "LocalBusiness"],
              name: "Elite Right Path Tax Consultancy",
              description:
                "Expert income tax, GST, accounting and business registration services guided by Mr. Raj Paudel",
              url: "https://eliterightpath.com",
              telephone: "+919360044152",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "Tamil Nadu",
              },
              vatID: "33GAGPR3616R1Z2",
              founder: {
                "@type": "Person",
                name: "Raj Paudel",
              },
              openingHours: "Mo-Sa 09:00-18:00",
              priceRange: "₹₹",
              serviceArea: {
                "@type": "State",
                name: "Tamil Nadu",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
