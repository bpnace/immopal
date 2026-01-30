import Link from 'next/link';
import Script from 'next/script';
import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: 'Immobilie empfehlen & 20% Provision sichern',
  description:
    'Kennen Sie jemanden, der eine Immobilie verkaufen möchte? Ein Tipp genügt, wir übernehmen den Verkauf.',
  alternates: {
    canonical: `${siteUrl}/tippgeber-immobilien-berlin/`,
  },
  openGraph: {
    title: 'Immobilie empfehlen & 20% Provision sichern - ImmoPal',
    description:
      'Kennen Sie jemanden, der eine Immobilie verkaufen möchte? Ein Tipp genügt, wir übernehmen den Verkauf.',
    url: `${siteUrl}/tippgeber-immobilien-berlin/`,
  },
  twitter: {
    title: 'Immobilie empfehlen & 20% Provision sichern - ImmoPal',
    description:
      'Kennen Sie jemanden, der eine Immobilie verkaufen möchte? Ein Tipp genügt, wir übernehmen den Verkauf.',
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

export default function TippgeberLandingPage() {
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

  return (
    <>
      <Script
        id="faq-schema-tippgeber"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-background">
      <section className="bg-primary/5 py-12 min-h-[220px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Immobilie empfehlen &amp; 20% Provision sichern</h1>
            <p className="text-lg text-muted-foreground">
              Kennen Sie jemanden, der eine Immobilie verkaufen möchte?
              <br />
              Ein Tipp genügt, wir übernehmen den Verkauf, Sie erhalten Ihre Provision.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-10">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-3xl p-10 md:p-12 shadow-xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">So einfach gehts</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-5 rounded-2xl border-2 border-border bg-card p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-foreground">Tipp abgeben</p>
                    <p className="text-sm text-muted-foreground">Tipp abgeben über Kontakt-Button</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 rounded-2xl border-2 border-border bg-card p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-foreground">Wir nehmen Kontakt auf</p>
                    <p className="text-sm text-muted-foreground">Wir nehmen Kontakt auf und vermitteln die Immobilie</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 rounded-2xl border-2 border-border bg-card p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-foreground">Provision erhalten</p>
                    <p className="text-sm text-muted-foreground">Sie erhalten Ihre Provision</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/verkaufen"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors sm:flex-1"
                >
                  Jetzt Tipp abgeben
                </Link>
                <a
                  href={`https://wa.me/493046690542?text=${encodeURIComponent(
                    'Hallo! Ich möchte eine Immobilie empfehlen.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white hover:bg-[#1EBE57] transition-colors sm:flex-1"
                >
                  Per WhatsApp empfehlen
                </a>
              </div>
            </div>

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

          <aside className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Ihre Vorteile</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground">Garantierte 20 % unserer Netto-Maklerprovision für Sie</span>
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
                  <span className="text-muted-foreground">Auszahlung nach dem Notartermin</span>
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
                  <span className="text-muted-foreground">
                    Kein Aufwand für Sie – wir kümmern uns um Bewertung, Vermarktung &amp; Verkauf
                  </span>
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
                  <span className="text-muted-foreground">Diskret &amp; auf Wunsch anonym</span>
                </li>
              </ul>
            </div>

          </aside>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">FAQ – Immobilien Tippgeber &amp; Provision</h2>
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
      </section>
      </main>
    </>
  );
}
