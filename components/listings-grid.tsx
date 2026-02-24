'use client';

import { useMemo, useState } from 'react';

import type { Listing } from '@/lib/listings';
import { ListingCard } from '@/components/listing-card';

const priceOptions = [0, 300000, 500000, 750000, 1000000, 1500000];
const roomOptions = [0, 1, 2, 3, 4, 5];

const statusLabels: Record<string, string> = {
  all: 'Alle Status',
  gelistet: 'Sofort verfügbar',
  auf_anfrage: 'Auf Anfrage',
  vermietet: 'Vermietet',
  verkauft: 'Verkauft',
};

type StatusFilter = 'all' | 'gelistet' | 'auf_anfrage' | 'vermietet' | 'verkauft';

function normalizeStatus(status: string): Exclude<StatusFilter, 'all'> | 'unknown' {
  const normalized = status
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '_')
    .replace(/-+/g, '_');

  if (!normalized) return 'unknown';
  if (normalized === 'available' || normalized === 'gelistet' || normalized === 'verfugbar' || normalized === 'verfuegbar') {
    return 'gelistet';
  }
  if (normalized === 'auf_anfrage') {
    return 'auf_anfrage';
  }
  if (normalized === 'reserved' || normalized === 'reserviert' || normalized === 'rented' || normalized === 'vermietet') {
    return 'vermietet';
  }
  if (normalized === 'sold' || normalized === 'verkauft') {
    return 'verkauft';
  }
  return 'unknown';
}

type ListingsGridProps = {
  listings: Listing[];
};

export function ListingsGrid({ listings }: ListingsGridProps) {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [locationFilter, setLocationFilter] = useState('');
  const [maxPrice, setMaxPrice] = useState(0);
  const [minRooms, setMinRooms] = useState(0);

  const filteredListings = useMemo(() => {
    const normalizedLocation = locationFilter.trim().toLowerCase();

    const statusRank = (status: string): number => {
      const normalized = normalizeStatus(status);
      if (normalized === 'gelistet' || normalized === 'auf_anfrage') return 0;
      if (normalized === 'vermietet' || normalized === 'verkauft') return 1;
      return 2;
    };

    return listings
      .filter((listing) => {
        if (statusFilter !== 'all' && normalizeStatus(listing.status) !== statusFilter) return false;
        if (normalizedLocation && !listing.location.toLowerCase().includes(normalizedLocation))
          return false;
        if (maxPrice > 0) {
          if (listing.price === null) return false;
          if (listing.price > maxPrice) return false;
        }
        if (minRooms > 0 && (listing.rooms === null || listing.rooms < minRooms)) return false;
        return true;
      })
      .map((listing, index) => ({ listing, index }))
      .sort((a, b) => {
        const rankDiff = statusRank(a.listing.status) - statusRank(b.listing.status);
        if (rankDiff !== 0) return rankDiff;
        return a.index - b.index;
      })
      .map(({ listing }) => listing);
  }, [listings, statusFilter, locationFilter, maxPrice, minRooms]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <aside className="lg:col-span-1">
        <div className="bg-card border border-border rounded-lg p-6 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
          <h2 className="text-xl font-semibold mb-6">Filter</h2>

          <div className="mb-6">
            <label className="text-sm font-medium mb-3 block">Status</label>
            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value as StatusFilter)}
              className="w-full px-4 py-2 rounded-md border border-input bg-background"
            >
              <option value="all">{statusLabels.all}</option>
              <option value="gelistet">{statusLabels.gelistet}</option>
              <option value="auf_anfrage">{statusLabels.auf_anfrage}</option>
              <option value="vermietet">{statusLabels.vermietet}</option>
              <option value="verkauft">{statusLabels.verkauft}</option>
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
          <div className="grid grid-cols-1 items-stretch md:grid-cols-2 gap-6">
            {filteredListings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
                badge={listing.featured && normalizeStatus(listing.status) === 'gelistet' ? 'Top-Angebot' : null}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
