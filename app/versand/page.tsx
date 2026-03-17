import LegalLayout from '@/components/legal/LegalLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Versand & Zahlung | 5G Case by Comms Connect',
  description: 'Informationen zu Versand und Zahlungsmethoden im 5G Case Online-Shop.',
};

export default function VersandPage() {
  return (
    <LegalLayout title="Versand & Zahlung">
      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">Versand</h2>
        <p>
          Die Lieferung erfolgt innerhalb Deutschlands, Österreichs und der Schweiz an die vom
          Kunden angegebene Lieferadresse.
        </p>
        <p>
          Die jeweils anfallenden Versandkosten werden im Bestellprozess transparent angezeigt und
          sind vom Kunden zu tragen, sofern nicht ausdrücklich etwas anderes vereinbart ist.
        </p>
        <p>
          Die Lieferzeit wird im Online-Shop beim jeweiligen Produkt angegeben. Sollte es zu
          Lieferverzögerungen kommen, informieren wir Sie unverzüglich.
        </p>
        <p>Teillieferungen sind zulässig, sofern sie für den Kunden zumutbar sind.</p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">Zahlungsmethoden</h2>
        <p>
          In unserem Online-Shop stehen Ihnen folgende Zahlungsmethoden zur Verfügung:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Kreditkarte</strong> (Visa, Mastercard, American Express)</li>
          <li><strong>SEPA-Lastschrift</strong></li>
        </ul>
        <p className="mt-4">
          Die Belastung des gewählten Zahlungsmittels erfolgt unmittelbar nach Vertragsabschluss,
          sofern nichts anderes vereinbart ist. Die Zahlungsabwicklung erfolgt sicher über unseren
          Zahlungsdienstleister Stripe.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">Rechnungsstellung</h2>
        <p>
          Nach erfolgreicher Bestellung erhalten Sie automatisch eine Rechnung per E-Mail. Alle Preise
          verstehen sich als Endpreise inklusive der gesetzlichen Mehrwertsteuer.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">Eigentumsvorbehalt</h2>
        <p>
          Bis zur vollständigen Bezahlung bleibt die gelieferte Ware Eigentum der Comms Connect GmbH.
        </p>
      </section>
    </LegalLayout>
  );
}
