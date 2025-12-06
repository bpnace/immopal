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
├── app/                       # Next.js App Router
│   ├── kaufen/               # 🆕 Buying funnel (10-step McMakler flow)
│   ├── verkaufen/            # 🆕 Selling funnel (10-step McMakler flow)
│   ├── immobilien/           # Property listings
│   ├── tippgeberprovision/   # Referral program
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/               # React components
│   ├── funnel/              # 🆕 Funnel components (McMakler-style)
│   │   ├── consultant-avatar.tsx
│   │   ├── funnel-layout.tsx
│   │   ├── multi-tile-select.tsx
│   │   ├── question-box.tsx
│   │   └── tile-option.tsx
│   ├── navigation.tsx        # Main navigation
│   ├── footer.tsx            # Footer
│   └── postal-code-autocomplete.tsx
├── lib/                      # Utilities & helpers
│   ├── consultant-data.ts   # 🆕 Consultant profiles
│   ├── form-validation.ts   # Form validators & interfaces
│   ├── funnel-helpers.ts    # 🆕 Range parsers & option data
│   ├── postal-codes.ts      # Postal code database
│   ├── utils.ts             # Utility functions
│   └── webhook.ts           # N8N webhook integration
├── public/                   # Static assets
└── ...
```

## Funnel-System

Die Website verwendet ein McMakler-inspiriertes Funnel-System für Kauf- und Verkaufsanfragen mit interaktiven, tile-basierten UI-Komponenten.

### Verkaufen-Funnel (`/verkaufen`)

**Ablauf:** 9-Schritt-Prozess für Immobilienbewertung

1. **Immobilientyp** - Wohnung, Haus, Gewerbe oder Grundstück
2. **Untertyp** - Conditional basierend auf Typ (z.B. Etagenwohnung, Einfamilienhaus)
3. **Baujahr** - Zeiträume von vor 1950 bis nach 2020
4. **Zimmeranzahl** - 1 bis 5+ Zimmer
5. **Wohnfläche** - Bereiche von unter 50 m² bis über 200 m²
6. **Zustand** - Neuwertig, Modernisiert, Renovierungsbedürftig, oder Sanierungsbedürftig
7. **Standort** - PLZ-Autocomplete mit Berlin & Brandenburg Datenbank
8. **Kontaktdaten** - Name, Email, Telefon, optionale Nachricht
9. **Erfolgsmeldung** - Bestätigung mit Zeitrahmen-Information

**Webhook-Integration:** Daten werden an N8N-Workflow gesendet für automatische Lead-Verarbeitung.

### Kaufen-Funnel (`/kaufen`)

**Ablauf:** 10-Schritt-Prozess für Suchauftrag-Erstellung

1. **Immobilientyp** - Wohnung, Haus, Gewerbe oder Grundstück
2. **Kaufgrund** - Eigennutzung oder Kapitalanlage
3. **Untertyp** - Conditional basierend auf Typ
4. **Mindest-Zimmeranzahl** - 1 bis 5+ Zimmer
5. **Mindest-Wohnfläche** - Bereiche von unter 50 m² bis über 200 m²
6. **Maximalbudget** - Preisspannen von unter 300.000 € bis über 2 Mio. €
7. **Standort** - PLZ-Autocomplete mit Option für Nachbarbezirke
8. **Ausstattungsmerkmale** - Multi-Select: Balkon, Garten, Parkplatz, Keller, Aufzug, Barrierefrei
9. **Kontaktdaten** - Name, Email, Telefon, optionale Nachricht
10. **Erfolgsmeldung** - Bestätigung mit CTAs für weitere Schritte

**Webhook-Integration:** Suchauftrag wird an N8N gesendet für automatisches Matching und CRM-Integration.

### Funnel-Komponenten

**Wiederverwendbare UI-Komponenten:**

- **`TileOption`** - Einzelne Auswahlkachel mit Hover-Effekten und Animationen
  - Props: `label`, `value`, `icon`, `selected`, `onClick`, `disabled`
  - Features: Framer Motion animations, focus states, accessibility

- **`MultiTileSelect`** - Responsive Grid-Layout für Kacheln
  - Layout: 4 Spalten (Desktop), 2 Spalten (Tablet), 1 Spalte (Mobile)
  - Multi-select oder Single-select Modus

- **`QuestionBox`** - Graue Fragebox mit Titel und optionalem Untertitel
  - Zentrierte Darstellung für jeden Schritt

- **`ConsultantAvatar`** - Berater-Profil mit Avatar, Name und Rolle
  - Desktop: Fixed position links (320px Höhe)
  - Mobile: Inline am Seitenanfang
  - Größen: `sm`, `md`, `lg`

- **`FunnelLayout`** - Haupt-Layout-Wrapper für alle Funnel-Schritte
  - Navigation: Zurück & Weiter Buttons
  - Error-Handling & Validation-Feedback
  - Progress-Tracking
  - Responsive Design mit Flexbox-Zentrierung

**Helper-Utilities:**

- **`funnel-helpers.ts`** - Core-Logik für Funnels
  - `parseRange()` - Konvertiert String-Ranges zu numerischen Werten
  - `getRoomOptions()`, `getAreaOptions()`, `getBudgetOptions()` - Vordefinierte Auswahloptionen
  - Conditional step logic (Untertyp-Anzeige)

- **`form-validation.ts`** - Schritt-für-Schritt-Validierung
  - TypeScript Interfaces für FormData
  - Step-spezifische Validierungsfunktionen

- **`webhook.ts`** - N8N-Integration
  - `submitVerkaufenForm()` - Verkaufen-Daten senden
  - `submitKaufenForm()` - Kaufen-Daten senden
  - Error-Handling & Retry-Logik

- **`consultant-data.ts`** - Berater-Profile
  - `VERKAUFEN_CONSULTANT` - Profil für Verkaufen-Funnel
  - `KAUFEN_CONSULTANT` - Profil für Kaufen-Funnel

### Design-Prinzipien

- **Tile-basierte UI** - Große, klickbare Kacheln (keine Radio-Buttons)
- **Minimalistisch** - Fokus auf jeweils eine Frage
- **Animationen** - Smooth Framer Motion Übergänge zwischen Schritten
- **Responsive** - Mobile-First Ansatz mit Tablet und Desktop Optimierung
- **Accessibility** - ARIA-Labels, Keyboard-Navigation, Focus-States
- **Progressive Disclosure** - Conditional Steps basierend auf vorherigen Antworten

## Features

### Phase 1 (Implementiert ✅)
- ✅ Next.js 15 Setup (App Router)
- ✅ TypeScript Konfiguration (Strict Mode)
- ✅ Tailwind CSS + Design System
- ✅ **McMakler-Style Funnels** (Verkaufen & Kaufen)
  - ✅ Tile-basierte UI mit Animationen
  - ✅ Responsive Design (Mobile-First)
  - ✅ Framer Motion Übergänge
  - ✅ Consultant Avatar System
  - ✅ PLZ-Autocomplete
  - ✅ Formular-Validierung
  - ✅ N8N Webhook-Integration
- ✅ Immobilien-Inserate mit Filtern
- ⏳ Landingpage
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
