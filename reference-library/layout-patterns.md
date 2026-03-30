# 業種横断 レイアウト・エフェクトパターン集

全7サイト（neuler / angelux / privee / bakuraku / bonx / mizota / ba）を横断分析し、再利用可能なパターンを体系化。

---

## 1. ヒーローセクションの配置パターン（7型）

### 型A: フルスクリーン動画背景 + テキストオーバーレイ
**採用サイト**: angelux, ba
```
┌──────────────────────────────────┐
│  ████████ 背景動画 ██████████████│
│  ████ オーバーレイ ██████████████│
│                                  │
│   日本語コピー（左 or 中央）      │
│   英語サブコピー                  │
│                                  │
│   [CTA or 動画再生ボタン]         │
└──────────────────────────────────┘
```

**再現Tailwind CSS**:
```html
<section class="relative h-screen overflow-hidden">
  <video class="absolute inset-0 w-full h-full object-cover" autoplay muted loop playsinline>
    <source src="hero.mp4" type="video/mp4">
  </video>
  <div class="absolute inset-0 bg-black/30"></div>
  <div class="relative z-10 flex flex-col justify-center h-full px-8 max-w-4xl mx-auto">
    <h1 class="text-4xl md:text-6xl font-serif text-white leading-relaxed mb-4">
      人を想い、深く、手に込める。
    </h1>
    <p class="text-sm text-white/80 tracking-widest uppercase mb-8">
      Thinking of others, deeply, and putting it into the hands.
    </p>
    <a href="#" class="inline-flex items-center gap-2 text-white border border-white/50 rounded-full px-6 py-3 hover:bg-white/10 transition w-fit">
      View More
    </a>
  </div>
</section>
```

### 型B: テキスト左 + ビジュアル右（2カラム）
**採用サイト**: neuler, bonx
```
┌──────────────────────────────────┐
│ [テキスト 45%]  │ [画像/動画 55%] │
│ サブタイトル     │                 │
│ メインコピー     │   縦型動画      │
│ タグリスト       │   or モック     │
│ [CTA]           │                 │
└──────────────────────────────────┘
```

**再現Tailwind CSS**:
```html
<section class="min-h-screen flex items-center px-8">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
    <div class="flex flex-col justify-center">
      <p class="text-xs tracking-widest uppercase text-gray-500 mb-2">Personal Pilates</p>
      <h1 class="text-3xl md:text-5xl font-serif leading-relaxed mb-6">
        身体が整る<br>パーソナル<br>マシンピラティス
      </h1>
      <ul class="flex flex-wrap gap-2 mb-8">
        <li class="px-3 py-1 bg-gray-100 rounded-full text-sm">全員が有資格者</li>
        <li class="px-3 py-1 bg-gray-100 rounded-full text-sm">子供連れ歓迎</li>
      </ul>
      <a href="#" class="inline-flex items-center gap-2 bg-amber-700 text-white px-6 py-3 rounded-lg w-fit hover:bg-amber-800 transition">
        体験レッスンを予約する
      </a>
    </div>
    <div class="relative">
      <video class="w-full h-full object-cover rounded-2xl" autoplay muted loop playsinline>
        <source src="hero.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</section>
```

### 型C: フルスクリーン背景画像スライダー + 中央テキスト
**採用サイト**: privee, mizota
```
┌──────────────────────────────────┐
│  ████ 背景スライダー ████████████│
│  ████ （フェード切替）████████████│
│                                  │
│      [SVG or テキストロゴ]        │
│      キャッチコピー               │
│      サブコピー                   │
│                                  │
│   [お知らせカード] (optional)     │
└──────────────────────────────────┘
```

