export const SITE_URL =
  process.env.NODE_ENV === "production"
    ? "https://eliterightpath.com"
    : process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://eliterightpath.com";

export const SITE_NAME = "Elite Right Path Tax Consultancy";

export const BUSINESS_INFO = {
  name: "Elite Right Path Tax Consultancy",
  legalName: "Elite Right Path Tax Consultancy",
  proprietor: "Raj Paudel",
  role: "Proprietor & Tax Consultant",
  email: "eliterightpathtax@gmail.com",
  telephone: "+919940243827",
  displayPhone: "+91 99402 43827",
  gstin: "33GAGPR3616R1Z2",
  openingHours: "Mo-Sa 10:00-21:00",
  address: {
    addressLocality: "Mogappair",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  serviceArea: "Tamil Nadu & Pan India (Online)",
} as const;
