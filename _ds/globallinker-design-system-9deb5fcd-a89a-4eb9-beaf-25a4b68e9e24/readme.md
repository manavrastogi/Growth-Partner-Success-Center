# GlobalLinker Design System

The organization-wide design system for **GlobalLinker** — India's B2B marketplace and seller-portal platform. It governs every landing page, seller-portal surface and marketing canvas: tokens, typography, brand assets, reusable React components and full landing-page UI kit.

---

## 1. Company & Product Context

GlobalLinker helps **Indian SMEs — manufacturers, exporters and suppliers — become discoverable, credible and trade-ready** for global B2B sourcing. Instead of a static brochure website, a business gets a structured, AI- and search-friendly B2B presence: a professional storefront, a digital product catalogue, marketplace listings, and inquiry/RFQ tooling.

Surfaces represented in this system:
- **Seller Portal landing** (`seller.globallinker.com`) — the primary acquisition page for sellers: hero, problem/solution, plan selector, Done-For-Me setup, testimonials.
- **Premium plus** (`seller.globallinker.com/premium`) — long-form upgrade page with a deep feature-comparison matrix.
- **Done-For-Me** (`seller.globallinker.com/products/done-for-me…`) — a navy, high-contrast "we build it for you" offer page.
- **Marketplace homepage** (`www.globallinker.com`) — buyer-side procurement hero with search.

The platform is positioned inside India's trade & digital-commerce ecosystem and references partners such as **FIEO, ONDC, and the Indian Business Portal (IBP)**.

### Sources provided
Four reference screenshots and two logo SVGs were supplied (stored in `uploads/` and `assets/logos/`):
- `seller.globallinker.com_.png` — seller landing (primary reference)
- `seller.globallinker.com_premium.png` — Premium plus comparison page
- `seller.globallinker.com_products_done-for-me-b2b-website-and-digital-catalog-set-up (1).png` — Done-For-Me page
- `www.globallinker.com_.png` — marketplace homepage *(referenced in the brief but NOT included in the upload; patterns inferred from the brief + sibling pages)*
- `Globallinker_Logo.svg` (dark wordmark) · `Logo_Globallinker_LightBlue_White.svg` (light/white wordmark)

> No codebase or Figma file was provided — this system was built from the brand brief + reference screenshots. If a codebase or Figma becomes available, re-derive components from source for higher fidelity.

---

## 2. Content Fundamentals — how GlobalLinker writes

**Voice:** Confident, outcome-led, plain-spoken. Speaks to ambitious-but-practical Indian SME owners. Benefit-first, never jargon-for-jargon's-sake.

**Person:** Second person — **"you" / "your business"**. The product is the enabler ("we'll build your website for you"), the SME is the hero.

**Casing:** Headlines use **Title Case** or sentence case with a few key words emphasized in color. Eyebrows and table-section labels are **UPPERCASE** with wide tracking. Body is sentence case.

**Structure of a headline:** A plain claim with one or two words recolored for emphasis — blue for the discovery/visibility idea, orange for urgency or the offer. Examples:
- "Get Your **Business Discovered** by More Buyers"
- "Turn Your Product Catalogue Into a **Discoverable, Trade-Ready B2B Presence**"
- "Get Your Business Discovered by Buyers — **Not Just a Website**"
- "Be Visible, **Where Buyers Search**"

**Sub-copy:** One tight sentence that names the audience and the payoff ("built for manufacturers, exporters and suppliers — so customers can easily find you, evaluate you, and send enquiries").

**Proof & numbers:** Heavy use of concrete trust metrics — "50,000+ Indian SMEs", "10,000+ transactions", "150+ countries", "₹0 to get started". Prices in **₹** with `/year` or `/yr`, often shown next to a struck-through anchor price. Star ratings and named, role+company testimonials.

**CTAs:** Action + outcome, often with a forward arrow. "Get Started for Free", "Upgrade to Premium", "Proceed to Secure Checkout", "Get Expert Setup", "Know More". One primary (orange) CTA per section.

