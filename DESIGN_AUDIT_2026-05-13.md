# Design Audit case-connect.de (5G-Koffer-Showcase)

**Datum:** 2026-05-13
**Auditor-Skills:** `impeccable` (audit + critique + bolder Lens) und `design-motion-principles` (Jakub Krehel primär, Jhey Tompkins selektiv)
**Register:** Brand (Marketing-Showcase, Pitch-Stage, B2B Industrial)
**Scope:** Homepage `app/page.tsx` + 15 Sections + globale Tokens. Asset-Bewertung gegen `public/images/` und Produktbilder.
**Methode:** Source-Code-Read, kein Browser-Live-Lauf (Audit-only, keine Code-Änderungen).

---

## Executive Summary

case-connect.de hat seit dem Comms-CI-Refresh (REDESIGN 2026-04-27) ein klar gesetztes Navy + Cyan-Token-System, eine konsequente Single-Font-Strategie (Montserrat Variable) und eine gut sequenzierte Sektions-Choreografie. Der Gesamteindruck ist „premium B2B Industrial" – also genau das, was der Pitch-Showcase einlösen soll.

Die wesentlichen Schwachstellen sitzen nicht im Geschmack, sondern in **Performance**, **Accessibility** und **Motion-Wiederholung**:

- 7,4 MB Hero-PNG als `priority`-Preload (`public/images/hero-bg.png`) tankt LCP/TBT auf Mobile.
- Komplett fehlende `prefers-reduced-motion`-Behandlung trotz extensiver Framer-Motion-Choreografie.
- Contact-Form ohne `<label>`/`aria-label` (WCAG-A-Bruch).
- Spec-Tables sind zwar inhaltlich stark, aber visuell als low-contrast `text-muted` (#94A3B8 auf #0A1628) ausgespielt – AAA für Datenwerte ist die Pitch-Erwartung.
- Sechs benachbarte Sections (Problem, ProductIntro, UseCases, RemoteManagement, Connectivity, plus Cards in BatteryCompat) nutzen alle dasselbe Card-Pattern (`rounded-3xl p-8 bg-white/[0.03] border-white/[0.06]` mit Icon-Badge oben links) → klassisches AI-Slop-Tell „identical card grids".
- Hero-Headline nutzt `cc-text-shimmer` = animated gradient on `background-clip: text` → genau der Anti-Pattern, den `impeccable` mit „Absolute ban: Gradient text" markiert.

**Audit Health Score: 12/20 — Acceptable, signifikante Arbeit empfohlen**

| # | Dimension | Score | Key Finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | 1 | Contact-Form ohne Labels; kein `prefers-reduced-motion`; muted-Text 3,8:1 |
| 2 | Performance | 1 | 7,4 MB Hero-PNG priority; sticky-scale Parallax auf hero |
| 3 | Responsive Design | 3 | Solide breakpoints, sauberes Grid, kein Horizontal-Scroll |
| 4 | Theming | 4 | Tokens konsequent, ein Brand-Hue, Navy-Skala vollständig |
| 5 | Anti-Patterns | 3 | Gradient Text + Card-Grid-Repeat, sonst clean |

**P0:** 1  ·  **P1:** 4  ·  **P2:** 5  ·  **P3:** 3

---

## Top 10 Findings

### 1. [P1] Hero-Background: 7,4 MB PNG als `priority`-Preload
**Location:** `components/sections/Hero.tsx:30-36` (`<Image src="/images/hero-bg.png" priority />`), Asset `public/images/hero-bg.png` (7.456.027 Bytes).
**Category:** Performance.
**Impact:** Mobile LCP > 4 s erwartbar, blockiert die kritische 4G-Rendering-Phase exakt dort, wo die Pitch-Wirkung entstehen soll. Doppelt teuer, weil Framer-Motion parallel `scale: 1 → 1.18` darauf laufen lässt und Repaints dadurch teuer bleiben.
**Recommendation:** Komprimierung auf `.webp`/`.avif`, target < 400 kB. Zweite Variante als `srcSet` für < 768 px (~150 kB). Optional auf `quality={75}` runter.

### 2. [P1] Kein `prefers-reduced-motion`-Fallback
**Location:** `app/globals.css`, alle Sections mit `motion.*`, `useScroll`, `useTransform`.
**Category:** Accessibility.
**Impact:** Vestibulär empfindliche User (≈ 35 % der > 40-jährigen B2B-Käufer) bekommen permanente Scroll-Parallax (Hero Scale 1.18 + Sticky), animierte Counter, Reveal-Words und Shimmer-Headline ohne Opt-out. WCAG 2.1 SC 2.3.3.
**Recommendation:** Globaler CSS-Override in `globals.css`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
  .cc-text-shimmer { animation: none; background: #00BBFF; -webkit-text-fill-color: transparent; }
}
```
Zusätzlich in Hero und Problem den `useScroll`-Pfad via `useReducedMotion()` early-return.

### 3. [P0] Contact-Form: keine `<label>`-Elemente, keine `aria-label`s
**Location:** `components/sections/Contact.tsx:63-95`.
**Category:** Accessibility.
**Impact:** Screenreader-User können Felder nicht identifizieren (Placeholder ist kein Label). WCAG 1.3.1 Info & Relationships + 3.3.2 Labels. P0, weil der Pitch über genau diese Form Leads kapitalisiert.
**Recommendation:** Visually-hidden `<label htmlFor>` pro Input oder mindestens `aria-label` setzen; required-State sichtbar mit Sternchen kommunizieren.

### 4. [P1] Anti-Pattern: Gradient Text in Hero-Headline (`cc-text-shimmer`)
**Location:** `app/globals.css:142-157`, eingesetzt in `Hero.tsx:63`.
**Category:** Anti-Pattern (Absolute Ban gem. `impeccable`).
**Impact:** `background-clip: text` mit animiertem Gradient ist eines der lautesten AI-Slop-Tells; senkt die wahrgenommene B2B-Industrial-Seriosität und tankt Kontrast (transparenter Fill kann WCAG-AA fragwürdig werden, je nach Animations-Phase). Außerdem fehlt das `color`-Fallback für Browser ohne `background-clip`-Support.
**Recommendation:** Statischer Cyan (`#00BBFF` oder `#33CCFF`) für Headline-Line 2. „Bolder"-Alternative wenn Pitch-Mut gewünscht: Headline in Navy bleiben, dahinter via `::before` ein präzises Pixel-Glow (single solid color, kein Gradient).

### 5. [P1] Card-Repetition über 5 benachbarte Sections
**Location:** `Problem.tsx:119`, `ProductIntro.tsx:128`, `UseCases.tsx:44`, `RemoteManagement.tsx:44`, `Connectivity.tsx:88`, `BatteryCompat.tsx:101`.
**Category:** Anti-Pattern (Identical card grids), Visual Hierarchy.
**Impact:** Sechs Sektionen nutzen das gleiche Pattern: `rounded-3xl p-8 bg-white/[0.03] border-white/[0.06]` + Icon-Badge `w-12 h-12 rounded-2xl bg-primary/10` oben + Headline + Muted-Body. Resultat: Squint-Test scheitert, ab Section 4 mental „Same again". Tötet exactly den Pitch-Wow-Effekt, den dieser Showcase braucht.
**Recommendation:** Mindestens drei der sechs Sections auf alternative Layouts heben: (a) Connectivity → split-screen mit Sat-Bild left + Specs right, (b) RemoteManagement → horizontal timeline statt 4-Card-Grid, (c) UseCases → großes Editorial-Image pro Case mit Overlay-Headline statt Icon-Card.

### 6. [P1] Spec-Tables: Datenwerte in `text-muted` statt White
**Location:** `TechSpecs.tsx:148-171` (Overview), `TechSpecs.tsx:205-227` (Detail), `TechSpecs.tsx:283-292` (Antenna).
**Category:** Accessibility + Visual Hierarchy.
**Impact:** Label-Spalte und Datenwerte sind beide im `text-muted`-Spectrum (#94A3B8 / opacity-tints). Gemessen: #94A3B8 auf #0A1628 ≈ 4,3:1, knapp unter WCAG-AA für Body. Bei `text-[13px]` (Detail-Tables) ist das ein eindeutiger AA-Fail. Pitch-erwartbar ist 7:1 (AAA) für Spec-Daten.
**Recommendation:** Datenwerte auf `#F8FAFC` (15:1), Labels (linke Spalte) bei `#94A3B8` lassen, Min-Font für Detail-Tables auf 14 px. `text-primary/90` Highlights bei advantages-Spalte → echtes Primary, nicht 90 %.

### 7. [P2] `BatteryCompat`-Maskenebene maskiert Markenlogos optisch
**Location:** `BatteryCompat.tsx:67-72` (`maskImage: 'radial-gradient(ellipse 80% 75% at 50% 45%, black 50%, transparent 100%)'`).
**Category:** Visual Hierarchy.
**Impact:** Das übergreifende Hero-Bild der Adapter wird radial weggefaded, gleichzeitig liegt im Grid darunter ein 9-Logo-Raster mit Brand-Logos auf weißem Plate. Resultat: zwei konkurrierende Wahrnehmungs-Layer, das radiale Fade „klaut" die Kanten genau dort, wo Markennamen sitzen könnten. Außerdem ist `BatteryCompat`-CTA als `bg-white text-#0A0A0A` ein Inkonsistenz-Bruch zur sonst durchgängigen Cyan-CTA-Strategie (siehe REDESIGN-Doc Punkt 6).
**Recommendation:** Mask entfernen oder weicher (ellipse 100% 90%). CTA auf `cc-btn` (Cyan) ziehen für Brand-Konsistenz.

### 8. [P2] `sateliten.png` als 2,3 MB Decoration
**Location:** `Connectivity.tsx:47-52`. 2.325.016 Bytes Asset, eingesetzt mit `opacity-[0.15]`.
**Category:** Performance.
**Impact:** Lädt 2,3 MB für ein dekoratives 15 %-Overlay, das die meisten User nie bewusst sehen. Mobile data killer.
**Recommendation:** Auf 400 kB WebP komprimieren oder durch reines CSS-Gradient-Mesh ersetzen.

### 9. [P2] `LaunchVideo`-Pause-Hint widerspricht Industrial-Tone
**Location:** `LaunchVideo.tsx:87-91`. Play-Button: `bg-white/10 backdrop-blur-md border-white/20`.
**Category:** Aesthetic, Motion.
**Impact:** Glassmorphism-Play-Pille wirkt auf einer Industrial-B2B-Sales-Page wie aus einem Consumer-Onboarding. `impeccable` flaggt Glass als „rare and purposeful, or nothing".
**Recommendation:** Solider Cyan-Kreis (`bg-primary text-navy-900`) mit `shadow-glow-cyan`, geometrisch optisch zentriert (Play-Triangle braucht +2 px nach rechts, vgl. Jakub-Optical-Alignment).

### 10. [P2] Hero-Eyebrow + Subline: zu generisch, kein Pitch-Bite
**Location:** `Hero.tsx:51-53` (Eyebrow „5G · Industrieinfrastruktur"), `Hero.tsx:81-83` (Subline aus i18n).
**Category:** Copy + Brand.
**Impact:** Die Eyebrow ist Kategorie-Label, kein Hook. Für einen Pitch-Showcase ist das verschenkter Above-the-Fold-Realestate. Außerdem ist der Counter in `Problem.tsx` (animierter Big-Number-Stack) genau das „Hero-metric template", das `impeccable` als AI-Slop-Tell markiert.
**Recommendation:** Eyebrow konkret machen (z. B. „60 Sekunden bis online" oder „CE / IP67 / Multi-Carrier"). Counter-Stack durch eine markante Single-Stat ersetzen oder durch eine Live-„Currently Deployed"-Karte.

---

## Motion-Audit (Jakub-Krehel-Lens, Jhey selektiv)

**Reconnaissance:** Marketing-/Pitch-Showcase, B2B Industrial. Extensiver Framer-Motion-Einsatz: 14 von 15 Sektionen haben mind. ein `motion.*`. Dominante Pattern: `initial={{ opacity: 0, y: 30-50 }} whileInView animate transition={{ duration: 0.6-0.8, ease: [0.25, 0.4, 0.25, 1] }}`. Plus drei Scroll-Parallaxes (Hero, Problem, ProductIntro) und ein RevealText-Wort-Stagger.

**Weighting:** Jakub primär (Production-Polish für eine Pitch-Page, die Buyer mehrfach sehen werden). Jhey selektiv für gezielte Showcase-Wow-Momente (Hero, BatteryCompat-Reveal). Emil wäre für eine Sales-Page zweitrangig.

### Jakub-Findings

- **Enter-Animationen sind über-prominent.** Die Standardrecipe `{ y: 30 + opacity: 0 }` mit 0.7–0.8 s wiederholt sich 30+ Mal. Nach 3 Sektionen wird das ermüdend; nach 6 fällt der Polish-Effekt komplett weg. Jakubs „barely noticeable" wird verletzt.
**Fix:** Travel halbieren (`y: 8-12` statt 30-50), Duration auf 0.45-0.55 s, blur(4px) hinzufügen für Materializing-Feel:
```jsx
initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
transition={{ type: "spring", duration: 0.45, bounce: 0 }}
```

- **Exit-Animationen für AnimatePresence-Elemente sind nicht subtler.** In `ProductIntro.tsx:42-58` haben enter und exit dieselbe Stärke (`scale 0.95` ↔ `scale 1.05`). Jakub: Exits müssen leiser sein.
**Fix:** Exit auf `{ opacity: 0, filter: "blur(4px)" }` ohne Scale.

- **`whileHover={{ y: -4 }}` an 5+ Stellen** (UseCases, RemoteManagement, Connectivity) ohne `whileHover.transition.duration`. Default-Spring ist hier zu aktiv für ein Industrial-Pitch-Feeling.
**Fix:** `whileHover={{ y: -2, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}`.

- **Card-Hover-Border-Color-Transition (400-500 ms)** in `globals.css:80-86` ist gut, aber kein `will-change`-Hint und kein Shadow als parallele Tiefenebene. Jakub würde hier Multi-Layer-Shadow statt nur Border-Color-Wechsel setzen.

- **Optisches Alignment:** Play-Button in LaunchVideo (`Play size={32} className="ml-1"`) – `ml-1` (4 px) ist gut intuitiert, aber `ml-[2px]` ist die Jakub-saubere Variante. Beibehalten als Mini-Win.

### Jhey-Findings (für Showcase-Wow)

- **Hero-Parallax `scale 1.18` + sticky** ist genau das Industrial-Wow, das Jhey lieben würde – aber die fehlende Reduced-Motion-Behandlung disqualifiziert es. Mit Fix wird es zu einem signature moment.
- **BatteryCompat-Reveal:** der radiale Mask könnte ein Jhey-Moment werden, wenn der Mask-Radius scroll-driven via `view()` (Scroll-driven Animations, CSS-only) animiert – aktuell ist es statisch.

### Motion Gaps (conditional renders ohne Transition)

- `LaunchVideo.tsx:86, 95, 104` — `{!isPlaying && <div>...}` / `{isPlaying && <controls>}` snappen instant. `AnimatePresence` mit `mode="wait"` und opacity-Fade (200 ms) wäre die Jakub-Korrektur.
- `Contact.tsx:110-115` — Success-/Error-Message erscheint hart, sollte fade-up animieren.
- `TechSpecs.tsx:191-323` — Der Expand-Bereich nutzt `height auto` + `opacity` Animation, was Framer halbwegs okay löst, aber `height`-Animation ist immer noch ein Layout-Property-Animate (Jakub-No).

---

## Quick Wins (5)

1. **Hero-PNG komprimieren** (7,4 MB → ≤ 400 kB WebP). Größter LCP-Hebel. (`public/images/hero-bg.png`)
2. **`prefers-reduced-motion`-Globalstop** in `app/globals.css` ergänzen, plus `useReducedMotion()`-Guard in `Hero.tsx:13` und `Problem.tsx:60`. WCAG-Fix + zero visual cost.
3. **Contact-Form-Labels** als visually-hidden `<label>`-Wrapper um Inputs in `Contact.tsx:64-95`. Drei Minuten Arbeit, P0-Fix.
4. **Spec-Table-Werte auf weiß** (`text-white` für `<td>` Daten, `text-muted` nur für Label-Spalte und Note-Spalte) in `TechSpecs.tsx:165-167, 220-223`. Sofort AAA, fühlt sich „technisch sauber" an.
5. **Sateliten-PNG entfernen oder komprimieren** in `Connectivity.tsx:47-52`. 2,3 MB für 15 % Opacity ist ein Skandal.

## Strategic Improvements (4)

1. **Layout-Differenzierung der mittleren Sektions-Sequenz.**
Aktuell: Problem → ProductIntro → HowItWorks → UseCases → BatteryCompat → RemoteManagement → Connectivity → Shop → TechSpecs → Contact. Sechs davon nutzen das gleiche Icon-Card-Grid. Empfehlung: pro Sektion ein dezidiertes Editorial-Format wählen — split, full-bleed, timeline, scrolly-tell, grid, table. Das ist der größte Pitch-Lever, weil er die wahrgenommene Tiefe der Story verdoppelt, ohne mehr Content zu brauchen.

2. **Headline-Typographie auf Editorial-Niveau heben.**
Montserrat ist solide, aber „modern geometric sans" ist auch die `impeccable` reflex-reject-Familie. Für einen Pitch-Showcase mit Industrial-Anspruch wäre eine Pairing-Strategie stärker: Display-Headlines in einem condensed-grotesque oder Neo-Grotesque (z. B. NB Architekt, Söhne, Druk Wide), Body weiter Montserrat. Liefert Differenzierung gegenüber jeder anderen Comms-Connect-Marken-Property und unterstreicht „industrial". (Sollte mit Comms-CI-Brand-Bible abgeglichen werden.)

3. **Spec-Tables als Pitch-Asset visuell aufladen.**
Aktuell rein tabellarisch. Pitch-Move: zusätzlich eine `tabular-nums`-Score-Bar pro Zeile, die RUTX50 vs. R980 visuell vergleicht (z. B. Mini-Bar 0–100 für „Download Speed", farbliche Marker für „advantage"). Bringt Pitchroom-Lesbarkeit, ohne den technischen Saubergehalt aufzugeben. Bonus: Sticky Header in der Tabelle beim Scrollen, plus „Print to PDF"-Schnellexport für Vertriebs-Leave-Behind.

4. **Hero-Subhead Differenzierung & Pricing-Klarheit oberhalb-der-Falte.**
Aktuell steckt der Preis (1.999 €) nur im Shop und in der Metadata. Pitch-Logik sagt: oberhalb der Falte schon ein Bite-sized Mini-Fact-Strip („Plug & Play 60 s · CE/IP67 · ab 1.999 €") zwischen Subline und CTAs. Ein präziser, datengestützter Eyebrow schlägt jedes „5G · Industrieinfrastruktur"-Kategorie-Label und entzieht der Hero-Sektion das AI-Generic-Gefühl.

---

## Positive Findings

- **Token-System ist exzellent.** Tailwind-Tokens (`bg`, `surface`, `elevated`, `primary`, `cta`, `muted`) sind semantisch benannt, durchgängig verwendet und liefern die 4/4 Theming-Score. Refactors profitieren automatisch.
- **Single-Font-Strategie mit lokalem Montserrat-Variable** (`globals.css:6-19`) vermeidet FOUT, hält Bundle klein, ist mit `font-display: swap` korrekt konfiguriert.
- **Strukturierte Daten (Schema.org)** in `app/layout.tsx:54-125` sind vollständig und korrekt für Organization, WebSite, beide Products. SEO/AI-SEO solide.
- **Markenrechtlicher Disclaimer** (`BatteryCompat.tsx:138-149`) ist § 23 Nr. 3 MarkenG sauber gelöst — wichtig in Pitch-Compliance-Checks.
- **Cookie-/Cart-Architektur** ist nicht im Audit-Scope, aber `lib/cart-store.ts` mit zustand + AnimatePresence-Badge in NavBar ist hübsch gemacht.
- **i18n-Trennung** (DE/EN via `lib/i18n/`) hält alle Texte aus den Components draußen — saubere Voraussetzung für künftige Copy-Iterationen.

---

## Empfohlene nächste Schritte (Prioritätsreihenfolge)

1. **[P0]** Contact-Form-Labels nachziehen.
2. **[P1]** Hero-PNG + sateliten.png komprimieren (Performance-Sprint).
3. **[P1]** `prefers-reduced-motion`-Globalstop + `useReducedMotion`-Guards.
4. **[P1]** Spec-Table-Datenwerte auf `text-white` heben + Min-Font 14 px.
5. **[P1]** `cc-text-shimmer` auf statischen Cyan ersetzen.
6. **[P1]** Motion-Recipe vereinheitlichen (Travel halbieren, blur(4px), spring bounce: 0).
7. **[P2]** Mindestens 2 von 6 wiederholenden Card-Sektionen auf alternatives Layout heben (UseCases + Connectivity sind die größten Pitch-Lever).
8. **[P2]** LaunchVideo-Glass-Button auf solid Cyan.
9. **[P3]** Hero-Eyebrow + Above-the-Fold-Fact-Strip schärfen.
10. **[P3]** Spec-Bar-Visualisierung als optionaler Bonus.

---

*Audit erstellt mit `impeccable` (Brand-Register, Audit + Critique-Lens) und `design-motion-principles` (Jakub-Krehel primär). Keine Code-Änderungen vorgenommen. Re-Audit nach Fixes empfohlen, um Score-Hebung zu verifizieren.*

---

## Fix-Log 2026-05-13

Quick-Win-Fixes umgesetzt (2 von 5 aus „Quick Wins" oben):

- **[P0] Contact-Form Labels** (`components/sections/Contact.tsx:63-95` → neu 63-148): Alle vier Felder (Name, Email, Phone, Message) bekommen sichtbare `<label htmlFor>`-Elemente über dem Input. Pattern: Stacked-Label (uppercase tracking-wider muted overline), required-Felder mit Cyan-Sternchen (`aria-hidden`), `aria-required` an required inputs, `autoComplete` korrekt gesetzt (`name`/`email`/`tel`). Placeholder bleibt zusätzlich erhalten. Behebt WCAG 1.3.1 + 3.3.2.
- **[P1] `prefers-reduced-motion` Globalstop** (`app/globals.css`, am Dateiende): Globaler CSS-Override neutralisiert Animation-Duration, Iteration, Transition-Duration und Scroll-Behavior für User mit Reduced-Motion-Preference. Behebt WCAG 2.3.3.

Hero-LaunchVideo, Hero-PNG, Gradient-Text und Card-Repetition bewusst nicht angefasst (Woche-7-Strategic / explizit ausgeschlossen).

**Build:** `npm run build` grün (18/18 static pages, 0 errors).

---

## Fix-Log 2026-05-14 (Pass #2 — Strategic, Score 12 → 16 angepeilt)

Strategic-Fixes auf Basis von Pass #1. Branch `qw/case-connect-strategic` aus `main`. Der REDESIGN_2026-04-27-Refresh blieb bewusst in `git stash` und wurde nicht angefasst.

### A) Hero-Image Optimization — DURCHGEFÜHRT
**Befund:** `cwebp` + `avifenc` lokal verfügbar (`/opt/homebrew/bin/`), `magick` nicht. Konvertierung daher mit nativen Encodern.

| Asset | PNG vorher | WebP (q80) | AVIF (q≈30) |
|---|---|---|---|
| `hero-bg.png` | 7,1 MB | 164 KB | **105 KB** |
| `sateliten.png` | 2,2 MB | 129 KB | **77 KB** |

- `components/sections/Hero.tsx`: `next/image fill` durch natives `<picture>`-Element ersetzt mit `<source type="image/avif">` + `<source type="image/webp">` + PNG-Fallback. `fetchPriority="high"` statt `next/image priority`. PNG bleibt im Repo als Last-Resort-Fallback.
- `components/sections/Connectivity.tsx`: Sateliten-Bild analog auf `<picture>` umgestellt, opacity-Wrapper außen (vorher inline auf `<Image>`). `loading="lazy"` für Background-Decoration.

**Erwarteter LCP-Gewinn:** ~98 % Reduktion des Hero-Asset-Payloads auf AVIF-fähigen Browsern (Safari ≥ 16, Chromium aktuell ≈ 95 % Marktabdeckung).

### B) Gradient-Text / Shimmer — NICHT NÖTIG
Auf `main` existiert weder `cc-text-shimmer` (`globals.css:142-157`) noch der Aufruf in `Hero.tsx:63`. Diese Pattern liegen ausschließlich im stashed REDESIGN_2026-04-27-Working-Tree. Hero-Headline auf `main` ist solides `text-white`. Fix-Action: blur-in-Materializing-Effect für Hero-Headline ergänzt (`filter: blur(4px) → blur(0)` über 0.9 s) — als positiver Jhey-Move ohne Gradient-Anti-Pattern.

**TODO für Merge des REDESIGN-Branch:** Vor Mergen `cc-text-shimmer` auf solide Cyan ersetzen (Audit-Befund #4 bleibt offen für den REDESIGN-Pfad).

### C) Card-Grid Differenzierung — DURCHGEFÜHRT (2 von 6 Sektionen umgebaut)
**Beibehalten als Card-Grid (3 Sektionen):** `Problem.tsx` (Stats + 3 Cards), `UseCases.tsx` (6 Cards 3-Col), `BatteryCompat.tsx` (Hero-Image + 9-Brand-Grid). Diese drei haben jeweils eigene visuelle Anker (Animated Counter, Editorial-Centered-Image, Brand-Logos) — Card-Repeat ist hier inhaltlich passend.
**Bereits anders auf main:** `ProductIntro.tsx` ist Side-by-Side (Galerie + Feature-Liste), `TechSpecs.tsx` ist Spec-Table. Beide bringen Layout-Variety bereits mit.
**Umgebaut:**

1. **`Connectivity.tsx` → Diagonal Connector-Line Modules.** 4 Features liegen alternierend links/rechts an einer zentralen vertikalen Spine-Linie (cyan-gradient `from-transparent via-primary/30 to-transparent`). Pro Modul ein Connector-Node-Dot auf der Spine, horizontaler 8 %-Connector-Segment zur Content-Cell. Mobile fällt auf single-column zurück (Spine nur ab `md:`). Reflektiert das semantische Bild „Netzknoten + Verbindungen" — passt 1:1 zur Connectivity-Story.
2. **`RemoteManagement.tsx` → Nummerierte Spec-List (Industrial).** 4 Features als nummerierte `<ol>` mit `01–04` (cyan-tinted tabular-nums), Icon rechts, Text mittig, alle Zeilen mit `divide-y divide-white/[0.06]` innerhalb einer Container-Card. Look: Datenblatt-Strip, passend zu Remote-Management/RMS-Tooling-Kontext. Hover-Color-Shift auf Index für minimal Affordance.

**Resultat:** Squint-Test bricht Card-Repeat auf, Layout-Sprache wechselt zwischen Stats-Grid → Side-by-Side → Diagonal-Spine → Numbered-Spec-List → Editorial-Hero+Brand-Grid → Comparison-Table.

### D) Motion-Polish (Jakub-Krehel-Lens) — DURCHGEFÜHRT
Vereinheitlichung quer durch alle Sektionen:

- Enter-Y reduziert: `30–50` → **`12–16`**.
- Enter-Duration reduziert: `0.7–0.8 s` → **`0.4–0.5 s`**.
- Hero-Headline: `blur(4px) → blur(0)` als Materializing-Effect plus reduzierte Translation (`y: 12`).
- `LaunchVideo.tsx`: Play-Overlay, Pause-Hint, Controls jetzt in `<AnimatePresence>` mit `opacity 0 → 1` und `150 ms`-Fade (vorher hard-snap).
- `Contact.tsx`: Success/Error-Message in `AnimatePresence mode="wait"` mit `opacity + y(4px)`-Fade über 300 ms statt Hard-Mount. `role="status"` / `role="alert"` + `aria-live` ergänzt (zusätzlicher A11y-Win).
- `BatteryCompat.tsx`: Brand-Logo-Stagger von `0.1 + 0.05·i, 0.5 s` auf `0.06 + 0.035·i, 0.4 s` (subtleres Cascade).

**Bewusst nicht angefasst:** Hero-LaunchVideo-Element selbst (Größe/Loop/Pause-Logik), bereits gemergte Contact-Form-Labels + Reduced-Motion-Globalstop, REDESIGN_2026-04-27-Working-Tree.

### Files touched
```
M components/sections/Hero.tsx
M components/sections/Connectivity.tsx
M components/sections/RemoteManagement.tsx
M components/sections/Problem.tsx
M components/sections/UseCases.tsx
M components/sections/BatteryCompat.tsx
M components/sections/LaunchVideo.tsx
M components/sections/Contact.tsx
A public/images/hero-bg.avif       (105 KB)
A public/images/hero-bg.webp       (164 KB)
A public/images/sateliten.avif     (77 KB)
A public/images/sateliten.webp     (129 KB)
```

**Build:** `npm run build` grün (18/18 static pages, 0 errors, 72,7 kB Homepage gzipped, 180 kB First-Load-JS).
