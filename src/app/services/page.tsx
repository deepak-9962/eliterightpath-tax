import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Tax, GST & Accounting Services in Chennai",
  description:
    "Comprehensive financial services: Income Tax returns, GST filings, company incorporation, bookkeeping, payroll, compliance, and audit support across Tamil Nadu.",
  alternates: {
    canonical: "https://eliterightpath.com/services/",
  },
  openGraph: {
    title: "Tax, GST & Accounting Services | Elite Right Path Tax Consultancy",
    description:
      "Comprehensive financial services: Income Tax returns, GST filings, company incorporation, bookkeeping, payroll, compliance, and audit support across Tamil Nadu.",
    url: "https://eliterightpath.com/services/",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Tax & Financial Services - Elite Right Path Tax Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax, GST & Accounting Services | Elite Right Path Tax Consultancy",
    description:
      "Comprehensive financial services: Income Tax returns, GST filings, company incorporation, bookkeeping, payroll, compliance, and audit support across Tamil Nadu.",
    images: ["/logo.jpeg"],
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
