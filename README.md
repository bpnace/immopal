# ImmoPal

<p>
  <a href="https://github.com/bpnace/immopal/actions/workflows/ci.yml">
    <img alt="CI" src="https://github.com/bpnace/immopal/actions/workflows/ci.yml/badge.svg?branch=main" />
  </a>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-2563EB?style=flat-square" />
  <img alt="Status" src="https://img.shields.io/badge/status-real_estate_showcase-1F2937?style=flat-square" />
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-15.5-000000?style=flat-square&logo=nextdotjs&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-19.2-20232A?style=flat-square&logo=react&logoColor=61DAFB" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img alt="npm" src="https://img.shields.io/badge/npm-lockfile_v3-CB3837?style=flat-square&logo=npm&logoColor=white" />
  <img alt="Static Export" src="https://img.shields.io/badge/Static%20export-Apache%20%2F%20IONOS-111827?style=flat-square" />
</p>

Berlin-focused real estate website built with Next.js App Router, static export,
listing/content routes, valuation landing pages, and Apache deployment support.

## What this shows

- Business-facing real estate website with routes for buying, selling, listings, blog, and contact
- Next.js static export setup for conventional hosting instead of only Vercel-style deployment
- Build-time `.htaccess` generation for Apache / IONOS deployment
- TypeScript component structure with reusable UI, data helpers, and content routes
- SEO-oriented landing page for property valuation in Berlin and Brandenburg

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

## Voraussetzungen

- Node.js 20+
- npm

## Lokale Entwicklung

```bash
npm install
npm run dev
```

App starten unter `http://localhost:3000`.

## Wichtige Scripts

```bash
npm run dev      # Development Server
npm run lint     # Linting
npm run build    # Production Build + Static Export + .htaccess
npm run start    # Next.js Production Server
npm run clean    # entfernt .next
```

## Deployment (IONOS / Apache)

Das Projekt verwendet statischen Export (`output: 'export'`).

```bash
npm run build
```

Ergebnis:
- statische Ausgabe in `out/`
- `out/.htaccess` wird automatisch über `scripts/write-htaccess.mjs` erzeugt

Optional ohne `.htaccess`:

```bash
GENERATE_HTACCESS=false npm run build
```

## Projektstruktur

```text
app/          Next.js App Router Seiten und Routen
components/   UI-Komponenten
lib/          Datenzugriff und Helper (u.a. Listings/Articles)
public/       Statische Assets
scripts/      Build-Helfer (z.B. .htaccess-Generierung)
```

## Haupt-Routen

- `/`
- `/angebote`
- `/blog`
- `/kaufen`
- `/verkaufen`
- `/kontakt`
- `/ueber-uns`
- `/kostenlose-immobilienbewertung-berlin-brandenburg`

## Umgebungsvariablen

Die Laufzeitkonfiguration liegt in lokalen `.env*` Dateien (z.B. `.env.local`, `.env.production`).

## Lizenz

Proprietary - Alle Rechte vorbehalten.