**再現Tailwind CSS**:
```html
<section class="relative h-screen overflow-hidden">
  <!-- Splide.js or CSS animation でフェードスライダー -->
  <div class="absolute inset-0">
    <img src="hero01.jpg" class="absolute inset-0 w-full h-full object-cover animate-fadeSlide" alt="">
  </div>
  <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
    <img src="slogan.svg" alt="わたしたちにちょうどいい家" class="w-64 md:w-96 mb-6">
    <p class="text-lg md:text-xl text-white/90">数十年先も続く、家族にも環境にも心地いい住まい。</p>
  </div>
</section>
```

### 型D: テキスト中央 + 下部イラストループ
**採用サイト**: bonx
```
┌──────────────────────────────────┐
│          [SVGロゴ]               │
│   キャッチコピー（強調ワード）    │
│   説明文                         │
│   [CTA]         [製品画像]       │
│                  [アプリモック]   │
│                                  │
│ ←[イラスト動画ループ]→           │
└──────────────────────────────────┘
```

### 型E: 固定背景 + スクロールオーバーレイ
**採用サイト**: ba
```
背景画像 (position:fixed) の上を
コンテンツが覆いかぶさるようにスクロール
```

**再現Tailwind CSS**:
```html
<div class="relative">
  <!-- 固定背景 -->
  <div class="fixed inset-0 -z-10">
    <img src="bg.jpg" class="w-full h-full object-cover" alt="">
  </div>
  <!-- スクロールコンテンツ -->
  <section class="relative min-h-screen flex items-center justify-center">
    <video class="absolute inset-0 w-full h-full object-cover" autoplay muted loop playsinline>
      <source src="intro.mp4" type="video/mp4">
    </video>
    <div class="relative z-10 text-center text-white p-8">
      <h2 class="text-3xl font-light mb-4">つくるだけでなく、ともによりそう</h2>
    </div>
  </section>
  <!-- 次のセクションが白背景で上に重なる -->
  <section class="relative z-10 bg-white py-24 px-8">
    <!-- ... -->
  </section>
</div>
```

### 型F: ミニマルテキスト Only + 背景固定
**採用サイト**: privee
```
テキストのみの超ミニマル構成。
背景画像が固定で自動フェード切り替え。
```

### 型G: メガメニュー型ヘッダー + ヒーロー
**採用サイト**: bakuraku
```
情報量の多いSaaS型。
2段ヘッダー + メガメニュー + ヒーロー。
```

---

## 2. セクション区切りのCSSパターン（6型）

### 型A: 背景色のシンプルな切り替え
**採用サイト**: neuler, bakuraku, bonx
```css
/* 白 → ベージュ → 白 の交互パターン */
.section-light { background: #fff; }
.section-warm  { background: #faf7f2; }
.section-dark  { background: #1a1a1a; color: #fff; }
```

**再現Tailwind CSS**:
```html
<section class="bg-white py-20 px-8"><!-- ... --></section>
<section class="bg-stone-50 py-20 px-8"><!-- ... --></section>
<section class="bg-stone-900 text-white py-20 px-8"><!-- ... --></section>
```

### 型B: 装飾SVGライン
**採用サイト**: neuler
```
セクション間にSVG装飾画像（波線や区切り線）を挿入
```

**再現Tailwind CSS**:
```html
<img src="divider.svg" alt="" class="w-full max-w-lg mx-auto my-12 opacity-30" aria-hidden="true">
```

### 型C: パララックスレイヤー重なり
**採用サイト**: mizota, ba
```
前のセクションが固定で、次のセクションが
上に覆いかぶさるようにスクロール
js-slide-back / js-slide-front
```

**再現Tailwind CSS**:
```html
<section class="sticky top-0 h-screen">
  <!-- 固定コンテンツ（背景画像等） -->
</section>
<section class="relative z-10 bg-white -mt-20 rounded-t-3xl">
  <!-- スクロールで上に重なるコンテンツ -->
</section>
```

### 型D: マーキーテキストバンド
**採用サイト**: angelux
```
セクション間に大きな英語テキストが
無限横スクロールするバンド
```

