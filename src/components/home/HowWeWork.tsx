"use client";

import { MessageSquareText, FileSearch, Calculator, CheckCheck, ShieldCheck } from "lucide-react";
import Animated from "@/components/Animated";

const steps = [
  {
    step: "01",
    icon: MessageSquareText,
    title: "Tell Us What You Need",
    desc: "A direct consultation to understand your income profile, business transactions, or registration requirements.",
    meta: "ITR · GST · Registration",
  },
  {
    step: "02",
    icon: FileSearch,
    title: "We Review Your Records",
    desc: "We go through Form 16, invoices, bank statements, and 26AS / AIS data — so every credit and deduction is captured.",
    meta: "Documents · Bank Statements · 26AS",
  },
  {
    step: "03",
    icon: Calculator,
    title: "We Prepare Calculations",
    desc: "Exact tax computations or GST filings are drafted and checked for accuracy before any submission.",
    meta: "Tax / GST Computation · Reconciliation",
    isFocal: true,
  },
  {
    step: "04",
    icon: CheckCheck,
    title: "We Verify With You",
    desc: "You receive a clear walk-through of the return draft — so you understand what is being filed and why.",
    meta: "Draft Review · Client Sign-off",
  },
  {
    step: "05",
    icon: ShieldCheck,
    title: "Filing & Ongoing Support",
    desc: "We submit to the official portals, share acknowledgments, and remain available for any follow-up or notices.",
    meta: "Portal Filing · Acknowledgments · Support",
  },
];

