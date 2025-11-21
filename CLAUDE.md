# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**immopal** is a GDPR-compliant real estate website for Berlin & Brandenburg, targeting the German real estate broker market. The project follows a 4-phase roadmap over approximately 12 weeks, starting with a launch-ready website and progressively adding customer portal, automation, and AI features.

**Timeline:** 2 weeks (Phase 1) + 10 weeks (Phases 2-4)
**Business Focus:** Modern digital real estate brokerage for Berlin & Brandenburg region

## Tech Stack

### Current Stack (Phase 1)
- **Framework:** Next.js 15 (App Router) - Server Components, Streaming, Optimistic UI
- **Language:** TypeScript with strict mode enabled
- **Styling:** Tailwind CSS + shadcn/ui components - Modern, elegant, fast
- **Locale:** German (de-DE) - all user-facing text, dates, and numbers must use German formatting

### Planned Additions
- **CMS:** Payload CMS (self-hosted) - Full control, GDPR-compliant
- **Database:** PostgreSQL - Enterprise-ready, robust
- **API:** REST & GraphQL - Flexible for future integrations
- **Hosting:**
  - Frontend: Vercel - Global CDN, automatic scaling
  - CMS: Railway or dedicated server - GDPR-secure
  - Database: Managed PostgreSQL - Automatic backups
- **Analytics:** Plausible Analytics (GDPR-friendly)
- **Email:** Resend (transactional emails)
- **Appointment Booking:** Calendly integration

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Directory Structure

- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Navigation and Footer
  - `page.tsx` - Homepage
  - `globals.css` - Global styles and CSS variables
- `components/` - Reusable React components
  - Top-level components (navigation.tsx, footer.tsx)
  - `ui/` subdirectory for shadcn/ui-style components (planned)
- `lib/` - Utility functions and helpers
  - `utils.ts` - Contains cn() helper and German locale formatters
- `public/` - Static assets (images, etc.)

### Path Aliases

TypeScript is configured with the following path aliases:
- `@/*` - Root directory
- `@/components/*` - Components directory
- `@/lib/*` - Lib directory
- `@/app/*` - App directory

Always use these aliases for imports instead of relative paths.

### Design System

The project uses a Tailwind CSS design system with HSL CSS variables defined in [app/globals.css](app/globals.css). Colors are defined as semantic tokens (primary, secondary, muted, accent, destructive, etc.) and support both light and dark modes.

Key utilities in [lib/utils.ts](lib/utils.ts):
- `cn()` - Combines clsx and tailwind-merge for conditional classes
- `formatPrice()` - Formats numbers as EUR with German locale (e.g., "250.000 €")
- `formatArea()` - Formats square meters (e.g., "85 m²")
- `formatDate()` - Formats dates with German locale (e.g., "15. März 2024")

### Component Patterns

- **Client Components:** Use `'use client'` directive for interactivity (see [components/navigation.tsx](components/navigation.tsx))
- **Server Components:** Default for all other components
- **Layouts:** Global Navigation and Footer are rendered in root layout
- **Responsive Design:** Mobile-first approach with Tailwind breakpoints (md:, lg:, etc.)

## Key Conventions

1. **Language:** All user-facing content, UI text, and comments must be in German
2. **Locale Formatting:** Always use German locale formatters from [lib/utils.ts](lib/utils.ts) for prices, dates, and measurements
3. **Component Organization:** Keep top-level components in `components/`, UI primitives in `components/ui/`
4. **Type Safety:** TypeScript strict mode is enabled - ensure all types are properly defined
5. **Styling:** Use Tailwind utility classes and the design system tokens (primary, muted, etc.)
6. **Metadata:** Set proper German SEO metadata for all pages (see [app/layout.tsx](app/layout.tsx) for example)

## Environment Variables

