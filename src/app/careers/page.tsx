import type { Metadata } from "next";
import CareersPageClient from "./CareersPageClient";

export const metadata: Metadata = {
  title: "Internship & Career Opportunities",
  description:
    "Explore internship and career openings in taxation, accounting, GST compliance, and audit support at Elite Right Path Tax Consultancy in Chennai.",
  alternates: {
    canonical: "https://eliterightpath.com/careers/",
  },
  openGraph: {
    title: "Internship & Career Opportunities | Elite Right Path Tax Consultancy",
    description:
      "Explore internship and career openings in taxation, accounting, GST compliance, and audit support at Elite Right Path Tax Consultancy in Chennai.",
    url: "https://eliterightpath.com/careers/",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Careers at Elite Right Path Tax Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Internship & Career Opportunities | Elite Right Path Tax Consultancy",
    description:
      "Explore internship and career openings in taxation, accounting, GST compliance, and audit support at Elite Right Path Tax Consultancy in Chennai.",
    images: ["/logo.jpeg"],
  },
};

export default function CareersPage() {
  return <CareersPageClient />;
}
