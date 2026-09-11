"use client";

import { MessageSquareText, FileSearch, Calculator, CheckCheck, ShieldCheck } from "lucide-react";
import Animated from "@/components/Animated";

const steps = [
  {
    step: "01",
    icon: MessageSquareText,
    title: "Tell Us What You Need",
    desc: "We start with a direct consultation to understand your income profile, business transactions, or registration needs.",
  },
  {
    step: "02",
    icon: FileSearch,
    title: "We Scrutinize Your Records",
    desc: "We review Form 16, invoices, bank statements, and 26AS/AIS records to ensure every credit and deduction is captured.",
  },
  {
    step: "03",
    icon: Calculator,
    title: "We Prepare Calculations",
    desc: "Our team drafts your exact tax computations or GST filings, ensuring 100% statutory compliance and zero omissions.",
  },
  {
    step: "04",
    icon: CheckCheck,
    title: "We Verify Everything With You",
    desc: "Before any portal submission, you receive a transparent walk-through of the return draft so you are always in total control.",
  },
  {
    step: "05",
    icon: ShieldCheck,
    title: "Filing & Year-Round Support",
    desc: "We submit to the official portals, hand over government acknowledgments, track refunds, and stand by you for any notices.",
  },
];

export default function HowWeWork() {
  return (
    <section
      style={{
        background: "#FAF7FF",
        padding: "88px 0",
        position: "relative",
      }}
      className="ledger-grid-bg"
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <Animated variant="fadeUp">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
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
              How We Work
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
              Your Taxes.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED 0%, #D946EF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Our Human Process.
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
              A straightforward, transparent 5-step advisory journey designed to keep your business penalty-free and fully compliant.
            </p>
          </div>
        </Animated>

        {/* 5-step horizontal flow */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "20px",
            position: "relative",
          }}
          className="process-grid"
        >
          {steps.map(({ step, icon: Icon, title, desc }, idx) => (
            <Animated key={step} variant="fadeUp" delay={idx * 100}>
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(124, 58, 237, 0.12)",
                  borderRadius: "18px",
                  padding: "26px 20px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: "0 4px 16px rgba(11, 6, 20, 0.03)",
                  transition: "all 0.3s ease",
                }}
                className="process-step-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.3)";
                  e.currentTarget.style.boxShadow = "0 12px 28px rgba(124, 58, 237, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.12)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(11, 6, 20, 0.03)";
                }}
              >
                {/* Step indicator & Icon */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <span
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 800,
                      fontSize: "20px",
                      color: "#A855F7",
                      opacity: 0.85,
                    }}
                  >
                    {step}
                  </span>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "rgba(124, 58, 237, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#7C3AED",
                    }}
                  >
                    <Icon size={18} />
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: "15.5px",
                    color: "#111827",
                    marginBottom: "10px",
                    lineHeight: 1.35,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#64748B",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
}