**再現Tailwind CSS**:
```html
<div class="overflow-hidden py-12 bg-stone-100" aria-hidden="true">
  <div class="flex animate-marquee whitespace-nowrap">
    <span class="text-8xl font-serif text-stone-200 mx-8">Changing the Face of Beauty.</span>
    <span class="text-8xl font-serif text-stone-200 mx-8">Changing the Face of Beauty.</span>
  </div>
</div>

<style>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 20s linear infinite;
}
</style>
```

### 型E: CTA背景画像バンド
**採用サイト**: neuler, mizota
```
背景画像 + 半透明オーバーレイのCTAバンドが
セクション区切りの役割を兼ねる
```

**再現Tailwind CSS**:
```html
<section class="relative py-24 overflow-hidden">
  <img src="cta-bg.jpg" class="absolute inset-0 w-full h-full object-cover" alt="">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 text-center text-white">
    <p class="text-sm tracking-widest uppercase mb-2">Contact</p>
    <h2 class="text-3xl font-serif mb-6">お問い合わせ</h2>
    <a href="#" class="inline-flex items-center gap-2 border border-white px-8 py-3 hover:bg-white/10 transition">
      →
    </a>
  </div>
</section>
```

### 型F: 2カラムバナーリンク
**採用サイト**: mizota
```
2つの背景画像バナーが横並びでセクション間に配置
```

**再現Tailwind CSS**:
```html
<div class="grid grid-cols-1 md:grid-cols-2">
  <a href="#" class="relative group h-64 overflow-hidden">
    <img src="link1.jpg" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="">
    <div class="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>
    <div class="relative z-10 flex flex-col justify-end h-full p-8 text-white">
      <p class="text-xs tracking-widest uppercase mb-1">About us</p>
      <p class="text-xl font-serif">私たちについて</p>
    </div>
  </a>
  <a href="#" class="relative group h-64 overflow-hidden">
    <!-- 同構造 -->
  </a>
</div>
```

---

## 3. 画像 + テキストの配置パターン（7型）

### 型A: 画像左 + テキスト右（一方向固定）
**採用サイト**: neuler（特長リスト）
```
┌──────┬────────────────┐
│[画像] │ 見出し          │
│300x300│ 本文テキスト    │
│角丸   │                │
└──────┴────────────────┘
```

**再現Tailwind CSS**:
```html
<div class="flex flex-col md:flex-row gap-6 items-start py-8 border-b border-gray-200">
  <img src="feature.jpg" class="w-full md:w-72 aspect-square rounded-lg object-cover flex-shrink-0" alt="">
  <div>
    <h3 class="text-xl font-bold mb-3">有資格者による完全マンツーマン指導</h3>
    <p class="text-gray-600 leading-relaxed">個人のレベルに合わせたレッスンを...</p>
  </div>
</div>
```

### 型B: 画像左右交互配置
**採用サイト**: angelux（Brandsセクション）
```
パターン1:
┌────────────┬────────────┐
│ テキスト    │  [画像]     │
│ 01 ANGELUX │  横長       │
└────────────┴────────────┘

パターン2:
┌────────────┬────────────┐
│  [画像]     │ テキスト    │
│  縦長       │ 02 Skin... │
└────────────┴────────────┘
```

**再現Tailwind CSS**:
```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  <div class="order-2 md:order-1"> <!-- odd: text left -->
    <span class="text-sm font-mono text-gray-400">01</span>
    <h3 class="text-2xl font-serif mt-1 mb-4">ANGELUX</h3>
    <p class="text-gray-600 leading-relaxed">説明文...</p>
  </div>
  <div class="order-1 md:order-2 overflow-hidden rounded-lg">
    <img src="brand01.jpg" class="w-full hover:scale-105 transition-transform duration-700" alt="">
  </div>
</div>
<!-- 次のアイテムは md:order を逆にして交互に -->
```

