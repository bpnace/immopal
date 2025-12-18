import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt - immopal',
  description: 'Kontaktieren Sie uns für eine kostenlose Beratung zu Ihrer Traumimmobilie in Berlin & Brandenburg',
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary/5 py-12 min-h-[220px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakt</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir freuen uns auf Ihre Nachricht und beraten Sie gerne bei der Suche nach Ihrer Traumimmobilie
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Kontaktformular</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    Vorname *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Nachname *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Betreff *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="purchase">Kaufinteresse</option>
                  <option value="valuation">Immobilienbewertung</option>
                  <option value="viewing">Besichtigungstermin</option>
                  <option value="general">Allgemeine Anfrage</option>
                  <option value="other">Sonstiges</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Beschreiben Sie hier Ihr Anliegen..."
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                ></textarea>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="mt-1"
                />
                <label htmlFor="privacy" className="text-sm text-muted-foreground">
                  Ich habe die{' '}
                  <a href="/datenschutz" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </a>{' '}
                  gelesen und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage gespeichert werden. *
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Nachricht senden
              </button>

              <p className="text-xs text-muted-foreground">
                * Pflichtfelder
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-card border border-border rounded-lg p-8 mb-6">
              <h2 className="text-2xl font-semibold mb-6">Kontaktinformationen</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <a href="tel:+493012345678" className="text-primary hover:underline">
                      +49 (0)30 123 456 78
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Mo-Fr: 9:00 - 18:00 Uhr
                      <br />
                      Sa: 10:00 - 14:00 Uhr
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-Mail</h3>
                    <a href="mailto:info@immopal.de" className="text-primary hover:underline">
                      info@immopal.de
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Wir antworten innerhalb von 24 Stunden
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      [Straße Hausnummer]
                      <br />
                      [PLZ] Berlin
                      <br />
                      Deutschland
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="bg-muted h-64 flex items-center justify-center">
                <p className="text-muted-foreground text-center px-4">
                  Google Maps Karte
                  <br />
                  <span className="text-sm">(DSGVO-konform mit Einwilligung)</span>
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Schnelle Antwort gewünscht?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Für dringende Anfragen rufen Sie uns bitte direkt an oder nutzen Sie unseren WhatsApp-Service.
              </p>
              <div className="flex gap-3">
                <a
                  href="tel:+493012345678"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Jetzt anrufen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
