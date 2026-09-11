"use client";

import Link from "next/link";
import {
  Receipt, FileText, Building2, Briefcase, Calculator, ShieldCheck, BookOpen,
} from "lucide-react";

/* ─── Layout constants ─────────────────────────────────────── */
const CONTAINER_PX   = 460;
const CIRCLE_DIAM_PX = 132;                                     // 132px circle
const CIRCLE_R_PX    = CIRCLE_DIAM_PX / 2;                     // 66
const RING_DIAM_PX   = CIRCLE_DIAM_PX + 16;                    // 148px ring
const RING_R_PX      = RING_DIAM_PX / 2;                       // 74
const ORBIT_R        = 38;                                      // % of container

// Circle radius converted to SVG viewBox (0-100) units for line math
const CIRCLE_R_SVG   = (CIRCLE_R_PX / CONTAINER_PX) * 100;    // ≈ 14.35

/* ─── Angle/position helpers ──────────────────────────────── */
function toRad(deg: number) { return ((deg - 90) * Math.PI) / 180; }

/** Pill center as % of container (for CSS positioning) */
function pillPos(deg: number) {
  const r = toRad(deg);
  return {
    top:  `${50 + ORBIT_R * Math.sin(r)}%`,
    left: `${50 + ORBIT_R * Math.cos(r)}%`,
  };
}

/** Line START: on the circle circumference (SVG viewBox units) */
function edgePt(deg: number) {
  const r = toRad(deg);
  return { x: 50 + CIRCLE_R_SVG * Math.cos(r), y: 50 + CIRCLE_R_SVG * Math.sin(r) };
}

/** Line END: pill center (SVG viewBox units, mirrors pillPos) */
function pillSVG(deg: number) {
  const r = toRad(deg);
  return { x: 50 + ORBIT_R * Math.cos(r), y: 50 + ORBIT_R * Math.sin(r) };
}

/* ─── Pill data ───────────────────────────────────────────── */
const PILLS = [
  { label: "GSTIN Registration",   Icon: Receipt,     color: "#8B5CF6", lineColor: "#8B5CF6", angleDeg:   0, delay: 0,   href: "/services#gst" },
  { label: "Income Tax Filing",    Icon: FileText,    color: "#EC4899", lineColor: "#EC4899", angleDeg:  60, delay: 0.5, href: "/services#income-tax" },
  { label: "Company Reg.",         Icon: Building2,   color: "#6366F1", lineColor: "#6366F1", angleDeg: 120, delay: 1.0, href: "/services#business-registration" },
  { label: "Book Keeping",         Icon: BookOpen,    color: "#FDB515", lineColor: "#FDB515", angleDeg: 180, delay: 1.5, href: "/services#bookkeeping" },
  { label: "Accounts Maintenance", Icon: Calculator,  color: "#A78BFA", lineColor: "#6366F1", angleDeg: 240, delay: 2.0, href: "/services#accounts-maintenance" },
  { label: "Compliance & Legal",   Icon: ShieldCheck, color: "#EC4899", lineColor: "#EC4899", angleDeg: 300, delay: 2.5, href: "/services#compliance" },
];

/* ─── SVG connector lines ─────────────────────────────────── */
// Lines run from the circle EDGE to each pill — never through the center logo.
// The SVG itself sits at z-index 1; the center circle is at z-index 20.
// Even though the lines are drawn to the pill positions, the area under
// the logo is always covered by the white circle sitting on top.
function ConnectorLines() {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        pointerEvents: "none", overflow: "visible",
        zIndex: 1,
      }}
    >
      <defs>
        {PILLS.map((p, i) => {
          const s = edgePt(p.angleDeg);
          const e = pillSVG(p.angleDeg);
          const x2Val = s.x === e.x ? e.x + 0.01 : e.x;
          return (
            <linearGradient
              key={`hicg${i}`} id={`hicg${i}`}
              x1={s.x} y1={s.y}
              x2={x2Val} y2={e.y}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor={p.lineColor} stopOpacity="0.8" />
              <stop offset="50%" stopColor={p.lineColor} stopOpacity="0.9">
                <animate attributeName="offset" values="0;1"
                  dur={`${3 + i * 0.4}s`} begin={`${p.delay}s`} repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor={p.lineColor} stopOpacity="0.1" />
            </linearGradient>
          );
        })}
        {/* Subtle glow filter for the pulse lines */}
        <filter id="hic-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {PILLS.map((p, i) => {
        const s = edgePt(p.angleDeg);
        const e = pillSVG(p.angleDeg);
        return (
          <g key={`hicl${i}`}>
            {/* Solid colored base line — always visible, no dashes */}
            <line
              x1={s.x} y1={s.y} x2={e.x} y2={e.y}
              stroke={p.lineColor}
              strokeWidth="0.6"
              strokeOpacity="0.55"
            />
            {/* Animated glow overlay — layered on top */}
            <line
              x1={s.x} y1={s.y} x2={e.x} y2={e.y}
              stroke={`url(#hicg${i})`}
              strokeWidth="0.7"
              filter="url(#hic-glow)"
              className="hic-pulse-line"
            />
          </g>
        );
      })}
    </svg>
  );
}