Copy `.env.example` to `.env.local` and configure:
- `NEXT_PUBLIC_SITE_URL` - Base URL (default: http://localhost:3000)
- Optional: Google Maps API key, analytics domain

## Important Features to Consider

- **GDPR Compliance:** Cookie banner and data protection are critical requirements
- **Performance:** Use Next.js Image component for all images (target: Lighthouse >90)
- **SEO:** Implement proper German metadata and Open Graph tags
- **Accessibility:** WCAG 2.1 Level AA compliance (BFSG requirement from 2025)
- **Legal Requirements:** § 34c GewO compliance for German real estate brokers

## Development Roadmap

### Phase 1: Launch-Ready Website (Weeks 1-2) - CURRENT

#### Week 1: Foundation & CMS
**Days 1-2: Project Setup**
- Technical infrastructure (Next.js, TypeScript, Tailwind) ✅
- Payload CMS installation & configuration
- PostgreSQL database setup
- Git repository & development environment ✅

**Days 3-4: CMS Configuration**
- Property management system (price, rooms, area, images, location, energy certificate)
- Blog system for news/articles
- Media library for images/documents
- 2 admin user accounts
- 5 demo properties with placeholder data

**Days 5-7: Legal Foundation (GDPR)**
- Impressum (including § 34c GewO for brokers)
- Privacy policy (detailed for all tools)
- Cookie banner with granular consent
- Terms of service template

**Week 1 Deliverables:**
- ✅ Functional CMS with demo data
- ✅ Admin access for 2 users
- ✅ All legal pages (placeholder texts)

#### Week 2: Frontend & SEO
**Days 8-9: Landing Page**
- Hero section with search functionality
- Featured properties (top offers)
- About-us section (placeholder)
- USPs & service overview
- Call-to-actions (appointments, contact)
- Professional footer

**Days 10-11: Property Pages**
- Overview page with filters (price, rooms, location, status)
- Detail pages for each property:
  - 4-image gallery
  - Complete property data
  - Google Maps integration (GDPR-compliant)
  - Calendly integration for appointments
  - Contact/inquiry button

**Days 12-13: Additional Pages & Blog**
- Contact page with form
- Blog overview & detail pages
- Expanded about-us page
- 404 error page

**Day 14: SEO & Performance**
- Metadata for all pages
- Structured data (Schema.org for real estate)
- Automatic sitemap.xml generation
- robots.txt
- Open Graph tags (social media)
- Lighthouse optimization (target: >90 score)
- WCAG 2.1 AA accessibility

**Week 2 Deliverables:**
- ✅ Complete responsive website (mobile/tablet/desktop)
- ✅ All pages SEO-optimized
- ✅ GDPR-compliant
- ✅ Level AA accessibility
- ✅ Google Search Console ready
- ✅ Production deployment

### Phase 2: Customer Portal (Weeks 3-5)

**Features:**
- User registration & login
- Favorites system (save properties)
- Inquiry tracking (status updates)
- Document area (exposés, contracts)
- Personal dashboard

**User Roles:**
- Customer (limited access)
- Broker (extended rights)
- Admin (full control)

**Timeline:** 3 weeks after launch

### Phase 3: Automation & CRM (Weeks 6-8)

**N8N Workflows:**
- Lead capture from contact forms
- Automatic lead enrichment
- Google Sheets integration
- Email notifications to brokers
- Monday.com CRM synchronization

**Timeline:** 3 weeks (can run parallel to Phase 2)

### Phase 4: AI Features (Weeks 9-12)

**OpenAI Integration (via N8N):**
- Automatic property valuation
- Market analyses for Berlin/Brandenburg
- Risk assessment for properties
- Price forecasts

**Timeline:** 4 weeks after CRM integration

## SEO Strategy

### On-Page SEO
- Structured data (Schema.org for properties)
- Optimized meta tags
- Responsive design
- Fast loading times (<2s)
- Mobile-first approach

### Local SEO
- Google Business Profile integration
- Local keywords (Berlin, Brandenburg)
- Structured addresses
- NAP consistency (Name, Address, Phone)

### Content Strategy
- Blog for real estate topics
- Neighborhood guides (Kiez-Guides)
- Market analyses
- FAQ pages (Rich Snippets)

## CMS Content Models

### Property (Immobilie)
- Title, description, category
- Price, rooms, living area, plot size
- Location (address, district, coordinates)
- Images (gallery with min. 4 images)
- Energy certificate data
- Status (available, reserved, sold)
- Featured flag

### Blog Post (Blog-Artikel)
- Title, slug, content (rich text)
- Author, publish date
- Category, tags
- Featured image
- SEO metadata

### Media Library
- Images organized by property
- Documents (PDFs, exposés)
- Version control

## Estimated Monthly Costs

| Service | Cost |
|---------|------|
| Domain (.de) | 1€ |
| Frontend Hosting (Vercel Pro) | 20€ |
| CMS Hosting (Railway) | 10€ |
| Database (PostgreSQL) | 5€ |
| Analytics (Plausible) | 9€ |
| CDN (Cloudflare) | 0€ |
| Email (Resend) | 0€ (up to 3k/month) |
| **Total** | **~45€/month** |

**One-time costs:**
- Legal consultation (lawyer): 500-1,000€

## Milestones & Deliverables

✅ **Milestone 1** (End of Week 1)
- Development environment running
- CMS functional
- 5 demo properties created
- Legal pages created

✅ **Milestone 2** (End of Week 2)
- Website is live!
- All pages responsive
- SEO fully implemented
- GDPR-compliant
- Performance-optimized
- Ready for content (logo, texts, images can be added anytime)

✅ **Milestone 3** (End of Week 5)
- Customer portal live
- User authentication
- Favorites & inquiry tracking

✅ **Milestone 4** (End of Week 8)
- Fully automatic lead processing
- CRM integration
- Google Sheets reporting

✅ **Milestone 5** (End of Week 12)
- AI-powered property valuation
- Automatic market analyses
- Price forecasts

## Security & Compliance

- **GDPR:** Full compliance (cookie consent, privacy policy, data processing agreements)
- **SSL:** Automatic HTTPS encryption
- **Accessibility:** WCAG 2.1 Level AA (BFSG compliance from 2025)
- **Backups:** Daily automatic backups
- **Data Location:** EU regions preferred (Frankfurt)
- **Legal:** § 34c GewO compliance for German real estate brokers

## Support & Maintenance

**Included (Phase 1):**
- Content updates via CMS (unlimited)
- Bug fixes (30 days after launch)
- Performance monitoring
- Security updates

**Optional:**
- Monthly support retainer
- Feature extensions
- Content creation
- SEO management
