'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ReferralCalculator } from '@/components/referral-calculator';
import { BlogPreview } from '@/components/blog-preview';
import { FaqSection } from '@/components/faq';
import { fetchListings, type Listing } from '@/lib/listings';
import { ListingCard } from '@/components/listing-card';

export default function Home() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadListings() {
      try {
        setLoading(true);
        const data = await fetchListings();
        setListings(data);
      } catch (err) {
        console.error('Failed to fetch listings:', err);
        const message =
          err instanceof Error ? err.message : typeof err === 'string' ? err : 'Unknown error while fetching listings';
        setError(process.env.NODE_ENV === 'production' ? 'Fehler beim Laden der Immobilien' : message);
      } finally {
        setLoading(false);
      }
    }
    loadListings();
  }, []);

  const featuredListings = [...listings]
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    })
    .slice(0, 4);

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
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100svh-4rem)] pt-20 pb-14 md:pt-28 md:pb-16 overflow-hidden bg-gradient-to-b from-primary/5 to-background home-section-divider">
        <Image
          src="/images/hero1.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/40"
          aria-hidden="true"
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 text-gray-100">
              Ihr vertrauensvoller Partner für Immobilien in Deutschland
            </h1>
            <p className="text-xl text-white/85 mb-8 max-w-2xl mx-auto">
              Wohnung kaufen, Haus verkaufen oder Traumimmobilie finden. Deutschlandweit, mit
              persönlicher Beratung und kostenloser Bewertung.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/angebote"
                className="bg-white/95 text-foreground border-2 border-white/20 hover:bg-white px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-block"
              >
                Immobilien entdecken
              </Link>
              <Link
                href="/kontakt"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 border-1 border rounded-lg text-lg font-medium transition-colors inline-block"
              >
                Kostenlose Immobilienbewertung
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section - Verkauf */}
      <section className="py-16 bg-background home-section-divider">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ihr Partner für den Verkauf</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Wofür benötigen Sie den Wert Ihrer Immobilie?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {/* Card 1: Verkaufen */}
            <Link
              href="/verkaufen"
              className="group bg-card border-2 border-border hover:border-primary rounded-xl p-8 text-center transition-all hover:shadow-lg hover:scale-105"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <svg
                  className="w-10 h-10 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                Ich möchte verkaufen
              </h3>
              <p className="text-muted-foreground text-sm">
                Kostenlose Bewertung Ihrer Immobilie und professionelle Verkaufsberatung
              </p>
            </Link>

            {/* Card 2: Kaufen */}
            <Link
              href="/kaufen"
              className="group bg-card border-2 border-border hover:border-primary rounded-xl p-8 text-center transition-all hover:shadow-lg hover:scale-105"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <svg
                  className="w-10 h-10 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                Ich möchte kaufen
              </h3>
              <p className="text-muted-foreground text-sm">
                Finden Sie Ihre Traumimmobilie mit unserem kostenlosen Suchauftrag-Service
              </p>
            </Link>

            {/* Card 3: Neugierig */}
            <Link
              href="/tippgeberprovision"
              className="group bg-card border-2 border-border hover:border-primary rounded-xl p-8 text-center transition-all hover:shadow-lg hover:scale-105"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <svg
                  className="w-10 h-10 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                Ich bin neugierig
              </h3>
              <p className="text-muted-foreground text-sm">
                Berechnen Sie Ihre potenzielle Tippgeberprovision für Immobilienempfehlungen
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-muted home-section-divider">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Warum immopal?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ihr zuverlässiger Partner für Immobilien in ganz Deutschland
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Geprüfte Immobilien</h3>
              <p className="text-muted-foreground">
                Alle Objekte werden von uns persönlich geprüft und bewertet. Keine versteckten
                Mängel.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Schnelle Vermittlung</h3>
              <p className="text-muted-foreground">
                Durch unser großes Netzwerk finden wir schnell die passende Immobilie für Sie.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Persönliche Beratung</h3>
              <p className="text-muted-foreground">
                Individuelle Betreuung von der ersten Besichtigung bis zum Vertragsabschluss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 bg-background home-section-divider">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Das sagen unsere Kunden</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Echte Erfahrungen und Bewertungen – transparent und nachvollziehbar.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
              <div className="space-y-3">
                <div className="text-xl font-semibold">Google Bewertungen</div>
                <p className="text-sm text-muted-foreground">
                  Unsere Kunden teilen ihre Erfahrungen auf Google. Lesen Sie die aktuellen Rezensionen
                  direkt auf unserem Google-Profil.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="text-sm text-muted-foreground">auf Google</span>
                </div>
                <Link
                  href="https://www.google.de/maps/place/ImmoPal+UG/@52.5175675,13.1979578,16z/data=!3m1!4b1!4m6!3m5!1s0x47a857e05ed8b93d:0xe793df83a9368dcc!8m2!3d52.5175675!4d13.2005327!16s%2Fg%2F11mlsq6vrb?entry=tts&g_ep=EgoyMDI1MTIwOS4wIPu8ASoASAFQAw%3D%3D&skid=06ca40ec-d910-476b-82ab-75843865c3de"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-muted transition-colors"
                >
                  Google Rezensionen öffnen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 text-primary-foreground overflow-hidden home-section-divider">
        <Image
          src="/images/signature.webp"
          alt=""
          fill
          className="object-cover object-top opacity-100"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary/80" aria-hidden="true" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-10 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bereit, Ihre Traumimmobilie zu finden?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Vereinbaren Sie jetzt ein kostenloses Beratungsgespräch mit unseren
              Immobilienexperten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="bg-background text-foreground hover:bg-background/90 px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-block"
              >
                Jetzt Kontakt aufnehmen
              </Link>
              <Link
                href="/angebote"
                className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 border-2 border-primary-foreground/20 px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-block"
              >
                Immobilien durchstöbern
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-background home-section-divider">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Aktuelle Immobilien</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Unsere neuesten Highlights aus ganz Deutschland direkt aus unserem Portfolio.
            </p>
          </div>

          {/* Suche */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Immobilientyp</label>
                  <select className="w-full px-4 py-2 rounded-md border border-input bg-background">
                    <option>Alle</option>
                    <option>Wohnung</option>
                    <option>Haus</option>
                    <option>Grundstück</option>
                    <option>Gewerbe</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Ort</label>
                  <select className="w-full px-4 py-2 rounded-md border border-input bg-background">
                    <option>Berlin & Brandenburg</option>
                    <option>Berlin</option>
                    <option>Brandenburg</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Preis bis</label>
                  <select className="w-full px-4 py-2 rounded-md border border-input bg-background">
                    <option>Unbegrenzt</option>
                    <option>300.000 €</option>
                    <option>500.000 €</option>
                    <option>750.000 €</option>
                    <option>1.000.000 €</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <Link
                    href="/angebote"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-md font-medium transition-colors text-center"
                  >
                    Suchen
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Lade Immobilien...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredListings.map((listing) => (
                <ListingCard
                  key={listing.id}
                  listing={listing}
                  badge={listing.featured && listing.status === 'available' ? 'Top-Angebot' : null}
                />
              ))}
            </div>
          )}

          <div className="text-center">
            <Link
              href="/angebote"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Alle Immobilien anzeigen
            </Link>
          </div>
        </div>
      </section>

      {/* Referral Calculator Section */}
      <section className="py-16 bg-accent/10 home-section-divider">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto border border-accent/30 shadow-sm">
            <ReferralCalculator compact />
          </div>
        </div>
      </section>

      <BlogPreview />

      <FaqSection />
    </main>
  );
}
