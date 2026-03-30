# ANGELUX レイアウト・エフェクト分析

## 基本情報
- URL: https://angelux.co.jp/
- 業種: 美容系（エステティックサロン）
- 使用技術: Barba.js（ページ遷移）, Lenis（スムーススクロール）, WebGL/Canvas, GSAP推定, SVGアニメーション, カスタムdata属性によるアニメーション制御

## セクション構成と移り変わり

### 1. プリローダー（`preloader`）
- SVGロゴがストロークアニメーションで描画
- 円形プログレスバー（`circleButton_circleBefore` SVG circle）
- 完了後カバーがスライドアウト

### 2. ヒーロー（`homeFv`）
- **背景動画フルスクリーン**: PC/SP別の動画src切り替え（`data-video-pc-src` / `data-video-sp-src`）
- **WebGLキャンバスオーバーレイ**: `<canvas id="home-webgl">` で動画にグリッチ/歪みエフェクト
- テキスト: 日本語コピー + 英語サブコピー（`split="line"` でテキスト分割アニメーション）
- ニュース記事リンク（`homeFv_article`）が下部に配置
- 動画再生ボタン: 円形SVGボタン（`circleButton`）

### 3. About Us セクション（`homeAbout`）
- **パララックス**: `data-parallax="img"` `data-parallax-ratio="0.8"` で背景画像が遅延スクロール
- タイトル: 英語大文字 + 水彩風デコレーション（`title_water`）
- テキスト分割アニメーション: `data-animation="common-mask-text"` `data-split="line"`
- View Moreボタン: 円形ドット + テキスト + 矢印SVG
- **マーキー**: 「Changing the Face of Beauty.」が無限横スクロール

### 4. Brands セクション（`homeBrands`）
- 4ブランドをグリッド配置
- 番号（01-04）+ ブランド名 + 説明 + 画像
- 画像: `data-animation="common-scale"` でスクロール時にスケールイン
- `data-parallax="img" data-parallax-ratio="1"` で画像パララックス
- `<picture>` + `<source>` でPC/SP/WebP対応

### 5. Voices セクション（`homeVoices`）
- SVGテキストアート（「Thought and Origins of Esthetic」）
- `data-animation="home-color"` で文字色が段階的に変化するアニメーション
- 3行に分かれたSVG path群（`home-color-row-1/2/3`）

### 6. ナビゲーション（`nav`）
- フルスクリーンオーバーレイ
- WebGLキャンバス背景（`common-webgl`）
- リンクに `data-mask` テキストマスクアニメーション
- ホバー: アンダーライン（`data-hover="line"`）

## 写真と文の配置パターン

### パターン1: フルスクリーン動画ヒーロー
```
┌──────────────────────────────────┐
│  ████████ 背景動画 ██████████████│
│  ████ WebGLオーバーレイ █████████│
│                                  │
│   日本語コピー（左寄せ）          │
│   英語サブコピー                  │
│                                  │
│   ○ 動画再生ボタン（円形SVG）     │
│                                  │
│   ── ニュース記事 ──→            │
└──────────────────────────────────┘
```

### パターン2: テキスト中央 + マーキー背景（About）
```
┌──────────────────────────────────┐
│     [英語タイトル + 水彩デコ]      │
│                                  │
│    日本語リード文（中央寄せ）      │
│    説明文                         │
│    [View More →]                  │
│                                  │
│ ← Changing the Face of Beauty. → │
│    （マーキー無限横スクロール）    │
└──────────────────────────────────┘
```

