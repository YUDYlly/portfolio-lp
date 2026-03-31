"use client";

import { useState } from "react";

interface FaqAccordionProps {
  faqs: { q: string; a: string }[];
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-0">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={i}
            className="border-b border-[#B76E79]/[.08] first:border-t"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="group flex w-full items-center gap-5 py-6 text-left transition-colors duration-200 sm:py-8"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-sm font-normal text-[#B76E79]/40 sm:text-base">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-serif text-[15px] font-normal tracking-wide text-[#2d2926]/70 transition-colors duration-200 group-hover:text-[#2d2926] sm:text-base">
                {faq.q}
              </span>
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center text-[#B76E79]/40 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-400 ease-in-out ${
                isOpen ? "max-h-96 pb-8" : "max-h-0"
              }`}
            >
              <p className="pl-10 text-[13px] leading-[2.2] font-light text-[#2d2926]/45 sm:pl-12">
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
