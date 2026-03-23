import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutz und Informationen zur Datenverarbeitung von ImmoPal UG (haftungsbeschränkt).',
  alternates: {
    canonical: `${siteUrl}/datenschutz/`,
  },
  openGraph: {
    title: 'Datenschutz - ImmoPal',
    description: 'Datenschutz und Informationen zur Datenverarbeitung von ImmoPal UG (haftungsbeschränkt).',
    url: `${siteUrl}/datenschutz/`,
  },
  twitter: {
    title: 'Datenschutz - ImmoPal',
    description: 'Datenschutz und Informationen zur Datenverarbeitung von ImmoPal UG (haftungsbeschränkt).',
  },
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Datenschutz</h1>

        <div className="mb-10 rounded-xl border border-border bg-card p-6">
          <div className="text-sm text-muted-foreground space-y-1">
            <div>Genfenbergstraße 23, 13595 Berlin</div>
            <div>
              Telefon:{' '}
              <a href="tel:+493046690542" className="hover:text-primary transition-colors">
                030 46690542
              </a>
            </div>
            <div>
              E-Mail:{' '}
              <a href="mailto:info@immo-pal.de" className="hover:text-primary transition-colors">
                info@immo-pal.de
              </a>
            </div>
          </div>
        </div>

        <div className="prose prose-gray max-w-none space-y-8">
          <p className="text-sm text-muted-foreground">Stand: 07. März 2026</p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick &amp; Verantwortliche Stelle</h2>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:</p>
            <p>
              ImmoPal UG (haftungsbeschränkt)
              <br />
              Genfenbergstraße 23, 13595 Berlin
              <br />
              Telefon: 030 46690542
              <br />
              E-Mail: info@immo-pal.de
              <br />
              Vertreten durch den Geschäftsführer: Kya Bayat
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Datenschutzbeauftragter</h2>
            <p>
              Aufgrund der Größe unseres Unternehmens und der Art der Datenverarbeitung besteht derzeit keine gesetzliche
              Verpflichtung zur Bestellung eines Datenschutzbeauftragten gemäß Art. 37 DSGVO in Verbindung mit § 38 BDSG.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Hosting</h2>
            <p>Unsere Website wird bei folgendem Anbieter gehostet:</p>
            <p>
              IONOS SE
              <br />
              Elgendorfer Straße 57
              <br />
              56410 Montabaur
              <br />
              Deutschland
            </p>
            <p>
              IONOS stellt die technische Infrastruktur zum Betrieb dieser Website bereit. Beim Aufruf unserer Website
              erfasst und speichert IONOS automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser
              automatisch übermittelt. Hierzu gehören insbesondere:
            </p>
            <ul>
              <li>IP-Adresse des anfragenden Geräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL (zuvor besuchte Seite)</li>
              <li>Hostname des zugreifenden Rechners</li>
            </ul>
            <p>
              Die Verarbeitung dieser Daten erfolgt zur Sicherstellung eines störungsfreien Betriebs der Website sowie zur
              Gewährleistung der Systemsicherheit. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an einer sicheren und stabilen Bereitstellung unseres Online-Angebots). Wir haben mit IONOS einen
              Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO abgeschlossen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. Datenerfassung auf unserer Website (Cookies &amp; Consent-Management)
            </h2>
            <h3 className="text-xl font-semibold mb-3">Cookies und Cookie-Einwilligungsmanagement</h3>
            <p>
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert
              werden und die Ihr Browser speichert. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und
              sicherer zu machen.
            </p>
            <p>
              Zur Verwaltung der eingesetzten Cookies und ähnlicher Technologien sowie der diesbezüglichen Einwilligungen
              nutzen wir das Consent-Management-Tool CCM19. Anbieter ist:
            </p>
            <p>
              Papoo Software &amp; Media GmbH
              <br />
              Auguststr. 4
              <br />
              53229 Bonn
              <br />
              Deutschland
            </p>
            <p>
              CCM19 ermöglicht es uns, Ihre Einwilligung zur Speicherung bestimmter Cookies auf Ihrem Endgerät
              einzuholen und diese datenschutzkonform zu dokumentieren. Wenn Sie unsere Website betreten, wird eine
              Verbindung zu den Servern von CCM19 hergestellt, um Ihre Einwilligungen und weitere Erklärungen zur
              Cookie-Nutzung einzuholen.
            </p>
            <p>
              CCM19 blockiert einwilligungspflichtige Skripte und Technologien bis zur entsprechenden Auswahl im
              Consent-Banner grundsätzlich.
            </p>
            <p>
              CCM19 speichert anschließend ein Cookie in Ihrem Browser, um die von Ihnen erteilten Einwilligungen
              oder deren Widerruf zuordnen zu können. Die so erfassten Daten werden gespeichert, bis Sie uns zur Löschung
              auffordern, das Cookie selbst löschen oder der Zweck für die Datenspeicherung entfällt.
            </p>
            <p>
              Die Nutzung von CCM19 erfolgt, um die gesetzlich vorgeschriebenen Einwilligungen für den Einsatz von
              Cookies einzuholen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. c DSGVO.
            </p>
            <p>
              Allgemeiner Hinweis zu Cookies (TDDDG &amp; DSGVO): Das Speichern von Informationen in Ihrer Endeinrichtung
              (z.B. durch Cookies) oder der Zugriff auf Informationen, die bereits in Ihrer Endeinrichtung gespeichert
              sind, erfolgt auf Grundlage von § 25 Abs. 1 TDDDG nur mit Ihrer ausdrücklichen Einwilligung. Ausgenommen
              hiervon sind technisch zwingend erforderliche Cookies, deren Einsatz nach § 25 Abs. 2 TDDDG legitimiert
              ist. Sofern durch Cookies personenbezogene Daten verarbeitet werden, stützen wir uns bei essenziellen
              Cookies auf Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) und bei Analyse-/Marketing-Cookies auf Art.
              6 Abs. 1 lit. a DSGVO (Ihre jederzeit widerrufbare Einwilligung).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              5. Kontaktformulare, Immobilienanfragen &amp; Immobilienbewertung
            </h2>
            <p>
              Wenn Sie uns kontaktieren oder unsere Immobilienbewertung nutzen, verarbeiten wir Ihre Angaben (Name,
              E-Mail, Telefon, Objektdaten) zur Bearbeitung der Anfrage und zur Erstellung der Ersteinschätzung.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen). Die von
              Ihnen übermittelten Daten verbleiben bei uns, bis der Zweck der Speicherung entfällt oder Sie uns zur
              Löschung auffordern.
            </p>
            <p>
              Sofern sich aus Ihrer Anfrage kein Vertragsverhältnis ergibt, werden Ihre Daten in der Regel spätestens
              nach sechs Monaten gelöscht. Daten im Zusammenhang mit konkreten Immobilienanfragen können im Einzelfall
              länger gespeichert werden, soweit dies zur Durchführung der Immobilienvermittlung oder zur Wahrung
              rechtlicher Ansprüche erforderlich ist. Gesetzliche Aufbewahrungspflichten bleiben unberührt.
            </p>
            <p>
              (Hinweis Transparenzpflicht gem. KI-VO): Sollten bei der Generierung der Immobilienbewertung automatisierte
              und KI-gestützte Verfahren zum Einsatz kommen, weisen wir gemäß Art. 50 KI-VO ausdrücklich darauf hin, dass
              das Ergebnis (z.B. der geschätzte Immobilienwert) künstlich erzeugt wurde und lediglich eine algorithmische
              Marktschätzung darstellt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Datenverarbeitung zur Geldwäscheprävention (GwG)</h2>
            <p>
              Als Immobilienmakler sind wir nach § 2 Abs. 1 Nr. 14 Geldwäschegesetz (GwG) verpflichtet, bei bestimmten
              Rechtsgeschäften (z.B. Immobilienkaufverträge oder Mietverträge über 10.000 € monatlich) Ihre Identität
              festzustellen.
            </p>
            <p>
              Gemäß § 11a GwG in Verbindung mit Art. 13 DSGVO weisen wir Sie ausdrücklich darauf hin, dass wir Ihre
              personenbezogenen Daten (insbesondere Kopien Ihres Personalausweises oder Reisepasses sowie Informationen
              zur Herkunft von Vermögenswerten) ausschließlich zum Zwecke der Geldwäscheprävention verarbeiten.
            </p>
            <p>
              Die Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. c DSGVO i.V.m. den entsprechenden Normen
              des GwG. Die nach dem GwG erhobenen Daten und Dokumente (insb. Ausweiskopien) müssen nach § 8 Abs. 4 GwG
              zwingend für fünf Jahre aufbewahrt werden und dürfen vor Ablauf dieser Frist nicht gelöscht werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              7. Datenweitergabe und internationale Datentransfers (EU-US DPF)
            </h2>
            <p>
              Wir setzen teilweise Dienstleister ein, die ihren Sitz in Drittstaaten außerhalb des Europäischen
              Wirtschaftsraums (EWR) haben (insb. USA und Israel). Für Datenübermittlungen an zertifizierte
              US-Dienstleister (wie Meta, Google, Microsoft) stützen wir uns auf den Angemessenheitsbeschluss der
              EU-Kommission für die USA, das sogenannte &quot;EU-US Data Privacy Framework (DPF)&quot;.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. CRM-System monday.com</h2>
            <p>
              Zur Kundenverwaltung nutzen wir monday.com (monday.com Ltd., Tel Aviv, Israel). Für Israel liegt ein
              Angemessenheitsbeschluss der Europäischen Kommission vor. Sofern monday.com weitere Unterauftragsverarbeiter
              in Drittstaaten ohne Angemessenheitsbeschluss einsetzt, erfolgt die Datenübermittlung dorthin auf Basis
              vertraglicher Garantien, insbesondere durch den Abschluss von EU-Standardvertragsklauseln (SCCs).
            </p>
            <p>
              Weitere Informationen zum Datenschutz bei monday.com finden Sie unter:{' '}
              <a
                href="https://monday.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://monday.com/privacy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Analyse, Marketing &amp; Drittanbieter</h2>
            <ul>
              <li>
                Google Analytics &amp; Google Ads (Google Ireland Limited / Google LLC, USA): Nutzen wir nur nach Ihrer
                ausdrücklichen Einwilligung (§ 25 Abs. 1 TDDDG i.V.m. Art. 6 Abs. 1 lit. a DSGVO). Der Datentransfer in
                die USA ist durch das EU-US DPF abgesichert. Weitere Informationen:{' '}
                Zusätzlich nutzen wir den Google Consent Mode v2 mit datenschutzfreundlichen Standardeinstellungen
                (standardmäßig verweigerte Einwilligungssignale), bis Sie eine Auswahl im Consent-Tool treffen.
                <br />
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://policies.google.com/privacy
                </a>
                .
              </li>
              <li>
                Meta Pixel (Meta Platforms Ireland Limited / Meta Platforms Inc., USA): Setzen wir nur nach Ihrer
                vorherigen Einwilligung (§ 25 Abs. 1 TDDDG i.V.m. Art. 6 Abs. 1 lit. a DSGVO) ein, um die Wirksamkeit
                von Werbeanzeigen zu messen. Mit Meta Platforms Ireland Limited besteht eine gemeinsame Verantwortlichkeit
                nach Art. 26 DSGVO. Der Datentransfer in die USA ist durch das EU-US DPF abgesichert. Weitere
                Informationen:{' '}
                <a
                  href="https://www.facebook.com/privacy/policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://www.facebook.com/privacy/policy
                </a>
                .
              </li>
              <li>
                Microsoft Application Insights: Setzen wir zur Fehleranalyse der Website ein. Die Microsoft Corporation
                in den USA ist unter dem EU-US DPF zertifiziert. Weitere Informationen:{' '}
                <a
                  href="https://privacy.microsoft.com/de-de/privacystatement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://privacy.microsoft.com/de-de/privacystatement
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Kommunikation über WhatsApp</h2>
            <p>
              Wenn Sie uns per WhatsApp kontaktieren, erfolgt dies auf Ihre eigene Initiative. Wir weisen darauf hin,
              dass WhatsApp (Meta) Metadaten der Kommunikation verarbeitet und in die USA (abgesichert über das DPF)
              übertragen kann.
            </p>
            <p>
              Wir nutzen Maßnahmen (z.B. Trennung der Adressbücher), um den unautorisierten Abgleich von Kontaktdaten
              Dritter zu verhindern. Weitere Informationen:{' '}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://www.whatsapp.com/legal/privacy-policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
              erkennen Sie daran, dass die Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot;
              wechselt und ein Schloss-Symbol angezeigt wird.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Löschfristen und Aufbewahrungspflichten</h2>
            <p>
              Ihre Daten werden gelöscht, sobald der Zweck der Speicherung entfällt und Sie Ihre Einwilligung widerrufen
              oder die Löschung verlangen (Art. 17 DSGVO), sofern keine gesetzlichen Aufbewahrungsfristen entgegenstehen.
              Zwingende gesetzliche Aufbewahrungsfristen für uns sind:
            </p>
            <ul>
              <li>10 Jahre: Steuerrelevante Dokumente und Rechnungen (§ 147 Abs. 3 AO).</li>
              <li>6 Jahre: Handels- und Geschäftsbriefe (§ 257 Abs. 4 HGB).</li>
              <li>
                5 Jahre: Alle zur Geldwäscheprävention erhobenen Identifikations- und Überprüfungsdaten (§ 8 Abs. 4 GwG).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              13. Ihre Rechte als betroffene Person + Art. 21 Widerspruch
            </h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO),
              Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO) sowie auf
              Datenübertragbarkeit (Art. 20 DSGVO). Wenn Sie uns eine Einwilligung erteilt haben, können Sie diese
              jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>
            <p>
              Zudem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde (z. B. der Berliner
              Beauftragten für Datenschutz und Informationsfreiheit) zu. Eine Liste der Behörden finden Sie hier:{' '}
              <a
                href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
              </a>
              .
            </p>
            <p className="font-semibold">Besonderer Hinweis auf Ihr Widerspruchsrecht (Art. 21 DSGVO)</p>
            <p>
              Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die
              Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 lit. f DSGVO
              (Datenverarbeitung auf Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen. Richten sich
              Ihre Daten gegen Direktwerbung, haben Sie ein generelles Widerspruchsrecht, das ohne Angabe von Gründen
              von uns umgesetzt wird.
            </p>
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
