import Link from 'next/link';

import { fetchListings } from '@/lib/listings';
import { ListingsGrid } from '@/components/listings-grid';

export default async function ImmobilienPage() {
  const listings = await fetchListings();

  return (
    <main className="min-h-screen bg-background">
      <section className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Unsere Immobilien</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Entdecken Sie {listings.length} verfügbare Immobilien in Berlin und Brandenburg
              </p>
            </div>
            <div>
              <Link
                href="/kaufen"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg whitespace-nowrap"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Suchauftrag erstellen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <ListingsGrid listings={listings} />
      </div>
    </main>
  );
}
