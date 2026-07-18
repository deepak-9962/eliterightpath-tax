"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, MapPin, Clock, Mail, CheckCircle } from "lucide-react";

const serviceLinks = [
  "Income Tax Services",
  "GST Services",
  "Business Registration",
  "Accounting & Bookkeeping",
  "Compliance & Legal",
  "Audit Support",
  "Financial Advisory",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0f0018 0%, #1a0026 50%, #0d001a 100%)",
        color: "white",
        paddingTop: "64px",
        paddingBottom: "0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "48px",
            paddingBottom: "48px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "2px solid rgba(169,13,200,0.4)",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/logo.jpeg"
                  alt="Elite Right Path Tax Consultancy"
                  width={52}
                  height={52}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div>
                <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "16px", color: "#A90DC8" }}>
                  Elite Right Path
                </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>
                  Tax Consultancy
                </div>
              </div>
            </div>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "20px" }}>
              Guiding you on the right path to financial compliance and growth. Expert tax, GST & accounting services across Tamil Nadu.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(169,13,200,0.15)",
                border: "1px solid rgba(169,13,200,0.3)",
                borderRadius: "8px",
                padding: "8px 14px",
              }}
            >
              <CheckCircle size={14} color="#FDB515" />
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>
                GSTIN: 33GAGPR3616R1Z2
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                color: "white",
                marginBottom: "20px",
                position: "relative",
                paddingBottom: "12px",
              }}
            >
              Quick Links
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "32px",
                  height: "3px",
                  background: "#A90DC8",
                  borderRadius: "2px",
                }}
              />
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FDB515")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  >
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#A90DC8", flexShrink: 0 }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                color: "white",
                marginBottom: "20px",
                position: "relative",
                paddingBottom: "12px",
              }}
            >
              Our Services
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "32px",
                  height: "3px",
                  background: "#FDB515",
                  borderRadius: "2px",
                }}
              />
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FDB515")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  >
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FDB515", flexShrink: 0 }} />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                color: "white",
                marginBottom: "20px",
                position: "relative",
                paddingBottom: "12px",
              }}
            >
              Contact Us
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "32px",
                  height: "3px",
                  background: "#A90DC8",
                  borderRadius: "2px",
                }}
              />
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <a
                href="tel:+919360044152"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FDB515")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(169,13,200,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={14} color="#A90DC8" />
                </div>
                +91 93600 44152
              </a>
              <a
                href="https://wa.me/919360044152?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20tax%20services"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(37,211,102,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MessageCircle size={14} color="#25D366" />
                </div>
                WhatsApp Chat
              </a>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "14px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(169,13,200,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <MapPin size={14} color="#A90DC8" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: "2px" }}>Office Address</div>
                  <div style={{ lineHeight: "1.4" }}>
                    229TH, 1ST FLOOR, 6TH BLOCK, <br />MOGAPPAIR CHENNAI 600037
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "14px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(253,181,21,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <Clock size={14} color="#FDB515" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: "2px" }}>Business Hours</div>
                  <div>Mon – Sat: 10:00 AM – 8:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            padding: "20px 0",
          }}
        >
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} Elite Right Path Tax Consultancy. All rights reserved.
          </p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
            Proprietor: <span style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>Mr. Raj Paudel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
