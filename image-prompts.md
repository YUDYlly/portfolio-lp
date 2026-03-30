# LP 画像生成プロンプト集（完全版）

> **生成ツール**: Nanobanana Pro（静止画）/ Kling AI（動画）
> **保存先**: `public/images/{gym|beauty|saas|construction}/`
> **フォーマット**: WebP 推奨（Next.js Image で自動変換可）

---

## 生成時の共通注意点

- テキスト・文字・ロゴは入れない（LPコード側でオーバーレイする）
- 人物の顔は正面を避け、横顔・後ろ姿・手元にフォーカス（肖像権リスク回避）
- 各LPのカラーパレットに合った色調で統一する
- ダーク系LP（Gym/SaaS）の画像は暗めのトーンで生成する（明るすぎるとコード側のオーバーレイと合わない）

### 動画生成ワークフロー（Image-to-Video）

動画素材は **2ステップ** で作成する:

1. **Step 1**: Nanobanana Pro で **初期フレーム画像**（キーフレーム）を生成
   - 動画の出発点となる構図・ライティング・色調を確定させる
   - このフレームの品質が動画全体の品質を決める
   - アスペクト比は動画と同じ（16:9）
2. **Step 2**: Kling AI の **Image-to-Video モード** に初期フレーム画像を入力
   - カメラワーク（パン・ドリー等）と動く要素（粉塵・花びら等）だけを指示
   - 初期フレームの構図・色調・雰囲気は自動的に引き継がれる
   - 動きの指示は控えめに。大きな動きは破綻しやすい

---

## 1. パーソナルジム FORGE

**カラーパレット**: 背景 `#09090b`（ほぼ黒）、アクセント `#D4AF37`（ゴールド）
**雰囲気**: ダーク・ムーディー・シネマティック。高級パーソナルジム。

### 1-1. ヒーロー画像
**ファイル名**: `hero.webp`
**アスペクト比**: 3:4（縦長）
**表示**: 右カラム。上部にゴールドのリムライト効果、下部に黒グラデーションオーバーレイあり。

```
Athletic male silhouette in a dark premium gym, dramatic low-key lighting,
single warm golden rim light from the upper right creating edge highlights
on shoulders and arms, person facing away from camera in a training stance,
holding dumbbells, dark moody atmosphere with deep shadows,
shallow depth of field, black and dark gray tones with subtle warm highlights,
cinematic color grading, portrait orientation 3:4, no text, no face visible
```

### 1-2〜1-4. 選ばれる理由（3枚）
**ファイル名**: `strength-01.webp`, `strength-02.webp`, `strength-03.webp`
**アスペクト比**: 4:3（横長）
**表示**: 暗い背景セクション内。コード側で大きな番号が薄く重なる。右下にゴールドの装飾ブロックあり。

```
[01 — マンツーマン指導]
Personal trainer guiding a client through a dumbbell exercise in a dark
private gym room, one-on-one session, trainer adjusting client's form,
warm golden accent lighting from overhead spot, dark walls and floor,
shallow depth of field focusing on hands and weights,
cinematic dark tone, landscape 4:3, no text, no faces clearly visible

[02 — 食事指導]
Healthy meal prep on a dark slate countertop, grilled chicken breast
with colorful vegetables arranged neatly, soft overhead warm lighting,
a phone showing a nutrition tracking app placed beside the plate,
dark background, food photography style with moody tones,
shallow depth of field, landscape 4:3, no text

[03 — 駅チカ好立地]
Modern gym entrance at night viewed from outside, sleek dark facade
with warm golden light spilling from inside through glass door,
clean urban street setting, wet pavement reflecting lights,
architectural photography style, dark cinematic mood,
landscape 4:3, no text, no people
```

### 1-5. トレーナーポートレート
**ファイル名**: `trainer.webp`
**アスペクト比**: 3:4（縦長）
**表示**: 上部にゴールドのグラデーション、暗い背景。装飾ボーダーあり。

```
Japanese male fitness trainer in his early 30s, confident side profile,
wearing fitted black athletic wear, arms crossed,
dark gym environment in background out of focus,
single warm golden key light from the left creating dramatic shadows,
professional portrait style, upper body shot, portrait 3:4,
dark background, subtle golden rim light on shoulders, no text
```

### 1-6〜1-7. Before/After（2枚）
**ファイル名**: `before.webp`, `after.webp`
**アスペクト比**: 3:4（縦長・小さく表示 64px幅）
**表示**: 小サイズのサムネイル。Beforeは暗いグレー背景、Afterはゴールドティント。

