import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | Tax & GST Consultancy",
  description:
    "Learn about Elite Right Path Tax Consultancy, led by Raj Paudel in Mogappair, Chennai. Providing transparent, reliable tax, GST, and accounting services across Tamil Nadu.",
  alternates: {
    canonical: "https://eliterightpath.com/about/",
  },
  openGraph: {
    title: "About Us | Elite Right Path Tax Consultancy",
    description:
      "Learn about Elite Right Path Tax Consultancy, led by Raj Paudel in Mogappair, Chennai. Providing transparent, reliable tax, GST, and accounting services across Tamil Nadu.",
    url: "https://eliterightpath.com/about/",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "About Elite Right Path Tax Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Elite Right Path Tax Consultancy",
    description:
      "Learn about Elite Right Path Tax Consultancy, led by Raj Paudel in Mogappair, Chennai. Providing transparent, reliable tax, GST, and accounting services across Tamil Nadu.",
    images: ["/logo.jpeg"],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
