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
  { icon: Award,      title: "Expert Guidance",        desc: "Led by Mr. Raj Paudel S., a seasoned tax professional with deep expertise in Indian tax law.",       color: "#A90DC8" },
  { icon: Clock,      title: "Timely Filing",          desc: "We track all deadlines proactively — no last-minute rush, no penalties for our clients.",            color: "#FDB515" },
  { icon: Users,      title: "Personalized Service",   desc: "Direct access to your consultant — not a ticket queue. Your concerns get individual attention.",      color: "#A90DC8" },
  { icon: ShieldCheck,title: "Full Transparency",      desc: "Clear pricing, no hidden charges. You always know what we're doing and why.",                         color: "#FDB515" },
  { icon: Zap,        title: "Full-Spectrum Coverage", desc: "From ITR to GST to company registration — one firm handles all your compliance needs.",              color: "#A90DC8" },
];

const trustStats = [
  { value: 500, suffix: "+", label: "Returns Filed",       icon: FileText },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: Star },
  { value: 7,   suffix: "",  label: "Service Categories",  icon: Briefcase },
  { isGst: true,             label: "GST Registered Firm", icon: CheckCircle },
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
          paddingBottom: "80px",
          position: "relative",
          overflow: "hidden",
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
                  GST Registered Tax Consultancy
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
                  href="https://wa.me/919940243827?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20tax%20services"
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
                  { text: "GST Registered", icon: CheckCircle },
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

          {/* Right Column: Consultant portrait with mask-fade + glow treatment, 4 service badges */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "520px",
            }}
            className="hero-right"
          >
            {/* === Deep purple–pink glow orb BEHIND the photo === */}
            <div
              style={{
                position: "absolute",
                width: "420px",
                height: "420px",
                borderRadius: "50%",
                background: "radial-gradient(ellipse at center, rgba(139,92,246,0.35) 0%, rgba(236,72,153,0.18) 45%, transparent 75%)",
                filter: "blur(56px)",
                zIndex: 0,
                pointerEvents: "none",
                transform: "translateY(20px)",
              }}
            />

            {/* === Portrait frame: borderless, mask-faded into the dark bg === */}
            <Animated variant="scaleIn" delay={300}>
              <div
                style={{
                  width: "300px",
                  height: "380px",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {/* Thin gradient ring – subtle, not a harsh white box */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-1px",
                    borderRadius: "28px",
                    background: "linear-gradient(135deg, rgba(139,92,246,0.35) 0%, rgba(236,72,153,0.2) 50%, rgba(99,102,241,0.2) 100%)",
                    zIndex: 1,
                    pointerEvents: "none",
                  }}
                />
                {/* The image with mask-fade so edges dissolve into the dark bg */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "28px",
                    overflow: "hidden",
                    position: "relative",
                    /* fade bottom hard, fade sides softly */
                    maskImage:
                      "linear-gradient(to bottom, black 60%, transparent 100%), radial-gradient(ellipse 80% 100% at 50% 50%, black 55%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 60%, transparent 100%), radial-gradient(ellipse 80% 100% at 50% 50%, black 55%, transparent 100%)",
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                    background: "transparent",
                  }}
                >
                  <Image
                    src="/client.png"
                    alt="Mr. Raj Paudel S. — Proprietor, Elite Right Path Tax Consultancy"
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center top",
                    }}
                    priority
                  />
                </div>
              </div>
            </Animated>

            {/* === 4 Service badge pills: evenly spaced in a ring around the portrait === */}
            <div className="desktop-floating-cards" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 3 }}>

              {/* TOP-LEFT — GST Registration */}
              <div
                className="glass-card-fintech glass-card-glow-purple fintech-gradient-border animate-float-1"
                style={{ position: "absolute", top: "40px", left: "-10px", padding: "10px 16px", borderRadius: "18px", display: "flex", alignItems: "center", gap: "8px", pointerEvents: "auto", whiteSpace: "nowrap" }}
              >
                <Receipt size={14} color="#8B5CF6" />
                <span style={{ fontSize: "12.5px", color: "white", fontWeight: 600 }}>GST Registration</span>
              </div>

              {/* TOP-RIGHT — Income Tax Filing */}
              <div
                className="glass-card-fintech glass-card-glow-pink fintech-gradient-border animate-float-2"
                style={{ position: "absolute", top: "40px", right: "-10px", padding: "10px 16px", borderRadius: "18px", display: "flex", alignItems: "center", gap: "8px", pointerEvents: "auto", whiteSpace: "nowrap" }}
              >
                <FileText size={14} color="#EC4899" />
                <span style={{ fontSize: "12.5px", color: "white", fontWeight: 600 }}>Income Tax Filing</span>
              </div>

              {/* BOTTOM-LEFT — MSME Registration */}
              <div
                className="glass-card-fintech glass-card-glow-purple fintech-gradient-border animate-float-3"
                style={{ position: "absolute", bottom: "70px", left: "-10px", padding: "10px 16px", borderRadius: "18px", display: "flex", alignItems: "center", gap: "8px", pointerEvents: "auto", whiteSpace: "nowrap" }}
              >
                <Briefcase size={14} color="#8B5CF6" />
                <span style={{ fontSize: "12.5px", color: "white", fontWeight: 600 }}>MSME Registration</span>
              </div>

              {/* BOTTOM-RIGHT — Company Registration */}
              <div
                className="glass-card-fintech glass-card-glow-purple fintech-gradient-border animate-float-2"
                style={{ position: "absolute", bottom: "70px", right: "-10px", padding: "10px 16px", borderRadius: "18px", display: "flex", alignItems: "center", gap: "8px", pointerEvents: "auto", whiteSpace: "nowrap" }}
              >
                <Building2 size={14} color="#6366F1" />
                <span style={{ fontSize: "12.5px", color: "white", fontWeight: 600 }}>Company Reg.</span>
              </div>
            </div>

            {/* Mobile wrapped tag list (shows only on mobile/tablet below the portrait) */}
            <div className="mobile-tag-list" style={{ display: "none" }}>
              <div className="mobile-flex-wrap">
                {[
                  { text: "GST Registration",  icon: Receipt,   col: "#8B5CF6" },
                  { text: "Income Tax Filing", icon: FileText,  col: "#EC4899" },
                  { text: "Company Reg.",      icon: Building2, col: "#6366F1" },
                  { text: "MSME Registration", icon: Briefcase, col: "#8B5CF6" },
                ].map(({ text, icon: Icon, col }) => (
                  <div
                    key={text}
                    className="glass-card-fintech fintech-gradient-border"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 12px",
                      borderRadius: "12px",
                      fontSize: "11px",
                      color: "white",
                      fontWeight: 600,
                      margin: "4px",
                    }}
                  >
                    <Icon size={12} color={col} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; text-align: center; }
            .hero-right { order: -1; height: auto !important; margin-bottom: 8px; }
            .desktop-floating-cards { display: none !important; }
            .mobile-tag-list { display: block !important; width: 100%; margin-top: 16px; }
            .mobile-flex-wrap { display: flex; flex-wrap: wrap; justify-content: center; }
            .hero-cta-row { justify-content: center; }
          }
          @media (max-width: 768px) {
            .hero-section { padding-top: 90px !important; padding-bottom: 60px !important; }
            .hero-right { min-height: 260px; }
            .hero-right > div:nth-child(2) > div { width: 220px !important; height: 280px !important; }
            .hero-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .hero-cta-row { flex-direction: column; align-items: center; }
            .hero-cta-row > * { width: 100%; max-width: 300px; justify-content: center; text-align: center; }
          }
        `}</style>
      </section>

      {/* ─── SERVICES OVERVIEW ─── */}
      <section style={{ background:"#F5FEFD", padding:"80px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 24px" }}>
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

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))", gap:"24px" }}>
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
      <section style={{ background:"white", padding:"80px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 24px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"60px", alignItems:"center" }} className="about-grid">
            <Animated variant="fadeLeft">
              <div style={{ position:"relative" }}>
                <div style={{ borderRadius:"24px", overflow:"hidden", height:"400px", border:"3px solid rgba(169,13,200,0.15)", boxShadow:"0 20px 60px rgba(169,13,200,0.15)", position:"relative", transition:"transform 0.5s ease, box-shadow 0.5s ease" }}
                  onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.02)";e.currentTarget.style.boxShadow="0 30px 80px rgba(169,13,200,0.25)"}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow="0 20px 60px rgba(169,13,200,0.15)"}}>
                  <Image src="/client.png" alt="Mr. Raj Paudel S. — Proprietor" fill style={{ objectFit:"contain", backgroundColor: "#ffffff" }} />
                </div>
                {/* Animated badge */}
                <div className="animate-float-slow" style={{ position:"absolute", bottom:"-16px", right:"-16px", background:"linear-gradient(135deg, #A90DC8, #8A0AA3)", borderRadius:"20px", padding:"20px 24px", boxShadow:"0 12px 40px rgba(169,13,200,0.4)", textAlign:"center", animationDelay:"1s" }}>
                  <div style={{ fontFamily:"Sora, sans-serif", fontWeight:800, fontSize:"32px", color:"#FDB515" }}>GST</div>
                  <div style={{ fontSize:"12px", color:"rgba(255,255,255,0.8)", fontWeight:600 }}>Registered</div>
                </div>
              </div>
            </Animated>

            <Animated variant="fadeRight">
              <div>
                <div className="section-tag" style={{ marginBottom:"20px" }}>About Us</div>
                <h2 style={{ fontFamily:"Sora, sans-serif", fontWeight:800, fontSize:"clamp(26px, 3.5vw, 40px)", color:"#1a1a2e", lineHeight:1.2, marginBottom:"20px" }}>
                  Mr. Raj Paudel S. —{" "}
                  <span style={{ color:"#A90DC8" }}>Your Trusted Tax Advisor</span>
                </h2>
                <p style={{ fontSize:"16px", color:"#4b5563", lineHeight:1.8, marginBottom:"16px" }}>
                  Elite Right Path Tax Consultancy is a professional tax and compliance firm led by Mr. Raj Paudel S., dedicated to making financial compliance simple, accurate, and stress-free.
                </p>
                <p style={{ fontSize:"16px", color:"#4b5563", lineHeight:1.8, marginBottom:"28px" }}>
                  With expertise spanning income tax, GST, business registrations, and full-spectrum accounting, we guide you with precision, transparency, and genuine care.
                </p>
                <div style={{ display:"flex", flexDirection:"column", gap:"10px", marginBottom:"32px" }}>
                  {["Precision in every filing, every time", "Transparent pricing — no hidden charges", "Personalized attention from your consultant"].map((point, i) => (
                    <div key={point} style={{ display:"flex", alignItems:"center", gap:"10px", opacity:0, animation:"fadeInUp 0.6s ease forwards", animationDelay:`${i*120}ms` }} className="opacity-0-init">
                      <CheckCircle size={18} color="#A90DC8" style={{ flexShrink:0, transition:"transform 0.3s ease" }} />
                      <span style={{ fontSize:"15px", color:"#374151", fontWeight:500 }}>{point}</span>
                    </div>
                  ))}
                </div>
                <Link href="/about" className="btn-orchid" style={{ textDecoration:"none" }}>
                  Read More About Us <ArrowRight size={16} />
                </Link>
              </div>
            </Animated>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } }`}</style>
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
              <a href="tel:+919940243827"
                style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"14px 32px", borderRadius:"50px", background:"white", color:"#A90DC8", fontFamily:"Sora, sans-serif", fontWeight:700, fontSize:"15px", textDecoration:"none", boxShadow:"0 8px 30px rgba(0,0,0,0.2)", transition:"all 0.3s ease" }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 14px 40px rgba(0,0,0,0.3)"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 8px 30px rgba(0,0,0,0.2)"}}>
                <Phone size={16} /> +91 99402 43827
              </a>
              <a href="https://wa.me/919940243827?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20tax%20services" target="_blank" rel="noopener noreferrer"
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
