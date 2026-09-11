"use client";

import Link from "next/link";
import { User, Rocket, Building2, Globe, ArrowRight, Check } from "lucide-react";
import Animated from "@/components/Animated";

const profiles = [
  {
    icon: User,
    category: "Individuals & Freelancers",
    who: "Salaried executives, professionals, independent contractors & investors",
    points: [
      "Form 16 & multiple employer tax computation",
      "Capital gains on mutual funds, stocks & property",
      "Maximum legal deductions under Old & New regimes",
      "Fast refund follow-up & tracking",
    ],
    highlight: "Zero hassle e-filing",
    link: "/services#income-tax",
  },
  {
    icon: Rocket,
    category: "Startups & New Ventures",
    who: "Early-stage founders, LLP partners & emerging entrepreneurs",
    points: [
      "Company & LLP incorporation guidance",
      "GST, MSME / Udyam & Shop Act registration",
      "Accounting system setup & cloud ledger setup",
      "Founder tax planning & cap table compliance",
    ],
    highlight: "Right legal setup from day one",
    link: "/services#business-registration",
  },
  {
    icon: Building2,
    category: "Growing Businesses & SMEs",
    who: "Established traders, manufacturers, agencies & service firms",
    points: [
      "End-to-end bookkeeping & monthly accounts closing",
      "Timely GSTR-1, 3B & 9C reconciliation",
      "Payroll management & TDS quarterly returns",
      "Audit support & balance sheet finalization",
    ],
    highlight: "Complete outsourced compliance",
    link: "/services#accounting",
  },
  {
    icon: Globe,
    category: "NRIs & Overseas Indians",
    who: "Non-residents with Indian income, investments, or property transactions",
    points: [
      "Form 15CA & 15CB foreign remittance certification",
      "TDS deduction on sale of inherited/owned property",
      "Double Tax Avoidance Agreement (DTAA) relief",
      "Repatriation of funds & NRE/NRO compliance",
    ],
    highlight: "Cross-border tax clarity",
    link: "/services#compliance",
  },
];

export default function WhoWeHelp() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "88px 0",
        borderTop: "1px solid rgba(124, 58, 237, 0.08)",
        borderBottom: "1px solid rgba(124, 58, 237, 0.08)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <Animated variant="fadeUp">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#EDE9FE",
                color: "#7C3AED",
                padding: "6px 16px",
                borderRadius: "50px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                fontFamily: "Sora, sans-serif",
                marginBottom: "14px",
              }}
            >
              Who We Help
            </div>
            <h2
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(26px, 3.8vw, 42px)",
                color: "#111827",
                marginBottom: "14px",
                lineHeight: 1.2,
              }}
            >
              Tailored Guidance for{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED 0%, #D946EF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Every Taxpayer Profile
              </span>
            </h2>
            <p
              style={{
                fontSize: "15.5px",
                color: "#64748B",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              We don&apos;t apply one-size-fits-all formulas. Discover how our tax and compliance workflows adapt to your specific stage.
            </p>
          </div>
        </Animated>

        {/* 4 Profile Columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
          className="who-we-help-grid"
        >
          {profiles.map(({ icon: Icon, category, who, points, highlight, link }, idx) => (
            <Animated key={category} variant="fadeUp" delay={idx * 90}>
              <div
                style={{
                  background: "#FAF7FF",
                  border: "1px solid rgba(124, 58, 237, 0.12)",
                  borderRadius: "20px",
                  padding: "26px 22px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                className="profile-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.3)";
                  e.currentTarget.style.boxShadow = "0 14px 36px rgba(124, 58, 237, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.12)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Header with Icon */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "white",
                      border: "1px solid rgba(124, 58, 237, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#7C3AED",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "Sora, sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#111827",
                        lineHeight: 1.3,
                      }}
                    >
                      {category}
                    </h3>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "12.5px",
                    color: "#64748B",
                    marginBottom: "18px",
                    lineHeight: 1.5,
                    minHeight: "38px",
                  }}
                >
                  {who}
                </p>

                {/* Bullet deliverables */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 20px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "9px",
                    flexGrow: 1,
                  }}
                >
                  {points.map((pt) => (
                    <li
                      key={pt}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        fontSize: "13px",
                        color: "#374151",
                        lineHeight: 1.45,
                      }}
                    >
                      <Check size={14} color="#7C3AED" style={{ flexShrink: 0, marginTop: "3px" }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Highlight + Link */}
                <div
                  style={{
                    paddingTop: "14px",
                    borderTop: "1px solid rgba(124, 58, 237, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11.5px",
                      fontWeight: 700,
                      color: "#7C3AED",
                      background: "rgba(124, 58, 237, 0.08)",
                      padding: "3px 8px",
                      borderRadius: "6px",
                    }}
                  >
                    {highlight}
                  </span>
                  <Link
                    href={link}
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#111827",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "3px",
                    }}
                  >
                    Details <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
}