**Tone rules:** Reassuring and low-risk ("No credit card required", "Cancel anytime"). Problem→solution framing ("Most Indian SMEs Struggle to Be Found" → "The Solution"). **No emoji.** Occasional em-dashes for the "— not just X" turn. Avoid hype superlatives; let the numbers carry weight.

---

## 3. Visual Foundations

**Palette.** Two-accent system on a cool neutral base:
- **Brand Blue `#1372f6`** — headline emphasis words, links, active/selected states, info icon chips, "the discovery idea."
- **Accent Orange `#f97015`** — *primary* CTA fills, "Most Popular"/featured highlights, badges, alerts, urgency words. Used sparingly and decisively — it is the spend-attention color.
- **Navy `#021450`** — the brand navy: commanding hero blocks, premium/Done-For-Me sections, footer, comparison-table headers. Rendered as a **solid** fill.
- **Neutrals** — a slate ramp from `#f8fafc` (page) through `#e2e8f0` (the ubiquitous hairline border) to `#475569` (body) and `#64748b` (muted). Default heading/ink is `#1e293b` (`--gl-ink`).
- **Signature subtle gradient** `linear-gradient(135deg, #ebf1fa 0%, #fcf0e8 100%)` — a barely-there blue→peach wash used behind hero and CTA bands. Dark sections use a **solid `#021450`** fill.

**Typography.** **Plus Jakarta Sans** throughout — geometric, modern, corporate. Headings are **bold/extrabold (700–800)** with **tight line-height (~1.1)** and slightly negative tracking for a high-density, confident feel. Mixed coloring inside headings (white+orange on dark; navy+blue/orange on light). Body is 15px at 1.55 line-height. Uppercase eyebrows at 12px with `0.08em` tracking.

**Layout — compact determinism.** Tight real estate by design: standard sections are **`py-12` (48px)**, hero sections **`py-16` (64px) max**. No sprawling whitespace dividers. Content sits in centered `~1100px` max-width containers; grids use a `16px` gap. Symmetric 2- and 3-column card grids are the dominant rhythm.

**Cards.** White, **1px `#e2e8f0` hairline border**, `radius-lg (14px)`, near-flat shadow at rest (`shadow-xs`). Interactive cards lift `-2px` with a soft blue-tinted shadow on hover. Featured/pricing cards swap the border for a **2px orange** border + drop shadow + a "Most Popular" badge clipped to the top edge.

**Corner radii.** `6/10/14/20px` plus full pills (`999px`) for badges, eyebrows and the search bar. Inputs and buttons sit at `8–12px`.

**Shadows.** Soft and low-spread — elevation is communicated subtly. The one assertive shadow is the **orange CTA glow** (`0 6px 16px rgba(249,112,21,.28)`) under primary buttons.

**Backgrounds.** Mostly flat white and `slate-50`. The two gradients above are the only decorative fills — no photographic full-bleeds, no textures, no patterns. Product/browser visuals in dark heroes are rendered as clean translucent panels rather than photos.

**Motion.** Restrained and functional. `200ms` standard ease for color/shadow/transform; `120ms` for press. Buttons dim ~6% brightness on hover and scale to `0.97` on press (never a hue change). Cards translate up `2px` on hover. Links shift to blue. No bounces, no looping decorative animation.

**Transparency / blur.** Used only inside dark sections — white at 5–12% opacity for panels, chips and dividers. No glassmorphism on light surfaces.

**Imagery vibe.** Cool, clean, professional, optimistic. Where photography appears it is bright daylight business imagery; in this system it is represented by placeholders/panels rather than generated.

---

## 4. Iconography