```
[Before]
Male torso side view, slightly overweight build, neutral standing pose,
soft diffused lighting on dark gray background, no face,
clinical/documentary style, muted desaturated tones,
portrait 3:4, no text

[After]
Male torso side view, lean muscular build, confident standing pose,
warm golden-tinted lighting on dark background, no face,
slightly more dramatic lighting than the before image,
portrait 3:4, no text
```

### 1-8〜1-10. お客様アバター（3枚）
**ファイル名**: `voice-01.webp`, `voice-02.webp`, `voice-03.webp`
**アスペクト比**: 1:1（正方形・40px表示）
**表示**: 小さな円形クリップ。暗い背景上。

```
[voice-01 — 30代男性]
Japanese man in his 30s, slight smile, business casual attire,
neutral dark background, soft studio lighting, headshot, square 1:1, no text

[voice-02 — 20代女性]
Japanese woman in her late 20s, natural smile, casual athletic wear,
neutral dark background, soft studio lighting, headshot, square 1:1, no text

[voice-03 — 40代男性]
Japanese man in his 40s, gentle smile, polo shirt,
neutral dark background, soft studio lighting, headshot, square 1:1, no text
```

### 1-11. アクセスマップ
**ファイル名**: `map.webp`
**アスペクト比**: 16:7（横長ワイド）
**方法**: Google Maps のスクリーンショット（渋谷3丁目周辺）をダークテーマで取得。または架空の地図画像を生成。

```
Minimalist dark-themed street map of Shibuya area Tokyo,
dark gray roads on black background, subtle grid pattern,
single golden pin marker in the center, clean cartographic style,
wide landscape 16:7, no text labels, no branding
```

### 1-12.（任意）ヒーロー背景動画
**ファイル名**: `hero-bg.mp4`（動画） / `hero-bg-keyframe.webp`（初期フレーム）
**ツール**: Nanobanana Pro（初期フレーム）→ Kling AI（Image-to-Video）
**尺**: 5秒ループ

**Step 1 — 初期フレーム画像を生成（Nanobanana Pro）**
```
Interior of a dark premium private gym, centered composition,
a heavy barbell on a rack in the foreground with weight plates visible,
single dramatic golden spotlight beam cutting diagonally through
floating dust particles from the upper right,
bench press and dumbbell rack visible in the mid-ground,
deep black shadows filling most of the frame,
warm golden highlights reflecting off metal equipment surfaces,
no people, cinematic still photography, wide angle 16:9, no text
```

**Step 2 — 動画化（Kling AI / Image-to-Video モード）**
```
Slow camera pan right to left across the gym equipment,
dust particles gently drifting through the golden spotlight beam,
subtle light flicker on metal surfaces, very slow deliberate movement,
maintain the dark moody atmosphere, 5 second seamless loop
```

---

## 2. 美容クリニック LUMINE CLINIC

**カラーパレット**: 背景 白〜`#faf7f2`（クリーム）〜`#f8ede8`（ピンクベージュ）、アクセント `#B76E79`（ダスティローズ）
**雰囲気**: 上品・清潔・ナチュラル。女性医師による高級美容クリニック。

### 2-1〜2-4. 施術メニュー（4枚）
**ファイル名**: `treatment-01.webp` 〜 `treatment-04.webp`
**アスペクト比**: 4:3（横長）
**表示**: クリーム色の背景セクション内。コード側で薄い番号テキストが重なる。ボーダーはローズ/8%。

```
[01 — 医療脱毛]
Close-up of a modern medical laser treatment device in a pristine clinic room,
sleek white and silver device design, soft diffused natural light,
clean white surfaces, subtle warm pink ambient glow,
shallow depth of field focusing on the device head,
medical aesthetic photography, landscape 4:3, no people, no text

[02 — ヒアルロン酸注入]
Elegant medical tray with hyaluronic acid syringes and vials arranged neatly,
white ceramic surface, soft overhead diffused lighting,
subtle rose-gold metallic accents on the tray edges,
shallow depth of field, clean clinical yet luxurious aesthetic,
landscape 4:3, no people, no text

[03 — フォトフェイシャル]
IPL photofacial device head close-up emitting soft warm light,
treatment bed with white linen in soft focus background,
clean bright clinic environment, gentle rose-tinted ambient lighting,
modern medical equipment, shallow depth of field,
landscape 4:3, no people, no text

[04 — メディカルスキンケア]
Premium medical skincare product lineup on white marble surface,
5-6 white clinical bottles with minimal rose-gold cap accents,
soft natural window light from the left, slight shadows,
luxury medical skincare aesthetic, clean composition,
landscape 4:3, no people, no text
```

