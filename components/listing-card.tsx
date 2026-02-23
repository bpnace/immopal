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

function normalizeStatus(status: string): string {
  const normalized = status.trim().toLowerCase();
  if (!normalized) return 'sofort verfuegbar';
  return normalized
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '_')
    .replace(/-+/g, '_');
}

function getStatusLabel(status: string): string {
  const normalized = normalizeStatus(status);
  if (normalized === 'gelistet' || normalized === 'verfugbar' || normalized === 'verfuegbar' || normalized === 'available') {
    return 'Sofort verfügbar';
  }
  if (normalized === 'auf_anfrage') {
    return 'Auf Anfrage';
  }
  if (normalized === 'reserviert' || normalized === 'reserved') {
    return 'Reserviert';
  }
  if (normalized === 'verkauft' || normalized === 'sold') {
    return 'Verkauft';
  }
  if (!status.trim()) return 'Sofort verfügbar';
  return status.trim();
}

function getStatusTone(status: string): string {
  void status;
  return 'bg-indigo-950/80 text-white';
}

export function ListingCard({ listing, badge, className }: ListingCardProps) {
  const showTopOffer = Boolean(badge);
  const badgeText = badge ?? null;
  const coverImage = listing.images[0] || '/images/hero1.webp';
  const normalizedStatus = normalizeStatus(listing.status || '');
  const isSoldStatus = normalizedStatus === 'verkauft' || normalizedStatus === 'sold';
  const statusLabel = getStatusLabel(listing.status || '');
  const statusToneClass = getStatusTone(listing.status || '');
  const isLongTitle = listing.title.trim().length > 68;

  return (
    <Link
      href={{ pathname: '/angebote', query: { slug: listing.slug } }}
      className={[
        'group flex h-full min-h-[24.5rem] flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm',
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
          className={isSoldStatus ? 'object-cover grayscale' : 'object-cover'}
        />

        {showTopOffer && listing.status === 'available' && (
          <div className="absolute top-4 right-4 bg-slate-900/90 text-white px-4 py-2 text-lg font-bold">
            {badgeText}
          </div>
        )}

        <div className={`pointer-events-none absolute inset-x-0 bottom-0 flex h-[5.5rem] items-end px-4 pb-3 ${statusToneClass}`}>
          <div className="leading-tight">
            <p className="text-sm font-semibold opacity-90">ImmoPal</p>
            <p className="text-[2rem] font-bold">{statusLabel}</p>
          </div>
        </div>
      </div>

      <div className="flex grow flex-col bg-muted/30 p-5">
        <div className="min-h-[1.5rem] flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span className="font-medium text-muted-foreground">{listing.type || 'Immobilie'}</span>
          {dot()}
          <span className="line-clamp-1">{listing.location}</span>
        </div>

        <h3
          className={[
            'font-semibold text-foreground line-clamp-3',
            isLongTitle ? 'text-xl leading-snug' : 'text-2xl leading-snug',
          ].join(' ')}
        >
          {listing.title}
        </h3>

        <div className="mt-3 min-h-[2rem] flex items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
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

        <div className="mt-auto flex items-end justify-between gap-6 pt-4">
          <p className="text-3xl font-bold text-foreground">
            {listing.price !== null ? formatPrice(listing.price) : 'Auf Anfrage'}
          </p>
          <span className="text-sm font-semibold text-foreground group-hover:translate-x-1 transition-transform whitespace-nowrap">
            Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
