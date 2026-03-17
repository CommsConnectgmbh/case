import LegalLayout from '@/components/legal/LegalLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Widerrufsbelehrung | 5G Case by Comms Connect',
  description: 'Widerrufsbelehrung der Comms Connect GmbH für den 5G Case Online-Shop.',
};

export default function WiderrufsbelehrungPage() {
  return (
    <LegalLayout title="Widerrufsbelehrung">
      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">Widerrufsrecht</h2>
        <p>
          Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
        </p>
        <p>
          Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter
          Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">Ausübung des Widerrufsrechts</h2>
        <p>
          Um Ihr Widerrufsrecht auszuüben, müssen Sie uns
        </p>
        <p>
          Comms Connect GmbH<br />
          Tal 30<br />
          80331 München<br />
          E-Mail: <a href="mailto:info@comms-connect.de" className="text-primary hover:underline">info@comms-connect.de</a>
        </p>
        <p>
          mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder eine E-Mail)
          über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das
          beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
        </p>
        <p>
          Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung
          des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">Folgen des Widerrufs</h2>
        <p>
          Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten
          haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus
          ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste
          Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag
          zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
        </p>
        <p>
          Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen
          Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart.
          In keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">Rücksendung der Waren</h2>
        <p>
          Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag,
          an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu
          übergeben.
        </p>
        <p>
          Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.
        </p>
        <p>
          Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">Wertersatz</h2>
        <p>
          Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf
          einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht
          notwendigen Umgang mit ihnen zurückzuführen ist.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-heading font-semibold text-white mt-8 mb-3">Muster-Widerrufsformular</h2>
        <p>Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück:</p>
        <div className="bg-surface rounded-xl p-6 border border-white/[0.06] mt-4">
          <p>
            An:<br />
            Comms Connect GmbH<br />
            Tal 30<br />
            80331 München<br />
            E-Mail: info@comms-connect.de
          </p>
          <p className="mt-4">
            Hiermit widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag über den Kauf
            der folgenden Waren:
          </p>
          <p className="mt-4">
            Bestellt am / erhalten am: _______________<br />
            Name des/der Verbraucher(s): _______________<br />
            Anschrift des/der Verbraucher(s): _______________<br />
            Datum: _______________<br />
            Unterschrift (nur bei Mitteilung auf Papier)
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
