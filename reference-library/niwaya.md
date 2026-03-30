# 庭屋 サンガーデン（NIWA STUDIO）

## 基本情報

| 項目 | 内容 |
|------|------|
| URL | https://niwaya.co.jp/ |
| 業種 | 造園・外構工事 |
| ターゲット | 個人宅オーナー、庭づくりに関心のある人（姫路エリア） |
| 所在地 | 兵庫県姫路市飾磨区 |
| ビルドツール | WordPress（カスタムテーマ `sungarden`） |
| テーマ | 和の趣・匠・時の流れ |

## カラーパレット

| 用途 | カラー | 備考 |
|------|--------|------|
| メインカラー | ダークグリーン / 深緑 | 背景のセクション（サービスの背景画像が緑基調） |
| アクセントカラー | ゴールド / ウォームベージュ | ボタンホバー時・装飾要素 |
| テキスト | ホワイト（暗背景） / ダークブラウン〜ブラック（明背景） | セクションの明暗に応じて |
| 背景 | ホワイト / ダークグリーン〜ブラック（交互） | サービスセクションは暗い背景画像 |
| ボタン | ボーダー+テキストの線形ボタン | 矢印アイコン付き |
| ローディング | `rgba(255, 255, 255, .8)` | ローディングスピナーのストローク色 |

## フォント

- **英語見出し**: `Garamond Premier Pro Display`（wf-garamond-premier-pro-display）-- セリフ体の優雅なフォント
- **日本語本文**: `Shippori Mincho`（wf-shippori-mincho）-- 明朝体
- **ウェイト**: n3（Light）, n4（Regular）, n5（Medium）, n6（SemiBold）
- **CSS変数**: `--border-progress: 0%` でローディングの進捗を管理
- **クラス**: `.u-font-en` で英語フォントを指定

```css
/* フォント参考 */
font-family: 'Garamond Premier Pro Display', serif; /* 英語 */
font-family: 'Shippori Mincho', serif; /* 日本語 */
```

## セクション構成（上から順に）

1. **ローディング画面** -- ロゴSVG + スピナーSVG（circle要素）
2. **ヘッダー** -- ロゴ + テキストロゴ + ナビ（Concept/Works/Service/Story/Company） + Contactボタン + ハンバーガー
3. **メインビジュアル** -- Swiperスライダー（3枚、フェード切替）+ キャッチコピー「日々を明るく、照らす庭」+ h1 + Scroll Down
4. **リードテキスト** -- 英語 "A Garden Where Light Dwells in Every Moment" + 日本語「趣を感じ、匠が磨き、時とともに」
5. **Concept** -- 2枚の画像（左配置）+ テキスト + Moreボタン + 縦書き見出し「庭は人生を、豊かにする灯火」
6. **Works** -- Swiperスライダー（2枚：庭・植栽 / 外構・エクステリア）
7. **Service（趣/匠/時）** -- 背景画像切替式の3タブセクション。clip-path で背景遷移
8. **読み物（ニュース）** -- 日付+タイトルのリスト + Moreボタン
9. **Story** -- Swiperの背景スライダー（4枚、自動スクロール30秒）+ テキスト + 縦書き見出し
10. **リンクセクション** -- 会社案内 / ワークフロー / ご依頼・お問い合わせ の3つのリンクカード
11. **フッター** -- ロゴ + 住所 + GoogleMap + ナビリンク + プライバシーポリシー + コピーライト

## レイアウト手法

- **Swiper スライダー**: メインビジュアル（フェード）+ Works（横スライド）+ Story（自動スクロール）
- **背景切替（clip-path）**: Service セクションで3つの背景画像をclip-path: inset() で切替。`style="clip-path: inset(0px);"` / `style="clip-path: inset(100% 0px 0px);"` で表示/非表示
- **縦書き見出し**: `c-title-vt` クラスで日本語見出しを縦書き表示
- **2カラムテキスト+画像**: Concept セクションで左画像+右テキスト
- **非対称グリッド**: Story セクションの画像配置
- **ボーダープログレス**: CSS変数 `--border-progress` でスクロール進捗を表示
- **Lenis**: `lenis lenis-smooth` クラスでスムーススクロール実装
- **Lazy Loading**: `lazyload` クラス + `data-src` 属性で画像の遅延読み込み

## アニメーション / インタラクション

