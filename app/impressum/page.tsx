import type { Metadata } from "next";
import { LegalPage, LegalSection } from "../components/legal-page";

export const metadata: Metadata = {
  title: "Impressum | DreamWebStudio",
  description: "Impressum und Kontaktangaben von DreamWebStudio.",
};

export default function ImpressumPage() {
  return (
    <LegalPage
      eyebrow="Rechtliches"
      title="Impressum"
      intro="Angaben zum Betreiber und zur verantwortlichen Person dieser Website."
    >
      <LegalSection title="Betreiber">
        <address className="not-italic">
          <strong className="font-medium text-white">DreamWebStudio</strong>
          <br />
          Inhaber: Marko Gjordic
          <br />
          Optikweg 5
          <br />
          8887 Mels
          <br />
          Schweiz
        </address>
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>
          E-Mail:{" "}
          <a
            className="text-gold transition-colors hover:text-gold-light"
            href="mailto:kontakt@dreamwebstudio.ch"
          >
            kontakt@dreamwebstudio.ch
          </a>
          <br />
          Telefon:{" "}
          <a
            className="text-gold transition-colors hover:text-gold-light"
            href="tel:+41782444722"
          >
            +41 78 244 47 22
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Verantwortlich für den Inhalt">
        <p>Marko Gjordic, Anschrift wie oben.</p>
      </LegalSection>

      <LegalSection title="Haftung für Inhalte und Verweise">
        <p>
          Die Inhalte dieser Website werden mit angemessener Sorgfalt erstellt
          und regelmässig geprüft. Eine Gewähr für Vollständigkeit, Richtigkeit
          und Aktualität kann dennoch nicht übernommen werden.
        </p>
        <p>
          Für Inhalte externer Websites, auf die verwiesen wird, sind
          ausschliesslich deren Betreiber verantwortlich. Zum Zeitpunkt der
          Verlinkung waren keine rechtswidrigen Inhalte erkennbar.
        </p>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <p>
          Inhalte, Gestaltung und Werke auf dieser Website unterliegen dem
          schweizerischen Urheberrecht. Eine Verwendung ausserhalb der
          gesetzlichen Schranken bedarf der vorherigen Zustimmung des jeweiligen
          Rechteinhabers.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
