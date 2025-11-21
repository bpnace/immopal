'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import type { Metadata } from 'next';
import { getAvailableProperties } from '@/lib/mock-data';
import { formatPrice, formatArea } from '@/lib/utils';
import type { Property, PropertyCategory, PropertyState } from '@/lib/types';

export default function ImmobilienPage() {
  const allProperties = getAvailableProperties();
  const [selectedCategory, setSelectedCategory] = useState<PropertyCategory | 'all'>('all');
  const [selectedState, setSelectedState] = useState<PropertyState | 'all'>('all');
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [minRooms, setMinRooms] = useState<number>(0);

  // Filter properties
  const filteredProperties = allProperties.filter((property) => {
    if (selectedCategory !== 'all' && property.category !== selectedCategory) return false;
    if (selectedState !== 'all' && property.location.state !== selectedState) return false;
    if (maxPrice > 0 && property.price > maxPrice) return false;
    if (minRooms > 0 && property.rooms < minRooms) return false;
    return true;
  });

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unsere Immobilien</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Entdecken Sie {filteredProperties.length} verfügbare Immobilien in Berlin und Brandenburg
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-6">Filter</h2>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-3 block">Immobilientyp</label>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      checked={selectedCategory === 'all'}
                      onChange={(e) => setSelectedCategory('all')}
                      className="mr-2"
                    />
                    <span>Alle</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value="wohnung"
                      checked={selectedCategory === 'wohnung'}
                      onChange={(e) => setSelectedCategory('wohnung')}
                      className="mr-2"
                    />
                    <span>Wohnung</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value="haus"
                      checked={selectedCategory === 'haus'}
                      onChange={(e) => setSelectedCategory('haus')}
                      className="mr-2"
                    />
                    <span>Haus</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value="grundstueck"
                      checked={selectedCategory === 'grundstueck'}
                      onChange={(e) => setSelectedCategory('grundstueck')}
                      className="mr-2"
                    />
                    <span>Grundstück</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value="gewerbe"
                      checked={selectedCategory === 'gewerbe'}
                      onChange={(e) => setSelectedCategory('gewerbe')}
                      className="mr-2"
                    />
                    <span>Gewerbe</span>
                  </label>
                </div>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-3 block">Standort</label>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="state"
                      value="all"
                      checked={selectedState === 'all'}
                      onChange={(e) => setSelectedState('all')}
                      className="mr-2"
                    />
                    <span>Alle</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="state"
                      value="berlin"
                      checked={selectedState === 'berlin'}
                      onChange={(e) => setSelectedState('berlin')}
                      className="mr-2"
                    />
                    <span>Berlin</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="state"
                      value="brandenburg"
                      checked={selectedState === 'brandenburg'}
                      onChange={(e) => setSelectedState('brandenburg')}
                      className="mr-2"
                    />
                    <span>Brandenburg</span>
                  </label>
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-3 block">Preis bis</label>
                <select
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background"
                >
                  <option value={0}>Unbegrenzt</option>
                  <option value={300000}>300.000 €</option>
                  <option value={500000}>500.000 €</option>
                  <option value={750000}>750.000 €</option>
                  <option value={1000000}>1.000.000 €</option>
                  <option value={1500000}>1.500.000 €</option>
                </select>
              </div>

              {/* Rooms Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-3 block">Mindest-Zimmer</label>
                <select
                  value={minRooms}
                  onChange={(e) => setMinRooms(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background"
                >
                  <option value={0}>Alle</option>
                  <option value={1}>1+</option>
                  <option value={2}>2+</option>
                  <option value={3}>3+</option>
                  <option value={4}>4+</option>
                  <option value={5}>5+</option>
                </select>
              </div>

              {/* Reset Button */}
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedState('all');
                  setMaxPrice(0);
                  setMinRooms(0);
                }}
                className="w-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-md transition-colors"
              >
                Filter zurücksetzen
              </button>
            </div>
          </aside>

          {/* Properties Grid */}
          <div className="lg:col-span-3">
            {filteredProperties.length === 0 ? (
              <div className="bg-card border border-border rounded-lg p-12 text-center">
                <p className="text-lg text-muted-foreground">
                  Keine Immobilien gefunden. Bitte passen Sie Ihre Filter an.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProperties.map((property) => (
                  <Link
                    key={property.id}
                    href={`/immobilien/${property.slug}`}
                    className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="relative h-64 bg-muted">
                      <Image
                        src={property.images[0].url}
                        alt={property.images[0].alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {property.featured && (
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium">
                          Top-Angebot
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span className="capitalize">{property.category}</span>
                        <span>•</span>
                        <span>
                          {property.location.district}, {property.location.city}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {property.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span>{property.rooms} Zimmer</span>
                        <span>•</span>
                        <span>{formatArea(property.livingArea)}</span>
                        {property.plotSize && (
                          <>
                            <span>•</span>
                            <span>{formatArea(property.plotSize)}</span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold text-primary">{formatPrice(property.price)}</p>
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
      </div>
    </main>
  );
}
