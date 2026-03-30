# 溝田建築設計 (mizota) レイアウト・エフェクト分析

## 基本情報
- URL: https://mizota-ks.com/
- 業種: 建設系（注文住宅設計施工）
- 使用技術: WordPress, Splide.js（スライダー）, GSAP推定（`js-trigger` / `js-parallax`）, カスタムBEM CSS（`c-` / `p-` / `l-` / `u-` プレフィックス）, IntersectionObserver推定

## セクション構成と移り変わり

### 1. ヘッダー（`l-header`）
- クラス: `-white -nav-over -animation` で初期状態を定義
- `js-header` でスクロール時の色変化制御
- ナビ: 2列リスト構成（私たちについて / 家づくり / 施工事例 | モデルハウス / 土地情報 / 会社案内）
- CTAボタン: `c-button-cv` お問い合わせ
- ハンバーガー: `c-button-menu js-drawer-toggle` でドロワー展開

### 2. ドロワーメニュー（`l-drawer`）
- `aria-modal="true"` のフルスクリーンメニュー
- 左側: **Splide.jsスライダー**（施工事例画像3枚、フェード切り替え `splide--fade`）
- 右側: 2列ナビゲーション + CVカード（お問い合わせ + 電話）

### 3. ヒーロー（`p-top-hero`）
- **テキスト**: SVG画像キャッチ「わたしたちにちょうどいい家」 + サブコピー
- **お知らせカード**（`c-card-fv`）: 画像 + テキスト + タグ + 日付
- **背景**: Splide.jsフェードスライダー（3枚の施工写真）
  - `splide--fade` モードで画像がフェードで切り替わる

### 4. コンセプト（`p-top-concept`）
- `js-slide-back` クラス: セクション間のスライド遷移
- 見出し: 英語サブタイトル「Concept」 + 日本語見出し
- `js-trigger` / `js-trigger-concept-bg`: スクロールトリガーアニメーション
- **パララックス背景写真**: 5枚の画像を配置（`-pattern01` 〜 `-pattern05`）
  - `js-parallax-wrap` / `js-parallax` でパララックス
  - `transform: translate(0px, 0px)` がスクロールに応じて変化
- テキスト: 3段落の詩的なコピー
- リンク: `c-link -concept` アイコン付き

### 5. 施工事例（`p-top-case`）
- `js-header-change js-slide-front`: ヘッダー色変更 + 前面スライド
- 見出し: 英語「Case」 + 日本語「施工事例」（`c-heading-top -small`）
- **水平スライダー**（Splide.js `splide--slide`）
  - 8枚のカード: No.013-020
  - カード構造: 画像 + 番号 + タイトル + カテゴリタグ
  - 矢印ナビゲーション（前後ボタン）
  - `style="padding-left: 60px; padding-right: 60px;"` で左右パディング
  - 各スライドに `opacity: 0` 初期値 → スクロールでフェードイン

### 6. お知らせ + ブログ（`p-top-article-wrap`）
- 2列横並び: お知らせ / ブログ
- 各セクション: 英語サブ + 日本語見出し + カードリスト（3件）+ 一覧リンク
- カード: 画像 + タグ + 日付 + タイトル（`c-card-article -small`）

### 7. リンクバナー（`p-top-link-wrap`）
- 2枚のフルワイドバナー（私たちについて / 土地・分譲情報）
- 背景画像 + オーバーレイ + テキスト + 矢印アイコン

### 8. CV（CTA）セクション（`l-cv`）
- 「Contact」+ 「お問い合わせ」見出し
- CVカード

## 写真と文の配置パターン

### パターン1: SVGキャッチ + フェードスライダー背景（ヒーロー）
```
┌──────────────────────────────────┐
│  ████ 背景スライダー（3枚フェード）█│
│  ████████████████████████████████│
│                                  │
│   [SVG] わたしたちにちょうどいい家 │
│   サブコピーテキスト              │
│                                  │
│   ┌─────────────────────────┐    │
│   │ [お知らせカード]         │    │
│   │  タグ / 日付 / タイトル  │    │
│   └─────────────────────────┘    │
└──────────────────────────────────┘
```

### パターン2: パララックス散りばめ写真 + 中央テキスト（コンセプト）
```
┌──────────────────────────────────┐
│     [写真01]        [写真02]      │
│      (parallax)      (parallax)   │
│                                  │
│        Concept                    │
│   時を越えて心地よさが続く家。     │
│                                  │
│  [写真03]      テキスト本文...    │
│   (parallax)                      │
│                                  │
│        [写真04]     [写真05]      │
│         (parallax)   (parallax)   │
└──────────────────────────────────┘
```
- 5枚の写真がセクション背景に散りばめられ、それぞれ異なる速度でパララックス
- テキストは中央配置で写真の間に浮かぶ構成

