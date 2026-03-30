"use client";

import { useState, useEffect } from "react";

interface MobileMenuProps {
  links: { label: string; href: string }[];
  accentColor: string;
  theme?: "dark" | "light";
}

export function MobileMenu({
  links,
  accentColor,
  theme = "dark",
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const bg = theme === "dark" ? "bg-black/95" : "bg-white/95";
  const text = theme === "dark" ? "text-white" : "text-gray-900";
  const barColor = theme === "dark" ? "bg-white" : "bg-gray-900";

  return (
    <div className="md:hidden">
      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
      >
        <span
          className={`block h-0.5 w-6 transition-all duration-300 ${barColor} ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 transition-all duration-300 ${barColor} ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 transition-all duration-300 ${barColor} ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 backdrop-blur-md transition-all duration-300 ${bg} ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-2xl font-light tracking-wider transition-colors duration-200 ${text}`}
              style={{ ["--accent" as string]: accentColor }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = accentColor)
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