### 2-5. 院長ポートレート
**ファイル名**: `doctor.webp`
**アスペクト比**: 3:4（縦長）
**表示**: クリーム→白のグラデーション背景。装飾ボーダーあり。ローズのリング。

```
Japanese female doctor in her early 40s, wearing crisp white medical coat,
gentle confident three-quarter profile view, subtle natural smile,
soft diffused studio lighting from the right, warm skin tones,
clean light beige-cream background with slight warmth,
professional medical portrait, upper body, portrait 3:4,
stethoscope optional around neck, no text
```

### 2-6〜2-7. Before/After 症例（2枚）
**ファイル名**: `case-before.webp`, `case-after.webp`
**アスペクト比**: 1:1（正方形・80px表示）
**表示**: 小サイズ。白背景カード上。Beforeは淡いリング、Afterはローズのリング。

```
[Before]
Close-up of cheek and jawline area showing mild skin texture concerns,
uneven skin tone, slight redness, soft diffused clinical lighting,
neutral light background, dermatological documentation style,
square 1:1, no face fully visible, no text

[After]
Close-up of cheek and jawline area showing smooth clear skin,
even skin tone, healthy glow, same lighting angle as before image,
neutral light background, clinical documentation style,
square 1:1, no face fully visible, no text
```

### 2-8〜2-10. お客様アバター（3枚）
**ファイル名**: `voice-01.webp`, `voice-02.webp`, `voice-03.webp`
**アスペクト比**: 1:1（正方形・40px表示）

```
[voice-01 — 30代女性]
Japanese woman in her early 30s, natural makeup, warm smile,
light casual blouse, soft warm studio lighting,
clean light cream background, headshot, square 1:1, no text

[voice-02 — 40代女性]
Japanese woman in her 40s, elegant appearance, gentle smile,
pearl earrings, soft natural lighting,
clean light background, headshot, square 1:1, no text

[voice-03 — 50代女性]
Japanese woman in her 50s, refined appearance, confident warm smile,
simple elegant attire, soft studio lighting,
clean light background, headshot, square 1:1, no text
```

### 2-11. アクセスマップ
**ファイル名**: `map.webp`
**アスペクト比**: 16:7

```
Minimalist light-themed street map of Omotesando area Tokyo,
soft beige-cream roads on white background, delicate line style,
single rose-pink pin marker in the center, elegant cartographic style,
wide landscape 16:7, no text labels, no branding
```

### 2-12.（任意）ヒーロー背景動画
**ファイル名**: `hero-bg.mp4`（動画） / `hero-bg-keyframe.webp`（初期フレーム）
**ツール**: Nanobanana Pro（初期フレーム）→ Kling AI（Image-to-Video）
**尺**: 5秒ループ

**Step 1 — 初期フレーム画像を生成（Nanobanana Pro）**
```
Bright luxury beauty clinic interior, centered symmetrical composition,
white marble reception counter in the foreground,
a clear glass vase with fresh white peonies placed on the counter,
sheer white curtains on both sides filtering soft diffused natural light,
subtle rose-gold metallic accents on fixtures and edges,
a few white flower petals scattered gently on the marble surface,
no people, pristine clean atmosphere, warm cream and white color palette,
architectural interior photography, wide angle 16:9, no text
```

**Step 2 — 動画化（Kling AI / Image-to-Video モード）**
```
Very slow forward dolly movement through the clinic interior,
sheer curtains swaying gently in a light breeze,
a few white flower petals softly drifting downward through the air,
subtle light shifts as the camera moves forward,
maintain the bright serene calming atmosphere, 5 second seamless loop
```

---

## 3. SaaS FlowBoard

**カラーパレット**: 背景 `#0a0a14`（ダーク）/ 白（交互）、アクセント `#7C3AED`→`#2563EB`（紫→青グラデーション）
**雰囲気**: テック・先進的・ミニマル。BtoB プロジェクト管理ツール。

### 3-1. ロゴクラウド（8社分）
**ファイル名**: `logo-01.svg` 〜 `logo-08.svg`
**フォーマット**: SVG（手動作成推奨）
**表示**: マーキーバンド内。白背景で横スクロール。

> AI生成ではなく、Figma/SVGエディタで架空のテック企業ロゴを作成。
> シンプルなワードマーク or シンボル + 社名。グレー単色。

