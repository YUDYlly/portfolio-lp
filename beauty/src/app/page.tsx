import type { Metadata } from "next";
import Image from "next/image";
import { FloatingCTA } from "@/components/floating-cta";
import { FadeIn } from "@/components/fade-in";
import { MobileMenu } from "@/components/mobile-menu";
import { FaqAccordion } from "@/components/faq-accordion";
import { HeroSlider } from "@/components/hero-slider";
import { MarqueeBand } from "@/components/marquee-band";

export const metadata: Metadata = {
  title: "LUMINE CLINIC | 美容クリニック - あなたの美しさを、科学で。",
  description:
    "LUMINE CLINICは15,000件以上の症例実績を持つ美容クリニックです。女性院長による丁寧なカウンセリングと最新機器で、あなたの美を科学的にサポートします。無料カウンセリング受付中。",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const concerns = [
  {
    title: "しみ・くすみ",
    desc: "年齢とともに増えたしみやくすみが気になり、ファンデーションで隠す毎日。",
  },
  {
    title: "しわ・たるみ",
    desc: "ほうれい線や目元の小じわが目立ち始め、鏡を見るたびにため息。",
  },
  {
    title: "毛穴の開き",
    desc: "鼻や頬の毛穴が目立ち、スキンケアだけでは限界を感じている。",
  },
  {
    title: "肌のハリ不足",
    desc: "弾力が失われ、疲れた印象に。内側からふっくらとしたハリを取り戻したい。",
  },
];

const treatments = [
  {
    num: "01",
    title: "医療脱毛",
    subtitle: "Medical Hair Removal",
    desc: "厚生労働省認可の最新医療レーザーを使用。痛みを最小限に抑えながら、高い脱毛効果を実現します。全身から部位別まで、あなたに合ったプランをご提案。肌質・毛質に応じた出力調整で、敏感肌の方もご安心ください。",
    duration: "施術時間：60〜120分",
  },
  {
    num: "02",
    title: "ヒアルロン酸注入",
    subtitle: "Hyaluronic Acid Injection",
    desc: "自然な仕上がりにこだわったヒアルロン酸注入で、気になるしわやほうれい線を改善。院長自らが施術を担当し、お顔のバランスを見ながら最適な注入量と部位をご提案します。",
    duration: "施術時間：15〜30分",
  },
  {
    num: "03",
    title: "フォトフェイシャル",
    subtitle: "Photo Facial",
    desc: "IPL（光治療）でしみ・くすみ・赤ら顔を改善。ダウンタイムが少なく、施術直後からメイクが可能です。回数を重ねるごとに肌のトーンが均一に整い、透明感のある素肌へ導きます。",
    duration: "施術時間：20〜30分",
  },
  {
    num: "04",
    title: "ダーマペン",
    subtitle: "Dermapen",
    desc: "極細の針で肌に微細な穴を開け、肌本来の再生力を引き出す治療法。毛穴の開き・ニキビ跡・小じわの改善に効果的。成長因子を含む美容液との併用で、さらに高い効果が期待できます。",
    duration: "施術時間：30〜60分",
  },
];

const promises = [
  {
    num: "01",
    title: "女性院長による\n丁寧なカウンセリング",
    desc: "美容外科・皮膚科の専門医資格を持つ女性院長が、初回から施術まで一貫して担当。女性ならではの視点で、あなたの理想をきめ細やかにヒアリングします。",
  },
  {
    num: "02",
    title: "最新の医療機器を完備",
    desc: "厚生労働省認可の医療機器を中心に、安全性と効果を両立した最新設備を導入。エビデンスに基づいた治療を提供します。",
  },
  {
    num: "03",
    title: "完全個室で\nプライバシーを確保",
    desc: "カウンセリングから施術まで完全個室で対応。周囲を気にせず、リラックスしてお過ごしいただけます。",
  },
];

const cases = [
  {
    label: "しみ治療（フォトフェイシャル 5回）",
    age: "40代女性",
    period: "3ヶ月",
    comment:
      "長年悩んでいた頬のしみが薄くなり、ファンデーションの厚塗りが不要に。肌全体のトーンも明るくなりました。",
  },
  {
    label: "ほうれい線（ヒアルロン酸注入）",
    age: "50代女性",
    period: "即日",
    comment:
      "自然な仕上がりで、周囲にも気づかれずに若々しい印象に。「最近元気そうだね」と言われるようになりました。",
  },
  {
    label: "毛穴改善（ダーマペン 4回）",
    age: "30代女性",
    period: "2ヶ月",
    comment:
      "鼻周りの毛穴が目立たなくなり、すっぴんに自信が持てるように。肌のハリも出て、メイクのりが格段に良くなりました。",
  },
];

const priceList = [
  { name: "医療脱毛（全身）", price: "198,000", note: "5回コース" },
  { name: "医療脱毛（VIO）", price: "89,800", note: "5回コース" },
  { name: "ヒアルロン酸注入", price: "49,800", note: "1本" },
  { name: "フォトフェイシャル", price: "15,800", note: "1回" },
  { name: "ダーマペン", price: "19,800", note: "1回（全顔）" },
  { name: "ボトックス注入", price: "29,800", note: "1部位" },
];

const faqs = [
  {
    q: "初めてでも大丈夫ですか？",
    a: "はい、当院の患者様の約60%が美容クリニック初めての方です。初回カウンセリングでは院長が丁寧にご説明いたしますので、不安なことは何でもお気軽にご相談ください。",
  },
  {
    q: "痛みはありますか？",
    a: "施術によって異なりますが、痛みを最小限に抑えるよう配慮しております。必要に応じて麻酔クリームや冷却装置を使用し、快適に施術をお受けいただけるよう努めています。",
  },
  {
    q: "ダウンタイムはどのくらいですか？",
    a: "施術内容によって異なります。フォトフェイシャルはほぼダウンタイムなし、ヒアルロン酸は数日程度の軽い腫れが出る場合があります。詳しくはカウンセリング時にご説明いたします。",
  },
  {
    q: "支払い方法は選べますか？",
    a: "現金・各種クレジットカード・医療ローンに対応しております。医療ローンは最大60回までの分割が可能です。料金についてもお気軽にご相談ください。",
  },
  {
    q: "予約のキャンセルはできますか？",
    a: "前日の18時までのキャンセル・変更は無料で承ります。当日キャンセルの場合は施術料金の50%をいただいておりますので、予めご了承ください。",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function BeautyPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#2d2926] selection:bg-[#B76E79]/20 selection:text-[#2d2926]">
      {/* ===== Nav — floating top-right (Orchidée style, no header bar) ===== */}
      <nav className="fixed top-0 right-0 z-50 hidden items-center gap-8 px-8 py-6 md:flex">
        {[
          { label: "Treatment", href: "#menu" },
          { label: "Doctor", href: "#doctor" },
          { label: "Price", href: "#pricing" },
          { label: "Access", href: "#access" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[12px] tracking-wider text-black transition-colors duration-300 hover:text-black/50"
          >
            {link.label}
          </a>
        ))}
      </nav>
      {/* Mobile menu */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <MobileMenu
          links={[
            { label: "施術メニュー", href: "#menu" },
            { label: "院長紹介", href: "#doctor" },
            { label: "料金", href: "#pricing" },
            { label: "アクセス", href: "#access" },
            { label: "ご予約・ご相談", href: "#cta" },
          ]}
          accentColor="#B76E79"
          theme="light"
        />
      </div>

      {/* ===== 1. Hero — Orchidée-style editorial ===== */}
      <section className="relative min-h-[100dvh] overflow-hidden bg-white">
        {/* Brand name — massive, flush left, near top */}
        <div className="absolute top-4 left-0 z-20 pl-3 sm:top-6 sm:pl-6 lg:top-8 lg:pl-8">
          <FadeIn>
            <h1 className="font-serif text-[5rem] leading-[0.88] font-normal text-black sm:text-[8rem] lg:text-[10rem] xl:text-[12rem]">
              <span className="italic">Lumine</span>
              <br />
              <span className="italic">Clinic</span>
            </h1>
          </FadeIn>
        </div>

        {/* Subtitle block — directly below brand name, shifted right */}
        <div className="absolute top-[46%] left-[5%] z-20 sm:top-[44%] sm:left-[6%] lg:top-[42%] lg:left-[8%]">
          <FadeIn delay={300}>
            <div className="max-w-sm px-6 py-5 sm:max-w-md">
              <p className="font-serif text-lg leading-relaxed font-normal text-black sm:text-xl">
                あなたの美しさを、科学で。
              </p>
              <p className="mt-3 text-[12px] leading-[2] font-normal text-black/70">
                15,000件以上の症例実績。女性院長が、一人ひとりに寄り添います。
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator — left edge, vertically centered */}
        <div className="absolute top-1/2 left-3 z-20 hidden -translate-y-1/2 lg:block">
          <p className="origin-center -rotate-90 whitespace-nowrap text-[9px] tracking-[.25em] text-black">
            ( please scroll down )
          </p>
        </div>

        {/* Hero images — scroll-triggered crossfade, two identical images side by side */}
        <div className="absolute top-[12%] right-0 bottom-0 left-[42%] hidden overflow-hidden lg:block">
          <HeroSlider />
        </div>

        {/* Mobile: Single hero image */}
        <div className="relative mt-[60vh] h-[40vh] lg:hidden">
          <Image
            src="/images/hero-1.webp"
            alt="LUMINE CLINIC"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      {/* ===== Marquee Band ===== */}
      <MarqueeBand />

      {/* ===== 2. Brand Philosophy ===== */}
      <section className="bg-white py-32 sm:py-40 lg:py-48">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <FadeIn>
            <span className="mb-4 block text-[11px] font-normal tracking-[.35em] text-[#B76E79]/50 uppercase">
              Philosophy
            </span>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="mb-10 font-serif text-[1.75rem] font-light leading-snug tracking-wide sm:text-3xl lg:text-[2.25rem]">
              美しさは、自信になる。
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-sm leading-[2.4] font-light text-[#2d2926]/50 sm:text-[15px]">
              私たちは、一人ひとりの「なりたい自分」に真摯に向き合います。
              <br />
              エビデンスに基づいた確かな医療技術と、女性ならではのきめ細やかな視点。
              <br />
              その両方を大切にしながら、あなた本来の美しさを引き出すお手伝いをしています。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== Gallery — Orchidée-style scattered images on dark bg ===== */}
      <section className="relative overflow-hidden bg-[#1a2a3a]">
        <div className="relative mx-auto min-h-[110vh] max-w-[1600px] lg:min-h-[120vh]">
          {/* Brand name — centered, large white */}
          <h2 className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 font-serif text-[5rem] italic font-normal text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] sm:text-[8rem] lg:text-[12rem] xl:text-[14rem]">
            Lumine
          </h2>

          {/* Background layer: 白い蘭密集 — behind everything */}
          <div className="absolute -right-[5%] top-[15%] w-[35%] overflow-hidden opacity-40">
            <Image src="/images/gallery-5.webp" alt="" width={800} height={1067} className="w-full" />
          </div>

          {/* Top-left: 蘭マクロ（ブルーグレー） */}
          <div className="absolute -left-[3%] top-[18%] z-[2] w-[28%] overflow-hidden">
            <Image src="/images/gallery-6.webp" alt="" width={800} height={1067} className="w-full" />
          </div>

          {/* Top-center-left: 座り姿 × 花 */}
          <div className="absolute left-[20%] top-[0%] z-[2] w-[30%] overflow-hidden">
            <Image src="/images/gallery-7.webp" alt="" width={800} height={1067} className="w-full" />
          </div>

          {/* Top-right: モデル × 蘭 × 製品 */}
          <div className="absolute right-[5%] top-[6%] z-[2] w-[32%] overflow-hidden">
            <Image src="/images/gallery-1.webp" alt="" width={800} height={1067} className="w-full" />
          </div>

          {/* Bottom-left: ショートヘアモデル */}
          <div className="absolute bottom-[0%] left-[1%] w-[35%] overflow-hidden">
            <Image src="/images/gallery-2.webp" alt="" width={800} height={600} className="w-full" />
          </div>

          {/* Bottom-center: プリズム光 */}
          <div className="absolute bottom-[0%] left-[40%] w-[28%] overflow-hidden">
            <Image src="/images/gallery-3.webp" alt="" width={800} height={1067} className="w-full" />
          </div>

          {/* Bottom-right: 横顔 × 花びら */}
          <div className="absolute bottom-[10%] right-[0%] w-[26%] overflow-hidden">
            <Image src="/images/gallery-4.webp" alt="" width={800} height={800} className="w-full" />
          </div>
        </div>
      </section>

      {/* ===== 3. Concerns ===== */}
      <section className="bg-[#faf7f2] py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <FadeIn>
            <span className="mb-4 block text-center text-[11px] font-normal tracking-[.35em] text-[#B76E79]/50 uppercase">
              Concerns
            </span>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="mb-20 text-center font-serif text-[1.75rem] font-light leading-snug tracking-wide sm:mb-24 sm:text-3xl lg:text-[2.25rem]">
              こんなお悩み、ありませんか？
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-8">
            {concerns.map((c, i) => (
              <FadeIn key={i} delay={150 + i * 100}>
                <div className="group">
                  <div className="mb-6 h-px w-full bg-[#B76E79]/15" />
                  <h3 className="mb-3 font-serif text-lg font-normal tracking-wide">
                    {c.title}
                  </h3>
                  <p className="text-[13px] leading-[2] font-light text-[#2d2926]/45">
                    {c.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. Treatment Menu ===== */}
      <section id="menu" className="bg-white py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <FadeIn>
            <span className="mb-4 block text-center text-[11px] font-normal tracking-[.35em] text-[#B76E79]/50 uppercase">
              Treatment
            </span>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="mb-20 text-center font-serif text-[1.75rem] font-light leading-snug tracking-wide sm:mb-28 sm:text-3xl lg:text-[2.25rem]">
              施術メニュー
            </h2>
          </FadeIn>

          <div className="space-y-24 sm:space-y-32 lg:space-y-40">
            {treatments.map((t, i) => (
              <FadeIn key={i} delay={100}>
                <div className="grid grid-cols-1 items-center gap-10 sm:gap-14 md:grid-cols-2 lg:gap-20">
                  {/* Image placeholder */}
                  <div
                    className={i % 2 === 0 ? "md:order-1" : "md:order-2"}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#faf7f2] to-[#f0e6df]">
                      {/* TODO: Replace with actual image */}
                      <Image
                        src={`/images/treatment-${t.num}.webp`}
                        alt={t.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div
                    className={i % 2 === 0 ? "md:order-2" : "md:order-1"}
                  >
                    <span className="mb-4 block font-serif text-5xl font-light text-[#B76E79]/15 lg:text-6xl">
                      {t.num}
                    </span>
                    <h3 className="mb-2 font-serif text-2xl font-normal tracking-wide">
                      {t.title}
                    </h3>
                    <span className="mb-6 block text-[11px] tracking-[.3em] text-[#2d2926]/30 uppercase">
                      {t.subtitle}
                    </span>
                    <p className="mb-6 text-[13px] leading-[2.2] font-light text-[#2d2926]/50">
                      {t.desc}
                    </p>
                    <span className="inline-block rounded-full border border-[#B76E79]/15 px-4 py-1.5 text-[11px] tracking-wider text-[#B76E79]/60">
                      {t.duration}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. Three Promises ===== */}
      <section className="bg-[#faf7f2] py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <FadeIn>
            <span className="mb-4 block text-center text-[11px] font-normal tracking-[.35em] text-[#B76E79]/50 uppercase">
              Promise
            </span>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="mb-20 text-center font-serif text-[1.75rem] font-light leading-snug tracking-wide sm:mb-24 sm:text-3xl lg:text-[2.25rem]">
              LUMINE CLINICの3つの約束
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-10 lg:gap-14">
            {promises.map((p, i) => (
              <FadeIn key={i} delay={150 + i * 120}>
                <div className="text-center md:text-left">
                  <span className="mb-5 block font-serif text-6xl font-light text-[#B76E79]/10 lg:text-7xl">
                    {p.num}
                  </span>
                  <h3 className="mb-4 whitespace-pre-line font-serif text-lg font-normal leading-relaxed tracking-wide">
                    {p.title}
                  </h3>
                  <div className="mx-auto mb-5 h-px w-10 bg-[#B76E79]/20 md:mx-0" />
                  <p className="text-[13px] leading-[2.2] font-light text-[#2d2926]/45">
                    {p.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. Doctor Introduction ===== */}
      <section id="doctor" className="bg-white py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <FadeIn>
            <span className="mb-4 block text-center text-[11px] font-normal tracking-[.35em] text-[#B76E79]/50 uppercase">
              Doctor
            </span>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="mb-20 text-center font-serif text-[1.75rem] font-light leading-snug tracking-wide sm:mb-24 sm:text-3xl lg:text-[2.25rem]">
              院長紹介
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
              {/* Portrait */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-[#faf7f2] to-[#f0e6df]">
                {/* TODO: Replace with actual image */}
                <Image
                  src="/images/doctor.webp"
                  alt="院長 白石 美咲"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Profile */}
              <div>
                <span className="mb-2 block text-[11px] tracking-[.3em] text-[#2d2926]/30 uppercase">
                  Director
                </span>
                <h3 className="mb-2 font-serif text-2xl font-normal tracking-wide">
                  白石 美咲
                </h3>
                <span className="mb-8 block text-[12px] tracking-wider text-[#2d2926]/40">
                  Misaki Shiraishi, M.D.
                </span>

                <ul className="mb-10 space-y-2 text-[13px] leading-relaxed text-[#2d2926]/50">
                  <li>日本美容外科学会 専門医</li>
                  <li>日本皮膚科学会 認定皮膚科専門医</li>
                  <li>東京大学医学部 卒業</li>
                  <li>都内大手美容クリニック 勤務を経て当院開設</li>
                </ul>

                <div className="border-l-2 border-[#B76E79]/20 pl-6">
                  <p className="font-serif text-[14px] italic leading-[2.2] text-[#2d2926]/60">
                    &ldquo;美容医療は、外見を変えることではなく、内面の自信を引き出すこと。
                    お一人おひとりの「なりたい自分」に寄り添い、
                    最善の治療をご提案することが、私の使命です。&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 7. Cases / Results ===== */}
      <section className="bg-[#faf7f2] py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <FadeIn>
            <span className="mb-4 block text-center text-[11px] font-normal tracking-[.35em] text-[#B76E79]/50 uppercase">
              Cases
            </span>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="mb-20 text-center font-serif text-[1.75rem] font-light leading-snug tracking-wide sm:mb-24 sm:text-3xl lg:text-[2.25rem]">
              症例のご紹介
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {cases.map((c, i) => (
              <FadeIn key={i} delay={150 + i * 100}>
                <div className="rounded-2xl border border-[#B76E79]/[.08] bg-white p-8 transition-all duration-300 hover:border-[#B76E79]/15 sm:p-10">
                  {/* Before / After placeholder */}
                  <div className="mb-8 flex gap-3">
                    <div className="relative flex-1">
                      <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-[#f5f0eb] to-[#ede4db]">
                        {/* TODO: Replace with actual image */}
                        <Image
                          src={`/images/case-${i + 1}-before.webp`}
                          alt={`${c.label} Before`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="absolute bottom-2 left-2 rounded-full bg-white/80 px-2 py-0.5 text-[9px] tracking-wider text-[#2d2926]/50 backdrop-blur-sm">
                        Before
                      </span>
                    </div>
                    <div className="relative flex-1">
                      <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-[#faf7f2] to-[#f0e6df]">
                        {/* TODO: Replace with actual image */}
                        <Image
                          src={`/images/case-${i + 1}-after.webp`}
                          alt={`${c.label} After`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="absolute bottom-2 left-2 rounded-full bg-white/80 px-2 py-0.5 text-[9px] tracking-wider text-[#2d2926]/50 backdrop-blur-sm">
                        After
                      </span>
                    </div>
                  </div>

                  <h3 className="mb-3 font-serif text-[15px] font-normal tracking-wide">
                    {c.label}
                  </h3>

                  <div className="mb-4 flex items-center gap-3 text-[11px] text-[#2d2926]/35">
                    <span>{c.age}</span>
                    <span className="h-3 w-px bg-[#2d2926]/15" />
                    <span>期間：{c.period}</span>
                  </div>

                  <p className="text-[13px] leading-[2] font-light text-[#2d2926]/50">
                    {c.comment}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. Price Table ===== */}
      <section id="pricing" className="bg-white py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <FadeIn>
            <span className="mb-4 block text-center text-[11px] font-normal tracking-[.35em] text-[#B76E79]/50 uppercase">
              Price
            </span>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="mb-4 text-center font-serif text-[1.75rem] font-light leading-snug tracking-wide sm:text-3xl lg:text-[2.25rem]">
              料金一覧
            </h2>
          </FadeIn>

          <FadeIn delay={150}>
            <p className="mb-16 text-center text-[12px] tracking-wider text-[#2d2926]/35 sm:mb-20">
              すべて税込表示です
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="overflow-hidden rounded-2xl border border-[#B76E79]/[.06]">
              {priceList.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-6 py-5 sm:px-8 sm:py-6 ${
                    i % 2 === 0 ? "bg-white" : "bg-[#faf7f2]/50"
                  } ${
                    i < priceList.length - 1
                      ? "border-b border-[#B76E79]/[.06]"
                      : ""
                  }`}
                >
                  <div>
                    <span className="text-[14px] tracking-wide text-[#2d2926]/70">
                      {item.name}
                    </span>
                    {item.note && (
                      <span className="ml-2 text-[11px] text-[#2d2926]/30">
                        ({item.note})
                      </span>
                    )}
                  </div>
                  <span className="font-serif text-lg font-normal tracking-wide text-[#2d2926] sm:text-xl">
                    &yen;{item.price}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 9. FAQ ===== */}
      <section className="bg-[#faf7f2] py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <FadeIn>
            <span className="mb-4 block text-center text-[11px] font-normal tracking-[.35em] text-[#B76E79]/50 uppercase">
              FAQ
            </span>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="mb-20 text-center font-serif text-[1.75rem] font-light leading-snug tracking-wide sm:mb-24 sm:text-3xl lg:text-[2.25rem]">
              よくあるご質問
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <FaqAccordion faqs={faqs} />
          </FadeIn>
        </div>
      </section>

      {/* ===== 10. Access ===== */}
      <section id="access" className="bg-white py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <FadeIn>
            <span className="mb-4 block text-center text-[11px] font-normal tracking-[.35em] text-[#B76E79]/50 uppercase">
              Access
            </span>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="mb-20 text-center font-serif text-[1.75rem] font-light leading-snug tracking-wide sm:mb-24 sm:text-3xl lg:text-[2.25rem]">
              アクセス
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Map placeholder */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#f5f0eb] to-[#ede4db] lg:aspect-auto lg:min-h-[400px]">
                {/* TODO: Replace with actual Google Maps embed or static map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="mx-auto mb-3 h-8 w-8 text-[#B76E79]/30"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-[11px] tracking-wider text-[#2d2926]/30">
                      Map
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center">
                <dl className="space-y-8">
                  <div>
                    <dt className="mb-2 text-[11px] tracking-[.2em] text-[#B76E79]/50 uppercase">
                      Address
                    </dt>
                    <dd className="text-[14px] leading-relaxed text-[#2d2926]/60">
                      〒150-0001
                      <br />
                      東京都渋谷区神宮前4-12-8
                      <br />
                      表参道ヒルズ West 5F
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-2 text-[11px] tracking-[.2em] text-[#B76E79]/50 uppercase">
                      Hours
                    </dt>
                    <dd className="text-[14px] leading-relaxed text-[#2d2926]/60">
                      月〜金 10:00 - 19:00
                      <br />
                      土・祝 10:00 - 17:00
                      <br />
                      <span className="text-[#2d2926]/35">
                        休診日：日曜日・年末年始
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-2 text-[11px] tracking-[.2em] text-[#B76E79]/50 uppercase">
                      Station
                    </dt>
                    <dd className="text-[14px] leading-relaxed text-[#2d2926]/60">
                      東京メトロ表参道駅 A2出口より徒歩3分
                      <br />
                      JR原宿駅 表参道口より徒歩8分
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 11. Final CTA ===== */}
      <section id="cta" className="bg-[#faf7f2] py-32 sm:py-40 lg:py-48">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <FadeIn>
            <h2 className="mb-6 font-serif text-[1.75rem] font-light leading-snug tracking-wide sm:text-3xl lg:text-[2.25rem]">
              まずは、お気軽にご相談ください。
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="mb-12 text-sm leading-[2.2] font-light text-[#2d2926]/50 sm:text-[15px]">
              無料カウンセリングで、あなたに最適な治療プランをご提案します。
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-[#B76E79] px-10 py-4 text-sm font-medium tracking-wider text-white transition-all duration-300 hover:bg-[#a05a64] hover:shadow-[0_8px_30px_rgba(183,110,121,0.3)]"
            >
              無料カウンセリングを予約する
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
          </FadeIn>

          <FadeIn delay={300}>
            <p className="mt-8 text-[13px] tracking-wider text-[#2d2926]/35">
              <span className="mr-1">&#9742;</span>
              <a
                href="tel:03-1234-5678"
                className="transition-colors duration-300 hover:text-[#B76E79]"
              >
                03-1234-5678
              </a>
              <span className="mx-2 text-[#2d2926]/15">|</span>
              <span className="text-[11px]">受付 10:00 - 19:00</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== 12. Footer ===== */}
      <footer className="border-t border-[#B76E79]/[.06] bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <a
              href="#"
              className="font-serif text-sm font-light tracking-[.2em] text-[#B76E79]"
            >
              LUMINE CLINIC
            </a>

            <nav className="flex items-center gap-6">
              {[
                { label: "施術メニュー", href: "#menu" },
                { label: "院長紹介", href: "#doctor" },
                { label: "料金", href: "#pricing" },
                { label: "アクセス", href: "#access" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[11px] tracking-wider text-[#2d2926]/30 transition-colors duration-300 hover:text-[#B76E79]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <p className="mt-10 text-center text-[10px] tracking-wider text-[#2d2926]/20">
            &copy; 2024 LUMINE CLINIC. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ===== Floating CTA ===== */}
      <FloatingCTA />
    </div>
  );
}
