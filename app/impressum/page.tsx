import LegalLayout from '@/components/legal/LegalLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | 5G Case by Comms Connect',
  description: 'Impressum der Comms Connect GmbH – Anbieter des 5G Case Online-Shops.',
};

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <section>
        <p>
          <strong>Comms Connect GmbH</strong><br />
          Tal 30<br />
          80331 München
        </p>
      </section>

      <section>
        <p>
          <strong>Handelsregister:</strong> HRB 295951, Amtsgericht München<br />
          <strong>Vertreten durch:</strong> Rainer Roloff
        </p>
      </section>

      <section>
        <p>
          <strong>Telefon:</strong>{' '}
          <a href="tel:+498945221556" className="text-primary hover:underline">+49 89 4522 1556</a><br />
          <strong>E-Mail:</strong>{' '}
          <a href="mailto:info@comms-connect.de" className="text-primary hover:underline">info@comms-connect.de</a>
        </p>
      </section>

      <section>
        <p>
          <strong>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</strong><br />
          DE451966748
        </p>
      </section>

      <section>
        <p>
          <strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</strong><br />
          Rainer Roloff<br />
          Tal 30<br />
          80331 München
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">Streitbeilegung</h2>
        <p>
          Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            https://ec.europa.eu/consumers/odr
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">Hinweis zum Online-Shop</h2>
        <p>
          Der unter <strong>www.case-connect.de</strong> betriebene Online-Shop für das Produkt &bdquo;5G Case&ldquo; ist ein
          Angebot der Comms Connect GmbH. Für alle über diesen Shop getätigten Bestellungen gelten die hier
          genannten Angaben sowie unsere Allgemeinen Geschäftsbedingungen.
        </p>
      </section>
    </LegalLayout>
  );
}
