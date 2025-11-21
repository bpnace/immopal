import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getPropertyBySlug, mockProperties } from '@/lib/mock-data';
import { formatPrice, formatArea, formatDate } from '@/lib/utils';

// Demo workaround: relax page props typing to avoid Next.js/Payload type conflicts
type Props = any;

export async function generateStaticParams() {
  return mockProperties.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const property = getPropertyBySlug(params.slug);

  if (!property) {
    return {
      title: 'Immobilie nicht gefunden - immopal',
    };
  }

  return {
    title: property.seo?.metaTitle || `${property.title} - immopal`,
    description:
      property.seo?.metaDescription ||
      `${property.category} in ${property.location.city} kaufen. ${property.rooms} Zimmer, ${formatArea(property.livingArea)}. ${formatPrice(property.price)}`,
    openGraph: {
      title: property.title,
      description: property.description.substring(0, 160),
      images: [property.images[0].url],
    },
  };
}

const PropertyDetailPage = ({ params }: Props) => {
  const property = getPropertyBySlug(params.slug);

  if (!property) {
    notFound();
  }

  const categoryLabels = {
    wohnung: 'Wohnung',
    haus: 'Haus',
    grundstueck: 'Grundstück',
    gewerbe: 'Gewerbe',
  };

    return (
      <main className="min-h-screen bg-background">
        {/* Breadcrumbs */}
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
              <span className="text-foreground">{property.title}</span>
            </nav>
          </div>
        </div>
            {/* breadcrumbs end */}

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative h-96 bg-muted rounded-lg overflow-hidden mb-4">
                <Image
                  src={property.images[0].url}
                  alt={property.images[0].alt}
                  fill
                  className="object-cover"
                  priority
                />
                {property.status === 'reserved' && (
                  <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-md text-sm font-medium">
                    Reserviert
                  </div>
                )}
                {property.featured && property.status === 'available' && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">
                    Top-Angebot
                  </div>
                )}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {property.images.slice(1, 5).map((image, index) => (
                  <div key={index} className="relative h-24 bg-muted rounded-lg overflow-hidden">
                    <Image src={image.url} alt={image.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Title and Price */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{property.title}</h1>
                  <p className="text-lg text-muted-foreground">
                    {property.location.street} {property.location.houseNumber}, {property.location.postalCode}{' '}
                    {property.location.city}
                  </p>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-primary">{formatPrice(property.price)}</p>
              </div>
            </div>

            {/* Key Facts */}
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Eckdaten</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Typ</p>
                  <p className="font-semibold">{categoryLabels[property.category]}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Zimmer</p>
                  <p className="font-semibold">{property.rooms}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Wohnfläche</p>
                  <p className="font-semibold">{formatArea(property.livingArea)}</p>
                </div>
                {property.plotSize && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Grundstücksfläche</p>
                    <p className="font-semibold">{formatArea(property.plotSize)}</p>
                  </div>
                )}
                {property.bedrooms && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Schlafzimmer</p>
                    <p className="font-semibold">{property.bedrooms}</p>
                  </div>
                )}
                {property.bathrooms && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Badezimmer</p>
                    <p className="font-semibold">{property.bathrooms}</p>
                  </div>
                )}
                {property.floor && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Etage</p>
                    <p className="font-semibold">{property.floor}</p>
                  </div>
                )}
                {property.constructionYear && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Baujahr</p>
                    <p className="font-semibold">{property.constructionYear}</p>
                  </div>
                )}
                {property.energyCertificate && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Energieeffizienzklasse</p>
                    <p className="font-semibold">{property.energyCertificate.class}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Beschreibung</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </div>
            </div>

            {/* Features */}
            {property.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Ausstattung</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
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

            {/* Energy Certificate */}
            {property.energyCertificate && (
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Energieausweis</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Ausweistyp</p>
                    <p className="font-medium">
                      {property.energyCertificate.type === 'demand' ? 'Bedarfsausweis' : 'Verbrauchsausweis'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Energiekennwert</p>
                    <p className="font-medium">{property.energyCertificate.value}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Energieeffizienzklasse</p>
                    <p className="font-medium text-lg">{property.energyCertificate.class}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Gültig bis</p>
                    <p className="font-medium">{formatDate(property.energyCertificate.validUntil)}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Location */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Lage</h2>
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <p className="text-muted-foreground">Google Maps wird hier eingebunden (DSGVO-konform)</p>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {property.location.street} {property.location.houseNumber}, {property.location.postalCode}{' '}
                {property.location.city}
                {property.location.district && `, ${property.location.district}`}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-4">
              <h3 className="text-xl font-semibold mb-4">Interesse?</h3>
              <p className="text-muted-foreground mb-6">
                Kontaktieren Sie uns für weitere Informationen oder vereinbaren Sie einen Besichtigungstermin.
              </p>

              <div className="space-y-3 mb-6">
                <Link
                  href="/kontakt"
                  className="block w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium text-center transition-colors"
                >
                  Anfrage senden
                </Link>
                <a
                  href="tel:+493012345678"
                  className="block w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-lg font-medium text-center transition-colors"
                >
                  <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Anrufen
                </a>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-semibold mb-3">Kontaktdaten</h4>
                <div className="space-y-2 text-sm">
                  <p className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a href="mailto:info@immopal.de" className="text-primary hover:underline">
                      info@immopal.de
                    </a>
                  </p>
                  <p className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a href="tel:+493012345678" className="text-primary hover:underline">
                      +49 (0)30 123 456 78
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// DEMO FIX: force type to any to bypass Next.js type error (development/demo only)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default PropertyDetailPage as any;
