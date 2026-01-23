import Link from 'next/link';
import Script from 'next/script';
import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kostenlose Immobilienbewertung Berlin & Brandenburg - ImmoPal',
  description:
    'Kostenlose Immobilienbewertung für Wohnungen und Häuser in Berlin und Brandenburg. Persönlich, nachvollziehbar und ohne Verpflichtungen.',
  alternates: {
    canonical: `${getSiteUrl()}/kostenlose-immobilienbewertung-berlin-brandenburg`,
  },
};

export default function KostenloseImmobilienbewertungLandingPage() {
  const faqItems = [
    {
      question: 'Wie funktioniert die kostenlose Immobilienbewertung?',
      answer:
        'Wir bewerten Ihre Immobilie anhand von Lage, Zustand, Wohnfläche, Ausstattung, Vergleichspreisen und aktueller Marktnachfrage. Sie erhalten eine realistische Einschätzung des Marktwerts sowie eine klare Empfehlung für das weitere Vorgehen.',
    },
    {
      question: 'Ist die Immobilienbewertung wirklich kostenlos und unverbindlich?',
      answer:
        'Ja. Die Immobilienbewertung ist vollständig kostenlos und unverbindlich. Sie entscheiden nach der Einschätzung selbst, ob und wie Sie weiter vorgehen möchten.',
    },
    {
      question: 'Welche Angaben werden für die Bewertung benötigt?',
      answer:
        'Für eine erste Bewertung sind unter anderem hilfreich: Adresse oder Ortsteil, Objektart (Wohnung, Haus oder Grundstück), Wohnfläche, Baujahr, Zustand, durchgeführte Modernisierungen sowie besondere Merkmale wie Balkon, Stellplatz oder Aufzug.',
    },
    {
      question: 'Wie schnell erhalte ich das Ergebnis der Immobilienbewertung?',
      answer:
        'In der Regel erhalten Sie innerhalb von 48 Stunden nach Übermittlung Ihrer Angaben eine erste Einschätzung. Für eine besonders genaue Bewertung kann eine Besichtigung sinnvoll sein.',
    },
    {
      question: 'Wie genau ist eine Online-Immobilienbewertung?',
      answer:
        'Eine Online-Bewertung liefert eine sehr gute erste Markt-Einschätzung. Für maximale Genauigkeit berücksichtigen wir zusätzlich objektspezifische Details und falls erforderlich eine persönliche Besichtigung.',
    },
    {
      question: 'Was passiert nach der Immobilienbewertung?',
      answer:
        'Sie erhalten eine klare Empfehlung zum realistischen Angebotspreis, zur passenden Verkaufsstrategie und zu den nächsten Schritten. Wenn Sie verkaufen möchten, begleiten wir Sie strukturiert und transparent durch den gesamten Verkaufsprozess.',
    },
    {
      question: 'Für welche Regionen bieten Sie die kostenlose Immobilienbewertung an?',
      answer:
        'Unser Schwerpunkt liegt auf Berlin und Brandenburg. Darüber hinaus bewerten wir ausgewählte Immobilien auch deutschlandweit.',
    },
    {
      question: 'Entstehen nach der Bewertung Kosten oder Verpflichtungen?',
      answer:
        'Nein. Die Immobilienbewertung ist kostenfrei. Kosten entstehen ausschließlich dann, wenn Sie uns anschließend verbindlich mit einer Vermittlung beauftragen und es zu einem erfolgreichen Verkauf kommt.',
    },
  ];

  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Kostenlose Immobilienbewertung Berlin, Brandenburg &amp; Umgebung
          </h1>
          <p className="text-lg text-muted-foreground">
            Erfahren Sie in wenigen Minuten, was Ihre Immobilie wirklich wert ist.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <aside className="lg:col-span-7 space-y-6 lg:sticky lg:top-24">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 lg:p-12 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Jetzt Immobilienwert kostenlos ermitteln
              </h2>
              <ul className="space-y-3 text-base text-muted-foreground mb-8">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Kostenlos &amp; unverbindlich</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Keine Weitergabe Ihrer Daten</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Persönliche Einschätzung statt Online-Rechner</span>
                </li>
              </ul>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/kontakt"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors text-center sm:w-auto sm:flex-1"
                >
                  Jetzt Immobilienbewertung starten
                </Link>
                <Link
                  href={`https://wa.me/493046690542?text=${encodeURIComponent(
                    'Hallo! Ich interessiere mich für eine kostenlose Immobilienbewertung.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[#25D366] px-6 py-4 text-base font-semibold text-white shadow-sm hover:bg-[#1EBE57] transition-colors text-center sm:w-auto sm:flex-1"
                >
                  Direkt per WhatsApp schreiben
                </Link>
              </div>
            </div>

            <section className="bg-card border border-border rounded-xl p-6 md:p-7 space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Unser Ablauf</h2>
              <p className="text-muted-foreground">So läuft die kostenlose Immobilienbewertung ab</p>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">1.</span>
                  <span>Sie starten die Bewertung</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">2.</span>
                  <span>Sie geben die wichtigsten Eckdaten an</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">3.</span>
                  <span>Wir analysieren Markt &amp; Vergleichsdaten</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">4.</span>
                  <span>Sie erhalten eine fundierte Einschätzung</span>
                </li>
              </ol>
              <p className="text-muted-foreground">Unkompliziert. Transparent. Auf Augenhöhe.</p>
            </section>
          </aside>

          <div className="lg:col-span-5 space-y-6">
            <section className="bg-card border border-border rounded-xl p-6 md:p-7 space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold">Warum unsere Bewertung?</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">Warum keine anonyme Online-Schätzung?</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Fantasiezahlen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Keine Marktkenntnis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Keine Einordnung</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-semibold">Unsere Immobilienbewertung</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Vergleich mit real verkauften Objekten</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Lage, Zustand &amp; Nachfrage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Marktentwicklung im direkten Umfeld</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-7 space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Für wen ist das relevant?</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Eigentümer mit Verkaufsabsicht</li>
                <li>Eigentümer zur Markt-Orientierung</li>
                <li>Erbengemeinschaften</li>
                <li>Kapitalanleger</li>
                <li>Eigentümer vor Finanzierung oder Umschuldung</li>
              </ul>
            </section>
          </div>
        </div>

        <section className="space-y-6">
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>
              Wenn man eine Immobilie besitzt, kommt irgendwann die Frage auf: Was ist sie heute eigentlich wert? Ob Verkauf,
              Erbe oder einfach zur Orientierung – eine realistische Einschätzung hilft bei jeder Entscheidung.
            </p>
            <p>
              Wir bieten Ihnen eine kostenlose Immobilienbewertung für Wohnungen und Häuser in Berlin und Brandenburg. Persönlich,
              nachvollziehbar und ohne Verpflichtungen.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Warum eine professionelle Immobilienbewertung den Unterschied macht
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Der Immobilienmarkt verändert sich ständig. Angebotspreise, Nachfrage und regionale Unterschiede können den tatsächlichen
              Wert einer Immobilie deutlich beeinflussen. Eine professionelle Immobilienbewertung schafft Klarheit und hilft, fundierte
              Entscheidungen zu treffen unabhängig davon, ob ein Verkauf unmittelbar geplant ist oder nicht.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Unsere Bewertung basiert nicht nur auf automatisierten Rechnern, sondern auch auf realen Marktdaten, tatsächlich erzielten
              Verkaufspreisen und einer individuellen Betrachtung Ihrer Immobilie. So entsteht eine Einschätzung, die realistisch,
              nachvollziehbar und am Markt durchsetzbar ist.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">Ehrlich. Persönlich. Ohne Verkaufsdruck.</h2>
            <p className="text-muted-foreground leading-relaxed">
              Wir legen großen Wert auf Transparenz und Fairness. Deshalb sagen wir Ihnen auch offen, ob ein Verkauf aktuell keinen Sinn ergibt
              oder ein anderes Vorgehen sinnvoller ist.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Keine Verpflichtungen.</li>
              <li>Keine Weitergabe Ihrer Daten.</li>
              <li>Keine unrealistischen Versprechen.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Kostenlose Immobilienbewertung mit regionaler Marktkenntnis
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Unsere Bewertungen berücksichtigen die Besonderheiten des jeweiligen Standorts. Von der Mikrolage über die Nachfrage bis hin zur
              aktuellen Marktentwicklung. Das ist besonders entscheidend, da sich Immobilienpreise je nach Stadtteil, Umgebung und Nutzung stark
              unterscheiden können.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sie erhalten eine fundierte Einschätzung, die Ihnen als verlässliche Entscheidungsgrundlage dient, ganz gleich, ob es um Verkauf,
              Vermögensplanung, Erbschaft oder Finanzierung geht.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">FAQ – Kostenlose Immobilienbewertung</h2>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-lg border border-border bg-card px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  <span>{item.question}</span>
                  <span className="text-muted-foreground transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
