import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Angaben von ImmoPal UG (haftungsbeschränkt).',
  alternates: {
    canonical: `${siteUrl}/impressum/`,
  },
  openGraph: {
    title: 'Impressum - ImmoPal',
    description: 'Impressum und rechtliche Angaben von ImmoPal UG (haftungsbeschränkt).',
    url: `${siteUrl}/impressum/`,
  },
  twitter: {
    title: 'Impressum - ImmoPal',
    description: 'Impressum und rechtliche Angaben von ImmoPal UG (haftungsbeschränkt).',
  },
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>

        <div className="mb-10 rounded-xl border border-border bg-card p-6">
          <div className="text-sm text-muted-foreground space-y-1">
            <div>Genfenbergstraße 23, 13595 Berlin</div>
            <div>
              Phone:{' '}
              <a href="tel:+493046690542" className="hover:text-primary transition-colors">
                030 46690542
              </a>
            </div>
            <div>
              Mail:{' '}
              <a href="mailto:info@immo-pal.de" className="hover:text-primary transition-colors">
                info@immo-pal.de
              </a>
            </div>
          </div>
        </div>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG:</h2>
            <p>
              ImmoPal UG (haftungsbeschränkt)
              <br />
              Genfenbergstraße 23
              <br />
              13595 Berlin
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Vertreten durch:</h2>
            <p>ImmoPal UG vertreten durch den Geschäftsführer Herrn Kya Bayat</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Kontakt:</h2>
            <p>
              Telefon: <strong>03046690542</strong>
              <br />
              E-Mail:{' '}
              <a href="mailto:info@immo-pal.de" className="text-primary hover:underline">
                info@immo-pal.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Registereintrag:</h2>
            <p>
              Eintragung im Handelsregister.
              <br />
              Registergericht: Amtsgericht Charlottenburg
              <br />
              Registernummer: HRB 283589 B
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer:</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DEXXXXX (folgt) (in Gründung)
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Aufsichtsbehörde:</h2>
            <p>
              Bezirksamt Spandau von Berlin
              <br />
              Postfach 350701
              <br />
              13578 Berlin
              <br />
              <a
                href="https://www.berlin.de/ba-spandau/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://www.berlin.de/ba-spandau/
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Berufsbezeichnung und berufsrechtliche Regelungen:</h2>
            <p>
              Berufsbezeichnung: Immobilienmakler und Immobilienverwalter
              <br />
              Es gelten folgende berufsrechtliche Regelungen: Gewerbeordnung § 34c Makler, Bauträger, Baubetreuer
              <br />
              Regelungen einsehbar unter:{' '}
              <a
                href="http://www.gesetze-im-internet.de/gewo/__34c.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                http://www.gesetze-im-internet.de/gewo/__34c.html
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Angaben zur Berufshaftpflichtversicherung:</h2>
            <p>
              Name und Sitz des Versicherers:
              <br />
              Folg (in Gründung)
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
            <p>
              ImmoPal UG (haftungsbeschränkt), Kya Bayat, Genfenbergstraße 23, 13595 Berlin
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Streitschlichtung:</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://www.ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://www.ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Haftung für Inhalte:</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
              eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
              jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
              entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Haftung für Links:</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Urheberrecht:</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
              von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Fotos und Film:</h2>
            <p>Dennis Darwiche, Kya Bayat</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Gestaltung und Umsetzung:</h2>
            <p>Dennis Darwiche, Kya Bayat, Tarik Marshall</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Digitalisierung und Entwicklung:</h2>
            <p>Dennis Darwiche, Kya Bayat, Tarik Marshall</p>
          </section>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Kontakt aufnehmen
          </Link>
          <Link
            href="/kaufen"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-8 py-3 text-sm font-semibold hover:bg-muted transition-colors"
          >
            Suchauftrag erstellen
          </Link>
        </div>
      </div>
    </main>
  );
}
