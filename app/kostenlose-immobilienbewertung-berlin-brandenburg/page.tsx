import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kostenlose Immobilienbewertung Berlin & Brandenburg - immopal',
  description:
    'Kostenlose Immobilienbewertung für Wohnungen und Häuser in Berlin und Brandenburg. Persönlich, nachvollziehbar und ohne Verpflichtungen.',
};

export default function KostenloseImmobilienbewertungLandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-primary/5 py-12 min-h-[220px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kostenlose Immobilienbewertung Berlin & Brandenburg</h1>
            <p className="text-lg text-muted-foreground">
              Persönlich, nachvollziehbar und ohne Verpflichtungen – für Wohnungen und Häuser.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4">
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
            </div>

            <div className="space-y-4">
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
            </div>

            <div className="space-y-4">
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
            </div>

            <div className="space-y-4">
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
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Ablauf der kostenlosen Bewertung</h2>
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Sie geben die wichtigsten Eckdaten Ihrer Immobilie an</li>
                <li>Wir prüfen die Angaben und vergleichen sie mit aktuellen Marktdaten</li>
                <li>Bei Bedarf klären wir offene Punkte persönlich</li>
                <li>Sie erhalten eine fundierte Wertermittlung</li>
              </ol>
              <p className="text-muted-foreground leading-relaxed">Unkompliziert, transparent und auf Augenhöhe.</p>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-2">Jetzt Immobilienwert kostenlos ermitteln</h2>
              <p className="text-sm text-muted-foreground mb-5">
                Klarheit über den aktuellen Marktwert – persönlich &amp; nachvollziehbar.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Keine Verkaufspflicht</li>
                <li>• Keine Weitergabe Ihrer Daten</li>
                <li>• Ehrliche Einschätzung</li>
                <li>• Berlin &amp; Brandenburg</li>
              </ul>
              <Link
                href="/kontakt"
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Jetzt kostenlose Immobilienbewertung anfordern
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
