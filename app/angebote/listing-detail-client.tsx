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

function normalizeStatus(status: string): string {
  const normalized = status
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '_')
    .replace(/-+/g, '_');

  if (!normalized) return 'gelistet';
  if (normalized === 'gelistet' || normalized === 'available' || normalized === 'verfugbar' || normalized === 'verfuegbar') return 'gelistet';
  if (normalized === 'auf_anfrage') return 'auf_anfrage';
  if (normalized === 'vermietet' || normalized === 'reserviert' || normalized === 'reserved' || normalized === 'rented') return 'vermietet';
  if (normalized === 'verkauft' || normalized === 'sold') return 'verkauft';
  return normalized;
}

export function ListingDetailClient({ slug }: Props) {
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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

  useEffect(() => {
    setActiveImageIndex(0);
  }, [listing?.id]);

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

  const galleryImages = listing.images.length > 0 ? listing.images : ['/images/hero1.webp'];
  const activeImage = galleryImages[activeImageIndex] ?? galleryImages[0];
  const price = listing.price !== null ? formatPrice(listing.price) : 'Auf Anfrage';
  const normalizedStatus = normalizeStatus(listing.status || '');
  const hideFeatures = normalizedStatus === 'verkauft' || normalizedStatus === 'vermietet';
  const hasMultipleImages = galleryImages.length > 1;

  function goToNextImage() {
    if (!hasMultipleImages) return;
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  }

  function goToPrevImage() {
    if (!hasMultipleImages) return;
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }

  function handleHeroKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (!hasMultipleImages) return;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goToNextImage();
      return;
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goToPrevImage();
    }
  }

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

        <div
          className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-muted mb-4"
          tabIndex={hasMultipleImages ? 0 : -1}
          onKeyDown={handleHeroKeyDown}
          aria-label={hasMultipleImages ? 'Hauptbildgalerie, mit Pfeiltasten navigierbar' : undefined}
        >
          <Image
            src={activeImage}
            alt={listing.title}
            fill
            className="object-cover object-center"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="(max-width: 768px) 100vw, 960px"
          />

          {hasMultipleImages && (
            <>
              <button
                type="button"
                onClick={goToPrevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                aria-label="Vorheriges Bild anzeigen"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.78 15.53a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 1 1 1.06 1.06L8.31 10l4.47 4.47a.75.75 0 0 1 0 1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={goToNextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                aria-label="Nächstes Bild anzeigen"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M7.22 4.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06-1.06L11.69 10 7.22 5.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        {hasMultipleImages && (
          <section className="mb-10">
            <h2 className="sr-only">Bildergalerie</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
              {galleryImages.map((image, index) => (
                <button
                  key={`${listing.id}-gallery-${index}`}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className={[
                    'relative aspect-[4/3] overflow-hidden rounded-lg border transition',
                    index === activeImageIndex
                      ? 'border-primary ring-2 ring-primary/30'
                      : 'border-border hover:border-primary/50',
                  ].join(' ')}
                  aria-label={`Bild ${index + 1} anzeigen`}
                >
                  <Image
                    src={image}
                    alt={`${listing.title} - Bild ${index + 1}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 180px"
                  />
                </button>
              ))}
            </div>
          </section>
        )}

        {!hideFeatures && listing.features.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Ausstattung</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-muted-foreground">
              {listing.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </section>
        )}

        {listing.longDescription && (
          <section className="prose prose-gray max-w-none">
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(listing.longDescription, {
                  ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'b', 'i', 'u', 'ul', 'ol', 'li', 'a', 'h2', 'h3', 'h4'],
                  ALLOWED_ATTR: ['href', 'target', 'rel'],
                }),
              }}
            />
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
