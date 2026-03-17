import LegalLayout from '@/components/legal/LegalLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | 5G Case by Comms Connect',
  description: 'Datenschutzerklärung der Comms Connect GmbH für den 5G Case Online-Shop.',
};

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <p>
        Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung
        personenbezogener Daten beim Besuch dieser Website und bei Bestellungen über unseren Online-Shop
        unter www.case-connect.de. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
        identifiziert werden können.
      </p>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">1. Verantwortliche Stelle</h2>
        <p>
          Comms Connect GmbH<br />
          Tal 30<br />
          80331 München<br />
          Telefon: +49 89 4522 1556<br />
          E-Mail: info@comms-connect.de
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">2. Hosting</h2>
        <p>
          Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet.
          Der Hoster erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien,
          die Ihr Browser automatisch übermittelt.
        </p>
        <p>
          Erfasst werden insbesondere Browsertyp, Betriebssystem, Referrer-URL, IP-Adresse und Uhrzeit
          der Serveranfrage. Eine Zusammenführung dieser Daten mit anderen Datenquellen erfolgt nicht.
        </p>
        <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem Betrieb).</p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">3. SSL- bzw. TLS-Verschlüsselung</h2>
        <p>
          Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte
          eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an &bdquo;https://&ldquo;
          in der Adresszeile Ihres Browsers.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">4. Datenerfassung bei Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns per E-Mail, Telefon oder Kontaktformular kontaktieren, werden Ihre Angaben zur
          Bearbeitung der Anfrage sowie für Anschlussfragen gespeichert.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertrag oder Vertragsanbahnung) oder Art. 6
          Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Kommunikation).
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">5. Datenverarbeitung im Rahmen von Bestellungen</h2>
        <p>
          Bei Bestellungen über unseren Online-Shop verarbeiten wir personenbezogene Daten wie Name,
          Rechnungs- und Lieferadresse, E-Mail-Adresse sowie Zahlungsinformationen.
        </p>
        <p>
          Die Verarbeitung erfolgt ausschließlich zur Vertragsabwicklung gemäß Art. 6 Abs. 1 lit. b DSGVO.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">6. Zahlungsabwicklung (Stripe)</h2>
        <p>
          Zur Abwicklung von Zahlungen nutzen wir den Dienst Stripe (Stripe Payments Europe, Ltd.,
          1 Grand Canal Street Lower, Grand Canal Dock, Dublin, D02 H210, Irland). Bei der Bezahlung
          werden die hierfür erforderlichen Zahlungsdaten an Stripe weitergegeben.
        </p>
        <p>
          Stripe verarbeitet diese Daten im Rahmen der Zahlungsabwicklung und unterliegt den europäischen
          Datenschutzbestimmungen. Weitere Informationen finden Sie in der Datenschutzerklärung von Stripe
          unter stripe.com/de/privacy.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">7. CRM-Verarbeitung (HubSpot)</h2>
        <p>
          Zur Verwaltung von Kundenbeziehungen nutzen wir HubSpot (HubSpot Inc., 25 First Street,
          Cambridge, MA 02141, USA). Nach erfolgreicher Bestellung werden Kontaktdaten in unserem
          CRM-System gespeichert, um den Kundenservice und die Auftragsabwicklung zu optimieren.
        </p>
        <p>
          HubSpot ist unter dem EU-U.S. Data Privacy Framework zertifiziert. Rechtsgrundlage ist
          Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Kundenbetreuung).
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">8. Speicherdauer</h2>
        <p>
          Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Erreichung der jeweiligen
          Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen (in der Regel 6 bzw.
          10 Jahre gemäß HGB und AO).
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">9. Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten,
          deren Herkunft, Empfänger und Zweck der Verarbeitung. Außerdem haben Sie das Recht auf
          Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch
          gegen die Verarbeitung.
        </p>
        <p>
          Eine erteilte Einwilligung können Sie jederzeit widerrufen. Zudem steht Ihnen ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </p>
        <p>
          Zuständige Aufsichtsbehörde:<br />
          Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
          Promenade 18, 91522 Ansbach
        </p>
      </section>
    </LegalLayout>
  );
}
