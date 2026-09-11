"use client";

import { CheckCircle2, ShieldCheck, FileCheck, TrendingUp, Building2 } from "lucide-react";

export default function FinancialWorkspaceVisual() {
  return (
    <div
      className="financial-workspace-container"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "540px",
        margin: "0 auto",
      }}
    >
      {/* Soft ambient gradient depth behind workspace */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "15%",
          left: "20%",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.20) 0%, rgba(217, 70, 239, 0.08) 45%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Main Financial Ledger & Dashboard Board */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "linear-gradient(145deg, #160B27 0%, #0E071A 100%)",
          border: "1px solid rgba(168, 85, 247, 0.22)",
          borderRadius: "24px",
          boxShadow: "0 24px 60px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.05)",
          padding: "26px",
          overflow: "hidden",
        }}
      >
        {/* Workspace Header Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "18px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #7C3AED, #D946EF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(124, 58, 237, 0.3)",
              }}
            >
              <FileCheck size={18} color="#FFFFFF" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#FFFFFF",
                  letterSpacing: "-0.2px",
                }}
              >
                Tax Compliance Suite
              </div>
              <div style={{ fontSize: "11px", color: "#A78BFA", fontWeight: 500 }}>
                AY 2025-26 • Live File Review
              </div>
            </div>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(37, 211, 102, 0.12)",
              border: "1px solid rgba(37, 211, 102, 0.25)",
              padding: "4px 10px",
              borderRadius: "50px",
              fontSize: "11px",
              fontWeight: 600,
              color: "#4ADE80",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#22C55E",
                boxShadow: "0 0 6px #22C55E",
              }}
            />
            GSTIN Active
          </div>
        </div>

        {/* Live Tax Computation Summary Card */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "16px",
            padding: "18px 20px",
            marginBottom: "18px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
            <div>
              <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.5)", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: 600 }}>
                Income Tax Assessment & Savings
              </div>
              <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "24px", color: "#FFFFFF", marginTop: "2px" }}>
                ₹42,500 <span style={{ fontSize: "13px", fontWeight: 500, color: "#FBBF24" }}>Tax Optimized</span>
              </div>
            </div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                color: "#A855F7",
                fontSize: "12px",
                fontWeight: 600,
                background: "rgba(168, 85, 247, 0.12)",
                padding: "4px 8px",
                borderRadius: "8px",
              }}
            >
              <TrendingUp size={13} />
              100% Verified
            </div>
          </div>

          {/* Metric Columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "10px",
              paddingTop: "12px",
              borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            <div>
              <div style={{ fontSize: "10px", color: "rgba(255, 255, 255, 0.45)" }}>Chapter VI-A</div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#FFFFFF", marginTop: "2px" }}>₹1.50 L Max</div>
            </div>
            <div>
              <div style={{ fontSize: "10px", color: "rgba(255, 255, 255, 0.45)" }}>ITR Form</div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#A78BFA", marginTop: "2px" }}>ITR-3 / 4</div>
            </div>
            <div>
              <div style={{ fontSize: "10px", color: "rgba(255, 255, 255, 0.45)" }}>E-Filing Status</div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#4ADE80", marginTop: "2px" }}>Ready to Sign</div>
            </div>
          </div>
        </div>

        {/* Layered GST Tax Invoice & Reconciliation Card */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(124, 58, 237, 0.12) 0%, rgba(217, 70, 239, 0.05) 100%)",
            border: "1px solid rgba(139, 92, 246, 0.25)",
            borderRadius: "16px",
            padding: "16px 18px",
            marginBottom: "18px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Building2 size={15} color="#D946EF" />
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#FFFFFF", fontFamily: "Sora, sans-serif" }}>
                GSTR-1 & 3B Reconciliation
              </span>
            </div>
            <span style={{ fontSize: "11px", color: "#FBBF24", fontWeight: 600 }}>GSTR-2B Matched</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              padding: "10px 14px",
              fontSize: "12px",
            }}
          >
            <div>
              <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>Eligible ITC Claimed:</span>{" "}
              <strong style={{ color: "#FFFFFF" }}>₹28,640</strong>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#4ADE80", fontWeight: 600 }}>
              <CheckCircle2 size={13} />
              Zero Mismatch
            </div>
          </div>
        </div>

        {/* Direct Consultant Oversight Banner */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "14px",
            padding: "12px 16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "12px",
                color: "white",
              }}
            >
              RP
            </div>
            <div>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#FFFFFF" }}>
                Mr. Raj Paudel
              </div>
              <div style={{ fontSize: "10px", color: "rgba(255, 255, 255, 0.55)" }}>
                Proprietor & Tax Consultant • Personal Review
              </div>
            </div>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "11px",
              color: "#A78BFA",
              fontWeight: 600,
            }}
          >
            <ShieldCheck size={14} color="#A78BFA" />
            Verified Firm
          </div>
        </div>
      </div>

      {/* Floating Indian Rupee Credential Badge (Subtle, professional) */}
      <div
        style={{
          position: "absolute",
          bottom: "-14px",
          right: "20px",
          background: "linear-gradient(135deg, #7C3AED 0%, #D946EF 100%)",
          color: "white",
          borderRadius: "12px",
          padding: "8px 16px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          boxShadow: "0 10px 25px rgba(124, 58, 237, 0.4)",
          fontSize: "12px",
          fontWeight: 700,
          zIndex: 3,
        }}
      >
        <span style={{ fontSize: "14px", color: "#FBBF24" }}>₹</span>
        <span>100% Notice & Penalty Protection</span>
      </div>
    </div>
  );
}