### 型C: 散りばめパララックス
**採用サイト**: mizota（コンセプト）
```
┌──────────────────────────────────┐
│  [写真A]           [写真B]        │
│   (y:-20px)        (y:-40px)     │
│                                  │
│       テキスト（中央）            │
│                                  │
│ [写真C]                [写真D]    │
│  (y:+10px)            (y:-30px)  │
│                                  │
│          [写真E]                  │
│           (y:+20px)              │
└──────────────────────────────────┘
```

**再現Tailwind CSS**:
```html
<section class="relative min-h-[150vh] py-32">
  <!-- パララックス画像群 -->
  <div class="absolute top-[5%] left-[5%] w-[35%] rounded-lg overflow-hidden">
    <img src="concept01.jpg" class="w-full" data-parallax-speed="0.3" alt="">
  </div>
  <div class="absolute top-[10%] right-[5%] w-[30%] rounded-lg overflow-hidden">
    <img src="concept02.jpg" class="w-full" data-parallax-speed="0.5" alt="">
  </div>
  <!-- 中央テキスト -->
  <div class="relative z-10 max-w-xl mx-auto text-center px-8 py-32">
    <h2 class="text-3xl font-serif leading-relaxed mb-8">
      時を越えて心地よさが続く家。
    </h2>
    <p class="text-gray-600 leading-loose">自分にとって快適な...</p>
  </div>
</section>
```

### 型D: フルワイドギャラリーグリッド
**採用サイト**: neuler（スタジオ写真）
```
┌──────────────────────────────────┐
│         [大画像 100%]             │
├────────────┬─────────────────────┤
│ [画像 50%] │ [画像 50%]           │
├────────────┴────────┬────────────┤
│   [画像 60%]        │ [画像 40%]  │
└─────────────────────┴────────────┘
```

**再現Tailwind CSS**:
```html
<div class="grid gap-4">
  <div class="overflow-hidden rounded-lg">
    <img src="studio-main.jpg" class="w-full aspect-[3/2] object-cover" alt="">
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div class="overflow-hidden rounded-lg">
      <img src="studio-02.jpg" class="w-full aspect-[3/2] object-cover" alt="">
    </div>
    <div class="overflow-hidden rounded-lg">
      <img src="studio-03.jpg" class="w-full aspect-[3/2] object-cover" alt="">
    </div>
  </div>
  <div class="grid grid-cols-5 gap-4">
    <div class="col-span-3 overflow-hidden rounded-lg">
      <img src="studio-04.jpg" class="w-full aspect-[3/2] object-cover" alt="">
    </div>
    <div class="col-span-2 overflow-hidden rounded-lg">
      <img src="studio-05.jpg" class="w-full aspect-[3/2] object-cover" alt="">
    </div>
  </div>
</div>
```

### 型E: 番号 + テキスト + 画像（ステップ型）
**採用サイト**: neuler（体験の流れ）, angelux（Brands）
```
┌──────┐
│[画像] │
│  01   │  ← 画像上に番号オーバーレイ
├──────┤
│見出し │
│本文   │
│[CTA]  │
└──────┘
```

**再現Tailwind CSS**:
```html
<div class="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4
            [mask-image:linear-gradient(to_right,transparent,black_32px,black_calc(100%-32px),transparent)]">
  <article class="flex-shrink-0 w-72 snap-start rounded-xl overflow-hidden bg-white shadow-sm">
    <div class="relative">
      <img src="step01.jpg" class="w-full aspect-[4/3] object-cover" alt="">
      <span class="absolute bottom-4 left-4 text-3xl font-mono text-white/80 font-bold">01</span>
    </div>
    <div class="p-5">
      <h3 class="font-bold mb-2">ご予約</h3>
      <p class="text-sm text-gray-600">ネット予約、公式LINEまたは...</p>
    </div>
  </article>
  <!-- 02, 03, 04... -->
</div>
```

