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
      className={`fixed right-5 bottom-6 z-50 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="#cta"
        className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_32px_rgba(124,58,237,0.4)] transition-all duration-300 hover:shadow-[0_8px_48px_rgba(124,58,237,0.55)] hover:scale-105"
      >
        無料で始める
        <svg
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
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
    </div>
  );
}
