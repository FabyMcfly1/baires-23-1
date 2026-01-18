"use client";
import { useRef } from "react";

export default function Hover3D({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = ((y / r.height) - 0.5) * -8;
    const ry = ((x / r.width) - 0.5) * 8;
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  }
  function reset() {
    ref.current!.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
  }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset}
      className="transition-transform duration-200 will-change-transform">
      {children}
    </div>
  );
}
