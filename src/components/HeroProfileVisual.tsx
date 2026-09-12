"use client";

import Image from "next/image";
import { Star, Clock, Users, FileText } from "lucide-react";

/*
  Layout:
  - Portrait: 370px × 460px (≈ 10–15% larger than previous 340×420)
  - Container: 480px wide, with overflow: visible for floating cards
  - Cards positioned editorially, NOT perfectly symmetrical
  - No card overlaps the face or name strip

  Card placement (relative to the portrait div):
    4.9 Rating  → upper-left, slightly outside the portrait left edge, near top
    500+ Clients → upper-right, outside right edge, slightly lower than rating
    3+ Years    → left-middle, roughly 42% down the portrait
    1000+ Returns → lower-right, outside right edge, near bottom
*/

const CARDS = [
  {
    id: "rating",
    label: "4.9 / 5.0",
    sub: "Client Rating",
    Icon: Star,
    iconColor: "#FBBF24",
    borderColor: "rgba(251, 191, 36, 0.28)",
    // Upper-left: outside the portrait on the left, near the top third
    pos: { top: "10%", left: "-112px" } as React.CSSProperties,
    floatDur: "4.8s",
    floatDelay: "0s",
  },
  {
    id: "clients",
    label: "500+",
    sub: "Clients Served",
    Icon: Users,
    iconColor: "#A78BFA",
    borderColor: "rgba(167, 139, 250, 0.28)",
    // Upper-right: outside the portrait on the right, top quarter
    pos: { top: "6%", right: "-108px" } as React.CSSProperties,
    floatDur: "5.2s",
    floatDelay: "0.4s",
  },
  {
    id: "experience",
    label: "3+ Years",
    sub: "Tax Advisory",
    Icon: Clock,
    iconColor: "#C084FC",
    borderColor: "rgba(192, 132, 252, 0.28)",
    // Left-middle: roughly 42% down, clear of face and name strip
    pos: { top: "42%", left: "-106px" } as React.CSSProperties,
    floatDur: "5.6s",
    floatDelay: "0.2s",
  },
  {
    id: "returns",
    label: "1,000+",
    sub: "Returns Filed",
    Icon: FileText,
    iconColor: "#4ADE80",
    borderColor: "rgba(74, 222, 128, 0.28)",
    // Lower-right: outside right edge, clear of name strip at bottom
    pos: { bottom: "20%", right: "-106px" } as React.CSSProperties,
    floatDur: "4.4s",
    floatDelay: "0.6s",
  },
] as const;

// Needed for React.CSSProperties type
import type React from "react";

export default function HeroProfileVisual() {
  return (
    <>
      <style>{`
        @keyframes hpv-float-a {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-6px); }
        }
        @keyframes hpv-float-b {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(5px); }
        }

        .hpv-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hpv-card:hover {
          transform: translateY(-4px) scale(1.03) !important;
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.5) !important;
        }

        /* Hide floating cards on tablet/mobile; show 2-col grid instead */
        @media (max-width: 1100px) {
          .hpv-card          { display: none !important; }
          .hpv-mobile-grid   { display: grid !important; }
        }
        @media (min-width: 1101px) {
          .hpv-mobile-grid   { display: none !important; }
        }

        @media (max-width: 480px) {
          .hpv-portrait-frame {
            width: min(320px, calc(100vw - 32px)) !important;
            height: min(400px, calc((100vw - 32px) * 1.25)) !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hpv-card { animation: none !important; }
        }
      `}</style>

      {/*
        Outer wrapper: wide enough for portrait + cards that hang outside.
        Portrait itself is centred inside; cards use position:absolute relative to it.
      */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        {/* ── Very subtle warm-purple depth glow behind the portrait ── */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(340px, 90vw)",
            height: "min(340px, 90vw)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.10) 0%, transparent 70%)",
            filter: "blur(52px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/*
          ── Portrait card: 370×460px.
          Position:relative so floating cards can use absolute positioning.
          overflow:visible on this outer div lets cards bleed outside the frame.
        */}
        <div
          className="hpv-portrait-frame"
          style={{
            position: "relative",
            width: "370px",
            height: "460px",
            maxWidth: "100%",
            zIndex: 2,
          }}
        >
          {/* ── Actual photo frame: clean 3–4px border, no glow ring ── */}
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "18px",
              overflow: "hidden",
              border: "3.5px solid rgba(168, 85, 247, 0.30)",
              background: "#0D0717",
              boxShadow:
                "0 24px 56px rgba(0, 0, 0, 0.55), 0 1px 8px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.04)",
            }}
          >
            <Image
              src="/raj-paudel.jpeg"
              alt="Mr. Raj Paudel — Tax Consultant, Elite Right Path"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "center 15%" }}
              sizes="(max-width: 1100px) 340px, 370px"
            />

            {/*
              Lower-third gradient: only 28% height.
              Face & upper body remain fully unobstructed.
            */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "28%",
                background:
                  "linear-gradient(to top, rgba(10, 5, 20, 0.94) 0%, rgba(10, 5, 20, 0.55) 55%, transparent 100%)",
                zIndex: 2,
              }}
            />

            {/* Name + designation — inside the gradient strip */}
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "20px",
                right: "20px",
                zIndex: 3,
              }}
            >
              <div
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 700,
                  fontSize: "17px",
                  color: "#FFFFFF",
                  letterSpacing: "-0.25px",
                  lineHeight: 1.25,
                }}
              >
                Mr. Raj Paudel
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.68)",
                  fontWeight: 500,
                  marginTop: "3px",
                }}
              >
                Proprietor &amp; Tax Consultant
              </div>
            </div>
          </div>

          {/* ── 4 editorial floating proof cards ── */}
          {CARDS.map((card, i) => {
            const { Icon } = card;
            const animName = i % 2 === 0 ? "hpv-float-a" : "hpv-float-b";
            return (
              <div
                key={card.id}
                className="hpv-card"
                style={{
                  position: "absolute",
                  ...card.pos,
                  zIndex: 8,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(14, 8, 24, 0.84)",
                  border: `1px solid ${card.borderColor}`,
                  borderRadius: "12px",
                  padding: "8px 13px",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.40)",
                  whiteSpace: "nowrap",
                  animation: `${animName} ${card.floatDur} ease-in-out ${card.floatDelay} infinite`,
                }}
              >
                <Icon size={14} color={card.iconColor} />
                <div>
                  <div
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 800,
                      fontSize: "12.5px",
                      color: "#FFFFFF",
                      lineHeight: 1.2,
                    }}
                  >
                    {card.label}
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "rgba(255,255,255,0.50)",
                      fontWeight: 500,
                      marginTop: "1px",
                    }}
                  >
                    {card.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>


        {/* ── Mobile 2×2 proof grid (hidden on desktop) ── */}
        <div
          className="hpv-mobile-grid"
          style={{
            display: "none",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
            width: "100%",
            maxWidth: "340px",
            marginTop: "12px",
            zIndex: 4,
          }}
        >
          {CARDS.map((card) => {
            const { Icon } = card;
            return (
              <div
                key={`m-${card.id}`}
                style={{
                  background: "rgba(14, 8, 24, 0.84)",
                  border: `1px solid ${card.borderColor}`,
                  borderRadius: "10px",
                  padding: "8px 10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                }}
              >
                <Icon size={12} color={card.iconColor} />
                <div>
                  <div
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 700,
                      fontSize: "11px",
                      color: "#FFF",
                    }}
                  >
                    {card.label}
                  </div>
                  <div
                    style={{
                      fontSize: "9.5px",
                      color: "rgba(255,255,255,0.48)",
                    }}
                  >
                    {card.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
