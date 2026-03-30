"use client";

import { useEffect, useState } from "react";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
      }`}
    >
      {/* Main CTA */}
      <a
        href="#cta"
        className="flex items-center gap-3 rounded-2xl bg-[#D4AF37] px-5 py-3.5 text-[#09090b] shadow-[0_4px_24px_rgba(212,175,55,0.35)] transition-all duration-300 hover:bg-[#e8c84a] hover:shadow-[0_4px_32px_rgba(212,175,55,0.5)]"
      >
        <div>
          <p className="text-[10px] font-medium opacity-80">かんたんWeb予約</p>
          <p className="text-sm font-bold">無料体験を予約する</p>
        </div>
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </a>
      {/* Sub buttons */}
      <div className="flex gap-2">
        <a
          href="tel:03-1234-5678"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white shadow-lg ring-1 ring-white/10 backdrop-blur-md transition hover:bg-white/20"
          aria-label="電話"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