/* ─── Main component ──────────────────────────────────────── */
export default function HeroIconCluster() {
  return (
    <>
      <style>{`
        /* ── Static pill styling: firmly sticks to line endpoint ── */
        .hic-static-pill {
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .hic-static-pill:hover {
          transform: translate(-50%, -50%) scale(1.06) !important;
          box-shadow: 0 10px 28px rgba(139, 92, 246, 0.4) !important;
        }

        /* ── Glow ring rotation (only the ring spins, never the logo or pills) ── */
        @keyframes hic-ring-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .hic-glow-ring { animation: hic-ring-spin 7s linear infinite; }

        /* ── Reduced motion: disable rotating ring and pulse line ── */
        @media (prefers-reduced-motion: reduce) {
          .hic-glow-ring  { animation-play-state: paused !important; }
          .hic-pulse-line { display: none !important; }
        }

        /* ── Responsive ── */
        @media (max-width: 767px) {
          .hic-orbit-wrap  { display: none !important; }
          .hic-mobile-grid { display: flex  !important; }
        }
        @media (min-width: 768px) {
          .hic-orbit-wrap  { display: block !important; }
          .hic-mobile-grid { display: none  !important; }
        }
      `}</style>

      {/*
        ══════════════════════════════════════════
        LAYER 0 — Background radial glow blob
        Sits behind the entire orbit container.
        ══════════════════════════════════════════
      */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "420px", height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(168,85,247,0.10) 35%, transparent 75%)",
          filter: "blur(56px)",
          top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: 0, pointerEvents: "none",
        }}
      />

      {/*
        ══════════════════════════════════════════════════════════
        DESKTOP — Orbit container
        Stacking order inside this positioned container:
          z-index 1  → SVG connector lines
          z-index 2  → Rotating glow ring wrapper
          z-index 10 → Floating service pills
          z-index 20 → Center circle (STATIC, covers all lines)
        ══════════════════════════════════════════════════════════
      */}
      <div
        className="hic-orbit-wrap"
        style={{ position: "relative", width: `${CONTAINER_PX}px`, height: `${CONTAINER_PX}px`, zIndex: 2 }}
      >

        {/* ── z=1 — SVG connector lines ── */}
        <ConnectorLines />

        {/*
          ── z=2 — Rotating glow ring ──
          Positioned with margin (NOT transform) so it does NOT create a
          stacking context that would compete with the circle's z-index 20.
          The inner div carries the rotation animation.
        */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            marginTop: `-${RING_R_PX}px`,    // -(148/2) = -74px
            marginLeft: `-${RING_R_PX}px`,
            width:  `${RING_DIAM_PX}px`,      // 148px
            height: `${RING_DIAM_PX}px`,
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <div
            className="hic-glow-ring"
            style={{
              width: "100%", height: "100%",
              borderRadius: "50%",
              background: "conic-gradient(from 0deg, #8B5CF6 0%, #EC4899 30%, rgba(255,255,255,0.04) 55%, #A855F7 80%, #8B5CF6 100%)",
              /* Punch a hole in the center so only the outer ring is visible.
                 Cutout radius (64px) is slightly smaller than the circle (66px)
                 so the ring hides cleanly under the circle. */
              WebkitMaskImage: "radial-gradient(circle, transparent 64px, black 67px)",
              maskImage:       "radial-gradient(circle, transparent 64px, black 67px)",
            }}
          />
        </div>

        {/*
          ── z=20 — Center circle: COMPLETELY STATIC, no animation ──
          This is the highest z-index in the container. It covers the
          center of every connector line so no line is ever visible
          through or over the logo.
          Positioned with margin (NOT transform) — no stacking context
          created by the wrapper itself; z-index applies cleanly.
        */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            marginTop:  `-${CIRCLE_R_PX}px`,   // -66px
            marginLeft: `-${CIRCLE_R_PX}px`,
            width:  `${CIRCLE_DIAM_PX}px`,      // 132px
            height: `${CIRCLE_DIAM_PX}px`,
            borderRadius: "50%",
            background: "#ffffff",
            border: "2px solid rgba(139,92,246,0.18)",
            boxShadow: "0 20px 60px rgba(124,58,237,0.18), 0 0 0 1px rgba(139,92,246,0.08)",
            overflow: "hidden",
            zIndex: 20,
          }}
        >
          {/* Logo fills the entire circle — background-image never drifts */}
          <div style={{
            width: "100%", height: "100%",
            backgroundImage: "url('/logo.jpeg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }} />
        </div>

        {/* ── z=10 — Static service pills sticking to the line ── */}
        {PILLS.map((pill) => {
          const pos = pillPos(pill.angleDeg);
          const { Icon } = pill;
          return (
            <Link
              key={pill.label}
              href={pill.href}
              className="glass-card-fintech fintech-gradient-border hic-static-pill"
              style={{
                position: "absolute",
                top: pos.top, left: pos.left,
                transform: "translate(-50%,-50%)",
                padding: "8px 14px", borderRadius: "50px",
                display: "inline-flex", alignItems: "center", gap: "7px",
                whiteSpace: "nowrap",
                zIndex: 10, pointerEvents: "auto",
                textDecoration: "none",
              }}
            >
              <Icon size={13} color={pill.color} aria-hidden="true" />
              <span style={{ fontSize: "12px", color: "white", fontWeight: 600, fontFamily: "Sora, sans-serif" }}>
                {pill.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* ── MOBILE fallback: 2-column pill grid ── */}
      <div
        className="hic-mobile-grid"
        style={{
          display: "none",
          flexWrap: "wrap", justifyContent: "center", gap: "10px",
          width: "100%", marginTop: "24px",
          position: "relative", zIndex: 10,
        }}
      >
        {PILLS.map((pill) => {
          const { Icon } = pill;
          return (
            <Link
              key={pill.label}
              href={pill.href}
              className="glass-card-fintech fintech-gradient-border"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "8px 14px", borderRadius: "50px", whiteSpace: "nowrap",
                textDecoration: "none",
              }}
            >
              <Icon size={12} color={pill.color} aria-hidden="true" />
              <span style={{ fontSize: "12px", color: "white", fontWeight: 600, fontFamily: "Sora, sans-serif" }}>
                {pill.label}
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
