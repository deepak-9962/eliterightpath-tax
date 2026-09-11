"use client";

import { Star } from "lucide-react";
import Animated from "@/components/Animated";
import Link from "next/link";

const testimonials = [
  {
    name: "K. Vigneshwar",
    role: "Managing Partner",
    companyType: "Textile & Garment Manufacturing, Tirupur",
    quote:
      "When we faced GSTR-2B credit discrepancies and notice deadlines, Mr. Raj Paudel stepped in directly. His team reconciled two quarters of vendor ledgers and resolved the issue with zero penalties.",
    rating: 5,
    tag: "GST & Audit Compliance",
    initials: "KV",
    featured: false,
  },
  {
    name: "S. Arvind",
    role: "Co-Founder & Director",
    companyType: "Technology Services Pvt Ltd, Chennai",
    quote:
      "From company incorporation to monthly bookkeeping and TDS filing, Elite Right Path has been an indispensable partner. Direct consultant access makes an enormous difference compared to corporate ticket queues.",
    rating: 5,
    tag: "Bookkeeping & Corporate Filings",
    initials: "SA",
    featured: true,
  },
  {
    name: "Meera R.",
    role: "Senior Consultant",
    companyType: "Independent Healthcare Consultant, Coimbatore",
    quote:
      "Transparent fee structure with zero surprise charges. My capital gains, foreign remittances, and personal ITR filing were computed accurately and filed well before the statutory deadline.",
    rating: 5,
    tag: "Income Tax & Capital Gains",
    initials: "MR",
    featured: false,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "92px 0 96px",
        borderTop: "1px solid rgba(124, 58, 237, 0.07)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Large background quotation mark - 3% opacity, purely decorative */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "48px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "Georgia, serif",
          fontSize: "320px",
          lineHeight: 1,
          color: "#7C3AED",
          opacity: 0.03,
          userSelect: "none",
          pointerEvents: "none",
          fontWeight: 900,
        }}
      >
        &ldquo;
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

        {/* Section Header */}
        <Animated variant="fadeUp">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
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
              Client Feedback
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
              What Our{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED 0%, #D946EF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Clients Say
              </span>
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#64748B",
                maxWidth: "480px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Real experiences from people and businesses we&apos;ve worked with.
            </p>
          </div>
        </Animated>

        {/* Testimonial panels */}
        <div
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            alignItems: "stretch",
          }}
        >
          {testimonials.map((item, idx) => (
            <Animated key={item.name} variant="fadeUp" delay={idx * 100}>
              <div
                style={{
                  background: item.featured ? "#FDFBFF" : "#FFFFFF",
                  border: item.featured
                    ? "1.5px solid rgba(124, 58, 237, 0.22)"
                    : "1px solid rgba(124, 58, 237, 0.11)",
                  borderRadius: "20px",
                  padding: item.featured ? "32px 28px" : "28px 24px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: item.featured
                    ? "0 8px 28px rgba(124, 58, 237, 0.06)"
                    : "0 2px 12px rgba(11, 6, 20, 0.03)",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124, 58, 237, 0.3)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(124, 58, 237, 0.09)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = item.featured
                    ? "rgba(124, 58, 237, 0.22)"
                    : "rgba(124, 58, 237, 0.11)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = item.featured
                    ? "0 8px 28px rgba(124, 58, 237, 0.06)"
                    : "0 2px 12px rgba(11, 6, 20, 0.03)";
                }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={13} fill="#FBBF24" color="#FBBF24" />
                  ))}
                </div>

                {/* Quote - primary visual element */}
                <p
                  style={{
                    fontSize: "15px",
                    color: "#1F2937",
                    lineHeight: 1.75,
                    fontStyle: "italic",
                    flexGrow: 1,
                    marginBottom: "22px",
                  }}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Service tag */}
                <div style={{ marginBottom: "18px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#6D28D9",
                      background: "#EDE9FE",
                      border: "1px solid rgba(124, 58, 237, 0.12)",
                      padding: "3px 9px",
                      borderRadius: "6px",
                      fontFamily: "Sora, sans-serif",
                      letterSpacing: "0.2px",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Hairline divider */}
                <div
                  style={{
                    height: "1px",
                    background: "rgba(124, 58, 237, 0.07)",
                    marginBottom: "16px",
                  }}
                />

                {/* Client identity */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      background: item.featured
                        ? "linear-gradient(135deg, #7C3AED, #A855F7)"
                        : "rgba(124, 58, 237, 0.1)",
                      border: "1px solid rgba(124, 58, 237, 0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 700,
                      fontSize: "13px",
                      color: item.featured ? "#FFFFFF" : "#7C3AED",
                      flexShrink: 0,
                    }}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "Sora, sans-serif",
                        fontWeight: 700,
                        fontSize: "13.5px",
                        color: "#111827",
                        margin: "0 0 2px",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.name}
                    </p>
                    <p
                      style={{
                        fontSize: "11.5px",
                        color: "#64748B",
                        margin: 0,
                        lineHeight: 1.4,
                      }}
                    >
                      {item.role}
                    </p>
                    <p
                      style={{
                        fontSize: "11px",
                        color: "#94A3B8",
                        margin: "1px 0 0",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.companyType}
                    </p>
                  </div>
                </div>
              </div>
            </Animated>
          ))}
        </div>

        {/* Trust line + read-more */}
        <Animated variant="fadeUp" delay={140}>
          <div
            style={{
              textAlign: "center",
              marginTop: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <p
              style={{
                fontSize: "12.5px",
                color: "#94A3B8",
                fontStyle: "italic",
                margin: 0,
                letterSpacing: "0.2px",
              }}
            >
              Real clients. Real work. Real experiences.
            </p>
            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#7C3AED",
                textDecoration: "none",
                fontFamily: "Sora, sans-serif",
                transition: "gap 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.gap = "8px";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.gap = "5px";
              }}
            >
              Read more client stories &rarr;
            </Link>
          </div>
        </Animated>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
