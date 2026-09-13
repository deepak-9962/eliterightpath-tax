import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Tax Consultant in Chennai | Elite Right Path Tax Consultancy",
  description:
    "Expert income tax return filing, GST registration & compliance, bookkeeping, and business registration in Chennai, Tamil Nadu. Guided by Raj Paudel.",
  alternates: {
    canonical: "https://eliterightpath.com/",
  },
  openGraph: {
    title: "Tax Consultant in Chennai | Elite Right Path Tax Consultancy",
    description:
      "Expert income tax return filing, GST registration & compliance, bookkeeping, and business registration in Chennai, Tamil Nadu. Guided by Raj Paudel.",
    url: "https://eliterightpath.com/",
    type: "website",
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
    title: "Tax Consultant in Chennai | Elite Right Path Tax Consultancy",
    description:
      "Expert income tax return filing, GST registration & compliance, bookkeeping, and business registration in Chennai, Tamil Nadu. Guided by Raj Paudel.",
    images: ["/logo.jpeg"],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
