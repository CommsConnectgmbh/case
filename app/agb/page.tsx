import LegalLayout from '@/components/legal/LegalLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AGB | 5G Case by Comms Connect',
  description: 'Allgemeine Geschäftsbedingungen der Comms Connect GmbH für den 5G Case Online-Shop.',
};

export default function AGBPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen">
      <p>
        Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen, die über den Online-Shop
        der Comms Connect GmbH unter www.case-connect.de getätigt werden. Verbraucher ist jede natürliche
        Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen
        noch ihrer selbstständigen beruflichen Tätigkeit zugerechnet werden können.
      </p>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">1. Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen, die Verbraucher über den
          Online-Shop der Comms Connect GmbH tätigen. Verbraucher ist jede natürliche Person, die ein
          Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer
          selbstständigen beruflichen Tätigkeit zugerechnet werden können.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">2. Vertragspartner</h2>
        <p>
          Der Kaufvertrag kommt zustande mit:<br />
          Comms Connect GmbH<br />
          Tal 30<br />
          80331 München
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">3. Vertragsschluss</h2>
        <p>
          Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot dar, sondern
          eine unverbindliche Aufforderung zur Abgabe einer Bestellung. Durch Anklicken des Bestellbuttons
          geben Sie ein verbindliches Angebot zum Abschluss eines Kaufvertrags ab. Der Vertrag kommt
          zustande, sobald wir Ihre Bestellung per E-Mail bestätigen.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">4. Preise und Zahlung</h2>
        <p>
          Alle Preise sind Endpreise und enthalten die gesetzliche Mehrwertsteuer. Zuzüglich anfallender
          Versandkosten, die im Bestellprozess ausgewiesen werden. Die Zahlung erfolgt über die im
          Online-Shop angebotenen Zahlungsmethoden (Kreditkarte, SEPA-Lastschrift).
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">5. Lieferung</h2>
        <p>
          Die Lieferung erfolgt an die vom Kunden angegebene Lieferadresse innerhalb Deutschlands,
          Österreichs und der Schweiz. Lieferzeiten werden im Online-Shop angegeben. Sollte ein Produkt
          nicht verfügbar sein, informieren wir Sie unverzüglich. Bereits geleistete Zahlungen werden
          in diesem Fall erstattet.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">6. Eigentumsvorbehalt</h2>
        <p>Die Ware bleibt bis zur vollständigen Bezahlung unser Eigentum.</p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">7. Widerrufsrecht</h2>
        <p>
          Verbrauchern steht das gesetzliche Widerrufsrecht zu. Einzelheiten ergeben sich aus unserer{' '}
          <a href="/widerrufsbelehrung" className="text-primary hover:underline">Widerrufsbelehrung</a>.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">8. Gewährleistung</h2>
        <p>Es gelten die gesetzlichen Gewährleistungsrechte.</p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">9. Haftung</h2>
        <p>
          Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit. Bei leichter Fahrlässigkeit
          haften wir nur bei Verletzung wesentlicher Vertragspflichten und begrenzt auf den vorhersehbaren,
          vertragstypischen Schaden.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">10. Schlussbestimmungen</h2>
        <p>
          Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Sollten einzelne Bestimmungen
          dieser Allgemeinen Geschäftsbedingungen unwirksam sein, bleibt der Vertrag im Übrigen wirksam.
        </p>
      </section>
    </LegalLayout>
  );
}
