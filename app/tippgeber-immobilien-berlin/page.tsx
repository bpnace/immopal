import Link from 'next/link';
import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Immobilien Tippgeber Berlin – 20% Provision sichern - immopal',
  description:
    'Immobilien Tippgeber werden und 20% der Netto-Maklerprovision erhalten – diskret, fair und ohne Aufwand.',
  alternates: {
    canonical: `${getSiteUrl()}/tippgeber-immobilien-berlin`,
  },
};

const faq = [
  {
    q: 'Wann erhalte ich die Provision?',
    a: 'Nach Abschluss des Kaufvertrags beim Notar.',
  },
  {
    q: 'Was passiert, wenn kein Verkauf zustande kommt?',
    a: 'Dann entstehen für Sie keinerlei Kosten oder Verpflichtungen.',
  },
  {
    q: 'Kann ich mehrere Tipps abgeben?',
    a: 'Ja, jederzeit.',
  },
];

export default function TippgeberLandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-primary/5 py-12 min-h-[220px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-muted-foreground mb-2">Immobilien Tippgeber</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Immobilien Tippgeber werden – 20 % Provision sichern</h1>
            <p className="text-lg text-muted-foreground">
              Geben Sie einen Hinweis, wir kümmern uns um den Rest – bei erfolgreichem Verkauf erhalten Sie Ihre
              Tippgeberprovision.
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
                <em>
                  Fast jeder kennt jemanden, der überlegt, eine Immobilie zu verkaufen. Was viele nicht wissen: Ein guter
                  Tipp kann bares Geld wert sein.
                </em>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <em>
                  Wenn durch Ihren Hinweis eine Immobilie erfolgreich vermittelt wird, erhalten Sie{' '}
                  <strong>20 % der Netto-Maklerprovision</strong>.
                </em>
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Wie das Tippgeber-Modell funktioniert</h2>
              <p className="text-muted-foreground leading-relaxed">
                <em>Das Prinzip ist einfach:</em>
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Sie geben uns einen Hinweis auf eine verkaufsinteressierte Immobilie</li>
                <li>Wir übernehmen Beratung, Bewertung und Vermarktung</li>
                <li>Kommt es zum Verkauf, erhalten Sie Ihre Provision</li>
              </ol>
              <p className="text-muted-foreground leading-relaxed">
                <em>Ohne Aufwand, ohne Risiko.</em>
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Wer Tippgeber werden kann</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Privatpersonen</li>
                <li>Nachbarn oder Bekannte</li>
                <li>Handwerker oder Dienstleister</li>
                <li>Hausverwaltungen</li>
                <li>Freunde oder Familienmitglieder</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                <em>
                  Sie benötigen <strong>keine Maklererlaubnis</strong> und gehen keine Verpflichtung ein.
                </em>
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Diskret &amp; fair</h2>
              <p className="text-muted-foreground leading-relaxed">
                <em>
                  Viele Tippgeber legen Wert auf Zurückhaltung – völlig zu Recht. Auf Wunsch behandeln wir Ihren Hinweis{' '}
                  <strong>vollständig diskret</strong>.
                </em>
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Keine Nennung Ihres Namens gegenüber Dritten</li>
                <li>Klare Provisionsregelung</li>
                <li>Auszahlung nach erfolgreichem Verkauf</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                <em>Transparenz ist für uns keine Floskel, sondern Standard.</em>
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Warum immopal?</h2>
              <p className="text-muted-foreground leading-relaxed">
                <em>
                  Wir arbeiten lokal in <strong>Berlin und Brandenburg</strong> und kennen die Besonderheiten der einzelnen
                  Stadtteile und Regionen. Das erhöht die Verkaufschancen – und damit auch Ihre Chance auf eine Provision.
                </em>
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Häufige Fragen</h2>
              <div className="space-y-3">
                {faq.map((item) => (
                  <details key={item.q} className="group rounded-lg border border-border bg-card px-5 py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                      <span>{item.q}</span>
                      <span className="text-muted-foreground transition-transform group-open:rotate-45" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-sm font-semibold text-muted-foreground mb-2">Tippgeberprovision</div>
              <div className="text-3xl font-bold mb-2">20 %</div>
              <p className="text-sm text-muted-foreground mb-5">der Netto-Maklerprovision bei erfolgreichem Verkauf.</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Diskret auf Wunsch</li>
                <li>• Keine Verpflichtung</li>
                <li>• Ohne Aufwand</li>
                <li>• Berlin &amp; Brandenburg</li>
              </ul>
              <Link
                href="/tippgeberprovision"
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Jetzt Tipp abgeben und Provision sichern
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
