"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText, Receipt, Building2, BookOpen, Scale, BarChart2,
  TrendingUp, MoreHorizontal, ChevronDown, MessageCircle, ArrowRight,
  Phone
} from "lucide-react";
import Animated from "@/components/Animated";

const services = [
  {
    id: "income-tax",
    icon: FileText,
    title: "Income Tax Services",
    color: "#A90DC8",
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
  },
  {
    id: "gst",
    icon: Receipt,
    title: "GST Services",
    color: "#8A0AA3",
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
  },
  {
    id: "business-registration",
    icon: Building2,
    title: "Business & Registration Services",
    color: "#A90DC8",
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
  },
  {
    id: "accounting",
    icon: BookOpen,
    title: "Accounting & Bookkeeping",
    color: "#FDB515",
    items: [
      "Monthly Bookkeeping & Accounting",
      "Bank Reconciliation Statement Preparation",
      "Accounts Payable & Receivable Management",
      "Payroll Processing & Salary Slip Generation",
      "Financial Statement Preparation (P&L, Balance Sheet)",
      "MIS Reports & Cash Flow Statements",
      "Accounts Finalization & Year-End Closing",
      "Tally / Accounting Software Support",
      "Vendor & Client Ledger Management",
    ],
  },
  {
    id: "compliance",
    icon: Scale,
    title: "Compliance & Legal Services",
    color: "#A90DC8",
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
  },
  {
    id: "audit",
    icon: BarChart2,
    title: "Audit & Compliance Support",
    color: "#8A0AA3",
    items: [
      "Statutory Audit Support (for Companies & LLPs)",
      "Tax Audit (Section 44AB — Mandatory & Voluntary)",
      "Internal Audit & Process Review",
      "Bank / Lender Audit Assistance",
      "Audit Report Preparation & Finalization",
      "Stock / Inventory Audit",
      "Special Purpose Audit Support",
    ],
  },
  {
    id: "financial-advisory",
    icon: TrendingUp,
    title: "Financial & Advisory Services",
    color: "#FDB515",
    items: [
      "Personal & Business Tax Planning",
      "Investment Advisory (Tax-Saving Instruments)",
      "Business Setup & Feasibility Advisory",
      "Cash Flow & Working Capital Management",
      "Project Report Preparation (for Bank Loans)",
      "Net Worth Certificate",
      "Loan & Grant Application Support",
    ],
  },
  {
    id: "other",
    icon: MoreHorizontal,
    title: "Other Services",
    color: "#A90DC8",
    items: [
      "Digital Signature Certificate (DSC) — Class 2 & 3",
      "Professional Tax Registration & Returns",
      "ESI & PF Registration",
      "Udyam (MSME) Registration",
      "Trade License Assistance",
      "General Advisory & Document Support",
    ],
  },
];

