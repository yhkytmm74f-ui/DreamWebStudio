import type { Metadata } from "next";
import { LegalPage, LegalSection } from "../components/legal-page";

export const metadata: Metadata = {
  title: "AGB | DreamWebStudio",
  description:
    "Allgemeine Geschäftsbedingungen von DreamWebStudio für Webdesign und digitale Dienstleistungen.",
};

export default function AgbPage() {
  return (
    <LegalPage
      eyebrow="Rechtliches"
      title="Allgemeine Geschäftsbedingungen"
      intro="Diese AGB regeln die Zusammenarbeit zwischen DreamWebStudio und seinen Kundinnen und Kunden bei Webdesign, Entwicklung und weiteren digitalen Dienstleistungen."
    >
      <LegalSection title="1. Anbieter und Geltungsbereich">
        <p>
          Anbieter ist DreamWebStudio, Inhaber Marko Gjordic, Optikweg 5, 8887
          Mels, Schweiz (nachfolgend «DreamWebStudio»). Diese Allgemeinen
          Geschäftsbedingungen gelten für sämtliche Angebote, Aufträge und
          Verträge über Webdesign, Webentwicklung, Beratung, Wartung und damit
          zusammenhängende digitale Dienstleistungen.
        </p>
        <p>
          Abweichende Vereinbarungen in einer individuellen Offerte oder einem
          Vertrag gehen diesen AGB vor. Geschäftsbedingungen der Kundschaft
          gelten nur, wenn DreamWebStudio ihnen ausdrücklich zugestimmt hat.
        </p>
      </LegalSection>

      <LegalSection title="2. Vertragsschluss">
        <p>
          Ein Vertrag kommt zustande, sobald eine Offerte oder
          Auftragsbestätigung von der Kundschaft schriftlich oder elektronisch
          angenommen wird oder DreamWebStudio nach entsprechender Absprache mit
          der Ausführung beginnt. Angebote sind während der darin genannten
          Frist verbindlich; ohne Frist gilt eine Gültigkeit von 30 Tagen.
        </p>
      </LegalSection>

      <LegalSection title="3. Leistungsumfang">
        <p>
          Art und Umfang der Leistungen ergeben sich aus der jeweiligen Offerte
          oder Auftragsbestätigung. Nicht ausdrücklich aufgeführte Leistungen,
          insbesondere zusätzliche Funktionen, Texte, Bilder, Übersetzungen,
          Schnittstellen, Lizenzen, Hosting, Domainkosten oder laufende Betreuung,
          sind nicht im vereinbarten Preis enthalten.
        </p>
        <p>
          DreamWebStudio darf zur Vertragserfüllung geeignete Hilfspersonen und
          Drittanbieter einsetzen. Technische Anpassungen sind zulässig, sofern
          sie die vereinbarte Funktion und Qualität nicht wesentlich
          beeinträchtigen.
        </p>
      </LegalSection>

      <LegalSection title="4. Mitwirkung der Kundschaft">
        <p>
          Die Kundschaft stellt benötigte Inhalte, Zugänge, Freigaben und
          Informationen vollständig, rechtzeitig und in geeigneter Form bereit.
          Sie bestätigt, dass bereitgestellte Texte, Bilder, Marken und sonstige
          Inhalte verwendet werden dürfen und keine Rechte Dritter verletzen.
        </p>
        <p>
          Verzögerungen aufgrund verspäteter Mitwirkung verlängern vereinbarte
          Termine angemessen. Daraus entstehender Zusatzaufwand kann nach
          vorgängiger Information zusätzlich verrechnet werden.
        </p>
      </LegalSection>

      <LegalSection title="5. Vergütung und Zahlung">
        <p>
          Sämtliche Preise verstehen sich in Schweizer Franken. Eine allfällige
          Mehrwertsteuer wird, sofern geschuldet, separat ausgewiesen. Soweit in
          der Offerte nichts anderes vereinbart ist, werden 50 Prozent bei
          Auftragserteilung und 50 Prozent bei Fertigstellung beziehungsweise
          vor der Veröffentlichung fällig.
        </p>
        <p>
          Rechnungen sind innerhalb von 14 Tagen ohne Abzug zahlbar. Bei Verzug
          kann DreamWebStudio die weitere Leistung bis zur Zahlung aussetzen und
          den gesetzlichen Verzugszins verlangen. Notwendige Dritt- und
          Lizenzkosten können im Voraus verrechnet werden.
        </p>
      </LegalSection>

      <LegalSection title="6. Korrekturen und Zusatzleistungen">
        <p>
          Sofern nicht anders vereinbart, sind zwei gebündelte Korrekturrunden
          innerhalb des vereinbarten Leistungsumfangs enthalten. Änderungswünsche
          sind möglichst gesammelt und eindeutig mitzuteilen.
        </p>
        <p>
          Weitere Korrekturen, Änderungen nach einer Freigabe oder Erweiterungen
          des vereinbarten Umfangs gelten als Zusatzleistungen. Sie werden nach
          vorgängiger Abstimmung gemäss Zusatzofferte oder nach Zeitaufwand
          verrechnet.
        </p>
      </LegalSection>

      <LegalSection title="7. Termine und Veröffentlichung">
        <p>
          Termine gelten nur dann als verbindlich, wenn sie ausdrücklich als
          solche bestätigt wurden. Verzögerungen durch fehlende Mitwirkung,
          nachträgliche Änderungen, höhere Gewalt oder nicht beeinflussbare
          Ausfälle von Drittanbietern verschieben Termine angemessen.
        </p>
        <p>
          Die Veröffentlichung erfolgt nach Freigabe durch die Kundschaft und,
          sofern vereinbart, nach Eingang der fälligen Zahlung. Die Kundschaft
          ist für eine abschliessende Prüfung der Inhalte, Kontaktdaten, Preise
          und rechtlich erforderlichen Angaben verantwortlich.
        </p>
      </LegalSection>

      <LegalSection title="8. Prüfung, Abnahme und Mängel">
        <p>
          Die Kundschaft prüft die Leistung nach Bereitstellung und meldet
          erkennbare Mängel innerhalb von zehn Arbeitstagen mit einer konkreten
          Beschreibung. Erfolgt innerhalb dieser Frist keine begründete
          Mängelmeldung oder wird die Leistung produktiv genutzt, gilt sie als
          abgenommen.
        </p>
        <p>
          Bei einem von DreamWebStudio zu vertretenden Mangel besteht zunächst
          Anspruch auf angemessene Nachbesserung. Geschmacksfragen oder neue
          Wünsche ausserhalb des vereinbarten Umfangs stellen keinen Mangel dar.
          Zwingende gesetzliche Gewährleistungsrechte bleiben vorbehalten.
        </p>
      </LegalSection>

      <LegalSection title="9. Nutzungsrechte">
        <p>
          Nach vollständiger Bezahlung erhält die Kundschaft die für den
          vereinbarten Zweck erforderlichen Nutzungsrechte am individuell
          erstellten Arbeitsergebnis. Eine ausschliessliche Übertragung oder die
          Herausgabe sämtlicher Arbeits- und Quelldateien erfolgt nur, wenn dies
          ausdrücklich vereinbart wurde.
        </p>
        <p>
          Vorbestehende Werkzeuge, Bibliotheken, Vorlagen, allgemeine
          Komponenten und Know-how verbleiben bei DreamWebStudio. Für Software,
          Schriften, Bilder und weitere Inhalte Dritter gelten deren jeweilige
          Lizenzbedingungen.
        </p>
      </LegalSection>

      <LegalSection title="10. Referenznennung">
        <p>
          DreamWebStudio darf abgeschlossene Projekte nach ihrer Veröffentlichung
          mit Name, Logo, Abbildungen und einer kurzen Beschreibung als Referenz
          präsentieren. Die Kundschaft kann dieser Nutzung jederzeit für die
          Zukunft schriftlich widersprechen, sofern keine abweichende individuelle
          Vereinbarung besteht.
        </p>
      </LegalSection>

      <LegalSection title="11. Drittanbieter und laufender Betrieb">
        <p>
          Für Leistungen externer Anbieter wie Hosting, Domains, E-Mail-Dienste,
          Plugins oder Schnittstellen gelten ergänzend deren Bedingungen.
          DreamWebStudio kann deren ununterbrochene Verfügbarkeit und zukünftige
          Funktionsweise nicht garantieren.
        </p>
        <p>
          Wartung, Aktualisierung, Datensicherung, Überwachung und Support nach
          Projektabschluss sind nur geschuldet, wenn sie ausdrücklich vereinbart
          wurden.
        </p>
      </LegalSection>

      <LegalSection title="12. Haftung">
        <p>
          DreamWebStudio haftet für vorsätzlich oder grobfahrlässig verursachte
          Schäden. Für leichte Fahrlässigkeit wird die Haftung, soweit gesetzlich
          zulässig, ausgeschlossen. Ebenfalls ausgeschlossen sind indirekte
          Schäden, Folgeschäden, entgangener Gewinn sowie Schäden aufgrund von
          Ausfällen oder Änderungen externer Dienste.
        </p>
        <p>
          Die Kundschaft bleibt für die rechtliche Zulässigkeit der von ihr
          bereitgestellten Inhalte und ihres Geschäftsmodells verantwortlich.
          Zwingende gesetzliche Haftungsbestimmungen bleiben unberührt.
        </p>
      </LegalSection>

      <LegalSection title="13. Projektabbruch und Kündigung">
        <p>
          Wird ein Projekt vor Abschluss beendet, sind die bis dahin erbrachten
          Leistungen und bereits eingegangenen, nicht stornierbaren
          Drittverpflichtungen zu bezahlen. Geleistete Anzahlungen werden damit
          verrechnet; ein allfälliger Überschuss wird zurückerstattet.
        </p>
        <p>
          Bei schwerwiegender Vertragsverletzung kann die jeweils andere Partei
          den Vertrag nach erfolgloser angemessener Nachfrist aus wichtigem Grund
          beenden.
        </p>
      </LegalSection>

      <LegalSection title="14. Vertraulichkeit und Datenschutz">
        <p>
          Beide Parteien behandeln nicht öffentlich bekannte geschäftliche und
          technische Informationen vertraulich. Personendaten werden nach dem
          anwendbaren Datenschutzrecht und gemäss der auf dieser Website
          veröffentlichten Datenschutzerklärung bearbeitet.
        </p>
      </LegalSection>

      <LegalSection title="15. Schlussbestimmungen">
        <p>
          Sollte eine Bestimmung unwirksam sein, bleiben die übrigen Bestimmungen
          bestehen. Änderungen und Ergänzungen des Auftrags sollen schriftlich
          oder elektronisch festgehalten werden.
        </p>
        <p>
          Es gilt schweizerisches Recht. Ausschliesslicher Gerichtsstand ist,
          soweit gesetzlich zulässig, der Sitz von DreamWebStudio. Zwingende
          Gerichtsstände, insbesondere gegenüber Konsumentinnen und Konsumenten,
          bleiben vorbehalten.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
