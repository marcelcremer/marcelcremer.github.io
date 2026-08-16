# Marcel Cremer — Styleguide

Two systems, depending on medium. Do not mix them.

The website (this repo) uses **System 1 — Digital / Brand**. System 2 is
documented here for reference when building talk decks (Canva, PowerPoint,
Keynote), not for the site.

---

## 1. Digital / Brand (Web, Canva, Documents)

### Colors

```css
--color-primary:     #1A4D8F;
--color-secondary:   #38BDF8;
--color-secondary-2: #16A340;
--color-background:  #F3F4F6;
--color-accent:      #FACC15;
--color-text:        #111827;
```

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#1A4D8F` | Main brand color: header, buttons, links |
| `secondary` | `#38BDF8` | Hover states, secondary buttons, highlights |
| `secondary-2` | `#16A340` | Success messages, positive indicators |
| `background` | `#F3F4F6` | Page / surface background |
| `accent` | `#FACC15` | Calls to action, points of attention |
| `text` | `#111827` | Body copy on light background |

### Typography

- **Font:** Montserrat
- Further cuts (weights, size scale, line height) are not documented yet —
  extend as needed. Current site usage: 700 for headings, 600 for
  emphasis/labels, 400 for body copy.

### Applied on the website

The website is a deliberate crossover: it borrows the **dark anthracite
palette from the Presentation / Talk system** (`#222222` background,
`#D946EF` accent, white text) instead of the light Digital/Brand
background, so the site feels like a continuation of the talk decks
rather than a generic corporate homepage. Fixed dark theme — no light
mode toggle.

- `background` (`#222222`) as the page canvas; a slightly lighter/darker
  anthracite (`#2A2A2A` / `#1B1B1B`) for cards and banded sections.
- `accent` (magenta, `#D946EF`) used exactly as in the deck: solid-fill
  "magenta box" treatment for the logo, hero eyebrow and highlighted
  keywords, and full-bleed left-aligned bars for section headings —
  the site's `h2`/`.page-title` styling mirrors the deck's
  section-header slides. Text on an accent fill is dark, never magenta
  text on dark background (contrast).
- `secondary` (sky blue) and `secondary-2` (green) survive from the
  Digital/Brand system as small badge fills to tell the three expertise
  pillars (tech / business / capital) apart at a glance.
- `primary` (deep blue) is **not** used on the site — on the anthracite
  background it doesn't have enough contrast to read as text or UI
  color. It stays reserved for print/Canva/documents.

---

## 2. Presentation / Talk (dark conference slides)

### Colors

```css
--talk-background: #222222;
--talk-accent:      #F5C400;
--talk-text:        #FFFFFF;
```

| Token | Hex | Usage |
|---|---|---|
| `background` | `#222222` | Slide background |
| `accent` | `#F5C400` | Highlights, section headers, CTA elements |
| `text` | `#FFFFFF` | Body copy on dark background |

### Typography

- Sans-serif, no serifs — exact font name not documented.

### Layout patterns

| Element | Structure |
|---|---|
| Title slide | Photo background; title in a yellow box top-left; subtitle in a full-width dark bar |
| Section header | Full-bleed yellow bar, left-aligned, short term (1–3 words) |
| Content slide | Dark background, term blocks connected by thin lines |
| Closing slide | Large yellow headline, centered QR code |

### Principles

- Custom SVGs instead of stock graphics, exported directly PowerPoint-compatible
- Memes used sparingly, never on two consecutive slides
- One visual = one point, no overloaded slides
