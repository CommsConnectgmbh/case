import LegalLayout from '@/components/legal/LegalLayout';
import WiderrufForm from './WiderrufForm';
import type { Metadata } from 'next';

/**
 * Öffentliche Widerruf-Funktion — Route: /widerruf
 * Ohne Login erreichbar (keine Auth/Middleware auf dieser Property).
 * Im Footer JEDER Seite verlinkt; ergänzt die /widerrufsbelehrung (Belehrungstext).
 */

export const metadata: Metadata = {
  title: 'Widerruf | 5G Case by Comms Connect',
  description: 'Hier können Sie Ihren Vertrag ohne Angabe von Gründen widerrufen.',
};

export default function WiderrufPage() {
  return (
    <LegalLayout title="Vertrag widerrufen">
      <p>
        Sie haben das Recht, Ihren Vertrag innerhalb der gesetzlichen Frist von 14 Tagen ohne
        Angabe von Gründen zu widerrufen. Füllen Sie dazu einfach dieses Formular aus – Sie
        erhalten unverzüglich eine Eingangsbestätigung per E-Mail. Alternativ können Sie uns auch
        formlos per E-Mail oder Post informieren (siehe{' '}
        <a href="/widerrufsbelehrung" className="text-primary hover:underline">
          Widerrufsbelehrung
        </a>
        ).
      </p>

      <div className="mt-6 not-prose">
        <WiderrufForm />
      </div>
    </LegalLayout>
  );
}
