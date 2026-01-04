import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Immobilie verkaufen - Kostenlose Bewertung in 48h',
  description:
    'Immobilie verkaufen in Berlin, Brandenburg oder deutschlandweit. Kostenlose Immobilienbewertung in 48 Stunden. Professionelle Verkaufsberatung vom Makler. Jetzt bewerten lassen!',
  openGraph: {
    title: 'Immobilie verkaufen - Kostenlose Bewertung - immo-pal',
    description: 'Kostenlose Immobilienbewertung in 48 Stunden. Professionelle Verkaufsberatung.',
  },
  alternates: {
    canonical: 'https://immopal.de/verkaufen',
  },
};

export default function VerkaufenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
