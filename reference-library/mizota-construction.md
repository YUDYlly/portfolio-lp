# 溝田建築設計（水田建設）

## 基本情報

| 項目 | 内容 |
|------|------|
| URL | https://mizota-ks.com/ |
| 業種 | 住宅建設・建築設計 |
| ターゲット | 熊本エリアの住宅建築検討者、子育て世代 |
| 所在地 | 熊本県熊本市南区城南町碇201-6 |
| ビルドツール | WordPress + カスタムテーマ + Splide.js |
| テーマ | ちょうどいい家・高性能・手の届く価格 |

## カラーパレット

| 用途 | カラー | 備考 |
|------|--------|------|
| メインカラー | ホワイト / オフホワイト | 清潔感・開放感を表現 |
| アクセントカラー | ダークグリーン〜ネイビー系 | ヘッダー、ボタン背景（`-white` クラス） |
| テキスト | ブラック / ダークグレー | 本文テキスト |
| 背景 | ホワイト | 全体の基調色 |
| CTAボタン | ダーク系（`c-button-attention`） | 「お問い合わせフォームはこちら」の背景色 |
| セカンダリ | ライトグレー | カード背景・区切り |

## フォント

- **日本語**: ゴシック体系（システムフォント）
- **英語見出し**: aria-hidden="true" の装飾テキスト（Concept, Case, Contact等）
- **全体の印象**: クリーン・モダン・読みやすさ重視

## セクション構成（上から順に）

1. **ヘッダー** -- ロゴ（h1）+ 2段ナビゲーション + お問い合わせボタン + ハンバーガー
2. **ドロワーメニュー** -- Splideスライダー背景 + フルナビ + お問い合わせ（Web+電話）
3. **ヒーロー** -- Splide フェードスライダー（3枚）+ SVGスローガン「わたしたちにちょうどいい家」+ サブコピー + お知らせカード
4. **Concept** -- 英語装飾テキスト + 日本語見出し + 説明文3段落 + 「家づくりのこだわり」リンク + パララックス背景写真（5枚）
5. **Case（施工事例）** -- Splide 横スライダー（8件）+ 前後矢印 + 一覧リンク
6. **Information（お知らせ）** -- カード形式リスト（画像+タグ+日付+タイトル）
7. **Blog** -- カード形式リスト（画像+タグ+日付+タイトル）
8. **リンクセクション** -- 2カラム（私たちについて / 土地・分譲情報）
9. **Contact（お問い合わせ）** -- Web フォームリンク + 電話番号 + 受付時間 + 定休日
10. **フッター** -- ロゴ + 住所 + 電話 + Instagram + バナー + フルナビ + ページトップ

## レイアウト手法

- **Splide.js スライダー**: ヒーロー（フェード）、ドロワー背景（フェード）、施工事例（横スライド）の3箇所
- **パララックス（GSAP）**: `js-parallax` クラスで Concept セクションの5枚の背景写真がスクロール連動
- **施工事例カードスライダー**: 横スクロール + 前後矢印ボタン。padding-left: 60px でオフセット
- **2カラムリンクカード**: 「私たちについて」と「土地・分譲情報」を50%:50%で配置
- **カード型記事リスト**: お知らせ・ブログを統一フォーマット（画像+メタ情報+タイトル）で表示
- **ドロワーメニュー**: 全画面オーバーレイ + 背景スライダー + 階層ナビ
- **英語装飾テキスト**: `aria-hidden="true"` で英語ラベルをアクセシビリティ配慮付きで装飾的に使用

## アニメーション / インタラクション

- **Splide フェードスライダー**: splide--fade でヒーロー画像の切替
- **パララックス（GSAP）**: `js-parallax` + `translate` でスクロール連動の画像移動
- **スライドバック**: `js-slide-back` / `js-slide-front` でセクション間のスライド遷移
- **トリガーアニメーション**: `js-trigger` / `js-trigger-later` でスクロール連動の要素表示
- **ヘッダー色切替**: `js-header-change` でスクロール位置に応じたヘッダーの色変更
- **ボタンアイコンアニメーション**: 矢印アイコンの二重配置でホバー時のスライドイン
- **ドロワー遷移**: `js-drawer-toggle` でドロワーメニューの開閉

## CTA配置パターン

