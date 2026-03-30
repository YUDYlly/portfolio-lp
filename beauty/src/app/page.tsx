import type { Metadata } from "next";
import { FloatingCTA } from "@/components/floating-cta";
import { FadeIn } from "@/components/fade-in";
import { MobileMenu } from "@/components/mobile-menu";

export const metadata: Metadata = {
  title: "LUMINE CLINIC | 美容クリニック - あなたの美しさを、科学で。",
  description:
    "LUMINE CLINICは15,000件以上の症例実績を持つ美容クリニックです。女性院長による丁寧なカウンセリングと最新機器で、あなたの美を科学的にサポートします。無料カウンセリング受付中。",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const worries = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="8" cy="10" r="1" fill="currentColor" />
        <circle cx="14" cy="9" r="0.5" fill="currentColor" />
        <circle cx="16" cy="13" r="0.7" fill="currentColor" />
      </svg>
    ),
    title: "しみ・くすみ",
    desc: "年齢とともに増えたしみやくすみが気になり、ファンデーションで隠すのが大変になってきた。",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M4 20c2-4 4-8 8-8s6 4 8 8" />
        <path d="M6 16c1-2 2.5-5 6-5s5 3 6 5" />
      </svg>
    ),
    title: "しわ・たるみ",
    desc: "ほうれい線や目元の小じわが目立ち始め、鏡を見るたびにため息が出てしまう。",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="6" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="9" strokeDasharray="1 3" />
      </svg>
    ),
    title: "毛穴の開き",
    desc: "鼻や頬の毛穴が目立ち、メイクをしても隠しきれない。スキンケアだけでは限界を感じている。",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 3c-4 0-7 3-7 7 0 5 7 11 7 11s7-6 7-11c0-4-3-7-7-7z" />
        <path d="M12 7v4M10 9h4" />
      </svg>
    ),
    title: "ハリ不足",
    desc: "肌の弾力が失われ、疲れた印象に見られがち。内側からふっくらとしたハリを取り戻したい。",
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

