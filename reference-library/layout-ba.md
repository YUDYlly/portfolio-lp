# Ba & Co レイアウト・エフェクト分析

## 基本情報
- URL: https://ba-and.co/
- 業種: 建設系（建築事務所 / 場の企画・運営・設計）
- 使用技術: Nuxt.js（`#__nuxt`）, Google Web Designer / Studio Design（`.sd` / `.StudioCanvas`）, CSS `appear` クラス, `<video>` 自動再生, `<section>` + `fixed` ポジション

## セクション構成と移り変わり

### 1. ヘッダー（`#header`）
- `fixed` 配置で常時表示
- SVGロゴ + ハンバーガーメニュー（Material Icons `menu`）
- ナビリンク: Top / Projects / Member / Recruit / Contact us
- テキストリンクに `appear` クラスでフェードインアニメーション

### 2. ヒーロー（`section` 1番目）
- **固定画像セクション**: `class="section fixed"` で固定ポジション
- 背景画像（`data-r-*` 属性でリアクティブスタイル）

### 3. 動画セクション（`section` 2番目）
- **フルスクリーン動画**: PC用（1920x1080）+ SP用（1080x1920）の2つの `<video>`
  - `autoplay loop playsinline` + `#t=0.01`（iOSサムネイル対策）
- 動画の上にテキストオーバーレイ（ネストされた `<section>`）
  - 「つくるだけでなく、ともによりそう」
  - 「未来の理想を思い描くだけでなく、リアリティを持って場づくりに向き合う。」

### 4. Projects セクション（`section` 3番目）
- 英語タイトル「Projects」
- セクションフィルタ: テキストリンク群
- プロジェクトカードグリッド

### 5. フッター / コンタクト
- テキストリンクで構成

## 写真と文の配置パターン

### パターン1: フルスクリーン動画 + テキストオーバーレイ
```
┌──────────────────────────────────┐
│  ████████████████████████████████│
│  ████ 背景動画（自動再生）███████│
│  ████████████████████████████████│
│                                  │
│   つくるだけでなく、ともによりそう │
│                                  │
│   未来の理想を思い描くだけでなく、 │
│   リアリティを持って場づくりに     │
│   向き合う。                      │
│   Ba & Coは場の企画・運営・設計を │
│   通じて社会に貢献する会社です。   │
│                                  │
│  ████████████████████████████████│
└──────────────────────────────────┘
```

### パターン2: 固定背景 + スクロールコンテンツ
```
┌──────────────────────────────────┐
│  ┌───────────────────────────┐   │
│  │ 背景画像（position:fixed） │   │
│  │ z-index: 低               │   │
│  └───────────────────────────┘   │
│                                  │
│  ┌───────────────────────────┐   │
│  │ スクロールコンテンツ       │   │
│  │ z-index: 高               │   │
│  │ 動画 + テキスト            │   │
│  └───────────────────────────┘   │
│                                  │
│  次のセクションがスクロールで      │
│  背景の上に重なっていく           │
└──────────────────────────────────┘
```

### パターン3: テキスト中央揃え（コンセプト）
```
┌──────────────────────────────────┐
│                                  │
│      大きな見出しテキスト         │
│      （appear フェードイン）      │
│                                  │
│      説明文テキスト               │
│      （appear フェードイン、遅延）│
│                                  │
└──────────────────────────────────┘
```

## エフェクト一覧

| 要素 | エフェクト | CSS/JSコード |
|------|----------|-------------|
| 全要素 | フェードイン | `.appear` クラス（IntersectionObserver推定） |
| 背景画像 | 固定パララックス | `class="section fixed"` position:fixed相当 |
| 動画 | 自動再生ループ | `autoplay loop playsinline muted` + `#t=0.01` |
| PC/SP動画切替 | レスポンシブ | PC: 1920x1080 / SP: 1080x1920 の2つの `<video>` |
| テキスト | フェードイン | `.appear` クラスで段階的表示 |
| ナビ | ハンバーガーメニュー | Material Icons `menu` ボタン |
| アクセシビリティ | 読み上げ | `TitleAnnouncer` / `DynamicAnnouncer` aria-live |

## 再現用CSSスニペット

### 固定背景セクション + スクロールオーバーレイ
```css
.section-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
}
.section-scroll {
  position: relative;
  z-index: 1;
  background: transparent;
}
.section-scroll + .section-solid {
  position: relative;
  z-index: 2;
  background: white;
}
```

### フルスクリーン動画（PC/SP切替）
```css
.hero-video {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.hero-video__pc {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-video__sp {
  display: none;
}
@media (max-width: 768px) {
  .hero-video__pc { display: none; }
  .hero-video__sp { display: block; width: 100%; height: 100%; object-fit: cover; }
}
```

### フェードインアニメーション
```css
.appear {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.appear.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

### テキストオーバーレイ on 動画
```css
.video-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 2;
}
.video-overlay h2 {
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  letter-spacing: 0.1em;
}
.video-overlay p {
  font-size: 1rem;
  line-height: 2;
  max-width: 600px;
}
```

## 特記事項
- Nuxt.js + Google Web Designer (Studio) のハイブリッド構成
- `data-s-*` 属性にユニークIDが付与される（Studio Design固有）
- `data-r-*` 属性でリアクティブスタイルバインディング
- 固定背景 + スクロールコンテンツのレイヤー構成が特徴的
- アクセシビリティ: `aria-live` アナウンサー、`aria-hidden` 制御
