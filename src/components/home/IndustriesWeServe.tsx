"use client";

import {
  Briefcase,
  HeartPulse,
  Factory,
  Building2,
  UtensilsCrossed,
  ShoppingBag,
  TrendingUp,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import Animated from "@/components/Animated";

interface IndustryItem {
  id: string;
  name: string;
  desc: string;
  icon: LucideIcon;
}

const industries: IndustryItem[] = [
  {
    id: "business-services",
    name: "Business & Professional Services",
    desc: "Tax planning, bookkeeping, and statutory compliance for consultancies and service firms.",
    icon: Briefcase,
  },
  {
    id: "healthcare",
    name: "Healthcare & Medical",
    desc: "Financial accounting and tax filing for clinics, medical practitioners, and healthcare providers.",
    icon: HeartPulse,
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Engineering",
    desc: "GST reconciliation, inventory bookkeeping, and audit readiness for manufacturers.",
    icon: Factory,
  },
  {
    id: "real-estate",
    name: "Real Estate & Construction",
    desc: "Capital gains advisory, contractor TDS compliance, and project-level financial accounting.",
    icon: Building2,
  },
  {
    id: "food-hospitality",
    name: "Food & Hospitality",
    desc: "GST compliance, FSSAI registration guidance, and bookkeeping for restaurants and caterers.",
    icon: UtensilsCrossed,
  },
  {
    id: "consumer-goods",
    name: "Consumer Goods & Retail",
    desc: "POS GST returns, trade compliance, and inventory ledger maintenance for retailers.",
    icon: ShoppingBag,
  },
  {
    id: "finance",
    name: "Finance & Advisory",
    desc: "Advance tax computation, regulatory documentation, and strategic financial guidance.",
    icon: TrendingUp,
  },
  {
    id: "public-sector",
    name: "Public Sector & Community",
    desc: "Statutory compliance, trust documentation, and transparent accounting for organizations.",
    icon: Landmark,
  },
];

export default function IndustriesWeServe() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "64px 0 68px",
        position: "relative",
        borderTop: "1px solid rgba(124, 58, 237, 0.08)",
        borderBottom: "1px solid rgba(124, 58, 237, 0.08)",
      }}
      aria-labelledby="industries-heading"
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Section Header */}
        <Animated variant="fadeUp">
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
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
                marginBottom: "14px",
              }}
            >
              Industries We Serve
            </div>
            <h2
              id="industries-heading"
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(22px, 3vw, 34px)",
                color: "#111827",
                lineHeight: 1.2,
                marginBottom: "10px",
                letterSpacing: "-0.3px",
              }}
            >
              Supporting Businesses Across{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Diverse Industries
              </span>
            </h2>
            <p
              style={{
                fontSize: "14.5px",
                color: "#64748B",
                maxWidth: "560px",
                margin: "0 auto",
                lineHeight: 1.65,
              }}
            >
              Tax, GST, accounting and compliance support tailored to the needs of different industries and business environments.
            </p>
          </div>
        </Animated>

        {/* Industry Grid: 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div
          className="industries-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "14px",
            marginBottom: "24px",
          }}
        >
          {industries.map((item, idx) => {
            const { icon: Icon } = item;
            return (
              <Animated key={item.id} variant="fadeUp" delay={50 + idx * 35}>
                <div
                  className="industry-tile"
                  style={{
                    background: "#FAFAFA",
                    border: "1px solid rgba(124, 58, 237, 0.10)",
                    borderRadius: "14px",
                    padding: "16px 18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    boxShadow: "0 1px 6px rgba(11, 6, 20, 0.03)",
                    transition: "transform 0.18s ease-out, border-color 0.18s ease-out, box-shadow 0.18s ease-out, background 0.18s ease-out",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(-2px)";
                    el.style.borderColor = "rgba(124, 58, 237, 0.26)";
                    el.style.boxShadow = "0 6px 20px rgba(124, 58, 237, 0.07)";
                    el.style.background = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(0)";
                    el.style.borderColor = "rgba(124, 58, 237, 0.10)";
                    el.style.boxShadow = "0 1px 6px rgba(11, 6, 20, 0.03)";
                    el.style.background = "#FAFAFA";
                  }}
                >
                  {/* Icon + Title row */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "8px",
                        background: "rgba(124, 58, 237, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#7C3AED",
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      <Icon size={15} strokeWidth={1.8} />
                    </div>
                    <h3
                      style={{
                        fontFamily: "Sora, sans-serif",
                        fontWeight: 700,
                        fontSize: "14px",
                        color: "#111827",
                        lineHeight: 1.3,
                        margin: 0,
                      }}
                    >
                      {item.name}
                    </h3>
                  </div>

                  {/* Short Descriptor */}
                  <p
                    style={{
                      fontSize: "12.5px",
                      color: "#6B7280",
                      lineHeight: 1.58,
                      margin: 0,
                      paddingLeft: "40px",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </Animated>
            );
          })}
        </div>

        {/* Bottom Note */}
        <Animated variant="fadeUp" delay={320}>
          <div
            style={{
              padding: "13px 20px",
              background: "rgba(124, 58, 237, 0.03)",
              border: "1px dashed rgba(124, 58, 237, 0.16)",
              borderRadius: "10px",
              textAlign: "center",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                color: "#4B5563",
                margin: 0,
                lineHeight: 1.55,
              }}
            >
              Different businesses have different compliance needs. Our approach adapts to yours.{" "}
              <span style={{ color: "#7C3AED", fontWeight: 600 }}>
                Specialized advisory available for Legal Metrology &amp; regulatory compliance.
              </span>
            </p>
          </div>
        </Animated>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .industries-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
        }
        @media (max-width: 540px) {
          .industries-grid {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
