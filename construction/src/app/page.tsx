import type { Metadata } from "next";
import { FloatingCTA } from "@/components/floating-cta";
import { FadeIn } from "@/components/fade-in";
import { MobileMenu } from "@/components/mobile-menu";
import { HeroSlider } from "@/components/hero-slider";
import { ParallaxPhotos } from "@/components/parallax-photos";

export const metadata: Metadata = {
  title: "TAKUMI建設 | 地域に根ざして30年。信頼の施工実績。",
  description:
    "TAKUMI建設は新築・リフォーム・商業施設・公共工事まで、地域密着で30年以上の実績を持つ総合建設会社です。無料お見積りはお気軽に。",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const stats = [
  { num: "500", unit: "件+", label: "累計施工実績" },
  { num: "30", unit: "年", label: "業歴" },
  { num: "85", unit: "%", label: "リピート率" },
  { num: "15", unit: "名", label: "自社職人" },
];

const services = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    title: "新築住宅",
    desc: "ご家族の暮らしに寄り添った注文住宅を、設計から施工までワンストップでご提供。耐震等級3を標準仕様に、安心と快適を両立します。",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.664 3.014a.75.75 0 01-1.053-.665V7.81a1.5 1.5 0 01.87-1.362l5.85-2.925a.75.75 0 01.67 0l5.85 2.925a1.5 1.5 0 01.87 1.362v9.71a.75.75 0 01-1.053.664L11.42 15.17z" />
      </svg>
    ),
    title: "リフォーム",
    desc: "水まわり・内装・外壁まで、住まいのお困りごとを丸ごと解決。暮らしやすさを追求したリノベーションもお任せください。",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "商業施設",
    desc: "店舗・オフィス・クリニックなど、事業の成長を支える空間づくり。企画段階からのコンサルティングで最適な施設を実現します。",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    title: "公共工事",
    desc: "道路・橋梁・上下水道など社会インフラの整備に30年の実績。地域の安全と発展に貢献し続けています。",
  },
];

const strengths = [
  {
    num: "01",
    title: "地域密着30年の信頼",
    desc: "創業以来、この地域で30年以上にわたり施工を続けてきました。地元の気候風土、地盤特性を知り尽くした私たちだからこそ、その土地に最適な建物をご提案できます。お客様との関係は建物の引き渡しで終わりではなく、末永く続くパートナーシップです。",
    sub: "地域の気候・風土を熟知したご提案",
  },
  {
    num: "02",
    title: "自社職人による一貫施工",
    desc: "TAKUMI建設では、15名の熟練職人を自社で直接雇用。下請けに頼らない一貫施工体制により、品質管理を徹底しています。現場監督と職人が密に連携し、細部まで妥協のない仕上がりを実現します。",
    sub: "下請けゼロ。品質に一切の妥協なし",
  },
  {
    num: "03",
    title: "安心の10年保証",
    desc: "お引き渡し後も安心の10年長期保証を標準でお付けしています。定期点検は1年・3年・5年・10年の計4回を無料で実施。万が一の不具合にも迅速に対応する、充実のアフターサポート体制です。",
    sub: "定期点検4回を含む充実アフターケア",
  },
];

const projects = [
  {
    title: "T邸 新築工事",
    category: "新築住宅",
    area: "延床面積 128m\u00B2",
    period: "工期 5ヶ月",
    desc: "吹き抜けリビングと大開口が特徴の木造2階建て住宅。南向きの敷地を最大限に活かした設計で、自然光あふれる明るい住空間を実現しました。",
  },
  {
    title: "Cafe MORI 新装工事",
    category: "商業施設",
    area: "施工面積 85m\u00B2",
    period: "工期 2ヶ月",
    desc: "築40年の空き店舗をカフェにリノベーション。既存の梁や柱を活かしたインダストリアルデザインで、地域の新たな集いの場を創出しました。",
  },
  {
    title: "市営橋梁補修工事",
    category: "公共工事",
    area: "橋長 45m",
    period: "工期 8ヶ月",
    desc: "老朽化した市営橋梁の大規模補修工事。交通規制を最小限に抑えながら、最新の補修技術で橋の寿命を50年延長しました。",
  },
];

