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
      className={`fixed right-0 bottom-0 left-0 z-50 border-t border-[#B76E79]/20 bg-white/90 px-5 py-3 backdrop-blur-xl transition-all duration-500 sm:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="#cta"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#B76E79] py-3.5 text-sm font-medium tracking-wider text-white shadow-[0_4px_20px_rgba(183,110,121,0.35)] transition-colors duration-300 hover:bg-[#c4838d]"
      >
        無料カウンセリングを予約する
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
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
