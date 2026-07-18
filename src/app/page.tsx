"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone, MessageCircle, CheckCircle, Star, ArrowRight,
  FileText, Receipt, Building2, BookOpen, Scale, BarChart2,
  TrendingUp, ShieldCheck, Clock, Users, Zap, Award, ChevronRight, Briefcase
} from "lucide-react";
import Animated from "@/components/Animated";
import CountUp from "@/components/CountUp";
import HeroIconCluster from "@/components/HeroIconCluster";

const serviceCategories = [
  { icon: FileText,   title: "Income Tax Services",      desc: "ITR filing for individuals, businesses, TDS, advance tax planning, and notice handling.",             anchor: "income-tax",          color: "#A90DC8" },
  { icon: Receipt,    title: "GST Services",              desc: "GST registration, monthly/quarterly filing, reconciliation, and notice resolution.",                    anchor: "gst",                 color: "#8A0AA3" },
  { icon: Building2,  title: "Business Registration",     desc: "Proprietorship, LLP, company formation, MSME, Shop Act and more.",                                     anchor: "business-registration",color: "#A90DC8" },
  { icon: BookOpen,   title: "Accounting & Bookkeeping",  desc: "Monthly bookkeeping, payroll processing, financial statements and MIS reports.",                        anchor: "accounting",          color: "#FDB515" },
  { icon: Scale,      title: "Compliance & Legal",        desc: "ROC filings, labour law compliance, FEMA, and legal advisory services.",                                 anchor: "compliance",          color: "#A90DC8" },
  { icon: BarChart2,  title: "Audit Support",             desc: "Statutory audit, tax audit, internal audit and compliance support.",                                     anchor: "audit",               color: "#8A0AA3" },
  { icon: TrendingUp, title: "Financial Advisory",        desc: "Tax planning, investment advisory, cash flow management and business finance.",                          anchor: "financial-advisory",  color: "#FDB515" },
];

const whyChooseUs = [
  { icon: Award,      title: "Expert Guidance",        desc: "Led by Mr. Raj Paudel, a seasoned tax professional with deep expertise in Indian tax law.",       color: "#A90DC8" },
  { icon: Clock,      title: "Timely Filing",          desc: "We track all deadlines proactively — no last-minute rush, no penalties for our clients.",            color: "#FDB515" },
  { icon: Users,      title: "Personalized Service",   desc: "Direct access to your consultant — not a ticket queue. Your concerns get individual attention.",      color: "#A90DC8" },
  { icon: ShieldCheck,title: "Full Transparency",      desc: "Clear pricing, no hidden charges. You always know what we're doing and why.",                         color: "#FDB515" },
  { icon: Zap,        title: "Full-Spectrum Coverage", desc: "From ITR to GST to company registration — one firm handles all your compliance needs.",              color: "#A90DC8" },
  { icon: Star,       title: "Proven Track Record",    desc: "500+ returns filed, 7+ years of consistent delivery, and a growing family of satisfied clients across Tamil Nadu.", color: "#FDB515" },
];

const trustStats = [
  { value: 500, suffix: "+", label: "Returns Filed",       icon: FileText },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: Star },
  { value: 7,   suffix: "",  label: "Service Categories",  icon: Briefcase },
  { isGst: true,             label: "GSTIN Registered Firm", icon: CheckCircle },
];

