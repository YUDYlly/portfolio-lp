# BONX WORK レイアウト・エフェクト分析

## 基本情報
- URL: https://bonx.co/work/
- 業種: SaaS（現場コミュニケーション / ワンストップソリューション）
- 使用技術: Next.js（`__variable_fe6e10` CSS Modules）, CSS Modules（BEM命名 + ハッシュ）, WebM動画アニメーション（イラスト）, AVIF/WebP/PNG `<picture>` + `<source>` レスポンシブ画像, アコーディオンナビゲーション

## セクション構成と移り変わり

### 1. ヘッダー / ナビ（`Header_root`）
- PC: `DesktopNavigation` 水平メニュー + サブメニュードロップダウン
- SP: `MobileAccordionNavgation` ハンバーガー + アコーディオン
- 言語切替（Ja/En）
- サブナビ: ログイン + 資料ダウンロードボタン

### 2. ヒーロー（`Header_root__t7Q7f`内の `<header>`）
- **BONX WORK SVGロゴ** + キャッチコピー「コミュニケーションのムダをゼロにして、現場を進化させよう。」
- 「ゼロ」に `Header_zero__46qeb` クラスで特別なスタイリング（太字/アクセント色）
- CTAボタン: 「資料ダウンロード」
- **スマホアプリモックアップ画像**: `BonxWorkRoomVideo` コンポーネント
  - 前面画像 + 背面フラッシュ画像（`backgroundFlash`）でアニメーション
  - AVIF → WebP → PNG のフォールバック
- **BONX BOOSTデバイス画像**: 製品写真
- **イラストループ**: WebM動画を水平ループスクロール（`IllustrationLoop`）

### 3. ソリューション / 業種別セクション（`#solution`推定）
- 小売、介護、建設・土木、ホテル・旅館のカテゴリ
- カードリンク型

### 4. 事例セクション
- 導入事例カード

### 5. 料金セクション
- 料金プラン + シミュレーションリンク

### 6. TIPS / FAQ
- コンテンツリンク

## 写真と文の配置パターン

### パターン1: テキスト左 + ビジュアル右（ヒーロー）
```
┌──────────────────────────────────┐
│ [SVGロゴ]                        │
│                                  │
│ コミュニケーションの              │
│ ムダを「ゼロ」にして、            │
│ 現場を進化させよう。              │
│                                  │
│ BONX WORKは...（説明文）          │
│                                  │
│ [資料ダウンロード]     ┌────────┐│
│                       │ [スマホ]││
│                       │ モック  ││
│                       │ アップ  ││
│                       │ + BONX  ││
│                       │ デバイス││
│                       └────────┘│
│                                  │
│ ← [イラスト動画ループスクロール] →│
└──────────────────────────────────┘
```

### パターン2: イラストループバンド
```
← ─── ─── ─── ─── ─── ─── →
 [chat] [talk] [group] [comm] [record] [chat] [talk]...
  WebM   WebM   WebM    WebM    WebM    WebM   WebM
 200x200 各イラストが無限ループ横スクロール
```

### パターン3: アプリモックアップ + 背景フラッシュ
```
┌──────────────────┐
│  ┌────────────┐  │
│  │ スマホ画面  │  │
│  │ talk.png   │  │
│  │            │  │
│  │ ┌────────┐ │  │
│  │ │flash   │ │  │  ← 背景フラッシュで
│  │ │talk_2  │ │  │    点滅エフェクト
│  │ └────────┘ │  │
│  └────────────┘  │
│                   │
│     [BONX BOOST]  │  ← 製品画像 190x190
└──────────────────┘
```

## エフェクト一覧

| 要素 | エフェクト | CSS/JSコード |
|------|----------|-------------|
| 「ゼロ」テキスト | アクセント強調 | `Header_zero__46qeb` 太字 + 特殊スタイル |
| イラスト | ループ横スクロール | `IllustrationLoop_list` CSS animation: translateX infinite linear |
| イラスト | WebM動画自動再生 | `<video preload="auto" loop playsinline>` + `<source type="video/webm">` |
| スマホモック | 背景フラッシュ | `BonxWorkRoomVideo_backgroundFlash` opacity切り替え |
| 画像 | AVIF/WebP段階配信 | `<picture><source type="image/avif"><source type="image/webp"><img>` |
| SPナビ | アコーディオン | `AccordionMenuChild` aria-expanded + CSS高さアニメーション |
| ボタン | デフォルトスタイル | `ButtonDefault_root` + サイズ/テーマバリエーション |

## 再現用CSSスニペット

### イラストループスクロール
```css
.illustration-loop {
  overflow: hidden;
  width: 100%;
}
.illustration-loop__list {
  display: flex;
  animation: scroll-loop 30s linear infinite;
  width: max-content;
}
.illustration-loop__item {
  flex-shrink: 0;
  width: 200px;
  height: 200px;
}
.illustration-loop__item video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@keyframes scroll-loop {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

### ヒーローテキスト + ビジュアル
```css
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  padding: 4rem 2rem;
}
.hero__text h1 {
  font-size: 2rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}
.hero__text strong {
  display: block;
  font-size: 1.75rem;
  margin-bottom: 1rem;
}
.hero__zero {
  font-weight: 900;
  color: var(--accent);
  font-size: 1.2em;
}
.hero__visual {
  position: relative;
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
  }
}
```

### SPアコーディオンナビ
```css
.accordion-nav__item {
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.accordion-nav__label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
}
.accordion-nav__sub {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.accordion-nav__item.is-open .accordion-nav__sub {
  max-height: 500px;
}
```

## 特記事項
- Next.js（SSR/SSG）でCSS Modulesを使用、クラス名にハッシュ値が付与される
- WebMフォーマットの動画イラストを多用し、GIFより軽量で高品質なアニメーション
- AVIF → WebP → PNGの段階的画像フォーマット最適化
- 「ゼロ」のようなキーワードに専用クラスを付けてアクセントスタイリング
