<div align="center">

# Cours Particuliers — Tutoring Website

**A bilingual (FR / EN), responsive single-page website for a private tutor — built with Next.js and statically deployed to GitHub Pages.**

Website: **[mathisdelsart.github.io/private-tutoring](https://mathisdelsart.github.io/private-tutoring)**

[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8.svg)](https://tailwindcss.com/)
[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-2ea44f.svg)](https://pages.github.com/)

</div>

---

![Tutoring Website](public/app-image.png)

---

## Features

- **Bilingual (FR / EN)** — instant client-side language switch, French by default, preference saved in the browser.
- **Sober, responsive design** — clean white / slate / emerald theme, mobile-first, accessible.
- **Smart contact form** — multi-step form that pre-fills a ready-to-send WhatsApp or email message.
- **Testimonials carousel** — responsive, touch-friendly.
- **SEO-ready** — metadata, Open Graph tags and JSON-LD structured data.
- **Static export** — fast, secure and free to host on GitHub Pages.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Hosting | GitHub Pages (static export) |
| CI/CD | GitHub Actions |

## Getting Started

```bash
# Clone and install
git clone https://github.com/mathisdelsart/private-tutoring.git
cd private-tutoring
npm install

# Run the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
# Production build (static export to ./out)
npm run build
```

## Project Structure

```
app/
  layout.tsx          Root layout, fonts and SEO metadata
  page.tsx            Home page (assembles all sections)
  globals.css         Global styles, theme tokens and animations
  icon.svg            Favicon
components/            UI sections (Hero, Method, Services, Testimonials, Contact, ...)
lib/
  i18n.tsx            Language context (FR / EN, persisted)
  assetPath.ts        GitHub Pages basePath helper
locales/
  translations.ts     All UI copy, in both languages
data/
  prof.json           Tutor identity, contact details and SEO metadata
  testimonials.json   Testimonials (author + avatar)
.github/workflows/
  nextjs.yml          Automated GitHub Pages deployment
```

## Configuration

Content is data-driven, so no component edits are needed for everyday updates:

- `data/prof.json` — name, contact info and SEO metadata.
- `data/testimonials.json` — testimonials (author name and avatar initial).
- `locales/translations.ts` — every piece of on-screen text, in French and English.

## Deployment

The site is deployed automatically to **GitHub Pages** via GitHub Actions: every push to `main` triggers a static build and publish (`.github/workflows/nextjs.yml`). In the repository, set **Settings → Pages → Source** to **GitHub Actions**.

---

<div align="center">

**Mathis Delsart** &nbsp;·&nbsp; [github.com/mathisdelsart](https://github.com/mathisdelsart)

</div>