const features = [
  {
    num: "01",
    title: "女性院長による\n丁寧なカウンセリング",
    desc: "美容外科・皮膚科の専門医資格を持つ女性院長が、初回から施術まで一貫して担当。女性ならではの視点で、あなたの理想をきめ細やかにヒアリングします。",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "最新の医療機器を\n完備",
    desc: "常に最新の医療機器を導入し、エビデンスに基づいた治療を提供。安全性と効果を両立させた、確かな美容医療をお届けします。",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "完全個室で\nプライバシーを確保",
    desc: "カウンセリングから施術、パウダールームまですべて完全個室。他の患者様と顔を合わせることなく、リラックスした空間でお過ごしいただけます。",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const cases = [
  {
    label: "しみ治療（フォトフェイシャル 5回）",
    age: "40代女性",
    period: "3ヶ月",
    comment: "長年悩んでいた頬のしみが薄くなり、ファンデーションの厚塗りが不要に。肌全体のトーンも明るくなりました。",
  },
  {
    label: "ほうれい線（ヒアルロン酸注入）",
    age: "50代女性",
    period: "即日",
    comment: "自然な仕上がりで、周囲にも気づかれずに若々しい印象に。「最近元気そうだね」と言われるようになりました。",
  },
  {
    label: "毛穴改善（ダーマペン 4回）",
    age: "30代女性",
    period: "2ヶ月",
    comment: "鼻周りの毛穴が目立たなくなり、すっぴんに自信が持てるように。肌のハリも出て、メイクのりが格段に良くなりました。",
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
/*  Subcomponents                                                      */
/* ------------------------------------------------------------------ */

function SectionLabelCenter({ en, ja }: { en: string; ja: React.ReactNode }) {
  return (
    <div className="mb-16 text-center sm:mb-20">
      <span className="mb-3 block text-[11px] font-normal tracking-[.35em] text-[#B76E79]/60 uppercase">
        {en}
      </span>
      <h2 className="font-serif text-[1.75rem] font-light leading-snug tracking-wide sm:text-3xl lg:text-[2.25rem]">
        {ja}
      </h2>
    </div>
  );
}

function Divider() {
  return (
    <div className="flex justify-center py-1">
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#B76E79]/30 to-transparent" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function BeautyPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#2d2926] selection:bg-[#B76E79]/20 selection:text-[#2d2926]">
      {/* ===== Header (Fixed, backdrop-blur, white base) ===== */}
      <header className="fixed top-0 right-0 left-0 z-50 border-b border-[#B76E79]/[.08] bg-white/80 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <span className="text-lg font-light tracking-[.25em] text-[#B76E79]">
            LUMINE CLINIC
          </span>
          <nav className="hidden items-center gap-8 md:flex">
            {[
              { label: "施術メニュー", href: "#menu" },
              { label: "当院の特徴", href: "#features" },
              { label: "料金", href: "#pricing" },
              { label: "アクセス", href: "#access" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[11px] tracking-wider text-[#2d2926]/50 transition-colors duration-300 hover:text-[#B76E79]"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#B76E79]/40 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <a
            href="#cta"
            className="hidden rounded-full bg-[#B76E79] px-6 py-2.5 text-[12px] font-medium tracking-wider text-white transition-colors duration-300 hover:bg-[#c4838d] md:inline-flex"
          >
            無料カウンセリング
          </a>
          <MobileMenu
            links={[
              { label: "施術メニュー", href: "#menu" },
              { label: "当院の特徴", href: "#features" },
              { label: "料金", href: "#pricing" },
              { label: "アクセス", href: "#access" },
              { label: "無料カウンセリング", href: "#cta" },
            ]}
            accentColor="#B76E79"
            theme="light"
          />
        </div>
      </header>

      {/* ===== 1. Hero: Full-screen gradient + centered text ===== */}
      <section className="relative min-h-[100dvh] overflow-hidden pt-20">
        {/* Gradient background: white -> beige -> light pink */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#faf7f2] to-[#f8ede8]" />
        {/* Subtle decorative circle */}
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(183,110,121,0.06)_0%,_transparent_70%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-5rem)] max-w-4xl flex-col items-center justify-center px-5 text-center">
          <p className="mb-6 text-[11px] font-normal tracking-[.5em] text-[#B76E79]/60 uppercase">
            Beauty Clinic
          </p>
          <h1 className="mb-8 font-serif text-[2.25rem] font-light leading-[1.3] tracking-wider sm:text-5xl lg:text-6xl">
            あなたの美しさを、
            <br />
            <span className="text-[#B76E79]">科学</span>で。
          </h1>
          <p className="mb-12 max-w-lg text-sm leading-[2.2] text-[#2d2926]/50 font-light sm:text-base">
            エビデンスに基づいた美容医療で、
            <br className="sm:hidden" />
            あなた本来の美しさを引き出します。
          </p>

          {/* Stats */}
          <div className="mb-14 flex flex-wrap justify-center gap-10 sm:gap-16">
            {[
              { num: "15,000", unit: "+", label: "症例実績" },
              { num: "98.7", unit: "%", label: "患者満足度" },
              { num: "10", unit: "年+", label: "の信頼と実績" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-light tabular-nums text-[#2d2926] sm:text-4xl">
                  {s.num}
                  <span className="text-sm text-[#B76E79]">{s.unit}</span>
                </p>
                <p className="mt-1 text-[10px] tracking-wider text-[#2d2926]/40">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-[#B76E79] px-10 py-4 text-sm font-medium tracking-wider text-white transition-colors duration-300 hover:bg-[#c4838d]"
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
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] tracking-[.3em] text-[#2d2926]/30">
              SCROLL
            </span>
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-[#B76E79]/20 p-1">
              <div className="h-1.5 w-1 animate-bounce rounded-full bg-[#B76E79]/40" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Decorative line ===== */}
      <Divider />

      {/* ===== 2. Worries Section ===== */}
      <section className="bg-[#faf7f2] py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <SectionLabelCenter
              en="WORRIES"
              ja={
                <>
                  こんな<span className="text-[#B76E79]">お悩み</span>
                  ありませんか？
                </>
              }
            />
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            {worries.map((w, i) => (
              <FadeIn key={i} delay={100 + i * 80}>
                <div className="group h-full rounded-3xl border border-[#B76E79]/[.08] bg-white/80 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#B76E79]/20 hover:shadow-[0_8px_40px_rgba(183,110,121,0.06)] hover:scale-[1.02] sm:p-10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B76E79]/[.06] text-[#B76E79] transition-colors duration-300 group-hover:bg-[#B76E79]/[.10]">
                    {w.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-normal tracking-wide">
                    {w.title}
                  </h3>
                  <p className="text-sm leading-[2] text-[#2d2926]/50 font-light">
                    {w.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={500}>
            <p className="mt-14 text-center text-sm leading-relaxed text-[#2d2926]/40 font-light">
              一つでも当てはまる方は、ぜひ一度ご相談ください。
              <br />
              LUMINE CLINICが、あなたに最適な治療をご提案します。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== Decorative line ===== */}
      <Divider />

      {/* ===== 3. Treatment Menu (Alternating Layout) ===== */}
      <section id="menu" className="bg-white py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <SectionLabelCenter
              en="TREATMENT"
              ja={
                <>
                  <span className="text-[#B76E79]">施術</span>メニュー
                </>
              }
            />
          </FadeIn>

          <div className="space-y-24 sm:space-y-36">
            {treatments.map((t, i) => (
              <FadeIn key={i} delay={100}>
                <div className="grid grid-cols-1 items-center gap-10 sm:gap-14 md:grid-cols-2 lg:gap-20">
                  {/* Image placeholder */}
                  <div className={i % 2 === 0 ? "md:order-1" : "md:order-2"}>
                    <div className="relative">
                      <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-[#faf7f2] to-[#f0e6df] ring-1 ring-[#B76E79]/[.06] transition-transform duration-500 hover:scale-[1.02]">
                        <div className="flex h-full flex-col items-center justify-center gap-3">
                          <span className="text-5xl font-light text-[#B76E79]/10">
                            {t.num}
                          </span>
                          <span className="text-[10px] tracking-[.3em] text-[#2d2926]/20">
                            {t.subtitle.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Text */}
                  <div className={i % 2 === 0 ? "md:order-2" : "md:order-1"}>
                    <span className="mb-3 block text-[11px] tracking-[.25em] text-[#B76E79]/50">
                      {t.subtitle}
                    </span>
                    <h3 className="mb-5 text-2xl font-normal tracking-wide sm:text-[1.75rem]">
                      {t.title}
                    </h3>
                    <p className="mb-5 max-w-md text-sm leading-[2.2] text-[#2d2926]/50 font-light">
                      {t.desc}
                    </p>
                    <p className="text-[12px] tracking-wider text-[#B76E79]/60">
                      {t.duration}
                    </p>
                    <div className="mt-6 h-px w-16 bg-gradient-to-r from-[#B76E79]/30 to-transparent" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Decorative line ===== */}
      <Divider />

      {/* ===== 4. Features ===== */}
      <section id="features" className="bg-[#faf7f2] py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <SectionLabelCenter
              en="FEATURES"
              ja={
                <>
                  当院の<span className="text-[#B76E79]">3つの特徴</span>
                </>
              }
            />
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
            {features.map((f, i) => (
              <FadeIn key={i} delay={100 + i * 120}>
                <div className="group h-full rounded-3xl border border-[#B76E79]/[.08] bg-white/80 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#B76E79]/20 hover:shadow-[0_8px_40px_rgba(183,110,121,0.06)] hover:scale-[1.02] sm:p-10">
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B76E79]/[.06] text-[#B76E79] transition-colors duration-300 group-hover:bg-[#B76E79]/[.10]">
                    {f.icon}
                  </div>
                  <span className="mb-4 block text-[11px] tracking-[.2em] text-[#B76E79]/40">
                    {f.num}
                  </span>
                  <h3 className="mb-5 text-lg font-normal leading-relaxed tracking-wide whitespace-pre-line">
                    {f.title}
                  </h3>
                  <p className="text-[13px] leading-[2.2] text-[#2d2926]/50 font-light">
                    {f.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Decorative line ===== */}
      <Divider />

      {/* ===== 5. Doctor ===== */}
      <section className="bg-white py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <SectionLabelCenter
              en="DOCTOR"
              ja={
                <>
                  ドクター<span className="text-[#B76E79]">紹介</span>
                </>
              }
            />
          </FadeIn>

          <FadeIn delay={150}>
            <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
              {/* Photo placeholder */}
              <div className="relative mx-auto max-w-sm md:mx-0">
                <div className="overflow-hidden rounded-3xl bg-gradient-to-b from-[#f8ede8] via-[#faf7f2] to-white ring-1 ring-[#B76E79]/[.08]">
                  <div className="flex aspect-[3/4] items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="mx-auto mb-3 h-16 w-16 text-[#B76E79]/20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={0.8}
                      >
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-[10px] tracking-[.3em] text-[#2d2926]/15">
                        DOCTOR PHOTO
                      </span>
                    </div>
                  </div>
                </div>
                {/* Decorative offset border */}
                <div className="absolute -top-3 -right-3 -z-10 h-full w-full rounded-3xl border border-[#B76E79]/10" />
              </div>

              {/* Profile */}
              <div className="text-center md:text-left">
                <p className="mb-2 text-[11px] tracking-[.25em] text-[#B76E79]/50">
                  CLINIC DIRECTOR
                </p>
                <h3 className="mb-1 text-3xl font-light tracking-wide sm:text-4xl">
                  白石 美咲
                </h3>
                <p className="mb-8 text-sm text-[#2d2926]/40 font-light">
                  LUMINE CLINIC 院長 / 美容外科・皮膚科専門医
                </p>

                <ul className="mb-10 space-y-3 text-sm text-[#2d2926]/60 font-light">
                  {[
                    "日本美容外科学会 認定専門医",
                    "日本皮膚科学会 認定皮膚科専門医",
                    "東京大学医学部 卒業",
                    "大学病院勤務を経て 2016年 LUMINE CLINIC 開院",
                    "症例実績 15,000件以上",
                  ].map((q, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B76E79]/[.08] text-[10px] text-[#B76E79]">
                        &#10003;
                      </span>
                      {q}
                    </li>
                  ))}
                </ul>

                <blockquote className="relative rounded-2xl border-l-2 border-[#B76E79]/20 bg-[#faf7f2]/60 px-6 py-5 text-sm leading-[2.2] text-[#2d2926]/60 italic font-light">
                  <span className="absolute -top-3 left-4 text-3xl text-[#B76E79]/15">
                    &ldquo;
                  </span>
                  患者様お一人おひとりの「なりたい自分」に寄り添い、
                  科学的なアプローチで最適な治療をご提案いたします。
                  美容医療は特別なものではなく、
                  日々のケアの延長にあるもの。
                  気軽にご相談いただける、
                  そんなクリニックでありたいと思っています。
                </blockquote>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== Decorative line ===== */}
      <Divider />

      {/* ===== 6. Cases (Before / After) ===== */}
      <section className="bg-[#faf7f2] py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <SectionLabelCenter
              en="CASES"
              ja={
                <>
                  <span className="text-[#B76E79]">症例</span>のご紹介
                </>
              }
            />
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
            {cases.map((c, i) => (
              <FadeIn key={i} delay={100 + i * 120}>
                <div className="group h-full overflow-hidden rounded-3xl border border-[#B76E79]/[.08] bg-white/80 transition-all duration-300 hover:border-[#B76E79]/20 hover:shadow-[0_8px_40px_rgba(183,110,121,0.06)] hover:scale-[1.02]">
                  {/* Before/After placeholders */}
                  <div className="flex items-end justify-center gap-4 bg-gradient-to-br from-[#faf7f2] to-[#f0e6df] px-6 py-8">
                    <div className="flex flex-col items-center">
                      <span className="mb-2 text-[10px] tracking-wider text-[#2d2926]/30 uppercase">
                        Before
                      </span>
                      <div className="flex aspect-square w-20 items-center justify-center rounded-2xl bg-white/60 ring-1 ring-[#B76E79]/[.08]">
                        <svg
                          className="h-8 w-8 text-[#2d2926]/10"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1}
                        >
                          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="mb-8">
                      <svg
                        className="h-4 w-4 text-[#B76E79]/30"
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
                      <span className="mb-2 text-[10px] tracking-wider text-[#B76E79]/50 uppercase">
                        After
                      </span>
                      <div className="flex aspect-square w-20 items-center justify-center rounded-2xl bg-white/80 ring-1 ring-[#B76E79]/15">
                        <svg
                          className="h-8 w-8 text-[#B76E79]/15"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1}
                        >
                          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-8">
                    <p className="mb-1 text-sm font-normal text-[#B76E79]">
                      {c.label}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2 text-[11px]">
                      <span className="rounded-full bg-[#faf7f2] px-3 py-1 text-[#2d2926]/40 ring-1 ring-[#B76E79]/[.06]">
                        {c.age}
                      </span>
                      <span className="rounded-full bg-[#faf7f2] px-3 py-1 text-[#2d2926]/40 ring-1 ring-[#B76E79]/[.06]">
                        期間：{c.period}
                      </span>
                    </div>
                    <p className="text-[13px] leading-[2] text-[#2d2926]/50 font-light">
                      {c.comment}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={500}>
            <p className="mt-10 text-center text-[11px] text-[#2d2926]/30">
              ※ 効果には個人差があります。詳しくはカウンセリングにてご説明いたします。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== Decorative line ===== */}
      <Divider />

      {/* ===== 7. Pricing ===== */}
      <section id="pricing" className="bg-white py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-3xl px-5">
          <FadeIn>
            <SectionLabelCenter
              en="PRICE"
              ja={
                <>
                  <span className="text-[#B76E79]">料金</span>のご案内
                </>
              }
            />
          </FadeIn>

          <FadeIn delay={100}>
            <div className="overflow-hidden rounded-3xl border border-[#B76E79]/[.08] bg-white">
              <div className="divide-y divide-[#B76E79]/[.06]">
                {priceList.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-8 py-6 transition-colors duration-200 hover:bg-[#faf7f2]/50 sm:px-10"
                  >
                    <div>
                      <p className="text-sm font-normal tracking-wide">
                        {item.name}
                      </p>
                      <p className="mt-1 text-[11px] text-[#2d2926]/35 font-light">
                        {item.note}
                      </p>
                    </div>
                    <p className="text-right">
                      <span className="text-xl font-light tabular-nums tracking-tight text-[#B76E79] sm:text-2xl">
                        &yen;{item.price}
                      </span>
                      <span className="ml-1 text-[11px] text-[#2d2926]/35">
                        (税込)
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mt-8 text-center text-[11px] leading-relaxed text-[#2d2926]/35 font-light">
              ※ 初回カウンセリングは無料です。
              <br />
              ※ 料金はすべて税込表記です。その他の施術についてはお気軽にお問い合わせください。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== Decorative line ===== */}
      <Divider />

      {/* ===== 8. FAQ ===== */}
      <section className="bg-[#faf7f2] py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-3xl px-5">
          <FadeIn>
            <SectionLabelCenter
              en="FAQ"
              ja={
                <>
                  よくある<span className="text-[#B76E79]">ご質問</span>
                </>
              }
            />
          </FadeIn>

          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={80 + i * 60}>
                <div className="rounded-3xl border border-[#B76E79]/[.08] bg-white/80 p-8 backdrop-blur-sm sm:p-10">
                  <h3 className="mb-4 flex items-start gap-3 text-sm font-normal tracking-wide">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B76E79]/[.08] text-[11px] font-medium text-[#B76E79]">
                      Q
                    </span>
                    {faq.q}
                  </h3>
                  <div className="ml-9 border-l border-[#B76E79]/10 pl-5">
                    <p className="text-[13px] leading-[2.2] text-[#2d2926]/50 font-light">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Decorative line ===== */}
      <Divider />

      {/* ===== 9. Access ===== */}
      <section id="access" className="bg-white py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-4xl px-5">
          <FadeIn>
            <SectionLabelCenter en="ACCESS" ja="アクセス" />
          </FadeIn>

          <FadeIn delay={150}>
            <div className="overflow-hidden rounded-3xl border border-[#B76E79]/[.08] bg-white">
              {/* Map placeholder */}
              <div className="relative flex aspect-[16/7] min-h-[14rem] items-center justify-center bg-gradient-to-br from-[#faf7f2] to-[#f0e6df]">
                <div
                  className="absolute inset-0 opacity-[.06]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(183,110,121,.4) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative text-center">
                  <svg
                    className="mx-auto mb-2 h-8 w-8 text-[#B76E79]/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.2}
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[10px] tracking-[.3em] text-[#2d2926]/20">
                    GOOGLE MAP
                  </span>
                </div>
              </div>

              <div className="grid gap-10 p-8 sm:grid-cols-2 sm:p-10">
                <div>
                  <h3 className="mb-4 text-[11px] tracking-[.25em] text-[#B76E79]/50">
                    ADDRESS
                  </h3>
                  <p className="text-sm leading-[2.2] text-[#2d2926]/60 font-light">
                    〒150-0001
                    <br />
                    東京都渋谷区神宮前4丁目12-10
                    <br />
                    表参道ヒルズ West 5F
                  </p>
                </div>
                <div>
                  <h3 className="mb-4 text-[11px] tracking-[.25em] text-[#B76E79]/50">
                    HOURS
                  </h3>
                  <ul className="space-y-2 text-sm text-[#2d2926]/60 font-light">
                    <li className="flex justify-between">
                      <span>平日</span>
                      <span className="tabular-nums">10:00 - 19:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>土日祝</span>
                      <span className="tabular-nums">10:00 - 18:00</span>
                    </li>
                    <li className="text-[11px] text-[#2d2926]/30">
                      休診日：水曜日・年末年始
                    </li>
                  </ul>
                  <div className="mt-5 flex items-center gap-2 text-sm text-[#2d2926]/50 font-light">
                    <svg
                      className="h-4 w-4 text-[#B76E79]/40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    表参道駅 A2出口より徒歩2分
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== Decorative line ===== */}
      <Divider />

      {/* ===== 10. CTA ===== */}
      <section id="cta" className="relative bg-gradient-to-b from-[#faf7f2] to-white py-28 sm:py-36 lg:py-44">
        {/* Decorative glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,_rgba(183,110,121,0.05)_0%,_transparent_70%)]" />

        <div className="relative mx-auto max-w-2xl px-5 text-center">
          <FadeIn>
            <SectionLabelCenter
              en="COUNSELING"
              ja={
                <>
                  まずは<span className="text-[#B76E79]">無料カウンセリング</span>
                  から
                </>
              }
            />
          </FadeIn>

          <FadeIn delay={100}>
            <p className="mx-auto -mt-8 mb-12 max-w-md text-sm leading-[2.2] text-[#2d2926]/45 font-light">
              お悩みやご希望をじっくりお伺いし、
              <br />
              あなたに最適な治療プランをご提案いたします。
              <br />
              無理な勧誘は一切ございません。
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <a
              href="#"
              className="group mx-auto inline-flex items-center gap-2 rounded-full bg-[#B76E79] px-14 py-5 text-base font-medium tracking-wider text-white transition-colors duration-300 hover:bg-[#c4838d]"
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
            <div className="mt-14 border-t border-[#B76E79]/10 pt-10">
              <p className="mb-2 text-[11px] tracking-wider text-[#2d2926]/35">
                お電話でのお問い合わせ
              </p>
              <a
                href="tel:03-6789-0123"
                className="inline-block text-2xl font-light tabular-nums tracking-wider text-[#2d2926] transition-colors duration-300 hover:text-[#B76E79] sm:text-3xl"
              >
                03-6789-0123
              </a>
              <p className="mt-2 text-[11px] text-[#2d2926]/30 font-light">
                受付時間 10:00 - 19:00（水曜定休）
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 11. Footer ===== */}
      <footer className="border-t border-[#B76E79]/[.08] bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="mb-1 text-base font-light tracking-[.25em] text-[#B76E79]">
                LUMINE CLINIC
              </p>
              <p className="text-[11px] leading-relaxed text-[#2d2926]/30 font-light">
                美容皮膚科・美容外科
              </p>
            </div>
            <div className="flex items-center gap-6">
              {["Instagram", "LINE"].map((sns) => (
                <a
                  key={sns}
                  href="#"
                  className="group relative text-[11px] tracking-wider text-[#2d2926]/35 transition-colors duration-300 hover:text-[#B76E79]"
                >
                  {sns}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#B76E79]/40 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t border-[#B76E79]/[.06] pt-6 text-center">
            <p className="text-[10px] text-[#2d2926]/25 font-light">
              &copy; {new Date().getFullYear()} LUMINE CLINIC. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ===== Floating CTA ===== */}
      <FloatingCTA />
    </div>
  );
}