function ServiceAccordion({
  service,
  isOpen,
  onToggle,
}: {
  service: (typeof services)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = service.icon;

  return (
    <div
      style={{
        background: "white",
        borderRadius: "20px",
        border: isOpen ? `2px solid ${service.color}` : "2px solid rgba(169,13,200,0.08)",
        overflow: "hidden",
        boxShadow: isOpen ? `0 8px 40px ${service.color}20` : "0 2px 10px rgba(0,0,0,0.04)",
        transition: "all 0.3s ease",
        marginBottom: "16px",
      }}
    >
      <button
        onClick={onToggle}
        className="accordion-btn"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "22px 28px",
          background: isOpen
            ? `linear-gradient(135deg, ${service.color}10, ${service.color}05)`
            : "white",
          border: "none",
          cursor: "pointer",
          gap: "16px",
          transition: "background 0.3s ease",
        }}
        aria-expanded={isOpen}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              background: isOpen
                ? `linear-gradient(135deg, ${service.color}, ${service.color === "#FDB515" ? "#E09A00" : "#8A0AA3"})`
                : `${service.color}15`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.3s ease",
            }}
          >
            <Icon size={22} color={isOpen ? "white" : service.color} />
          </div>
          <div style={{ textAlign: "left" }}>
            <h3
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                color: isOpen ? service.color : "#1a1a2e",
                transition: "color 0.3s ease",
                marginBottom: "2px",
              }}
            >
              {service.title}
            </h3>
            <span style={{ fontSize: "13px", color: "#9ca3af" }}>
              {service.items.length} services
            </span>
          </div>
        </div>
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: isOpen ? service.color : "rgba(169,13,200,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.3s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <ChevronDown size={16} color={isOpen ? "white" : "#A90DC8"} />
        </div>
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 350ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div
            className="accordion-content"
            style={{
              padding: "8px 28px 24px",
              borderTop: `1px solid ${service.color}15`,
            }}
          >
            <ul
              className="service-item-list"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "10px",
                listStyle: "none",
                padding: 0,
              }}
            >
              {service.items.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    fontSize: "14.5px",
                    color: "#374151",
                    lineHeight: 1.5,
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: service.color,
                      flexShrink: 0,
                      marginTop: "7px",
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            {/* Micro CTA */}
            <div
              style={{
                marginTop: "20px",
                paddingTop: "16px",
                borderTop: `1px solid ${service.color}10`,
                display: "flex",
                gap: "12px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "14px", color: "#6b7280" }}>
                Need help with {service.title.toLowerCase()}?
              </span>
              <a
                href="https://wa.me/919940243827?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20tax%20services"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "7px 16px",
                  borderRadius: "50px",
                  background: service.color,
                  color: "white",
                  fontSize: "13px",
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                <MessageCircle size={13} />
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [openId, setOpenId] = useState<string | null>("income-tax");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f0018 0%, #1e0030 50%, #2d0845 100%)",
          paddingTop: "120px",
          paddingBottom: "80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(169,13,200,0.2) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto", padding: "0 24px" }}>
          <Animated variant="scaleIn">
          <div
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(169,13,200,0.15)", border: "1px solid rgba(169,13,200,0.3)", padding: "6px 16px", borderRadius: "50px", marginBottom: "20px" }}
          >
            <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 600, fontSize: "12px", color: "#FDB515", textTransform: "uppercase", letterSpacing: "1px" }}>
              Our Services
            </span>
          </div>
          </Animated>
          <Animated variant="fadeUp" delay={120}>
          <h1
            style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "clamp(32px, 5vw, 52px)", color: "white", lineHeight: 1.15, marginBottom: "16px" }}
          >
            Comprehensive Tax &{" "}
            <span
              style={{ background: "linear-gradient(135deg, #A90DC8, #FDB515)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              Financial Services
            </span>
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
            8 service categories, 70+ line items — everything your personal and business finances need, handled by one trusted team.
          </p>
          </Animated>
        </div>
      </section>

      {/* Accordion */}
      <section style={{ background: "#F5FEFD", padding: "64px 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
          <p
            style={{
              fontSize: "14px",
              color: "#9ca3af",
              textAlign: "center",
              marginBottom: "40px",
              fontStyle: "italic",
            }}
          >
            Click on any category below to expand its services.
          </p>
          {services.map((service, i) => (
            <Animated key={service.id} variant="fadeUp" delay={i * 60}>
            <ServiceAccordion
              service={service}
              isOpen={openId === service.id}
              onToggle={() => toggle(service.id)}
            />
            </Animated>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a0026 0%, #A90DC8 50%, #8A0AA3 100%)",
          padding: "64px 24px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "clamp(26px, 3.5vw, 38px)", color: "white", marginBottom: "16px" }}>
          Don't See What You Need?
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", marginBottom: "32px", maxWidth: "460px", margin: "0 auto 32px" }}>
          Contact us — we handle many more specific scenarios. A quick call or message is all it takes.
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
              background: "white",
              color: "#A90DC8",
              fontFamily: "Sora, sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
            }}
          >
            <Phone size={15} /> Call Now
          </a>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 28px",
              borderRadius: "50px",
              background: "rgba(255,255,255,0.15)",
              border: "2px solid rgba(255,255,255,0.3)",
              color: "white",
              fontFamily: "Sora, sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
            }}
          >
            Contact Us <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
