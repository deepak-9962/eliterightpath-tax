"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import {
  FileText,
  Receipt,
  Building2,
  BookOpen,
  Scale,
  BarChart2,
  TrendingUp,
  MoreHorizontal,
  ChevronDown,
  MessageCircle,
  ArrowRight,
  Phone,
  Calculator,
  Search,
  X,
  HelpCircle,
} from "lucide-react";
import Animated from "@/components/Animated";

interface ServiceGroup {
  title: string;
  items: string[];
}

interface ServiceCategory {
  num: string;
  id: string;
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  groups: ServiceGroup[];
  items: string[];
  ctaText: string;
}

const services: ServiceCategory[] = [
  {
    num: "01",
    id: "income-tax",
    icon: FileText,
    title: "Income Tax Services",
    shortDesc: "Filing · Planning · Notices · Appeals",
    groups: [
      {
        title: "Filing & Returns",
        items: [
          "ITR Filing for Individuals (Salaried, Freelancers, Professionals)",
          "ITR Filing for Business / Partnership / LLP / Company",
          "TDS Return Filing (Form 24Q, 26Q, 27Q, 27EQ)",
        ],
      },
      {
        title: "Planning & Computation",
        items: [
          "Advance Tax Computation & Challan Preparation",
          "Tax Planning & Advisory",
          "Capital Gains Computation & Planning",
          "Form 15CA / 15CB (Foreign Remittances)",
        ],
      },
      {
        title: "Notices & Representation",
        items: [
          "Income Tax Notice Handling & Response",
          "Income Tax Appeal Preparation (CIT Appeals)",
          "Tax Refund Follow-up & Status Tracking",
        ],
      },
    ],
    items: [
      "ITR Filing for Individuals (Salaried, Freelancers, Professionals)",
      "ITR Filing for Business / Partnership / LLP / Company",
      "TDS Return Filing (Form 24Q, 26Q, 27Q, 27EQ)",
      "Advance Tax Computation & Challan Preparation",
      "Form 15CA / 15CB (Foreign Remittances)",
      "Tax Planning & Advisory",
      "Income Tax Notice Handling & Response",
      "Income Tax Appeal Preparation (CIT Appeals)",
      "Capital Gains Computation & Planning",
      "Tax Refund Follow-up & Status Tracking",
    ],
    ctaText: "Get an Income Tax Quote",
  },
  {
    num: "02",
    id: "gst",
    icon: Receipt,
    title: "GST Services",
    shortDesc: "Registration · Returns · ITC Reconciliation · Audits",
    groups: [
      {
        title: "Registration & Setup",
        items: [
          "New GST Registration",
          "GST Amendment & Cancellation",
          "GST Advisory for New Businesses",
        ],
      },
      {
        title: "Returns & Reconciliation",
        items: [
          "GST Return Filing (GSTR-1, GSTR-3B, GSTR-9, GSTR-9C)",
          "GST Reconciliation (GSTR-2A / 2B matching)",
          "Letter of Undertaking (LUT) Filing for Exporters",
          "E-Way Bill Support & Advisory",
        ],
      },
      {
        title: "Audits, Notices & Refunds",
        items: [
          "GST Notice Handling & Reply",
          "GST Audit & Annual Return Preparation",
          "GST Refund Applications & Follow-up",
        ],
      },
    ],
    items: [
      "New GST Registration",
      "GST Return Filing (GSTR-1, GSTR-3B, GSTR-9, GSTR-9C)",
      "GST Reconciliation (GSTR-2A / 2B matching)",
      "GST Audit & Annual Return Preparation",
      "GST Notice Handling & Reply",
      "GST Amendment & Cancellation",
      "GST Refund Applications & Follow-up",
      "E-Way Bill Support & Advisory",
      "Letter of Undertaking (LUT) Filing for Exporters",
      "GST Advisory for New Businesses",
    ],
    ctaText: "Talk to a GST Consultant",
  },
  {
    num: "03",
    id: "business-registration",
    icon: Building2,
    title: "Business & Registration Services",
    shortDesc: "Company · LLP · Proprietorship · Licenses",
    groups: [
      {
        title: "Entity Incorporation",
        items: [
          "Proprietorship Firm Registration",
          "Partnership Firm Registration & Deed Drafting",
          "Limited Liability Partnership (LLP) Incorporation",
          "Private Limited Company Incorporation",
          "One Person Company (OPC) Registration",
          "Section 8 Company (NGO) Registration",
        ],
      },
      {
        title: "Licenses & Government Registrations",
        items: [
          "MSME / Udyam Registration",
          "Shop & Establishment License",
          "FSSAI Registration (Food Business)",
          "Import Export Code (IEC) Registration",
          "Trade License & Other Local Registrations",
        ],
      },
    ],
    items: [
      "Proprietorship Firm Registration",
      "Partnership Firm Registration & Deed Drafting",
      "Limited Liability Partnership (LLP) Incorporation",
      "Private Limited Company Incorporation",
      "One Person Company (OPC) Registration",
      "Section 8 Company (NGO) Registration",
      "MSME / Udyam Registration",
      "Shop & Establishment License",
      "FSSAI Registration (Food Business)",
      "Import Export Code (IEC) Registration",
      "Trade License & Other Local Registrations",
    ],
    ctaText: "Get a Registration Quote",
  },
  {
    num: "04",
    id: "bookkeeping",
    icon: BookOpen,
    title: "Book Keeping Services",
    shortDesc: "Ledger · Bank Reconciliation · Invoicing · Software",
    groups: [
      {
        title: "Daily Transactions & Ledger",
        items: [
          "Day-to-day Bookkeeping & Journal Entry Recording",
          "Sales, Purchase & Expense Ledger Maintenance",
          "Invoicing, Bills & Voucher Entry Management",
          "Petty Cash Management & Expense Logging",
        ],
      },
      {
        title: "Reconciliation & Software Support",
        items: [
          "Bank, Credit Card & Digital Wallet Reconciliation",
          "Accounts Receivable & Payable Ageing Tracking",
          "Tally, Zoho Books, QuickBooks & Cloud Software Entry Support",
          "Monthly Ledger Scrutiny & Transaction Verification",
        ],
      },
    ],
    items: [
      "Day-to-day Bookkeeping & Journal Entry Recording",
      "Bank, Credit Card & Digital Wallet Reconciliation",
      "Sales, Purchase & Expense Ledger Maintenance",
      "Invoicing, Bills & Voucher Entry Management",
      "Accounts Receivable & Payable Ageing Tracking",
      "Petty Cash Management & Expense Logging",
      "Tally, Zoho Books, QuickBooks & Cloud Software Entry Support",
      "Monthly Ledger Scrutiny & Transaction Verification",
    ],
    ctaText: "Get a Bookkeeping Plan",
  },
  {
    num: "05",
    id: "accounts-maintenance",
    icon: Calculator,
    title: "Accounts Maintenance & Management",
    shortDesc: "Financial Statements · Payroll · MIS · Year-End Finalization",
    groups: [
      {
        title: "Financial Reporting & Closures",
        items: [
          "End-to-End Books of Accounts Maintenance",
          "Periodic Monthly, Quarterly & Annual Accounts Closing",
          "Financial Statements Preparation (P&L, Balance Sheet)",
          "Accounts Finalization & Year-End Audit Readiness",
        ],
      },
      {
        title: "Payroll, Assets & Reconciliations",
        items: [
          "Payroll Processing, Salary Slips & Deductions Management",
          "MIS Reporting, Cash Flow Statements & Variance Analysis",
          "Vendor & Customer Ledger Reconciliations & Balance Confirmations",
          "Fixed Asset Register & Depreciation Accounting",
          "Inventory Valuation & Stock Record Maintenance",
        ],
      },
    ],
    items: [
      "End-to-End Books of Accounts Maintenance",
      "Periodic Monthly, Quarterly & Annual Accounts Closing",
      "Financial Statements Preparation (P&L, Balance Sheet)",
      "Payroll Processing, Salary Slips & Deductions Management",
      "MIS Reporting, Cash Flow Statements & Variance Analysis",
      "Accounts Finalization & Year-End Audit Readiness",
      "Vendor & Customer Ledger Reconciliations & Balance Confirmations",
      "Fixed Asset Register & Depreciation Accounting",
      "Inventory Valuation & Stock Record Maintenance",
    ],
    ctaText: "Get an Accounts Maintenance Quote",
  },
  {
    num: "06",
    id: "compliance",
    icon: Scale,
    title: "Compliance & Legal Services",
    shortDesc: "ROC · LLP · Labour Laws · Statutory Filings",
    groups: [
      {
        title: "Corporate & Secretarial (ROC/LLP)",
        items: [
          "ROC Annual Filings (AOC-4, MGT-7, DIR-3 KYC)",
          "LLP Annual Return Filing (Form 8 & Form 11)",
          "Secretarial & Corporate Compliance Support",
          "Statutory Register Maintenance",
        ],
      },
      {
        title: "Labour & Statutory Compliance",
        items: [
          "Professional Tax Registration & Return Filing",
          "ESI Registration & Monthly Returns",
          "EPF/PF Registration & Monthly Returns",
          "Contract Labour Compliance",
          "Labour Law Advisory",
          "FEMA / RBI Compliance Advisory",
        ],
      },
    ],
    items: [
      "ROC Annual Filings (AOC-4, MGT-7, DIR-3 KYC)",
      "LLP Annual Return Filing (Form 8 & Form 11)",
      "Professional Tax Registration & Return Filing",
      "ESI Registration & Monthly Returns",
      "EPF/PF Registration & Monthly Returns",
      "Contract Labour Compliance",
      "Labour Law Advisory",
      "FEMA / RBI Compliance Advisory",
      "Statutory Register Maintenance",
      "Secretarial & Corporate Compliance Support",
    ],
    ctaText: "Get a Compliance Quote",
  },
  {
    num: "07",
    id: "audit",
    icon: BarChart2,
    title: "Audit & Compliance Support",
    shortDesc: "Statutory · Internal · Bank · Stock Audits",
    groups: [
      {
        title: "Corporate & Internal Audits",
        items: [
          "Statutory Audit Support (for Companies & LLPs)",
          "Internal Audit & Process Review",
          "Bank / Lender Audit Assistance",
        ],
      },
      {
        title: "Special Purpose & Inventory",
        items: [
          "Audit Report Preparation & Finalization",
          "Stock / Inventory Audit",
          "Special Purpose Audit Support",
        ],
      },
    ],
    items: [
      "Statutory Audit Support (for Companies & LLPs)",
      "Internal Audit & Process Review",
      "Bank / Lender Audit Assistance",
      "Audit Report Preparation & Finalization",
      "Stock / Inventory Audit",
      "Special Purpose Audit Support",
    ],
    ctaText: "Get Audit Support",
  },
  {
    num: "08",
    id: "financial-advisory",
    icon: TrendingUp,
    title: "Financial & Advisory Services",
    shortDesc: "Tax Planning · Working Capital · Project Reports",
    groups: [
      {
        title: "Tax & Financial Strategy",
        items: [
          "Personal & Business Tax Planning",
          "Investment Advisory (Tax-Saving Instruments)",
          "Business Setup & Feasibility Advisory",
        ],
      },
      {
        title: "Capital, Banking & Project Reports",
        items: [
          "Cash Flow & Working Capital Management",
          "Project Report Preparation (for Bank Loans)",
          "Net Worth Certificate",
          "Loan & Grant Application Support",
        ],
      },
    ],
    items: [
      "Personal & Business Tax Planning",
      "Investment Advisory (Tax-Saving Instruments)",
      "Business Setup & Feasibility Advisory",
      "Cash Flow & Working Capital Management",
      "Project Report Preparation (for Bank Loans)",
      "Net Worth Certificate",
      "Loan & Grant Application Support",
    ],
    ctaText: "Consult on Advisory Services",
  },
  {
    num: "09",
    id: "other",
    icon: MoreHorizontal,
    title: "Other Services",
    shortDesc: "DSC · Registrations · Trade Licenses · Documentation",
    groups: [
      {
        title: "Registrations & Documentation Support",
        items: [
          "Digital Signature Certificate (DSC) — Class 2 & 3",
          "Professional Tax Registration & Returns",
          "ESI & PF Registration",
          "Udyam (MSME) Registration",
          "Trade License Assistance",
          "General Advisory & Document Support",
        ],
      },
    ],
    items: [
      "Digital Signature Certificate (DSC) — Class 2 & 3",
      "Professional Tax Registration & Returns",
      "ESI & PF Registration",
      "Udyam (MSME) Registration",
      "Trade License Assistance",
      "General Advisory & Document Support",
    ],
    ctaText: "Enquire About Other Services",
  },
];

