import type { Metadata } from "next";
import { LegalPage, LegalSection } from "../components/legal-page";

export const metadata: Metadata = {
  title: "Datenschutz | DreamWebStudio",
  description:
    "Datenschutzerklärung von DreamWebStudio gemäss Schweizer Datenschutzrecht.",
};

export default function DatenschutzPage() {
  return (
    <LegalPage
      eyebrow="Datenschutz"
      title="Datenschutzerklärung"
      intro="Diese Erklärung informiert darüber, welche Personendaten beim Besuch dieser Website und bei einer Kontaktaufnahme bearbeitet werden."
    >
      <LegalSection title="1. Verantwortliche Stelle">
        <address className="not-italic">
          <strong className="font-medium text-white">DreamWebStudio</strong>
          <br />
          Inhaber: Marko Gjordic
          <br />
          Optikweg 5, 8887 Mels, Schweiz
          <br />
          E-Mail:{" "}
          <a
            className="text-gold transition-colors hover:text-gold-light"
            href="mailto:kontakt@dreamwebstudio.ch"
          >
            kontakt@dreamwebstudio.ch
          </a>
          <br />
          Telefon: +41 78 244 47 22
        </address>
      </LegalSection>

      <LegalSection title="2. Grundsätze der Datenbearbeitung">
        <p>
          Wir bearbeiten Personendaten im Einklang mit dem schweizerischen
          Datenschutzgesetz (DSG). Soweit die Datenschutz-Grundverordnung der
          Europäischen Union (DSGVO) anwendbar ist, berücksichtigen wir auch
          deren Anforderungen.
        </p>
        <p>
          Wir bearbeiten nur Daten, die für den sicheren Betrieb dieser Website,
          die Bearbeitung von Anfragen, die Anbahnung oder Erfüllung von
          Geschäftsbeziehungen und die Erfüllung gesetzlicher Pflichten
          erforderlich sind.
        </p>
      </LegalSection>

      <LegalSection title="3. Hosting und technische Zugriffsdaten">
        <p>
          Diese Website wird über Dienste von Cloudflare bereitgestellt. Beim
          Aufruf können technische Daten wie IP-Adresse, Datum und Uhrzeit,
          aufgerufene Seite, Referrer, Browser- und Geräteinformationen sowie
          sicherheitsrelevante Protokolldaten verarbeitet werden. Dies dient der
          Auslieferung, Stabilität und Sicherheit der Website sowie der Abwehr
          missbräuchlicher Zugriffe.
        </p>
        <p>
          Anbieter ist Cloudflare, Inc., 101 Townsend St., San Francisco, CA
          94107, USA. Cloudflare kann Daten in der Schweiz, im Europäischen
          Wirtschaftsraum und in den USA verarbeiten. Weitere Informationen:{" "}
          <a
            className="text-gold transition-colors hover:text-gold-light"
            href="https://www.cloudflare.com/de-de/privacypolicy/"
            rel="noreferrer"
            target="_blank"
          >
            Datenschutzerklärung von Cloudflare
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="4. Kontaktformular und Anfragen">
        <p>
          Bei Nutzung des Kontaktformulars bearbeiten wir den angegebenen Namen,
          die E-Mail-Adresse, die ausgewählte Leistung und den Inhalt der
          Nachricht. Die Angaben werden zur Prüfung und Beantwortung der Anfrage
          sowie zur möglichen Vorbereitung einer Geschäftsbeziehung verwendet.
          Freiwillig mitgeteilte weitere Informationen werden im selben Rahmen
          bearbeitet.
        </p>
        <p>
          Für den Versand der Formularnachricht verwenden wir Resend, einen Dienst
          der Plus Five Five, Inc., 2261 Market Street #5039, San Francisco, CA
          94114, USA. Dabei werden insbesondere E-Mail-Adresse, Name,
          Nachrichteninhalt und technische Versanddaten verarbeitet. Weitere
          Informationen:{" "}
          <a
            className="text-gold transition-colors hover:text-gold-light"
            href="https://resend.com/legal/privacy-policy"
            rel="noreferrer"
            target="_blank"
          >
            Datenschutzerklärung von Resend
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="5. Kommunikation per E-Mail">
        <p>
          Nachrichten an kontakt@dreamwebstudio.ch werden über Cloudflare Email
          Routing an unser Gmail-Postfach weitergeleitet. Dabei können
          Absenderadresse, Empfängeradresse, Versanddaten, Betreff,
          Nachrichteninhalt und Anhänge durch Cloudflare und Google verarbeitet
          werden. Die Bearbeitung erfolgt zur Entgegennahme und Beantwortung der
          Kommunikation.
        </p>
        <p>
          Informationen zum Datenschutz bei Google finden Sie unter{" "}
          <a
            className="text-gold transition-colors hover:text-gold-light"
            href="https://policies.google.com/privacy?hl=de"
            rel="noreferrer"
            target="_blank"
          >
            policies.google.com/privacy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="6. Bekanntgabe ins Ausland">
        <p>
          Die genannten technischen Dienstleister können Personendaten ausserhalb
          der Schweiz bearbeiten, insbesondere in den USA. Wir achten darauf,
          dass solche Übermittlungen auf einer anerkannten Grundlage oder mit
          geeigneten vertraglichen Garantien und Schutzmassnahmen erfolgen.
        </p>
      </LegalSection>

      <LegalSection title="7. Cookies und Reichweitenmessung">
        <p>
          Wir setzen derzeit keine eigenen Analyse-, Marketing- oder
          Profiling-Dienste ein. Die auf der Website verwendeten Schriftarten
          werden lokal ausgeliefert. Technisch notwendige Speicherungen oder
          Sicherheitsmechanismen des Hosting-Anbieters bleiben vorbehalten.
        </p>
      </LegalSection>

      <LegalSection title="8. Aufbewahrung">
        <p>
          Personendaten werden nur so lange aufbewahrt, wie dies für den jeweiligen
          Zweck erforderlich ist oder gesetzliche Aufbewahrungs- und
          Nachweispflichten bestehen. Anfragen ohne anschliessende
          Geschäftsbeziehung werden gelöscht, sobald sie nicht mehr benötigt
          werden und keine berechtigten Gründe für eine weitere Aufbewahrung
          bestehen.
        </p>
      </LegalSection>

      <LegalSection title="9. Rechte betroffener Personen">
        <p>
          Betroffene Personen können im Rahmen des anwendbaren Rechts insbesondere
          Auskunft über ihre Personendaten sowie deren Berichtigung oder Löschung
          verlangen. Je nach Rechtsgrundlage können weitere Rechte bestehen,
          darunter die Einschränkung oder der Widerspruch gegen eine Bearbeitung
          und die Herausgabe bestimmter Daten.
        </p>
        <p>
          Anfragen können an kontakt@dreamwebstudio.ch gerichtet werden. Zur
          Verhinderung unberechtigter Auskünfte kann ein geeigneter
          Identitätsnachweis verlangt werden. Zudem besteht die Möglichkeit, sich
          an den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten
          (EDÖB) zu wenden.
        </p>
      </LegalSection>

      <LegalSection title="10. Datensicherheit und Änderungen">
        <p>
          Wir treffen angemessene technische und organisatorische Massnahmen zum
          Schutz von Personendaten. Die Übertragung dieser Website erfolgt
          verschlüsselt über HTTPS. Absolute Sicherheit kann bei elektronischer
          Kommunikation jedoch nicht garantiert werden.
        </p>
        <p>
          Diese Datenschutzerklärung kann angepasst werden, wenn sich die Website,
          eingesetzte Dienste oder rechtliche Anforderungen ändern. Es gilt die
          jeweils auf dieser Website veröffentlichte Fassung.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
