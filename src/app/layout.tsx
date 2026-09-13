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
  metadataBase: new URL("https://eliterightpath.com"),
  title: {
    default: "Elite Right Path Tax Consultancy | Expert Tax & GST Services",
    template: "%s | Elite Right Path Tax Consultancy",
  },
  description:
    "Expert income tax, GST, accounting, and business registration services in Tamil Nadu. Guided by Mr. Raj Paudel — Guiding you on the right path to financial compliance and growth.",
  authors: [{ name: "Elite Right Path Tax Consultancy" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://eliterightpath.com/",
    siteName: "Elite Right Path Tax Consultancy",
    title: "Elite Right Path Tax Consultancy | Expert Tax & GST Services",
    description:
      "Expert income tax, GST, accounting, and business registration services. Guiding you on the right path to financial compliance and growth.",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Elite Right Path Tax Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Right Path Tax Consultancy | Expert Tax & GST Services",
    description:
      "Expert income tax, GST, accounting, and business registration services in Tamil Nadu.",
    images: ["/logo.jpeg"],
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
              "@graph": [
                {
                  "@type": ["AccountingService", "LocalBusiness"],
                  "@id": "https://eliterightpath.com/#organization",
                  name: "Elite Right Path Tax Consultancy",
                  description:
                    "Expert income tax, GST, accounting and business registration services guided by Mr. Raj Paudel",
                  url: "https://eliterightpath.com/",
                  telephone: "+919940243827",
                  email: "eliterightpathtax@gmail.com",
                  vatID: "33GAGPR3616R1Z2",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Mogappair",
                    addressRegion: "Tamil Nadu",
                    addressCountry: "IN",
                  },
                  founder: {
                    "@type": "Person",
                    name: "Raj Paudel",
                    jobTitle: "Proprietor & Tax Consultant",
                  },
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                      ],
                      opens: "10:00",
                      closes: "21:00",
                    },
                  ],
                  serviceArea: {
                    "@type": "State",
                    name: "Tamil Nadu",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://eliterightpath.com/#website",
                  url: "https://eliterightpath.com/",
                  name: "Elite Right Path Tax Consultancy",
                  publisher: {
                    "@id": "https://eliterightpath.com/#organization",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main style={{ overflowX: "clip", width: "100%", maxWidth: "100vw" }}>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
