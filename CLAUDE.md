# portfolio-lp — LP ポートフォリオ

## 概要
KUJIRA studio. の制作実績として、4業種の架空LPを独立した Next.js プロジェクトとして制作。

## プロジェクト構成

| フォルダ | LP名 | 業種 | テーマカラー |
|---------|------|------|-------------|
| `gym/` | FORGE | パーソナルジム | Gold #D4AF37 / Dark |
| `beauty/` | LUMINE CLINIC | 美容クリニック | Rose #B76E79 / Light |
| `saas/` | FlowBoard | SaaS | Purple #7C3AED / Dark+Light |
| `construction/` | TAKUMI建設 | 総合建設会社 | Orange #E67E22 / Navy #1E3A5F |

## 各LP共通の技術スタック
- Next.js 16 (App Router) / React 19 / TypeScript
- Tailwind CSS 4
- Noto Sans JP（+ Beauty のみ Noto Serif JP）

## ビルド & 開発
```bash
cd gym && npm run dev      # http://localhost:3000
cd beauty && npm run dev   # 別ポートで: --port 3001
cd saas && npm run dev
cd construction && npm run dev
```

## 共有リソース（ルートレベル）
- `image-prompts.md` — 画像生成プロンプト集
- `reference-library/` — 参考LP分析・デザインパターン集
- `.firecrawl/` — 参考サイトのスクレイピングデータ
