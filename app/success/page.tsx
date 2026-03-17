import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Bestellung bestätigt | 5G Case – Comms Connect',
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <CheckCircle size={64} className="text-primary mx-auto mb-6" />
        <h1 className="font-heading text-4xl font-bold mb-4">
          Vielen Dank für Ihre Bestellung!
        </h1>
        <p className="text-muted mb-8">
          Sie erhalten in Kürze eine Rechnung per E-Mail. Lieferzeit: 5–7 Werktage.
        </p>
        <div className="glass rounded-xl p-6 mb-8 text-left text-sm">
          <h3 className="font-heading font-bold mb-3">Nächste Schritte</h3>
          <ul className="space-y-2 text-muted">
            <li>Ihre Rechnung wird automatisch per E-Mail zugestellt</li>
            <li>Lieferzeit: 5–7 Werktage innerhalb DE/AT/CH</li>
            <li>Bei Fragen: <a href="mailto:rainer.roloff@comms-connect.de" className="text-primary hover:underline">rainer.roloff@comms-connect.de</a></li>
          </ul>
        </div>
        <Link
          href="/"
          className="inline-flex px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