### 型F: テキスト動画オーバーレイ
**採用サイト**: ba
```
動画の上に直接テキストを配置。
背景動画は装飾、テキストが主役。
```

### 型G: アイコングリッドカード
**採用サイト**: bakuraku
```
小さなアイコン + ラベル のカードをグリッド配置。
SaaS型サービス一覧に最適。
```

**再現Tailwind CSS**:
```html
<div class="grid grid-cols-2 md:grid-cols-4 gap-3">
  <a href="#" class="flex items-center gap-3 p-4 border rounded-lg hover:shadow-md transition">
    <img src="icon-expense.svg" class="w-8 h-8" alt="">
    <span class="text-sm font-medium">経費精算</span>
    <svg class="w-4 h-4 ml-auto text-gray-400"><!-- chevron --></svg>
  </a>
  <!-- 繰り返し -->
</div>
```

---

## 4. スクロールアニメーションのパターン（6型）

### 型A: フェードイン + 上方向スライド
**採用サイト**: neuler, ba, mizota
```css
/* 最も汎用的なスクロールアニメーション */
.fade-up {
  @apply opacity-0 translate-y-5 transition-all duration-700 ease-out;
}
.fade-up.is-visible {
  @apply opacity-100 translate-y-0;
}
```

**JS（IntersectionObserver）**:
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
```

### 型B: 画像リビール（ワイプ）
**採用サイト**: neuler
```css
.reveal-image {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 1.2s cubic-bezier(0.77, 0, 0.175, 1);
}
.reveal-image.is-visible {
  clip-path: inset(0 0 0 0);
}
```

### 型C: テキストマスク（行ごとスライドアップ）
**採用サイト**: angelux
```css
.mask-text {
  overflow: hidden;
}
.mask-text span {
  display: block;
  transform: translateY(110%);
  transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
}
.mask-text.is-visible span {
  transform: translateY(0);
}
/* 2行目以降に遅延 */
.mask-text.is-visible span:nth-child(2) { transition-delay: 0.1s; }
.mask-text.is-visible span:nth-child(3) { transition-delay: 0.2s; }
```

### 型D: 画像スケールイン（コンテナからはみ出さない）
**採用サイト**: angelux
```css
.scale-in {
  overflow: hidden;
  border-radius: 8px;
}
.scale-in img {
  transform: scale(1.15);
  transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.scale-in.is-visible img {
  transform: scale(1);
}
```

### 型E: パララックス（スクロール速度差）
**採用サイト**: angelux, mizota
```javascript
// data-parallax-speed 属性で速度指定
window.addEventListener('scroll', () => {
  document.querySelectorAll('[data-parallax-speed]').forEach(el => {
    const speed = parseFloat(el.dataset.parallaxSpeed);
    const rect = el.getBoundingClientRect();
    const scrolled = window.scrollY;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
```

### 型F: SVG段階色変化
**採用サイト**: angelux
```css
/* SVGパスの色をスクロール位置に応じて変化 */
.color-reveal path {
  fill: #e0e0e0;
  transition: fill 0.5s ease;
}
.color-reveal.is-visible path {
  fill: #333;
}
/* 行ごとに遅延 */
.color-reveal [data-row="1"].is-visible path { transition-delay: 0s; }
.color-reveal [data-row="2"].is-visible path { transition-delay: 0.3s; }
.color-reveal [data-row="3"].is-visible path { transition-delay: 0.6s; }
```

---

## 5. ホバーエフェクトのパターン（6型）

### 型A: アンダーラインスライドイン
**採用サイト**: angelux, privee
```html
<a href="#" class="relative inline-block group">
  <span>About Us</span>
  <span class="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full"></span>
</a>
```

### 型B: 画像スケール + シャドウ
**採用サイト**: mizota（施工事例カード）
```html
<a href="#" class="block overflow-hidden rounded-lg group">
  <div class="overflow-hidden">
    <img src="case.jpg" class="w-full transition-transform duration-500 group-hover:scale-105" alt="">
  </div>
  <div class="p-4 transition-shadow duration-300 group-hover:shadow-lg">
    <h3>タイトル</h3>
  </div>
</a>
```

### 型C: 円形ドット展開 + 矢印スライド（ボタン）
**採用サイト**: angelux
```html
<a href="#" class="relative inline-flex items-center gap-4 group py-2">
  <span class="relative flex items-center gap-2">
    <span class="w-2 h-2 bg-current rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
    <span class="text-sm uppercase tracking-wider">View More</span>
  </span>
  <span class="overflow-hidden w-4">
    <svg class="w-4 h-2 -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
      <!-- arrow SVG -->
    </svg>
  </span>
  <span class="absolute bottom-0 left-0 w-full h-px bg-current/30">
    <span class="block h-full bg-current w-0 group-hover:w-full transition-all duration-400"></span>
  </span>
</a>
```

### 型D: 矢印アイコンスライド（円形ボタン）
**採用サイト**: mizota
```html
<a href="#" class="group inline-flex items-center gap-3">
  <span class="w-12 h-12 rounded-full border border-current flex items-center justify-center overflow-hidden">
    <span class="flex transition-transform duration-300 group-hover:-translate-x-8">
      <svg class="w-4 h-4 flex-shrink-0"><!-- arrow --></svg>
      <svg class="w-4 h-4 flex-shrink-0 ml-4"><!-- arrow --></svg>
    </span>
  </span>
  <span>一覧を見る</span>
</a>
```

### 型E: 背景色変化（カード）
**採用サイト**: bakuraku
```html
<a href="#" class="flex items-center gap-3 p-4 border rounded-lg
                    hover:bg-gray-50 hover:shadow-sm transition-all duration-200">
  <img src="icon.svg" class="w-8 h-8" alt="">
  <span class="font-medium">サービス名</span>
</a>
```

### 型F: ナビゲーションドットハンバーガー
**採用サイト**: angelux
```html
<button class="group relative w-10 h-10 flex items-center justify-center">
  <span class="grid grid-cols-2 gap-1">
    <span class="w-1.5 h-1.5 bg-current rounded-full group-hover:scale-125 transition"></span>
    <span class="w-1.5 h-1.5 bg-current rounded-full group-hover:scale-125 transition delay-75"></span>
    <span class="w-1.5 h-1.5 bg-current rounded-full group-hover:scale-125 transition delay-100"></span>
    <span class="w-1.5 h-1.5 bg-current rounded-full group-hover:scale-125 transition delay-150"></span>
  </span>
</button>
```

---

## 6. CTAボタンのデザインパターン（6型）

### 型A: 角丸 + アクセント色（直接的）
**採用サイト**: neuler, bonx
```html
<a href="#" class="inline-flex items-center gap-2 bg-amber-700 text-white px-8 py-4 rounded-lg
                    hover:bg-amber-800 transition-colors shadow-md hover:shadow-lg">
  <span>体験レッスンを予約する</span>
  <svg class="w-4 h-4"><!-- play icon --></svg>
</a>
```

### 型B: ボーダー + 矢印（上品）
**採用サイト**: angelux, ba
```html
<a href="#" class="relative inline-flex items-center gap-4 group">
  <span class="absolute bottom-0 left-0 w-full h-px bg-current/20">
    <span class="block w-0 h-full bg-current group-hover:w-full transition-all duration-500"></span>
  </span>
  <span class="w-2 h-2 rounded-full bg-current opacity-0 group-hover:opacity-100 transition"></span>
  <span class="text-sm uppercase tracking-widest">View More</span>
  <span class="overflow-hidden w-4">
    <svg class="w-4 h-2 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
      <!-- arrow -->
    </svg>
  </span>
</a>
```

### 型C: フローティング固定CTA
**採用サイト**: neuler
```html
<div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
  <a href="#" class="flex items-center gap-3 bg-amber-700 text-white px-5 py-3 rounded-xl shadow-lg
                      hover:bg-amber-800 transition">
    <div>
      <p class="text-xs opacity-80">かんたんWeb予約</p>
      <p class="font-bold">体験レッスンを予約する</p>
      <p class="text-xs opacity-70">（50分5,500円）</p>
    </div>
  </a>
  <div class="flex gap-2 justify-end">
    <a href="#" class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
      <!-- LINE icon -->
    </a>
    <button class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border">
      <!-- menu icon -->
    </button>
  </div>
</div>
```

### 型D: アクセントデコ付きCTA（SaaS型）
**採用サイト**: bakuraku
```html
<a href="#" class="relative flex items-center gap-4 bg-indigo-900 text-white px-6 py-3 rounded-lg overflow-hidden">
  <img src="accent-deco.png" class="absolute -top-1 -left-1 w-7 h-7" alt="" aria-hidden="true">
  <div>
    <p class="text-xs text-amber-300 font-bold">バクラクがわかる3点セット</p>
    <p class="text-lg font-bold">資料ダウンロード</p>
  </div>
  <span class="bg-white/20 text-white px-3 py-1 rounded text-sm font-bold">無料</span>
</a>
```

### 型E: 背景画像オーバーレイCTA（セクション型）
**採用サイト**: neuler, mizota
```html
<a href="#" class="relative block py-20 overflow-hidden group">
  <img src="cta-bg.jpg" class="absolute inset-0 w-full h-full object-cover
                                group-hover:scale-105 transition-transform duration-700" alt="">
  <div class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>
  <div class="relative z-10 text-center text-white">
    <p class="text-xs tracking-widest uppercase mb-2 opacity-80">Contact</p>
    <h2 class="text-2xl font-serif mb-4">お問い合わせ</h2>
    <span class="inline-flex items-center gap-2 opacity-70 group-hover:opacity-100 transition">
      →
    </span>
  </div>
</a>
```

### 型F: 円形SVGプログレスボタン
**採用サイト**: angelux（動画再生ボタン）
```html
<button class="relative w-24 h-24 group">
  <svg class="absolute inset-0 w-full h-full" viewBox="0 0 160 160">
    <circle cx="80" cy="80" r="79.5" fill="none" stroke="currentColor" stroke-opacity="0.15"/>
    <circle cx="80" cy="80" r="79.5" fill="none" stroke="currentColor"
            stroke-dasharray="500" stroke-dashoffset="500"
            class="transition-all duration-1000 group-hover:stroke-dashoffset-0"/>
  </svg>
  <span class="absolute inset-0 flex items-center justify-center">
    <svg class="w-6 h-3 text-white"><!-- play arrow --></svg>
  </span>
</button>
```

---

## クイックリファレンス: 業種別おすすめパターン

| パターン | ジム系 | 美容系 | SaaS系 | 建設系 |
|---------|--------|--------|--------|--------|
| ヒーロー | 型B (2カラム) | 型A (動画BG) | 型G (メガメニュー) | 型C (スライダーBG) |
| セクション区切り | 型A+B (色+SVG) | 型D (マーキー) | 型A (色切替) | 型C (パララックス重なり) |
| 画像+テキスト | 型A (一方向固定) | 型B (交互配置) | 型G (アイコングリッド) | 型C (散りばめ) |
| スクロールアニメ | 型A+B (フェード+リビール) | 型C+D (マスク+スケール) | 型A (フェード) | 型A+E (フェード+パララックス) |
| ホバー | 型B (スケール) | 型A+C (ライン+ドット) | 型E (背景色) | 型D (矢印スライド) |
| CTA | 型A+C (直接+固定) | 型B+F (上品+SVG) | 型D (デコ付き) | 型E (背景画像) |
