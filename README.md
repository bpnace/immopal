# ImmoPal

Immobilien-Website auf Basis von Next.js (App Router) für Berlin, Brandenburg und deutschlandweite Vermarktung.

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
