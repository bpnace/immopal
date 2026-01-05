import { Suspense } from 'react';

import { AngebotePageClient } from './angebote-page-client';

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