const flow = [
  {
    step: "01",
    title: "ご相談",
    desc: "まずはお電話・メールでお気軽にご相談ください。ご要望やご予算を丁寧にお伺いします。",
  },
  {
    step: "02",
    title: "現地調査",
    desc: "専門スタッフが現地を訪問し、土地や建物の状態を詳しく調査。最適なプランの基礎情報を収集します。",
  },
  {
    step: "03",
    title: "お見積り",
    desc: "調査結果をもとに、詳細なプランとお見積りをご提示。ご納得いただけるまで何度でもご相談いただけます。",
  },
  {
    step: "04",
    title: "施工",
    desc: "自社職人による丁寧な施工を実施。工事の進捗は定期的にご報告し、安心してお任せいただけます。",
  },
  {
    step: "05",
    title: "アフターフォロー",
    desc: "お引き渡し後も10年保証と定期点検で安心。住まいの困りごとはいつでもご相談ください。",
  },
];

const voices = [
  {
    name: "M.T さん",
    type: "新築住宅",
    comment:
      "初めての家づくりで不安でしたが、担当の方が毎回丁寧に説明してくださり、安心して進められました。住み始めて3年経ちますが、定期点検もしっかりしていただいて本当に心強いです。",
  },
  {
    name: "S.K さん",
    type: "リフォーム",
    comment:
      "築25年の自宅の水まわりリフォームをお願いしました。近所の方からの紹介でしたが、評判通りの丁寧な仕事ぶり。職人さんも礼儀正しく、工事中も気持ちよく過ごせました。",
  },
  {
    name: "A.N さん",
    type: "店舗工事",
    comment:
      "開業に合わせたタイトなスケジュールでしたが、予定通りに完成。動線や収納の提案も的確で、プロの目線に助けられました。おかげさまでお店は大繁盛です。",
  },
];

const companyInfo = [
  { label: "会社名", value: "株式会社 TAKUMI建設" },
  { label: "代表者", value: "代表取締役 匠 太郎" },
  { label: "設立", value: "1994年（平成6年）4月" },
  { label: "資本金", value: "3,000万円" },
  { label: "従業員数", value: "28名（うち自社職人15名）" },
  {
    label: "許可",
    value: "建設業許可 国土交通大臣許可（般-30）第00000号",
  },
  {
    label: "所在地",
    value: "\u3012000-0000 東京都\u25CB\u25CB市\u25B3\u25B3町1-2-3 TAKUMI\u30D3\u30EB",
  },
  { label: "電話番号", value: "0120-XXX-XXX" },
  {
    label: "事業内容",
    value:
      "新築住宅設計施工 / リフォーム・リノベーション / 商業施設建築 / 公共工事 / 外構工事",
  },
];

/* ------------------------------------------------------------------ */
/*  Subcomponents                                                      */
/* ------------------------------------------------------------------ */

