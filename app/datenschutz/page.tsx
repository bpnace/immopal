import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datenschutz - immopal',
  description: 'Datenschutz und Informationen zur Datenverarbeitung von Immo-Pal UG (haftungsbeschränkt)',
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
            <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-xl font-semibold mb-3">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
              unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Datenerfassung auf unserer Website</h3>

            <p className="font-semibold">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können
              Sie dem{' '}
              <Link href="/impressum" className="text-primary hover:underline">
                Impressum
              </Link>{' '}
              dieser Website entnehmen.
            </p>

            <p className="font-semibold mt-4">Wie erfassen wir Ihre Daten?</p>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um
              Daten handeln, die Sie in ein Kontaktformular oder einen anderen Dialog zur Datenerfassung eingeben.
              Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
              allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
              Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.
            </p>

            <p className="font-semibold mt-4">Wofür nutzen wir Ihre Daten?</p>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
              Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <p className="font-semibold mt-4">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
            <p>
              Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung,
              Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
              können Sie sich jederzeit unter der im{' '}
              <Link href="/impressum" className="text-primary hover:underline">
                Impressum
              </Link>{' '}
              angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Analyse-Tools und Tools von Drittanbietern</h3>
            <p>
              Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor
              allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der
              Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden. Sie können dieser Analyse
              widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen
              dazu finden Sie in der folgenden Datenschutzerklärung. Sie können dieser Analyse widersprechen. Über die
              Widerspruchsmöglichkeiten werden wir Sie in dieser Datenschutzerklärung informieren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="text-xl font-semibold mb-3">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie
              dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten
              erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die
              vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie
              erläutert auch, wie und zu welchem Zweck das geschieht. Wir weisen darauf hin, dass die Datenübertragung
              im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser
              Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p>
              Immo-Pal UG (haftungsbeschränkt)
              <br />
              Genfenbergstraße 23
              <br />
              13595 Berlin
              <br />
              Telefon: 030 46690542
              <br />
              Mail:{' '}
              <a href="mailto:info@immo-pal.de" className="text-primary hover:underline">
                info@immo-pal.de
              </a>
            </p>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen
              über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o.
              Ä.) entscheidet.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
              bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an
              uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p>
              Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der
              Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz hat. Eine Liste der
              Datenschutzbeauftragten sowie deren Kontaktdaten können folgendem Link entnommen werden:{' '}
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

            <h3 className="text-xl font-semibold mb-3 mt-6">Recht auf Datenübertragbarkeit</h3>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
              automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
              aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
              verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">SSL- bzw. TLS-Verschlüsselung</h3>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
              Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers
              von “http://” auf “https://” wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw.
              TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten
              mitgelesen werden.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Verschlüsselter Zahlungsverkehr auf dieser Website</h3>
            <p>
              Besteht nach dem Abschluss eines kostenpflichtigen Vertrags eine Verpflichtung, uns Ihre Zahlungsdaten
              (z.B. Kontonummer bei Einzugsermächtigung) zu übermitteln, werden diese Daten zur Zahlungsabwicklung
              benötigt. Der Zahlungsverkehr über die gängigen Zahlungsmittel (Visa/MasterCard, Lastschriftverfahren)
              erfolgt ausschließlich über eine verschlüsselte SSL- bzw. TLS-Verbindung. Eine verschlüsselte Verbindung
              erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem
              Schloss-Symbol in Ihrer Browserzeile. Bei verschlüsselter Kommunikation können Ihre Zahlungsdaten, die Sie
              an uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Auskunft, Sperrung, Löschung</h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
              Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
              Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie
              zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im{' '}
              <Link href="/impressum" className="text-primary hover:underline">
                Impressum
              </Link>{' '}
              angegebenen Adresse an uns wenden.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Widerspruch gegen Werbe-Mails</h3>
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht
              ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber
              der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
              Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Datenerfassung auf unserer Website</h2>

            <h3 className="text-xl font-semibold mb-3">Cookies</h3>
            <p>
              Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen
              Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver
              und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die
              Ihr Browser speichert. Die meisten der von uns verwendeten Cookies sind so genannte “Session-Cookies”.
              Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät
              gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch
              wiederzuerkennen. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert
              werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell
              ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der
              Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein. Cookies, die zur
              Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen
              erwünschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von
              Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies
              (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser
              Datenschutzerklärung gesondert behandelt.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
              die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage für die
              Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung von Daten zur Erfüllung eines
              Vertrags oder vorvertraglicher Maßnahmen gestattet.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              Kontaktformulare zur Datenerfassung u.a. Dialoge, Selbstauskünfte und Terminanfragen
            </h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die
              Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage
              Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu
              reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
              Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt. Die von Ihnen im Kontaktformular eingegebenen
              Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen
              oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
              Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Verarbeiten von Daten (Kunden- und Vertragsdaten)</h3>
            <p>
              Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung,
              inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten). Dies
              erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines
              Vertrags oder vorvertraglicher Maßnahmen gestattet. Personenbezogene Daten über die Inanspruchnahme
              unserer Internetseiten (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich
              ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen. Die erhobenen
              Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung gelöscht.
              Gesetzliche Aufbewahrungsfristen bleiben unberührt.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              Datenübermittlung bei Vertragsschluss für Dienstleistungen und digitale Inhalte
            </h3>
            <p>
              Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung
              notwendig ist, etwa an das mit der Zahlungsabwicklung beauftragte Kreditinstitut. Eine weitergehende
              Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der Übermittlung ausdrücklich zugestimmt
              haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche Einwilligung, etwa zu Zwecken der Werbung,
              erfolgt nicht. Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung
              von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Soziale Medien</h2>
            <p>
              Auf unseren Seiten sind Plugins des sozialen Netzwerks Facebook, Anbieter Facebook Inc., 1 Hacker Way,
              Menlo Park, California 94025, USA, integriert. Die Facebook-Plugins erkennen Sie an dem Facebook-Logo oder
              dem "Like-Button" ("Gefällt mir") auf unserer Seite. Eine Übersicht über die Facebook-Plugins finden Sie
              hier:{' '}
              <a
                href="https://developers.facebook.com/docs/plugins/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://developers.facebook.com/docs/plugins/
              </a>
              . Wenn Sie unsere Seiten besuchen, wird über das Plugin eine direkte Verbindung zwischen Ihrem Browser und
              dem Facebook-Server hergestellt. Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse
              unsere Seite besucht haben. Wenn Sie den Facebook "Like-Button" anklicken während Sie in Ihrem
              Facebook-Account eingeloggt sind, können Sie die Inhalte unserer Seiten auf Ihrem Facebook-Profil
              verlinken. Dadurch kann Facebook den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf
              hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren
              Nutzung durch Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von
              Facebook unter:{' '}
              <a
                href="https://de-de.facebook.com/policy.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://de-de.facebook.com/policy.php
              </a>
              . Wenn Sie nicht wünschen, dass Facebook den Besuch unserer Seiten Ihrem Facebook-Nutzerkonto zuordnen
              kann, loggen Sie sich bitte aus Ihrem Facebook-Benutzerkonto aus.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Analyse Tools und Werbung</h2>

            <h3 className="text-xl font-semibold mb-3">Google Analytics</h3>
            <p>
              Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Inc.,
              1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Google Analytics verwendet so genannte "Cookies".
              Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der
              Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser
              Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Die
              Speicherung von Google-Analytics-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
              Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein
              Webangebot als auch seine Werbung zu optimieren.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">IP Anonymisierung</h3>
            <p>
              Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von
              Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens
              über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird
              die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des
              Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website
              auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung
              und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im
              Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von
              Google zusammengeführt.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Browser Plugin</h3>
            <p>
              Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software
              verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
              Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der
              durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an
              Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link
              verfügbare Browser-Plugin herunterladen und installieren:{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://tools.google.com/dlpage/gaoptout?hl=de
              </a>
              .
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Widerspruch gegen Datenerfassung</h3>
            <p>
              Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link
              klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen dieser
              Website verhindert: Google Analytics deaktivieren. Mehr Informationen zum Umgang mit Nutzerdaten bei Google
              Analytics finden Sie in der Datenschutzerklärung von Google:{' '}
              <a
                href="https://support.google.com/analytics/answer/6004245?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://support.google.com/analytics/answer/6004245?hl=de
              </a>
              .
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Auftragsdatenverarbeitung</h3>
            <p>
              Wir haben mit Google einen Vertrag zur Auftragsdatenverarbeitung abgeschlossen und setzen die strengen
              Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Demografische Merkmale bei Google Analytics</h3>
            <p>
              Diese Website nutzt die Funktion “demografische Merkmale” von Google Analytics. Dadurch können Berichte
              erstellt werden, die Aussagen zu Alter, Geschlecht und Interessen der Seitenbesucher enthalten. Diese Daten
              stammen aus interessenbezogener Werbung von Google sowie aus Besucherdaten von Drittanbietern. Diese Daten
              können keiner bestimmten Person zugeordnet werden. Sie können diese Funktion jederzeit über die
              Anzeigeneinstellungen in Ihrem Google-Konto deaktivieren oder die Erfassung Ihrer Daten durch Google
              Analytics wie im Punkt “Widerspruch gegen Datenerfassung” dargestellt generell untersagen.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Application Insights</h3>

            <h4 className="text-lg font-semibold mb-2">Microsoft Application Insights</h4>
            <p>
              Wir setzen auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und
              wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Application
              Insights, einen Webanalysedienst der Microsoft Corporation, One Microsoft Way, Redmond, WA 98052-6399, USA
              („Microsoft“) ein.
            </p>
            <p>
              Application Insights legt in Ihrem Browser ein Cookie ab, das eine Analyse der Benutzung der Webseite durch
              Sie ermöglicht. Die durch das Cookie erzeugten Informationen über die Benutzung unserer Webseite werden in
              der Regel an einen Server von Microsoft in den USA übertragen und dort gespeichert. In unserem Auftrag als
              Webseitenbetreiber wird Microsoft diese Informationen benutzen, um Ihre Nutzung der Webseite auszuwerten,
              um Reports über die Webseitenaktivitäten zusammenzustellen und um weitere mit der Webseitennutzung und der
              Internetnutzung verbundene Dienstleistungen gegenüber uns als Webseitenbetreiber zu erbringen. Sie können
              das erforderliche Platzieren eines Cookies ablehnen - z.B. durch eine Einstellung in Ihrem Browser, die das
              automatische Setzen von Cookies generell deaktiviert oder Ihren Browser so einstellen, dass Cookies von
              Microsoft blockiert werden. In diesem Fall kann es jedoch sein, dass Ihnen nicht sämtliche Funktionen
              unserer Webseite vollumfänglich zur Verfügung stehen.
            </p>
            <p>Durch die Nutzung von Application Insights können zusätzlich folgende Daten erhoben werden:</p>
            <ul>
              <li>Betriebssystem</li>
              <li>Browser + Version</li>
              <li>Bildschirmauflösung</li>
              <li>Ungefährer Standort des Benutzers</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Wir haben die Möglichkeit, diese Daten mittels verschiedener Reports auszuwerten. Bei diesen Daten handelt
              es sich um anonyme statistische Daten. Die Herstellung eines Personenbezugs ist aufgrund dieser Daten nicht
              möglich. Die Auswertungen dienen sämtlich der Fehlerbehebung und Optimierung der Webseite und der Anwendung.
            </p>
            <p>
              Weitergehende Informationen von Microsoft zum Thema Datenschutz und Azure finden Sie unter:{' '}
              <a
                href="https://azure.microsoft.com/de-de/support/trust-center/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                http://azure.microsoft.com/de-de/support/trust-center/privacy/
              </a>{' '}
              sowie für Application Insights unter{' '}
              <a
                href="https://docs.microsoft.com/de-de/azure/application-insights/app-insights-data-retention-privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://docs.microsoft.com/de-de/azure/application-insights/app-insights-data-retention-privacy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Newsletter</h2>

            <h3 className="text-xl font-semibold mb-3">Newsletterdaten</h3>
            <p>
              Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine
              E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der
              angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten
              werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für den
              Versand der angeforderten Informationen und geben diese nicht an Dritte weiter. Die Verarbeitung der in das
              Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art.
              6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren
              Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den "Austragen"-Link im
              Newsletter. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf
              unberührt. Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu
              Ihrer Austragung aus dem Newsletter gespeichert und nach der Abbestellung des Newsletters gelöscht. Daten,
              die zu anderen Zwecken bei uns gespeichert wurden (z.B. E-Mail-Adressen für den Mitgliederbereich) bleiben
              hiervon unberührt.
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

