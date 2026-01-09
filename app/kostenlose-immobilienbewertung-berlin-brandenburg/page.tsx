import Link from 'next/link';
import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kostenlose Immobilienbewertung Berlin & Brandenburg - immopal',
  description:
    'Kostenlose Immobilienbewertung für Wohnungen und Häuser in Berlin und Brandenburg. Persönlich, nachvollziehbar und ohne Verpflichtungen.',
  alternates: {
    canonical: `${getSiteUrl()}/kostenlose-immobilienbewertung-berlin-brandenburg`,
  },
};

export default function KostenloseImmobilienbewertungLandingPage() {
  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Kostenlose Immobilienbewertung Berlin &amp; Brandenburg
          </h1>
          <p className="text-lg text-muted-foreground">
            Persönlich, nachvollziehbar und ohne Verpflichtungen – für Wohnungen und Häuser.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-6">
            <section className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Einleitung</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wenn man eine Immobilie besitzt, kommt irgendwann die Frage auf: <em>Was ist sie heute eigentlich wert?</em>{' '}
                Ob Verkauf, Erbe oder einfach zur Orientierung – eine realistische Einschätzung hilft bei jeder
                Entscheidung.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Wir bieten Ihnen eine <strong>kostenlose Immobilienbewertung</strong> für Wohnungen und Häuser in{' '}
                <strong>Berlin und Brandenburg</strong>. Persönlich, nachvollziehbar und ohne Verpflichtungen.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Wie wir den Immobilienwert ermitteln</h2>
              <p className="text-muted-foreground leading-relaxed">
                Eine seriöse Bewertung besteht nicht aus einem Online-Rechner mit Fantasiezahlen. Wir schauen uns Ihre
                Immobilie im Kontext des aktuellen Marktes an:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Vergleich mit tatsächlich verkauften Objekten</li>
                <li>Lage, Zustand, Baujahr und Ausstattung</li>
                <li>Nachfrage im jeweiligen Kiez bzw. Ort</li>
                <li>Marktentwicklung in Berlin und im Umland</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                So entsteht ein Wert, der <strong>realistisch und am Markt durchsetzbar</strong> ist.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Für wen ist die Bewertung sinnvoll?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unsere kostenlose Immobilienbewertung richtet sich an:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Eigentümer mit Verkaufsabsicht</li>
                <li>Eigentümer, die den Markt einschätzen möchten</li>
                <li>Erbengemeinschaften</li>
                <li>Kapitalanleger</li>
                <li>Eigentümer vor Finanzierung oder Umschuldung</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Ganz gleich, ob Sie sofort verkaufen möchten oder nicht.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Was Sie von uns erwarten können</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Keine automatisierte Massenbewertung</li>
                <li>Keine Verkaufspflicht</li>
                <li>Keine Weitergabe Ihrer Daten</li>
                <li>Klare und ehrliche Einschätzung</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Wir sagen auch dann offen unsere Meinung, wenn ein Verkauf <strong>gerade keinen Sinn ergibt</strong>.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Ablauf der kostenlosen Bewertung</h2>
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Sie geben die wichtigsten Eckdaten Ihrer Immobilie an</li>
                <li>Wir prüfen die Angaben und vergleichen sie mit aktuellen Marktdaten</li>
                <li>Bei Bedarf klären wir offene Punkte persönlich</li>
                <li>Sie erhalten eine fundierte Wertermittlung</li>
              </ol>
              <p className="text-muted-foreground leading-relaxed">Unkompliziert, transparent und auf Augenhöhe.</p>
            </section>
          </div>

          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-lg">
              <h2 className="text-2xl font-semibold mb-3">Jetzt Immobilienwert kostenlos ermitteln</h2>
              <p className="text-base text-muted-foreground mb-6">
                Klarheit über den aktuellen Marktwert – persönlich &amp; nachvollziehbar.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                <li>• Keine Verkaufspflicht</li>
                <li>• Keine Weitergabe Ihrer Daten</li>
                <li>• Ehrliche Einschätzung</li>
                <li>• Berlin, Brandenburg &amp; Umgebung</li>
              </ul>
              <div className="flex flex-col gap-3">
                <Link
                  href="/kontakt"
                  className="inline-flex w-full items-center text-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Jetzt kostenlose Immobilienbewertung anfordern
                </Link>
                <Link
                  href={`https://wa.me/493046690542?text=${encodeURIComponent(
                    'Hallo! Ich interessiere mich für eine kostenlose Immobilienbewertung.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1EBE57] transition-colors"
                >
                  DIrekt per WhatsApp schreiben
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
