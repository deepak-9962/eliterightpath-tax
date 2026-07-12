"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
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
        background: isScrolled
          ? "rgba(11, 2, 20, 0.75)"
          : "transparent",
        boxShadow: isScrolled
          ? "0 10px 30px rgba(0, 0, 0, 0.3)"
          : "none",
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
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              overflow: "hidden",
              border: "1.5px solid rgba(255, 255, 255, 0.15)",
              flexShrink: 0,
            }}
          >
            <Image
              src="/logo.jpeg"
              alt="Elite Right Path Tax Consultancy Logo"
              width={44}
              height={44}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
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

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "14.5px",
                color: "rgba(255, 255, 255, 0.8)",
                textDecoration: "none",
                padding: "8px 14px",
                borderRadius: "8px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
          className="hidden-mobile"
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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
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
          className="mobile-menu-btn"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div
          className="mobile-nav-open"
          style={{
            background: "rgba(11, 2, 20, 0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "16px 24px 24px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                color: "rgba(255, 255, 255, 0.8)",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                transition: "color 0.2s ease",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-fintech-primary"
              style={{ flex: 1, justifyContent: "center", textDecoration: "none", textAlign: "center", padding: "12px 0" }}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