- **ローディングアニメーション**: SVG circle のストロークアニメーション
- **Swiper フェードスライダー**: メインビジュアルの画像がフェードで切り替わる
- **clip-path 背景遷移**: Service セクションの3つの背景がスクロール連動で切り替わる
- **パララックス**: `js-parallax` クラスで画像のパララックス効果
- **Lenis スムーススクロール**: 全体のスクロールを滑らかに
- **スクロールトリガー**: `js-trigger` クラスで要素のスクロール連動表示
- **ヘッダー色変更**: `js-header-change` で背景に応じてヘッダーの色を切替
- **ホバーアニメーション**: ボタンの矢印がホバー時に入れ替わる（is-default -> is-hover）

## CTA配置パターン

| 位置 | 種類 | 文言 |
|------|------|------|
| ヘッダー | ボタン | 「Contact」+ 矢印 |
| Conceptセクション | テキストリンク | 「More」+ 矢印 |
| Service（趣） | テキストリンク | 「More」+ 矢印 |
| Service（匠） | テキストリンク | 「More」+ 矢印 |
| Service（時） | テキストリンク | 「More」+ 矢印 |
| 読み物セクション | テキストリンク | 「More」+ 矢印 |
| Storyセクション | テキストリンク | 「More」+ 矢印 |
| リンクセクション | カード x3 | 会社案内 / ワークフロー / ご依頼・お問い合わせ |

合計: **8箇所以上**。各セクションに「More」リンクを配置し、詳細ページへの導線を確保。

## コピーライティングの特徴

- **和の美意識**: 「趣を感じ、匠が磨き、時とともに」-- 漢字一文字で3つの柱を表現
- **詩的表現**: 「庭は単なる空間ではなく、人生を豊かにする灯火」
- **ストーリーテリング**: 「幼い頃から庭師の父の背中を見て育ち」-- 個人の物語
- **哲学的**: 「庭は、完成した瞬間が始まりです。」
- **対比の美**: 「光と影をまとい、静かな美を放ち始めます。」

## 真似したいポイント

1. **clip-path 背景遷移**: スクロール連動で3つの背景画像を切り替える手法。`clip-path: inset()` で実装
2. **ローディングアニメーション**: SVG circle のストロークでローディング進捗を表現
3. **Garamond + しっぽり明朝**: 和洋融合のフォントペアリング
4. **縦書き見出し**: 和の雰囲気を強化する縦書きタイポグラフィ
5. **Lenis スムーススクロール**: 全体の操作感を上質に
6. **パララックス + スクロールトリガー**: 多層的なスクロール体験
7. **ボタンのホバー矢印入替**: デフォルト矢印 -> ホバー矢印の切替アニメーション
8. **3つの柱（趣/匠/時）**: サービスを漢字一文字で象徴化する手法

## HTML構造メモ

```html
<!-- ローディング -->
<div class="loading">
  <div class="l-loading__logo-wrapper">
    <img src="logo_white.svg" alt="サンガーデンのロゴ">
  </div>
  <div class="loading-spinner">
    <svg viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="20"></circle>
      <circle cx="25" cy="25" r="20" stroke="rgba(255,255,255,.8)"></circle>
    </svg>
  </div>
</div>

<!-- clip-path 背景切替 -->
<div class="p-bg-images">
  <div class="p-bg-images-background bg-1 active" style="clip-path: inset(0px);"></div>
  <div class="p-bg-images-background bg-2" style="clip-path: inset(100% 0px 0px);"></div>
  <div class="p-bg-images-background bg-3" style="clip-path: inset(100% 0px 0px);"></div>
  <div class="p-bg-images__content">
    <!-- 3つのコンテンツセット -->
  </div>
</div>

<!-- 縦書き見出し -->
<hgroup class="c-title-vt">
  <h2 class="c-title-vt-ja">
    <span class="c-title-vt-ja01">庭は人生を、</span>
    <span class="c-title-vt-ja02">豊かにする灯火</span>
  </h2>
  <p class="c-title-vt-en u-font-en">( Concept )</p>
</hgroup>

<!-- Swiper フェードスライダー -->
<div class="swiper p-mv__bg swiper-fade">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="mv.webp" alt="">
    </div>
  </div>
</div>

<!-- ボタン（矢印ホバー切替） -->
<a class="c-btn01" href="/concept">
  <span class="c-btn-text-en u-font-en">More</span>
  <div class="c-arrow">
    <img class="c-arrow__img is-default" src="arrow.svg">
    <img class="c-arrow__img is-hover" src="arrow.svg">
  </div>
</a>
```
