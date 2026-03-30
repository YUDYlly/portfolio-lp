"use client";

import { useEffect, useState } from "react";

/**
 * CSS-only fade slider for the hero background.
 * Mimics the Splide.js fade transition from mizota-ks.com
 * using 3 gradient-based placeholder "images" with opacity cycling.
 */
export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const total = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    // Slide 1: warm gradient (residential)
    "linear-gradient(135deg, #2c3e50 0%, #34495e 40%, #1a252f 100%)",
    // Slide 2: cool gradient (commercial)
    "linear-gradient(135deg, #1a3a4a 0%, #2c5364 40%, #0f2027 100%)",
    // Slide 3: earthy gradient (public works)
    "linear-gradient(135deg, #3e2723 0%, #4e342e 40%, #1b1210 100%)",
  ];

  return (
    <div className="absolute inset-0">
      {slides.map((bg, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{
            background: bg,
            opacity: current === i ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
}
