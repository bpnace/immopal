import { Suspense } from 'react';
import type { Metadata } from 'next';
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
    <Suspense
      fallback={
        <main className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-12">
            <p className="text-muted-foreground">Lade Immobilien...</p>
          </div>
        </main>
      }
    >
      <AngebotePageClient />
    </Suspense>
  );
}
