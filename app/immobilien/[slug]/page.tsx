import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { fetchListingBySlug } from '@/lib/listings';
import { formatArea, formatDate, formatPrice } from '@/lib/utils';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const listing = await fetchListingBySlug(slug);

  if (!listing) {
    return {
      title: 'Immobilie nicht gefunden - immopal',
    };
  }

  return {
    title: listing.title + ' - immopal',
    description: (listing.shortDescription || listing.longDescription)?.replace(/<[^>]+>/g, '').slice(0, 160),
    openGraph: {
      title: listing.title,
      description: (listing.shortDescription || listing.longDescription)?.replace(/<[^>]+>/g, '').slice(0, 160),
    },
  };
}

const statusLabels: Record<string, string> = {
  available: 'Verfügbar',
  reserved: 'Reserviert',
  sold: 'Verkauft',
};

export default async function ListingDetailPage({ params }: Props) {
  const { slug } = await params;
  const listing = await fetchListingBySlug(slug);

  if (!listing) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>›</span>
            <Link href="/immobilien" className="hover:text-foreground transition-colors">
              Immobilien
            </Link>
            <span>›</span>
            <span className="text-foreground">{listing.title}</span>
          </nav>
        </div>
      </div>
      <section className="container mx-auto px-4 pt-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-10 lg:justify-center">
          {/* Content (left; narrower) */}
          <div className="space-y-6">
            {/* Image Gallery (16:9) */}
            <div className="mb-2">
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                <Image
                  src={listing.images[0] ?? '/images/spacejoy.jpg'}
                  alt={listing.title}
                  fill
                  className="object-cover"
                  priority
                />
                {listing.status && (
                  <div className="absolute top-4 right-4 bg-background/90 text-foreground px-4 py-2 rounded-md text-sm font-medium border border-border">
                    {statusLabels[listing.status] ?? listing.status}
                  </div>
                )}
              </div>
              <div className="mt-4 grid grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, index) => {
                  const src =
                    listing.images[index] ??
                    listing.images[0] ??
                    (index % 2 === 0 ? '/images/kamidris.jpg' : '/images/spacejoy.jpg');
                  return (
                    <div key={index} className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                      <Image src={src} alt={listing.title} fill className="object-cover" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Facts below gallery */}
            <div className="text-sm font-medium text-primary">
              <span>Wohnfläche: {listing.livingArea != null ? formatArea(listing.livingArea) : '—'}</span>
              <span className="mx-2 text-muted-foreground">•</span>
              <span>Grundstück: {listing.plotArea != null ? formatArea(listing.plotArea) : '—'}</span>
              <span className="mx-2 text-muted-foreground">•</span>
              <span>Zimmer: {listing.rooms != null ? listing.rooms : '—'}</span>
            </div>

            {/* Title + meta */}
            <div className="pt-8 pb-8 space-y-4 max-w-xl">
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span>{listing.location}</span>
                <span>•</span>
                <span>{formatDate(listing.createdAt)}</span>
              </div>
              <div>
                <h1 className="text-3xl md:text-3xl font-bold">{listing.title}</h1>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-base font-semibold text-muted-foreground">Preis:</span>
                  <span className="text-3xl md:text-3xl font-extrabold text-primary leading-none">
                    {listing.price !== null ? formatPrice(listing.price) : 'Auf Anfrage'}
                  </span>
                </div>
              </div>
            </div>

            {listing.shortDescription && (
              <div>
                <h2 className="text-2xl font-semibold mb-2">Kurzbeschreibung</h2>
                <article
                  className="prose prose-gray max-w-none"
                  dangerouslySetInnerHTML={{ __html: listing.shortDescription }}
                />
              </div>
            )}

            {listing.longDescription && (
              <div>
                <h2 className="text-2xl font-semibold mb-2">Beschreibung</h2>
                <article
                  className="prose prose-gray max-w-none"
                  dangerouslySetInnerHTML={{ __html: listing.longDescription }}
                />
              </div>
            )}

            {listing.features.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-3">Ausstattung</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {listing.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact box (right) */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4 h-fit lg:sticky lg:top-24 self-start">
            <h3 className="text-xl font-semibold">Ihre Kontaktmöglichkeiten</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Wir melden uns gerne zeitnah mit einem passenden Beratungstermin.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex w-full justify-center items-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Jetzt anfragen
            </Link>
            <Link
              href="/kaufen"
              className="inline-flex w-full justify-center items-center rounded-lg border border-border px-4 py-3 text-sm font-semibold transition hover:border-foreground"
            >
              Suchauftrag erstellen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
