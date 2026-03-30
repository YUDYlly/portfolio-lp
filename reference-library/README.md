# LP リファレンスライブラリ

> スクレイピングで収集した参考LPの分析・整理。HP制作時の設計判断に活用する。

**作成日**: 2026-03-28
**元データ**: `.firecrawl/` ディレクトリ内のJSONファイル（HTML+Markdown）

---

## 収録LP一覧

| # | LP名 | URL | 業種 | テーマカラー | 分析ファイル |
|---|------|-----|------|-------------|-------------|
| 1 | neuler pilates | https://neuler.jp/ | パーソナルピラティス | ベージュ / ゴールド / オフホワイト | [neuler-pilates.md](neuler-pilates.md) |
| 2 | laughful hair（らふる） | https://laughful-hair.com/ | 美容室 | ブラック / ホワイト / ウォームホワイト | [laughful-hair.md](laughful-hair.md) |
| 3 | PLAID ALPHA | https://alpha.plaid.co.jp/ | SaaS（CXコンサル） | ブラック / ホワイト / ダークグレー | [plaid-alpha.md](plaid-alpha.md) |
| 4 | Spiral AI | https://go-spiral.ai/ | AI SaaS | ブラック / ホワイト（ダークモード） | [spiral-ai.md](spiral-ai.md) |
| 5 | 庭屋 サンガーデン | https://niwaya.co.jp/ | 造園・外構工事 | ダークグリーン / ゴールド / ホワイト | [niwaya.md](niwaya.md) |
| 6 | 溝田建築設計 | https://mizota-ks.com/ | 住宅建設 | ホワイト / ダークグリーン〜ネイビー | [mizota-construction.md](mizota-construction.md) |

---

## 業種別クイックリファレンス

### 美容・ヘルスケア系のLP制作時
- [neuler-pilates.md](neuler-pilates.md) -- 固定CTA、価格訴求、ビフォーアフター、FAQ
- [laughful-hair.md](laughful-hair.md) -- ブランディング、詩的コピー、横スクロール、エシカル訴求

### SaaS・テック系のLP制作時
- [plaid-alpha.md](plaid-alpha.md) -- BtoB向け堅実デザイン、SVGナビ、フォーム直埋め込み
- [spiral-ai.md](spiral-ai.md) -- ダークモード、パララックス、マーキーカルーセル

### 建設・造園系のLP制作時
- [niwaya.md](niwaya.md) -- clip-path背景遷移、縦書き見出し、Garamond+明朝
- [mizota-construction.md](mizota-construction.md) -- Splideスライダー、パララックス、施工事例カード

---

## 横断分析

### [design-patterns.md](design-patterns.md) -- 業種横断デザインパターン集
1. ヒーローセクションのパターン（4種類）
2. セクション見出しのパターン（4種類）
3. カードレイアウトのパターン（5種類）
4. CTAのパターン（5種類）
5. フッターのパターン（3種類）
6. カラーパレットの業種別傾向
7. タイポグラフィのパターン
8. アニメーション/インタラクションのパターン
9. 全LP共通パターンまとめ

---

## ビルドツール一覧

| LP | ツール | 備考 |
|----|--------|------|
| neuler pilates | STUDIO | Google Studio Design アセット使用 |
| laughful hair | STUDIO (Nuxt.js) | 横スクロールパネル実装 |
| PLAID ALPHA | STUDIO (Nuxt.js) | SVGナビゲーション |
| Spiral AI | STUDIO (Nuxt.js) | ダークモード + マーキー |
| 庭屋サンガーデン | WordPress | カスタムテーマ `sungarden` + Swiper + Lenis |
| 溝田建築設計 | WordPress | カスタムテーマ + Splide.js + GSAP |

---

## 使い方

1. **新規LP制作時**: まず業種別クイックリファレンスで該当する分析ファイルを確認
2. **特定のデザイン要素が必要な時**: design-patterns.md で該当パターンを検索
3. **カラー/フォント選定時**: 各LPファイルのカラーパレット・フォントセクションを参照
4. **HTML実装時**: 各LPファイルの「HTML構造メモ」セクションからコードスニペットを取得
5. **コピーライティング参考時**: 各LPファイルの「コピーライティングの特徴」を確認
