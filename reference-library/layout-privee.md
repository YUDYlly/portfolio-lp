# PRIVeE (charm-deco) レイアウト・エフェクト分析

## 基本情報
- URL: https://privee.jp/
- 業種: 美容系（プライベートネイルサロン）
- 使用技術: WordPress, jQuery Backstretch（背景スライドショー）, 最小限のHTML/CSS

## セクション構成と移り変わり

### 全体構造
- **非常にミニマルな1ページ構成**
- ローディングアニメーション → 背景フルスクリーン画像 → 最小限のテキスト
- セクション間の明確な区切りは存在しない

### 1. ローディング（`#loading`）
- `display: none` で非表示制御
- `#loader` でアニメーション表示

### 2. ヘッダー（`#masthead`）
- SVGショッピングバッグアイコン（外部ECリンク）
- ロゴ画像（`site-title`）
- ナビゲーション: シンプルなテキストリンク（about, blog, menu, lesson, contact）
- リンクに `.line` クラス: ホバー時アンダーライン

### 3. メインコンテンツ（`#main`）
- `home-naka` クラス: 中央寄せのテキストブロック
- `homemoji` クラス: 「private nail salon」のキャッチコピー
- 住所情報（2拠点）
- 営業時間

### 4. 背景（`backstretch`）
- jQuery Backstretch プラグインで**フルスクリーン背景画像スライドショー**
- `position: fixed`, `z-index: -999999` で最背面固定
- 画像がフェードで切り替わり（`opacity: 0.94687` のトランジション）

## 写真と文の配置パターン

### パターン1: フルスクリーン背景 + 中央テキスト
```
┌──────────────────────────────────┐
│  ████████████████████████████████│
│  ████ 背景画像（fixed）█████████│
│  ████████████████████████████████│
│                                  │
│        private nail salon        │
│              --                  │
│         住所テキスト              │
│        open / close              │
│                                  │
│  ████████████████████████████████│
└──────────────────────────────────┘
```
- テキストは半透明の背景なしで直接画像上に配置
- 背景が自動的にフェードで切り替わる

## エフェクト一覧

| 要素 | エフェクト | CSS/JSコード |
|------|----------|-------------|
| 背景画像 | フルスクリーンスライドショー | jQuery Backstretch: `position:fixed; z-index:-999999;` opacityフェード |
| ローディング | 初期ローディング | `#loading` display切り替え |
| ナビリンク | ホバーアンダーライン | `.line` クラス |
| ページ | 表示切り替え | `#page` の `display:block` 制御 |

## 再現用CSSスニペット

### フルスクリーン背景固定スライドショー
```css
.backstretch {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -999999;
  overflow: hidden;
}
.backstretch img {
  position: absolute;
  margin: 0;
  padding: 0;
  border: none;
  width: 100%;
  height: auto;
  max-height: none;
  max-width: none;
  z-index: -999999;
  object-fit: cover;
  transition: opacity 1s ease;
}
```

### ミニマルテキストオーバーレイ
```css
.home-naka {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #333;
  padding: 2rem;
}
.homemoji {
  font-family: serif;
  font-size: 1.5rem;
  letter-spacing: 0.2em;
  margin-bottom: 1rem;
}
```

## 特記事項
- 極めてミニマルなサイト。コンテンツ量が少なく、背景画像のスライドショーが最大の視覚効果
- 実質的にはトップページのみの構成で、ポートフォリオ的な使い方
- レイアウトパターンとしての参考価値は限定的だが、「引き算のデザイン」の参考になる
