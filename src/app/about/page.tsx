"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, MapPin, Clock, Shield } from "lucide-react";
import Animated from "@/components/Animated";

const teamMembers = [
  {
    name: "Arul N",
    designation: "General Manager",
    desc: "Coordinates day-to-day operations and ensures client work moves efficiently across the firm.",
    photo: "/ARUL N.jpg",
  },
  {
    name: "Venkatesh S",
    designation: "Finance Manager",
    desc: "Manages bookkeeping, accounts, and financial reporting requirements for clients.",
    photo: "/VENKATESH S.jpeg",
  },
  {
    name: "Dharshini P",
    designation: "Compliance Manager",
    desc: "Oversees statutory compliance work, deadline tracking, and regulatory filing requirements.",
    photo: "/DHARSHINI P.jpg",
  },
  {
    name: "Muskan",
    designation: "Sales Manager",
    desc: "Handles client onboarding, communication, and ensures queries are routed and answered promptly.",
    photo: "/MUSKAN.jpeg",
  },
];

const processSteps = [
  { num: "01", title: "Understand", desc: "We listen to the client's situation before recommending any course of action." },
  { num: "02", title: "Review", desc: "We review documents, filings, and compliance history relevant to the requirement." },
  { num: "03", title: "Prepare", desc: "Tax, finance, or compliance work is prepared carefully with attention to accuracy." },
  { num: "04", title: "Coordinate", desc: "Internal checks are completed and the work is reviewed before submission." },
  { num: "05", title: "Complete", desc: "Filing or deliverable is completed and the client is kept informed throughout." },
];

const firmInfo = [
  { icon: Shield, label: "GSTIN", value: "33GAGPR3616R1Z2" },
  { icon: Phone, label: "Phone & WhatsApp", value: "+91 93600 44152" },
  { icon: MapPin, label: "Office", value: "Mogappair, Chennai" },
  { icon: MapPin, label: "Service Area", value: "Tamil Nadu & Pan India (Online)" },
  { icon: Clock, label: "Business Hours", value: "Mon – Sat: 10:00 AM – 9:00 PM" },
];

const founderPrinciples = [
  { num: "01", title: "Precision", desc: "Careful attention to every filing, document, and compliance requirement." },
  { num: "02", title: "Transparency", desc: "Clear communication about what is being done and why, throughout the process." },
  { num: "03", title: "Personal Guidance", desc: "Direct support from Raj whenever a client needs clarity or advice." },
];

