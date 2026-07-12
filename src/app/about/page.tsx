"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, MessageCircle, Target, Eye, Award } from "lucide-react";
import Animated from "@/components/Animated";

const pillars = [
  {
    icon: Target,
    title: "Precision",
    desc: "Every return, every filing done with meticulous accuracy. We leave no room for errors that could cost you time, money, or penalties.",
    color: "#A90DC8",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "No hidden fees, no surprises. We communicate clearly about what we're doing, how much it costs, and why it matters to your finances.",
    color: "#FDB515",
  },
  {
    icon: Award,
    title: "Professionalism",
    desc: "From our first conversation to the final filing, we uphold the highest standards of integrity, confidentiality, and service quality.",
    color: "#A90DC8",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
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
            background: "radial-gradient(circle, rgba(169,13,200,0.2) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(253,181,21,0.1) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto", padding: "0 24px" }}>
          <Animated variant="scaleIn">
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
              About Us
            </span>
          </div>
          </Animated>
          <Animated variant="fadeUp" delay={150}>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "clamp(32px, 5vw, 52px)", color: "white", lineHeight: 1.15 }}>
            Meet the Expert Behind{" "}
            <span style={{ background: "linear-gradient(135deg, #A90DC8, #FDB515)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Elite Right Path
            </span>
          </h1>
          </Animated>
        </div>
      </section>

      {/* Proprietor Bio Section */}
      <section style={{ background: "#F5FEFD", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "64px",
              alignItems: "center",
            }}
            className="bio-grid"
          >
            {/* Photo col wrapped */}
            <Animated variant="fadeLeft">
            <div style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: "28px",
                  overflow: "hidden",
                  height: "clamp(320px, 45vw, 460px)",
                  border: "3px solid rgba(169,13,200,0.2)",
                  boxShadow: "0 30px 80px rgba(169,13,200,0.2)",
                  position: "relative",
                }}
              >
                <Image
                  src="/client.png"
                  alt="Mr. Raj Paudel S. — Proprietor, Elite Right Path Tax Consultancy"
                  fill
                  style={{ objectFit: "contain", backgroundColor: "#ffffff" }}
                />
                {/* Gradient overlay at bottom */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "100px",
                    background: "linear-gradient(transparent, rgba(169,13,200,0.3))",
                  }}
                />
              </div>
              {/* Name tag */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  left: "20px",
                  right: "20px",
                  background: "linear-gradient(135deg, #A90DC8, #8A0AA3)",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  boxShadow: "0 12px 40px rgba(169,13,200,0.4)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "18px", color: "white" }}>
                  Mr. Raj Paudel S.
                </div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", marginTop: "4px" }}>
                  Proprietor & Tax Consultant
                </div>
              </div>
            </div>
            </Animated>

            {/* Bio content */}
            <Animated variant="fadeRight" delay={100}>
            <div>
              <div className="section-tag" style={{ marginBottom: "20px" }}>Our Story</div>
              <h2
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(26px, 3.5vw, 38px)",
                  color: "#1a1a2e",
                  lineHeight: 1.2,
                  marginBottom: "24px",
                }}
              >
                Dedicated to Making{" "}
                <span style={{ color: "#A90DC8" }}>Compliance Simple</span>{" "}
                for Every Client
              </h2>

              <p style={{ fontSize: "16px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
                Elite Right Path was founded by Mr. Raj Paudel S. with a clear mission: to demystify complex tax regulations and provide seamless financial solutions for businesses and individuals alike. Based in Tamil Nadu, we bridge the gap between regulatory mandates and business success.
              </p>
              
              {/* Credentials list */}
              <div
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "20px 24px",
                  border: "1px solid rgba(169,13,200,0.1)",
                  marginBottom: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {[
                  { label: "GSTIN", value: "33GAGPR3616R1Z2" },
                  { label: "Phone & WhatsApp", value: "+91 93600 44152" },
                  { label: "Office Location", value: "Mogappair, Chennai" },
                  { label: "Service Area", value: "Tamil Nadu & Pan India (Online)" },
                  { label: "Business Hours", value: "Mon – Sat: 10:00 AM – 8:00 PM" },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "14px" }} className="credentials-row">
                    <span style={{ color: "#6b7280", fontWeight: 500 }}>{label}</span>
                    <span style={{ color: "#1a1a2e", fontWeight: 700, fontFamily: "Sora, sans-serif", textAlign: "right" }}>{value}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-orchid" style={{ textDecoration: "none" }}>
                  Get in Touch <ArrowRight size={16} />
                </Link>
                <a href="tel:+919360044152" className="btn-outline" style={{ textDecoration: "none" }}>
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </div>
            </Animated>
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) {
            .bio-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* Three Pillars */}
      <section style={{ background: "white", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <Animated variant="fadeUp">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div className="section-tag" style={{ margin: "0 auto 16px" }}>Our Philosophy</div>
            <h2
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(28px, 4vw, 40px)",
                color: "#1a1a2e",
              }}
            >
              Built on Three Core Pillars
            </h2>
          </div>
          </Animated>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "28px" }}>
            {pillars.map(({ icon: Icon, title, desc, color }, i) => (
              <Animated key={title} variant="fadeUp" delay={i * 120}>
              <div
                key={title}
                style={{
                  background: "linear-gradient(135deg, rgba(169,13,200,0.03), rgba(253,181,21,0.03))",
                  borderRadius: "24px",
                  padding: "36px 28px",
                  border: "1px solid rgba(169,13,200,0.1)",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(169,13,200,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "20px",
                    background: `linear-gradient(135deg, ${color}, ${color === "#A90DC8" ? "#8A0AA3" : "#E09A00"})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    boxShadow: `0 8px 24px ${color}40`,
                  }}
                >
                  <Icon size={28} color="white" />
                </div>
                <h3
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 800,
                    fontSize: "22px",
                    color: "#1a1a2e",
                    marginBottom: "12px",
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: "15px", color: "#6b7280", lineHeight: 1.7 }}>{desc}</p>
              </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: "linear-gradient(135deg, #f8f0ff 0%, #DFF2FE 100%)", padding: "64px 0", textAlign: "center" }}>
        <Animated variant="scaleIn">
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "clamp(26px, 3.5vw, 38px)", color: "#1a1a2e", marginBottom: "16px" }}>
            Ready to Work with a Trusted Consultant?
          </h2>
          <p style={{ fontSize: "16px", color: "#6b7280", lineHeight: 1.7, marginBottom: "32px" }}>
            Whether you need to file your ITR, register your business, or sort out your GST — we're here to guide you every step of the way.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-orchid" style={{ textDecoration: "none" }}>
              Book a Free Consultation <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/919360044152?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20tax%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ textDecoration: "none" }}
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>
        </div>
        </Animated>
      </section>
    </>
  );
}
