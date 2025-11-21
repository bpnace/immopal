import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Über uns - immopal',
  description: 'Erfahren Sie mehr über immopal, Ihren vertrauensvollen Immobilienmakler in Berlin & Brandenburg',
};

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Über immopal</h1>
            <p className="text-xl text-muted-foreground">
              Ihr vertrauensvoller Partner für Immobilien in Berlin und Brandenburg seit 2020
            </p>
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
                  immopal wurde 2020 mit der Vision gegründet, den Immobilienkauf in Berlin und Brandenburg zu
                  revolutionieren. Wir glauben daran, dass der Kauf oder Verkauf einer Immobilie mehr ist als nur
                  eine Transaktion – es ist ein wichtiger Lebensschritt, der professionelle Begleitung und
                  persönliche Betreuung verdient.
                </p>
                <p className="text-muted-foreground mb-4">
                  Mit unserem engagierten Team aus erfahrenen Immobilienexperten haben wir bereits über 200 Familien
                  dabei geholfen, ihre Traumimmobilie zu finden. Dabei legen wir besonderen Wert auf Transparenz,
                  Ehrlichkeit und individuelle Beratung.
                </p>
                <p className="text-muted-foreground">
                  Unsere tiefe Kenntnis des Berliner und Brandenburger Immobilienmarktes sowie unser großes Netzwerk
                  ermöglichen es uns, Ihnen exklusive Angebote und erstklassigen Service zu bieten.
                </p>
              </div>
              <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                  alt="Unser Team"
                  fill
                  className="object-cover"
                />
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
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  Transparenz und Ehrlichkeit stehen bei uns an erster Stelle. Wir beraten Sie objektiv und zeigen
                  auch die Schwächen einer Immobilie auf.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 text-center">
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
                <h3 className="text-xl font-semibold mb-3">Professionalität</h3>
                <p className="text-muted-foreground">
                  Jahrelange Erfahrung und kontinuierliche Weiterbildung garantieren Ihnen höchste fachliche
                  Kompetenz in allen Bereichen.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  Wir lieben Immobilien und brennen für unsere Arbeit. Diese Begeisterung spüren Sie in jeder Phase
                  unserer Zusammenarbeit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
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
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Unser Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Lernen Sie die Menschen kennen, die sich täglich für Ihren Erfolg einsetzen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="relative h-64 bg-muted">
                  <Image
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                    alt="Max Mustermann"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">Max Mustermann</h3>
                  <p className="text-primary font-medium mb-3">Geschäftsführer & Gründer</p>
                  <p className="text-sm text-muted-foreground">
                    Immobilienmakler seit 15 Jahren mit Spezialisierung auf Wohnimmobilien in Berlin
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="relative h-64 bg-muted">
                  <Image
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                    alt="Anna Schmidt"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">Anna Schmidt</h3>
                  <p className="text-primary font-medium mb-3">Senior Maklerin</p>
                  <p className="text-sm text-muted-foreground">
                    Expertin für Luxusimmobilien und Neubauprojekte mit 10 Jahren Berufserfahrung
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="relative h-64 bg-muted">
                  <Image
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                    alt="Thomas Weber"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">Thomas Weber</h3>
                  <p className="text-primary font-medium mb-3">Immobilienmakler</p>
                  <p className="text-sm text-muted-foreground">
                    Spezialist für Brandenburg und ländliche Immobilien mit fundierter Marktkenntnis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <a
                href="/kontakt"
                className="bg-background text-foreground hover:bg-background/90 px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-block"
              >
                Jetzt Kontakt aufnehmen
              </a>
              <a
                href="/immobilien"
                className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 border-2 border-primary-foreground/20 px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-block"
              >
                Immobilien ansehen
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