function SectionHeading({
  en,
  ja,
  align = "center",
  light = false,
}: {
  en: string;
  ja: React.ReactNode;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div
      className={`mb-14 sm:mb-20 ${align === "center" ? "text-center" : ""}`}
    >
      <span
        className={`mb-2 block font-mono text-[11px] font-semibold tracking-[.3em] uppercase ${
          light ? "text-[#E67E22]/70" : "text-[#E67E22]/80"
        }`}
      >
        {en}
      </span>
      <h2
        className={`text-[1.75rem] font-bold leading-snug tracking-tight sm:text-3xl lg:text-4xl ${
          light ? "text-white" : "text-[#1E3A5F]"
        }`}
      >
        {ja}
      </h2>
      <div
        className={`mt-5 h-px w-12 ${
          align === "center" ? "mx-auto" : ""
        } ${light ? "bg-[#E67E22]/40" : "bg-[#E67E22]/60"}`}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ConstructionPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#333] selection:bg-[#E67E22]/20 selection:text-[#1E3A5F]">
      {/* ===== 1. Header (Fixed) ===== */}
      <header className="fixed top-0 right-0 left-0 z-50 border-b border-[#1E3A5F]/8 bg-white/90 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-[#1E3A5F] text-lg font-black text-white">
              T
            </div>
            <div className="leading-tight">
              <span className="block text-base font-black tracking-wider text-[#1E3A5F]">
                TAKUMI建設
              </span>
              <span className="block text-[9px] tracking-[.15em] text-[#999]">
                TAKUMI CONSTRUCTION
              </span>
            </div>
          </a>
          {/* Nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {[
              { label: "事業内容", href: "#service" },
              { label: "選ばれる理由", href: "#reason" },
              { label: "施工事例", href: "#works" },
              { label: "施工の流れ", href: "#flow" },
              { label: "会社概要", href: "#company" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[13px] font-medium tracking-wide text-[#555] transition-colors duration-300 hover:text-[#1E3A5F]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0120-XXX-XXX"
              className="hidden items-center gap-1.5 text-[13px] font-bold tracking-wide text-[#1E3A5F] sm:flex"
            >
              <span className="text-base">&#9742;</span>
              0120-XXX-XXX
            </a>
            <a
              href="#contact"
              className="hidden rounded-lg bg-[#E67E22] px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_2px_12px_rgba(230,126,34,0.3)] transition-all duration-300 hover:bg-[#d35400] hover:shadow-[0_4px_20px_rgba(230,126,34,0.4)] lg:inline-flex"
            >
              無料お見積り
            </a>
            <MobileMenu
              links={[
                { label: "事業内容", href: "#service" },
                { label: "選ばれる理由", href: "#reason" },
                { label: "施工事例", href: "#works" },
                { label: "施工の流れ", href: "#flow" },
                { label: "会社概要", href: "#company" },
                { label: "無料お見積り", href: "#contact" },
              ]}
              accentColor="#E67E22"
              theme="light"
            />
          </div>
        </div>
      </header>

      {/* ===== 2. Hero: Full-screen with fade-slider background (mizota pattern) ===== */}
      <section className="relative h-[100dvh] min-h-[600px] overflow-hidden">
        {/* Fade slider background (CSS-only) */}
        <HeroSlider />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A5F]/80 via-[#1E3A5F]/60 to-[#0d1f33]/90" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white">
          <p className="mb-4 font-mono text-[11px] font-semibold tracking-[.4em] text-[#E67E22] uppercase sm:text-xs">
            Since 1994 &mdash; Trusted Construction
          </p>
          <h1 className="mb-6 text-[2.25rem] font-black leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            地域に根ざして<span className="text-[#E67E22]">30</span>年。
            <br />
            信頼の施工実績。
          </h1>
          <p className="mx-auto mb-10 max-w-lg text-sm leading-[2] text-white/70 sm:text-base">
            新築からリフォーム、商業施設、公共工事まで。
            <br className="hidden sm:block" />
            自社職人による一貫施工で、確かな品質をお届けします。
          </p>

          {/* CTA group */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#E67E22] px-10 py-4 text-base font-bold text-white shadow-[0_4px_24px_rgba(230,126,34,0.35)] transition-all duration-300 hover:bg-[#d35400] hover:shadow-[0_6px_36px_rgba(230,126,34,0.5)] hover:scale-[1.03]"
            >
              無料お見積り
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
            <a
              href="tel:0120-XXX-XXX"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              <span className="text-lg">&#9742;</span>
              0120-XXX-XXX
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] tracking-[.3em] text-white/40">
              SCROLL
            </span>
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1">
              <div className="h-1.5 w-1 animate-bounce rounded-full bg-[#E67E22]/70" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. Stats Band (overlapping hero — mizota section overlap pattern) ===== */}
      <section className="relative z-10 -mt-16 px-5">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#1E3A5F]/8 bg-white shadow-[0_8px_40px_rgba(30,58,95,0.08)]">
          <div className="grid grid-cols-2 divide-x divide-[#1E3A5F]/8 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="px-4 py-7 text-center sm:px-6 sm:py-9">
                <p className="text-3xl font-black tabular-nums text-[#1E3A5F] sm:text-4xl lg:text-[2.75rem]">
                  {s.num}
                  <span className="text-sm font-bold text-[#E67E22] sm:text-base">
                    {s.unit}
                  </span>
                </p>
                <p className="mt-1 text-[11px] tracking-wider text-[#888]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. Service (事業内容) ===== */}
      <section id="service" className="bg-white py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <SectionHeading
              en="Service"
              ja={
                <>
                  <span className="text-[#E67E22]">事業</span>内容
                </>
              }
            />
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
            {services.map((s, i) => (
              <FadeIn key={i} delay={100 + i * 80}>
                <div className="group h-full overflow-hidden rounded-2xl border border-[#1E3A5F]/6 bg-[#fafbfc] p-7 transition-all duration-500 hover:border-[#E67E22]/30 hover:shadow-[0_12px_40px_rgba(30,58,95,0.08)] sm:p-8">
                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1E3A5F]/5 text-[#1E3A5F] transition-colors duration-300 group-hover:bg-[#E67E22]/10 group-hover:text-[#E67E22]">
                    {s.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-[#1E3A5F]">
                    {s.title}
                  </h3>
                  <p className="text-[13px] leading-[2] text-[#666]">
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. Concept — Parallax scattered photos (mizota pattern) ===== */}
      <section className="relative overflow-hidden bg-[#f5f3ef] py-32 sm:py-40 lg:py-52">
        {/* Parallax scattered photos */}
        <ParallaxPhotos />

        {/* Central text */}
        <div className="relative z-10 mx-auto max-w-xl px-5 text-center">
          <FadeIn>
            <span className="mb-3 block font-mono text-[11px] font-semibold tracking-[.3em] text-[#E67E22]/80 uppercase">
              Philosophy
            </span>
            <h2 className="mb-8 text-2xl font-bold leading-relaxed text-[#1E3A5F] sm:text-3xl lg:text-4xl">
              建てる、ではなく
              <br />
              <span className="text-[#E67E22]">
                &#x300C;築く&#x300D;
              </span>
              という想い。
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="text-[13px] leading-[2.2] text-[#666] sm:text-sm">
              建物は、ただの構造物ではありません。
              <br />
              そこに暮らす人の笑顔、集う人の想い、
              <br />
              地域の未来を支える土台です。
              <br />
              <br />
              TAKUMI建設は「匠」の名にふさわしい
              <br />
              確かな技術と真心で、
              <br />
              お客様とともに、かけがえのない価値を築きます。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== 6. Reason (選ばれる理由) — Alternating layout (layout-patterns B) ===== */}
      <section id="reason" className="bg-white py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <SectionHeading
              en="Reason"
              ja={
                <>
                  TAKUMI建設が
                  <span className="text-[#E67E22]">選ばれる理由</span>
                </>
              }
            />
          </FadeIn>

          <div className="space-y-24 sm:space-y-32 lg:space-y-40">
            {strengths.map((s, i) => (
              <FadeIn key={i} delay={100}>
                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
                  {/* Image placeholder */}
                  <div
                    className={`${
                      i % 2 === 1 ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="relative">
                      <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#1E3A5F]/10 via-[#f0ede8] to-[#1E3A5F]/5 ring-1 ring-[#1E3A5F]/8">
                        <div className="flex h-full flex-col items-center justify-center gap-3">
                          <span className="font-mono text-[100px] font-black leading-none text-[#1E3A5F]/[.04] lg:text-[120px]">
                            {s.num}
                          </span>
                        </div>
                      </div>
                      {/* Offset decorative — mizota overlap */}
                      <div
                        className={`absolute -bottom-5 ${
                          i % 2 === 1 ? "-left-4" : "-right-4"
                        } h-20 w-28 rounded-xl bg-[#E67E22]/10 ring-1 ring-[#E67E22]/15 sm:-bottom-6 sm:h-24 sm:w-32`}
                      />
                    </div>
                  </div>
                  {/* Text */}
                  <div
                    className={`${
                      i % 2 === 1 ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A5F] font-mono text-sm font-bold text-white">
                      {s.num}
                    </span>
                    <h3 className="mt-4 mb-4 text-xl font-bold text-[#1E3A5F] sm:text-2xl lg:text-[1.65rem]">
                      {s.title}
                    </h3>
                    <p className="mb-3 text-[13px] leading-[2] text-[#666]">
                      {s.desc}
                    </p>
                    <p className="flex items-center gap-2 text-[12px] font-semibold text-[#E67E22]">
                      <span className="inline-block h-px w-6 bg-[#E67E22]/50" />
                      {s.sub}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. Works (施工事例) — Dark bg card grid (mizota slider style) ===== */}
      <section id="works" className="bg-[#1E3A5F] py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <SectionHeading
              en="Works"
              ja={
                <>
                  施工<span className="text-[#E67E22]">事例</span>
                </>
              }
              light
            />
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-3 sm:gap-5 lg:gap-7">
            {projects.map((p, i) => (
              <FadeIn key={i} delay={100 + i * 120}>
                <div className="group h-full overflow-hidden rounded-2xl bg-white/[.06] ring-1 ring-white/[.08] backdrop-blur-sm transition-all duration-500 hover:bg-white/[.10] hover:ring-[#E67E22]/30 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]">
                  {/* Image placeholder */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-white/[.06] via-white/[.02] to-transparent">
                    <div className="absolute inset-0 flex items-center justify-center text-white/[.06]">
                      {i === 0 ? (
                        <svg className="h-2/3 w-2/3" viewBox="0 0 120 90" fill="currentColor">
                          <rect x="15" y="35" width="50" height="45" rx="2" />
                          <polygon points="15,35 40,12 65,35" />
                          <rect x="65" y="45" width="40" height="35" rx="2" />
                          <rect x="28" y="50" width="10" height="14" rx="2" fill="white" opacity="0.3" />
                          <rect x="44" y="50" width="10" height="14" rx="2" fill="white" opacity="0.3" />
                        </svg>
                      ) : i === 1 ? (
                        <svg className="h-2/3 w-2/3" viewBox="0 0 120 90" fill="currentColor">
                          <rect x="20" y="25" width="80" height="55" rx="4" />
                          <rect x="30" y="35" width="15" height="12" rx="2" fill="white" opacity="0.3" />
                          <rect x="52" y="35" width="15" height="12" rx="2" fill="white" opacity="0.3" />
                          <rect x="75" y="35" width="15" height="12" rx="2" fill="white" opacity="0.3" />
                          <rect x="45" y="60" width="22" height="20" rx="3" fill="white" opacity="0.2" />
                        </svg>
                      ) : (
                        <svg className="h-2/3 w-2/3" viewBox="0 0 160 90" fill="currentColor">
                          <path d="M10 80 Q80 20 150 80" strokeWidth="4" stroke="currentColor" fill="none" opacity="0.6" />
                          <rect x="20" y="80" width="6" height="6" rx="1" />
                          <rect x="134" y="80" width="6" height="6" rx="1" />
                          <line x1="10" y1="86" x2="150" y2="86" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      )}
                    </div>
                    {/* Category badge */}
                    <span className="absolute top-4 left-4 rounded-md bg-[#E67E22] px-3 py-1 text-[11px] font-bold text-white">
                      {p.category}
                    </span>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#1E3A5F]/0 transition-colors duration-300 group-hover:bg-[#1E3A5F]/20" />
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="mb-3 text-lg font-bold text-white">
                      {p.title}
                    </h3>
                    <div className="mb-4 flex flex-wrap gap-2 text-[12px]">
                      {[p.area, p.period].map((tag, ti) => (
                        <span
                          key={ti}
                          className="rounded-full bg-white/[.06] px-3 py-1 text-white/60 ring-1 ring-white/[.08]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-[13px] leading-[1.9] text-white/50">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. Flow (施工の流れ) — Timeline ===== */}
      <section id="flow" className="bg-[#fafbfc] py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-4xl px-5">
          <FadeIn>
            <SectionHeading
              en="Flow"
              ja={
                <>
                  施工の<span className="text-[#E67E22]">流れ</span>
                </>
              }
            />
          </FadeIn>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-5 w-px bg-[#1E3A5F]/10 sm:left-1/2 sm:-translate-x-px" />

            <div className="space-y-10 sm:space-y-0">
              {flow.map((f, i) => (
                <FadeIn key={i} delay={80 + i * 100}>
                  <div
                    className={`relative flex gap-8 sm:gap-0 ${
                      i > 0 ? "sm:mt-14" : ""
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-5 z-10 -translate-x-1/2 sm:left-1/2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#E67E22] bg-white text-[13px] font-bold text-[#E67E22]">
                        {f.step}
                      </div>
                    </div>

                    {/* Card — alternating sides on desktop */}
                    <div
                      className={`ml-12 w-full sm:ml-0 sm:w-[calc(50%-2rem)] ${
                        i % 2 === 0
                          ? "sm:mr-auto sm:pr-4 sm:text-right"
                          : "sm:ml-auto sm:pl-4 sm:text-left"
                      }`}
                    >
                      <div className="rounded-xl border border-[#1E3A5F]/6 bg-white p-6 shadow-[0_2px_12px_rgba(30,58,95,0.04)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(30,58,95,0.08)]">
                        <h3 className="mb-2 text-base font-bold text-[#1E3A5F]">
                          {f.title}
                        </h3>
                        <p className="text-[13px] leading-[1.9] text-[#666]">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 9. Voice (お客様の声) ===== */}
      <section className="bg-white py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <SectionHeading
              en="Voice"
              ja={
                <>
                  お客様の<span className="text-[#E67E22]">声</span>
                </>
              }
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-3 sm:gap-5 lg:gap-7">
            {voices.map((v, i) => (
              <FadeIn key={i} delay={100 + i * 100}>
                <div className="group flex h-full flex-col rounded-2xl border border-[#1E3A5F]/6 bg-[#fafbfc] p-7 transition-all duration-300 hover:border-[#E67E22]/20 hover:shadow-[0_8px_32px_rgba(30,58,95,0.06)] sm:p-8">
                  {/* Quote icon */}
                  <span className="mb-4 block text-3xl text-[#E67E22]/20">
                    &ldquo;
                  </span>
                  <p className="mb-6 flex-1 text-[13px] leading-[2] text-[#555]">
                    {v.comment}
                  </p>
                  <div className="flex items-center gap-3 border-t border-[#1E3A5F]/6 pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A5F] text-sm font-bold text-white">
                      {v.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1E3A5F]">
                        {v.name}
                      </p>
                      <p className="text-[11px] text-[#999]">{v.type}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 10. Company (会社概要) ===== */}
      <section id="company" className="bg-[#fafbfc] py-28 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-3xl px-5">
          <FadeIn>
            <SectionHeading
              en="Company"
              ja={
                <>
                  会社<span className="text-[#E67E22]">概要</span>
                </>
              }
            />
          </FadeIn>

          <FadeIn delay={100}>
            <div className="overflow-hidden rounded-2xl border border-[#1E3A5F]/6 bg-white">
              <table className="w-full">
                <tbody>
                  {companyInfo.map((row, i) => (
                    <tr
                      key={i}
                      className={`${
                        i < companyInfo.length - 1
                          ? "border-b border-[#1E3A5F]/6"
                          : ""
                      }`}
                    >
                      <th className="w-28 bg-[#1E3A5F]/[.03] px-5 py-4 text-left align-top text-[13px] font-semibold text-[#1E3A5F] sm:w-36 sm:px-7">
                        {row.label}
                      </th>
                      <td className="px-5 py-4 text-[13px] leading-[1.8] text-[#555] sm:px-7">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 11. CTA (お問い合わせ) ===== */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#1E3A5F] py-24 sm:py-32 lg:py-40"
      >
        {/* Decorative dot pattern */}
        <div
          className="absolute inset-0 opacity-[.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Orange glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,_rgba(230,126,34,0.08)_0%,_transparent_70%)]" />

        <div className="relative mx-auto max-w-2xl px-5 text-center">
          <FadeIn>
            <SectionHeading
              en="Contact"
              ja={
                <>
                  まずは<span className="text-[#E67E22]">無料お見積り</span>
                  から
                </>
              }
              light
            />
          </FadeIn>

          <FadeIn delay={100}>
            <p className="-mt-6 mb-10 text-sm leading-[2] text-white/60">
              新築・リフォーム・その他建築に関するご相談は
              <br className="hidden sm:block" />
              お気軽にお問い合わせください。
              <br />
              専門スタッフが丁寧にご対応いたします。
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <a
              href="#"
              className="group mx-auto inline-flex items-center gap-2 rounded-lg bg-[#E67E22] px-14 py-5 text-base font-bold text-white shadow-[0_4px_32px_rgba(230,126,34,0.4)] transition-all duration-300 hover:bg-[#d35400] hover:shadow-[0_8px_48px_rgba(230,126,34,0.5)] hover:scale-[1.03]"
            >
              無料お見積りフォームへ
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
          </FadeIn>

          <FadeIn delay={300}>
            <div className="mt-12 border-t border-white/10 pt-10">
              <p className="mb-2 text-[11px] tracking-wider text-white/40">
                お電話でのお問い合わせ
              </p>
              <a
                href="tel:0120-XXX-XXX"
                className="inline-block text-2xl font-black tabular-nums tracking-wider text-white transition-colors duration-300 hover:text-[#E67E22] sm:text-3xl"
              >
                0120-XXX-XXX
              </a>
              <p className="mt-2 text-[11px] text-white/40">
                受付時間 8:00 - 18:00（土日祝も対応）
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== 12. Footer ===== */}
      <footer className="border-t border-[#1E3A5F]/8 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-[#1E3A5F] text-sm font-black text-white">
                T
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-black tracking-wider text-[#1E3A5F]">
                  TAKUMI建設
                </span>
                <span className="block text-[8px] tracking-[.12em] text-[#999]">
                  TAKUMI CONSTRUCTION
                </span>
              </div>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-5">
              {[
                { label: "事業内容", id: "service" },
                { label: "選ばれる理由", id: "reason" },
                { label: "施工事例", id: "works" },
                { label: "施工の流れ", id: "flow" },
                { label: "会社概要", id: "company" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-[11px] tracking-wider text-[#999] transition-colors duration-300 hover:text-[#1E3A5F]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-8 border-t border-[#1E3A5F]/6 pt-6 text-center">
            <p className="text-[10px] text-[#bbb]">
              &copy; {new Date().getFullYear()} TAKUMI Construction Co., Ltd.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ===== Floating CTA ===== */}
      <FloatingCTA />
    </div>
  );
}
