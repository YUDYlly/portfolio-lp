import type { Metadata } from "next";
import { FloatingCTA } from "@/components/floating-cta";
import { FaqSection } from "@/components/faq-section";
import { FadeIn } from "@/components/fade-in";
import { MobileMenu } from "@/components/mobile-menu";

export const metadata: Metadata = {
  title: "FlowBoard | チームの生産性を、シンプルに。",
  description:
    "タスク管理・ガントチャート・チャット・レポートをひとつに。プロジェクト管理SaaS FlowBoard で、チームの働き方を変えよう。",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const challenges = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
    title: "情報が散在している",
    desc: "Slack、メール、スプレッドシート...情報があちこちに分散し、探すだけで時間を浪費。",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "進捗が見えない",
    desc: "「あのタスクどうなった？」毎回メンバーに確認しないと、全体の状況が把握できない。",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "ツールが多すぎる",
    desc: "タスク管理、チャット、ファイル共有...ツールの切り替えだけで集中力が途切れる。",
  },
];

const features = [
  {
    title: "直感的なタスクボード",
    desc: "ドラッグ&ドロップで直感的にタスクを整理。優先度・担当者・期日を一目で把握し、チーム全体の進捗をリアルタイムで追跡できます。",
    mockType: "kanban" as const,
  },
  {
    title: "ガントチャート",
    desc: "プロジェクト全体のスケジュールを視覚化。タスクの依存関係も自動で管理し、ボトルネックを即座に検出。計画どおりの納品を実現します。",
    mockType: "gantt" as const,
  },
  {
    title: "リアルタイムチャット",
    desc: "タスクに紐づくスレッド形式のチャットで、コンテキストを失わずにコミュニケーション。ファイル共有も直接可能です。",
    mockType: "chat" as const,
  },
  {
    title: "レポート自動生成",
    desc: "週次・月次レポートをワンクリックで自動作成。データに基づいた意思決定で、チームのパフォーマンスを継続的に改善します。",
    mockType: "report" as const,
  },
];

const stats = [
  {
    value: "30",
    unit: "%",
    direction: "down" as const,
    label: "会議時間を削減",
    desc: "情報共有がリアルタイム化し、報告のための会議が激減。",
  },
  {
    value: "1.5",
    unit: "x",
    direction: "up" as const,
    label: "タスク完了率が向上",
    desc: "可視化と自動リマインドにより、完了率が大幅に向上。",
  },
  {
    value: "50,000",
    unit: "円",
    direction: "down" as const,
    label: "月額コストを削減",
    desc: "複数ツールをFlowBoardに統合し、月額コストを大幅カット。",
  },
];

