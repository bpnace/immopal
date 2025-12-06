import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedProperties } from '@/lib/mock-data';
import { formatPrice, formatArea } from '@/lib/utils';
import { ReferralCalculator } from '@/components/referral-calculator';

export default function Home() {
  const featuredProperties = getFeaturedProperties();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ihre Traumimmobilie in <span className="text-primary">Berlin & Brandenburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professionelle Immobilienvermittlung mit persönlicher Beratung. Finden Sie Ihre perfekte Wohnung oder
              Ihr Traumhaus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/immobilien"
                className="bg-background text-foreground border-2 border-border hover:bg-muted px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-block"
              >
                Immobilien entdecken
              </Link>
              <Link
                href="/kontakt"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-block"
              >
                Kostenlos beraten lassen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
                    href="/immobilien"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-md font-medium transition-colors text-center"
                  >
                    Suchen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section - Verkauf */}
      <section className="py-16 bg-background">
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
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          {/* Top 3 Properties Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Top 3 Immobilien</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Unsere aktuellen Highlight-Objekte in Berlin und Brandenburg
            </p>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-0 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProperties.slice(0, 3).map((property) => (
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
                  {property.status === 'reserved' && (
                    <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-md text-sm font-medium">
                      Reserviert
                    </div>
                  )}
                  {property.featured && property.status === 'available' && (
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
                        <span>{formatArea(property.plotSize)} Grundstück</span>
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

          <div className="text-center">
            <Link
              href="/immobilien"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Alle Immobilien anzeigen
            </Link>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Warum immopal?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ihr zuverlässiger Partner für den Immobilienkauf in Berlin & Brandenburg
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                Alle Objekte werden von uns persönlich geprüft und bewertet. Keine versteckten Mängel.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Referral Calculator Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ReferralCalculator compact />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bereit, Ihre Traumimmobilie zu finden?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Vereinbaren Sie jetzt ein kostenloses Beratungsgespräch mit unseren Immobilienexperten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="bg-background text-foreground hover:bg-background/90 px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-block"
              >
                Jetzt Kontakt aufnehmen
              </Link>
              <Link
                href="/immobilien"
                className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 border-2 border-primary-foreground/20 px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-block"
              >
                Immobilien durchstöbern
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
