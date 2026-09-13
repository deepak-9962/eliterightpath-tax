import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Tax Consultant in Chennai",
  description:
    "Contact Elite Right Path Tax Consultancy in Mogappair, Chennai. Call or WhatsApp +91 99402 43827, email eliterightpathtax@gmail.com for expert tax, GST, and accounting support.",
  alternates: {
    canonical: "https://eliterightpath.com/contact/",
  },
  openGraph: {
    title: "Contact Tax Consultant in Chennai | Elite Right Path Tax Consultancy",
    description:
      "Contact Elite Right Path Tax Consultancy in Mogappair, Chennai. Call or WhatsApp +91 99402 43827, email eliterightpathtax@gmail.com for expert tax, GST, and accounting support.",
    url: "https://eliterightpath.com/contact/",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact Elite Right Path Tax Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tax Consultant in Chennai | Elite Right Path Tax Consultancy",
    description:
      "Contact Elite Right Path Tax Consultancy in Mogappair, Chennai. Call or WhatsApp +91 99402 43827, email eliterightpathtax@gmail.com for expert tax, GST, and accounting support.",
    images: ["/logo.jpeg"],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
