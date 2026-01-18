"use client";
import { useEffect, useRef } from "react";

export default function Parallax({ children, speed = 0.2 }: {
  children: React.ReactNode; speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY * speed;
        el.style.transform = `translateY(${y}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return <div ref={ref}>{children}</div>;
}
