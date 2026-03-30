"use client";

import { useState } from "react";

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200/80">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left transition-colors"
      >
        <span className="pr-8 text-[15px] font-semibold text-gray-900 sm:text-base">
          {question}
        </span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 text-sm text-gray-400 transition-all duration-300 ${
            open
              ? "rotate-45 border-[#7C3AED] bg-[#7C3AED] text-white"
              : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-48 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-[1.9] text-gray-500">{answer}</p>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "無料トライアル中に機能制限はありますか？",
    answer:
      "いいえ、14日間の無料トライアルではProプランのすべての機能をご利用いただけます。トライアル終了後、Freeプランに自動的に切り替わりますので、意図しない課金は発生しません。",
  },
  {
    question: "既存のツールからデータを移行できますか？",
    answer:
      "はい、Trello・Asana・Jira・Notionからのインポート機能をご用意しています。CSVインポートにも対応しているため、ほとんどのツールからスムーズに移行できます。",
  },
  {
    question: "セキュリティ対策について教えてください。",
    answer:
      "すべてのデータは暗号化して保存されます。SOC2 Type II認証取得済みで、2要素認証・IPアドレス制限・監査ログなど、エンタープライズグレードのセキュリティ機能を提供しています。",
  },
  {
    question: "途中でプランを変更することはできますか？",
    answer:
      "はい、いつでもプランのアップグレード・ダウングレードが可能です。アップグレードは即時反映、ダウングレードは次の請求サイクルから適用されます。",
  },
  {
    question: "API連携は可能ですか？",
    answer:
      "はい、REST APIとWebhookをご用意しています。Slack・GitHub・Figmaなど、主要な外部ツールとのネイティブ連携も標準で対応しています。",
  },
];

export function FaqSection() {
  return (
    <div>
      {faqs.map((faq) => (
        <FaqItem
          key={faq.question}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}
