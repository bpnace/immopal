import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung - immopal',
  description: 'Datenschutzerklärung und Informationen zur Datenverarbeitung von immopal',
};

export default function DatenschutzPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>

          <h3 className="text-xl font-semibold mb-3">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
            Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Datenerfassung auf dieser Website</h3>
          <p className="font-semibold">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
            können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
          </p>

          <p className="font-semibold mt-4">Wie erfassen wir Ihre Daten?</p>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um
            Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>
          <p className="mt-2">
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
            IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder
            Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </p>

          <p className="font-semibold mt-4">Wofür nutzen wir Ihre Daten?</p>
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
            Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>

          <p className="font-semibold mt-4">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
            personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser
            Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese
            Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen
            die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
            Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
          <p className="mt-2">
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Hosting</h2>
          <p>
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Vercel</h3>
          <p>
            Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (nachfolgend „Vercel").
          </p>
          <p className="mt-2">
            Vercel ist ein Dienst zum Hosting von Webseiten. Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene
            Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie der Datenschutzerklärung von Vercel:{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              https://vercel.com/legal/privacy-policy
            </a>
          </p>
          <p className="mt-2">
            Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes
            Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung
            abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und
            § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im
            Endgerät des Nutzers (z.B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          </p>

          <h4 className="text-lg font-semibold mb-2 mt-4">Auftragsverarbeitung</h4>
          <p>
            Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen.
            Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser
            die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3 className="text-xl font-semibold mb-3">Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
            dieser Datenschutzerklärung.
          </p>
          <p className="mt-2">
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene
            Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung
            erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
          </p>
          <p className="mt-2">
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
            Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="mt-2">
            <strong>immopal Immobilienmakler</strong>
            <br />
            [Vorname Nachname]
            <br />
            [Straße Hausnummer]
            <br />
            [PLZ Stadt]
            <br />
            <br />
            Telefon: <a href="tel:+493012345678" className="text-primary hover:underline">+49 (0)30 123 456 78</a>
            <br />
            E-Mail: <a href="mailto:info@immopal.de" className="text-primary hover:underline">info@immopal.de</a>
          </p>
          <p className="mt-4">
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
            die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Speicherdauer</h3>
          <p>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre
            personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes
            Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
            sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben
            (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach
            Fortfall dieser Gründe.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p>
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
            bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
            Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
          <p>
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde,
            insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des
            mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
            gerichtlicher Rechtsbehelfe.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Recht auf Datenübertragbarkeit</h3>
          <p>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
            automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
            aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
            verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Auskunft, Berichtigung und Löschung</h3>
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
            Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
            der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
            weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Recht auf Einschränkung der Verarbeitung</h3>
          <p>
            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht
            in folgenden Fällen:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir
              in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung
              der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der
              Löschung die Einschränkung der Datenverarbeitung verlangen.
            </li>
            <li>
              Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder
              Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung
              der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren
              und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen,
              haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>
          </ul>
          <p className="mt-4">
            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer
            Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von
            Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus
            Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">SSL- bzw. TLS-Verschlüsselung</h3>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
            Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
            verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://"
            wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
          <p className="mt-2">
            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht
            von Dritten mitgelesen werden.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Datenerfassung auf dieser Website</h2>

          <h3 className="text-xl font-semibold mb-3">Cookies</h3>
          <p>
            Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf
            Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
            (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies
            werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
            gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
          </p>
          <p className="mt-2">
            Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies).
            Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb
            von Webseiten (z.B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
          </p>
          <p className="mt-2">
            Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte
            Webseitenfunktionen ohne diese nicht funktionieren würden (z.B. die Warenkorbfunktion oder die Anzeige
            von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
          </p>
          <p className="mt-2">
            Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter,
            von Ihnen erwünschter Funktionen (z.B. für die Warenkorbfunktion) oder zur Optimierung der Website
            (z.B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage
            von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der
            Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch
            fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von
            Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung
            ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG);
            die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="mt-2">
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies
            nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie
            das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von
            Cookies kann die Funktionalität dieser Website eingeschränkt sein.
          </p>
          <p className="mt-2">
            Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser Datenschutzerklärung entnehmen.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
            von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p className="mt-2">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
            mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
            erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
            der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="mt-2">
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
            auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
            (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere
            Aufbewahrungsfristen – bleiben unberührt.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Anfrage per E-Mail, Telefon oder Telefax</h3>
          <p>
            Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
            hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei
            uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p className="mt-2">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
            mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
            erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
            der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="mt-2">
            Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
            auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
            (z.B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere
            gesetzliche Aufbewahrungsfristen – bleiben unberührt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Analyse-Tools und Werbung</h2>

          <h3 className="text-xl font-semibold mb-3">Plausible Analytics</h3>
          <p>
            Diese Website nutzt Plausible Analytics. Anbieter ist die Plausible Insights OÜ, Västriku tn 2, 50403,
            Tartu, Estland (nachfolgend „Plausible").
          </p>
          <p className="mt-2">
            Plausible ist ein datenschutzfreundliches Webanalyse-Tool. Plausible verzichtet auf den Einsatz von
            Cookies und erfasst ausschließlich anonymisierte Daten. Eine Zuordnung zu einzelnen Nutzern findet
            nicht statt. Details entnehmen Sie der Datenschutzerklärung von Plausible:{' '}
            <a href="https://plausible.io/data-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              https://plausible.io/data-policy
            </a>
          </p>
          <p className="mt-2">
            Die Verwendung von Plausible erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber
            hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch
            seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
            Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit
            die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers
            (z.B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Plugins und Tools</h2>

          <h3 className="text-xl font-semibold mb-3">Google Maps</h3>
          <p>
            Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google"),
            Gordon House, Barrow Street, Dublin 4, Irland.
          </p>
          <p className="mt-2">
            Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese
            Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
            Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung. Wenn Google Maps aktiviert ist,
            kann Google zum Zwecke der einheitlichen Darstellung der Schriftarten Google Web Fonts verwenden. Beim
            Aufruf von Google Maps lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und
            Schriftarten korrekt anzuzeigen.
          </p>
          <p className="mt-2">
            Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote
            und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein
            berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende
            Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1
            lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff
            auf Informationen im Endgerät des Nutzers (z.B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
            Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="mt-2">
            Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details
            finden Sie hier:{' '}
            <a href="https://privacy.google.com/businesses/gdprcontrollerterms/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              https://privacy.google.com/businesses/gdprcontrollerterms/
            </a>
          </p>
          <p className="mt-2">
            Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google:{' '}
            <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              https://policies.google.com/privacy?hl=de
            </a>
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Calendly</h3>
          <p>
            Wir nutzen das Online-Terminbuchungstool Calendly. Anbieter ist Calendly LLC, 271 17th St NW, Ste 1000,
            Atlanta, Georgia 30363, USA (nachfolgend „Calendly").
          </p>
          <p className="mt-2">
            Calendly ermöglicht es Ihnen, online Termine mit uns zu vereinbaren. Wenn Sie einen Termin buchen,
            werden die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse, Telefonnummer, gewünschter Termin) an
            Calendly übermittelt und dort gespeichert. Details entnehmen Sie der Datenschutzerklärung von Calendly:{' '}
            <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              https://calendly.com/privacy
            </a>
          </p>
          <p className="mt-2">
            Die Nutzung von Calendly erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat
            ein berechtigtes Interesse an einer möglichst unkomplizierten Terminvereinbarung mit Interessenten und
            Kunden. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich
            auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die
            Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z.B.
            Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="mt-2">
            Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt.
          </p>

          <h4 className="text-lg font-semibold mb-2 mt-4">Auftragsverarbeitung</h4>
          <p>
            Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes
            geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der
            gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen
            und unter Einhaltung der DSGVO verarbeitet.
          </p>
        </section>

        <section>
          <p className="text-sm text-muted-foreground mt-8">
            Quelle: Erstellt mit dem Datenschutz-Generator.de von RA Dr. Thomas Schwenke
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>
      </div>
    </div>
  );
}
