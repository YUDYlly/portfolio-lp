import Image from "next/image";

const row1 = [
  { type: "text" as const, content: "あなたの美しさを、科学で。" },
  { type: "image" as const, src: "/images/product-water.webp", alt: "Lumine セラム" },
  { type: "text" as const, content: "15,000件以上の症例実績。" },
  { type: "image" as const, src: "/images/hero-2.webp", alt: "Lumine ビューティー" },
  { type: "text" as const, content: "女性院長が寄り添う美容医療。" },
  { type: "image" as const, src: "/images/product-forest.webp", alt: "Lumine オイル" },
];

const row2 = [
  { type: "text" as const, content: "女性院長が寄り添う美容医療。" },
  { type: "image" as const, src: "/images/product-collection.webp", alt: "Lumine コレクション" },
  { type: "text" as const, content: "あなたの美しさを、科学で。" },
  { type: "image" as const, src: "/images/product-milk.webp", alt: "Lumine ミルク" },
  { type: "text" as const, content: "15,000件以上の症例実績。" },
  { type: "image" as const, src: "/images/hero-1.webp", alt: "Lumine プロダクト" },
];

function MarqueeItem({ item }: { item: (typeof row1)[number] }) {
  if (item.type === "text") {
    return (
      <span className="mx-4 shrink-0 font-serif text-2xl font-light text-[#2d2926] sm:text-3xl lg:text-4xl">
        {item.content}
      </span>
    );
  }
  return (
    <span className="mx-3 inline-block h-12 w-20 shrink-0 overflow-hidden rounded-full sm:h-14 sm:w-24 lg:h-16 lg:w-28">
      <Image
        src={item.src}
        alt={item.alt}
        width={112}
        height={64}
        className="h-full w-full object-cover"
      />
    </span>
  );
}

export function MarqueeBand() {
  return (
    <div className="overflow-hidden bg-white py-6 sm:py-8 lg:py-10" aria-hidden="true">
      {/* Row 1 — left */}
      <div className="mb-4 flex whitespace-nowrap" style={{ animation: "marquee 35s linear infinite" }}>
        {[...row1, ...row1].map((item, i) => (
          <MarqueeItem key={i} item={item} />
        ))}
      </div>
      {/* Row 2 — right */}
      <div className="flex whitespace-nowrap" style={{ animation: "marquee-reverse 30s linear infinite" }}>
        {[...row2, ...row2].map((item, i) => (
          <MarqueeItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
