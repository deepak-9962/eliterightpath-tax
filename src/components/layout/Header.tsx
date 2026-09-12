"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

/* ─── Nav link config ─────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers",  href: "/careers" },
  { label: "FAQs",     href: "/faqs" },
  { label: "Contact",  href: "/contact" },
] as const;

/**
 * Returns true when the given href should be treated as active.
 *   - "/" matches ONLY the root (exact match).
 *   - All other hrefs match themselves AND any sub-paths
 *     (e.g. "/services" also matches "/services/gst").
 */
function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/" || pathname === "";
  return pathname === href || pathname.startsWith(href + "/");
}

/* ─── Shared style helpers ────────────────────────────────── */
const ACTIVE_BG     = "rgba(124, 58, 237, 0.13)";
const ACTIVE_BORDER = "rgba(168, 85, 247, 0.32)";
const ACTIVE_SHADOW = "0 0 0 1px rgba(124, 58, 237, 0.10), 0 4px 12px rgba(124, 58, 237, 0.12)";
const HOVER_BG      = "rgba(255, 255, 255, 0.07)";

export default function Header() {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const pathname = usePathname();

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        background: isScrolled ? "rgba(11, 6, 20, 0.88)" : "transparent",
        boxShadow: isScrolled ? "0 10px 30px rgba(0, 0, 0, 0.3)" : "none",
        borderBottom: isScrolled
          ? "1px solid rgba(255, 255, 255, 0.08)"
          : "1px solid transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "76px",
        }}
      >
        {/* ── Logo ── */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              overflow: "hidden",
              flexShrink: 0,
              background: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Image
              src="/icon.png"
              alt="Elite Right Path Tax Consultancy Logo"
              width={48}
              height={48}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
                transform: "scale(1.3)",
                transformOrigin: "center center",
              }}
            />
          </div>
          <div>
            <div
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 800,
                fontSize: "15px",
                color: "#ffffff",
                lineHeight: 1.1,
              }}
            >
              Elite Right Path
            </div>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "11px",
                color: "rgba(255, 255, 255, 0.6)",
                letterSpacing: "0.5px",
              }}
            >
              Tax Consultancy
            </div>
          </div>
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav
          aria-label="Main navigation"
          style={{ display: "flex", alignItems: "center", gap: "4px" }}
          className="nav-hidden-mobile"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "3px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: active ? 600 : 500,
                  fontSize: "14px",
                  color: active ? "#FFFFFF" : "rgba(255, 255, 255, 0.78)",
                  textDecoration: "none",
                  padding: "7px 13px",
                  borderRadius: "8px",
                  transition: "color 0.18s ease-out, background 0.18s ease-out, box-shadow 0.18s ease-out",
                  background: active ? ACTIVE_BG : "transparent",
                  border: active ? `1px solid ${ACTIVE_BORDER}` : "1px solid transparent",
                  boxShadow: active ? ACTIVE_SHADOW : "none",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.background = HOVER_BG;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.78)";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {link.label}

                {/* Small gradient underline indicator — only on active */}
                {active && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      bottom: "5px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "20px",
                      height: "2px",
                      borderRadius: "2px",
                      background: "linear-gradient(90deg, #7C3AED, #D946EF)",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ── CTA ── */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
          className="nav-hidden-mobile"
        >
          <Link
            href="/contact"
            className="btn-fintech-primary"
            style={{
              padding: "10px 24px",
              fontSize: "13.5px",
              textDecoration: "none",
            }}
          >
            Book Consultation
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            background: "rgba(255, 255, 255, 0.05)",
            color: "white",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          className="nav-mobile-btn"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── Mobile Navigation Drawer ── */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          style={{
            background: "rgba(11, 6, 20, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "16px 24px 24px",
          }}
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: active ? 600 : 500,
                  fontSize: "15px",
                  color: active ? "#FFFFFF" : "rgba(255, 255, 255, 0.78)",
                  textDecoration: "none",
                  padding: "11px 12px",
                  borderRadius: "8px",
                  marginBottom: "2px",
                  background: active ? ACTIVE_BG : "transparent",
                  border: active ? `1px solid ${ACTIVE_BORDER}` : "1px solid transparent",
                  transition: "background 0.18s ease-out, color 0.18s ease-out",
                }}
              >
                {/* Small active dot indicator for mobile */}
                <span
                  aria-hidden="true"
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: active
                      ? "linear-gradient(135deg, #7C3AED, #D946EF)"
                      : "rgba(255,255,255,0.2)",
                    transition: "background 0.18s ease-out",
                  }}
                />
                {link.label}
              </Link>
            );
          })}

          <div style={{ marginTop: "14px" }}>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-fintech-primary"
              style={{
                display: "block",
                textDecoration: "none",
                textAlign: "center",
                padding: "12px 0",
              }}
            >
              Book Consultation
            </Link>
          </div>
        </nav>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .nav-hidden-mobile { display: none !important; }
          .nav-mobile-btn    { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
