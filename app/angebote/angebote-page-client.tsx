'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import { fetchListings, type Listing } from '@/lib/listings';
import { ListingsGrid } from '@/components/listings-grid';
import { ListingDetailClient } from './listing-detail-client';

export function AngebotePageClient() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');

  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) return;
    async function loadListings() {
      try {
        setLoading(true);
        const data = await fetchListings();
        setListings(data);
      } catch (err) {
        console.error('Failed to fetch listings:', err);
        setError('Fehler beim Laden der Immobilien');
      } finally {
        setLoading(false);
      }
    }
    loadListings();
  }, [slug]);

  if (slug) {
    return <ListingDetailClient slug={slug} />;
  }

  if (error) {
    return (
      <main className="container mx-auto px-4 py-20">
        <div className="text-center text-red-500">
          <p>{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="bg-primary/5 py-12 min-h-[220px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unsere Immobilien</h1>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto mb-6">
              Wir bestimmen den Marktwert Ihrer Immobilie auf Basis tagesaktueller Vergleichsdaten sowie datenbasierter
              Bewertungsverfahren, um eine objektive und nachvollziehbare Preiseinschätzung zu gewährleisten.
              <br />
              {listings.length > 0 && `Entdecken Sie ${listings.length} verfügbare Immobilien in Berlin und Brandenburg`}
            </p>
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
      </section>

      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Lade Immobilien...</p>
          </div>
        ) : (
          <ListingsGrid listings={listings} />
        )}

        <div className="mt-10 flex justify-center">
          <Link
            href="/kaufen"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Suchauftrag erstellen
          </Link>
        </div>
      </div>

      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background border border-border rounded-xl overflow-hidden">
              <div className="p-8 text-center">
                <div className="text-xs font-semibold tracking-[0.22em] text-muted-foreground italic">DER DIREKTE DRAHT</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Sie haben Fragen zu unseren Angeboten oder möchten eine individuelle Beratung? Kontaktieren Sie uns
                  gerne direkt.
                </p>
                <Link href="/kontakt" className="mt-5 inline-block text-sm font-semibold text-primary hover:underline">
                  zum Kontakt →
                </Link>
              </div>
              <div className="relative h-[240px] md:h-[280px] bg-muted">
                <Image
                  src="/images/gruender.webp"
                  alt="gruender"
                  fill
                  className="object-cover object-[center_35%]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>

            <div className="bg-background border border-border rounded-xl overflow-hidden">
              <div className="p-8 text-center">
                <div className="text-xs font-semibold tracking-[0.22em] text-muted-foreground italic">AUF DIE SUCHE, FERTIG, LOS</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Keine passende Immobilie gefunden? Erstellen Sie einen Suchauftrag und wir informieren Sie, sobald
                  neue Objekte verfügbar sind, die Ihren Kriterien entsprechen.
                </p>
                <Link href="/kaufen" className="mt-5 inline-block text-sm font-semibold text-primary hover:underline">
                  zum Suchauftrag →
                </Link>
              </div>
              <div className="relative h-[240px] md:h-[280px] bg-muted">
                <Image
                  src="/images/suche.webp"
                  alt="search"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
