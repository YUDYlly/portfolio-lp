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
      className={`fixed right-0 bottom-0 left-0 z-50 border-t border-[#1E3A5F]/20 bg-white/95 px-5 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-500 sm:right-6 sm:bottom-6 sm:left-auto sm:w-auto sm:rounded-2xl sm:border sm:border-[#E67E22]/30 sm:bg-[#1E3A5F]/95 sm:px-0 sm:py-0 sm:shadow-[0_8px_40px_rgba(30,58,95,0.4)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      {/* Mobile: full-width bar */}
      <div className="sm:hidden">
        <a
          href="#contact"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#E67E22] py-3.5 text-sm font-bold text-white shadow-[0_0_24px_rgba(230,126,34,0.3)]"
        >
          <span>&#9742;</span>
          無料お見積り・ご相談
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
      </div>
      {/* Desktop: compact floating button */}
      <a
        href="#contact"
        className="hidden items-center gap-3 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#E67E22] sm:flex"
      >
        <span className="text-lg">&#9742;</span>
        <span>
          無料お見積り
          <span className="mt-0.5 block text-[10px] font-normal tracking-wider text-white/60">
            お気軽にご相談ください
          </span>
        </span>
        <svg
          className="ml-1 h-4 w-4 text-[#E67E22] transition-colors group-hover:text-white"
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
