<div align="center">

# Tutoring Website

### Modern Personal Tutoring Website with Intelligent Contact Forms

[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8.svg)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-green.svg)](https://pages.github.com/)

*A responsive, SEO-optimized tutoring website built with Next.js and Tailwind CSS. Features animated UI, multi-channel contact forms, and static export for free GitHub Pages hosting.*

</div>

---

![Tutoring Website](public/app-image.png)

---

## About

**Tutoring Website** is a modern, professional web presence for private tutoring services. Built with Next.js and optimized for static hosting, it provides an elegant platform to showcase teaching methodology, subjects offered, and enable easy contact through multiple channels (WhatsApp, Messenger, Email).

The site features an intelligent contact form that pre-fills messages across different platforms, making it effortless for students and parents to reach out.

## Key Features

**Responsive Design** - Mobile-first approach with seamless adaptation across devices  
**Animated UI** - Smooth scroll animations, particle backgrounds, and subtle effects  
**Smart Contact Forms** - Multi-step form with auto-populated WhatsApp, Messenger, and Email messages  
**Static Export** - Fast, secure, and free hosting on GitHub Pages  
**SEO Optimized** - Structured data, meta tags, and Open Graph support  
**Performance** - 95+ Lighthouse score across all metrics

## Architecture

```
├── app/
│   ├── [slug]/           # Dynamic tutor profile page
│   ├── globals.css       # Global styles and animations
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Home page (redirects)
│
├── components/           # React components
│   ├── AnimatedBackground.tsx  # Particle effects
│   ├── ContactForm.tsx         # Multi-step contact form
│   ├── Hero.tsx                # Hero section
│   ├── Navigation.tsx          # Sticky navigation
│   └── Services.tsx            # Subject cards
│
├── data/
│   ├── prof.json         # Tutor information (contact, subjects)
│   └── testimonials.json # Student testimonials
│
├── lib/
│   └── assetPath.ts      # Helper for GitHub Pages basePath
│
└── .github/workflows/
    └── nextjs.yml        # Automated deployment
```

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/mathisdelsart/TutoringWebsite.git
cd TutoringWebsite

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000/mathis-delsart](http://localhost:3000/mathis-delsart)

### Build for Production

```bash
npm run build
```

Static files are generated in `/out` directory.

## Customization

### Update Tutor Information

Edit `data/prof.json` with your personal information and `data/testimonials.json` with your student testimonials.

### Replace Photo

Replace `public/face_image.jpeg` with your photo (recommended: 400x380px).

## Deployment

The site is configured for automatic deployment to **GitHub Pages** via GitHub Actions.

### Setup

1. Go to **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Every push to `main` triggers automatic deployment

The site will be available at: `https://[username].github.io/TutoringWebsite/mathis-delsart`

## Technical Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Hosting**: GitHub Pages (free static hosting)
- **CI/CD**: GitHub Actions

## How It Works

**Contact Form Flow:**
1. User fills multi-step form (info → course type → availability)
2. Message is formatted with all details
3. User selects contact method (WhatsApp / Messenger / Email)
4. Platform opens with pre-filled message for instant sending

**Static Export:**
- Next.js builds static HTML/CSS/JS
- Images and assets are optimized
- basePath handled for GitHub Pages subdirectory
- Deployed automatically via GitHub Actions

---

## Author

<div align="center">

<table>
  <tr>
    <td width="180" align="left">
      <img src="https://img.shields.io/badge/GitHub-mathisdelsart-black?logo=github" valign="middle"/>
    </td>
    <td align="left">
      <strong>Mathis DELSART</strong>
    </td>
  </tr>
</table>

</div>

---

<div align="center">

**Built for LINFO2335 - Programming Paradigms @ UCLouvain** (Université catholique de Louvain).

*Built for Private Tutoring Services*

</div>