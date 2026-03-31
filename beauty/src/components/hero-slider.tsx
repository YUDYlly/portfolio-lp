"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/hero-1.webp", alt: "LUMINE CLINIC スキンケア製品" },
  { src: "/images/hero-2.webp", alt: "LUMINE CLINIC ビューティーポートレート" },
  { src: "/images/product-forest.webp", alt: "LUMINE CLINIC ボタニカルオイル" },
  { src: "/images/product-collection.webp", alt: "LUMINE CLINIC プロダクトコレクション" },
  { src: "/images/product-water.webp", alt: "LUMINE CLINIC ナチュラルセラム" },
  { src: "/images/product-milk.webp", alt: "LUMINE CLINIC ミルクローション" },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 flex gap-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <div className="relative aspect-[3/4] h-full shrink-0">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="30vw"
              priority={i === 0}
            />
          </div>
          <div className="relative aspect-[3/4] h-full shrink-0">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="30vw"
              priority={i === 0}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