| 位置 | 種類 | 文言 |
|------|------|------|
| ヘッダー | ボタン | 「お問い合わせ」（`c-button-cv`） |
| ドロワーメニュー内 | Web+電話 | 「お問い合わせフォームはこちら」+ 電話番号 |
| ヒーロー | お知らせカード | 最新のお知らせへのリンク |
| Conceptセクション | リンク | 「家づくりのこだわり」+ 矢印 |
| 施工事例セクション | リンク | 「一覧を見る」+ 矢印 |
| お知らせセクション | リンク | 「一覧を見る」+ 矢印 |
| ブログセクション | リンク | 「一覧を見る」+ 矢印 |
| リンクセクション | 画像カード x2 | 「私たちについて」「土地・分譲情報」 |
| Contactセクション | ボタン+電話 | 「お問い合わせフォームはこちら」+ 電話番号 |
| フッター | リンク | モデルハウス一覧 / 土地・分譲情報 |

合計: **10箇所以上**。住宅会社として問い合わせ導線を手厚く設計。

## コピーライティングの特徴

- **「ちょうどいい」訴求**: 「わたしたちにちょうどいい家」-- 過剰でも不足でもない適切さ
- **数値訴求**: 「完成後50年経過した建物の状態を大切に」「最高レベルの断熱性能」
- **対比構造**: 「省エネなのに、冬は暖かく、夏は涼しい」
- **共感型**: 「自分にとって快適な家を、手軽に手に入れて欲しい」
- **信条表明**: 「難しいご要望にも、それを上回る提案をすることが私たちの信条です」
- **施工事例のタイトル**: 詩的命名（「好きを重ねたやわらかな輪郭の家」「空へひらく本棚と暮らす家」）

## 真似したいポイント

1. **Splide.js の多用途活用**: ヒーロー（フェード）、ドロワー背景、施工事例（横スライド）と3パターンを同一ライブラリで実装
2. **パララックス背景写真群**: GSAP連動で5枚の写真が異なるタイミングでパララックス移動
3. **英語装飾テキスト + aria-hidden**: アクセシビリティを保ちながら装飾的な英語テキストを配置
4. **ドロワーメニューの充実**: 背景スライダー + 階層ナビ + 問い合わせ（Web+電話）を全て収容
5. **施工事例の命名**: 各住宅に詩的なタイトルを付ける手法（「静かな彩りの家」等）
6. **矢印アイコンの二重配置ホバー**: 2つの矢印画像で滑らかなホバーアニメーション
7. **お知らせカードのヒーロー配置**: FV内に最新お知らせカードを組み込む手法
8. **カテゴリタグ**: 施工事例に「平屋」「2階建て」「子育て世代」等のタグを付与

## HTML構造メモ

```html
<!-- ヒーロー（Splide フェードスライダー） -->
<div class="splide p-top-hero__background js-top-slide splide--fade">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide is-active is-visible">
        <img src="hero01.jpg" alt="...">
      </li>
    </ul>
  </div>
</div>

<!-- SVGスローガン -->
<p class="p-top-hero__text__main">
  <img src="fv-slogan.svg" alt="わたしたちにちょうどいい家">
</p>

<!-- パララックス背景 -->
<div class="p-top-concept__background js-parallax-wrap js-concept-bg">
  <div class="p-top-concept__media -pattern01 js-trigger-later">
    <div class="p-top-concept__media__inner">
      <img class="js-parallax" src="concept01.jpg" style="transform: translate(0px, 0px);">
    </div>
  </div>
</div>

<!-- 施工事例スライダー -->
<div class="splide js-case-slide splide--slide">
  <div class="splide__arrows">
    <button class="splide__arrow splide__arrow--prev">前</button>
    <button class="splide__arrow splide__arrow--next">次</button>
  </div>
  <div class="splide__track">
    <div class="splide__list">
      <article class="splide__slide c-card-case">
        <a href="/case/xxx/">
          <div class="c-card-case__media"><img></div>
          <div class="c-card-case__body">
            <p class="c-card-case__number">No.020</p>
            <p class="c-card-case__title">タイトル</p>
            <ul class="c-card-case__category">
              <li class="c-tag -regular">2階建て</li>
            </ul>
          </div>
        </a>
      </article>
    </div>
  </div>
</div>

<!-- 矢印二重配置ボタン -->
<a class="c-button-attention" href="/contact/">
  <span class="c-button-attention__label">お問い合わせフォームはこちら</span>
  <span class="c-button-attention__icon">
    <span class="c-button-attention__icon__inner">
      <img src="icon-arrow-white.svg" alt="">
      <img src="icon-arrow-white.svg" alt="">
    </span>
  </span>
</a>
```