- **Line (outline) icons, ~2px stroke, rounded caps/joins** — matching the **Lucide** family. The reference UI uses thin, geometric line icons in tinted square chips (blue chip for neutral/feature icons, orange chip for emphasis/value icons).
- This system loads **Lucide** from CDN (`lucide@0.468.0` UMD) and renders icons via a tiny wrapper, `ui_kits/landing-page/Icons.jsx` → `window.GLIcon` (`<Icon name="Search" size={20} />`). **This is a substitution** — no original icon font/sprite was provided. If GlobalLinker ships a proprietary icon set, drop it into `assets/icons/` and point the wrapper at it.
- **Check / cross** states (green check, grey cross) carry feature-inclusion meaning in plan cards and the comparison matrix.
- **Star** glyphs (rating gold `#f5a623`) for testimonials/reviews.
- **No emoji** anywhere in the brand. No unicode-as-icon.
- **Logos:** `assets/logos/globallinker-logo.svg` (dark wordmark) on white/ultra-light backgrounds only; `assets/logos/globallinker-logo-reverse.svg` (white wordmark + teal glyph) on navy or deep colored blocks (`globallinker-logo-reverse.png` is a raster fallback).

---

## 5. Reusable Structural Patterns (A–F)

These are the six master landing-page blocks. Every one is realized in the **Landing Page UI kit** (`ui_kits/landing-page/`).

- **A — Deep Navy Hero** (`NavyDoneForMe.jsx`): high-contrast navy block, mixed white/orange headline, value checklist + struck-through price + orange CTA, a product-browser panel on the right, and a row of white value cards beneath.
- **B — B2B Search Hero** (`SearchCTA.jsx` + `SearchBar` component): subtle-gradient band with a pill search field + orange button and verified-supplier micro-badges.
- **C — Multi-Column Core Benefit Grid** (`SolutionGrid.jsx` + `FeatureCard`): symmetric 2/3-column white cards, hairline borders, top-left tinted icon chip, optional orange tag label, compact copy.
- **D — Comparative Premium Matrix** (`ComparisonMatrix.jsx`): long-form feature table, zebra-striped light-blue rows, navy header row, blue section labels, check/cross states, plan badges.
- **E — Multi-Tier Path Selector** (`PlanSelector.jsx` + `PlanCard`): 3-column plan grid with the central tier elevated by an orange border + "Most Popular" badge + orange CTA.
- **F — Testimonial & Partner Badging** (`TestimonialRibbon.jsx` + `Testimonial`): 4-up testimonial grid (gold stars, short italic quote, avatar, name/company) over a compact partner-logo ribbon.

---

## 6. Index / Manifest

**Root**
- `styles.css` — global entry point (import this one file). `@import`s every token + font file.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter for use in Claude Code.

**Tokens** (`tokens/`) — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`.

**Brand assets** (`assets/logos/`) — `globallinker-logo.svg` (dark), `globallinker-logo-reverse.svg` + `.png` (reverse / on-dark).

**Foundation cards** (`guidelines/`) — Colors (Brand, Neutrals, Semantic, Gradients), Type (Headings, Body, Weights), Spacing (Scale, Rhythm & Radii), Brand (Logo light, Logo dark, Elevation).

**Components** (`components/`)
- `core/` — **Button**, **Badge**, **Pill**
- `data/` — **Stat**, **Rating**, **Avatar**
- `forms/` — **Input**, **SearchBar**
- `surfaces/` — **Card**, **FeatureCard**, **PlanCard**, **Testimonial**

**UI kit** (`ui_kits/landing-page/`) — `index.html` (full interactive seller landing page) composing `Header`, `SellerHero`, `SolutionGrid`, `NavyDoneForMe`, `PlanSelector`, `ComparisonMatrix`, `TestimonialRibbon`, `SearchCTA`, `Footer`, plus the `Icons.jsx` Lucide wrapper.

> Components are consumed from the compiled bundle: `const { Button } = window.GlobalLinkerDesignSystem_9deb5f`. Auto-generated files (`_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`) are never edited by hand.

---

## 7. Caveats / open items
- The `www.globallinker.com` homepage screenshot was named in the brief but not uploaded — Pattern B was inferred from the brief and sibling pages.
- Icons are a **Lucide substitution** (no proprietary set supplied).
- Plus Jakarta Sans is loaded from **Google Fonts** (the brand's stated family — no font binaries were supplied).
- No codebase/Figma was provided; for production-grade fidelity, re-derive components from source if it becomes available.
