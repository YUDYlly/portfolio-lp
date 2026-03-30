import type { Metadata } from "next";
import Image from "next/image";
import { FloatingCTA } from "@/components/floating-cta";
import { FadeIn } from "@/components/fade-in";
import { MobileMenu } from "@/components/mobile-menu";

export const metadata: Metadata = {
  title: "FORGE | パーソナルジム - 理想の体を、最短で。",
  description:
    "完全マンツーマンのパーソナルトレーニングジムFORGE。食事指導付き・駅徒歩3分。まずは無料体験から。",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const worries = [
  {
    num: "01",
    title: "自己流では限界を感じている",
    desc: "YouTubeやSNSの情報を試しても、なかなか結果が出ない。正しいフォームも分からず、怪我のリスクも不安。",
  },
  {
    num: "02",
    title: "忙しくて続かない",
    desc: "仕事帰りに通いたいけど、時間の融通がきくジムが見つからない。予約が取れないストレスも。",
  },
  {
    num: "03",
    title: "食事管理がわからない",
    desc: "トレーニングだけでなく、食事もプロに見てほしい。何をどれだけ食べればいいか分からない。",
  },
  {
    num: "04",
    title: "ジムの雰囲気が苦手",
    desc: "大人数のジムは周りの目が気になって集中できない。初心者でも安心できる環境がほしい。",
  },
];

const strengths = [
  {
    num: "01",
    title: "完全マンツーマン指導",
    desc: "お客様1人に対しトレーナー1人。周りを気にせず、あなただけに集中した指導を行います。フォームの修正から精神面のケアまで、すべてが1対1だからこそ可能です。",
    image: "/images/strength-01.webp",
    alt: "マンツーマンでのトレーニング指導",
  },
  {
    num: "02",
    title: "食事指導付き",
    desc: "LINEでの毎日の食事報告に対し、管理栄養士監修のフィードバックを提供。無理のない食事改善をサポートし、リバウンドしない体を目指します。",
    image: "/images/strength-02.webp",
    alt: "管理栄養士監修の食事指導",
  },
  {
    num: "03",
    title: "駅徒歩3分の好立地",
    desc: "渋谷駅南口から徒歩3分。仕事帰りや休日でも通いやすいアクセスの良さが魅力。ウェアやシューズの貸出もあるので手ぶらでOK。",
    image: "/images/strength-03.webp",
    alt: "駅近のジム外観",
  },
];

const results = [
  {
    name: "T.K さん（30代男性）",
    period: "3ヶ月",
    weight: "78kg → 65kg",
    fat: "25% → 15%",
    comment: "スーツが2サイズダウン。会社の健康診断もオールAに。",
  },
  {
    name: "M.S さん（20代女性）",
    period: "2ヶ月",
    weight: "58kg → 50kg",
    fat: "30% → 22%",
    comment: "結婚式までに理想の体型に。ドレス選びが楽しくなりました。",
  },
  {
    name: "Y.H さん（40代男性）",
    period: "4ヶ月",
    weight: "85kg → 72kg",
    fat: "28% → 18%",
    comment: "人生で初めて腹筋が割れました。自信がつきました。",
  },
];

const plans = [
  {
    name: "ライト",
    sessions: "月4回",
    price: "29,800",
    features: [
      "1回50分のパーソナルトレーニング",
      "食事指導（週1回フィードバック）",
      "トレーニングウェア貸出",
    ],
    popular: false,
  },
  {
    name: "スタンダード",
    sessions: "月8回",
    price: "49,800",
    features: [
      "1回50分のパーソナルトレーニング",
      "食事指導（毎日フィードバック）",
      "トレーニングウェア・シューズ貸出",
      "プロテイン1杯無料",
    ],
    popular: true,
  },
  {
    name: "プレミアム",
    sessions: "通い放題",
    price: "79,800",
    features: [
      "1回50分のパーソナルトレーニング",
      "食事指導（毎日フィードバック）",
      "全レンタル無料",
      "プロテイン飲み放題",
      "月1回 InBody測定",
    ],
    popular: false,
  },
];

const voices = [
  {
    name: "佐藤 真由美",
    age: "32歳・会社員",
    avatar: "/images/voice-01.webp",
    comment:
      "運動が苦手でしたが、トレーナーさんが丁寧に教えてくれるので楽しく続けられています。3ヶ月で-8kgを達成できました！",
    stars: 5,
  },
  {
    name: "田中 健太",
    age: "45歳・経営者",
    avatar: "/images/voice-02.webp",
    comment:
      "忙しくても通いやすい立地と、柔軟な予約システムが助かります。体力がつき、仕事のパフォーマンスも上がりました。",
    stars: 5,
  },
  {
    name: "鈴木 あかり",
    age: "28歳・看護師",
    avatar: "/images/voice-03.webp",
    comment:
      "食事指導が本当に役立ちました。無理なく食生活を改善でき、リバウンドの心配もありません。一生モノの知識です。",
    stars: 5,
  },
];

/* ------------------------------------------------------------------ */
/*  Subcomponents                                                      */
/* ------------------------------------------------------------------ */

function SectionLabel({ en, ja }: { en: string; ja: React.ReactNode }) {
  return (
    <div className="mb-12 sm:mb-16">
      <span className="mb-3 block font-mono text-[11px] font-semibold tracking-[.35em] text-[#D4AF37]/70 uppercase">
        {en}
      </span>
      <h2 className="text-3xl font-extrabold leading-snug tracking-tight sm:text-4xl lg:text-[2.75rem]">
        {ja}
      </h2>
    </div>
  );
}

function SectionLabelCenter({ en, ja }: { en: string; ja: React.ReactNode }) {
  return (
    <div className="mb-12 text-center sm:mb-16">
      <span className="mb-3 block font-mono text-[11px] font-semibold tracking-[.35em] text-[#D4AF37]/70 uppercase">
        {en}
      </span>
      <h2 className="text-3xl font-extrabold leading-snug tracking-tight sm:text-4xl lg:text-[2.75rem]">
        {ja}
      </h2>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function GymPage() {
  return (
    <div className="min-h-screen bg-[#09090b] font-sans text-white selection:bg-[#D4AF37]/30 selection:text-white">
      {/* ===== Header / Nav (Fixed, backdrop-blur) ===== */}
      <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/[.06] bg-[#09090b]/70 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <span className="text-xl font-black tracking-[.3em] text-[#D4AF37]">
            FORGE
          </span>
          <nav className="hidden items-center gap-8 md:flex">
            {[
              { label: "選ばれる理由", href: "#why" },
              { label: "ビフォーアフター", href: "#results" },
              { label: "料金", href: "#pricing" },
              { label: "アクセス", href: "#access" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-xs tracking-wider text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#cta"
            className="hidden rounded-full bg-[#D4AF37] px-6 py-2.5 text-sm font-bold text-[#09090b] transition-all duration-300 hover:bg-[#e8c84a] hover:shadow-[0_0_24px_rgba(212,175,55,0.4)] md:inline-flex"
          >
            無料体験はこちら
          </a>
          <MobileMenu
            links={[
              { label: "選ばれる理由", href: "#why" },
              { label: "ビフォーアフター", href: "#results" },
              { label: "料金", href: "#pricing" },
              { label: "アクセス", href: "#access" },
              { label: "無料体験はこちら", href: "#cta" },
            ]}
            accentColor="#D4AF37"
            theme="dark"
          />
        </div>
      </header>

      {/* ===== 1. Hero: Full-screen video bg + centered text ===== */}
      <section className="relative h-[100dvh] overflow-hidden">
        {/* Background: hero image (fallback) + video */}
        <Image
          src="/images/hero.webp"
          alt="FORGEのトレーニング風景"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/images/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/60 via-[#09090b]/40 to-[#09090b]" />
        {/* Gold ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_40%,_rgba(212,175,55,0.06)_0%,_transparent_70%)]" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 py-28 text-center">
          <p className="mb-5 font-mono text-[11px] font-semibold tracking-[.5em] text-[#D4AF37]/80 uppercase sm:text-xs">
            Personal Training Gym
          </p>
          <h1 className="mb-6 text-[2.25rem] font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            理想の体を、<span className="bg-gradient-to-r from-[#D4AF37] via-[#f0d060] to-[#D4AF37] bg-clip-text text-transparent">最短で。</span>
          </h1>
          <p className="mb-8 text-sm text-zinc-300 sm:text-base">
            完全マンツーマン × 食事指導で、あなたの目標達成を最短ルートで実現。
          </p>

          {/* Tags */}
          <ul className="mb-10 flex flex-wrap justify-center gap-2">
            {["完全マンツーマン", "食事指導付き", "駅徒歩3分", "手ぶらOK"].map(
              (tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[.06] px-4 py-1.5 text-xs font-medium text-[#D4AF37]/90 backdrop-blur-sm"
                >
                  {tag}
                </li>
              )
            )}
          </ul>

          {/* CTA */}
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-10 py-4 text-base font-bold text-[#09090b] shadow-[0_0_48px_rgba(212,175,55,0.3)] transition-all duration-300 hover:bg-[#e8c84a] hover:shadow-[0_0_64px_rgba(212,175,55,0.5)] hover:scale-[1.03]"
          >
            無料体験に申し込む
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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

          {/* Stats */}
          <div className="mt-14 flex flex-wrap justify-center gap-10 sm:gap-16">
            {[
              { num: "1,000", unit: "名+", label: "指導実績" },
              { num: "96", unit: "%", label: "目標達成率" },
              { num: "4.9", unit: "", label: "口コミ評価" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-black tabular-nums text-white sm:text-3xl">
                  {s.num}
                  <span className="text-base text-[#D4AF37]">{s.unit}</span>
                </p>
                <p className="mt-0.5 text-[10px] tracking-wider text-zinc-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ===== Marquee Band ===== */}
      <div className="overflow-hidden border-y border-white/[.04] bg-[#09090b] py-5" aria-hidden="true">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="mx-6 font-mono text-5xl font-black tracking-wider text-white/[.04] sm:text-6xl lg:text-7xl"
            >
              FORGE &times; TRANSFORM &times; RESULTS &times; POWER &times;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ===== 2. 悩みセクション (2x2 Grid) ===== */}
      <section className="bg-[#111113] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <SectionLabelCenter
              en="WORRIES"
              ja={
                <>
                  こんな<span className="text-[#D4AF37]">お悩み</span>
                  ありませんか？
                </>
              }
            />
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mx-auto -mt-6 mb-14 max-w-md text-center text-sm leading-relaxed text-zinc-500 sm:mb-16">
              一つでも当てはまるなら、FORGEがお力になれます。
            </p>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {worries.map((w, i) => (
              <FadeIn key={i} delay={150 + i * 100}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/[.06] bg-white/[.02] p-7 backdrop-blur-sm transition-all duration-500 hover:border-[#D4AF37]/20 hover:bg-white/[.04] hover:shadow-[0_8px_40px_rgba(212,175,55,0.06)] sm:p-8">
                  {/* Gold left accent bar */}
                  <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37]/40 to-[#D4AF37]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {/* Number */}
                  <span className="mb-4 block font-mono text-[11px] tracking-[.3em] text-[#D4AF37]/40">
                    {w.num}
                  </span>
                  <h3 className="mb-3 text-lg font-bold leading-snug">{w.title}</h3>
                  <p className="text-[13px] leading-[2] text-zinc-400">{w.desc}</p>
                  {/* Background number watermark */}
                  <span className="absolute -right-2 -bottom-4 font-mono text-[120px] font-black leading-none text-white/[.015] select-none">
                    {w.num}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. 選ばれる理由 (Alternating Layout) ===== */}
      <section id="why" className="bg-[#09090b] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <SectionLabelCenter
              en="WHY FORGE?"
              ja={
                <>
                  FORGEが選ばれる
                  <span className="text-[#D4AF37]">3つの理由</span>
                </>
              }
            />
          </FadeIn>

          <div className="space-y-20 sm:space-y-32">
            {strengths.map((s, i) => (
              <FadeIn key={i} delay={100}>
                <div
                  className={`grid grid-cols-1 items-center gap-8 sm:gap-12 md:grid-cols-2 lg:gap-16`}
                >
                  {/* Image placeholder */}
                  <div
                    className={`${
                      i % 2 === 0 ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="relative">
                      <div
                        className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_8px_40px_rgba(212,175,55,0.08),0_0_80px_rgba(212,175,55,0.04)] ring-1 ring-white/[.06] transition-transform duration-500 hover:scale-[1.02]"
                      >
                        <Image
                          src={s.image}
                          alt={s.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Text */}
                  <div
                    className={`${
                      i % 2 === 0 ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37]/10 font-mono text-sm font-bold text-[#D4AF37]">
                      {s.num}
                    </span>
                    <h3 className="mt-3 mb-5 text-2xl font-bold sm:text-[1.75rem] lg:text-3xl">
                      {s.title}
                    </h3>
                    <p className="max-w-md text-sm leading-[2] text-zinc-400">
                      {s.desc}
                    </p>
                    <div className="mt-6 h-px w-16 bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Marquee Band 2 ===== */}
      <div className="overflow-hidden border-y border-white/[.04] bg-[#0e0e10] py-4" aria-hidden="true">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="mx-6 font-mono text-4xl font-black tracking-wider text-white/[.04] sm:text-5xl"
            >
              BEFORE &times; AFTER &times; CHANGE &times; PROGRESS &times;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ===== 4. ビフォーアフター ===== */}
      <section id="results" className="bg-[#111113] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <SectionLabelCenter
              en="RESULTS"
              ja={
                <>
                  お客様の<span className="text-[#D4AF37]">変化</span>
                </>
              }
            />
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-3 sm:gap-7">
            {results.map((r, i) => (
              <FadeIn key={i} delay={100 + i * 120}>
                <div className="group h-full overflow-hidden rounded-3xl border border-white/[.06] bg-white/[.02] transition-all duration-300 hover:scale-[1.03] hover:border-[#D4AF37]/20 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
                  {/* Before/After visual */}
                  <div className="flex h-56 items-end justify-center gap-5 bg-gradient-to-br from-[#18181b] to-[#111113] px-6 pb-6">
                    <div className="flex flex-col items-center">
                      <span className="mb-2 font-mono text-[10px] tracking-wider text-zinc-600 uppercase">
                        Before
                      </span>
                      <div className="relative aspect-[3/4] w-16 overflow-hidden rounded-2xl ring-1 ring-white/[.06]">
                        <Image src="/images/before.webp" alt="Before" fill className="object-cover" sizes="64px" />
                      </div>
                    </div>
                    <div className="mb-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37]/10 text-sm text-[#D4AF37]">
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
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="mb-2 font-mono text-[10px] tracking-wider text-[#D4AF37]/60 uppercase">
                        After
                      </span>
                      <div className="relative aspect-[3/4] w-16 overflow-hidden rounded-2xl ring-1 ring-[#D4AF37]/30">
                        <Image src="/images/after.webp" alt="After" fill className="object-cover" sizes="64px" />
                      </div>
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="mb-3 text-sm font-bold text-[#D4AF37]">
                      {r.name}
                    </p>
                    <div className="mb-5 flex flex-wrap gap-2 text-[13px]">
                      {[
                        `${r.period}`,
                        `${r.weight}`,
                        `体脂肪 ${r.fat}`,
                      ].map((tag, ti) => (
                        <span
                          key={ti}
                          className="rounded-full bg-white/[.04] px-3 py-1 text-zinc-400 ring-1 ring-white/[.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm leading-[1.8] text-zinc-400">
                      {r.comment}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. トレーナー紹介 (Image Left + Profile Right) ===== */}
      <section className="bg-[#09090b] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <SectionLabelCenter
              en="TRAINER"
              ja={
                <>
                  トレーナー<span className="text-[#D4AF37]">紹介</span>
                </>
              }
            />
          </FadeIn>

          <FadeIn delay={150}>
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
              {/* Photo placeholder */}
              <div className="relative mx-auto max-w-sm md:mx-0">
                <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/[.06]">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/images/trainer.webp"
                      alt="ヘッドトレーナー 山田 翔太"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 384px"
                    />
                  </div>
                </div>
                {/* Decorative offset border */}
                <div className="absolute -top-3 -right-3 -z-10 h-full w-full rounded-3xl border border-[#D4AF37]/15" />
              </div>
              {/* Profile */}
              <div className="text-center md:text-left">
                <p className="mb-1 font-mono text-[11px] tracking-[.2em] text-[#D4AF37]/60">
                  HEAD TRAINER
                </p>
                <h3 className="mb-1 text-3xl font-black sm:text-4xl">
                  山田 翔太
                </h3>
                <p className="mb-8 text-sm text-zinc-500">
                  FORGE 代表トレーナー
                </p>
                <ul className="mb-8 space-y-3 text-sm text-zinc-400">
                  {[
                    "NSCA-CPT（全米認定パーソナルトレーナー）",
                    "NESTA-PFT 取得",
                    "指導実績 1,000 名以上",
                    "ボディビル大会 入賞経験あり",
                  ].map((q, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[10px] text-[#D4AF37]">
                        &#10003;
                      </span>
                      {q}
                    </li>
                  ))}
                </ul>
                <blockquote className="relative rounded-2xl border-l-2 border-[#D4AF37]/30 bg-white/[.02] px-6 py-5 text-sm leading-[2] text-zinc-300 italic">
                  <span className="absolute -top-3 left-4 text-3xl text-[#D4AF37]/20">&ldquo;</span>
                  体を変えることは、人生を変えること。私自身、トレーニングによって自信を手に入れました。お客様一人ひとりの目標に寄り添い、最短で結果を出すお手伝いをします。一緒に理想の自分を&#8220;鍛造&#8221;しましょう。
                </blockquote>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 6. 料金プラン ===== */}
      <section id="pricing" className="bg-[#111113] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <SectionLabelCenter
              en="PRICING"
              ja={
                <>
                  料金<span className="text-[#D4AF37]">プラン</span>
                </>
              }
            />
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mx-auto -mt-6 mb-14 max-w-md text-center text-sm leading-relaxed text-zinc-500 sm:mb-16">
              すべてのプランに入会金 ¥30,000（税込）が含まれます。
              <br />
              <span className="font-semibold text-[#D4AF37]">
                今なら無料体験後の入会で入会金 0 円。
              </span>
            </p>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-3 sm:gap-5 lg:gap-7">
            {plans.map((p, i) => (
              <FadeIn key={i} delay={150 + i * 100}>
                <div
                  className={`group relative h-full overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] ${
                    p.popular
                      ? "border-[#D4AF37]/40 bg-gradient-to-b from-[#D4AF37]/[.08] to-white/[.02] shadow-[0_0_40px_rgba(212,175,55,0.08)]"
                      : "border-white/[.06] bg-white/[.02] hover:border-white/[.12]"
                  }`}
                >
                  {p.popular && (
                    <span className="absolute top-5 right-5 rounded-full bg-[#D4AF37] px-3.5 py-1 text-[11px] font-bold text-[#09090b] shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                      人気 No.1
                    </span>
                  )}
                  <p className="mb-1 text-[13px] text-zinc-500">{p.sessions}</p>
                  <h3 className="mb-6 text-xl font-bold">{p.name}</h3>
                  <p className="mb-8">
                    <span className="text-xs text-zinc-500">月額</span>
                    <br />
                    <span className="text-4xl font-black tabular-nums tracking-tight text-[#D4AF37] sm:text-[2.5rem]">
                      ¥{p.price}
                    </span>
                    <span className="ml-1 text-xs text-zinc-500">（税込）</span>
                  </p>
                  <ul className="mb-9 space-y-3">
                    {p.features.map((f, fi) => (
                      <li
                        key={fi}
                        className="flex items-start gap-2.5 text-[13px] text-zinc-300"
                      >
                        <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[10px] text-[#D4AF37]">
                          &#10003;
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#cta"
                    className={`block rounded-full py-3.5 text-center text-sm font-bold transition-all duration-300 ${
                      p.popular
                        ? "bg-[#D4AF37] text-[#09090b] hover:bg-[#e8c84a] hover:shadow-[0_0_24px_rgba(212,175,55,0.4)]"
                        : "border border-[#D4AF37]/30 text-[#D4AF37] hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/10"
                    }`}
                  >
                    このプランで体験する
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. お客様の声 ===== */}
      <section className="bg-[#09090b] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <SectionLabelCenter
              en="VOICE"
              ja={
                <>
                  お客様の<span className="text-[#D4AF37]">声</span>
                </>
              }
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-3 sm:gap-7">
            {voices.map((v, i) => (
              <FadeIn key={i} delay={100 + i * 100}>
                <div className="group flex h-full flex-col rounded-3xl border border-white/[.06] bg-white/[.02] p-7 transition-all duration-300 hover:border-[#D4AF37]/20 hover:bg-white/[.04] hover:shadow-[0_8px_40px_rgba(212,175,55,0.06)] hover:scale-[1.03] sm:p-8">
                  {/* Stars */}
                  <div className="mb-4 flex gap-1 text-[#D4AF37]">
                    {Array.from({ length: v.stars }).map((_, si) => (
                      <svg
                        key={si}
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-6 flex-1 text-[13px] leading-[2] text-zinc-300">
                    &ldquo;{v.comment}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 border-t border-white/[.06] pt-5">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image src={v.avatar} alt={v.name} fill className="object-cover" sizes="40px" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{v.name}</p>
                      <p className="text-[11px] text-zinc-500">{v.age}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. アクセス ===== */}
      <section id="access" className="bg-[#111113] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <SectionLabelCenter en="ACCESS" ja="アクセス" />
          </FadeIn>

          <FadeIn delay={150}>
            <div className="overflow-hidden rounded-3xl border border-white/[.06] bg-white/[.02]">
              {/* Map */}
              <div className="relative aspect-[16/7] min-h-[14rem]">
                <Image
                  src="/images/map.webp"
                  alt="FORGEのアクセスマップ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1024px"
                />
              </div>
              <div className="grid gap-8 p-8 sm:grid-cols-3 sm:p-10">
                <div>
                  <h3 className="mb-3 font-mono text-[11px] font-semibold tracking-[.2em] text-[#D4AF37]/70">
                    ADDRESS
                  </h3>
                  <p className="text-sm leading-[2] text-zinc-300">
                    〒150-0002
                    <br />
                    東京都渋谷区渋谷3丁目1-1
                    <br />
                    FORGEビル 4F
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-mono text-[11px] font-semibold tracking-[.2em] text-[#D4AF37]/70">
                    HOURS
                  </h3>
                  <ul className="space-y-1.5 text-sm text-zinc-300">
                    <li className="flex justify-between">
                      <span>平日</span>
                      <span className="tabular-nums">7:00 - 23:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>土日祝</span>
                      <span className="tabular-nums">9:00 - 21:00</span>
                    </li>
                    <li className="text-[11px] text-zinc-500">
                      定休日：なし（年末年始を除く）
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 font-mono text-[11px] font-semibold tracking-[.2em] text-[#D4AF37]/70">
                    STATION
                  </h3>
                  <p className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[11px] text-[#D4AF37]">
                      🚃
                    </span>
                    JR / 東京メトロ / 東急
                    <br />
                    渋谷駅 南口より徒歩3分
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 9. CTA ===== */}
      <section id="cta" className="relative bg-[#09090b] py-24 sm:py-32 lg:py-40">
        {/* Glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,_rgba(212,175,55,0.08)_0%,_transparent_70%)]" />
        {/* Decorative lines */}
        <div className="absolute top-12 left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        <div className="absolute bottom-12 left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

        <div className="relative mx-auto max-w-2xl px-5 text-center">
          <FadeIn>
            <SectionLabelCenter
              en="FREE TRIAL"
              ja={
                <>
                  まずは<span className="text-[#D4AF37]">無料体験</span>から
                </>
              }
            />
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mx-auto -mt-4 mb-10 max-w-md text-sm leading-[1.9] text-zinc-400">
              60分の無料体験トレーニングで、
              <br className="sm:hidden" />
              FORGEの指導を実感してください。
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <a
              href="#"
              className="group relative mx-auto inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-14 py-5 text-base font-bold text-[#09090b] shadow-[0_0_48px_rgba(212,175,55,0.3)] transition-all duration-300 hover:bg-[#e8c84a] hover:shadow-[0_0_72px_rgba(212,175,55,0.45)] hover:scale-[1.05]"
            >
              無料体験に申し込む
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
            <p className="mt-4 text-[11px] text-zinc-500">
              無理な勧誘は一切ありません
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="mt-12 border-t border-white/[.06] pt-10">
              <p className="mb-2 text-[11px] tracking-wider text-zinc-500">
                お電話でのお問い合わせ
              </p>
              <a
                href="tel:03-1234-5678"
                className="inline-block text-2xl font-black tabular-nums tracking-wider text-white transition-colors duration-300 hover:text-[#D4AF37] sm:text-3xl"
              >
                03-1234-5678
              </a>
              <p className="mt-2 text-[11px] text-zinc-500">
                受付時間 10:00 - 20:00（年中無休）
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 10. Footer ===== */}
      <footer className="border-t border-white/[.06] bg-[#09090b] py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="mb-1 text-lg font-black tracking-[.3em] text-[#D4AF37]">
                FORGE
              </p>
              <p className="text-[11px] leading-relaxed text-zinc-600">
                パーソナルトレーニングジム
              </p>
            </div>
            <div className="flex items-center gap-6">
              {["Instagram", "X", "LINE"].map((sns) => (
                <a
                  key={sns}
                  href="#"
                  className="relative text-[11px] tracking-wider text-zinc-500 transition-colors duration-300 hover:text-[#D4AF37] group"
                >
                  {sns}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t border-white/[.04] pt-6 text-center">
            <p className="text-[10px] text-zinc-700">
              &copy; {new Date().getFullYear()} FORGE Personal Training Gym. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ===== Floating CTA ===== */}
      <FloatingCTA />
    </div>
  );
}
