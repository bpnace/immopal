import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getSiteUrl } from '@/lib/site';

import { AngebotePageClient } from './angebote-page-client';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: 'Angebote',
  description:
    'Aktuelle Immobilienangebote in Berlin, Brandenburg und deutschlandweit. Entdecken Sie Wohnungen, Häuser und Grundstücke bei ImmoPal.',
  alternates: {
    canonical: `${siteUrl}/angebote/`,
  },
  openGraph: {
    title: 'Angebote - ImmoPal',
    description:
      'Aktuelle Immobilienangebote in Berlin, Brandenburg und deutschlandweit. Entdecken Sie Wohnungen, Häuser und Grundstücke bei ImmoPal.',
    url: `${siteUrl}/angebote/`,
  },
  twitter: {
    title: 'Angebote - ImmoPal',
    description:
      'Aktuelle Immobilienangebote in Berlin, Brandenburg und deutschlandweit. Entdecken Sie Wohnungen, Häuser und Grundstücke bei ImmoPal.',
  },
};

export default function AngebotePage() {
  return (
    <Suspense fallback={<main className="container mx-auto px-4 py-20 text-muted-foreground">Lade Angebote...</main>}>
      <AngebotePageClient />
    </Suspense>
  );
}