const navCategories = [
  { label: "All", id: "all" },
  { label: "Income Tax", id: "income-tax" },
  { label: "GST", id: "gst" },
  { label: "Business", id: "business-registration" },
  { label: "Bookkeeping", id: "bookkeeping" },
  { label: "Accounts", id: "accounts-maintenance" },
  { label: "Compliance", id: "compliance" },
  { label: "Audit", id: "audit" },
  { label: "Advisory", id: "financial-advisory" },
  { label: "Other", id: "other" },
];

const problemOptions = [
  { label: "File my ITR", targetId: "income-tax" },
  { label: "GST registration or return", targetId: "gst" },
  { label: "Received a tax notice", targetId: "income-tax" },
  { label: "Start a new business", targetId: "business-registration" },
  { label: "Monthly bookkeeping", targetId: "bookkeeping" },
  { label: "Accounts & financial statements", targetId: "accounts-maintenance" },
  { label: "ROC & legal compliance", targetId: "compliance" },
  { label: "Tax planning & advisory", targetId: "financial-advisory" },
];

const processSteps = [
  {
    num: "01",
    title: "Tell us what you need",
    desc: "Share your specific requirement, deadline, or compliance query with our team.",
  },
  {
    num: "02",
    title: "Share relevant documents",
    desc: "Send required records and documentation securely via WhatsApp or email.",
  },
  {
    num: "03",
    title: "We review your requirement",
    desc: "We examine documents, verify calculations, and outline the precise roadmap.",
  },
  {
    num: "04",
    title: "We prepare or complete the work",
    desc: "Filings, accounting entries, or registrations are executed with strict precision.",
  },
  {
    num: "05",
    title: "We keep you informed",
    desc: "You receive acknowledgements, proof of filing, and ongoing compliance support.",
  },
];

