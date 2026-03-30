# バクラク (bakuraku) レイアウト・エフェクト分析

## 基本情報
- URL: https://bakuraku.jp/
- 業種: SaaS（バックオフィスDX / 経理業務効率化）
- 使用技術: WordPress, Alpine.js（`x-data`, `x-show`, `x-collapse`）, カスタムCSSユーティリティ（BEM + ユーティリティクラス）, SVGアイコンスプライト（`<symbol>` + `<use>`）, WebP自動変換（EWWW）, リブランディングテーマ

## セクション構成と移り変わり

### 1. ヘッダー（`l-header`）2段構成
- **トップバー**（`l-header-top`）: パートナー募集、お知らせ、展示会、法制度対応、セキュリティ、AIエージェント、ログイン
- **メインナビ**（`l-header-main`）: ロゴ + メガメニュー（サービス一覧 / 料金）
- Alpine.js `x-collapse` でSPアコーディオンメニュー
- CTAボタン（資料ダウンロード）: アクセントデコ画像付き

### 2. メガメニュー（`l-header-drawer-menu`）
- **サービス一覧**: 債権債務サービス + 人事労務サービスの2カテゴリ
- アイコン付きボタングリッド（`l-header-drawer-buttons`）
- `x-show` + `x-collapse` でスムーズ開閉

### 3. ヒーロー（推定: メインビジュアル）
- ロゴ + キャッチコピー
- 企業ロゴ帯（導入実績）
- CTA: 資料ダウンロード + お問い合わせの2列

### 4. サービスカードセクション
- グリッドカード型レイアウト
- 各サービスにアイコン + 名前 + chevron
- カテゴリ分けされたドロワーメニュー

### 5. お問い合わせセクション（`l-header-drawer-contact-list`）
- 3カラムカード: 検討中 / 利用中 / パートナー
- 電話番号 + CTAボタン
- カード型で区分けされた問い合わせ先

## 写真と文の配置パターン

### パターン1: メガメニューアイコングリッド
```
┌──────────────────────────────────┐
│  債権債務サービス                  │
│  ┌──────┐ ┌──────┐ ┌──────┐     │
│  │[icon]│ │[icon]│ │[icon]│     │
│  │経費  │ │請求書│ │稟議  │     │
│  │精算  │ │受取  │ │申請  │     │
│  │  >   │ │  >   │ │  >   │     │
│  └──────┘ └──────┘ └──────┘     │
│  ┌──────┐ ┌──────┐ ┌──────┐     │
│  │[icon]│ │[icon]│ │[icon]│     │
│  │支出  │ │債権  │ │法人  │     │
│  │分析  │ │管理  │ │カード│     │
│  └──────┘ └──────┘ └──────┘     │
├──────────────────────────────────┤
│  人事労務サービス                  │
│  ┌──────┐ ┌──────┐              │
│  │[icon]│ │[icon]│              │
│  │勤怠  │ │給与  │              │
│  │管理  │ │      │              │
│  └──────┘ └──────┘              │
└──────────────────────────────────┘
```

### パターン2: CTAボタン（アクセント付き）
```
┌──────────────────────────────────┐
│ ┌──────────────────────────────┐ │
│ │ [アクセントデコ画像]          │ │
│ │ バクラクがわかる3点セット      │ │
│ │ 資料ダウンロード         無料 │ │
│ └──────────────────────────────┘ │
└──────────────────────────────────┘
```

### パターン3: 3カラムお問い合わせカード
```
┌──────────┐ ┌──────────┐ ┌──────────┐
│ 検討中    │ │ 利用中    │ │ パートナー │
│           │ │           │ │           │
│ 電話番号  │ │ サポート  │ │ パートナー │
│ 受付時間  │ │ サイト    │ │ サイト    │
│           │ │           │ │           │
│ [CTA]    │ │ [CTA]    │ │ [CTA]    │
└──────────┘ └──────────┘ └──────────┘
```

## エフェクト一覧

| 要素 | エフェクト | CSS/JSコード |
|------|----------|-------------|
| ハンバーガー | バー変形 | `l-header-main__hamburger-bar` + `is-active` でX字変形 |
| メガメニュー | スライドダウン | Alpine.js `x-collapse` + `x-show` |
| メニューアイテム | ホバー | `l-header-drawer-button` hover時のbackground変化 |
| CTAボタン | アクセントデコ | `l-header-main-cta-button__accent` 装飾画像 |
| SVGアイコン | スプライト参照 | `<use xlink:href="#icon-arrow-right">` |
| リンク | Chevronアイコン | `#chevron1` SVGシンボル |
| ドロワー | SPアコーディオン | `@click="spsubmenu1 = !spsubmenu1"` Alpine.js |

## 再現用CSSスニペット

### 2段ヘッダー
```css
.l-header-top {
  background: #f5f5f5;
  font-size: 0.75rem;
  padding: 0.25rem 0;
  border-bottom: 1px solid #e0e0e0;
}
.l-header-main {
  background: white;
  padding: 0.75rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.l-header-main__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
```

### アイコン付きサービスカードグリッド
```css
.l-header-drawer-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.75rem;
}
.l-header-drawer-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: background 0.2s, box-shadow 0.2s;
}
.l-header-drawer-button:hover {
  background: #f8f8f8;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.l-header-drawer-button__icon img {
  width: 32px;
  height: 32px;
}
```

### CTAボタン（アクセント装飾付き）
```css
.l-header-main-cta-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  background: var(--color-button-primary);
  border-radius: 8px;
  color: white;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}
.l-header-main-cta-button__accent {
  position: absolute;
  top: -4px;
  left: -4px;
  width: 28px;
  height: 28px;
}
.l-header-main-cta-button__right {
  background: rgba(255,255,255,0.2);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
}
```

### Alpine.jsアコーディオンメニュー
```html
<div x-data="{ open: false }">
  <button @click="open = !open" :class="open ? 'is-active' : ''">
    メニュー
  </button>
  <div x-show="open" x-collapse>
    <!-- コンテンツ -->
  </div>
</div>
```

## 特記事項
- SaaSサイトらしく情報量が多く、メガメニューが特徴的
- ユーティリティクラス（`u-mb-xl`, `u-text-center`, `c-title-24b`）による体系的なデザインシステム
- CSS変数で色管理（`--color-button-primary`, `--color-product-accent`）
- SVGスプライトでアイコンを一元管理