### パターン3: 水平スクロールカードスライダー（施工事例）
```
← [◁] ─────────────────────── [▷] →
 ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
 │[画像]│ │[画像]│ │[画像]│ │[画像]│
 │      │ │      │ │      │ │      │
 │No.020│ │No.019│ │No.018│ │No.017│
 │タイトル│ │タイトル│ │タイトル│ │タイトル│
 │[タグ] │ │[タグ] │ │[タグ] │ │[タグ] │
 └──────┘ └──────┘ └──────┘ └──────┘
       （Splide.js カルーセル）
```

### パターン4: 2カラムバナー（リンクセクション）
```
┌────────────────┐ ┌────────────────┐
│ ██ 背景画像 ███ │ │ ██ 背景画像 ███ │
│                │ │                │
│  About us      │ │  For sale      │
│  私たちについて │ │  土地・分譲情報 │
│            [→] │ │            [→] │
└────────────────┘ └────────────────┘
```

### パターン5: 小カードリスト（お知らせ / ブログ）
```
┌──────────────────────────────────┐
│  Information        Blog          │
│  お知らせ            ブログ        │
│                                  │
│  ┌────┐ タイトル   ┌────┐ タイトル│
│  │[画]│ タグ 日付   │[画]│ タグ日付│
│  └────┘            └────┘        │
│  ┌────┐ タイトル   ┌────┐ タイトル│
│  │[画]│ タグ 日付   │[画]│ タグ日付│
│  └────┘            └────┘        │
│            [一覧を見る →]          │
└──────────────────────────────────┘
```

## エフェクト一覧

| 要素 | エフェクト | CSS/JSコード |
|------|----------|-------------|
| ヒーロー背景 | フェードスライダー | Splide.js `splide--fade` 3枚自動切り替え |
| ドロワー内 | フェードスライダー | Splide.js `splide--fade` 施工事例写真 |
| コンセプト写真 | パララックス | `js-parallax` transform:translate がスクロール連動 |
| コンセプトBG | スクロールトリガー | `js-trigger-concept-bg` で背景変化 |
| 施工事例カード | 水平スライダー | Splide.js `splide--slide` ドラッグ対応 |
| 施工事例カード | フェードイン | `opacity: 0` → スクロールでフェードイン |
| 見出し | スクロールトリガー | `js-trigger` で表示時にアニメーション開始 |
| セクション | 前後スライド | `js-slide-back` / `js-slide-front` でZ軸遷移 |
| ヘッダー | 色変化 | `js-header-change` でスクロール位置に応じた白/色付き切り替え |
| リンクバナー | 矢印アイコンアニメ | `c-link__icon__inner` 2重画像で矢印スライドイン |
| 遅延表示 | 遅延トリガー | `js-trigger-later` 通常トリガーより遅延して発火 |

## 再現用CSSスニペット

### パララックス散りばめ写真
```css
.concept {
  position: relative;
  min-height: 150vh;
  padding: 8rem 2rem;
}
.concept__media {
  position: absolute;
  overflow: hidden;
  border-radius: 8px;
}
.concept__media.-pattern01 {
  top: 5%;
  left: 5%;
  width: 35%;
}
.concept__media.-pattern02 {
  top: 10%;
  right: 5%;
  width: 30%;
}
.concept__media.-pattern03 {
  top: 40%;
  left: 0;
  width: 40%;
}
.concept__media.-pattern04 {
  top: 60%;
  right: 10%;
  width: 25%;
}
.concept__media.-pattern05 {
  bottom: 5%;
  left: 15%;
  width: 35%;
}
.concept__media img {
  width: 100%;
  height: auto;
  transform: translateY(var(--parallax-offset, 0));
  transition: transform 0.1s linear;
}
```

### 英語サブタイトル + 日本語見出し（建設系スタイル）
```css
.c-heading-top {
  margin-bottom: 2rem;
}
.c-heading-top__sub {
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 0.5rem;
}
.c-heading-top__main {
  font-family: 'Noto Serif JP', serif;
  font-size: 1.75rem;
  line-height: 1.6;
  color: #333;
}
```

### Splideフェードスライダー
```html
<div class="splide" data-splide='{"type":"fade","autoplay":true,"interval":5000,"pauseOnHover":false}'>
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide"><img src="hero01.jpg" alt=""></li>
      <li class="splide__slide"><img src="hero02.jpg" alt=""></li>
      <li class="splide__slide"><img src="hero03.jpg" alt=""></li>
    </ul>
  </div>
</div>
```

### 矢印アイコンアニメーション
```css
.c-link__icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid currentColor;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.c-link__icon__inner {
  display: flex;
  transition: transform 0.3s ease;
}
.c-link__icon__inner img:first-child {
  width: 16px;
}
.c-link__icon__inner img:last-child {
  width: 16px;
  margin-left: 24px;
}
.c-link:hover .c-link__icon__inner {
  transform: translateX(-40px);
}
```
