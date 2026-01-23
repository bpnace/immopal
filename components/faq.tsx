import Link from 'next/link';

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: 'Warum einen Immobilienmakler beauftragen?',
    answer:
      'Ein erfahrener Immobilienmakler übernimmt die realistische Marktpreiseinschätzung, erstellt ein professionelles Exposé, organisiert Besichtigungen, prüft die Bonität der Interessenten und führt die Verhandlungen. So verkaufen oder kaufen Sie Ihre Immobilie strukturiert, sicher und zum bestmöglichen Preis.',
  },
  {
    question: 'In welchen Regionen sind Sie tätig?',
    answer:
      'Unser Schwerpunkt liegt in Berlin und Brandenburg. Darüber hinaus verfügen wir über ein deutschlandweites Netzwerk und begleiten ausgewählte Immobilienprojekte auch überregional.',
  },
  {
    question: 'Wie läuft eine kostenlose Immobilienbewertung ab?',
    answer:
      'Bei der kostenlosen Immobilienbewertung analysieren wir Lage, Zustand, Wohnfläche, Vergleichspreise und die aktuelle Marktnachfrage. Sie erhalten eine realistische Einschätzung des Immobilienwerts sowie eine klare Empfehlung für das weitere Vorgehen.',
  },
  {
    question: 'Was ist die Maklerprovision und wer bezahlt sie?',
    answer:
      'Die Maklerprovision (Courtage) ist die Vergütung für unsere Vermittlungsleistung. In vielen Fällen wird sie zwischen Käufer und Verkäufer geteilt. Die konkrete Regelung hängt vom Objekt und dem individuellen Auftrag ab.',
  },
  {
    question: 'Welche Unterlagen benötige ich für den Verkauf einer Immobilie?',
    answer:
      'Typischerweise werden ein Grundbuchauszug, Energieausweis, Grundrisse, Wohnflächenberechnung sowie, bei Eigentumswohnungen, die Teilungserklärung und Protokolle der Eigentümerversammlungen benötigt. Wir unterstützen Sie bei der Beschaffung fehlender Unterlagen.',
  },
  {
    question: 'Wie lange dauert es, eine Immobilie zu verkaufen?',
    answer:
      'Die Dauer hängt von Lage, Preis und Vermarktungsstrategie ab. Mit professioneller Vorbereitung und gezielter Ansprache sind häufig wenige Wochen bis wenige Monate realistisch.',
  },
  {
    question: 'Bieten Sie auch einen Suchauftrag für Käufer an?',
    answer:
      'Ja. Mit einem Suchauftrag informieren wir Sie frühzeitig über passende Immobilienangebote. Sobald ein Objekt Ihren Kriterien entspricht, nehmen wir direkt Kontakt mit Ihnen auf.',
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
    <section className="py-16 bg-muted/30 home-section-divider">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ – Immobilienmakler, Bewertung & Verkauf</h2>
          <p className="text-muted-foreground text-lg max-w-5xl mx-auto">
Ob Wohnung kaufen, Haus verkaufen oder Immobilie bewerten:
Als erfahrener Immobilienmakler begleiten wir Sie in Berlin, Brandenburg und deutschlandweit – persönlich, transparent und effizient.
IMMOPAL ist Ihr Immobilienmakler für Berlin & Brandenburg mit deutschlandweitem Netzwerk. Wir unterstützen Eigentümer beim Verkauf von Wohnungen und Häusern sowie Käufer bei der Suche nach passenden Immobilien – transparent, effizient und persönlich.
Kostenlose Immobilienbewertung. Persönliche Beratung. Klare Ergebnisse.
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
