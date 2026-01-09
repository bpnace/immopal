import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Über uns - immopal',
  description:
    'Erfahren Sie mehr über immopal, Ihr vertrauensvoller Partner für Immobilien in Deutschland seit 2026',
};

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary/5 py-12 min-h-[220px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Wir sind Immopal</h1>
            <p className="text-xl text-muted-foreground">
              Ihr vertrauensvoller Partner für Immobilien in Deutschland seit 2026
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="relative h-64 bg-muted">
                  <Image
                    src="/images/KyaProfil.webp"
                    alt="Kya Bayat"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">Kya Bayat</h3>
                  <p className="text-primary font-medium mb-3">Geschäftsführer & Gründer</p>
                  <p className="text-sm text-muted-foreground">
                    Immobilienmakler seit 15 Jahren mit Spezialisierung auf Wohnimmobilien
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="relative h-64 bg-muted">
                  <Image
                    src="/images/dennisUeber.webp"
                    alt="Dennis Darwiche"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">Dennis Darwiche</h3>
                  <p className="text-primary font-medium mb-3">Geschäftsführer & Gründer</p>
                  <p className="text-sm text-muted-foreground">
                    Experte für Luxusimmobilien und Vermietung mit 10 Jahren Berufserfahrung
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="relative h-64 bg-muted">
                  <Image
                    src="/images/tarik.webp"
                    alt="Thomas Weber"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">
                    <span className="inline-flex items-center gap-2">
                      Tarik Marshall
                      <Link
                        href="https://www.linkedin.com/in/tarik-arthur-marshall-6112b2239"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Tarik Marshall auf LinkedIn"
                        className="inline-flex items-center opacity-70 transition-opacity hover:opacity-100"
                      >
                        <Image
                          src="/images/LinkedIn_icon.svg"
                          alt=""
                          width={16}
                          height={16}
                          className="h-4 w-4"
                        />
                      </Link>
                    </span>
                  </h3>
                  <p className="text-primary font-medium mb-3">Full Stack Developer</p>
                  <p className="text-sm text-muted-foreground">
                    Verantwortlich für die technische Entwicklung unserer Plattform mit Fokus auf
                    Nutzerfreundlichkeit
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="relative h-64 bg-muted">
                  <Image
                    src="/images/feelGood.webp"
                    alt="Feelgood Manager Dog"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">Feelgood Manager</h3>
                  <p className="text-primary font-medium mb-3">Bürohund</p>
                  <p className="text-sm text-muted-foreground">
                    Sorgt für gute Laune, Pausen und ein bisschen extra Motivation im Team
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="relative h-64 bg-muted">
                  <Image
                    src="/images/MaraKoenig.webp"
                    alt="Mara Koenig"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">Mara König</h3>
                  <p className="text-primary font-medium mb-3">Digital Assistant</p>
                  <p className="text-sm text-muted-foreground">
                    Unterstützt bei Organisation, Recherche und digitaler Kommunikation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Unsere Geschichte</h2>
                <p className="text-muted-foreground mb-4">
                  Wir sind Freunde seit der Grundschule und teilen seit vielen Jahren die
                  Begeisterung für Immobilien. Jung, motiviert und fachlich fundiert begleiten wir
                  Eigentümer und Interessenten bei der Vermittlung von Immobilien in Berlin und
                  Brandenburg.
                </p>
                <p className="text-muted-foreground mb-4">
                  Aus unserer beruflichen Laufbahn bringen wir vielseitige Erfahrungen aus Konzern,
                  Mittelstand und eigener Unternehmensgründung mit – insbesondere in der
                  Immobilienbewertung und Vermarktung. Als gebürtige Berliner kennen wir den
                  regionalen Markt genau. Transparenz, Offenheit und ein Miteinander auf Augenhöhe
                  stehen für uns im Mittelpunkt.
                </p>
                <p className="text-muted-foreground">
                  Denn:{' '}
                  <strong>Jeder Kunde ist so individuell wie die passende Immobilie dazu.</strong>{' '}
                  Genau darauf gehen wir ein – offen, ehrlich und mit dem klaren Ziel, die
                  bestmögliche Lösung für Sie zu finden. Wir freuen uns auf Ihre Kontaktaufnahme.
                </p>
              </div>
              <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
                <Image src="/images/gruender.webp" alt="Unser Team" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Unsere Werte</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Diese Prinzipien leiten unser tägliches Handeln und definieren, wer wir sind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-lg p-8 text-center">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Vertrauen</h3>
                <p className="text-muted-foreground">
                  Transparenz und Ehrlichkeit stehen bei uns an erster Stelle. Wir beraten Sie
                  objektiv und zeigen auch die Schwächen einer Immobilie auf.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 text-center">
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
                <h3 className="text-xl font-semibold mb-3">Professionalität</h3>
                <p className="text-muted-foreground">
                  Jahrelange Erfahrung und kontinuierliche Weiterbildung garantieren Ihnen höchste
                  fachliche Kompetenz in allen Bereichen.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 text-center">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Leidenschaft</h3>
                <p className="text-muted-foreground">
                  Wir lieben Immobilien und brennen für unsere Arbeit. Diese Begeisterung spüren Sie
                  in jeder Phase unserer Zusammenarbeit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">immopal in Zahlen</h2>
              <p className="text-lg text-muted-foreground">
                Zahlen, die für sich sprechen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">200+</div>
                <p className="text-muted-foreground">Zufriedene Kunden</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">4+</div>
                <p className="text-muted-foreground">Jahre Erfahrung</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">150+</div>
                <p className="text-muted-foreground">Vermittelte Immobilien</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Kundenzufriedenheit</p>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Überzeugt? Werden Sie Teil unserer Erfolgsgeschichte
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Lassen Sie uns gemeinsam Ihre Traumimmobilie finden oder erfolgreich verkaufen
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
                Immobilien ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
