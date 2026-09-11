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
    desc: "Tax planning, bookkeeping, and statutory compliance support for consultancies and service firms.",
    icon: Briefcase,
  },
  {
    id: "healthcare",
    name: "Healthcare & Medical",
    desc: "Financial accounting and tax filing support for clinics, medical practitioners, and healthcare providers.",
    icon: HeartPulse,
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Engineering",
    desc: "GST reconciliation, inventory bookkeeping, and audit readiness for manufacturing businesses.",
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
    desc: "GST compliance, FSSAI registration guidance, and bookkeeping for restaurants, cafes, and caterers.",
    icon: UtensilsCrossed,
  },
  {
    id: "consumer-goods",
    name: "Consumer Goods & Retail",
    desc: "Point-of-sale GST returns, trade compliance, and inventory ledger maintenance for retailers.",
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
        padding: "88px 0 92px",
        position: "relative",
        borderTop: "1px solid rgba(124, 58, 237, 0.08)",
        borderBottom: "1px solid rgba(124, 58, 237, 0.08)",
      }}
      aria-labelledby="industries-heading"
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Section Header */}
        <Animated variant="fadeUp">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
                marginBottom: "16px",
              }}
            >
              Industries We Serve
            </div>
            <h2
              id="industries-heading"
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(24px, 3.4vw, 38px)",
                color: "#111827",
                lineHeight: 1.2,
                marginBottom: "14px",
                letterSpacing: "-0.4px",
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
                fontSize: "15px",
                color: "#64748B",
                maxWidth: "620px",
                margin: "0 auto",
                lineHeight: 1.7,
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
            gap: "20px",
            marginBottom: "36px",
          }}
        >
          {industries.map((item, idx) => {
            const { icon: Icon } = item;
            return (
              <Animated key={item.id} variant="fadeUp" delay={60 + idx * 40}>
                <div
                  className="industry-tile"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(124, 58, 237, 0.12)",
                    borderRadius: "16px",
                    padding: "24px 22px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 2px 12px rgba(11, 6, 20, 0.03)",
                    transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(-2px)";
                    el.style.borderColor = "rgba(124, 58, 237, 0.28)";
                    el.style.boxShadow = "0 8px 24px rgba(124, 58, 237, 0.07)";
                    el.style.background = "rgba(124, 58, 237, 0.015)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(0)";
                    el.style.borderColor = "rgba(124, 58, 237, 0.12)";
                    el.style.boxShadow = "0 2px 12px rgba(11, 6, 20, 0.03)";
                    el.style.background = "#FFFFFF";
                  }}
                >
                  {/* Icon Header */}
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "rgba(124, 58, 237, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                      color: "#7C3AED",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  {/* Industry Title */}
                  <h3
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 700,
                      fontSize: "15.5px",
                      color: "#111827",
                      marginBottom: "8px",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.name}
                  </h3>

                  {/* Short Descriptor */}
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "#64748B",
                      lineHeight: 1.62,
                      margin: 0,
                      flexGrow: 1,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </Animated>
            );
          })}
        </div>

        {/* Subtle Bottom Note: Adapting approach + specialized regulatory areas */}
        <Animated variant="fadeUp" delay={380}>
          <div
            style={{
              padding: "16px 24px",
              background: "rgba(124, 58, 237, 0.03)",
              border: "1px dashed rgba(124, 58, 237, 0.18)",
              borderRadius: "12px",
              textAlign: "center",
              maxWidth: "840px",
              margin: "0 auto",
            }}
          >
            <p
              style={{
                fontSize: "13.5px",
                color: "#4B5563",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Different businesses have different compliance needs. Our approach adapts to yours.
              <span
                style={{
                  display: "inline-block",
                  marginLeft: "8px",
                  color: "#7C3AED",
                  fontWeight: 600,
                }}
              >
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
            gap: 16px !important;
          }
        }
        @media (max-width: 600px) {
          .industries-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
