import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AGB - immopal',
  description: 'Allgemeine Geschäftsbedingungen von immopal Immobilienmakler',
};

export default function AGBPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">§ 1 Geltungsbereich</h2>
          <p>
            (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für alle Verträge über
            Maklerleistungen, die zwischen immopal Immobilienmakler (nachfolgend „Makler") und dem Auftraggeber
            (nachfolgend „Kunde") geschlossen werden.
          </p>
          <p className="mt-2">
            (2) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden nur
            dann und insoweit Vertragsbestandteil, als der Makler ihrer Geltung ausdrücklich schriftlich zugestimmt hat.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">§ 2 Vertragsgegenstand</h2>
          <p>
            (1) Der Makler verpflichtet sich, für den Kunden nach einem geeigneten Vertragspartner zum Abschluss eines
            Kauf-, Miet-, Pacht- oder Tauschvertrages über Grundstücke, grundstücksgleiche Rechte, Gebäude oder
            Gebäudeteile zu suchen und die Gelegenheit zum Abschluss eines solchen Vertrages nachzuweisen.
          </p>
          <p className="mt-2">
            (2) Der Maklervertrag kommt durch mündliche, schriftliche oder konkludente Beauftragung zustande.
          </p>
          <p className="mt-2">
            (3) Der Makler schuldet keinen Erfolg. Der Makler ist nur verpflichtet, sich nach Kräften um den Nachweis
            oder die Vermittlung eines Vertragsabschlusses zu bemühen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">§ 3 Maklercourtage</h2>
          <p>
            (1) Der Anspruch auf Maklercourtage entsteht, wenn durch die Tätigkeit des Maklers ein Kauf-, Miet-, Pacht-
            oder Tauschvertrag über ein Grundstück, ein grundstücksgleiches Recht, ein Gebäude oder Gebäudeteil zustande
            gekommen ist.
          </p>
          <p className="mt-2">
            (2) Die Höhe der Maklercourtage richtet sich nach den zum Zeitpunkt des Vertragsabschlusses geltenden
            gesetzlichen Bestimmungen und den individuellen Vereinbarungen.
          </p>
          <p className="mt-3 font-semibold">
            Für Käufer von Wohnungen und Einfamilienhäusern gilt:
          </p>
          <p className="mt-1">
            Gemäß § 656a Abs. 1 BGB darf bei der Vermittlung von Kaufverträgen über Wohnungen und Einfamilienhäuser
            der Erwerber nicht mehr als 50 % der Provision zahlen. Die Provision des Erwerbers darf die Provision des
            Verkäufers nicht übersteigen.
          </p>
          <p className="mt-3">
            (3) Die Maklercourtage wird fällig mit dem Zustandekommen des vermittelten Vertrages. Sie ist zu zahlen,
            wenn der vermittelte Vertrag unter einer aufschiebenden Bedingung geschlossen wird, sobald die Bedingung
            eingetreten ist.
          </p>
          <p className="mt-2">
            (4) Die Maklercourtage ist auch dann zu zahlen, wenn der Vertrag unter Mitwirkung eines weiteren Maklers
            oder ohne Mitwirkung des Maklers zustande kommt, sofern der Makler für das Zustandekommen ursächlich war.
          </p>
          <p className="mt-2">
            (5) Alle angegebenen Preise verstehen sich zuzüglich der jeweils gültigen gesetzlichen Umsatzsteuer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">§ 4 Pflichten des Maklers</h2>
          <p>
            (1) Der Makler verpflichtet sich, die Interessen des Kunden im Rahmen des Maklerauftrags nach bestem
            Wissen und Gewissen wahrzunehmen.
          </p>
          <p className="mt-2">
            (2) Der Makler wird dem Kunden alle ihm bekannten und für den Vertragsabschluss wesentlichen Umstände
            mitteilen. Der Makler ist jedoch nicht verpflichtet, Nachforschungen über das Objekt anzustellen, die
            über das übliche Maß hinausgehen.
          </p>
          <p className="mt-2">
            (3) Der Makler haftet nicht für die Richtigkeit der vom Auftraggeber oder von Dritten gemachten Angaben,
            es sei denn, er hätte die Unrichtigkeit erkennen müssen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">§ 5 Pflichten des Kunden</h2>
          <p>
            (1) Der Kunde verpflichtet sich, dem Makler alle für die Ausführung des Auftrags wesentlichen Auskünfte
            zu erteilen und ihn unverzüglich über alle Umstände zu informieren, die für die Erfüllung des Auftrags
            von Bedeutung sein können.
          </p>
          <p className="mt-2">
            (2) Der Kunde verpflichtet sich, die vom Makler übermittelten Objekt- und Kundendaten vertraulich zu
            behandeln und nur für eigene Zwecke im Zusammenhang mit dem beabsichtigten Vertragsabschluss zu verwenden.
          </p>
          <p className="mt-2">
            (3) Der Kunde verpflichtet sich, den Makler unverzüglich zu benachrichtigen, wenn ein Vertrag über ein
            vom Makler nachgewiesenes oder vermitteltes Objekt zustande gekommen ist.
          </p>
          <p className="mt-2">
            (4) Der Kunde ist verpflichtet, den Makler von allen Ansprüchen Dritter freizustellen, die aufgrund
            falscher oder unvollständiger Angaben des Kunden entstehen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">§ 6 Auskunfts- und Besichtigungsrecht</h2>
          <p>
            (1) Der Kunde räumt dem Makler und von diesem beauftragten Personen das Recht ein, das Objekt zu den
            üblichen Geschäftszeiten zu besichtigen.
          </p>
          <p className="mt-2">
            (2) Der Kunde verpflichtet sich, dem Makler auf Verlangen jederzeit Auskunft über den Stand der
            Vertragsverhandlungen zu erteilen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">§ 7 Datenschutz</h2>
          <p>
            (1) Der Makler verpflichtet sich, alle im Zusammenhang mit dem Maklerauftrag bekannt gewordenen
            personenbezogenen Daten vertraulich zu behandeln und nur für Zwecke der Vertragserfüllung zu verwenden.
          </p>
          <p className="mt-2">
            (2) Der Kunde willigt ein, dass der Makler die zur Erfüllung des Maklerauftrags erforderlichen
            personenbezogenen Daten speichert und verarbeitet. Diese Einwilligung kann jederzeit widerrufen werden.
          </p>
          <p className="mt-2">
            (3) Weitere Informationen zum Datenschutz finden Sie in unserer{' '}
            <a href="/datenschutz" className="text-primary hover:underline">
              Datenschutzerklärung
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">§ 8 Haftung</h2>
          <p>
            (1) Der Makler haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für die Verletzung von
            Leben, Körper und Gesundheit.
          </p>
          <p className="mt-2">
            (2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten haftet der Makler nur für den
            vertragstypischen, vorhersehbaren Schaden.
          </p>
          <p className="mt-2">
            (3) Im Übrigen ist die Haftung des Maklers ausgeschlossen.
          </p>
          <p className="mt-2">
            (4) Die vorstehenden Haftungsbeschränkungen gelten auch für die persönliche Haftung der Mitarbeiter,
            Vertreter und Erfüllungsgehilfen des Maklers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">§ 9 Kündigung</h2>
          <p>
            (1) Der Maklervertrag kann von beiden Parteien jederzeit ohne Einhaltung einer Frist gekündigt werden,
            sofern nicht etwas anderes vereinbart wurde.
          </p>
          <p className="mt-2">
            (2) Die Kündigung bedarf der Schriftform.
          </p>
          <p className="mt-2">
            (3) Im Falle einer Kündigung durch den Kunden bleibt der Provisionsanspruch des Maklers bestehen, wenn
            der vermittelte Vertrag nach Kündigung des Maklervertrags zustande kommt und der Makler hierfür
            ursächlich war.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">§ 10 Vertragsübergang</h2>
          <p>
            (1) Der Kunde ist nicht berechtigt, seine Rechte und Pflichten aus dem Maklervertrag ohne vorherige
            schriftliche Zustimmung des Maklers auf Dritte zu übertragen.
          </p>
          <p className="mt-2">
            (2) Der Makler ist berechtigt, seine Rechte und Pflichten aus dem Maklervertrag auf Dritte zu übertragen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">§ 11 Schlussbestimmungen</h2>
          <p>
            (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
          </p>
          <p className="mt-2">
            (2) Erfüllungsort und Gerichtsstand ist, soweit gesetzlich zulässig, der Geschäftssitz des Maklers.
          </p>
          <p className="mt-2">
            (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der
            übrigen Bestimmungen hiervon unberührt. An die Stelle der unwirksamen Bestimmung tritt eine wirksame
            Regelung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
          </p>
          <p className="mt-2">
            (4) Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.
          </p>
        </section>

        <section>
          <p className="text-sm text-muted-foreground mt-8">
            <strong>immopal Immobilienmakler</strong>
            <br />
            Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>
      </div>
    </div>
  );
}
