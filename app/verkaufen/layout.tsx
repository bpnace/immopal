import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: 'Immobilie verkaufen - Kostenlose Bewertung in 48h',
  description:
    'Immobilie verkaufen in Berlin, Brandenburg oder deutschlandweit. Kostenlose Immobilienbewertung in 48 Stunden. Professionelle Verkaufsberatung vom Makler. Jetzt bewerten lassen!',
  openGraph: {
    title: 'Immobilie verkaufen - Kostenlose Bewertung - ImmoPal',
    description: 'Kostenlose Immobilienbewertung in 48 Stunden. Professionelle Verkaufsberatung.',
  },
  alternates: {
    canonical: `${siteUrl}/verkaufen`,
  },
};

export default function VerkaufenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
