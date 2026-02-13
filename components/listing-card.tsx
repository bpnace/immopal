import Link from 'next/link';
import Image from 'next/image';

import { formatArea, formatPrice } from '@/lib/utils';
import type { Listing } from '@/lib/listings';

type ListingCardProps = {
  listing: Listing;
  badge?: string | null;
  className?: string;
};

function dot() {
  return <span aria-hidden="true">•</span>;
}

export function ListingCard({ listing, badge, className }: ListingCardProps) {
  const showTopOffer = Boolean(badge);
  const badgeText = badge ?? null;
  const coverImage = listing.images[0] || '/images/hero1.webp';

  return (
    <Link
      href={{ pathname: '/angebote', query: { slug: listing.slug } }}
      className={[
        'group block overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="relative aspect-[16/9] bg-muted">
        <Image
          src={coverImage}
          alt={listing.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />

        {listing.status === 'reserved' && (
          <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-2 text-sm font-semibold">
            Reserviert
          </div>
        )}

        {listing.status === 'sold' && (
          <div className="absolute top-4 right-4 bg-muted text-muted-foreground border border-border px-3 py-2 text-sm font-semibold">
            Verkauft
          </div>
        )}

        {showTopOffer && listing.status === 'available' && (
          <div className="absolute top-4 right-4 bg-slate-900/90 text-white px-4 py-2 text-lg font-bold">
            {badgeText}
          </div>
        )}
      </div>

      <div className="bg-muted/30 p-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
          <span className="font-medium text-muted-foreground">{listing.type || 'Immobilie'}</span>
          {dot()}
          <span className="line-clamp-1">{listing.location}</span>
        </div>

        <h3 className="text-2xl font-semibold leading-snug text-foreground mb-4 line-clamp-3">
          {listing.title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-6">
          {listing.rooms !== null && <span>{listing.rooms} Zimmer</span>}
          {listing.livingArea !== null && (
            <>
              {listing.rooms !== null && dot()}
              <span>{formatArea(listing.livingArea)}</span>
            </>
          )}
          {listing.plotArea !== null && (
            <>
              {(listing.rooms !== null || listing.livingArea !== null) && dot()}
              <span>{formatArea(listing.plotArea)} Grundstück</span>
            </>
          )}
        </div>

        <div className="flex items-end justify-between gap-6">
          <p className="text-3xl font-bold text-foreground">
            {listing.price !== null ? formatPrice(listing.price) : 'Auf Anfrage'}
          </p>
          <span className="text-sm font-semibold text-foreground group-hover:translate-x-1 transition-transform">
            Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
