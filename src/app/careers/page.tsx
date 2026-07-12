"use client";

import Link from "next/link";
import { Mail, MessageCircle, Phone, Award, BookOpen, Clock, Users, ArrowRight, ShieldCheck, FileText, Send, ChevronRight } from "lucide-react";
import Animated from "@/components/Animated";

const internRoles = [
  {
    title: "Tax & GST Compliance Intern",
    duration: "3 - 6 Months",
    mode: "Hybrid / Remote",
    skills: ["TDS returns", "ITR filing assistance", "GST reconciliation", "Basic tax law"],
    desc: "Gain hands-on training preparing and filing GST returns, reconciling input tax credits, preparing ITR documents, and drafting responses to tax intimations under expert supervision.",
    color: "#A90DC8",
  },
  {
    title: "Accounting & Bookkeeping Intern",
    duration: "3 Months",
    mode: "Hybrid / In-Office",
    skills: ["Tally Prime", "Bank reconciliation", "Excel MIS sheets", "Voucher entry"],
    desc: "Work closely with clients' monthly financial transactions. Learn to categorize expenses, perform bank reconciliations, generate profit & loss statements, and draft basic MIS reports.",
    color: "#FDB515",
  },
  {
    title: "Business Registration & Corporate Law Intern",
    duration: "3 - 6 Months",
    mode: "Hybrid",
    skills: ["ROC compliance", "Company formation steps", "Partnership deed drafts", "MSME registrations"],
    desc: "Assist in drafting incorporation documents for proprietorships, partnerships, LLPs, and private limited companies. Research ROC guidelines and draft corporate compliance filings.",
    color: "#8A0AA3",
  },
];

const benefits = [
  {
    icon: Award,
    title: "Official Certification",
    desc: "Receive an official Internship Certificate and a Letter of Recommendation highlighting your achievements upon successful completion.",
    color: "#A90DC8",
  },
  {
    icon: Users,
    title: "Direct Mentorship",
    desc: "Get trained directly by Mr. Raj Paudel S., learning practical workflow hacks and compliance rules that aren't taught in college classrooms.",
    color: "#FDB515",
  },
  {
    icon: BookOpen,
    title: "Real Client Exposure",
    desc: "Work on real client data across diverse industries (startups, professionals, small businesses) to build a powerful portfolio.",
    color: "#8A0AA3",
  },
  {
    icon: ShieldCheck,
    title: "Future Opportunity",
    desc: "Top-performing interns may be offered full-time associate positions or retainers as the firm grows.",
    color: "#A90DC8",
  },
];

