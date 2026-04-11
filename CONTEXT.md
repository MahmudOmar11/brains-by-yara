# Project Context — Brains by Yara

> **Handover document.** Read this before making any changes. Another agent should be able to continue immediately without re-exploration.

---

## 1. Project Overview

**Goal**: Deploy and maintain a static Arabic/RTL marketing website for **د. يارا إغباريّة** — a neuroscience researcher at Tel Aviv University/Ichilov Hospital. The site showcases her lecture offerings on brain science topics for Arabic-speaking audiences.

**Scope**:
- Static HTML/CSS/JS site (no framework, no build step)
- Hosted on **Netlify** (auto-deploy from GitHub main branch)
- Custom domain: **brainsbyara.com** (via Netlify DNS)
- Forms: **Netlify Forms** → email delivery to `yara.agbaria@gmail.com`
- SEO: Google Search Console + sitemap submitted
- Content: 8 lectures + 1 contact page, all in Arabic (RTL)

---

## 2. What Was Done

### Deployment & Infrastructure
- Git repo initialized inside `brains-by-yara/` folder, pushed to GitHub: `MahmudOmar11/brains-by-yara`
- Netlify site linked to GitHub repo → auto-deploy on push to `main`
- Custom domain `brainsbyara.com` configured with Netlify DNS (primary + www redirect)
- HTTPS via Let's Encrypt (automatic)

### Forms
- Main contact form + modal booking form wired to Netlify Forms
- Form notifications configured in Netlify dashboard → Yara's email
- Created `success.html` as confirmation page
- Modal form captures the selected lecture via a hidden field (`modalLectureField`)

### SEO
- Meta descriptions, Open Graph, Twitter Card tags on all 9 pages
- `sitemap.xml` with all 9 pages
- `robots.txt` with sitemap reference
- Google Search Console: domain verified via DNS, sitemap submitted

