"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock, Mail, CheckCircle, Send, ArrowRight } from "lucide-react";
import Animated from "@/components/Animated";

const CONTACT_EMAIL = "info@eliterightpath.com";

const services = [
  "Income Tax Return (ITR) Filing",
  "GST Registration & Filing",
  "Business Registration",
  "Book Keeping",
  "Accounts Maintenance",
  "Tax Notice Handling",
  "Audit Support",
  "Financial Advisory",
  "Other / Not Sure",
];

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

interface PreparedInfo {
  gmailUrl: string;
  mailtoUrl: string;
  service: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isOpening, setIsOpening] = useState(false);
  const [preparedInfo, setPreparedInfo] = useState<PreparedInfo | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (formData.phone.trim().replace(/[^0-9+]/g, "").length < 7) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.service.trim()) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsOpening(true);

    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedService = formData.service.trim();
    const trimmedMessage = formData.message.trim();

    const subject = `New Website Enquiry - ${trimmedName} - ${trimmedService}`;

    const body = [
      "Hello Elite Right Path,",
      "",
      "A new enquiry was submitted through the website.",
      "",
      "--------------------------------",
      "CLIENT DETAILS",
      "--------------------------------",
      "",
      `Name: ${trimmedName}`,
      `Phone: ${trimmedPhone}`,
      `Email: ${trimmedEmail || "Not provided"}`,
      `Service: ${trimmedService}`,
      "",
      "--------------------------------",
      "MESSAGE",
      "--------------------------------",
      "",
      trimmedMessage,
      "",
      "--------------------------------",
      "",
      "Submitted via:",
      "Elite Right Path Website",
    ].join("\n");

    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const mailtoUrl = `mailto:${encodeURIComponent(CONTACT_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setPreparedInfo({
      gmailUrl: gmailComposeUrl,
      mailtoUrl,
      service: trimmedService,
    });

    // Open Gmail compose in a new tab/window immediately within user gesture
    try {
      window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
    } catch {
      // Graceful fallback handled by preparedInfo actionable links
    }

    setTimeout(() => {
      setIsOpening(false);
    }, 800);
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

            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {/* Full Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px", fontFamily: "Sora, sans-serif" }}
                >
                  Full Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="form-input"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  style={{
                    borderColor: errors.name ? "#EF4444" : undefined,
                  }}
                />
                {errors.name && (
                  <span
                    id="contact-name-error"
                    role="alert"
                    style={{ display: "block", fontSize: "12px", color: "#DC2626", marginTop: "4px" }}
                  >
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Phone & Email Row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                <div>
                  <label
                    htmlFor="contact-phone"
                    style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px", fontFamily: "Sora, sans-serif" }}
                  >
                    Phone Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="form-input"
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                    style={{
                      borderColor: errors.phone ? "#EF4444" : undefined,
                    }}
                  />
                  {errors.phone && (
                    <span
                      id="contact-phone-error"
                      role="alert"
                      style={{ display: "block", fontSize: "12px", color: "#DC2626", marginTop: "4px" }}
                    >
                      {errors.phone}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px", fontFamily: "Sora, sans-serif" }}
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="form-input"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    style={{
                      borderColor: errors.email ? "#EF4444" : undefined,
                    }}
                  />
                  {errors.email && (
                    <span
                      id="contact-email-error"
                      role="alert"
                      style={{ display: "block", fontSize: "12px", color: "#DC2626", marginTop: "4px" }}
                    >
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Service Interested In */}
              <div>
                <label
                  htmlFor="contact-service"
                  style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px", fontFamily: "Sora, sans-serif" }}
                >
                  Service Interested In *
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-input"
                  style={{
                    cursor: "pointer",
                    borderColor: errors.service ? "#EF4444" : undefined,
                  }}
                  aria-required="true"
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? "contact-service-error" : undefined}
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && (
                  <span
                    id="contact-service-error"
                    role="alert"
                    style={{ display: "block", fontSize: "12px", color: "#DC2626", marginTop: "4px" }}
                  >
                    {errors.service}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px", fontFamily: "Sora, sans-serif" }}
                >
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Briefly describe what you need help with..."
                  className="form-input"
                  style={{
                    resize: "vertical",
                    minHeight: "100px",
                    borderColor: errors.message ? "#EF4444" : undefined,
                  }}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                />
                {errors.message && (
                  <span
                    id="contact-message-error"
                    role="alert"
                    style={{ display: "block", fontSize: "12px", color: "#DC2626", marginTop: "4px" }}
                  >
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isOpening}
                className="btn-orchid contact-submit-btn"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  opacity: isOpening ? 0.85 : 1,
                  cursor: isOpening ? "default" : "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {isOpening ? (
                  <>
                    <Send size={15} /> Opening Gmail...
                  </>
                ) : (
                  <>
                    <Send size={15} /> Send Message
                  </>
                )}
              </button>

              {/* Post-trigger Informational Feedback Banner */}
              {preparedInfo && (
                <div
                  role="status"
                  aria-live="polite"
                  style={{
                    padding: "16px 18px",
                    background: "rgba(169, 13, 200, 0.05)",
                    border: "1px solid rgba(169, 13, 200, 0.22)",
                    borderRadius: "14px",
                    marginTop: "4px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "#1a1a2e",
                      fontWeight: 700,
                      fontSize: "14.5px",
                      fontFamily: "Sora, sans-serif",
                      marginBottom: "6px",
                    }}
                  >
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "8px",
                        background: "rgba(169, 13, 200, 0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#A90DC8",
                        flexShrink: 0,
                      }}
                    >
                      <Mail size={15} />
                    </div>
                    <span>Your message has been prepared in Gmail</span>
                  </div>
                  <p style={{ fontSize: "13.5px", color: "#4b5563", margin: "0 0 10px 0", lineHeight: 1.5 }}>
                    A new Gmail compose window has been opened with your enquiry pre-filled to <strong>{CONTACT_EMAIL}</strong>. Please review and click <strong>Send</strong> in Gmail to complete your message.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "13px",
                      paddingTop: "8px",
                      borderTop: "1px solid rgba(169, 13, 200, 0.1)",
                    }}
                  >
                    <a
                      href={preparedInfo.gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#A90DC8",
                        fontWeight: 700,
                        textDecoration: "underline",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      Open Gmail window again &rarr;
                    </a>
                    <span style={{ color: "#d1d5db" }}>•</span>
                    <a
                      href={preparedInfo.mailtoUrl}
                      style={{
                        color: "#4b5563",
                        textDecoration: "underline",
                      }}
                    >
                      Use default mail client (mailto)
                    </a>
                  </div>
                </div>
              )}
            </form>
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
                  <a
                  href="https://www.google.com/maps?q=13.082695,80.174067"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", gap: "14px", alignItems: "flex-start", textDecoration: "none" }}
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
                </a>
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
                src="https://maps.google.com/maps?q=13.082695,80.174067&hl=en&z=17&output=embed"
                width="100%"
                height="240"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elite Right Path Tax Consultancy Location"
              />
              <div
                style={{
                  padding: "10px 16px",
                  background: "#FAF7FF",
                  borderTop: "1px solid rgba(169,13,200,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: "12px", color: "#6b7280", fontWeight: 500 }}>
                  📍 Mogappair, Chennai
                </span>
                <a
                  href="https://www.google.com/maps?q=13.082695,80.174067"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#A90DC8",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Open in Google Maps →
                </a>
              </div>
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
