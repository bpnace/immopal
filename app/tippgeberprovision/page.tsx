import Script from 'next/script';
import { ReferralCalculator } from '@/components/referral-calculator';
import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: 'Tippgeberprovision Rechner',
  description:
    'Empfehlen Sie uns eine Immobilie und erhalten Sie 20% der Netto-Courtage. Berechnen Sie jetzt Ihre potenzielle Provision.',
  alternates: {
    canonical: `${siteUrl}/tippgeberprovision/`,
  },
  openGraph: {
    title: 'Tippgeberprovision Rechner - ImmoPal',
    description:
      'Empfehlen Sie uns eine Immobilie und erhalten Sie 20% der Netto-Courtage. Berechnen Sie jetzt Ihre potenzielle Provision.',
    url: `${siteUrl}/tippgeberprovision/`,
  },
  twitter: {
    title: 'Tippgeberprovision Rechner - ImmoPal',
    description:
      'Empfehlen Sie uns eine Immobilie und erhalten Sie 20% der Netto-Courtage. Berechnen Sie jetzt Ihre potenzielle Provision.',
  },
};

const faq = [
  {
    q: 'Was ist ein Immobilien-Tippgeber?',
    a: 'Ein Immobilien-Tippgeber gibt uns einen Hinweis auf eine Person, die eine Wohnung, ein Haus, eine Gewerbeeinheit oder ein Grundstück verkaufen möchte. Kommt es durch diesen Hinweis zu einem erfolgreichen Verkauf, erhalten Sie als Tippgeber eine Provision, ganz ohne eigenen Aufwand.',
  },
  {
    q: 'Wie hoch ist die Tippgeberprovision?',
    a: 'Die Tippgeberprovision beträgt 20 % der Netto-Maklerprovision. Voraussetzung ist, dass der Verkauf auf Basis Ihres Hinweises erfolgreich abgeschlossen wird.',
  },
  {
    q: 'Wie funktioniert das Tippgeber-Modell?',
    a: 'Sie geben uns einen Hinweis auf eine Immobilie mit Verkaufsabsicht. Wir übernehmen Beratung, Bewertung und Vermarktung. Nach erfolgreichem Verkauf (Notartermin) erhalten Sie Ihre Tippgeberprovision per Überweisung. Ohne Risiko. Ohne Aufwand.',
  },
  {
    q: 'Wann und wie erhalte ich meine Provision?',
    a: 'Die Auszahlung erfolgt nach dem notariellen Kaufvertragsabschluss, sobald die Maklerprovision bei uns eingegangen ist. Die Überweisung erfolgt transparent und nachvollziehbar auf Ihr Konto.',
  },
  {
    q: 'Ist mein Tipp vertraulich?',
    a: 'Ja. Auf Wunsch behandeln wir Ihren Hinweis vollständig diskret. Ihr Name wird nicht ohne Ihre Zustimmung gegenüber Dritten genannt.',
  },
  {
    q: 'Für welche Regionen gilt das Tippgeber-Modell?',
    a: 'Unser Fokus liegt auf Berlin und Brandenburg. Darüber hinaus begleiten wir auch ausgewählte Objekte deutschlandweit.',
  },
  {
    q: 'Welche Immobilien eignen sich für eine Empfehlung?',
    a: 'Geeignet sind Wohnungen, Ein- und Mehrfamilienhäuser, Grundstücke sowie Gewerbeimmobilien, bei denen eine konkrete Verkaufsabsicht besteht oder absehbar ist.',
  },
  {
    q: 'Warum ImmoPal als Partner für Tippgeber?',
    a: 'Wir kennen den regionalen Immobilienmarkt, arbeiten strukturiert und transparent und legen großen Wert auf eine faire Zusammenarbeit. Das erhöht die Verkaufschancen – und damit auch Ihre Chance auf eine erfolgreiche und zügige Provisionsauszahlung.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

export default function TippgeberprovisionPage() {
  return (
    <>
      <Script
        id="faq-schema-tippgeberprovision"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-background py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ReferralCalculator />
        </div>

        <section className="container mx-auto px-4 pt-16">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Warum sich ein Tipp wirklich lohnt</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fast jeder kennt jemanden, der überlegt, eine Immobilie zu verkaufen. Was viele nicht wissen: Ein guter
                Hinweis kann bares Geld wert sein.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sie geben uns den Kontakt – wir übernehmen den gesamten Verkaufsprozess.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Kommt es zum erfolgreichen Verkauf, erhalten Sie 20 % der Netto-Maklerprovision.
              </p>
              <p className="text-muted-foreground leading-relaxed">Ohne Verpflichtungen. Ohne Aufwand. Ohne Risiko.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Für wen ist das Tippgeber-Modell geeignet?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unser Tippgeber-Modell richtet sich an alle, die Kontakte haben – zum Beispiel:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Freunde oder Familienmitglieder</li>
                <li>Nachbarn oder Bekannte</li>
                <li>Handwerker, Dienstleister oder Hausverwaltungen</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Eine Maklererlaubnis ist nicht erforderlich. Es entstehen keine Verpflichtungen.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Transparenz &amp; Fairness sind bei uns Standard</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Klare Provisionsregelung</li>
                <li>Auszahlung nach erfolgreichem Verkauf</li>
                <li>Diskrete Behandlung Ihres Hinweises</li>
                <li>Keine Nennung Ihres Namens ohne Zustimmung</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Kurz gesagt: Sie empfehlen – wir liefern Ergebnisse.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-16 pt-12">
          <div className="max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">FAQ – Immobilien Tippgeber &amp; Provision</h2>
            <div className="space-y-3">
              {faq.map((item) => (
                <details key={item.q} className="group rounded-lg border border-border bg-card px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                    <span>{item.q}</span>
                    <span
                      className="text-muted-foreground transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
