import type { Metadata } from "next";
import FaqsPageClient from "./FaqsPageClient";

export const metadata: Metadata = {
  title: "Tax & GST Frequently Asked Questions",
  description:
    "Find clear answers to common questions regarding Income Tax filing, GST registration, returns, deadlines, bookkeeping, and business compliance in Tamil Nadu.",
  alternates: {
    canonical: "https://eliterightpath.com/faqs/",
  },
  openGraph: {
    title: "Tax & GST FAQs | Elite Right Path Tax Consultancy",
    description:
      "Find clear answers to common questions regarding Income Tax filing, GST registration, returns, deadlines, bookkeeping, and business compliance in Tamil Nadu.",
    url: "https://eliterightpath.com/faqs/",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Tax & GST FAQs - Elite Right Path Tax Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & GST FAQs | Elite Right Path Tax Consultancy",
    description:
      "Find clear answers to common questions regarding Income Tax filing, GST registration, returns, deadlines, bookkeeping, and business compliance in Tamil Nadu.",
    images: ["/logo.jpeg"],
  },
};

export default function FaqsPage() {
  return <FaqsPageClient />;
}
