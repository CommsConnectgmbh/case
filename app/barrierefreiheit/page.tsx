import type { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Barrierefreiheit – Case-Connect',
  description:
    'Erklärung zur digitalen Barrierefreiheit von case-connect.de gemäß Barrierefreiheitsstärkungsgesetz (BFSG).',
};

export default function BarrierefreiheitPage() {
  return (
    <LegalLayout title="Barrierefreiheitserklärung">
      <p>
        Diese Erklärung beschreibt den Stand der digitalen Barrierefreiheit von{' '}
        <strong>case-connect.de</strong> im Sinne des
        Barrierefreiheitsstärkungsgesetzes (BFSG) und der
        Barrierefreiheitsstärkungsgesetz-Verordnung (BFSGV), die seit dem{' '}
        <strong>28. Juni 2025</strong> anwendbar sind. Grundlage ist die EN 301 549 in
        Verbindung mit den Web Content Accessibility Guidelines (WCAG) 2.1
        Konformitätsstufe AA.
      </p>

      <h2>Stand der Vereinbarkeit</h2>
      <p>
        Case-Connect ist nach eigener Selbstbewertung <strong>weitgehend konform</strong>{' '}
        mit den oben genannten Anforderungen.
      </p>
      <p>
        Letzte Überprüfung: <strong>16. Juni 2026</strong>. Methodik: Selbstbewertung
        (BITV-Checkliste), automatisierte Prüfung (axe-core, Lighthouse) und manuelle
        Tests mit Tastatursteuerung sowie Screenreadern (VoiceOver, NVDA).
      </p>

      <h2>Nicht-barrierefreie Inhalte</h2>
      <p>
        Eingeschränkt barrierefrei können eingebettete Inhalte Dritter sein (z. B.
        Zahlungsabwicklung via Stripe, Kartenanbieter). Diese werden vom jeweiligen
        Anbieter bereitgestellt und liegen außerhalb unserer direkten Verantwortung.
      </p>

      <h2>Erstellung dieser Erklärung</h2>
      <p>
        Diese Erklärung wurde am <strong>16. Juni 2026</strong> erstellt. Sie wird
        mindestens einmal jährlich sowie nach wesentlichen Änderungen an case-connect.de
        überprüft.
      </p>

      <h2>Feedback und Kontakt</h2>
      <p>
        Ihnen sind Barrieren aufgefallen oder Sie benötigen Inhalte in einer anderen
        Form? Bitte melden Sie sich:
      </p>
      <ul>
        <li>
          <strong>E-Mail:</strong>{' '}
          <a href="mailto:info@case-connect.de">info@case-connect.de</a>
        </li>
        <li>
          <strong>Anschrift:</strong> Comms Connect GmbH, Tal 30, 80331 München
        </li>
      </ul>
      <p>Wir antworten in der Regel innerhalb von vier Wochen.</p>

      <h2>Schlichtungsverfahren</h2>
      <p>
        Wird Ihre Rückmeldung aus Ihrer Sicht nicht zufriedenstellend bearbeitet, können
        Sie sich an die zuständige Schlichtungsstelle nach § 16 BGG wenden:
      </p>
      <address className="not-italic">
        Schlichtungsstelle nach dem Behindertengleichstellungsgesetz
        <br />
        Bei dem Beauftragten der Bundesregierung für die Belange von Menschen mit
        Behinderungen
        <br />
        Mauerstraße 53, 10117 Berlin
        <br />
        Telefon: 030 18 527-2805
        <br />
        E-Mail:{' '}
        <a href="mailto:info@schlichtungsstelle-bgg.de">
          info@schlichtungsstelle-bgg.de
        </a>
        <br />
        Web:{' '}
        <a href="https://www.schlichtungsstelle-bgg.de" rel="noopener">
          www.schlichtungsstelle-bgg.de
        </a>
      </address>

      <h2>Marktüberwachung</h2>
      <p>Zuständig für die Marktüberwachung von Dienstleistungen nach BFSG ist:</p>
      <address className="not-italic">
        Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und
        Dienstleistungen (MLBF)
        <br />
        Web:{' '}
        <a href="https://www.mlbf.de" rel="noopener">
          www.mlbf.de
        </a>
      </address>
    </LegalLayout>
  );
}
