'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState } from 'react';

import { formatArea, formatPrice } from '@/lib/utils';
import type { Listing } from '@/lib/listings';

const priceOptions = [0, 300000, 500000, 750000, 1000000, 1500000];
const roomOptions = [0, 1, 2, 3, 4, 5];

const statusLabels: Record<string, string> = {
  all: 'Alle Status',
  available: 'Verfügbar',
  reserved: 'Reserviert',
  sold: 'Verkauft',
};

type ListingsGridProps = {
  listings: Listing[];
};

export function ListingsGrid({ listings }: ListingsGridProps) {
  const [statusFilter, setStatusFilter] = useState<'all' | Listing['status']>('all');
  const [locationFilter, setLocationFilter] = useState('');
  const [maxPrice, setMaxPrice] = useState(0);
  const [minRooms, setMinRooms] = useState(0);

  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      if (statusFilter !== 'all' && listing.status !== statusFilter) return false;
      if (locationFilter && !listing.location.toLowerCase().includes(locationFilter.toLowerCase()))
        return false;
      if (maxPrice > 0) {
        if (listing.price === null) return false;
        if (listing.price > maxPrice) return false;
      }
      if (minRooms > 0 && (listing.rooms === null || listing.rooms < minRooms)) return false;
      return true;
    });
  }, [listings, statusFilter, locationFilter, maxPrice, minRooms]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <aside className="lg:col-span-1">
        <div className="bg-card border border-border rounded-lg p-6 sticky top-4">
          <h2 className="text-xl font-semibold mb-6">Filter</h2>

          <div className="mb-6">
            <label className="text-sm font-medium mb-3 block">Status</label>
            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value as 'all' | Listing['status'])}
              className="w-full px-4 py-2 rounded-md border border-input bg-background"
            >
              <option value="all">{statusLabels.all}</option>
              <option value="available">{statusLabels.available}</option>
              <option value="reserved">{statusLabels.reserved}</option>
              <option value="sold">{statusLabels.sold}</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium mb-3 block">Ort</label>
            <input
              type="search"
              placeholder="z. B. Berlin"
              value={locationFilter}
              onChange={(event) => setLocationFilter(event.target.value)}
              className="w-full px-4 py-2 rounded-md border border-input bg-background"
            />
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium mb-3 block">Preis bis</label>
            <select
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
              className="w-full px-4 py-2 rounded-md border border-input bg-background"
            >
              <option value={0}>Unbegrenzt</option>
              {priceOptions.slice(1).map((price) => (
                <option key={price} value={price}>
                  {Intl.NumberFormat('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(price)}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium mb-3 block">Mindest-Zimmer</label>
            <select
              value={minRooms}
              onChange={(event) => setMinRooms(Number(event.target.value))}
              className="w-full px-4 py-2 rounded-md border border-input bg-background"
            >
              <option value={0}>Alle</option>
              {roomOptions.slice(1).map((rooms) => (
                <option key={rooms} value={rooms}>
                  {rooms}+
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => {
              setStatusFilter('all');
              setLocationFilter('');
              setMaxPrice(0);
              setMinRooms(0);
            }}
            className="w-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-md transition-colors"
          >
            Filter zurücksetzen
          </button>
        </div>
      </aside>

      <div className="lg:col-span-3 space-y-6">
        {filteredListings.length === 0 ? (
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <p className="text-lg text-muted-foreground">
              Keine Immobilien gefunden. Passen Sie die Filter an oder versuchen Sie es später noch einmal.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredListings.map((listing) => (
              <Link
                key={listing.id}
                href={`/immobilien/${listing.slug}`}
                className="group bg-card border border-border rounded-xl overflow-hidden"
              >
                <div className="relative h-64 bg-muted">
                  <Image
                    src={listing.images?.[0] ?? '/images/spacejoy.jpg'}
                    alt={listing.title}
                    fill
                    className="object-cover"
                  />
                  {listing.status === 'reserved' && (
                    <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-md text-sm font-medium">
                      Reserviert
                    </div>
                  )}
                  {listing.status === 'sold' && (
                    <div className="absolute top-4 right-4 bg-muted text-muted-foreground px-3 py-1 rounded-md text-sm font-medium border border-border">
                      Verkauft
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="text-sm text-muted-foreground mb-2 line-clamp-1">{listing.location}</div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {listing.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    {listing.rooms !== null && <span>{listing.rooms} Zimmer</span>}
                    {listing.livingArea !== null && (
                      <>
                        <span>•</span>
                        <span>{formatArea(listing.livingArea)}</span>
                      </>
                    )}
                    {listing.plotArea !== null && (
                      <>
                        <span>•</span>
                        <span>{formatArea(listing.plotArea)} Grundstück</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-primary">
                      {listing.price !== null ? formatPrice(listing.price) : 'Auf Anfrage'}
                    </p>
                    <span className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