export default function CareersPage() {
  const handleEmailApply = (roleTitle: string) => {
    const subject = encodeURIComponent(`Application for Internship: ${roleTitle}`);
    const body = encodeURIComponent(
      `Dear Mr. Raj Paudel,\n\nI would like to apply for the "${roleTitle}" position.\n\nHere are my details:\n- Full Name:\n- Mobile Number:\n- Current Qualification:\n- City/Location:\n\nPlease find attached my resume for your review.\n\nSincerely,\n[Your Name]`
    );
    window.location.href = `mailto:info@eliterightpath.com?subject=${subject}&body=${body}`;
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
              Join Our Team
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
            Internship{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A90DC8, #FDB515)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Opportunities
            </span>
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
            Launch your career in tax consulting, bookkeeping, and business compliance with hands-on practice.
          </p>
        </div>
      </section>

      {/* Main Internship Roles */}
      <section style={{ background: "#F5FEFD", padding: "64px 0" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>
          <Animated variant="fadeUp">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "clamp(26px, 3.5vw, 36px)", color: "#1a1a2e", marginBottom: "12px" }}>
                Available Internship Roles
              </h2>
              <p style={{ fontSize: "15px", color: "#6b7280" }}>
                Apply to the track that aligns with your career goals. Training provided.
              </p>
            </div>
          </Animated>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {internRoles.map((role, idx) => (
              <Animated key={role.title} variant="fadeUp" delay={idx * 100}>
                <div
                  style={{
                    background: "white",
                    borderRadius: "24px",
                    padding: "32px",
                    border: "1px solid rgba(169,13,200,0.08)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                    display: "grid",
                    gridTemplateColumns: "1.8fr 1fr",
                    gap: "32px",
                    alignItems: "center",
                  }}
                  className="role-card"
                >
                  <div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "16px" }}>
                      <span style={{ fontSize: "12px", background: `${role.color}15`, color: role.color, fontWeight: 700, padding: "4px 12px", borderRadius: "50px" }}>
                        {role.mode}
                      </span>
                      <span style={{ fontSize: "12px", background: "rgba(253,181,21,0.15)", color: "#E09A00", fontWeight: 700, padding: "4px 12px", borderRadius: "50px" }}>
                        {role.duration}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "20px", color: "#1a1a2e", marginBottom: "12px" }}>
                      {role.title}
                    </h3>
                    <p style={{ fontSize: "14.5px", color: "#4b5563", lineHeight: 1.7, marginBottom: "20px" }}>
                      {role.desc}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {role.skills.map((skill) => (
                        <span key={skill} style={{ fontSize: "12.5px", background: "#F5FEFD", color: "#6b7280", border: "1px solid #E7EAE5", padding: "4px 10px", borderRadius: "8px" }}>
                          ✓ {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", borderLeft: "1px solid #f3f4f6", paddingLeft: "32px" }} className="role-cta-col">
                    <button
                      onClick={() => handleEmailApply(role.title)}
                      className="btn-orchid"
                      style={{ width: "100%", justifyContent: "center", fontSize: "14px" }}
                    >
                      <Mail size={15} /> Apply via Email
                    </button>
                    <a
                      href={`https://wa.me/919360044152?text=Hi%20Mr.%20Raj,%20I%20am%20interested%20in%20applying%20for%20the%20${encodeURIComponent(role.title)}%20internship.%20Here%20is%20my%20resume:`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold"
                      style={{ width: "100%", justifyContent: "center", fontSize: "14px", textDecoration: "none" }}
                    >
                      <MessageCircle size={15} /> Inquire via WhatsApp
                    </a>
                  </div>
                </div>
              </Animated>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .role-card { grid-template-columns: 1fr !important; gap: 20px !important; }
            .role-cta-col { border-left: none !important; padding-left: 0 !important; border-top: 1px solid #f3f4f6 !important; padding-top: 20px !important; }
          }
        `}</style>
      </section>

      {/* Program Benefits */}
      <section style={{ background: "white", padding: "80px 0" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>
          <Animated variant="fadeUp">
            <div style={{ textAlign: "center", marginBottom: "52px" }}>
              <div className="section-tag" style={{ margin: "0 auto 16px" }}>The Experience</div>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "clamp(26px, 3.5vw, 36px)", color: "#1a1a2e" }}>
                Why Intern With Us?
              </h2>
            </div>
          </Animated>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
            {benefits.map((benefit, idx) => (
              <Animated key={benefit.title} variant="fadeUp" delay={idx * 80}>
                <div style={{ background: "rgba(169,13,200,0.02)", border: "1px solid rgba(169,13,200,0.06)", borderRadius: "20px", padding: "24px", height: "100%" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: `linear-gradient(135deg, ${benefit.color}, ${benefit.color === "#FDB515" ? "#E09A00" : "#8A0AA3"})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                      boxShadow: `0 6px 15px ${benefit.color}30`,
                    }}
                  >
                    <benefit.icon size={20} color="white" />
                  </div>
                  <h4 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: "16px", color: "#1a1a2e", marginBottom: "8px" }}>
                    {benefit.title}
                  </h4>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", lineHeight: 1.6 }}>
                    {benefit.desc}
                  </p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section style={{ background: "linear-gradient(135deg, #f8f0ff 0%, #DFF2FE 100%)", padding: "64px 0" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 24px" }}>
          <Animated variant="scaleIn">
            <div
              style={{
                background: "white",
                borderRadius: "24px",
                padding: "40px",
                border: "1px solid rgba(169,13,200,0.1)",
                boxShadow: "0 8px 30px rgba(169,13,200,0.06)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "rgba(169,13,200,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <FileText size={24} color="#A90DC8" />
              </div>
              <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "22px", color: "#1a1a2e", marginBottom: "16px" }}>
                Ready to Join Elite Right Path?
              </h3>
              <p style={{ fontSize: "15px", color: "#6b7280", lineHeight: 1.7, marginBottom: "28px" }}>
                To apply, please send an email to <strong style={{ color: "#A90DC8" }}>info@eliterightpath.com</strong> containing your resume, preferred internship role, and a brief description of why you want to work with us.
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href="mailto:info@eliterightpath.com?subject=Inquiry%20Regarding%20Internship&body=Dear%20Mr.%20Raj%20Paudel,%20I%20would%20like%20to%20apply%20for%20an%20internship%20at%20your%20firm.%20Attached%20is%20my%20resume."
                  className="btn-orchid"
                  style={{ textDecoration: "none" }}
                >
                  <Send size={15} /> Send Resume
                </a>
                <a
                  href="https://wa.me/919360044152?text=Hi%20Mr.%20Raj,%20I'm%20interested%20in%20the%20internship%20opportunities%20at%20Elite%20Right%20Path."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ textDecoration: "none" }}
                >
                  <MessageCircle size={15} /> Inquire on WhatsApp
                </a>
              </div>
            </div>
          </Animated>
        </div>
      </section>
    </>
  );
}
