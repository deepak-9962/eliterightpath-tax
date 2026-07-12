"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import Animated from "@/components/Animated";

const faqs = [
  {
    q: "What documents are needed for ITR filing?",
    a: "For salaried individuals: Form 16 from employer, bank statements, PAN card, and Aadhaar. For business owners: Books of accounts, GST returns, bank statements, and investment proofs. For those with capital gains: Broker statements or property sale documents. We'll guide you on the exact list based on your specific situation.",
  },
  {
    q: "How often do I need to file GST returns?",
    a: "It depends on your turnover and registration type. Most regular taxpayers file GSTR-1 monthly or quarterly (if on QRMP scheme) and GSTR-3B monthly. Composition dealers file annually (GSTR-4). An Annual Return (GSTR-9) is also required. We'll assess your category and set up the right filing schedule for you.",
  },
  {
    q: "What should I do if I receive an income tax notice?",
    a: "Don't panic — most notices are routine. First, read it carefully to understand the section under which it's issued (e.g., 143(1) for processing, 148 for reassessment, 139(9) for defect). Contact us immediately. We'll analyze the notice, prepare a proper response, and represent you before the tax department if needed.",
  },
  {
    q: "Do you handle both individuals and businesses?",
    a: "Absolutely. We serve salaried individuals, freelancers, professionals (doctors, lawyers, CAs), sole proprietors, partnership firms, LLPs, private limited companies, and startups. Our services scale to match your complexity — from a simple ITR to full accounting + GST + ROC compliance packages.",
  },
  {
    q: "What are your consultation charges?",
    a: "Your first consultation is completely free. For ongoing services, our pricing is transparent and depends on the nature of work — ITR filing starts at very competitive rates, GST filing is priced by filing frequency, and accounting retainers are customized based on transaction volume. Call or WhatsApp us to get a no-obligation quote.",
  },
  {
    q: "What is the last date to file ITR?",
    a: "For most individuals (non-audit cases), the due date is July 31 of the assessment year. For businesses requiring tax audit, it's October 31. For companies requiring transfer pricing, November 30. Filing after the due date attracts late fees of ₹1,000–₹5,000 under Section 234F. We track all deadlines for our clients proactively.",
  },
  {
    q: "What happens if I miss the GST filing deadline?",
    a: "Late filing attracts a late fee of ₹50/day for GSTR-3B (₹20/day for NIL returns), plus 18% annual interest on the unpaid tax amount. If you miss filing for multiple months, it can also block your e-Way Bill generation. We proactively alert all our clients before every deadline.",
  },
  {
    q: "Can you help with GST registration for a new business?",
    a: "Yes! GST registration is mandatory if your annual turnover exceeds ₹40 lakhs (₹20 lakhs for service providers, ₹10 lakhs for special category states). Even below these limits, voluntary registration is beneficial for claiming input tax credit. We handle the entire registration process — document collection, GSTIN application, and ARN follow-up.",
  },
  {
    q: "Do you provide online services, or do I need to visit in person?",
    a: "We serve clients both locally and across India online. Documents can be shared securely via WhatsApp or email, and consultations happen over phone or video call. You don't need to visit our office for most services — we make the process as convenient as possible.",
  },
  {
    q: "What is TDS, and am I liable to deduct it?",
    a: "TDS (Tax Deducted at Source) is tax deducted at the time of payment by the payer and deposited to the government. You're liable to deduct TDS if you make payments above specified thresholds for salary, rent, professional fees, contractor payments, etc. Non-compliance attracts interest and penalties. We handle TDS computation, deposit, and quarterly returns (Form 24Q/26Q).",
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: (typeof faqs)[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        border: isOpen ? "2px solid #A90DC8" : "2px solid rgba(169,13,200,0.08)",
        overflow: "hidden",
        marginBottom: "12px",
        boxShadow: isOpen ? "0 8px 30px rgba(169,13,200,0.12)" : "0 2px 8px rgba(0,0,0,0.04)",
        transition: "all 0.3s ease",
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
          padding: "20px 24px",
          background: isOpen ? "rgba(169,13,200,0.04)" : "white",
          border: "none",
          cursor: "pointer",
          gap: "16px",
          textAlign: "left",
          transition: "background 0.3s ease",
        }}
        aria-expanded={isOpen}
      >
        <span
          style={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            color: isOpen ? "#A90DC8" : "#1a1a2e",
            lineHeight: 1.4,
            transition: "color 0.3s ease",
          }}
        >
          {faq.q}
        </span>
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: isOpen ? "#A90DC8" : "rgba(169,13,200,0.08)",
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
          transition: "grid-template-rows 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div className="accordion-content" style={{ padding: "0 24px 20px", borderTop: "1px solid rgba(169,13,200,0.08)" }}>
            <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: 1.8, paddingTop: "16px" }}>
              {faq.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            left: "10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(253,181,21,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto", padding: "0 24px" }}>
          <Animated variant="scaleIn">
          <div
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(253,181,21,0.15)", border: "1px solid rgba(253,181,21,0.3)", padding: "6px 16px", borderRadius: "50px", marginBottom: "20px" }}
          >
            <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 600, fontSize: "12px", color: "#FDB515", textTransform: "uppercase", letterSpacing: "1px" }}>
              Frequently Asked Questions
            </span>
          </div>
          </Animated>
          <Animated variant="fadeUp" delay={120}>
          <h1
            style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "clamp(32px, 5vw, 52px)", color: "white", lineHeight: 1.15, marginBottom: "16px" }}
          >
            Got Tax Questions?{" "}
            <span style={{ background: "linear-gradient(135deg, #A90DC8, #FDB515)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              We Have Answers.
            </span>
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
            The most common questions about tax filing, GST, notices, and our services — answered clearly.
          </p>
          </Animated>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section style={{ background: "#F5FEFD", padding: "64px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.a,
                  },
                })),
              }),
            }}
          />
          {faqs.map((faq, index) => (
            <Animated key={index} variant="fadeUp" delay={index * 50}>
            <FAQItem
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
            </Animated>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section
        style={{
          background: "white",
          padding: "64px 24px",
          textAlign: "center",
          borderTop: "1px solid rgba(169,13,200,0.08)",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #A90DC8, #8A0AA3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
              boxShadow: "0 8px 24px rgba(169,13,200,0.3)",
            }}
          >
            <MessageCircle size={28} color="white" />
          </div>
          <h2
            style={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(24px, 3vw, 34px)",
              color: "#1a1a2e",
              marginBottom: "14px",
            }}
          >
            Still Have Questions?
          </h2>
          <p style={{ fontSize: "16px", color: "#6b7280", lineHeight: 1.7, marginBottom: "28px" }}>
            Our team is available Mon–Sat, 9 AM to 6 PM. Reach out and we'll answer every question in plain, jargon-free language.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/919940243827?text=Hi%2C%20I%20have%20a%20tax%20question%20for%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orchid"
              style={{ textDecoration: "none" }}
            >
              <MessageCircle size={14} /> Ask on WhatsApp
            </a>
            <a href="tel:+919940243827" className="btn-outline" style={{ textDecoration: "none" }}>
              <Phone size={14} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
