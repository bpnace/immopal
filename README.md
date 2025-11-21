# immopal - Immobilien Website

Moderne, DSGVO-konforme Immobilien-Website für Berlin & Brandenburg.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (geplant)

## Entwicklung

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Build für Production
npm run build

# Production Server starten
npm start
```

Öffnen Sie [http://localhost:3000](http://localhost:3000) im Browser.

## Projektstruktur

```
immopal/
├── app/                    # Next.js App Router
│   ├── globals.css        # Globale Styles
│   ├── layout.tsx         # Root Layout
│   └── page.tsx           # Homepage
├── components/            # React Komponenten
│   └── ui/               # UI Komponenten (shadcn/ui)
├── lib/                  # Utilities & Helpers
│   └── utils.ts          # Utility-Funktionen
├── public/               # Statische Assets
│   └── images/           # Bilder
└── ...
```

## Features

### Phase 1 (Aktuell)
- ✅ Next.js 15 Setup
- ✅ TypeScript Konfiguration
- ✅ Tailwind CSS
- ⏳ Landingpage
- ⏳ Immobilien-Inserate
- ⏳ Blog-System
- ⏳ Kontaktformular
- ⏳ DSGVO-konforme Cookie-Banner

### Phase 2 (Geplant)
- Kundenportal
- User-Authentifizierung
- Favoriten-System
- Anfragen-Tracking

### Phase 3 (Geplant)
- N8N Automationen
- CRM-Integration (Monday.com)
- Lead-Management

### Phase 4 (Geplant)
- KI-Features
- Immobilienbewertung
- Marktanalysen

## Umgebungsvariablen

Kopieren Sie `.env.example` zu `.env.local` und füllen Sie die Werte aus:

```bash
cp .env.example .env.local
```

## License

Proprietary - Alle Rechte vorbehalten