export default function HomePage() {
  return (
    <>
      {/* ─── PREMIUM FINTECH HERO ─── */}
      <section
        className="fintech-mesh-bg fintech-dotted-grid hero-section"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "120px",
          /* Extra bottom padding to give the wave room inside the section */
          paddingBottom: "100px",
          position: "relative",
          /* Allow wave SVG at the very bottom to bleed downward */
          overflow: "visible",
        }}
      >
        {/* Layered glowing mesh elements */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "10%",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(109, 40, 217, 0.28) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
          className="animate-spin-slow"
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "5%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.16) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
          className="animate-float-1"
        />
        <div
          style={{
            position: "absolute",
            top: "35%",
            left: "35%",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "60px",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
            width: "100%",
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline, Description, CTAs, Statistics */}
          <div>
            <Animated variant="fadeUp" delay={100}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(109, 40, 217, 0.15)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  padding: "6px 16px",
                  borderRadius: "50px",
                  marginBottom: "24px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#EC4899",
                    boxShadow: "0 0 8px #EC4899",
                  }}
                  className="animate-pulse"
                />
                <span
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: "11px",
                    color: "#A78BFA",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Tax Consultancy
                </span>
              </div>
            </Animated>

            <Animated variant="fadeUp" delay={200}>
              <h1
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(34px, 4.8vw, 56px)",
                  color: "white",
                  lineHeight: 1.1,
                  marginBottom: "20px",
                  letterSpacing: "-1px",
                }}
              >
                GST & Tax Solutions <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #6366F1 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Built for Modern Businesses
                </span>
              </h1>
            </Animated>

            <Animated variant="fadeUp" delay={300}>
              <p
                style={{
                  fontSize: "16px",
                  color: "rgba(255, 255, 255, 0.7)",
                  lineHeight: 1.8,
                  marginBottom: "36px",
                  maxWidth: "540px",
                }}
              >
                Expert income tax filing, GST registration, accounting, and business compliance across Tamil Nadu. Empowering startups and enterprises with high-end financial precision.
              </p>
            </Animated>

            {/* CTAs */}
            <Animated variant="fadeUp" delay={400}>
              <div
                className="hero-cta-row"
                style={{
                  display: "flex",
                  gap: "14px",
                  flexWrap: "wrap",
                  marginBottom: "40px",
                }}
              >
                <Link
                  href="/contact"
                  className="btn-fintech-primary"
                  style={{
                    padding: "14px 30px",
                    fontSize: "14.5px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  Get Free Consultation <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/919360044152?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20tax%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-fintech-secondary fintech-gradient-border"
                  style={{
                    padding: "14px 30px",
                    fontSize: "14.5px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <MessageCircle size={16} color="#25D366" /> WhatsApp Us
                </a>
              </div>
            </Animated>

            {/* Stats Glass Grid */}
            <Animated variant="fadeUp" delay={500}>
              <div
                className="hero-stats-grid"
                style={{
                  display: "grid",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                {[
                  { val: "⭐ 4.9 Rating", lbl: "Client Feedback" },
                  { val: "500+ Clients", lbl: "Businesses Served" },
                  { val: "1000+ Returns", lbl: "Tax Returns Filed" },
                  { val: "7+ Years", lbl: "Industry Experience" },
                  { val: "24-Hour", lbl: "Response Time" },
                ].map(({ val, lbl }) => (
                  <div
                    key={lbl}
                    className="glass-card-fintech fintech-gradient-border"
                    style={{
                      padding: "14px 10px",
                      borderRadius: "16px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "15px", color: "white" }}>
                      {val}
                    </div>
                    <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.45)", fontWeight: 500, marginTop: "4px" }}>
                      {lbl}
                    </div>
                  </div>
                ))}
              </div>
            </Animated>

            {/* Social proof inline chips */}
            <Animated variant="fadeUp" delay={560}>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  marginBottom: "28px",
                }}
              >
                {[
                  { icon: Users,      text: "500+ Businesses Served", color: "#FDB515" },
                  { icon: TrendingUp, text: "1000+ Returns Filed",    color: "#FDB515" },
                  { icon: ShieldCheck,text: "Trusted in Tamil Nadu",  color: "#A78BFA" },
                ].map(({ icon: Icon, text, color }) => (
                  <div
                    key={text}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "50px",
                      padding: "6px 14px",
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.8)",
                      fontWeight: 600,
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <Icon size={12} color={color} />
                    {text}
                  </div>
                ))}
              </div>
            </Animated>

            {/* Feature strip */}
            <Animated variant="fadeUp" delay={620}>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  flexWrap: "wrap",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  paddingTop: "24px",
                }}
              >
                {[
                  { text: "Personalized Service", icon: Users },
                  { text: "100% Transparent", icon: ShieldCheck },
                  { text: "Deadline First", icon: Clock },
                  { text: "GSTIN Registered", icon: CheckCircle },
                  { text: "Secure Documentation", icon: FileText },
                ].map(({ text, icon: Icon }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Icon size={14} color="#A78BFA" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.6)", fontWeight: 500 }}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </Animated>
          </div>

          {/* Right Column: Animated floating icon cluster */}
          <Animated variant="scaleIn" delay={300}>
            <div
              className="hero-right"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "480px",
              }}
            >
              <HeroIconCluster />
            </div>
          </Animated>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; text-align: center; }
            .hero-right { order: -1; height: auto !important; margin-bottom: 8px; }
            .hero-cta-row { justify-content: center; }
          }
          @media (max-width: 768px) {
            .hero-section { padding-top: 90px !important; padding-bottom: 80px !important; }
            .hero-right { min-height: 200px; }
            .hero-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .hero-cta-row { flex-direction: column; align-items: center; }
            .hero-cta-row > * { width: 100%; max-width: 300px; justify-content: center; text-align: center; }
          }
        `}</style>

        {/* ─── ASYMMETRIC WAVE DIVIDER — absolutely at hero bottom ─── */}
        {/*
          Two-layer approach:
          1) Glow blobs — direct children of the hero section (overflow:visible),
             so they can bleed across the section boundary into the services section.
          2) SVG wave container — self-contained, clips cleanly.
        */}

        {/* Primary bleeding glow — at the wave's deepest dip (~28% width) */}
        {/*
          negative bottom positions center of glow ABOVE the hero bottom edge
          so the blur spills naturally downward into the light services section.
        */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "28%",
            transform: "translateX(-50%)",
            bottom: "-60px",
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(217,70,239,0.28) 0%, rgba(236,72,153,0.10) 40%, transparent 70%)",
            filter: "blur(30px)",
            pointerEvents: "none",
            zIndex: 4,
          }}
        />

        {/* Secondary glow — near right-side secondary rise (~72% width) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "72%",
            transform: "translateX(-50%)",
            bottom: "-40px",
            width: "170px",
            height: "170px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.20) 0%, transparent 70%)",
            filter: "blur(25px)",
            pointerEvents: "none",
            zIndex: 4,
          }}
        />

        {/* SVG wave — the actual shape that creates the curved seam */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            lineHeight: 0,
            pointerEvents: "none",
            zIndex: 3,
          }}
        >
          {/*
            Asymmetric path:
              – Deep dip at ~32% (left-center) — glow pools here
              – Subtle rise at ~62% (right-center)
              – Shallow plateau near right edge
            preserveAspectRatio="none" = full-width stretch at every breakpoint.
            Responsive height set via .hero-wave-svg CSS class below.
          */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 90"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: "90px" }}
            className="hero-wave-svg"
          >
            <path
              d="M0,0
                 C120,82 280,18 460,56
                 C600,82 720,10 900,48
                 C1060,78 1200,22 1320,44
                 C1380,56 1420,40 1440,38
                 L1440,90 L0,90 Z"
              fill="#F5FEFD"
            />
          </svg>

          <style>{`
            /* Scale wave height down on smaller viewports */
            @media (max-width: 767px) {
              .hero-wave-svg { height: 50px !important; }
            }
            @media (min-width: 768px) and (max-width: 1023px) {
              .hero-wave-svg { height: 64px !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ─── WAVE DIVIDER is now inside the hero section above (absolutely positioned) ─── */}

      {/* ─── SERVICES OVERVIEW ─── */}
      <section
        style={{
          background: "#F5FEFD",
          padding: "60px 0 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/*
          Dot-grid texture — mirrors hero's fintech-dotted-grid pattern at very low
          opacity so it reads as subtle depth, not a competing pattern.
          z-index 0 keeps it behind cards (z-index auto / stacking-context default).
        */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(169,13,200,0.20) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 24px", position:"relative", zIndex:1 }}>
          <Animated variant="fadeUp">
            <div style={{ textAlign:"center", marginBottom:"52px" }}>
              <div className="section-tag" style={{ margin:"0 auto 16px" }}>Our Services</div>
              <h2 style={{ fontFamily:"Sora, sans-serif", fontWeight:800, fontSize:"clamp(28px, 4vw, 44px)", color:"#1a1a2e", marginBottom:"16px" }}>
                Everything Your Business{" "}
                <span style={{ color:"#A90DC8" }}>Needs to Stay Compliant</span>
              </h2>
              <p style={{ fontSize:"16px", color:"#6b7280", maxWidth:"520px", margin:"0 auto", lineHeight:1.7 }}>
                Seven comprehensive service categories under one roof.
              </p>
            </div>
          </Animated>

          {/*
            Grid: auto-fill with minmax(280px, 1fr).
            At 1280px content width with 24px gaps this gives 4 columns.
            With 8 cards (7 services + 1 CTA) we get a clean 4+4 layout on desktop,
            3+3+2 on tablet, 2+2+2+2 on small tablet, and 1-col on mobile.
            No dangling empty slot at any breakpoint.
          */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))", gap:"24px" }}>
            {serviceCategories.map(({ icon:Icon, title, desc, anchor, color }, i) => (
              <Animated key={title} variant="fadeUp" delay={i * 80}>
                <Link href={`/services#${anchor}`} style={{ textDecoration:"none", display:"block", height:"100%" }}>
                  <div
                    style={{ background:"white", borderRadius:"20px", padding:"28px", border:"1px solid rgba(169,13,200,0.08)", cursor:"pointer", height:"100%", transition:"all 0.35s cubic-bezier(0.4,0,0.2,1)" }}
                    onMouseEnter={e => {
                      const el = e.currentTarget;
                      el.style.transform = "translateY(-8px)";
                      el.style.boxShadow = `0 20px 60px ${color}25`;
                      el.style.borderColor = `${color}40`;
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget;
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = "none";
                      el.style.borderColor = "rgba(169,13,200,0.08)";
                    }}
                  >
                    <div style={{ width:"52px", height:"52px", borderRadius:"14px", background:`linear-gradient(135deg, ${color}20, ${color}10)`, border:`1px solid ${color}30`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"18px", transition:"all 0.3s ease" }}>
                      <Icon size={24} color={color} />
                    </div>
                    <h3 style={{ fontFamily:"Sora, sans-serif", fontWeight:700, fontSize:"17px", color:"#1a1a2e", marginBottom:"10px" }}>{title}</h3>
                    <p style={{ fontSize:"14px", color:"#6b7280", lineHeight:1.6, marginBottom:"16px" }}>{desc}</p>
                    <div style={{ display:"flex", alignItems:"center", gap:"4px", color, fontWeight:600, fontSize:"13px", fontFamily:"Sora, sans-serif", transition:"gap 0.2s ease" }}>
                      Learn More <ChevronRight size={14} />
                    </div>
                  </div>
                </Link>
              </Animated>
            ))}

            {/* 8th card — CTA card, fills the empty 4th slot in row 2 */}
            {/* Identical card shape/hover as service cards; links to /contact */}
            <Animated variant="fadeUp" delay={7 * 80}>
              <Link href="/contact" style={{ textDecoration:"none", display:"block", height:"100%" }}>
                <div
                  style={{
                    background: "linear-gradient(135deg, rgba(169,13,200,0.04) 0%, rgba(253,181,21,0.03) 100%)",
                    borderRadius: "20px",
                    padding: "28px",
                    border: "1px solid rgba(169,13,200,0.15)",
                    cursor: "pointer",
                    height: "100%",
                    transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(-8px)";
                    el.style.boxShadow = "0 20px 60px rgba(169,13,200,0.18)";
                    el.style.borderColor = "rgba(169,13,200,0.40)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                    el.style.borderColor = "rgba(169,13,200,0.15)";
                  }}
                >
                  {/* Icon circle — gradient fill matching orchid brand accent */}
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: "linear-gradient(135deg, rgba(169,13,200,0.15), rgba(253,181,21,0.08))",
                      border: "1px solid rgba(169,13,200,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "18px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <MessageCircle size={24} color="#A90DC8" />
                  </div>
                  <h3 style={{ fontFamily:"Sora, sans-serif", fontWeight:700, fontSize:"17px", color:"#1a1a2e", marginBottom:"10px" }}>
                    Need Something Custom?
                  </h3>
                  <p style={{ fontSize:"14px", color:"#6b7280", lineHeight:1.6, marginBottom:"16px" }}>
                    Can&apos;t find what you&apos;re looking for? Talk to us — we tailor solutions to your specific compliance needs.
                  </p>
                  <div style={{ display:"flex", alignItems:"center", gap:"4px", color:"#A90DC8", fontWeight:600, fontSize:"13px", fontFamily:"Sora, sans-serif", transition:"gap 0.2s ease" }}>
                    Talk to Us <ChevronRight size={14} />
                  </div>
                </div>
              </Link>
            </Animated>
          </div>

          <Animated variant="fadeUp" delay={200}>
            <div style={{ textAlign:"center", marginTop:"40px" }}>
              <Link href="/services" className="btn-orchid" style={{ textDecoration:"none" }}>
                View All Services <ArrowRight size={16} />
              </Link>
            </div>
          </Animated>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section style={{ background:"linear-gradient(135deg, #f8f0ff 0%, #DFF2FE 100%)", padding:"80px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 24px" }}>
          <Animated variant="fadeUp">
            <div style={{ textAlign:"center", marginBottom:"52px" }}>
              <div className="section-tag" style={{ margin:"0 auto 16px" }}>Why Choose Us</div>
              <h2 style={{ fontFamily:"Sora, sans-serif", fontWeight:800, fontSize:"clamp(28px, 4vw, 44px)", color:"#1a1a2e", marginBottom:"16px" }}>
                The <span style={{ color:"#A90DC8" }}>Right Path</span> Makes All the Difference
              </h2>
            </div>
          </Animated>

          {/*
            minmax(320px, 1fr): at 1280px content width → 3 cols (3×320 + 2×24 = 1008 px fits).
            6 cards → 3+3 on desktop, 2+2+2 on tablet, 1-col on mobile. No gap at any size.
          */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))", gap:"24px" }}>
            {whyChooseUs.map(({ icon:Icon, title, desc, color }, i) => (
              <Animated key={title} variant="fadeUp" delay={i * 100}>
                <div
                  style={{ background:"white", borderRadius:"20px", padding:"28px", border:"1px solid rgba(169,13,200,0.08)", boxShadow:"0 4px 20px rgba(0,0,0,0.05)", transition:"all 0.35s cubic-bezier(0.4,0,0.2,1)", height:"100%" }}
                  onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-8px)";e.currentTarget.style.boxShadow="0 20px 56px rgba(169,13,200,0.14)"}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.05)"}}
                >
                  <div style={{ width:"56px", height:"56px", borderRadius:"16px", background:`linear-gradient(135deg, ${color}, ${color==="#A90DC8"?"#8A0AA3":"#E09A00"})`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"20px", boxShadow:`0 8px 20px ${color}40`, transition:"transform 0.3s ease" }}
                    onMouseEnter={e=>{e.currentTarget.style.transform="rotate(-6deg) scale(1.08)"}}
                    onMouseLeave={e=>{e.currentTarget.style.transform="rotate(0) scale(1)"}}>
                    <Icon size={26} color="white" />
                  </div>
                  <h3 style={{ fontFamily:"Sora, sans-serif", fontWeight:700, fontSize:"17px", color:"#1a1a2e", marginBottom:"10px" }}>{title}</h3>
                  <p style={{ fontSize:"14px", color:"#6b7280", lineHeight:1.7 }}>{desc}</p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─── */}
      <section
        style={{
          background: "#F9F7FF",
          padding: "100px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dot-grid background pattern — light gray dots on off-white, ties back to hero */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.20) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            pointerEvents: "none",
          }}
        />

        {/* Soft blurred gradient blob behind the photo card */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "10%",
            left: "-8%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(236,72,153,0.08) 50%, transparent 75%)",
            filter: "blur(72px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* ── Grid: photo left (slightly wider), text right (starts earlier via negative margin) ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.05fr 1fr",
              gap: "40px",
              alignItems: "center",
            }}
            className="about-grid"
          >
            {/* LEFT: Photo card */}
            <Animated variant="fadeLeft">
              <div style={{ position: "relative" }}>

                {/* Gradient border wrapper — creates the thin purple/pink border effect */}
                <div
                  style={{
                    padding: "3px",
                    borderRadius: "28px",
                    background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #6366F1 100%)",
                    /*
                      Outer glow: matches brand accent (violet/pink).
                      Two layers — tight bloom + wide diffuse lift.
                    */
                    boxShadow:
                      "0 0 0 1px rgba(168,85,247,0.15), " +
                      "0 0 40px 8px rgba(217,70,239,0.22), " +
                      "0 24px 64px rgba(0,0,0,0.12)",
                    marginRight: "-28px",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {/* Inner card — aspect-ratio matches actual portrait (1023×1537 ≈ 2:3) */}
                  <div
                    style={{
                      borderRadius: "26px",
                      overflow: "hidden",
                      /*
                        aspect-ratio drives the height; no fixed px so the card
                        naturally scales with the column width at every breakpoint.
                        2/3 = 0.666, matching the 1023×1537 export exactly.
                      */
                      aspectRatio: "2 / 3",
                      width: "100%",
                      /*
                        Dark background = no white flash on slow connections;
                        matches our hero/dark theme.
                      */
                      background: "#0a0a0f",
                      position: "relative",
                      transition: "transform 0.5s ease, box-shadow 0.5s ease",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "scale(1.02)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <Image
                      src="/client.png"
                      alt="Mr. Raj Paudel — Proprietor, Elite Right Path Tax Consultancy"
                      fill
                      style={{
                        /*
                          cover: fills the card completely, no letterbox bars.
                          top center: if any micro-crop occurs, face/head stays
                          fully visible; feet/lower body may crop instead.
                        */
                        objectFit: "cover",
                        objectPosition: "top center",
                      }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Floating GST credential chip — overlaps bottom-right corner of photo card */}
                <Animated
                  variant="fadeUp"
                  delay={400}
                  style={{
                    position: "absolute",
                    bottom: "-18px",
                    right: "0px",
                    zIndex: 10,
                  }}
                >
                  <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      background: "white",
                      border: "1.5px solid rgba(139,92,246,0.25)",
                      borderRadius: "16px",
                      padding: "12px 18px",
                      boxShadow: "0 8px 32px rgba(139,92,246,0.18), 0 2px 8px rgba(0,0,0,0.06)",
                    }}
                  >
                    {/* Gradient icon chip */}
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: "0 4px 14px rgba(139,92,246,0.35)",
                      }}
                    >
                      <CheckCircle size={20} color="white" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "Sora, sans-serif",
                          fontWeight: 800,
                          fontSize: "15px",
                          background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          lineHeight: 1.2,
                        }}
                      >
                        GSTIN
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#9CA3AF",
                          fontWeight: 500,
                          marginTop: "2px",
                        }}
                      >
                        Verified Firm
                      </div>
                    </div>
                  </div>
                </Animated>
              </div>
            </Animated>

            {/* RIGHT: Text column — slight left pull via padding to meet photo overlap */}
            <div style={{ paddingLeft: "12px", paddingBottom: "24px" }}>

              {/* ABOUT US tag */}
              <Animated variant="fadeUp" delay={100}>
                <div className="section-tag" style={{ marginBottom: "20px" }}>About Us</div>
              </Animated>

              {/* Two-tone headline */}
              <Animated variant="fadeUp" delay={200}>
                <h2
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(26px, 3.5vw, 40px)",
                    color: "#111827",
                    lineHeight: 1.2,
                    marginBottom: "20px",
                  }}
                >
                  Mr. Raj Paudel —{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #6366F1 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Your Trusted Tax Advisor
                  </span>
                </h2>
              </Animated>

              {/* Paragraph 1 */}
              <Animated variant="fadeUp" delay={280}>
                <p style={{ fontSize: "16px", color: "#4b5563", lineHeight: 1.8, marginBottom: "16px" }}>
                  Elite Right Path Tax Consultancy is a professional tax and compliance firm led by Mr. Raj Paudel, dedicated to making financial compliance simple, accurate, and stress-free.
                </p>
              </Animated>

              {/* Paragraph 2 */}
              <Animated variant="fadeUp" delay={340}>
                <p style={{ fontSize: "16px", color: "#4b5563", lineHeight: 1.8, marginBottom: "28px" }}>
                  With expertise spanning income tax, GST, business registrations, and full-spectrum accounting, we guide you with precision, transparency, and genuine care.
                </p>
              </Animated>

              {/* Checklist rows — individual horizontal cards with stagger */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
                {[
                  { text: "Precision in every filing, every time",        color: "#8B5CF6" },
                  { text: "Transparent pricing — no hidden charges",       color: "#EC4899" },
                  { text: "Personalized attention from your consultant",   color: "#6366F1" },
                ].map((point, i) => (
                  <Animated key={point.text} variant="fadeUp" delay={420 + i * 120}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        background: "white",
                        border: "1px solid rgba(139,92,246,0.12)",
                        borderRadius: "14px",
                        padding: "14px 18px",
                        boxShadow: "0 2px 12px rgba(139,92,246,0.06)",
                        transition: "transform 0.25s ease, box-shadow 0.25s ease",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = "translateX(4px)";
                        e.currentTarget.style.boxShadow = "0 4px 20px rgba(139,92,246,0.14)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = "translateX(0)";
                        e.currentTarget.style.boxShadow = "0 2px 12px rgba(139,92,246,0.06)";
                      }}
                    >
                      {/* Circular gradient icon chip */}
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: `linear-gradient(135deg, ${point.color}, ${point.color === "#8B5CF6" ? "#6366F1" : point.color === "#EC4899" ? "#8B5CF6" : "#EC4899"})`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          boxShadow: `0 4px 12px ${point.color}40`,
                        }}
                      >
                        <CheckCircle size={15} color="white" />
                      </div>
                      <span style={{ fontSize: "15px", color: "#374151", fontWeight: 500 }}>
                        {point.text}
                      </span>
                    </div>
                  </Animated>
                ))}
              </div>

              <Animated variant="fadeUp" delay={780}>
                <Link href="/about" className="btn-orchid" style={{ textDecoration: "none" }}>
                  Read More About Us <ArrowRight size={16} />
                </Link>
              </Animated>
            </div>
          </div>
        </div>

        {/* Photography note: displayed only in dev to flag content need */}
        <style>{`
          @media (max-width: 1024px) {
            .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            .about-grid > *:first-child > div { margin-right: 0 !important; }
          }
          @media (max-width: 768px) {
            .about-grid > *:first-child > div > div:first-child { height: 320px !important; }
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-float-slow { animation: none !important; }
          }
        `}</style>
      </section>

      {/* ─── CTA BANNER ─── */}
      <Animated variant="scaleIn">
        <section style={{ background:"linear-gradient(135deg, #1a0026 0%, #A90DC8 50%, #8A0AA3 100%)", padding:"72px 24px", textAlign:"center", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(253,181,21,0.07) 1px, transparent 1px)", backgroundSize:"30px 30px" }} />
          <div style={{ position:"relative", zIndex:1 }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"rgba(253,181,21,0.15)", border:"1px solid rgba(253,181,21,0.3)", padding:"6px 16px", borderRadius:"50px", marginBottom:"20px" }}>
              <Star size={14} color="#FDB515" />
              <span style={{ fontSize:"13px", fontWeight:600, color:"#FDB515", fontFamily:"Sora, sans-serif" }}>Free First Consultation</span>
            </div>
            <h2 style={{ fontFamily:"Sora, sans-serif", fontWeight:800, fontSize:"clamp(28px, 4vw, 48px)", color:"white", marginBottom:"16px" }}>
              Ready to Simplify Your Taxes?
            </h2>
            <p style={{ fontSize:"17px", color:"rgba(255,255,255,0.8)", marginBottom:"36px", maxWidth:"500px", margin:"0 auto 36px", lineHeight:1.7 }}>
              Talk to us today. One conversation is all it takes to get your finances on the right path.
            </p>
            <div style={{ display:"flex", gap:"14px", justifyContent:"center", flexWrap:"wrap" }}>
              <a href="tel:+919360044152"
                style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"14px 32px", borderRadius:"50px", background:"white", color:"#A90DC8", fontFamily:"Sora, sans-serif", fontWeight:700, fontSize:"15px", textDecoration:"none", boxShadow:"0 8px 30px rgba(0,0,0,0.2)", transition:"all 0.3s ease" }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 14px 40px rgba(0,0,0,0.3)"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 8px 30px rgba(0,0,0,0.2)"}}>
                <Phone size={16} /> +91 93600 44152
              </a>
              <a href="https://wa.me/919360044152?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20tax%20services" target="_blank" rel="noopener noreferrer"
                style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"14px 32px", borderRadius:"50px", background:"#25D366", color:"white", fontFamily:"Sora, sans-serif", fontWeight:700, fontSize:"15px", textDecoration:"none", boxShadow:"0 8px 30px rgba(37,211,102,0.4)", transition:"all 0.3s ease" }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 14px 40px rgba(37,211,102,0.6)"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 8px 30px rgba(37,211,102,0.4)"}}>
                <MessageCircle size={16} /> WhatsApp Us Now
              </a>
            </div>
          </div>
        </section>
      </Animated>
    </>
  );
}
