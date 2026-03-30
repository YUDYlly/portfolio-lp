# neuler pilates レイアウト・エフェクト分析

## 基本情報
- URL: https://neuler.jp/
- 業種: パーソナルマシンピラティス（ジム系）
- 使用技術: Google Web Designer (Studio Design), カスタムCSS, `appear` クラスによるスクロールアニメーション, CSS変数による画像管理, `<sd-video>` カスタム要素

## セクション構成と移り変わり

### 1. ヘッダー（固定）
- 透過ヘッダー、スクロール時に色変化
- ハンバーガーメニュー（`material-icons` の `menu`）
- フローティングCTA（右下固定）: 体験レッスン予約ボタン + LINE + メニュー

### 2. ヒーロー（`sd-3`）
- 背景: CSS変数 `--img-origin` による画像 + `#hero-bg` オーバーレイ
- コンテンツ: テキスト左 + 動画右（縦型動画 `sd-video`）
- 区切り: セクション間に明確な仕切り線なし、背景色の自然な切り替え

### 3. Aboutセクション（`sd-8` / `#about`）
- 英語ラベル「About」+ 日本語見出し の2段構成（`theme-d688ceab` クラス）
- 画像 `id="revealimg"`: スクロールでリビール表示
- 特長リスト: 画像左（正方形 300x300）+ テキスト右 の交互配置

### 4. スタジオ写真ギャラリー（`sd-106`）
- グリッドレイアウト: 大画像1枚 + 小画像グリッド（2x2 + 1x2 + 単体）
- 各画像に `id="revealimg2"` 〜 `revealimg9` のリビールアニメーション

### 5. Before/After（`sd-121`）
- 背景色切り替え
- 比較画像（1枚のビフォーアフター合成画像）
- アイコン付きリスト（`fa-solid fa-certificate`）

### 6. インストラクター（`sd-136` / `#instructor`）
- 各インストラクター: 名前 + 画像 + 資格リスト + 紹介文
- 画像は横長（1000x750 or 1000x667）、テキストは下配置
- 区切り線（`sd-149` / `sd-158` / `sd-167` 空div）

### 7. 料金プラン（`#plan`）
- 装飾SVG画像（`sd-201`）がセクション区切り
- カード型リスト（`list-12` / `list-13` / `list-14`）
- 価格: 大きな数字 + 小さな単位

### 8. 体験レッスンの流れ（`#flow`）
- 横スクロール型カードリスト（`id="fade-mask-32px"`）
- 各ステップ: 番号（01-04）+ 画像 + テキスト
- 「scroll」テキスト + 矢印アイコンで横スクロール誘導

### 9. Q&A（`#faq`）
- `<details>/<summary>` によるアコーディオン
- Material Icons `arrow_drop_up` でトグルアイコン

### 10. フッター / CTA
- 背景画像付きCTAセクション（`sd-252`）
- フッター: 2列リンク + コピーライト

## 写真と文の配置パターン

### パターン1: テキスト左 + 動画/画像右（ヒーロー）
```
┌──────────────────────────────────┐
│ [テキスト 40%]  │ [縦型動画 60%]   │
│ サブタイトル     │                   │
│ メインコピー     │   .sd-video       │
│ タグリスト       │   720x1280        │
│                  │                   │
└──────────────────────────────────┘
```

### パターン2: 正方形画像左 + テキスト右（特長リスト）
```
┌──────────────────────────────────┐
│ [画像 300x300]│ [テキスト]         │
│  正方形        │ h3 見出し          │
│  角丸          │ 本文（richText）   │
│               │                    │
└──────────────────────────────────┘
（区切り線 sd-65/sd-73 で分離）
```
- 全項目同じ方向（画像左固定）、交互配置なし
- レスポンシブ: SP時は画像上 + テキスト下の縦積み

### パターン3: フルワイドギャラリー（スタジオ写真）
```
┌──────────────────────────────────┐
│        [大画像 100%幅]            │
│         1200x800                  │
├────────────┬─────────────────────┤
│ [画像 50%] │ [画像 50%]           │
│  1200x800  │  1200x800            │
├────────────┴────────┬────────────┤
│   [画像 60%]        │ [画像 40%] │
├─────────────────────┼────────────┤
│ [画像 50%]          │ [画像 50%] │
└─────────────────────┴────────────┘
```

### パターン4: CTA背景画像オーバーレイ（`sd-252`）
```
┌──────────────────────────────────┐
│  ████████ 背景画像 ████████████  │
│  ████ 半透明オーバーレイ ███████  │
│      英語ラベル "Contact"         │
│      日本語見出し                 │
│      → 矢印アイコン              │
└──────────────────────────────────┘
```

### パターン5: 横スクロールカード（体験の流れ）
```
← scroll →
┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│[画像]│ │[画像]│ │[画像]│ │[画像]│
│ 01   │ │ 02   │ │ 03   │ │ 04   │
│見出し│ │見出し│ │見出し│ │見出し│
│本文  │ │本文  │ │本文  │ │本文  │
└──────┘ └──────┘ └──────┘ └──────┘
```

## エフェクト一覧

| 要素 | エフェクト | CSS/JSコード |
|------|----------|-------------|
| テキスト | スクロールフェードイン | `.appear` クラス付与（IntersectionObserver推定） |
| 画像 | リビール（ワイプ表示） | `id="revealimg"` 〜 `revealimg9`、clip-path またはtransform:scaleX による左→右ワイプ |
| 動画 | 自動再生ループ | `<sd-video>` with `muted loop autoplay` |
| FAQ | アコーディオン開閉 | `<details>/<summary>` + `arrow_drop_up` アイコン回転 |
| フローカード | 横スクロール | `id="fade-mask-32px"` 左右端フェードマスク |
| フローティングCTA | 常時表示 | `position: fixed` 右下固定、体験予約 + LINE + メニュー |
| ナビゲーション | モーダル | `<dialog class="modal-menu">` によるフルスクリーンメニュー |
| 英語ラベル | カラーテーマ | `theme-d688ceab` クラスでアクセントカラー適用 |

## 再現用CSSスニペット

### 英語ラベル + 日本語見出しの2段構成
```css
/* セクションタイトル */
.section-label {
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-color); /* theme-d688ceab */
  margin-bottom: 0.5rem;
}
.section-title {
  font-family: 'Noto Serif JP', serif;
  font-size: 1.75rem;
  line-height: 1.6;
  color: var(--heading-color);
}
```

### 正方形画像 + テキスト横並び
```css
.feature-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  padding: 2rem 0;
  border-bottom: 1px solid #e5e5e5;
}
.feature-item__image {
  width: 300px;
  height: 300px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
}
.feature-item__text h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

@media (max-width: 768px) {
  .feature-item {
    flex-direction: column;
  }
  .feature-item__image {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
  }
}
```

### フローティングCTA（右下固定）
```css
.floating-cta {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  padding: 1rem;
}
.floating-cta__main {
  background: var(--accent-color);
  color: white;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
```

### スクロールリビールアニメーション
```css
.appear {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.appear.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* 画像リビール（ワイプ） */
[id^="revealimg"] {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 1s cubic-bezier(0.77, 0, 0.175, 1);
}
[id^="revealimg"].is-visible {
  clip-path: inset(0 0 0 0);
}
```

### 横スクロールフローカード
```css
.flow-cards {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 1rem;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 32px,
    black calc(100% - 32px),
    transparent
  );
}
.flow-card {
  flex: 0 0 280px;
  scroll-snap-align: start;
  border-radius: 12px;
  overflow: hidden;
}
```