```
企業名リスト（架空）:
1. TechForward — サンセリフ太字
2. CreateLab — 丸みのあるモダン書体
3. NexaBridge — 幾何学的なシンボル + テキスト
4. Monolith — 極太スラブセリフ
5. CloudSync — クラウドアイコン + テキスト
6. DataVerse — アイコン（六角形）+ テキスト
7. HARMONIA — スペース広めのオールキャップス
8. Plott — シンプルなスクリプト系
```

### 3-2〜3-5. 機能紹介 UI モック（4枚 — 任意）
**現状**: CSS のみで高品質なモックアップが実装済み。画像は不要。
**将来的に**: Figma で作った精密 UI モックに差し替える場合のみ生成。

### 3-6〜3-8. お客様アバター（3枚 — 任意）
**現状**: イニシャル + グラデーション背景で成立。差し替える場合:

```
[voice-01 — IT企業PM]
Japanese man in his 30s, modern glasses, neat hair,
dark navy button-down shirt, neutral dark background,
professional headshot, square 1:1, no text

[voice-02 — スタートアップCTO]
Japanese woman in her late 20s, short hair, confident expression,
casual tech company attire, neutral dark background,
professional headshot, square 1:1, no text

[voice-03 — 大企業マネージャー]
Japanese man in his 40s, suit without tie, approachable smile,
neutral dark background, professional headshot, square 1:1, no text
```

---

## 4. 建設 TAKUMI建設

**カラーパレット**: 背景 白 / `#1E3A5F`（ネイビー）、アクセント `#E67E22`（オレンジ）
**雰囲気**: 信頼・実直・職人気質。地域密着30年の総合建設会社。

### 4-1〜4-3. ヒーロースライダー（3枚）★最優先
**ファイル名**: `hero-01.webp`, `hero-02.webp`, `hero-03.webp`
**アスペクト比**: 16:9（フル画面表示）
**表示**: フェードスライダー。上に濃いネイビーオーバーレイ（80%）が掛かる。白テキストが乗る。→ **暗めでコントラストの強い写真が必要**。

```
[01 — 住宅建築]
Aerial view of a modern Japanese two-story house under construction,
wooden frame structure visible, workers on scaffolding,
golden hour sunlight creating long warm shadows,
residential neighborhood visible in background,
professional construction photography, wide landscape 16:9, no text

[02 — 商業施設]
Modern commercial building construction site, steel beam framework
against a deep blue twilight sky, construction crane silhouette,
safety lights creating warm orange points of light,
dramatic low-angle perspective, professional construction photography,
wide landscape 16:9, no text

[03 — 公共インフラ]
Wide bridge construction over a river at sunset,
concrete pillars and steel reinforcements visible,
warm orange sun on the horizon reflecting on water,
workers in safety helmets as small silhouettes,
documentary construction photography, wide landscape 16:9, no text
```

### 4-4〜4-8. コンセプト Parallax（5枚）
**ファイル名**: `parallax-01.webp` 〜 `parallax-05.webp`
**アスペクト比**: 混在（4:3, 3:4, 4:3, 1:1, 16:9）
**表示**: 散らし配置で60〜70%の透明度。ベージュ背景上に浮かぶ。→ **柔らかいトーンの写真。暗すぎない。**

```
[01 — 4:3 / 住宅完成]
Completed modern Japanese house exterior, clean architectural lines,
natural wood accents and white walls, landscaped front garden,
soft warm afternoon light, gentle shadows,
professional real estate photography, landscape 4:3, no text, no people

[02 — 3:4 / 職人の手元]
Close-up of a Japanese carpenter's hands carefully measuring and marking
wood with a pencil and square ruler, sawdust on work surface,
warm natural workshop lighting, shallow depth of field,
documentary craftsmanship photography, portrait 3:4, no face, no text

[03 — 4:3 / 建設現場]
Wide shot of a construction site in progress, concrete foundation
with rebar grid visible, a few workers in helmets consulting blueprints,
overcast sky providing even soft lighting, earth tones,
professional documentary style, landscape 4:3, no text

[04 — 1:1 / 設計図面]
Architectural blueprint spread on a desk, pencil and scale ruler placed
on top, soft overhead warm light, clean desk surface,
shallow depth of field on the blueprint details,
professional still life, square 1:1, no text visible on blueprint

[05 — 16:9 / 完成した街並み]
Panoramic view of a completed residential development,
multiple modern Japanese houses in a clean neighborhood,
well-maintained streets and landscaping, late afternoon golden light,
professional architectural photography, wide landscape 16:9, no text
```

### 4-9〜4-11. 選ばれる理由（3枚）
**ファイル名**: `reason-01.webp`, `reason-02.webp`, `reason-03.webp`
**アスペクト比**: 4:3（横長）
**表示**: 白い背景セクション。コード側で巨大な番号（120px）が極めて薄く重なる。下部にオレンジの装飾ブロック。

