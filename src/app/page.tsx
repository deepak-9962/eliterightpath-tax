"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone, MessageCircle, CheckCircle, Star, ArrowRight,
  FileText, Receipt, Building2, BookOpen, Scale, BarChart2,
  TrendingUp, ShieldCheck, Clock, Users, Zap, Award, ChevronRight, Briefcase, Calculator, Check
} from "lucide-react";
import Animated from "@/components/Animated";
import HeroProfileVisual from "@/components/HeroProfileVisual";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import HowWeWork from "@/components/home/HowWeWork";
import IndustriesWeServe from "@/components/home/IndustriesWeServe";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const featuredServices = [
  {
    icon: FileText,
    badge: "Core Advisory",
    title: "Income Tax Services",
    desc: "Complete direct tax compliance for salaried individuals, freelancers, LLPs, and corporate enterprises. Expert deductions planning, advance tax computation, and notice resolution.",
    deliverables: ["ITR-1 through ITR-7 Filing", "TDS Return Filing (24Q, 26Q)", "Advance Tax & Capital Gains", "Income Tax Notice Handling"],
    anchor: "income-tax",
    color: "#7C3AED",
  },
  {
    icon: Receipt,
    badge: "Statutory Compliance",
    title: "GST Services",
    desc: "Comprehensive indirect tax solutions from initial registration to monthly return filing, annual returns (GSTR-9/9C), and thorough GSTR-2B input tax credit reconciliation.",
    deliverables: ["New GST Registration", "Monthly GSTR-1 & 3B Filing", "GSTR-2B ITC Matching", "GST Notice & Audit Replies"],
    anchor: "gst",
    color: "#A855F7",
  },
];