const plans = [
  {
    name: "Free",
    price: "0",
    period: "/月",
    desc: "まずは試してみたい方に",
    features: [
      "ユーザー3名まで",
      "プロジェクト5件",
      "基本タスク管理",
      "1GBストレージ",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "980",
    period: "/ユーザー/月（税込）",
    desc: "成長中のチームに最適",
    features: [
      "ユーザー無制限",
      "プロジェクト無制限",
      "ガントチャート",
      "リアルタイムチャット",
      "レポート自動生成",
      "50GBストレージ",
      "優先サポート",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "要問合せ",
    period: "",
    desc: "大規模組織・高度なセキュリティ要件に",
    features: [
      "Proの全機能",
      "SSO / SAML認証",
      "監査ログ",
      "SLA保証（99.9%）",
      "専任カスタマーサクセス",
      "オンプレミス対応",
    ],
    highlight: false,
  },
];

const testimonials = [
  {
    company: "株式会社テックフォワード",
    role: "CTO",
    name: "田中 健太",
    comment:
      "FlowBoard導入前は、Slack・Trello・Googleスプレッドシートを行き来していましたが、今はFlowBoardだけで完結。チーム全体の生産性が目に見えて向上しました。特にレポート自動生成機能は、週次の振り返り会議を劇的に効率化してくれました。",
  },
  {
    company: "株式会社クリエイトラボ",
    role: "プロジェクトマネージャー",
    name: "鈴木 美咲",
    comment:
      "20名規模のチームで導入しましたが、オンボーディングがとてもスムーズでした。直感的なUIのおかげで、ITリテラシーに差があるメンバーでもすぐに使いこなせています。ガントチャートで全体像が見えるようになり、納期遅延がほぼゼロになりました。",
  },
];

const logoCompanies = [
  "TechForward",
  "CreateLab",
  "NovaSoft",
  "DataPrime",
  "CloudNex",
  "SynapseAI",
];

/* ------------------------------------------------------------------ */
/*  Subcomponents                                                      */
/* ------------------------------------------------------------------ */

function SectionLabel({ en, ja }: { en: string; ja: React.ReactNode }) {
  return (
    <div className="mb-12 text-center sm:mb-16">
      <span className="mb-3 block font-mono text-[11px] font-semibold tracking-[.35em] text-[#7C3AED]/70 uppercase">
        {en}
      </span>
      <h2 className="text-3xl font-extrabold leading-snug tracking-tight sm:text-4xl lg:text-[2.75rem]">
        {ja}
      </h2>
    </div>
  );
}

function SectionLabelLeft({ en, ja }: { en: string; ja: React.ReactNode }) {
  return (
    <div className="mb-8 sm:mb-10">
      <span className="mb-3 block font-mono text-[11px] font-semibold tracking-[.35em] text-[#7C3AED]/70 uppercase">
        {en}
      </span>
      <h3 className="text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl lg:text-[2rem]">
        {ja}
      </h3>
    </div>
  );
}

/* ---- Feature UI Mocks (CSS only) ---- */

function KanbanMock() {
  return (
    <div className="flex gap-2.5 p-3 overflow-x-auto">
      {[
        { title: "To Do", color: "bg-gray-400", cards: [
          { text: "LP改善の要件定義", tag: "企画", tagColor: "bg-orange-500/20 text-orange-400" },
          { text: "競合分析レポート", tag: "リサーチ", tagColor: "bg-pink-500/20 text-pink-400" },
        ]},
        { title: "In Progress", color: "bg-blue-400", cards: [
          { text: "API仕様書作成", tag: "開発", tagColor: "bg-blue-500/20 text-blue-300" },
          { text: "UIデザイン修正", tag: "デザイン", tagColor: "bg-purple-500/20 text-purple-300" },
          { text: "テスト設計", tag: "QA", tagColor: "bg-teal-500/20 text-teal-300" },
        ]},
        { title: "Done", color: "bg-emerald-400", cards: [
          { text: "週次レポート共有", tag: "管理", tagColor: "bg-emerald-500/20 text-emerald-300" },
        ]},
      ].map((col) => (
        <div key={col.title} className="min-w-[140px] flex-1 rounded-lg bg-white/[.03] p-2 ring-1 ring-white/[.06]">
          <div className="mb-2 flex items-center gap-1.5 px-1">
            <div className={`h-2 w-2 rounded-full ${col.color}`} />
            <span className="text-[9px] font-semibold text-white/50">{col.title}</span>
            <span className="ml-auto text-[8px] text-white/20">{col.cards.length}</span>
          </div>
          <div className="space-y-1.5">
            {col.cards.map((card) => (
              <div key={card.text} className="rounded-md bg-white/[.04] p-2 ring-1 ring-white/[.04]">
                <div className="text-[9px] font-medium text-white/60">{card.text}</div>
                <span className={`mt-1 inline-block rounded-full px-1.5 py-0.5 text-[7px] font-medium ${card.tagColor}`}>
                  {card.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function GanttMock() {
  return (
    <div className="p-3 space-y-2">
      <div className="flex items-center gap-2 text-[8px] text-white/20 border-b border-white/[.04] pb-1 mb-2">
        <span className="w-20 text-white/40 font-semibold text-[9px]">タスク</span>
        <div className="flex-1 flex">
          {["Mon","Tue","Wed","Thu","Fri"].map(d => (
            <span key={d} className="flex-1 text-center">{d}</span>
          ))}
        </div>
      </div>
      {[
        { name: "要件定義", start: 0, width: 40, color: "from-purple-500 to-purple-400" },
        { name: "デザイン", start: 20, width: 50, color: "from-blue-500 to-blue-400" },
        { name: "フロント開発", start: 40, width: 60, color: "from-cyan-500 to-cyan-400" },
        { name: "API開発", start: 30, width: 55, color: "from-emerald-500 to-emerald-400" },
        { name: "テスト", start: 60, width: 35, color: "from-amber-500 to-amber-400" },
      ].map((task) => (
        <div key={task.name} className="flex items-center gap-2">
          <span className="w-20 text-[9px] text-white/40 truncate">{task.name}</span>
          <div className="flex-1 relative h-5">
            <div
              className={`absolute h-4 rounded-full bg-gradient-to-r ${task.color} opacity-80`}
              style={{ left: `${task.start}%`, width: `${task.width}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ChatMock() {
  return (
    <div className="p-3 space-y-2.5">
      <div className="flex items-start gap-2">
        <div className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-[8px] font-bold text-white">T</div>
        <div>
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[9px] font-semibold text-white/60">田中</span>
            <span className="text-[7px] text-white/20">10:32</span>
          </div>
          <div className="rounded-lg rounded-tl-none bg-white/[.06] px-2.5 py-1.5 text-[9px] text-white/50">
            APIの仕様変更の件、確認お願いします
          </div>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <div className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-[8px] font-bold text-white">S</div>
        <div>
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[9px] font-semibold text-white/60">鈴木</span>
            <span className="text-[7px] text-white/20">10:35</span>
          </div>
          <div className="rounded-lg rounded-tl-none bg-white/[.06] px-2.5 py-1.5 text-[9px] text-white/50">
            承知しました! エンドポイントの変更点をまとめます
          </div>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <div className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-[8px] font-bold text-white">Y</div>
        <div>
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[9px] font-semibold text-white/60">山本</span>
            <span className="text-[7px] text-white/20">10:38</span>
          </div>
          <div className="rounded-lg rounded-tl-none bg-white/[.06] px-2.5 py-1.5 text-[9px] text-white/50">
            テスト環境にも反映しておきますね
          </div>
        </div>
      </div>
      <div className="mt-1.5 flex items-center gap-2 rounded-lg bg-white/[.03] px-2.5 py-2 ring-1 ring-white/[.06]">
        <span className="text-[9px] text-white/20">メッセージを入力...</span>
        <div className="ml-auto flex h-4 w-4 items-center justify-center rounded bg-gradient-to-r from-[#7C3AED] to-[#2563EB]">
          <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ReportMock() {
  return (
    <div className="p-3">
      <div className="mb-2.5 flex items-center justify-between">
        <span className="text-[9px] font-semibold text-white/50">週次レポート</span>
        <span className="text-[7px] text-white/20">2024/03/18 - 03/24</span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "完了タスク", value: "24", change: "+8", positive: true },
          { label: "平均完了時間", value: "2.3日", change: "-0.5", positive: true },
          { label: "稼働率", value: "87%", change: "+12%", positive: true },
        ].map((metric) => (
          <div key={metric.label} className="rounded-lg bg-white/[.04] p-2 text-center ring-1 ring-white/[.04]">
            <div className="text-[11px] font-bold text-white/70">{metric.value}</div>
            <div className="text-[7px] text-white/25">{metric.label}</div>
            <div className={`text-[7px] font-semibold ${metric.positive ? "text-emerald-400" : "text-red-400"}`}>
              {metric.change}
            </div>
          </div>
        ))}
      </div>
      {/* Mini bar chart */}
      <div className="rounded-lg bg-white/[.03] p-2 ring-1 ring-white/[.04]">
        <div className="mb-1.5 text-[8px] text-white/30">タスク完了推移</div>
        <div className="flex items-end gap-1 h-12">
          {[40, 55, 45, 70, 60, 85, 75].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-[#7C3AED] to-[#2563EB] opacity-70" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="flex gap-1 mt-0.5">
          {["月","火","水","木","金","土","日"].map(d => (
            <span key={d} className="flex-1 text-center text-[6px] text-white/15">{d}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureMock({ type }: { type: "kanban" | "gantt" | "chat" | "report" }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[.08] bg-[#0e0e1a] shadow-2xl shadow-purple-500/5">
      {/* Browser bar */}
      <div className="flex items-center gap-2 border-b border-white/[.06] px-3 py-2">
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <div className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <div className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="ml-2 flex-1 rounded bg-white/[.04] px-2.5 py-0.5 text-[9px] text-white/20">
          app.flowboard.io/{type === "kanban" ? "board" : type === "gantt" ? "gantt" : type === "chat" ? "chat" : "reports"}
        </div>
      </div>
      {type === "kanban" && <KanbanMock />}
      {type === "gantt" && <GanttMock />}
      {type === "chat" && <ChatMock />}
      {type === "report" && <ReportMock />}
    </div>
  );
}


/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SaasPage() {
  return (
    <div className="min-h-screen font-sans text-gray-900 selection:bg-[#7C3AED]/20 selection:text-[#7C3AED]">
      {/* ============================================================= */}
      {/*  HEADER -- Fixed, dark, logo left + nav center + CTA right    */}
      {/* ============================================================= */}
      <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/[.06] bg-[#0a0a14]/85 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#2563EB] shadow-lg shadow-purple-500/20">
              <span className="text-sm font-bold text-white">F</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              FlowBoard
            </span>
          </div>
          {/* Nav center */}
          <nav className="hidden items-center gap-8 text-[13px] font-medium text-white/50 md:flex">
            <a href="#features" className="transition-colors duration-300 hover:text-white">Features</a>
            <a href="#pricing" className="transition-colors duration-300 hover:text-white">Pricing</a>
            <a href="#testimonials" className="transition-colors duration-300 hover:text-white">Voice</a>
            <a href="#faq" className="transition-colors duration-300 hover:text-white">FAQ</a>
          </nav>
          {/* CTA right */}
          <a
            href="#cta"
            className="group relative rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105"
          >
            {/* Accent deco like bakuraku */}
            <span className="absolute -top-1 -left-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[8px] font-black text-[#7C3AED] shadow-md">
              <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            無料で始める
          </a>
          <MobileMenu
            links={[
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" },
              { label: "Voice", href: "#testimonials" },
              { label: "FAQ", href: "#faq" },
              { label: "無料で始める", href: "#cta" },
            ]}
            accentColor="#7C3AED"
            theme="dark"
          />
        </div>
      </header>

      {/* ============================================================= */}
      {/*  1. HERO -- Dark bg, centered text, dashboard mock below      */}
      {/* ============================================================= */}
      <section className="relative overflow-hidden bg-[#0a0a14] pt-28 pb-0 text-white sm:pt-36">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(124,58,237,0.18)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_80%_80%,_rgba(37,99,235,0.08)_0%,_transparent_50%)]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          {/* Badge */}
          <FadeIn>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-4 py-1.5 font-mono text-[11px] font-semibold tracking-[.15em] text-[#a78bfa] uppercase backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7C3AED] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a78bfa]" />
              </span>
              Project Management, Simplified
            </span>
          </FadeIn>

          {/* Headline -- bonx-style keyword accent */}
          <FadeIn delay={100}>
            <h1 className="mx-auto mb-6 max-w-3xl text-[2.75rem] font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              チームの生産性を、
              <br />
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#a855f7] to-[#2563EB] bg-clip-text text-transparent">
                シンプルに。
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mx-auto mb-10 max-w-xl text-base leading-[1.9] text-white/45 sm:text-lg">
              タスク管理、ガントチャート、リアルタイムチャット、レポート自動生成。
              <br className="hidden sm:block" />
              FlowBoardひとつで、チームの
              <span className="font-semibold text-white/70">すべてのワークフロー</span>
              を統合します。
            </p>
          </FadeIn>

          {/* 2 CTAs */}
          <FadeIn delay={300}>
            <div className="mb-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#cta"
                className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB] px-8 py-4 text-base font-bold text-white shadow-[0_0_48px_rgba(124,58,237,0.3)] transition-all duration-300 hover:shadow-[0_0_64px_rgba(124,58,237,0.45)] hover:scale-105"
              >
                無料で始める
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#features"
                className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-8 py-4 text-base font-semibold text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-[#7C3AED]/40 hover:text-white"
              >
                <svg className="h-4 w-4 text-[#a78bfa]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                デモを見る
              </a>
            </div>
            <p className="font-mono text-[11px] text-white/25">
              クレジットカード不要 ・ 14日間無料トライアル
            </p>
          </FadeIn>
        </div>

        {/* Dashboard UI Mock -- aspect-[16/9] as specified */}
        <FadeIn delay={400} className="relative z-10 mx-auto mt-14 max-w-5xl px-5 sm:mt-16">
          <div className="relative">
            {/* Glow behind the mock */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#7C3AED]/20 via-[#2563EB]/10 to-[#7C3AED]/20 opacity-40 blur-2xl" />
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/[.08] bg-[#12121e] shadow-2xl shadow-purple-500/10">
              {/* Browser title bar */}
              <div className="flex items-center gap-2 border-b border-white/[.06] px-4 py-2.5">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="ml-3 flex-1 rounded-md bg-white/[.04] px-3 py-1 text-[10px] text-white/30">
                  app.flowboard.io/dashboard
                </div>
              </div>
              {/* Dashboard body */}
              <div className="flex h-[calc(100%-32px)]">
                {/* Sidebar */}
                <div className="hidden w-[160px] shrink-0 border-r border-white/[.06] p-3 sm:block">
                  <div className="mb-5 flex items-center gap-2">
                    <div className="h-5 w-5 rounded bg-gradient-to-br from-[#7C3AED] to-[#2563EB]" />
                    <div className="h-2 w-14 rounded bg-white/10" />
                  </div>
                  <div className="space-y-0.5">
                    {[
                      { name: "ダッシュボード", active: true, icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                      { name: "プロジェクト", active: false, icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" },
                      { name: "タスク", active: false, icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
                      { name: "チャット", active: false, icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
                      { name: "レポート", active: false, icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] transition-colors ${
                          item.active
                            ? "bg-[#7C3AED]/15 font-semibold text-[#a78bfa]"
                            : "text-white/25 hover:text-white/40"
                        }`}
                      >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                        </svg>
                        {item.name}
                      </div>
                    ))}
                  </div>
                  {/* Bottom user */}
                  <div className="mt-6 flex items-center gap-2 rounded-md bg-white/[.03] p-2">
                    <div className="h-5 w-5 rounded-full bg-gradient-to-br from-purple-400 to-blue-500" />
                    <div className="flex-1">
                      <div className="h-1.5 w-10 rounded bg-white/10" />
                      <div className="mt-1 h-1 w-14 rounded bg-white/[.05]" />
                    </div>
                  </div>
                </div>
                {/* Main content */}
                <div className="flex-1 p-3 sm:p-4">
                  {/* Top header */}
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-white/60">ダッシュボード</span>
                      <span className="rounded bg-[#7C3AED]/15 px-1.5 py-0.5 text-[8px] font-semibold text-[#a78bfa]">3 projects</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="h-5 w-5 rounded bg-white/[.04] ring-1 ring-white/[.06]" />
                      <div className="h-5 w-5 rounded bg-white/[.04] ring-1 ring-white/[.06]" />
                    </div>
                  </div>
                  {/* Stats row */}
                  <div className="mb-3 grid grid-cols-3 gap-2">
                    {[
                      { label: "完了", value: "24", percent: 80, color: "bg-emerald-400" },
                      { label: "進行中", value: "12", percent: 50, color: "bg-blue-400" },
                      { label: "未着手", value: "5", percent: 20, color: "bg-white/20" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-lg bg-white/[.03] p-2 text-center ring-1 ring-white/[.04]">
                        <div className="text-sm font-bold text-white sm:text-base">{s.value}</div>
                        <div className="text-[8px] text-white/25">{s.label}</div>
                        <div className="mx-auto mt-1 h-1 w-full rounded-full bg-white/[.06]">
                          <div className={`h-1 rounded-full ${s.color}`} style={{ width: `${s.percent}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Task list */}
                  <div className="rounded-lg bg-white/[.02] p-3 ring-1 ring-white/[.04]">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[9px] font-semibold text-white/35">Today&apos;s Tasks</span>
                      <span className="text-[8px] text-white/15">See all</span>
                    </div>
                    <div className="space-y-1.5">
                      {[
                        { title: "LPデザイン修正", tag: "デザイン", tagColor: "bg-purple-500/20 text-purple-300", progress: 90 },
                        { title: "API仕様書作成", tag: "開発", tagColor: "bg-blue-500/20 text-blue-300", progress: 60 },
                        { title: "週次レポート共有", tag: "管理", tagColor: "bg-emerald-500/20 text-emerald-300", progress: 30 },
                      ].map((task) => (
                        <div key={task.title} className="flex items-center gap-2 rounded-md bg-white/[.02] p-2 ring-1 ring-white/[.04]">
                          <div className="h-3 w-3 shrink-0 rounded border-[1.5px] border-white/20" />
                          <div className="flex-1 min-w-0">
                            <div className="text-[9px] font-medium text-white/60 truncate">{task.title}</div>
                            <div className="mt-1 h-1 w-full rounded-full bg-white/[.06]">
                              <div className="h-1 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB]" style={{ width: `${task.progress}%` }} />
                            </div>
                          </div>
                          <span className={`shrink-0 rounded-full px-1.5 py-0.5 text-[7px] font-medium ${task.tagColor}`}>{task.tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Gradient transition from dark to white (bonx-style bold transition) */}
        <div className="relative z-0 h-32 bg-gradient-to-b from-[#0a0a14] via-[#0a0a14]/50 to-white sm:h-40" />
      </section>

      {/* ============================================================= */}
      {/*  2. TRUSTED BY -- Logo marquee band (white bg)                */}
      {/* ============================================================= */}
      <section className="relative overflow-hidden bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-5">
          <FadeIn>
            <p className="mb-5 text-center font-mono text-[10px] font-semibold tracking-[.3em] text-gray-400 uppercase">
              Trusted by <span className="text-[#7C3AED]">500+</span> Teams
            </p>
          </FadeIn>
        </div>
        {/* CSS Marquee */}
        <div className="relative flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
            {[...logoCompanies, ...logoCompanies].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-10 w-32 items-center justify-center rounded-lg border border-gray-100 bg-gray-50/50 text-sm font-bold tracking-wide text-gray-300"
              >
                {name}
              </div>
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12" aria-hidden="true">
            {[...logoCompanies, ...logoCompanies].map((name, i) => (
              <div
                key={`${name}-dup-${i}`}
                className="flex h-10 w-32 items-center justify-center rounded-lg border border-gray-100 bg-gray-50/50 text-sm font-bold tracking-wide text-gray-300"
              >
                {name}
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </section>

      {/* ============================================================= */}
      {/*  3. CHALLENGES -- Subtle gray bg (bakuraku-style transition)  */}
      {/* ============================================================= */}
      <section className="bg-[#f8f8fb] py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <SectionLabel
              en="CHALLENGES"
              ja={
                <>
                  こんな<span className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] bg-clip-text text-transparent">課題</span>、ありませんか？
                </>
              }
            />
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mx-auto -mt-8 mb-14 max-w-md text-center text-sm leading-relaxed text-gray-400 sm:mb-16">
              多くのチームが抱える「あるある」な課題。FlowBoardはこれらをまとめて解決します。
            </p>
          </FadeIn>
          <div className="grid gap-5 sm:grid-cols-3">
            {challenges.map((item, i) => (
              <FadeIn key={i} delay={150 + i * 100}>
                <div className="group h-full rounded-2xl border border-gray-200/80 bg-white p-8 transition-all duration-300 hover:border-[#7C3AED]/20 hover:shadow-[0_8px_40px_rgba(124,58,237,0.08)] hover:scale-[1.02]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C3AED]/10 to-[#2563EB]/10 text-[#7C3AED] transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm leading-[1.9] text-gray-500">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  4. FEATURES -- Alternating large layout (bonx/bakuraku)      */}
      {/*     White bg with subtle top separator                        */}
      {/* ============================================================= */}
      <section id="features" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <FadeIn>
            <SectionLabel
              en="FEATURES"
              ja={
                <>
                  必要なものは、
                  <span className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] bg-clip-text text-transparent">すべてここに。</span>
                </>
              }
            />
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mx-auto -mt-8 mb-20 max-w-md text-center text-sm leading-relaxed text-gray-400 sm:mb-24">
              FlowBoardの4つの主要機能で、チームの生産性を最大化します。
            </p>
          </FadeIn>

          {/* Alternating left-right layout (bonx/angelux pattern) */}
          <div className="space-y-24 sm:space-y-32 lg:space-y-40">
            {features.map((f, i) => (
              <FadeIn key={i} delay={100}>
                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
                  {/* Text side */}
                  <div className={i % 2 === 0 ? "md:order-1" : "md:order-2"}>
                    <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#2563EB] font-mono text-[11px] font-bold text-white shadow-lg shadow-purple-500/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <SectionLabelLeft
                      en={`FEATURE ${String(i + 1).padStart(2, "0")}`}
                      ja={f.title}
                    />
                    <p className="max-w-md text-sm leading-[2] text-gray-500">
                      {f.desc}
                    </p>
                    <div className="mt-6 h-px w-16 bg-gradient-to-r from-[#7C3AED]/40 to-transparent" />
                  </div>
                  {/* Mock side */}
                  <div className={`${i % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                    <div className="transition-transform duration-500 hover:scale-[1.02]">
                      <FeatureMock type={f.mockType} />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  5. RESULTS -- Dark bg (bonx-style bold switch back to dark)  */}
      {/* ============================================================= */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a14] via-[#12101e] to-[#0a0a14]" />
        {/* Decorative glows */}
        <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#7C3AED]/[.06] blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-[#2563EB]/[.06] blur-[100px]" />

        <div className="relative mx-auto max-w-5xl px-5 text-white">
          <FadeIn>
            <SectionLabel
              en="RESULTS"
              ja={
                <>
                  導入企業が実感した
                  <span className="bg-gradient-to-r from-[#7C3AED] via-[#a855f7] to-[#2563EB] bg-clip-text text-transparent">効果</span>
                </>
              }
            />
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mx-auto -mt-8 mb-14 max-w-md text-center text-sm leading-relaxed text-white/35 sm:mb-16">
              FlowBoard導入企業の平均的な改善数値です。
            </p>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((s, i) => (
              <FadeIn key={i} delay={150 + i * 120}>
                <div className="group rounded-2xl border border-white/[.06] bg-white/[.03] p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#7C3AED]/25 hover:bg-white/[.05] hover:scale-[1.03]">
                  <div className="mb-4 flex items-center justify-center gap-1.5">
                    <span className="text-5xl font-black tabular-nums tracking-tight text-white sm:text-6xl lg:text-7xl">
                      {s.value}
                    </span>
                    <span className="text-2xl font-bold text-[#a855f7] sm:text-3xl">{s.unit}</span>
                  </div>
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[10px] ${
                      s.direction === "down"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}>
                      {s.direction === "down" ? (
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      ) : (
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm font-bold text-white/80">{s.label}</span>
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/35">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  6. PRICING -- White bg, Pro highlighted (bakuraku-style)     */}
      {/* ============================================================= */}
      <section id="pricing" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <SectionLabel
              en="PRICING"
              ja={
                <>
                  シンプルな
                  <span className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] bg-clip-text text-transparent">料金プラン</span>
                </>
              }
            />
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mx-auto -mt-8 mb-14 max-w-md text-center text-sm leading-relaxed text-gray-400 sm:mb-16">
              チームの規模に合わせて最適なプランをお選びください。
            </p>
          </FadeIn>

          <div className="grid items-start gap-6 sm:grid-cols-3">
            {plans.map((p, i) => (
              <FadeIn key={i} delay={150 + i * 100}>
                <div
                  className={`group relative h-full overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(124,58,237,0.08)] ${
                    p.highlight
                      ? "scale-[1.02] border-transparent bg-white shadow-xl shadow-purple-500/10"
                      : "border-gray-200/80 bg-white hover:border-gray-300"
                  }`}
                  style={
                    p.highlight
                      ? {
                          background:
                            "linear-gradient(white, white) padding-box, linear-gradient(135deg, #7C3AED, #2563EB) border-box",
                          borderColor: "transparent",
                          borderWidth: "2px",
                        }
                      : undefined
                  }
                >
                  {p.highlight && (
                    <span className="absolute top-0 right-0 rounded-bl-xl bg-gradient-to-r from-[#7C3AED] to-[#2563EB] px-4 py-1.5 text-[11px] font-bold text-white">
                      おすすめ
                    </span>
                  )}
                  <h3
                    className={`mb-1 text-lg font-bold ${
                      p.highlight ? "text-[#7C3AED]" : "text-gray-400"
                    }`}
                  >
                    {p.name}
                  </h3>
                  <div className="mb-1 flex items-end gap-1">
                    {p.price === "要問合せ" ? (
                      <span className="text-3xl font-extrabold text-gray-900">要問合せ</span>
                    ) : (
                      <>
                        <span className="text-lg font-medium text-gray-400">&yen;</span>
                        <span className="text-4xl font-black tabular-nums text-gray-900">{p.price}</span>
                        <span className="mb-1 text-sm text-gray-400">{p.period}</span>
                      </>
                    )}
                  </div>
                  <p className="mb-7 text-[13px] text-gray-400">{p.desc}</p>
                  <ul className="mb-8 space-y-3">
                    {p.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-[13px] text-gray-600">
                        <span
                          className={`mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] ${
                            p.highlight
                              ? "bg-[#7C3AED]/10 text-[#7C3AED]"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          &#10003;
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#cta"
                    className={`block rounded-full py-3.5 text-center text-sm font-bold transition-all duration-300 ${
                      p.highlight
                        ? "bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
                        : "border border-gray-200 text-gray-600 hover:border-[#7C3AED]/40 hover:text-[#7C3AED]"
                    }`}
                  >
                    {p.highlight ? "14日間無料で試す" : p.price === "要問合せ" ? "お問い合わせ" : "無料で始める"}
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  7. TESTIMONIALS -- Light gray bg                             */}
      {/* ============================================================= */}
      <section id="testimonials" className="bg-[#f8f8fb] py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn>
            <SectionLabel
              en="VOICE"
              ja={
                <>
                  お客様の<span className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] bg-clip-text text-transparent">声</span>
                </>
              }
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={100 + i * 120}>
                <div className="group flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-8 transition-all duration-300 hover:border-[#7C3AED]/20 hover:shadow-[0_8px_40px_rgba(124,58,237,0.06)]">
                  {/* Stars */}
                  <div className="mb-5 flex gap-1 text-[#7C3AED]">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <svg key={si} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-6 flex-1 text-[13px] leading-[2] text-gray-600">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#2563EB] text-sm font-bold text-white shadow-md shadow-purple-500/20">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                      <p className="text-[11px] text-gray-400">
                        {t.company} / {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  8. FAQ -- White bg, accordion                                */}
      {/* ============================================================= */}
      <section id="faq" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-5">
          <FadeIn>
            <SectionLabel
              en="FAQ"
              ja={
                <>
                  よくある
                  <span className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] bg-clip-text text-transparent">ご質問</span>
                </>
              }
            />
          </FadeIn>
          <FadeIn delay={100}>
            <FaqSection />
          </FadeIn>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  9. CTA -- Dark gradient (bonx/bakuraku final CTA)           */}
      {/* ============================================================= */}
      <section id="cta" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a14] via-[#12101e] to-[#0a0a14]" />
        {/* Decorative glows */}
        <div className="absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-[#7C3AED]/10 blur-[100px]" />
        <div className="absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-[#2563EB]/10 blur-[100px]" />
        {/* Decorative lines */}
        <div className="absolute top-12 left-1/2 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />
        <div className="absolute bottom-12 left-1/2 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />

        <div className="relative mx-auto max-w-2xl px-5 text-center text-white">
          <FadeIn>
            <SectionLabel
              en="GET STARTED"
              ja={
                <>
                  今すぐ、チームの
                  <br />
                  <span className="bg-gradient-to-r from-[#7C3AED] via-[#a855f7] to-[#2563EB] bg-clip-text text-transparent">
                    働き方を変えよう。
                  </span>
                </>
              }
            />
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mx-auto -mt-8 mb-5 max-w-md text-sm leading-[1.9] text-white/35">
              FlowBoardで、プロジェクト管理の「面倒」をなくしませんか？
              <br />
              14日間、すべての機能を無料でお試しいただけます。
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="mx-auto mb-8 flex items-center justify-center gap-4 text-[12px] text-white/40">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-emerald-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                14日間無料
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-emerald-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                クレジットカード不要
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-emerald-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                いつでも解約
              </span>
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <a
              href="#"
              className="group relative mx-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB] px-12 py-5 text-base font-bold text-white shadow-[0_0_48px_rgba(124,58,237,0.35)] transition-all duration-300 hover:shadow-[0_0_72px_rgba(124,58,237,0.5)] hover:scale-105"
            >
              14日間無料トライアルを始める
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  10. FOOTER -- 4-column links (bakuraku-style)                */}
      {/* ============================================================= */}
      <footer className="border-t border-gray-100 bg-white py-14">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {/* Brand */}
            <div>
              <div className="mb-4 flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#2563EB] shadow-lg shadow-purple-500/20">
                  <span className="text-sm font-bold text-white">F</span>
                </div>
                <span className="text-lg font-bold text-gray-900">FlowBoard</span>
              </div>
              <p className="text-[13px] leading-relaxed text-gray-400">
                チームの生産性を、シンプルに。
                <br />
                プロジェクト管理をひとつに統合。
              </p>
            </div>
            {/* Product */}
            <div>
              <h4 className="mb-4 font-mono text-[11px] font-semibold tracking-[.2em] text-gray-900 uppercase">
                Product
              </h4>
              <ul className="space-y-2.5 text-[13px] text-gray-400">
                <li><a href="#features" className="transition-colors hover:text-[#7C3AED]">機能一覧</a></li>
                <li><a href="#pricing" className="transition-colors hover:text-[#7C3AED]">料金プラン</a></li>
                <li><a href="#" className="transition-colors hover:text-[#7C3AED]">アップデート情報</a></li>
                <li><a href="#" className="transition-colors hover:text-[#7C3AED]">API ドキュメント</a></li>
              </ul>
            </div>
            {/* Support */}
            <div>
              <h4 className="mb-4 font-mono text-[11px] font-semibold tracking-[.2em] text-gray-900 uppercase">
                Support
              </h4>
              <ul className="space-y-2.5 text-[13px] text-gray-400">
                <li><a href="#" className="transition-colors hover:text-[#7C3AED]">ヘルプセンター</a></li>
                <li><a href="#" className="transition-colors hover:text-[#7C3AED]">お問い合わせ</a></li>
                <li><a href="#" className="transition-colors hover:text-[#7C3AED]">ステータスページ</a></li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h4 className="mb-4 font-mono text-[11px] font-semibold tracking-[.2em] text-gray-900 uppercase">
                Company
              </h4>
              <ul className="space-y-2.5 text-[13px] text-gray-400">
                <li><a href="#" className="transition-colors hover:text-[#7C3AED]">運営会社</a></li>
                <li><a href="#" className="transition-colors hover:text-[#7C3AED]">採用情報</a></li>
                <li><a href="#" className="transition-colors hover:text-[#7C3AED]">プライバシーポリシー</a></li>
                <li><a href="#" className="transition-colors hover:text-[#7C3AED]">利用規約</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-100 pt-8 text-center font-mono text-[11px] text-gray-300">
            &copy; {new Date().getFullYear()} FlowBoard, Inc. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ===== Floating CTA ===== */}
      <FloatingCTA />
    </div>
  );
}