export default function ServicesPage() {
  const [openId, setOpenId] = useState<string | null>("income-tax");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Handle URL hash on initial load
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      if (hash === "accounting") {
        setOpenId("bookkeeping");
        setActiveCategory("bookkeeping");
      } else if (services.some((s) => s.id === hash)) {
        setOpenId(hash);
        setActiveCategory(hash);
      }
    }
  }, []);

  const scrollToCategory = (id: string) => {
    if (id === "all") {
      setActiveCategory("all");
      const dirEl = document.getElementById("all-services");
      if (dirEl) {
        const topOffset = dirEl.getBoundingClientRect().top + window.scrollY - 130;
        window.scrollTo({ top: topOffset, behavior: "smooth" });
      }
      return;
    }

    setActiveCategory(id);
    setOpenId(id);
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Search filtering
  const filteredServices = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return services;

    return services
      .map((cat) => {
        const matchesCat =
          cat.title.toLowerCase().includes(q) ||
          cat.shortDesc.toLowerCase().includes(q);

        const filteredGroups = cat.groups
          .map((group) => {
            const matchesGroupTitle = group.title.toLowerCase().includes(q);
            const matchingItems = group.items.filter(
              (item) => item.toLowerCase().includes(q) || matchesGroupTitle
            );
            return {
              ...group,
              items: matchesCat ? group.items : matchingItems,
            };
          })
          .filter((group) => group.items.length > 0);

        const totalFilteredItems = filteredGroups.reduce(
          (acc, g) => acc + g.items.length,
          0
        );

        if (matchesCat || totalFilteredItems > 0) {
          return {
            ...cat,
            groups: filteredGroups,
            items: filteredGroups.flatMap((g) => g.items),
          };
        }
        return null;
      })
      .filter((cat): cat is ServiceCategory => cat !== null);
  }, [searchQuery]);

  const totalMatchingItems = useMemo(() => {
    if (!searchQuery.trim()) return 0;
    return filteredServices.reduce((sum, cat) => sum + cat.items.length, 0);
  }, [filteredServices, searchQuery]);

  // Auto-expand matching accordions if searching
  useEffect(() => {
    if (searchQuery.trim() && filteredServices.length > 0) {
      setOpenId(filteredServices[0].id);
    }
  }, [searchQuery, filteredServices]);

  return (
    <>
      {/* 1. SERVICES HERO */}
      <section
        style={{
          background: "linear-gradient(160deg, #0B0614 0%, #160B27 60%, #1A0B30 100%)",
          paddingTop: "140px",
          paddingBottom: "88px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
        className="hero-financial-grid"
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "25%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "740px", margin: "0 auto", padding: "0 24px" }}>
          <Animated variant="fadeUp">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(124, 58, 237, 0.16)",
                border: "1px solid rgba(168, 85, 247, 0.3)",
                padding: "5px 16px",
                borderRadius: "50px",
                marginBottom: "22px",
              }}
            >
              <span
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  color: "#C084FC",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Our Services
              </span>
            </div>
          </Animated>

          <Animated variant="fadeUp" delay={120}>
            <h1
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(32px, 5vw, 54px)",
                color: "#FFFFFF",
                lineHeight: 1.15,
                marginBottom: "20px",
                letterSpacing: "-0.5px",
              }}
            >
              Comprehensive Tax &{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED 0%, #D946EF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Financial Services
              </span>
            </h1>
          </Animated>

          <Animated variant="fadeUp" delay={200}>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.75,
                maxWidth: "580px",
                margin: "0 auto 36px",
              }}
            >
              Tax, GST, accounting, registrations and compliance — handled by one experienced team.
            </p>
          </Animated>

          {/* Factual Proof Strip */}
          <Animated variant="fadeUp" delay={260}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                padding: "10px 24px",
                borderRadius: "50px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(168, 85, 247, 0.2)",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.88)", fontWeight: 500, fontFamily: "Sora, sans-serif" }}>
                <strong style={{ color: "#FFFFFF", fontWeight: 700 }}>8</strong> Service Areas
              </span>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.88)", fontWeight: 500, fontFamily: "Sora, sans-serif" }}>
                <strong style={{ color: "#FFFFFF", fontWeight: 700 }}>70+</strong> Verified Services
              </span>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.88)", fontWeight: 500, fontFamily: "Sora, sans-serif" }}>
                Personal Guidance
              </span>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.88)", fontWeight: 500, fontFamily: "Sora, sans-serif" }}>
                Tamil Nadu &amp; Online
              </span>
            </div>
          </Animated>
        </div>
      </section>

      {/* 2. QUICK CATEGORY NAVIGATION (STICKY) */}
      <nav aria-label="Services Category Navigation" className="services-sticky-nav">
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="category-scroll-container">
            {navCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "50px",
                    border: isActive
                      ? "1.5px solid #7C3AED"
                      : "1px solid rgba(124, 58, 237, 0.14)",
                    background: isActive ? "#EDE9FE" : "#FFFFFF",
                    color: isActive ? "#7C3AED" : "#4B5563",
                    fontFamily: "Sora, sans-serif",
                    fontWeight: isActive ? 700 : 500,
                    fontSize: "13px",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all 0.2s ease",
                    boxShadow: isActive ? "0 2px 8px rgba(124, 58, 237, 0.12)" : "none",
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 3. FEATURED CORE SERVICES */}
      <section style={{ background: "#FAF7FF", padding: "64px 0 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <Animated variant="fadeUp">
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <span
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  color: "#7C3AED",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  background: "#EDE9FE",
                  padding: "4px 12px",
                  borderRadius: "50px",
                }}
              >
                Core Practices
              </span>
              <h2
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(22px, 3vw, 32px)",
                  color: "#111827",
                  marginTop: "12px",
                  lineHeight: 1.25,
                }}
              >
                Primary Financial Compliance Pillars
              </h2>
            </div>
          </Animated>

          <div className="featured-services-grid">
            {/* Income Tax Featured Card */}
            <Animated variant="fadeLeft">
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(124, 58, 237, 0.15)",
                  borderRadius: "22px",
                  padding: "32px",
                  boxShadow: "0 8px 30px rgba(11, 6, 20, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                    <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "14px", color: "#A855F7" }}>
                      01
                    </span>
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "12px",
                        background: "#EDE9FE",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FileText size={20} color="#7C3AED" />
                    </div>
                  </div>
                  <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "22px", color: "#111827", marginBottom: "6px" }}>
                    Income Tax
                  </h3>
                  <p style={{ fontSize: "12.5px", fontWeight: 600, color: "#7C3AED", fontFamily: "Sora, sans-serif", marginBottom: "14px" }}>
                    ITR · TDS · Tax Planning · Capital Gains
                  </p>
                  <p style={{ fontSize: "14.5px", color: "#64748B", lineHeight: 1.7, marginBottom: "24px" }}>
                    Accurate return filing for individuals, professionals, and corporate entities, accompanied by proactive advance tax planning and scrutiny response support.
                  </p>
                </div>
                <button
                  onClick={() => scrollToCategory("income-tax")}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    color: "#7C3AED",
                    fontWeight: 700,
                    fontSize: "14px",
                    fontFamily: "Sora, sans-serif",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  Explore Income Tax Services <ArrowRight size={15} />
                </button>
              </div>
            </Animated>

            {/* GST Featured Card */}
            <Animated variant="fadeRight">
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(124, 58, 237, 0.15)",
                  borderRadius: "22px",
                  padding: "32px",
                  boxShadow: "0 8px 30px rgba(11, 6, 20, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                    <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "14px", color: "#A855F7" }}>
                      02
                    </span>
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "12px",
                        background: "#EDE9FE",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Receipt size={20} color="#7C3AED" />
                    </div>
                  </div>
                  <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "22px", color: "#111827", marginBottom: "6px" }}>
                    GST Services
                  </h3>
                  <p style={{ fontSize: "12.5px", fontWeight: 600, color: "#7C3AED", fontFamily: "Sora, sans-serif", marginBottom: "14px" }}>
                    Registration · Returns · ITC Reconciliation · Audit
                  </p>
                  <p style={{ fontSize: "14.5px", color: "#64748B", lineHeight: 1.7, marginBottom: "24px" }}>
                    End-to-end GST registrations, monthly GSTR-1 &amp; 3B return filings, rigorous GSTR-2B matching to prevent input tax credit leakages, and prompt audit handling.
                  </p>
                </div>
                <button
                  onClick={() => scrollToCategory("gst")}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    color: "#7C3AED",
                    fontWeight: 700,
                    fontSize: "14px",
                    fontFamily: "Sora, sans-serif",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  Explore GST Services <ArrowRight size={15} />
                </button>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* 4. "WHAT DO YOU NEED HELP WITH?" SECTION */}
      <section style={{ background: "#FAF7FF", padding: "20px 0 60px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(124, 58, 237, 0.12)",
              borderRadius: "22px",
              padding: "36px 32px",
              textAlign: "center",
              boxShadow: "0 6px 24px rgba(11, 6, 20, 0.03)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#EDE9FE",
                padding: "4px 12px",
                borderRadius: "50px",
                marginBottom: "12px",
              }}
            >
              <HelpCircle size={13} color="#7C3AED" />
              <span
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  color: "#7C3AED",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                }}
              >
                Direct Solution Finder
              </span>
            </div>
            <h2
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(20px, 2.6vw, 26px)",
                color: "#111827",
                marginBottom: "8px",
              }}
            >
              What Do You Need Help With?
            </h2>
            <p style={{ fontSize: "14.5px", color: "#64748B", maxWidth: "560px", margin: "0 auto 24px", lineHeight: 1.6 }}>
              Not sure which technical category your requirement falls under? Choose what you are trying to accomplish:
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
              {problemOptions.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => scrollToCategory(opt.targetId)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "9px 18px",
                    borderRadius: "50px",
                    background: "#FAF7FF",
                    border: "1px solid rgba(124, 58, 237, 0.16)",
                    color: "#111827",
                    fontFamily: "Sora, sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#7C3AED";
                    (e.currentTarget as HTMLButtonElement).style.background = "#EDE9FE";
                    (e.currentTarget as HTMLButtonElement).style.color = "#7C3AED";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(124, 58, 237, 0.16)";
                    (e.currentTarget as HTMLButtonElement).style.background = "#FAF7FF";
                    (e.currentTarget as HTMLButtonElement).style.color = "#111827";
                  }}
                >
                  {opt.label} <ArrowRight size={13} color="#7C3AED" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEARCHABLE ALL SERVICES DIRECTORY */}
      <section id="all-services" style={{ background: "#FFFFFF", padding: "72px 0 88px", borderTop: "1px solid rgba(124, 58, 237, 0.08)" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 24px" }}>
          <Animated variant="fadeUp">
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <span
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  color: "#7C3AED",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  background: "#EDE9FE",
                  padding: "4px 12px",
                  borderRadius: "50px",
                }}
              >
                Service Catalogue
              </span>
              <h2
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(24px, 3.2vw, 36px)",
                  color: "#111827",
                  marginTop: "12px",
                  marginBottom: "8px",
                }}
              >
                All Services Directory
              </h2>
              <p style={{ fontSize: "14.5px", color: "#64748B", maxWidth: "520px", margin: "0 auto", lineHeight: 1.65 }}>
                Explore every service category or search for specific filings, registrations, and compliances.
              </p>
            </div>
          </Animated>

          {/* Search Box */}
          <div style={{ marginBottom: "36px" }}>
            <div
              style={{
                position: "relative",
                maxWidth: "600px",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Search
                size={18}
                color="#7C3AED"
                style={{ position: "absolute", left: "18px", pointerEvents: "none" }}
              />
              <input
                ref={searchInputRef}
                type="text"
                aria-label="Search all services"
                placeholder="Search income tax, GST, bookkeeping, ROC, IEC..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 44px 14px 48px",
                  borderRadius: "50px",
                  border: searchQuery.trim() ? "1.5px solid #7C3AED" : "1.5px solid rgba(124, 58, 237, 0.2)",
                  background: "#FAF7FF",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14.5px",
                  color: "#111827",
                  outline: "none",
                  boxShadow: searchQuery.trim() ? "0 4px 20px rgba(124, 58, 237, 0.08)" : "none",
                  transition: "all 0.2s ease",
                }}
              />
              {searchQuery.trim() && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    if (searchInputRef.current) searchInputRef.current.focus();
                  }}
                  aria-label="Clear search"
                  style={{
                    position: "absolute",
                    right: "16px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#64748B",
                  }}
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Search Feedback / Match Count */}
            {searchQuery.trim() && (
              <div style={{ textAlign: "center", marginTop: "14px" }}>
                <span style={{ fontSize: "13px", color: "#64748B", fontFamily: "Sora, sans-serif" }}>
                  {totalMatchingItems > 0 ? (
                    <>
                      Found <strong style={{ color: "#7C3AED" }}>{totalMatchingItems}</strong>{" "}
                      services matching &ldquo;
                      <span style={{ color: "#111827", fontWeight: 600 }}>{searchQuery}</span>&rdquo; across{" "}
                      <strong style={{ color: "#7C3AED" }}>{filteredServices.length}</strong> categories
                    </>
                  ) : null}
                </span>
              </div>
            )}
          </div>

          {/* 6. IMPROVED ACCORDIONS */}
          <div>
            {filteredServices.length === 0 ? (
              <div
                style={{
                  background: "#FAF7FF",
                  border: "1px dashed rgba(124, 58, 237, 0.25)",
                  borderRadius: "20px",
                  padding: "48px 24px",
                  textAlign: "center",
                }}
              >
                <HelpCircle size={36} color="#A855F7" style={{ margin: "0 auto 12px", opacity: 0.6 }} />
                <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: "17px", color: "#111827", marginBottom: "6px" }}>
                  No matching services found
                </h3>
                <p style={{ fontSize: "14px", color: "#64748B", marginBottom: "18px" }}>
                  We couldn&rsquo;t find anything matching &ldquo;{searchQuery}&rdquo;. Try another term or one of these common topics:
                </p>
                <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
                  {["ITR", "GST", "Bookkeeping", "Registration", "Audit", "TDS"].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setSearchQuery(suggestion)}
                      style={{
                        padding: "5px 14px",
                        borderRadius: "50px",
                        background: "#FFFFFF",
                        border: "1px solid rgba(124, 58, 237, 0.2)",
                        color: "#7C3AED",
                        fontSize: "12.5px",
                        fontFamily: "Sora, sans-serif",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              filteredServices.map((service) => {
                const Icon = service.icon;
                const isOpen = openId === service.id;

                return (
                  <div
                    key={service.id}
                    id={service.id}
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "20px",
                      border: isOpen
                        ? "1.5px solid #7C3AED"
                        : "1px solid rgba(124, 58, 237, 0.12)",
                      overflow: "hidden",
                      boxShadow: isOpen
                        ? "0 10px 32px rgba(124, 58, 237, 0.08)"
                        : "0 2px 10px rgba(11, 6, 20, 0.02)",
                      transition: "all 0.25s ease",
                      marginBottom: "16px",
                      scrollMarginTop: "140px",
                    }}
                  >
                    {/* Category Header */}
                    <button
                      onClick={() => toggleAccordion(service.id)}
                      aria-expanded={isOpen}
                      className="accordion-header-btn"
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "20px 24px",
                        background: isOpen ? "#FAF7FF" : "#FFFFFF",
                        border: "none",
                        cursor: "pointer",
                        gap: "14px",
                        textAlign: "left",
                        transition: "background 0.2s ease",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "14px", flex: 1, minWidth: 0 }}>
                        <span
                          style={{
                            fontFamily: "Sora, sans-serif",
                            fontWeight: 800,
                            fontSize: "13px",
                            color: isOpen ? "#7C3AED" : "#94A3B8",
                            flexShrink: 0,
                            minWidth: "20px",
                          }}
                        >
                          {service.num}
                        </span>
                        <div
                          style={{
                            width: "42px",
                            height: "42px",
                            borderRadius: "12px",
                            background: isOpen ? "#EDE9FE" : "rgba(124, 58, 237, 0.06)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            transition: "background 0.2s ease",
                          }}
                        >
                          <Icon size={19} color="#7C3AED" />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h3
                            style={{
                              fontFamily: "Sora, sans-serif",
                              fontWeight: 700,
                              fontSize: "17px",
                              color: "#111827",
                              margin: 0,
                              lineHeight: 1.3,
                            }}
                          >
                            {service.title}
                          </h3>
                          <p
                            style={{
                              fontSize: "12.5px",
                              color: "#64748B",
                              margin: "3px 0 0",
                              fontFamily: "Inter, sans-serif",
                              lineHeight: 1.4,
                            }}
                          >
                            {service.shortDesc} &bull;{" "}
                            <span style={{ color: "#7C3AED", fontWeight: 600, fontFamily: "Sora, sans-serif" }}>
                              {service.items.length} services
                            </span>
                          </p>
                        </div>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                        <div
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            background: isOpen ? "#7C3AED" : "rgba(124, 58, 237, 0.08)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "transform 0.25s ease, background 0.25s ease",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        >
                          <ChevronDown size={15} color={isOpen ? "#FFFFFF" : "#7C3AED"} />
                        </div>
                      </div>
                    </button>

                    {/* Accordion Body with Grouped Service Items */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                        transition: "grid-template-rows 250ms cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <div style={{ overflow: "hidden" }}>
                        <div style={{ padding: "8px 24px 24px", borderTop: "1px solid rgba(124, 58, 237, 0.07)" }}>
                          {service.groups.map((group, gIdx) => (
                            <div key={group.title} style={{ marginTop: gIdx === 0 ? "14px" : "20px" }}>
                              <h4
                                style={{
                                  fontFamily: "Sora, sans-serif",
                                  fontWeight: 700,
                                  fontSize: "12.5px",
                                  color: "#7C3AED",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.6px",
                                  marginBottom: "10px",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "6px",
                                }}
                              >
                                <span style={{ width: "14px", height: "1.5px", background: "#A855F7" }} />
                                {group.title}
                              </h4>
                              <div className="service-subgroup-grid">
                                {group.items.map((item) => (
                                  <div
                                    key={item}
                                    style={{
                                      display: "flex",
                                      alignItems: "flex-start",
                                      gap: "10px",
                                      padding: "6px 0",
                                      fontSize: "14px",
                                      color: "#374151",
                                      lineHeight: 1.5,
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: "6px",
                                        height: "6px",
                                        borderRadius: "50%",
                                        background: "#7C3AED",
                                        flexShrink: 0,
                                        marginTop: "7px",
                                      }}
                                    />
                                    <span>{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}

                          {/* Category CTA Bar */}
                          <div
                            style={{
                              marginTop: "24px",
                              paddingTop: "16px",
                              borderTop: "1px solid rgba(124, 58, 237, 0.09)",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              flexWrap: "wrap",
                              gap: "12px",
                            }}
                          >
                            <span style={{ fontSize: "13.5px", color: "#64748B" }}>
                              Need dedicated assistance with {service.title.toLowerCase()}?
                            </span>
                            <a
                              href={`https://wa.me/919940243827?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20${encodeURIComponent(
                                service.title
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                padding: "8px 18px",
                                borderRadius: "50px",
                                background: "#7C3AED",
                                color: "#FFFFFF",
                                fontSize: "13px",
                                fontFamily: "Sora, sans-serif",
                                fontWeight: 600,
                                textDecoration: "none",
                                transition: "opacity 0.2s ease",
                              }}
                              onMouseEnter={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.9";
                              }}
                              onMouseLeave={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                              }}
                            >
                              <MessageCircle size={13} />
                              {service.ctaText} &rarr;
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* 7. "HOW OUR SERVICES WORK" PROCESS */}
      <section style={{ background: "#FAF7FF", padding: "80px 0 88px", borderTop: "1px solid rgba(124, 58, 237, 0.07)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <Animated variant="fadeUp">
            <div style={{ textAlign: "center", marginBottom: "52px" }}>
              <div
                style={{
                  display: "inline-flex",
                  background: "#EDE9FE",
                  color: "#7C3AED",
                  padding: "5px 14px",
                  borderRadius: "50px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  fontFamily: "Sora, sans-serif",
                  marginBottom: "14px",
                }}
              >
                Engagement Framework
              </div>
              <h2
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(24px, 3.2vw, 36px)",
                  color: "#111827",
                  lineHeight: 1.2,
                  marginBottom: "12px",
                }}
              >
                How Our Services Work
              </h2>
              <p style={{ fontSize: "15px", color: "#64748B", maxWidth: "460px", margin: "0 auto", lineHeight: 1.65 }}>
                A straightforward five-step execution model designed for accuracy and complete peace of mind.
              </p>
            </div>
          </Animated>

          <div className="services-process-timeline">
            <div aria-hidden="true" className="services-process-line" />
            {processSteps.map((step, idx) => (
              <Animated key={step.num} variant="fadeUp" delay={idx * 80}>
                <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "#FFFFFF",
                      border: "1.5px solid rgba(124, 58, 237, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 14px",
                      boxShadow: "0 4px 14px rgba(124, 58, 237, 0.06)",
                    }}
                  >
                    <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "13px", color: "#7C3AED" }}>
                      {step.num}
                    </span>
                  </div>
                  <h4
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#111827",
                      marginBottom: "6px",
                      lineHeight: 1.35,
                    }}
                  >
                    {step.title}
                  </h4>
                  <p style={{ fontSize: "12.5px", color: "#64748B", lineHeight: 1.6, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PERSONAL HELP / TALK TO RAJ SECTION */}
      <section style={{ background: "#FFFFFF", padding: "72px 0 80px", borderTop: "1px solid rgba(124, 58, 237, 0.07)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>
          <Animated variant="fadeUp">
            <div
              style={{
                background: "linear-gradient(145deg, #FAF7FF 0%, #F5EFFF 100%)",
                border: "1px solid rgba(124, 58, 237, 0.18)",
                borderRadius: "24px",
                padding: "44px 36px",
                textAlign: "center",
                boxShadow: "0 10px 36px rgba(124, 58, 237, 0.04)",
              }}
            >
              <span
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  color: "#7C3AED",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  background: "#EDE9FE",
                  padding: "5px 14px",
                  borderRadius: "50px",
                  display: "inline-block",
                  marginBottom: "16px",
                }}
              >
                Direct Consultant Access
              </span>
              <h2
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(22px, 3vw, 32px)",
                  color: "#111827",
                  lineHeight: 1.25,
                  marginBottom: "14px",
                }}
              >
                Not Sure Which Service Fits Your Situation?
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "#4B5563",
                  maxWidth: "540px",
                  margin: "0 auto 20px",
                  lineHeight: 1.75,
                }}
              >
                Tax and compliance situations don&rsquo;t always fit neatly into a single category. Tell us what you are trying to solve and we will point you in the right direction.
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "#64748B",
                  marginBottom: "28px",
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 600,
                }}
              >
                Guided directly by <strong style={{ color: "#111827" }}>Raj Paudel</strong> — Proprietor &amp; Tax Consultant
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  className="btn-orchid"
                  style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  Talk to Us <ArrowRight size={15} />
                </Link>
                <a
                  href="https://wa.me/919940243827?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20tax%20service"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "11px 24px",
                    borderRadius: "50px",
                    background: "#25D366",
                    color: "#FFFFFF",
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    textDecoration: "none",
                    boxShadow: "0 4px 14px rgba(37, 211, 102, 0.25)",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.opacity = "0.9";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                  }}
                >
                  <MessageCircle size={15} /> WhatsApp Us
                </a>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #0B0614 0%, #160B27 60%, #1F0D36 100%)",
          padding: "80px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(168, 85, 247, 0.15)",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "550px",
            height: "280px",
            background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "600px", margin: "0 auto" }}>
          <Animated variant="fadeUp">
            <h2
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(26px, 3.8vw, 38px)",
                color: "#FFFFFF",
                lineHeight: 1.22,
                marginBottom: "16px",
              }}
            >
              {"Don't See Exactly What "}
              <span
                style={{
                  background: "linear-gradient(135deg, #A855F7 0%, #D946EF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                You Need?
              </span>
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.75,
                marginBottom: "32px",
              }}
            >
              Tax and compliance situations aren&rsquo;t always straightforward. Tell us what you&rsquo;re dealing with and we&rsquo;ll help you find the right service.
            </p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="tel:+919940243827"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 28px",
                  borderRadius: "50px",
                  background: "#FFFFFF",
                  color: "#7C3AED",
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 700,
                  fontSize: "14.5px",
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(255, 255, 255, 0.15)",
                }}
              >
                <Phone size={15} /> Call Now
              </a>
              <Link
                href="/contact"
                className="btn-fintech-primary"
                style={{
                  padding: "13px 28px",
                  fontSize: "14.5px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Contact Us <ArrowRight size={15} />
              </Link>
            </div>
          </Animated>
        </div>
      </section>
    </>
  );
}
