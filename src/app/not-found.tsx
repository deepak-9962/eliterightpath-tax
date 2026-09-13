import Link from "next/link";
import { ArrowLeft, Home, FileText } from "lucide-react";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(160deg, #0B0614 0%, #160B27 60%, #1A0B30 100%)",
        color: "white",
        padding: "120px 24px 80px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "560px", margin: "0 auto" }}>
        <span
          style={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(64px, 12vw, 110px)",
            lineHeight: 1,
            display: "block",
            background: "linear-gradient(135deg, #C084FC 0%, #FDB515 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "16px",
          }}
        >
          404
        </span>

        <h1
          style={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(22px, 3.5vw, 32px)",
            color: "#FFFFFF",
            marginBottom: "16px",
          }}
        >
          Page Not Found
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "rgba(255, 255, 255, 0.7)",
            lineHeight: 1.7,
            marginBottom: "36px",
          }}
        >
          The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let us help you find the right path.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            justifyContent: "center",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",
              color: "#FFFFFF",
              padding: "12px 24px",
              borderRadius: "50px",
              fontWeight: 700,
              fontSize: "14px",
              fontFamily: "Sora, sans-serif",
              textDecoration: "none",
              boxShadow: "0 4px 18px rgba(124, 58, 237, 0.35)",
            }}
          >
            <Home size={16} /> Back to Home
          </Link>
          <Link
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              color: "#FFFFFF",
              padding: "12px 24px",
              borderRadius: "50px",
              fontWeight: 600,
              fontSize: "14px",
              fontFamily: "Sora, sans-serif",
              textDecoration: "none",
            }}
          >
            <FileText size={16} /> View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
