'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DOMPurify from 'dompurify';

import { fetchListingBySlug, type Listing } from '@/lib/listings';
import { formatArea, formatPrice } from '@/lib/utils';

type Props = {
  slug: string;
};

export function ListingDetailClient({ slug }: Props) {
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await fetchListingBySlug(slug);
        setListing(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch listing:', err);
        const message =
          err instanceof Error ? err.message : typeof err === 'string' ? err : 'Unknown error while fetching listing';
        setError(process.env.NODE_ENV === 'production' ? 'Fehler beim Laden der Immobilie' : message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto max-w-5xl px-4 py-12">
          <p className="text-muted-foreground">Lade Immobilie...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto max-w-5xl px-4 py-12">
          <div className="rounded-xl border border-border bg-card p-6 text-center text-red-500">
            <p>{error}</p>
          </div>
          <div className="mt-8 text-center">
            <Link href="/angebote" className="text-primary hover:underline">
              ← Zurück zu den Immobilien
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!listing) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto max-w-5xl px-4 py-12">
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <h1 className="text-2xl font-semibold mb-2">Immobilie nicht gefunden</h1>
            <p className="text-muted-foreground">Dieses Inserat ist nicht verfügbar oder wurde entfernt.</p>
            <div className="mt-6">
              <Link href="/angebote" className="text-primary hover:underline">
                ← Zurück zu den Immobilien
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const heroImage = listing.images[0] || '/images/hero1.webp';
  const price = listing.price !== null ? formatPrice(listing.price) : 'Auf Anfrage';

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="mb-8">
          <Link href="/angebote" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Zurück zu den Immobilien
          </Link>
        </div>

        <header className="space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium">{listing.type || 'Immobilie'}</span>
            <span aria-hidden="true">•</span>
            <span className="line-clamp-1">{listing.location}</span>
            {listing.status && (
              <>
                <span aria-hidden="true">•</span>
                <span className="capitalize">{listing.status}</span>
              </>
            )}
          </div>
          <h1 className="text-4xl font-bold leading-tight">{listing.title}</h1>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <p className="text-3xl font-bold text-foreground">{price}</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              {listing.rooms !== null && <span>{listing.rooms} Zimmer</span>}
              {listing.livingArea !== null && <span>{formatArea(listing.livingArea)}</span>}
              {listing.plotArea !== null && <span>{formatArea(listing.plotArea)} Grundstück</span>}
            </div>
          </div>
        </header>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-muted mb-10">
          <Image
            src={heroImage}
            alt={listing.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 960px"
          />
        </div>

        {listing.features.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Ausstattung</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-muted-foreground">
              {listing.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </section>
        )}

        {(listing.shortDescription || listing.longDescription) && (
          <section className="prose prose-gray max-w-none">
            {listing.shortDescription && (
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(listing.shortDescription, {
                    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'b', 'i', 'u', 'ul', 'ol', 'li', 'a'],
                    ALLOWED_ATTR: ['href', 'target', 'rel'],
                  }),
                }}
              />
            )}
            {listing.longDescription && (
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(listing.longDescription, {
                    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'b', 'i', 'u', 'ul', 'ol', 'li', 'a', 'h2', 'h3', 'h4'],
                    ALLOWED_ATTR: ['href', 'target', 'rel'],
                  }),
                }}
              />
            )}
          </section>
        )}

        <section className="mt-12 rounded-xl border border-border bg-card p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Interesse an dieser Immobilie?</h2>
          <p className="text-sm text-muted-foreground mb-5">
            Schreiben Sie uns kurz – wir melden uns schnellstmöglich zurück.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </section>
      </div>
    </main>
  );
}
