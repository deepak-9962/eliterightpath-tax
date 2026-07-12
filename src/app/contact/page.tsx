"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock, Mail, CheckCircle, Send, ArrowRight } from "lucide-react";
import Animated from "@/components/Animated";

const services = [
  "Income Tax Return (ITR) Filing",
  "GST Registration & Filing",
  "Business Registration",
  "Accounting & Bookkeeping",
  "Tax Notice Handling",
  "Audit Support",
  "Financial Advisory",
  "Other / Not Sure",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          subject: `New Enquiry from ${formData.name} — ${formData.service}`,
          from_name: "Elite Right Path Website",
          ...formData,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(169,13,200,0.15)",
              border: "1px solid rgba(169,13,200,0.3)",
              padding: "6px 16px",
              borderRadius: "50px",
              marginBottom: "20px",
            }}
          >
            <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 600, fontSize: "12px", color: "#FDB515", textTransform: "uppercase", letterSpacing: "1px" }}>
              Contact Us
            </span>
          </div>
          <h1
            style={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 5vw, 52px)",
              color: "white",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Let's Put You on the{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A90DC8, #FDB515)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Right Path
            </span>
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
            Fill in the form below, or reach out directly. Your first consultation is free.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ background: "#F5FEFD", padding: "64px 0" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "48px",
            alignItems: "flex-start",
          }}
          className="contact-grid"
        >
          {/* Contact Form */}
          <Animated variant="fadeLeft">
          <div
            className="contact-form-card"
            style={{ background: "white", borderRadius: "24px", padding: "40px", boxShadow: "0 8px 40px rgba(169,13,200,0.08)", border: "1px solid rgba(169,13,200,0.08)" }}
          >
            <h2
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 800,
                fontSize: "24px",
                color: "#1a1a2e",
                marginBottom: "8px",
              }}
            >
              Send Us a Message
            </h2>
            <p style={{ fontSize: "14px", color: "#9ca3af", marginBottom: "28px" }}>
              We'll get back to you within one business day.
            </p>

            {status === "success" ? (
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(169,13,200,0.08), rgba(253,181,21,0.06))",
                  borderRadius: "16px",
                  padding: "40px",
                  textAlign: "center",
                  border: "2px solid rgba(169,13,200,0.15)",
                }}
              >
                <CheckCircle size={48} color="#A90DC8" style={{ margin: "0 auto 16px", display: "block" }} />
                <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "20px", color: "#1a1a2e", marginBottom: "10px" }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: "15px", color: "#6b7280" }}>
                  Thank you for reaching out. We'll contact you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px", fontFamily: "Sora, sans-serif" }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="form-input"
                  />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px", fontFamily: "Sora, sans-serif" }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px", fontFamily: "Sora, sans-serif" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="form-input"
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px", fontFamily: "Sora, sans-serif" }}>
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="form-input"
                    style={{ cursor: "pointer" }}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px", fontFamily: "Sora, sans-serif" }}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Briefly describe what you need help with..."
                    className="form-input"
                    style={{ resize: "vertical", minHeight: "100px" }}
                  />
                </div>

                {status === "error" && (
                  <div
                    style={{
                      padding: "12px 16px",
                      background: "#FEF2F2",
                      border: "1px solid #FCA5A5",
                      borderRadius: "10px",
                      fontSize: "14px",
                      color: "#B91C1C",
                    }}
                  >
                    Something went wrong. Please call or WhatsApp us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-orchid contact-submit-btn"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    opacity: status === "loading" ? 0.7 : 1,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "loading" ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={15} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          </Animated>

          {/* Contact Info Panel */}
          <Animated variant="fadeRight" delay={120}>
          <div className="contact-info-card" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Direct contact cards */}
            <div
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "28px",
                border: "1px solid rgba(169,13,200,0.08)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              }}
            >
              <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: "18px", color: "#1a1a2e", marginBottom: "20px" }}>
                Reach Us Directly
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <a
                  href="tel:+919360044152"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    textDecoration: "none",
                    padding: "16px",
                    background: "rgba(169,13,200,0.04)",
                    borderRadius: "14px",
                    border: "1px solid rgba(169,13,200,0.1)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(169,13,200,0.08)";
                    e.currentTarget.style.borderColor = "rgba(169,13,200,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(169,13,200,0.04)";
                    e.currentTarget.style.borderColor = "rgba(169,13,200,0.1)";
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #A90DC8, #8A0AA3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={18} color="white" />
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", color: "#9ca3af", fontWeight: 500, marginBottom: "2px" }}>Call Us</div>
                    <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: "16px", color: "#1a1a2e" }}>
                      +91 93600 44152
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919360044152?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20tax%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    textDecoration: "none",
                    padding: "16px",
                    background: "rgba(37,211,102,0.06)",
                    borderRadius: "14px",
                    border: "1px solid rgba(37,211,102,0.15)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(37,211,102,0.12)";
                    e.currentTarget.style.borderColor = "rgba(37,211,102,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(37,211,102,0.06)";
                    e.currentTarget.style.borderColor = "rgba(37,211,102,0.15)";
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "#25D366",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MessageCircle size={18} color="white" />
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", color: "#9ca3af", fontWeight: 500, marginBottom: "2px" }}>WhatsApp Us</div>
                    <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: "16px", color: "#1a1a2e" }}>
                      +91 93600 44152
                    </div>
                  </div>
                </a>

                {/* Office Address Card */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px",
                    background: "rgba(169,13,200,0.04)",
                    borderRadius: "14px",
                    border: "1px solid rgba(169,13,200,0.1)",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #A90DC8, #8A0AA3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={18} color="white" />
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", color: "#9ca3af", fontWeight: 500, marginBottom: "2px" }}>Office Address</div>
                    <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: "14px", color: "#1a1a2e", lineHeight: "1.4" }}>
                      229TH, 1ST FLOOR, 6TH BLOCK, <br />MOGAPPAIR, CHENNAI 600037
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info tiles */}
            <div
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "28px",
                border: "1px solid rgba(169,13,200,0.08)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "rgba(253,181,21,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={16} color="#FDB515" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: "14px", color: "#1a1a2e", marginBottom: "4px" }}>
                      Business Hours
                    </div>
                    <div style={{ fontSize: "14px", color: "#6b7280", lineHeight: 1.6 }}>
                      Monday – Saturday<br />
                      10:00 AM – 8:00 PM<br />
                      <span style={{ color: "#EF4444", fontSize: "13px" }}>Sunday: Closed</span>
                    </div>
                  </div>
                </div>
                <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: "16px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "rgba(169,13,200,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <CheckCircle size={16} color="#A90DC8" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: "14px", color: "#1a1a2e", marginBottom: "4px" }}>
                      GST Registration
                    </div>
                    <div style={{ fontSize: "13px", color: "#6b7280", fontFamily: "monospace", letterSpacing: "1px" }}>
                      33GAGPR3616R1Z2
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                border: "2px solid rgba(169,13,200,0.1)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              }}
            >
              <iframe
                src="https://maps.google.com/maps?q=229TH,+1ST+FLOOR,+6TH+BLOCK,+MOGAPPAIR+CHENNAI+600037&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elite Right Path Tax Consultancy Location"
              />
            </div>
          </div>
          </Animated>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .contact-form-card { padding: 24px 20px !important; }
          .contact-info-card { padding: 0 !important; }
        }
      `}</style>
    </>
  );
}