const philosophyPillars = [
  {
    num: "01",
    title: "Precision",
    desc: "Every filing, every document, every compliance requirement is handled with careful attention. Accuracy is not optional — it protects the client.",
  },
  {
    num: "02",
    title: "Transparency",
    desc: "Clients should understand what we are doing and why. We communicate clearly about work, timelines, and costs without unnecessary complexity.",
  },
  {
    num: "03",
    title: "Professionalism",
    desc: "Consistent standards of integrity, confidentiality, and service quality across every engagement, regardless of the size of the client.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. HERO */}
      <section
        style={{
          background: "linear-gradient(160deg, #0B0614 0%, #160B27 60%, #1A0B30 100%)",
          paddingTop: "140px",
          paddingBottom: "90px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
        className="hero-financial-grid"
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto", padding: "0 24px" }}>
          <Animated variant="fadeUp">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(124, 58, 237, 0.16)",
                border: "1px solid rgba(168, 85, 247, 0.3)",
                padding: "5px 16px",
                borderRadius: "50px",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  color: "#C084FC",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                About Us
              </span>
            </div>
          </Animated>
          <Animated variant="fadeUp" delay={120}>
            <h1
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(30px, 5vw, 52px)",
                color: "#FFFFFF",
                lineHeight: 1.15,
                marginBottom: "20px",
                letterSpacing: "-0.5px",
              }}
            >
              Meet the People Behind{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED 0%, #D946EF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Elite Right Path
              </span>
            </h1>
          </Animated>
          <Animated variant="fadeUp" delay={200}>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.75,
                maxWidth: "520px",
                margin: "0 auto",
              }}
            >
              A tax consultancy built around clear advice, careful compliance, and personal attention to every client.
            </p>
          </Animated>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section style={{ background: "#FAF7FF", padding: "88px 0 96px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="about-story-grid">
            <Animated variant="fadeLeft">
              <div>
                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(124, 58, 237, 0.12)",
                    borderRadius: "22px",
                    padding: "8px",
                    boxShadow: "0 16px 48px rgba(11, 6, 20, 0.07)",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "16px",
                      overflow: "hidden",
                      aspectRatio: "3 / 4",
                      position: "relative",
                      background: "#160B27",
                    }}
                  >
                    <Image
                      src="/raj-paudel.png"
                      alt="Raj Paudel — Proprietor & Tax Consultant, Elite Right Path"
                      fill
                      style={{ objectFit: "cover", objectPosition: "top center" }}
                      sizes="(max-width: 768px) 100vw, 440px"
                      priority
                    />
                  </div>
                </div>
                <div style={{ marginTop: "14px", paddingLeft: "12px", borderLeft: "2px solid #A855F7" }}>
                  <p style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: "14px", color: "#111827", margin: 0 }}>
                    Raj Paudel
                  </p>
                  <p style={{ fontSize: "12.5px", color: "#64748B", margin: "2px 0 0" }}>
                    Proprietor &amp; Tax Consultant
                  </p>
                </div>
              </div>
            </Animated>
            <Animated variant="fadeUp" delay={80}>
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: "#EDE9FE",
                    color: "#7C3AED",
                    padding: "5px 14px",
                    borderRadius: "50px",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    fontFamily: "Sora, sans-serif",
                    marginBottom: "20px",
                  }}
                >
                  Our Story
                </div>
                <h2
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(24px, 3.2vw, 36px)",
                    color: "#111827",
                    lineHeight: 1.2,
                    marginBottom: "22px",
                  }}
                >
                  Dedicated to Making <span style={{ color: "#7C3AED" }}>Compliance Simple</span> for Every Client
                </h2>
                <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: 1.8, marginBottom: "16px" }}>
                  Elite Right Path was started with a straightforward purpose: to give businesses and individuals a place where tax and compliance work is handled carefully, explained clearly, and completed on time.
                </p>
                <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: 1.8, marginBottom: "28px" }}>
                  Tax and GST regulations can be difficult to navigate. Clients often feel overwhelmed by filing deadlines, notices, and documentation requirements. Elite Right Path exists to take that pressure away — giving clients direct access to a consultant who understands their situation.
                </p>
                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(124, 58, 237, 0.1)",
                    borderRadius: "16px",
                    padding: "20px 22px",
                    marginBottom: "28px",
                  }}
                >
                  {firmInfo.map(({ icon: Icon, label, value }, i) => (
                    <div
                      key={label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        padding: "11px 0",
                        borderBottom: i < firmInfo.length - 1 ? "1px solid rgba(124, 58, 237, 0.06)" : "none",
                      }}
                    >
                      <Icon size={16} color="#A855F7" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: "13px", color: "#64748B", minWidth: "140px" }}>{label}</span>
                      <span style={{ fontSize: "13px", color: "#111827", fontWeight: 600, fontFamily: "Sora, sans-serif" }}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn-orchid" style={{ textDecoration: "none" }}>
                    Get in Touch <ArrowRight size={15} />
                  </Link>
                  <a
                    href="tel:+919360044152"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "11px 22px",
                      borderRadius: "50px",
                      border: "1.5px solid rgba(124, 58, 237, 0.28)",
                      color: "#7C3AED",
                      fontWeight: 700,
                      fontSize: "13.5px",
                      textDecoration: "none",
                      fontFamily: "Sora, sans-serif",
                    }}
                  >
                    <Phone size={14} /> Call Now
                  </a>
                </div>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* 3. MEET RAJ PAUDEL */}
      <section
        id="founder"
        style={{
          background: "#FFFFFF",
          padding: "88px 0 96px",
          borderTop: "1px solid rgba(124, 58, 237, 0.07)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <Animated variant="fadeUp">
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
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
                The Proprietor
              </div>
              <h2
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(24px, 3.2vw, 38px)",
                  color: "#111827",
                  lineHeight: 1.18,
                }}
              >
                Meet{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #7C3AED 0%, #D946EF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Raj Paudel
                </span>
              </h2>
            </div>
          </Animated>
          <div className="founder-detail-grid">
            <Animated variant="fadeUp" delay={60}>
              <div>
                <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: 1.8, marginBottom: "16px" }}>
                  Raj Paudel is the proprietor and tax consultant at Elite Right Path. He is responsible for overseeing client filings, advising on tax and GST matters, and ensuring that each engagement is handled with accuracy and care.
                </p>
                <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: 1.8, marginBottom: "32px" }}>
                  Raj believes tax compliance should be explained clearly rather than treated as something complicated and inaccessible. Clients work directly with him — there is no queue, no handoff, and no delay in getting a straight answer.
                </p>
                <div style={{ marginBottom: "32px" }}>
                  {founderPrinciples.map((p, i) => (
                    <div key={p.num}>
                      <div style={{ display: "flex", gap: "18px", alignItems: "flex-start", padding: "16px 0" }}>
                        <span
                          style={{
                            fontFamily: "Sora, sans-serif",
                            fontWeight: 800,
                            fontSize: "12px",
                            color: "#A855F7",
                            opacity: 0.7,
                            flexShrink: 0,
                            paddingTop: "2px",
                            minWidth: "20px",
                          }}
                        >
                          {p.num}
                        </span>
                        <div>
                          <p style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: "14.5px", color: "#111827", margin: "0 0 4px" }}>
                            {p.title}
                          </p>
                          <p style={{ fontSize: "13.5px", color: "#64748B", lineHeight: 1.65, margin: 0 }}>
                            {p.desc}
                          </p>
                        </div>
                      </div>
                      {i < founderPrinciples.length - 1 && (
                        <div style={{ height: "1px", background: "rgba(124, 58, 237, 0.07)" }} />
                      )}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-orchid" style={{ textDecoration: "none" }}>
                  Book a Consultation <ArrowRight size={15} />
                </Link>
              </div>
            </Animated>
            <Animated variant="fadeLeft" delay={120}>
              <div>
                <div
                  style={{
                    background: "#F8F5FF",
                    border: "1px solid rgba(124, 58, 237, 0.12)",
                    borderRadius: "22px",
                    padding: "8px",
                    boxShadow: "0 20px 56px rgba(11, 6, 20, 0.06)",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "16px",
                      overflow: "hidden",
                      aspectRatio: "3 / 4",
                      position: "relative",
                      background: "#160B27",
                    }}
                  >
                    <Image
                      src="/raj-paudel.png"
                      alt="Raj Paudel — Proprietor & Tax Consultant, Elite Right Path"
                      fill
                      style={{ objectFit: "cover", objectPosition: "top center" }}
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                  </div>
                </div>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* 4. PHILOSOPHY */}
      <section
        style={{
          background: "#FAF7FF",
          padding: "88px 0 96px",
          borderTop: "1px solid rgba(124, 58, 237, 0.07)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <Animated variant="fadeUp">
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <div
                style={{
                  display: "inline-flex",
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
                Our Philosophy
              </div>
              <h2
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(24px, 3.2vw, 38px)",
                  color: "#111827",
                  lineHeight: 1.18,
                  marginBottom: "14px",
                }}
              >
                Built on Three Core Principles
              </h2>
              <p style={{ fontSize: "15px", color: "#64748B", maxWidth: "440px", margin: "0 auto", lineHeight: 1.7 }}>
                The principles that shape how we approach every client engagement.
              </p>
            </div>
          </Animated>
          <div className="philosophy-grid">
            {philosophyPillars.map((p, i) => (
              <Animated key={p.num} variant="fadeUp" delay={i * 100}>
                <div
                  style={{
                    padding: "36px 32px",
                    borderRight: i < philosophyPillars.length - 1 ? "1px solid rgba(124, 58, 237, 0.09)" : "none",
                    position: "relative",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: "24px",
                      right: "28px",
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 900,
                      fontSize: "72px",
                      color: "#7C3AED",
                      opacity: 0.04,
                      lineHeight: 1,
                      userSelect: "none",
                    }}
                  >
                    {p.num}
                  </div>
                  <span
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 800,
                      fontSize: "11px",
                      color: "#A855F7",
                      letterSpacing: "1px",
                      opacity: 0.8,
                      display: "block",
                      marginBottom: "12px",
                    }}
                  >
                    {p.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 800,
                      fontSize: "22px",
                      color: "#111827",
                      marginBottom: "14px",
                      lineHeight: 1.2,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.75, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MEET THE TEAM */}
      <section
        id="team"
        style={{
          background: "#FFFFFF",
          padding: "88px 0 96px",
          borderTop: "1px solid rgba(124, 58, 237, 0.07)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <Animated variant="fadeUp">
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div
                style={{
                  display: "inline-flex",
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
                Meet the Team
              </div>
              <h2
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(24px, 3.2vw, 38px)",
                  color: "#111827",
                  lineHeight: 1.18,
                  marginBottom: "14px",
                }}
              >
                The People Behind the Work
              </h2>
              <p style={{ fontSize: "15px", color: "#64748B", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
                Good client service is a team effort. Each person at Elite Right Path plays a different role in keeping tax, accounts, compliance, and communication moving smoothly.
              </p>
            </div>
          </Animated>

          {/* Featured Profile: Raj Paudel */}
          <Animated variant="fadeUp" delay={60}>
            <div
              className="raj-featured-card"
              style={{
                background: "#F8F5FF",
                border: "1px solid rgba(124, 58, 237, 0.12)",
                borderRadius: "24px",
                padding: "32px",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  aspectRatio: "3 / 4",
                  position: "relative",
                  background: "#160B27",
                }}
              >
                <Image
                  src="/raj-paudel.png"
                  alt="Raj Paudel — Proprietor & Tax Consultant"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  sizes="(max-width: 768px) 100vw, 340px"
                />
              </div>
              <div>
                <div
                  style={{
                    width: "36px",
                    height: "3px",
                    background: "linear-gradient(90deg, #7C3AED, #D946EF)",
                    borderRadius: "2px",
                    marginBottom: "20px",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(22px, 2.8vw, 30px)",
                    color: "#111827",
                    marginBottom: "6px",
                    lineHeight: 1.2,
                  }}
                >
                  Raj Paudel
                </h3>
                <p
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 600,
                    fontSize: "12px",
                    color: "#7C3AED",
                    textTransform: "uppercase",
                    letterSpacing: "0.8px",
                    marginBottom: "20px",
                  }}
                >
                  Proprietor &amp; Tax Consultant
                </p>
                <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: 1.8, marginBottom: "16px" }}>
                  Raj oversees all client filings and tax advisory work at Elite Right Path. He is the primary point of contact for tax, GST, and compliance matters.
                </p>
                <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: 1.8, marginBottom: "24px" }}>
                  His focus is on making compliance straightforward — explaining what is required, handling it carefully, and keeping clients informed throughout the process.
                </p>
                <Link href="/contact" className="btn-orchid" style={{ textDecoration: "none" }}>
                  Work with Raj <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </Animated>

          {/* Supporting 4 Team Members */}
          <div className="team-grid-4">
            {teamMembers.map((member, idx) => (
              <Animated key={member.name} variant="fadeUp" delay={80 + idx * 80}>
                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(124, 58, 237, 0.1)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 2px 12px rgba(11, 6, 20, 0.03)",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124, 58, 237, 0.25)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 28px rgba(124, 58, 237, 0.07)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124, 58, 237, 0.1)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(11, 6, 20, 0.03)";
                  }}
                >
                  <div style={{ aspectRatio: "1 / 1.1", position: "relative", background: "#EDE9FE" }}>
                    <Image
                      src={member.photo}
                      alt={`${member.name} — ${member.designation}, Elite Right Path`}
                      fill
                      style={{ objectFit: "cover", objectPosition: "top center" }}
                      sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 280px"
                    />
                  </div>
                  <div style={{ padding: "18px 18px 22px" }}>
                    <h3
                      style={{
                        fontFamily: "Sora, sans-serif",
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#111827",
                        margin: "0 0 4px",
                      }}
                    >
                      {member.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "#7C3AED",
                        textTransform: "uppercase",
                        letterSpacing: "0.6px",
                        margin: "0 0 10px",
                        fontFamily: "Sora, sans-serif",
                      }}
                    >
                      {member.designation}
                    </p>
                    <p style={{ fontSize: "12.5px", color: "#64748B", lineHeight: 1.65, margin: 0 }}>
                      {member.desc}
                    </p>
                  </div>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW WE WORK */}
      <section
        style={{
          background: "#FAF7FF",
          padding: "88px 0 96px",
          borderTop: "1px solid rgba(124, 58, 237, 0.07)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <Animated variant="fadeUp">
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div
                style={{
                  display: "inline-flex",
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
                Our Process
              </div>
              <h2
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(24px, 3.2vw, 38px)",
                  color: "#111827",
                  lineHeight: 1.18,
                  marginBottom: "14px",
                }}
              >
                How We Work Together
              </h2>
              <p style={{ fontSize: "15px", color: "#64748B", maxWidth: "440px", margin: "0 auto", lineHeight: 1.7 }}>
                A consistent, transparent process for every client engagement.
              </p>
            </div>
          </Animated>
          <div className="process-row">
            <div aria-hidden="true" className="process-connector" />
            {processSteps.map((step, i) => (
              <Animated key={step.num} variant="fadeUp" delay={i * 90}>
                <div style={{ textAlign: "center", padding: "0 12px", position: "relative", zIndex: 1 }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      background: "#FFFFFF",
                      border: "1.5px solid rgba(124, 58, 237, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                      boxShadow: "0 4px 14px rgba(124, 58, 237, 0.07)",
                    }}
                  >
                    <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "13px", color: "#7C3AED" }}>
                      {step.num}
                    </span>
                  </div>
                  <h4
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#111827",
                      marginBottom: "8px",
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h4>
                  <p style={{ fontSize: "12.5px", color: "#64748B", lineHeight: 1.65, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #0B0614 0%, #160B27 60%, #1F0D36 100%)",
          padding: "88px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(168, 85, 247, 0.15)",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "300px",
            background: "radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "620px", margin: "0 auto" }}>
          <Animated variant="fadeUp">
            <h2
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(26px, 4vw, 42px)",
                color: "#FFFFFF",
                lineHeight: 1.2,
                marginBottom: "16px",
              }}
            >
              {"Let's Put Your Finances on the "}
              <span
                style={{
                  background: "linear-gradient(135deg, #A855F7 0%, #D946EF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Right Path
              </span>
            </h2>
            <p
              style={{
                fontSize: "15.5px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.75,
                marginBottom: "36px",
              }}
            >
              Whether you need to file an ITR, register a business, sort out GST, or understand your compliance obligations — speak directly with the team at Elite Right Path.
            </p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="btn-fintech-primary"
                style={{
                  padding: "14px 30px",
                  fontSize: "15px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Book a Consultation <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/919360044152?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20tax%20services"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  borderRadius: "50px",
                  background: "#25D366",
                  color: "white",
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(37, 211, 102, 0.3)",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                }}
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </Animated>
        </div>
      </section>
    </>
  );
}