const specializedServices = [
  {
    icon: Building2,
    title: "Business Registration",
    desc: "Proprietorship, Partnership deed drafting, LLP incorporation, Private Limited formation, and MSME / Shop Act licensing.",
    anchor: "business-registration",
    color: "#7C3AED",
  },
  {
    icon: BookOpen,
    title: "Book Keeping",
    desc: "Daily ledger posting, sales & purchase voucher entry, bank reconciliations, invoicing, and expense tracking in modern accounting software.",
    anchor: "bookkeeping",
    color: "#FBBF24",
  },
  {
    icon: Calculator,
    title: "Accounts Maintenance",
    desc: "End-to-end periodic ledger maintenance, monthly closing, P&L, balance sheet preparation, payroll, and executive MIS reports.",
    anchor: "accounts-maintenance",
    color: "#A855F7",
  },
  {
    icon: Scale,
    title: "Compliance & Legal",
    desc: "ROC annual filings (AOC-4, MGT-7), statutory register maintenance, labour law compliance, and corporate secretarial advisory.",
    anchor: "compliance",
    color: "#7C3AED",
  },
  {
    icon: BarChart2,
    title: "Audit Support",
    desc: "Statutory audit support, internal controls review, and balance sheet audit readiness.",
    anchor: "audit",
    color: "#A855F7",
  },
  {
    icon: TrendingUp,
    title: "Financial Advisory",
    desc: "Strategic tax planning, business cash flow management, capital structuring, and long-term financial growth guidance.",
    anchor: "financial-advisory",
    color: "#FBBF24",
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Expert Guidance",
    desc: "Led by Mr. Raj Paudel, an experienced tax practitioner with deep expertise in Indian direct and indirect tax laws.",
    color: "#7C3AED",
  },
  {
    icon: Clock,
    title: "Timely Filing Guarantee",
    desc: "We track every statutory deadline proactively — ensuring zero late fees, zero interest charges, and zero compliance penalties.",
    color: "#FBBF24",
  },
  {
    icon: Users,
    title: "Direct Consultant Access",
    desc: "Direct access to your dedicated tax advisor — not a ticketing queue or call center. Your concerns receive personal attention.",
    color: "#7C3AED",
  },
  {
    icon: ShieldCheck,
    title: "100% Transparent Pricing",
    desc: "Fixed, upfront pricing with no hidden charges or surprise invoices. You always know what is being done and why.",
    color: "#FBBF24",
  },
  {
    icon: Zap,
    title: "Full-Spectrum Coverage",
    desc: "From ITR and GST to bookkeeping, payroll, and company incorporation — one trusted firm handles your complete compliance.",
    color: "#7C3AED",
  },
  {
    icon: Star,
    title: "Proven Track Record",
    desc: "Over 1,000+ tax returns filed and 500+ businesses served with consistent precision and verified client trust across Tamil Nadu.",
    color: "#FBBF24",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── 1. HERO SECTION ─── */}
      <section
        className="hero-financial-grid hero-section"
        style={{
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "128px",
          paddingBottom: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "1.15fr 1fr",
            gap: "56px",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
            width: "100%",
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline, Narrative, CTAs, Credentials */}
          <div>
            <Animated variant="fadeUp" delay={100}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(124, 58, 237, 0.16)",
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                  padding: "6px 16px",
                  borderRadius: "50px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#D946EF",
                  }}
                />
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
                  Tax Consultancy • Tamil Nadu
                </span>
              </div>
            </Animated>

            <Animated variant="fadeUp" delay={200}>
              <h1
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(34px, 4.6vw, 54px)",
                  color: "#FFFFFF",
                  lineHeight: 1.15,
                  marginBottom: "18px",
                  letterSpacing: "-0.8px",
                }}
              >
                GST & Tax Solutions <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #A855F7 0%, #D946EF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Built for Modern Businesses
                </span>
              </h1>
            </Animated>

            <Animated variant="fadeUp" delay={300}>
              <p
                style={{
                  fontSize: "16px",
                  color: "rgba(255, 255, 255, 0.72)",
                  lineHeight: 1.75,
                  marginBottom: "34px",
                  maxWidth: "540px",
                }}
              >
                Expert income tax filing, GST compliance, bookkeeping, and business registrations. Guided personally by Mr. Raj Paudel to keep your tax and business compliance accurate, timely, and audit-ready.
              </p>
            </Animated>

            {/* CTAs */}
            <Animated variant="fadeUp" delay={400}>
              <div
                className="hero-cta-row"
                style={{
                  display: "flex",
                  gap: "14px",
                  flexWrap: "wrap",
                  marginBottom: "38px",
                }}
              >
                <Link
                  href="/contact"
                  className="btn-fintech-primary"
                  style={{
                    padding: "14px 30px",
                    fontSize: "14.5px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  Book Free Consultation <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/919360044152?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20tax%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-fintech-secondary"
                  style={{
                    padding: "14px 28px",
                    fontSize: "14.5px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <MessageCircle size={16} color="#25D366" /> WhatsApp Us
                </a>
              </div>
            </Animated>

            {/* Business Credentials Bar — Aligned, Trustworthy */}
            <Animated variant="fadeUp" delay={500}>
              <div
                style={{
                  background: "rgba(22, 11, 39, 0.75)",
                  border: "1px solid rgba(168, 85, 247, 0.2)",
                  borderRadius: "16px",
                  padding: "16px 22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "16px",
                  maxWidth: "540px",
                }}
                className="hero-credentials-bar"
              >
                <div>
                  <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "16px", color: "#FBBF24" }}>
                    ⭐ 4.9 / 5.0
                  </div>
                  <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.5)", fontWeight: 500 }}>
                    Client Feedback
                  </div>
                </div>

                <div style={{ width: "1px", height: "28px", background: "rgba(255, 255, 255, 0.1)" }} className="cred-divider" />

                <div>
                  <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "16px", color: "#FFFFFF" }}>
                    500+
                  </div>
                  <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.5)", fontWeight: 500 }}>
                    Clients Served
                  </div>
                </div>

                <div style={{ width: "1px", height: "28px", background: "rgba(255, 255, 255, 0.1)" }} className="cred-divider" />

                <div>
                  <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "16px", color: "#FFFFFF" }}>
                    1000+
                  </div>
                  <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.5)", fontWeight: 500 }}>
                    Returns Filed
                  </div>
                </div>

                <div style={{ width: "1px", height: "28px", background: "rgba(255, 255, 255, 0.1)" }} className="cred-divider" />

                <div>
                  <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "15px", color: "#A855F7" }}>
                    10:00 AM – 9:00 PM
                  </div>
                  <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.5)", fontWeight: 500 }}>
                    Support Hours
                  </div>
                </div>
              </div>
            </Animated>
          </div>

          {/* Right Column: Financial Workspace Showcase Visual */}
          <Animated variant="scaleIn" delay={300}>
            <div
              className="hero-right"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HeroProfileVisual />
            </div>
          </Animated>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; }
            .hero-right { margin-top: 20px; }
            .hero-cta-row { justify-content: center; }
            .hero-credentials-bar { margin: 0 auto; justify-content: center; }
          }
          @media (max-width: 768px) {
            .hero-section { padding-top: 100px !important; padding-bottom: 60px !important; }
            .hero-credentials-bar { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; text-align: center; }
            .cred-divider { display: none !important; }
            .hero-cta-row { flex-direction: column; align-items: center; }
            .hero-cta-row > * { width: 100%; max-width: 320px; justify-content: center; text-align: center; }
          }
        `}</style>
      </section>

      {/* ─── 2. SERVICES SECTION ─── */}
      <section
        style={{
          background: "#FAF8FF",
          padding: "96px 0 100px",
          position: "relative",
        }}
        className="services-ledger-bg"
      >
        {/* Organic Curved Transition from Dark Hero */}
        <div className="hero-transition-curve" aria-hidden="true">
          <svg
            viewBox="0 0 1440 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="heroCurveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0B0614" />
                <stop offset="55%" stopColor="#0E071A" />
                <stop offset="100%" stopColor="#160B27" />
              </linearGradient>
              <linearGradient id="heroCurveGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.08" />
                <stop offset="35%" stopColor="#7C3AED" stopOpacity="0.22" />
                <stop offset="65%" stopColor="#9333EA" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.10" />
              </linearGradient>
              <filter id="softPurpleAura" x="-5%" y="-20%" width="110%" height="150%">
                <feGaussianBlur stdDeviation="3" />
              </filter>
            </defs>
            <path
              d="M -2 8 C 440 68, 960 76, 1442 22"
              stroke="#7C3AED"
              strokeWidth="5"
              strokeOpacity="0.07"
              filter="url(#softPurpleAura)"
              fill="none"
            />
            <path
              d="M -2 -2 L -2 8 C 440 68, 960 76, 1442 22 L 1442 -2 Z"
              fill="url(#heroCurveGrad)"
            />
            <path
              d="M -2 8 C 440 68, 960 76, 1442 22"
              stroke="url(#heroCurveGlow)"
              strokeWidth="1.25"
              fill="none"
            />
          </svg>
        </div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

          {/* ── Section Header ── */}
          <Animated variant="fadeUp">
            <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "700px", margin: "0 auto 60px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "#EDE9FE",
                  color: "#7C3AED",
                  padding: "5px 14px",
                  borderRadius: "50px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  fontFamily: "Sora, sans-serif",
                  marginBottom: "18px",
                }}
              >
                Our Services
              </div>
              <h2
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(26px, 3.6vw, 42px)",
                  color: "#111827",
                  marginBottom: "14px",
                  lineHeight: 1.18,
                }}
              >
                Everything Your Business{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #7C3AED 0%, #D946EF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Needs to Stay Compliant
                </span>
              </h2>
              <p style={{ fontSize: "15.5px", color: "#64748B", lineHeight: 1.7, margin: 0 }}>
                Tax, GST, accounting and business compliance — under one roof.
              </p>
            </div>
          </Animated>

          {/* ── Primary Services: Income Tax + GST ── */}
          <div
            className="svc-primary-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
              marginBottom: "24px",
            }}
          >
            {/* 01 — Income Tax */}
            <Animated variant="fadeUp" delay={80}>
              <Link href="/services#income-tax" style={{ textDecoration: "none", display: "block", height: "100%" }}>
                <div
                  className="svc-primary-card"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(124, 58, 237, 0.14)",
                    borderRadius: "22px",
                    padding: "36px 36px 30px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 4px 24px rgba(30, 20, 60, 0.05)",
                    transition: "transform 0.2s ease-out, border-color 0.2s ease-out, box-shadow 0.2s ease-out",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.32)";
                    e.currentTarget.style.boxShadow = "0 12px 36px rgba(124, 58, 237, 0.09)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.14)";
                    e.currentTarget.style.boxShadow = "0 4px 24px rgba(30, 20, 60, 0.05)";
                  }}
                >
                  {/* Number + Icon row */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px" }}>
                    <span
                      style={{
                        fontFamily: "Sora, sans-serif",
                        fontWeight: 800,
                        fontSize: "13px",
                        color: "#7C3AED",
                        letterSpacing: "0.5px",
                        opacity: 0.7,
                      }}
                    >
                      01
                    </span>
                    <FileText size={18} color="#7C3AED" strokeWidth={1.5} style={{ opacity: 0.55 }} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 800,
                      fontSize: "21px",
                      color: "#111827",
                      marginBottom: "6px",
                      lineHeight: 1.2,
                    }}
                  >
                    Income Tax Services
                  </h3>

                  {/* Descriptor */}
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#A855F7",
                      letterSpacing: "0.6px",
                      textTransform: "uppercase",
                      fontFamily: "Sora, sans-serif",
                      marginBottom: "16px",
                    }}
                  >
                    ITR Filing · TDS · Tax Planning
                  </p>

                  {/* Description */}
                  <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.7, marginBottom: "22px" }}>
                    Complete direct tax compliance for salaried individuals, freelancers, LLPs, and corporate enterprises. Expert deductions planning, advance tax computation, and notice resolution.
                  </p>

                  {/* Service tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "28px", marginTop: "auto" }}>
                    {["ITR Filing", "TDS Return Filing", "Advance Tax", "Capital Gains", "Notice Handling"].map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "11.5px",
                          fontWeight: 600,
                          color: "#374151",
                          background: "#F5F0FF",
                          border: "1px solid rgba(124, 58, 237, 0.14)",
                          padding: "4px 10px",
                          borderRadius: "8px",
                          fontFamily: "Sora, sans-serif",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#7C3AED",
                      fontWeight: 700,
                      fontSize: "13.5px",
                      fontFamily: "Sora, sans-serif",
                      borderTop: "1px solid rgba(124, 58, 237, 0.08)",
                      paddingTop: "18px",
                    }}
                    className="svc-cta-arrow"
                  >
                    Explore Income Tax Services <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </Animated>

            {/* 02 — GST */}
            <Animated variant="fadeUp" delay={160}>
              <Link href="/services#gst" style={{ textDecoration: "none", display: "block", height: "100%" }}>
                <div
                  className="svc-primary-card"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(124, 58, 237, 0.14)",
                    borderRadius: "22px",
                    padding: "36px 36px 30px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 4px 24px rgba(30, 20, 60, 0.05)",
                    transition: "transform 0.2s ease-out, border-color 0.2s ease-out, box-shadow 0.2s ease-out",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.32)";
                    e.currentTarget.style.boxShadow = "0 12px 36px rgba(124, 58, 237, 0.09)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.14)";
                    e.currentTarget.style.boxShadow = "0 4px 24px rgba(30, 20, 60, 0.05)";
                  }}
                >
                  {/* Number + Icon row */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px" }}>
                    <span
                      style={{
                        fontFamily: "Sora, sans-serif",
                        fontWeight: 800,
                        fontSize: "13px",
                        color: "#7C3AED",
                        letterSpacing: "0.5px",
                        opacity: 0.7,
                      }}
                    >
                      02
                    </span>
                    <Receipt size={18} color="#A855F7" strokeWidth={1.5} style={{ opacity: 0.55 }} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 800,
                      fontSize: "21px",
                      color: "#111827",
                      marginBottom: "6px",
                      lineHeight: 1.2,
                    }}
                  >
                    GST Services
                  </h3>

                  {/* Descriptor */}
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#A855F7",
                      letterSpacing: "0.6px",
                      textTransform: "uppercase",
                      fontFamily: "Sora, sans-serif",
                      marginBottom: "16px",
                    }}
                  >
                    Registration · Returns · Reconciliation
                  </p>

                  {/* Description */}
                  <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.7, marginBottom: "22px" }}>
                    GST registration, monthly return filing, GSTR-2B ITC reconciliation, annual returns (GSTR-9/9C), and notice assistance — end to end.
                  </p>

                  {/* Service tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "28px", marginTop: "auto" }}>
                    {["GST Registration", "GSTR-1 & 3B Filing", "GSTR-2B ITC Matching", "Annual Returns", "GST Notice Assistance"].map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "11.5px",
                          fontWeight: 600,
                          color: "#374151",
                          background: "#F5F0FF",
                          border: "1px solid rgba(124, 58, 237, 0.14)",
                          padding: "4px 10px",
                          borderRadius: "8px",
                          fontFamily: "Sora, sans-serif",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#7C3AED",
                      fontWeight: 700,
                      fontSize: "13.5px",
                      fontFamily: "Sora, sans-serif",
                      borderTop: "1px solid rgba(124, 58, 237, 0.08)",
                      paddingTop: "18px",
                    }}
                    className="svc-cta-arrow"
                  >
                    Explore GST Services <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </Animated>
          </div>

          {/* ── Supporting Services: 3 × 2 grid ── */}
          <div
            className="svc-supporting-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              marginBottom: "48px",
            }}
          >
            {[
              {
                num: "03",
                Icon: Building2,
                title: "Business Registration",
                descriptor: "Proprietorship · Partnership · LLP · Company",
                desc: "Business formation and registration support, including MSME, Shop Act, and professional licensing.",
                anchor: "business-registration",
              },
              {
                num: "04",
                Icon: BookOpen,
                title: "Book Keeping",
                descriptor: "Ledger · Invoicing · Reconciliation",
                desc: "Daily ledger posting, voucher entry, bank reconciliations, invoicing, and expense tracking.",
                anchor: "bookkeeping",
              },
              {
                num: "05",
                Icon: Calculator,
                title: "Accounts Maintenance",
                descriptor: "Ledger · Closing · MIS",
                desc: "Periodic maintenance, monthly closing, P&L, balance sheet preparation, payroll, and MIS reports.",
                anchor: "accounts-maintenance",
              },
              {
                num: "06",
                Icon: Scale,
                title: "Compliance & Legal",
                descriptor: "ROC · Statutory Compliance · Labour",
                desc: "ROC annual filings, statutory register maintenance, labour law compliance, and corporate advisory.",
                anchor: "compliance",
              },
              {
                num: "07",
                Icon: BarChart2,
                title: "Audit Support",
                descriptor: "Audit Preparation · Internal Controls",
                desc: "Statutory audit support, internal controls review, and balance sheet audit readiness.",
                anchor: "audit",
              },
              {
                num: "08",
                Icon: TrendingUp,
                title: "Financial Advisory",
                descriptor: "Tax Planning · Cash Flow · Growth",
                desc: "Strategic tax planning, business cash flow management, capital structuring, and growth guidance.",
                anchor: "financial-advisory",
              },
            ].map(({ num, Icon, title, descriptor, desc, anchor }, idx) => (
              <Animated key={anchor} variant="fadeUp" delay={80 + idx * 60}>
                <Link href={`/services#${anchor}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div
                    className="svc-supporting-card"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid rgba(124, 58, 237, 0.11)",
                      borderRadius: "18px",
                      padding: "28px 26px 24px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: "0 2px 16px rgba(30, 20, 60, 0.04)",
                      transition: "transform 0.2s ease-out, border-color 0.2s ease-out, box-shadow 0.2s ease-out",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.28)";
                      e.currentTarget.style.boxShadow = "0 10px 28px rgba(124, 58, 237, 0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.11)";
                      e.currentTarget.style.boxShadow = "0 2px 16px rgba(30, 20, 60, 0.04)";
                    }}
                  >
                    {/* Number + Icon */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                      <span
                        style={{
                          fontFamily: "Sora, sans-serif",
                          fontWeight: 800,
                          fontSize: "12px",
                          color: "#7C3AED",
                          letterSpacing: "0.5px",
                          opacity: 0.6,
                        }}
                      >
                        {num}
                      </span>
                      <Icon size={16} color="#7C3AED" strokeWidth={1.6} style={{ opacity: 0.45 }} />
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "Sora, sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#111827",
                        marginBottom: "5px",
                        lineHeight: 1.25,
                      }}
                    >
                      {title}
                    </h3>

                    {/* Descriptor */}
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "#A855F7",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        fontFamily: "Sora, sans-serif",
                        marginBottom: "12px",
                      }}
                    >
                      {descriptor}
                    </p>

                    {/* Description */}
                    <p style={{ fontSize: "13.5px", color: "#64748B", lineHeight: 1.65, marginBottom: "20px", flexGrow: 1 }}>
                      {desc}
                    </p>

                    {/* CTA */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        color: "#7C3AED",
                        fontWeight: 700,
                        fontSize: "12.5px",
                        fontFamily: "Sora, sans-serif",
                        borderTop: "1px solid rgba(124, 58, 237, 0.07)",
                        paddingTop: "14px",
                      }}
                      className="svc-cta-arrow"
                    >
                      Explore <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </Animated>
            ))}
          </div>

          {/* ── Consultation Strip ── */}
          <Animated variant="fadeUp" delay={100}>
            <div
              style={{
                background: "rgba(124, 58, 237, 0.04)",
                border: "1px solid rgba(124, 58, 237, 0.13)",
                borderRadius: "18px",
                padding: "28px 36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "#111827",
                    marginBottom: "4px",
                  }}
                >
                  Not sure which service you need?
                </p>
                <p style={{ fontSize: "13.5px", color: "#64748B", margin: 0, lineHeight: 1.6 }}>
                  Tell us what you&apos;re trying to solve and we&apos;ll point you in the right direction.
                </p>
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    padding: "11px 22px",
                    borderRadius: "50px",
                    background: "#7C3AED",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "13.5px",
                    fontFamily: "Sora, sans-serif",
                    textDecoration: "none",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#6D28D9"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#7C3AED"; }}
                >
                  Talk to Raj <ArrowRight size={14} />
                </Link>
                <a
                  href="https://wa.me/919360044152?text=Hi%2C%20I%27d%20like%20to%20understand%20which%20service%20suits%20my%20business"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    padding: "11px 20px",
                    borderRadius: "50px",
                    background: "#25D366",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "13.5px",
                    textDecoration: "none",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </div>
            </div>
          </Animated>

        </div>

        {/* Responsive styles */}
        <style>{`
          @media (max-width: 900px) {
            .svc-primary-grid { grid-template-columns: 1fr !important; }
            .svc-supporting-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 600px) {
            .svc-supporting-grid { grid-template-columns: 1fr !important; }
          }
          .svc-cta-arrow svg {
            transition: transform 0.2s ease-out;
          }
          .svc-primary-card:hover .svc-cta-arrow svg,
          .svc-supporting-card:hover .svc-cta-arrow svg {
            transform: translateX(3px);
          }
        `}</style>
      </section>



      {/* ─── 3. WHO WE HELP SECTION ─── */}
      <WhoWeHelp />

      {/* ─── 4. HOW WE WORK (PROCESS) SECTION ─── */}
      <HowWeWork />

      {/* ─── 5. FOUNDER / ABOUT SECTION ─── */}
      <section
        style={{
          background: "#FAF7FF",
          padding: "92px 0 96px",
          position: "relative",
          borderTop: "1px solid rgba(124, 58, 237, 0.07)",
          borderBottom: "1px solid rgba(124, 58, 237, 0.07)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div
            className="about-founder-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "0.88fr 1.12fr",
              gap: "72px",
              alignItems: "flex-start",
            }}
          >
            {/* ── LEFT: Portrait ── */}
            <Animated variant="fadeLeft">
              <div style={{ position: "relative" }}>
                {/* Photo frame — minimal, architectural */}
                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(124, 58, 237, 0.13)",
                    borderRadius: "22px",
                    padding: "8px",
                    boxShadow: "0 16px 48px rgba(11, 6, 20, 0.07)",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "16px",
                      overflow: "hidden",
                      aspectRatio: "3 / 4",
                      position: "relative",
                      background: "#160B27",
                    }}
                  >
                    <Image
                      src="/raj-paudel.png"
                      alt="Raj Paudel — Proprietor & Tax Consultant, Elite Right Path"
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "top center",
                      }}
                      sizes="(max-width: 768px) 100vw, 460px"
                      priority
                    />
                  </div>
                </div>

                {/* Simple editorial caption below portrait */}
                <div
                  style={{
                    marginTop: "16px",
                    borderLeft: "2px solid #A855F7",
                    paddingLeft: "12px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#111827",
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    Raj Paudel
                  </p>
                  <p
                    style={{
                      fontSize: "12.5px",
                      color: "#64748B",
                      margin: "2px 0 0",
                      fontWeight: 500,
                    }}
                  >
                    Proprietor &amp; Tax Consultant
                  </p>
                </div>
              </div>
            </Animated>

            {/* ── RIGHT: Story ── */}
            <div>
              {/* Eyebrow */}
              <Animated variant="fadeUp" delay={60}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "#EDE9FE",
                    color: "#7C3AED",
                    padding: "5px 14px",
                    borderRadius: "50px",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    fontFamily: "Sora, sans-serif",
                    marginBottom: "20px",
                  }}
                >
                  About Elite Right Path
                </div>
              </Animated>

              {/* Heading */}
              <Animated variant="fadeUp" delay={120}>
                <h2
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(24px, 3.2vw, 38px)",
                    color: "#111827",
                    lineHeight: 1.18,
                    marginBottom: "22px",
                  }}
                >
                  Meet the Person Behind{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #7C3AED 0%, #D946EF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Elite Right Path
                  </span>
                </h2>
              </Animated>

              {/* Story paragraphs */}
              <Animated variant="fadeUp" delay={180}>
                <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: 1.8, marginBottom: "14px" }}>
                  Elite Right Path was built with a simple idea: tax and compliance should be easier to understand and easier to manage — regardless of the size of your business. Raj Paudel started this practice to give clients a place where they can ask straightforward questions and receive clear, practical answers.
                </p>
              </Animated>

              <Animated variant="fadeUp" delay={230}>
                <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: 1.8, marginBottom: "32px" }}>
                  Raj personally oversees every client engagement — from income tax filings and GST returns to business registrations and bookkeeping. Clients work directly with him, not through a queue or an intermediary.
                </p>
              </Animated>

              {/* Three principles — editorial list, no glowing cards */}
              <Animated variant="fadeUp" delay={290}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0",
                    marginBottom: "36px",
                  }}
                >
                  {[
                    {
                      num: "01",
                      title: "Precision",
                      desc: "Careful attention to every filing, document, and compliance requirement.",
                    },
                    {
                      num: "02",
                      title: "Transparency",
                      desc: "Clear communication and straightforward guidance throughout the process.",
                    },
                    {
                      num: "03",
                      title: "Personal Guidance",
                      desc: "Direct support from your tax consultant whenever you need clarity.",
                    },
                  ].map((principle, i) => (
                    <div key={principle.num}>
                      <div
                        style={{
                          display: "flex",
                          gap: "18px",
                          alignItems: "flex-start",
                          padding: "18px 0",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "Sora, sans-serif",
                            fontWeight: 800,
                            fontSize: "12px",
                            color: "#A855F7",
                            letterSpacing: "0.5px",
                            opacity: 0.75,
                            flexShrink: 0,
                            paddingTop: "2px",
                          }}
                        >
                          {principle.num}
                        </span>
                        <div>
                          <p
                            style={{
                              fontFamily: "Sora, sans-serif",
                              fontWeight: 700,
                              fontSize: "14.5px",
                              color: "#111827",
                              margin: "0 0 4px",
                            }}
                          >
                            {principle.title}
                          </p>
                          <p style={{ fontSize: "13.5px", color: "#64748B", lineHeight: 1.65, margin: 0 }}>
                            {principle.desc}
                          </p>
                        </div>
                      </div>
                      {i < 2 && (
                        <div
                          style={{
                            height: "1px",
                            background: "rgba(124, 58, 237, 0.08)",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </Animated>

              {/* CTAs */}
              <Animated variant="fadeUp" delay={360}>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center", marginBottom: "28px" }}>
                  {/* Primary */}
                  <Link href="/about" className="btn-orchid" style={{ textDecoration: "none" }}>
                    Read Raj&apos;s Story <ArrowRight size={15} />
                  </Link>
                  {/* Secondary */}
                  <Link
                    href="/about#team"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "11px 22px",
                      borderRadius: "50px",
                      background: "transparent",
                      border: "1.5px solid rgba(124, 58, 237, 0.28)",
                      color: "#7C3AED",
                      fontWeight: 700,
                      fontSize: "13.5px",
                      textDecoration: "none",
                      fontFamily: "Sora, sans-serif",
                      transition: "border-color 0.2s ease, background 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124, 58, 237, 0.05)";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124, 58, 237, 0.48)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124, 58, 237, 0.28)";
                    }}
                  >
                    Meet Our Team <ArrowRight size={14} />
                  </Link>
                </div>
              </Animated>

              {/* Team teaser — subtle, text-only */}
              <Animated variant="fadeUp" delay={420}>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#94A3B8",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  Raj is supported by a team of 4 professionals across tax, accounts, and compliance.{" "}
                  <Link
                    href="/about#team"
                    style={{
                      color: "#7C3AED",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Meet the people behind the work →
                  </Link>
                </p>
              </Animated>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .about-founder-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </section>



      {/* ─── 6. WHY CHOOSE US SECTION ─── */}
      <section
        style={{
          background: "#FAF7FF",
          padding: "92px 0 96px",
          position: "relative",
        }}
        className="ledger-grid-bg"
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

          {/* ── Section Header (centred) ── */}
          <Animated variant="fadeUp">
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "#EDE9FE",
                  color: "#7C3AED",
                  padding: "5px 14px",
                  borderRadius: "50px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  fontFamily: "Sora, sans-serif",
                  marginBottom: "18px",
                }}
              >
                Why Choose Us
              </div>
              <h2
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(25px, 3.6vw, 40px)",
                  color: "#111827",
                  lineHeight: 1.18,
                  marginBottom: "14px",
                }}
              >
                The{" "}
                <span style={{ color: "#7C3AED" }}>Right Path</span>{" "}
                Makes All the Difference
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "#64748B",
                  maxWidth: "500px",
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                Clear work, careful guidance, and straightforward communication at every step.
              </p>
            </div>
          </Animated>

          {/* ── Two-Column Body ── */}
          <div
            className="wcu-body-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "0.82fr 1.18fr",
              gap: "64px",
              alignItems: "flex-start",
            }}
          >
            {/* ── LEFT: Typographic statement ── */}
            <Animated variant="fadeLeft">
              <div
                style={{
                  position: "sticky",
                  top: "96px",
                }}
              >
                {/* Thin brand accent line above */}
                <div
                  style={{
                    width: "36px",
                    height: "3px",
                    background: "linear-gradient(90deg, #7C3AED, #D946EF)",
                    borderRadius: "2px",
                    marginBottom: "24px",
                  }}
                />

                {/* Statement */}
                <p
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(22px, 2.8vw, 32px)",
                    color: "#111827",
                    lineHeight: 1.22,
                    marginBottom: "20px",
                    letterSpacing: "-0.3px",
                  }}
                >
                  Your compliance,
                  <br />
                  <span
                    style={{
                      color: "#7C3AED",
                    }}
                  >
                    handled with care.
                  </span>
                </p>

                <p
                  style={{
                    fontSize: "14px",
                    color: "#64748B",
                    lineHeight: 1.75,
                    marginBottom: "28px",
                  }}
                >
                  At Elite Right Path, clients deal directly with Raj Paudel — the person responsible for their filings. There is no queue, no handoff, and no unnecessary delay.
                </p>

                {/* Subtle bottom rule */}
                <div
                  style={{
                    borderTop: "1px solid rgba(124, 58, 237, 0.1)",
                    paddingTop: "20px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 700,
                      fontSize: "12px",
                      color: "#A855F7",
                      letterSpacing: "0.8px",
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    Raj Paudel
                  </p>
                  <p style={{ fontSize: "12px", color: "#94A3B8", margin: "2px 0 0" }}>
                    Proprietor &amp; Tax Consultant
                  </p>
                </div>
              </div>
            </Animated>

            {/* ── RIGHT: Six numbered reasons ── */}
            <Animated variant="fadeUp" delay={80}>
              <div>
                {[
                  {
                    num: "01",
                    title: "Direct Consultant Access",
                    desc: "Clients speak with the person handling their work — not a support queue or intermediary. Questions receive clear, direct answers.",
                  },
                  {
                    num: "02",
                    title: "Timely Communication",
                    desc: "Deadlines are tracked and clients are informed in advance. You know what is needed, what is being handled, and what comes next.",
                  },
                  {
                    num: "03",
                    title: "Careful Review",
                    desc: "Every filing, document, and compliance requirement is reviewed with close attention before submission.",
                  },
                  {
                    num: "04",
                    title: "Transparent Approach",
                    desc: "Clear expectations from the start. No unnecessary complexity, no vague timelines, and no surprises in how work is scoped or priced.",
                  },
                  {
                    num: "05",
                    title: "Practical Guidance",
                    desc: "Advice is focused on your actual tax and business situation — not generic templates or one-size-fits-all recommendations.",
                  },
                  {
                    num: "06",
                    title: "Broad Service Coverage",
                    desc: "Income tax, GST, bookkeeping, accounts maintenance, business registrations, and compliance — handled under one firm.",
                  },
                ].map((reason, i) => (
                  <div key={reason.num}>
                    <div
                      className="wcu-reason-row"
                      style={{
                        display: "flex",
                        gap: "22px",
                        alignItems: "flex-start",
                        cursor: "default",
                        transition: "background 0.15s ease",
                        borderRadius: "8px",
                        margin: "0 -8px",
                        padding: "22px 8px",
                      }}
                      onMouseEnter={(e) => {
                        const num = e.currentTarget.querySelector(".wcu-num") as HTMLElement;
                        const title = e.currentTarget.querySelector(".wcu-title") as HTMLElement;
                        if (num) num.style.opacity = "1";
                        if (title) title.style.color = "#7C3AED";
                        e.currentTarget.style.background = "rgba(124, 58, 237, 0.03)";
                      }}
                      onMouseLeave={(e) => {
                        const num = e.currentTarget.querySelector(".wcu-num") as HTMLElement;
                        const title = e.currentTarget.querySelector(".wcu-title") as HTMLElement;
                        if (num) num.style.opacity = "0.5";
                        if (title) title.style.color = "#111827";
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      {/* Number */}
                      <span
                        className="wcu-num"
                        style={{
                          fontFamily: "Sora, sans-serif",
                          fontWeight: 800,
                          fontSize: "12px",
                          color: "#7C3AED",
                          opacity: 0.5,
                          flexShrink: 0,
                          paddingTop: "3px",
                          letterSpacing: "0.5px",
                          transition: "opacity 0.15s ease",
                          minWidth: "20px",
                        }}
                      >
                        {reason.num}
                      </span>

                      {/* Content */}
                      <div>
                        <h3
                          className="wcu-title"
                          style={{
                            fontFamily: "Sora, sans-serif",
                            fontWeight: 700,
                            fontSize: "15.5px",
                            color: "#111827",
                            margin: "0 0 6px",
                            lineHeight: 1.3,
                            transition: "color 0.15s ease",
                          }}
                        >
                          {reason.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "13.5px",
                            color: "#64748B",
                            lineHeight: 1.68,
                            margin: 0,
                          }}
                        >
                          {reason.desc}
                        </p>
                      </div>
                    </div>

                    {/* Hairline separator between reasons */}
                    {i < 5 && (
                      <div
                        style={{
                          height: "1px",
                          background: "rgba(124, 58, 237, 0.07)",
                          marginLeft: "42px",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </Animated>
          </div>
        </div>

        {/* Responsive */}
        <style>{`
          @media (max-width: 900px) {
            .wcu-body-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
            .wcu-body-grid > div:first-child > div {
              position: static !important;
            }
          }
        `}</style>
      </section>

      {/* ─── 7. INDUSTRIES WE SERVE SECTION ─── */}
      <IndustriesWeServe />

      {/* ─── 8. TESTIMONIALS SECTION ─── */}

      <TestimonialsSection />

      {/* ─── 8. FINAL CTA BANNER ─── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0B0614 0%, #160B27 60%, #1F0D36 100%)",
          padding: "80px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(168, 85, 247, 0.2)",
        }}
      >
        <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto" }}>
          <Animated variant="fadeUp">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(251, 191, 36, 0.12)",
                border: "1px solid rgba(251, 191, 36, 0.3)",
                padding: "6px 16px",
                borderRadius: "50px",
                marginBottom: "20px",
              }}
            >
              <Star size={13} color="#FBBF24" />
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#FBBF24", fontFamily: "Sora, sans-serif" }}>
                Free First Consultation
              </span>
            </div>
            <h2
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(28px, 4.2vw, 46px)",
                color: "#FFFFFF",
                marginBottom: "16px",
                lineHeight: 1.2,
              }}
            >
              Ready to Simplify Your Taxes?
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.75)",
                marginBottom: "36px",
                lineHeight: 1.7,
              }}
            >
              Talk directly with Mr. Raj Paudel today. One conversation is all it takes to put your personal or business compliance on the right path.
            </p>

            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="btn-fintech-primary"
                style={{
                  padding: "14px 32px",
                  fontSize: "15px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Book Free Consultation <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/919360044152?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20tax%20services"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 30px",
                  borderRadius: "50px",
                  background: "#25D366",
                  color: "white",
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(37, 211, 102, 0.3)",
                  transition: "all 0.3s ease",
                }}
              >
                <MessageCircle size={16} /> WhatsApp Us Now
              </a>
            </div>
          </Animated>
        </div>
      </section>
    </>
  );
}