export default function HowWeWork() {
  return (
    <section
      style={{
        background: "#FAF7FF",
        padding: "88px 0 80px",
        position: "relative",
      }}
      className="ledger-grid-bg"
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Section header */}
        <Animated variant="fadeUp">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#EDE9FE",
                color: "#7C3AED",
                padding: "6px 16px",
                borderRadius: "50px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.9px",
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
                marginBottom: "12px",
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
                fontSize: "15px",
                color: "#64748B",
                maxWidth: "560px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              A straightforward, transparent 5-step advisory journey — designed to keep your filings accurate and on time.
            </p>
          </div>
        </Animated>

        {/* Desktop horizontal timeline */}
        <div className="hww-desktop">
          <div className="hww-track-wrap" aria-hidden="true">
            <div className="hww-track-line" />
          </div>
          <div className="hww-steps-row" role="list">
            {steps.map(({ step, icon: Icon, title, desc, meta, isFocal }, idx) => (
              <Animated key={step} variant="fadeUp" delay={idx * 90}>
                <div
                  className={`hww-step${isFocal ? " hww-step--focal" : ""}`}
                  role="listitem"
                >
                  <div className="hww-dot-wrap">
                    <div className={`hww-dot${isFocal ? " hww-dot--focal" : ""}`}>
                      <Icon size={13} strokeWidth={1.8} />
                    </div>
                    <span className={`hww-step-num${isFocal ? " hww-step-num--focal" : ""}`}>
                      {step}
                    </span>
                  </div>
                  <div className="hww-step-body">
                    <h3 className={`hww-step-title${isFocal ? " hww-step-title--focal" : ""}`}>
                      {title}
                    </h3>
                    <p className="hww-step-desc">{desc}</p>
                    <p className="hww-step-meta">{meta}</p>
                  </div>
                </div>
              </Animated>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="hww-mobile" role="list">
          {steps.map(({ step, icon: Icon, title, desc, meta, isFocal }, idx) => (
            <Animated key={`m-${step}`} variant="fadeUp" delay={idx * 80}>
              <div className="hww-mobile-step" role="listitem">
                <div className="hww-mobile-left">
                  <div className={`hww-mobile-dot${isFocal ? " hww-mobile-dot--focal" : ""}`}>
                    <Icon size={12} strokeWidth={1.8} />
                  </div>
                  {idx < steps.length - 1 && <div className="hww-mobile-vline" />}
                </div>
                <div className="hww-mobile-body">
                  <span className={`hww-mobile-num${isFocal ? " hww-mobile-num--focal" : ""}`}>
                    {step}
                  </span>
                  <h3 className={`hww-mobile-title${isFocal ? " hww-mobile-title--focal" : ""}`}>
                    {title}
                  </h3>
                  <p className="hww-mobile-desc">{desc}</p>
                  <p className="hww-mobile-meta">{meta}</p>
                </div>
              </div>
            </Animated>
          ))}
        </div>
      </div>

      <style>{`
        /* DESKTOP */
        .hww-desktop { display: block; position: relative; }
        .hww-mobile  { display: none; }

        .hww-track-wrap {
          position: absolute;
          top: 20px;
          left: calc(24px + 10%);
          right: calc(24px + 10%);
          height: 1px;
          pointer-events: none;
          z-index: 0;
        }
        .hww-track-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            #C4B5FD 8%,
            #A855F7 30%,
            #7C3AED 50%,
            #A855F7 70%,
            #C4B5FD 92%,
            transparent 100%
          );
          opacity: 0.4;
        }

        .hww-steps-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
          position: relative;
          z-index: 1;
        }

        .hww-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 8px;
          text-align: center;
        }

        .hww-dot-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
        }

        .hww-dot {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1.5px solid rgba(124, 58, 237, 0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7C3AED;
          box-shadow: 0 2px 8px rgba(124, 58, 237, 0.09);
          position: relative;
          z-index: 2;
          flex-shrink: 0;
        }
        .hww-dot--focal {
          background: #7C3AED;
          border-color: #7C3AED;
          color: #FFFFFF;
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.28);
          width: 44px;
          height: 44px;
          margin-top: -2px;
        }

        .hww-step-num {
          font-family: Sora, sans-serif;
          font-weight: 700;
          font-size: 11px;
          color: #A855F7;
          letter-spacing: 0.5px;
          opacity: 0.65;
        }
        .hww-step-num--focal {
          color: #7C3AED;
          opacity: 1;
          font-weight: 800;
        }

        .hww-step-body {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
        }

        .hww-step-title {
          font-family: Sora, sans-serif;
          font-weight: 700;
          font-size: 13px;
          color: #111827;
          line-height: 1.35;
          margin: 0;
        }
        .hww-step-title--focal {
          color: #6D28D9;
          font-weight: 800;
        }

        .hww-step-desc {
          font-size: 12px;
          color: #64748B;
          line-height: 1.6;
          margin: 0;
        }

        .hww-step-meta {
          font-family: Sora, sans-serif;
          font-size: 9.5px;
          font-weight: 600;
          color: #A855F7;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          margin: 0;
          opacity: 0.7;
        }

        .hww-step--focal .hww-step-body {
          background: rgba(124, 58, 237, 0.04);
          border: 1px solid rgba(124, 58, 237, 0.10);
          border-radius: 14px;
          padding: 14px 10px;
          margin-top: -2px;
        }

        /* MOBILE */
        @media (max-width: 860px) {
          .hww-desktop { display: none; }
          .hww-mobile  { display: block; }
        }

        .hww-mobile-step {
          display: flex;
          gap: 16px;
        }

        .hww-mobile-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          width: 36px;
        }

        .hww-mobile-dot {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1.5px solid rgba(124, 58, 237, 0.26);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7C3AED;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(124, 58, 237, 0.08);
        }
        .hww-mobile-dot--focal {
          background: #7C3AED;
          border-color: #7C3AED;
          color: #FFFFFF;
          box-shadow: 0 4px 14px rgba(124, 58, 237, 0.24);
        }

        .hww-mobile-vline {
          width: 1px;
          flex-grow: 1;
          min-height: 28px;
          background: linear-gradient(to bottom, rgba(124, 58, 237, 0.28), rgba(124, 58, 237, 0.07));
          margin: 5px 0;
        }

        .hww-mobile-body {
          padding-bottom: 26px;
          flex: 1;
        }

        .hww-mobile-num {
          font-family: Sora, sans-serif;
          font-size: 10px;
          font-weight: 700;
          color: #A855F7;
          letter-spacing: 0.5px;
          display: block;
          margin-bottom: 2px;
          opacity: 0.68;
        }
        .hww-mobile-num--focal { color: #7C3AED; opacity: 1; }

        .hww-mobile-title {
          font-family: Sora, sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: #111827;
          line-height: 1.3;
          margin: 0 0 5px;
        }
        .hww-mobile-title--focal { color: #6D28D9; font-weight: 800; }

        .hww-mobile-desc {
          font-size: 13.5px;
          color: #64748B;
          line-height: 1.65;
          margin: 0 0 5px;
        }

        .hww-mobile-meta {
          font-family: Sora, sans-serif;
          font-size: 10px;
          font-weight: 600;
          color: #A855F7;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          margin: 0;
          opacity: 0.7;
        }

        @media (max-width: 480px) {
          .hww-mobile-body { padding-bottom: 20px; }
          .hww-mobile-title { font-size: 14px; }
          .hww-mobile-desc  { font-size: 13px; }
        }
      `}</style>
    </section>
  );
}
