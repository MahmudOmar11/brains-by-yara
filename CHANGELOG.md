# Changelog — Brains by Yara

All notable changes to the **brainsbyara.com** website, organized by version and date.

> This file is auto-generated from git history. Update it with each new commit/version.

---

## [v1.0.9] — 2026-05-02

### Changed
- Replaced hero image: `yara_headshot.jpg` → `Yara_port_1.jpeg` (new portrait)
- Updated alt text to canonical spelling "د. يارا إغباريّة"

---

## [v1.0.8] — 2026-04-11

### Changed
- Refined pricing-related copy for consistency and professionalism:
  - Lectures section now reads: *"المحاضرات متاحة للمجموعات والأفراد — تواصلوا معنا لمناقشة التفاصيل وإرسال عرض سعر"*
  - Contact form subtitle updated with same phrasing
  - Success page updated with same phrasing
- Unified language across all three spots using *"إرسال عرض سعر"*

---

## [v1.0.7] — 2026-04-09

### Added
- Group/pricing clarification text in the lectures section (first introduction of pricing mention)
- Pricing discussion note in contact form and success page

---

## [v1.0.6] — 2026-04-08

### Fixed
- Centered the "لمن هذه المحاضرة؟" (audience) section on all 8 lecture pages
- Removed the 2-column grid layout in that section for consistent presentation

---

## [v1.0.5] — 2026-04-02

### Fixed
- **Hero section mobile issue**: removed the opacity fade effect that made text unreadable and buttons unclickable on mobile
- Disabled parallax entirely on mobile (<1024px)
- Kept a subtle parallax on desktop only

---

## [v1.0.4] — 2026-04-02

### Changed
- **OG image iterations**:
  - v1: Full branded card with logo + tagline + URL
  - v2: Tagline updated to *"معلومات متنوّعة لتفهموا دماغكم بشكل أفضل"*
  - v3: Simplified to logo-only on brown background
  - v4: Enlarged logo (final)
- Name spelling fixed across all 9 HTML files: **عجبارية → إغباريّة**

---

## [v1.0.3] — 2026-04-02

### Added
- **OG image** (`og-image.png`) — 1200×630px, brown background (#650E16), white logo, Arabic tagline
- Generated via Python/Pillow + arabic_reshaper + python-bidi for proper RTL rendering
- Updated `og:image` meta tags in index.html to reference new image

---

## [v1.0.2] — 2026-04-02

### Added
- **SEO package**:
  - Meta descriptions (Arabic) on all 9 pages
  - Open Graph tags (og:title, og:description, og:image, og:url, og:locale)
  - Twitter Card tags
  - Canonical URLs on all pages
  - `sitemap.xml` with all 9 pages (index + 8 lectures)
  - `robots.txt` allowing all crawlers, pointing to sitemap
- **Font size increases** across the site for better readability:
  - Body: 1.22rem → 1.35rem
  - Hero title: clamp(3rem→4.5rem) → clamp(3.4rem→5rem)
  - Section titles: clamp(2.4rem→3.2rem) → clamp(2.8rem→3.8rem)
  - Lecture card titles, descriptions, nav links, buttons all bumped proportionally

### Fixed
- Scroll hint (*"اكتشفوا المزيد"*) no longer overlaps hero buttons
- Softened hero fade effect (min opacity 0.25)

---

## [v1.0.1] — 2026-04-02

### Added
- **Netlify Forms integration**:
  - Main contact form (`name="contact"`) — sends name, email, phone, lecture choice, details
  - Modal booking form (`name="booking"`) — includes hidden lecture field
  - Both use `data-netlify="true"` attribute
- **`success.html`** — Arabic confirmation page after form submission
- Email notifications configured in Netlify dashboard → `yara.agbaria@gmail.com`

---

## [v1.0.0] — 2026-04-02

### Initial Release
- Static HTML site deployed to **brainsbyara.com** via Netlify + GitHub
- Arabic/RTL site with 9 pages:
  - `index.html` — landing page (hero, lectures grid, gallery, contact)
  - `lecture-1.html` through `lecture-8.html` — individual lecture detail pages
- Logo: `Yara_logo_Sand.png`
- Lecture imagery in `drive-download-20260325T170126Z-1-001/` folder
- Custom domain `brainsbyara.com` configured via Netlify DNS
- Site verified in Google Search Console, sitemap submitted

---

## Template for New Versions

```markdown
## [v1.0.X] — YYYY-MM-DD

### Added
- New features

### Changed
- Modifications to existing features

### Fixed
- Bug fixes

### Removed
- Deprecated/deleted features
```