### Social Sharing
- Custom `og-image.png` (1200×630, #650E16 bg, white logo centered)
- Generated via Python/Pillow (no browser needed)

### Content Fixes
- Name spelling corrected: **عجبارية → إغباريّة** (across all 9 files)
- Pricing clarification added: *"المحاضرات متاحة للمجموعات والأفراد — تواصلوا معنا لمناقشة التفاصيل وإرسال عرض سعر"*
- Consistent phrasing *"إرسال عرض سعر"* used on contact section and success page

### UX Fixes
- Removed hero opacity fade (was making buttons unclickable on mobile)
- Disabled parallax on mobile (<1024px)
- Increased font sizes site-wide for readability
- Centered "لمن هذه المحاضرة؟" section on all lecture pages
- Fixed scroll hint ("اكتشفوا المزيد") overlap with hero buttons

---

## 3. Current State

### ✅ Done
- Site live at `brainsbyara.com`
- Forms working, emails going to Yara
- SEO meta tags, sitemap, robots.txt deployed
- Google Search Console verified, sitemap submitted
- Font sizes increased
- OG image for social sharing
- Name spelling fixed
- Pricing language unified
- Centered audience section

### 🟡 In Progress
- None

### ⏳ Pending / Nice-to-have
- Google indexing to complete (typically a few days after sitemap submission)
- Potential: add Google Analytics
- Potential: add WhatsApp chat button
- Potential: add testimonials section

---

## 4. Key Files & Artifacts

### HTML Pages
| File | Purpose |
|---|---|
| `index.html` | Landing page (hero, about, lectures grid, gallery, contact form, modal) |
| `lecture-1.html` | تعفّن الدماغ (Brain Rot) |
| `lecture-2.html` | دماغ الرجل والمرأة (Male/Female Brain) |
| `lecture-3.html` | من الطفولة إلى الجريمة (Childhood to Crime) |
| `lecture-4.html` | مشكلة الوعي الكبيرة (The Big Consciousness Problem) |
| `lecture-5.html` | هل نحن فعلًا أحرار في قراراتنا؟ (Free Will) |
| `lecture-6.html` | لغز المراهقة (Adolescent Brain) |
| `lecture-7.html` | كيف تغيّر الصدمة الدماغ؟ (Trauma & Brain) |
| `lecture-8.html` | علم الأعصاب لاتخاذ القرار (Corporate Neuroscience) |
| `success.html` | Form submission confirmation page |

### SEO / Meta
| File | Purpose |
|---|---|
| `sitemap.xml` | Lists all 9 pages for Google crawling |
| `robots.txt` | Allows all crawlers, points to sitemap |
| `og-image.png` | 1200×630 social sharing image |

### Assets
- `Yara_logo_Sand.png` — main logo
- `yara_headshot.jpg` — profile photo in hero
- `1.jpeg` – `7.jpeg`, `5.png` — gallery images
- `drive-download-20260325T170126Z-1-001/` — 8 lecture cover images (Arabic filenames, URL-encoded)

### Docs
- `CHANGELOG.md` — version history
- `CONTEXT.md` — this file
- `.gitignore` — excludes `.DS_Store`

---

## 5. Methods / Approach

### Deployment Workflow
1. Edit files locally in VS Code / Claude Code
2. `git add && git commit && git push`
3. Netlify auto-deploys from `main` branch (~30 sec)
4. Changes live on `brainsbyara.com`

### Form Handling (Netlify Forms)
- Forms must have `name` attribute + `data-netlify="true"` + hidden `form-name` input
- Netlify detects forms at **deploy time** (requires redeploy after first adding them)
- Submissions appear in Netlify dashboard → Forms
- Email notifications configured per-form in dashboard

### OG Image Generation
- Built with Python + Pillow + `arabic_reshaper` + `python-bidi`
- Script in chat history (not saved to repo)
- To regenerate: run the Python snippet with updated text/layout params

### Arabic RTL Handling
- `<html lang="ar" dir="rtl">` on all pages
- Font: **Tajawal** from Google Fonts
- When using Pillow for text: must reshape with `arabic_reshaper.reshape()` then `bidi.algorithm.get_display()`

---

## 6. Important Context & Assumptions

- **Repo location**: `/Users/mahmudomar/Desktop/Second Brain/Resources ✉️/My space/Yara's site/brains-by-yara/brains-by-yara/` (note nested folder)
- **GitHub repo**: `https://github.com/MahmudOmar11/brains-by-yara`
- **Netlify site name**: `brainsbyara` → `brainsbyara.netlify.app`
- **Primary domain**: `brainsbyara.com` (Netlify DNS)
- **All CSS is inline** in `<style>` tags within each HTML file (no external CSS files)
- **All JS is inline** at the bottom of each HTML file
- **Color palette**:
  - Brown: `#640D15` (main brand color)
  - Cream: `#F5EAE0`
  - Off-white: `#ECEDE6`
  - Near-black: `#2f2326`
- **Audience**: Arabic-speaking public (mix of general audience + professionals in education, social work, corporate)
- **Lectures are for groups AND individuals** — pricing discussed per inquiry via "إرسال عرض سعر"
- **Name spelling**: **إغباريّة** (NOT عجبارية — confirmed by user)

---

## 7. Next Steps

### Immediate (if user requests)
- [ ] Add Google Analytics tracking code to all pages
- [ ] Add WhatsApp floating button (direct link to Yara's WhatsApp)
- [ ] Add testimonials / past clients section
- [ ] Add lecture thumbnails/previews (video clips)

### Monitoring
- [ ] Check Google Search Console in ~1 week to confirm indexing
- [ ] Monitor Netlify form submissions quota (100/month free tier)
- [ ] Check form deliverability (ensure emails aren't going to spam)

### Content
- [ ] Consider adding an FAQ section answering common questions about pricing/format
- [ ] Add more gallery photos from recent events
- [ ] Bios for any co-presenters (if applicable)

### Technical Debt
- [ ] Consider extracting shared CSS to a single `styles.css` (currently duplicated across 9 files)
- [ ] Consider extracting the lecture page template to reduce duplication

---

## Quick Commands

```bash
# Navigate to project
cd "/Users/mahmudomar/Desktop/Second Brain/Resources ✉️/My space/Yara's site/brains-by-yara/brains-by-yara"

# Check status
git status
git log --oneline -10

# Deploy workflow
git add <files>
git commit -m "message"
git push
# Netlify auto-deploys

# Check live site
curl -I https://brainsbyara.com/
```

## Key URLs

- **Live site**: https://brainsbyara.com
- **GitHub**: https://github.com/MahmudOmar11/brains-by-yara
- **Netlify dashboard**: https://app.netlify.com (site: `brainsbyara`)
- **Google Search Console**: https://search.google.com/search-console (property: `brainsbyara.com`)
