"use client";

import React, { useRef, useEffect, useState, CSSProperties, ReactNode } from "react";

type AnimVariant = "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn" | "fadeIn";

interface AnimatedProps {
  children: ReactNode;
  variant?: AnimVariant;
  delay?: number;       // ms
  duration?: number;    // ms
  className?: string;
  style?: CSSProperties;
  as?: React.ElementType;
  threshold?: number;
}

const variants: Record<AnimVariant, { from: CSSProperties; to: CSSProperties }> = {
  fadeUp: {
    from: { opacity: 0, transform: "translateY(32px)" },
    to:   { opacity: 1, transform: "translateY(0)" },
  },
  fadeLeft: {
    from: { opacity: 0, transform: "translateX(-40px)" },
    to:   { opacity: 1, transform: "translateX(0)" },
  },
  fadeRight: {
    from: { opacity: 0, transform: "translateX(40px)" },
    to:   { opacity: 1, transform: "translateX(0)" },
  },
  scaleIn: {
    from: { opacity: 0, transform: "scale(0.88)" },
    to:   { opacity: 1, transform: "scale(1)" },
  },
  fadeIn: {
    from: { opacity: 0 },
    to:   { opacity: 1 },
  },
};

export default function Animated({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 600,
  className,
  style,
  as: Tag = "div",
  threshold = 0.12,
}: AnimatedProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const { from, to } = variants[variant];

  const animStyle: CSSProperties = {
    ...style,
    transition: `opacity ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
    ...(triggered ? to : from),
  };

  return <Tag ref={ref} className={className} style={animStyle}>{children}</Tag>;
}
