"use client";

import { useEffect, useRef, useState } from "react";

export function ParallaxPhotos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsets, setOffsets] = useState<number[]>([0, 0, 0, 0, 0]);

  useEffect(() => {
    const speeds = [0.03, 0.05, 0.02, 0.04, 0.035];

    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = -rect.top;
      setOffsets(speeds.map((s) => scrolled * s));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const photos = [
    {
      className: "top-[5%] left-[3%] w-[30%] sm:w-[25%]",
      aspect: "aspect-[4/3]",
      gradient: "from-[#1E3A5F]/20 via-[#e8ddd0] to-[#c4b8a8]",
      overlay: (
        <svg className="h-full w-full opacity-20" viewBox="0 0 120 90">
          <rect x="10" y="30" width="40" height="50" rx="2" fill="currentColor" />
          <polygon points="10,30 30,10 50,30" fill="currentColor" />
          <rect x="70" y="40" width="30" height="40" rx="2" fill="currentColor" />
          <rect x="22" y="50" width="8" height="12" rx="1" fill="white" opacity="0.5" />
          <rect x="36" y="50" width="8" height="12" rx="1" fill="white" opacity="0.5" />
        </svg>
      ),
      speed: 0,
    },
    {
      className: "top-[8%] right-[5%] w-[22%] sm:w-[20%]",
      aspect: "aspect-[3/4]",
      gradient: "from-[#E67E22]/15 via-[#f0ede8] to-[#e8ddd0]",
      overlay: (
        <svg className="h-full w-full opacity-20" viewBox="0 0 90 120">
          <rect x="15" y="10" width="60" height="100" rx="3" fill="currentColor" />
          <rect x="25" y="20" width="12" height="10" rx="1" fill="white" opacity="0.4" />
          <rect x="45" y="20" width="12" height="10" rx="1" fill="white" opacity="0.4" />
          <rect x="25" y="40" width="12" height="10" rx="1" fill="white" opacity="0.4" />
          <rect x="45" y="40" width="12" height="10" rx="1" fill="white" opacity="0.4" />
          <rect x="25" y="60" width="12" height="10" rx="1" fill="white" opacity="0.4" />
          <rect x="45" y="60" width="12" height="10" rx="1" fill="white" opacity="0.4" />
          <rect x="35" y="90" width="16" height="20" rx="2" fill="white" opacity="0.3" />
        </svg>
      ),
      speed: 1,
    },
    {
      className: "top-[42%] left-[-2%] w-[28%] sm:w-[22%]",
      aspect: "aspect-[4/3]",
      gradient: "from-[#1E3A5F]/15 via-[#ddd8cf] to-[#c8c0b5]",
      overlay: (
        <svg className="h-full w-full opacity-15" viewBox="0 0 120 90">
          <line x1="20" y1="80" x2="100" y2="80" stroke="currentColor" strokeWidth="3" />
          <line x1="30" y1="80" x2="30" y2="40" stroke="currentColor" strokeWidth="4" />
          <line x1="90" y1="80" x2="90" y2="40" stroke="currentColor" strokeWidth="4" />
          <line x1="25" y1="40" x2="95" y2="40" stroke="currentColor" strokeWidth="3" />
          <line x1="55" y1="40" x2="55" y2="20" stroke="currentColor" strokeWidth="3" />
          <line x1="65" y1="40" x2="65" y2="20" stroke="currentColor" strokeWidth="3" />
          <line x1="50" y1="20" x2="70" y2="20" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      speed: 2,
    },
    {
      className: "top-[55%] right-[3%] w-[26%] sm:w-[20%]",
      aspect: "aspect-square",
      gradient: "from-[#E67E22]/12 via-[#ebe6dd] to-[#1E3A5F]/10",
      overlay: (
        <svg className="h-full w-full opacity-15" viewBox="0 0 100 100">
          <rect x="10" y="20" width="35" height="70" rx="2" fill="currentColor" />
          <rect x="55" y="35" width="35" height="55" rx="2" fill="currentColor" />
          <rect x="18" y="30" width="8" height="6" rx="1" fill="white" opacity="0.4" />
          <rect x="30" y="30" width="8" height="6" rx="1" fill="white" opacity="0.4" />
          <rect x="18" y="44" width="8" height="6" rx="1" fill="white" opacity="0.4" />
          <rect x="30" y="44" width="8" height="6" rx="1" fill="white" opacity="0.4" />
          <rect x="63" y="45" width="8" height="6" rx="1" fill="white" opacity="0.4" />
          <rect x="75" y="45" width="8" height="6" rx="1" fill="white" opacity="0.4" />
        </svg>
      ),
      speed: 3,
    },
    {
      className: "bottom-[5%] left-[12%] w-[32%] sm:w-[24%]",
      aspect: "aspect-[16/9]",
      gradient: "from-[#1E3A5F]/12 via-[#e0dbd3] to-[#E67E22]/10",
      overlay: (
        <svg className="h-full w-full opacity-15" viewBox="0 0 160 90">
          <path d="M10 80 L40 80 L40 40 L50 35 L60 40 L60 80 L90 80 L90 50 L100 45 L110 50 L110 80 L150 80" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="80" cy="25" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="10" y1="80" x2="150" y2="80" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      speed: 4,
    },
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {photos.map((p, i) => (
        <div
          key={i}
          className={`absolute ${p.className} overflow-hidden rounded-lg opacity-60 sm:opacity-70`}
          style={{
            transform: `translateY(${offsets[p.speed]}px)`,
            transition: "transform 0.1s linear",
          }}
        >
          <div
            className={`${p.aspect} bg-gradient-to-br ${p.gradient} relative flex items-center justify-center text-[#1E3A5F]`}
          >
            {p.overlay}
          </div>
        </div>
      ))}
    </div>
  );
}