```
[01 — 地域密着30年]
Aerial view of a Japanese suburban neighborhood with mix of traditional
and modern houses, green hills in the background, warm afternoon light,
sense of community and rootedness, professional drone photography,
landscape 4:3, no text

[02 — 自社職人の一貫施工]
Team of 4-5 Japanese construction workers in helmets and work clothes,
standing together at a construction site, backs or side profiles visible,
morning sunlight, sense of teamwork and professionalism,
documentary photography style, landscape 4:3, no faces clearly visible, no text

[03 — 10年保証・アフターケア]
Clean completed modern Japanese house interior, bright living room
with large windows letting in natural light, polished wooden flooring,
sense of quality and care, warm welcoming atmosphere,
professional interior photography, landscape 4:3, no people, no text
```

### 4-12〜4-14. 施工事例（3枚）
**ファイル名**: `work-01.webp`, `work-02.webp`, `work-03.webp`
**アスペクト比**: 4:3（横長）
**表示**: ダークネイビー（`#1E3A5F`）背景のカード内。左上にオレンジのカテゴリバッジ。ホバーでネイビーオーバーレイ。

```
[01 — T邸 新築工事 / 新築住宅]
Completed modern Japanese two-story wooden house exterior,
white and natural wood facade, large south-facing windows,
landscaped entrance with stepping stones, blue sky with soft clouds,
professional architectural photography, landscape 4:3, no text

[02 — Cafe MORI 新装工事 / 商業施設]
Inviting cafe interior with warm wood and industrial design elements,
pendant lights, exposed ceiling beams, counter seating area,
warm afternoon light streaming through large front windows,
professional interior photography, landscape 4:3, no people, no text

[03 — ◇◇橋 補修工事 / 公共工事]
Completed bridge over a calm river in a Japanese countryside setting,
clean concrete and steel railings, well-maintained road surface,
surrounding green landscape, clear day with soft clouds,
civil engineering documentation photography, landscape 4:3, no people, no text
```

### 4-15. お客様アバター（3枚）
**ファイル名**: `voice-01.webp`, `voice-02.webp`, `voice-03.webp`
**アスペクト比**: 1:1

```
[voice-01 — 30代夫婦（代表として男性）]
Japanese man in his mid-30s, casual polo shirt, warm friendly smile,
soft natural lighting, neutral light gray background,
headshot, square 1:1, no text

[voice-02 — 40代女性カフェオーナー]
Japanese woman in her 40s, apron over casual clothes, warm smile,
soft natural lighting, neutral light gray background,
headshot, square 1:1, no text

[voice-03 — 50代男性]
Japanese man in his 50s, button-down shirt, gentle reliable expression,
soft natural lighting, neutral light gray background,
headshot, square 1:1, no text
```

### 4-16.（任意）代表者ポートレート
**ファイル名**: `president.webp`
**アスペクト比**: 3:4

```
Japanese male construction company president in his mid-50s,
wearing navy suit jacket over a light blue work shirt, no tie,
confident warm smile, three-quarter profile view,
construction site in soft focus background with steel framework,
warm natural lighting, professional business portrait,
portrait 3:4, no text
```

---

## 生成チェックリスト

### 最優先（ファーストビューに影響）
- [ ] Construction ヒーロースライダー × 3（`hero-01〜03.webp`）
- [ ] Gym ヒーロー（`hero.webp`）

### 高優先（信頼感・コンテンツ充実）
- [ ] Gym トレーナー（`trainer.webp`）
- [ ] Beauty 院長（`doctor.webp`）
- [ ] Beauty 施術メニュー × 4（`treatment-01〜04.webp`）
- [ ] Construction 施工事例 × 3（`work-01〜03.webp`）

### 中優先（雰囲気の底上げ）
- [ ] Gym 選ばれる理由 × 3（`strength-01〜03.webp`）
- [ ] Construction 選ばれる理由 × 3（`reason-01〜03.webp`）
- [ ] Construction Parallax × 5（`parallax-01〜05.webp`）

### 低優先（小サイズ or CSS代用可）
- [ ] Gym Before/After × 2
- [ ] Beauty Before/After × 2
- [ ] 全LP アバター × 12
- [ ] 全LP マップ × 2
- [ ] SaaS ロゴ × 8（SVG手動作成）

### 任意（動画・追加素材）
- [ ] Gym 背景動画
- [ ] Beauty 背景動画
- [ ] Construction 代表者ポートレート