### パターン3: 番号 + テキスト + 画像グリッド（Brands）
```
┌──────────────────────────────────┐
│ 01                               │
│ ANGELUX                          │
│ 説明文テキスト...                 │
│                                  │
│ ┌────────────────────────────┐   │
│ │    画像（スケールイン）      │   │
│ │    パララックス効果          │   │
│ └────────────────────────────┘   │
├──────────────────────────────────┤
│ 02                               │
│ ANGELUX Skincare Center          │
│ 説明文テキスト...                 │
│ ┌──────────────┐                 │
│ │ 画像（縦長）  │                 │
│ │ 480x672      │                 │
│ └──────────────┘                 │
└──────────────────────────────────┘
```
- PC: テキスト左 + 画像右（交互配置はCSS Grid推定）
- SP: テキスト上 + 画像下の縦積み

### パターン4: SVGテキストアート（Voices）
```
┌──────────────────────────────────┐
│                                  │
│  T h o u g h t  a n d           │
│  O r i g i n s  o f             │
│  E s t h e t i c                │
│                                  │
│  （SVGパスが段階的に色変化）      │
└──────────────────────────────────┘
```

## エフェクト一覧

| 要素 | エフェクト | CSS/JSコード |
|------|----------|-------------|
| プリローダー | SVGストローク描画 | `stroke-dasharray` + `stroke-dashoffset` アニメーション |
| プリローダー | 円形プログレス | `circle` SVG, `stroke-dashoffset` 0→circumference |
| ヒーロー動画 | WebGLエフェクト | `<canvas id="home-webgl">` カスタムシェーダー |
| コピーテキスト | 行分割マスク | `data-split="line"` + `data-animation="fv-copy-ja"` |
| About見出し | パララックス水彩 | `data-parallax="img" data-parallax-ratio="0.8"` |
| Aboutテキスト | マスクテキスト | `data-animation="common-mask-text"` + `data-split="line"` |
| マーキー | 無限横スクロール | `marquee` CSS animation: translateX(-100%) infinite linear |
| Brands画像 | スケールイン | `data-animation="common-scale"` overflow:hidden + scale(1.1→1) |
| Brands画像 | パララックス | `data-parallax="img" data-parallax-ratio="1"` |
| Voicesテキスト | 段階色変化 | `data-animation="home-color"` SVG fill色が順次変化 |
| ナビリンク | アンダーラインホバー | `data-hover="line"` + `data-hover="line-item"` |
| ボタン | 円形ドット展開 | `data-hover="button-circle"` scale(0→1) |
| ボタン矢印 | 矢印スライド | `data-hover="arrow-before/after"` translateX |
| ページ遷移 | Barba.js | `data-barba="wrapper/container"` でSPA遷移 |
| スクロール | スムーススクロール | Lenis（`class="lenis lenis-smooth"`） |

## 再現用CSSスニペット

### プリローダーSVGストローク描画
```css
.preloader_logoAfter path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 2s ease-in-out forwards;
}
@keyframes draw {
  to { stroke-dashoffset: 0; }
}
```

### マーキー無限横スクロール
```css
.marquee {
  overflow: hidden;
  white-space: nowrap;
}
.marquee_blk {
  display: flex;
  animation: marquee 20s linear infinite;
}
.marquee_item {
  display: flex;
  flex-shrink: 0;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

### 画像スケールインアニメーション
```css
.scale-container {
  overflow: hidden;
  border-radius: 4px;
}
.scale-container img {
  transform: scale(1.15);
  transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.scale-container.is-visible img {
  transform: scale(1);
}
```

### テキストマスク（行分割）アニメーション
```css
[data-split="line"] {
  overflow: hidden;
}
[data-split="line-base"] {
  display: block;
  transform: translateY(110%);
  transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
}
[data-split="line-base"].is-visible {
  transform: translateY(0);
}
```

### View Moreボタン
```css
.button {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  padding: 0.75rem 0;
}
.button_line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: currentColor;
  opacity: 0.3;
}
.button_lineInner {
  width: 0;
  height: 100%;
  background: currentColor;
  transition: width 0.4s ease;
}
.button:hover .button_lineInner {
  width: 100%;
}
.button_circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
  transform: scale(0);
  transition: transform 0.3s ease;
}
.button:hover .button_circle {
  transform: scale(1);
}
```
