import Link from 'next/link';

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: 'Warum einen Immobilienmakler in Berlin & Brandenburg beauftragen?',
    answer:
      'Ein erfahrener Immobilienmakler übernimmt Marktpreiseinschätzung, Exposé, Besichtigungen, Bonitätsprüfung und Verhandlungen. So verkaufen oder kaufen Sie Ihre Immobilie in Berlin & Brandenburg oft schneller und mit weniger Risiko.',
  },
  {
    question: 'Wie läuft eine kostenlose Immobilienbewertung ab?',
    answer:
      'Wir analysieren Lage, Zustand, Wohnfläche, Vergleichspreise und Nachfrage. Danach erhalten Sie eine realistische Einschätzung zum Immobilienwert und eine Empfehlung für die optimale Verkaufsstrategie.',
  },
  {
    question: 'Was ist die Maklerprovision und wer bezahlt sie?',
    answer:
      'Die Maklerprovision (Courtage) ist die Vergütung für die Vermittlungsleistung. In vielen Fällen wird sie zwischen Käufer und Verkäufer geteilt – die konkrete Regelung hängt vom Objekt und dem Auftrag ab.',
  },
  {
    question: 'Welche Unterlagen brauche ich, um eine Wohnung oder ein Haus zu verkaufen?',
    answer:
      'Typisch sind Grundbuchauszug, Energieausweis, Grundrisse, Wohnflächenberechnung, Teilungserklärung (bei Eigentumswohnung), Protokolle der Eigentümerversammlungen sowie ggf. Baubeschreibung und Nachweise über Modernisierungen.',
  },
  {
    question: 'Wie lange dauert es, eine Immobilie zu verkaufen?',
    answer:
      'Die Dauer hängt von Preis, Lage und Vermarktung ab. Mit professioneller Vorbereitung (Bewertung, Exposé, Zielgruppenansprache) sind oft wenige Wochen bis wenige Monate realistisch.',
  },
  {
    question: 'Bieten Sie auch einen Suchauftrag für Käufer an?',
    answer:
      'Ja. Mit einem Suchauftrag erhalten Sie passende Immobilienangebote frühzeitig. Teilen Sie uns Ihre Wünsche mit – wir melden uns, sobald ein Objekt in Berlin oder Brandenburg passt.',
  },
];

function buildFaqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function FaqSection() {
  const jsonLd = buildFaqJsonLd(faqItems);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ – Immobilienmakler, Bewertung & Verkauf</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Antworten auf häufige Fragen rund um Immobilienverkauf, Immobilienbewertung und Maklerprovision.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-lg border border-border bg-background px-5 py-4"
            >
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

        <div className="mt-10 text-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Kostenlose Immobilienbewertung
          </Link>
        </div>

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </section>
  );
}
