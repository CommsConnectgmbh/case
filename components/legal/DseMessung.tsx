// Datenschutz-Bausteine A bis F der Web-Messung
// (Quelle: web-messung/DSE-BAUSTEIN.md, Wortlaut unveraendert, nur an die
// Struktur dieser Datenschutzerklaerung angepasst: Ueberschriften, Nummern,
// Verantwortlicher).
//
// A (Reichweitenmessung) erscheint immer. B bis F stehen als Unterabschnitte
// von "Cookies und Einwilligung" und erscheinen nur, wenn die jeweilige ID zur
// Build-Zeit gesetzt ist (B, sobald es den Kategorien-Banner gibt).

import type { ReactNode } from 'react';

import { brauchtEinwilligung, type WerbeIds } from '@/lib/consent/ids';

const H2 = 'text-lg font-heading font-semibold text-white mt-8 mb-3';
const H3 = 'text-base font-heading font-semibold text-white mt-6 mb-2';
const A = 'text-primary hover:underline';

function Link({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className={A} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

const TDDDG_25 = 'https://www.gesetze-im-internet.de/ttdsg/__25.html';
const WIDERRUF =
  'Rechtsgrundlagen sind Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO sowie für das Speichern und Auslesen von Informationen auf Ihrem Endgerät § 25 Abs. 1 TDDDG. Sie können Ihre Einwilligung jederzeit über „Cookie-Einstellungen“ im Fußbereich der Website mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt unberührt.';
const DPF_GOOGLE = (
  <p>
    Eine Übermittlung von Daten an Google LLC in den USA ist möglich. Google LLC ist nach dem EU-US
    Data Privacy Framework zertifiziert. Übermittlungen an diesen zertifizierten Empfänger können auf
    den Angemessenheitsbeschluss der Europäischen Kommission nach Art. 45 DSGVO gestützt werden.
    Weitere Angaben enthält Googles Information zu den{' '}
    <Link href="https://policies.google.com/privacy/frameworks?hl=de">Datenübermittlungsrahmen</Link>.
  </p>
);

/** Baustein A: immer. */
export function Reichweitenmessung({ nr }: { nr: string }) {
  return (
    <section>
      <h2 className={H2}>{nr} Serverseitige Reichweitenmessung</h2>
      <p>
        Die Comms Connect GmbH misst die Reichweite dieser Website und die Wirksamkeit der eingesetzten
        Kanäle und Kampagnen. Diese Messung ist unabhängig von einer Einwilligung aktiv. Dazu werden die
        beim Seitenaufruf ohnehin übermittelten Anfragedaten im Netzwerk unseres Hosting-Anbieters Vercel
        Inc. ausgewertet (siehe Abschnitt zum Hosting); das Ergebnis wird direkt an unsere Datenbank in
        Frankfurt übergeben.
      </p>
      <p>
        Für diese Messung werden ausschließlich folgende Angaben in einer eigenen Datenbank bei Supabase
        in der Region Frankfurt gespeichert:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Zeitpunkt und aufgerufene Seite, sofern sie in unserem öffentlichen Seitenverzeichnis (Sitemap)
          steht; jede andere Adresse wird nur als Sammelwert &bdquo;andere&ldquo; gezählt;
        </li>
        <li>Einstufung des Abrufs als menschlicher oder automatisierter Zugriff;</li>
        <li>
          Domain der verweisenden Website ohne Subdomain und ohne deren vollständige Adresse (zum
          Beispiel &bdquo;google.com&ldquo;); IP-Adressen werden nicht gespeichert;
        </li>
        <li>
          Quelle, Medium und Kampagnenbezeichnung aus den UTM-Kampagnenparametern der aufgerufenen
          Adresse, sofern sie unserem festen Format entsprechen; andere Werte werden nur als
          &bdquo;andere&ldquo; gezählt, Suchbegriffe und weitere UTM-Angaben werden nicht gespeichert;
        </li>
        <li>
          Vorhandensein und Typ eines Werbeklick-Parameters, beispielsweise &bdquo;gclid&ldquo;, ohne
          dessen Wert;
        </li>
        <li>
          bei Klicks auf Schaltflächen wie &bdquo;Registrieren&ldquo; oder &bdquo;Demo anfragen&ldquo; die
          Ausgangsseite und das Ziel aus einer festen Liste unserer Ziele.
        </li>
      </ul>
      <p>
        IP-Adressen und User-Agent-Angaben werden im Rahmen dieser Messung nicht gespeichert. Es werden
        keine Cookies eingesetzt und keine Informationen auf Ihrem Endgerät gespeichert oder daraus
        ausgelesen. Eine Wiedererkennung von Besuchern oder Profilbildung findet nicht statt. Supabase
        verarbeitet die gespeicherten Angaben im Auftrag der Comms Connect GmbH. Die Daten werden nach 25
        Monaten gelöscht.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse besteht darin, die
        Reichweite der Website und die Wirksamkeit der Kanäle und Kampagnen zu messen. Da diese Messung
        weder Informationen auf Ihrem Endgerät speichert noch auf dort gespeicherte Informationen
        zugreift, fällt sie nicht unter <Link href={TDDDG_25}>§ 25 TDDDG</Link>.
      </p>
      <p>
        <strong>
          Sie haben nach Art. 21 Abs. 1 DSGVO das Recht, aus Gründen, die sich aus Ihrer besonderen
          Situation ergeben, jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten auf dieser
          Grundlage Widerspruch einzulegen.
        </strong>{' '}
        Den Widerspruch können Sie an die Comms Connect GmbH (Kontaktdaten unter Ziffer 1) richten.
        Danach werden die betroffenen personenbezogenen Daten nicht mehr verarbeitet, sofern keine
        zwingenden schutzwürdigen Gründe nachgewiesen werden, die Ihre Interessen, Rechte und Freiheiten
        überwiegen, oder die Verarbeitung der Geltendmachung, Ausübung oder Verteidigung von
        Rechtsansprüchen dient.{' '}
        <Link href="https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679">Art. 21 DSGVO</Link>
      </p>
    </section>
  );
}

/**
 * Bausteine B bis F als Unterabschnitte (z. B. "9.1"). Ohne IDs: nichts.
 */
export function EinwilligungsDienste({ ids, praefix }: { ids: WerbeIds; praefix: string }) {
  if (!brauchtEinwilligung(ids)) return null;
  const teile = [
    'einwilligung',
    ids.ga4 && 'ga4',
    ids.gads && 'gads',
    ids.metaPixel && 'meta',
    ids.linkedin && 'linkedin',
  ].filter(Boolean) as string[];
  const nr = (k: string) => `${praefix}.${teile.indexOf(k) + 1}`;

  return (
    <>
      <h3 className={H3}>{nr('einwilligung')} Einwilligungsverwaltung</h3>
      <p>
        Die Comms Connect GmbH speichert Ihre Entscheidung über die Nutzung einwilligungspflichtiger
        Dienste im lokalen Speicher Ihres Browsers (localStorage) unter dem Schlüssel
        &bdquo;cc_consent&ldquo;. Dadurch kann Ihre Auswahl bei der Nutzung der Website berücksichtigt
        werden.
      </p>
      <p>
        Das Speichern und Auslesen dieser Entscheidung ist für die Bereitstellung der von Ihnen gewählten
        Datenschutzeinstellungen technisch erforderlich. Hierfür ist nach{' '}
        <Link href={TDDDG_25}>§ 25 Abs. 2 Nr. 2 TDDDG</Link> keine Einwilligung erforderlich.
      </p>
      <p>
        Über den Link &bdquo;Cookie-Einstellungen&ldquo; im Fußbereich der Website können Sie Ihre
        Auswahl jederzeit ändern und erteilte Einwilligungen widerrufen. Ein Widerruf wirkt für die
        Zukunft. Die Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt unberührt.
      </p>

      {ids.ga4 && (
        <>
          <h3 className={H3}>{nr('ga4')} Google Analytics 4</h3>
          <p>
            Die Comms Connect GmbH verwendet Google Analytics 4 zur statistischen Auswertung der
            Websitenutzung ausschließlich, wenn Sie in der Kategorie &bdquo;Statistik&ldquo; eingewilligt
            haben. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
          </p>
          <p>
            Google Analytics verarbeitet Nutzungsdaten und setzt Cookies ein, insbesondere
            &bdquo;_ga&ldquo; und Cookies mit dem Namensanfang &bdquo;_ga_&ldquo;. Ihre IP-Adresse wird
            durch Google innerhalb der EU gekürzt. Nach den{' '}
            <Link href="https://support.google.com/analytics/answer/11397207?hl=de">Angaben von Google</Link>{' '}
            beträgt die Standardlaufzeit dieser Cookies jeweils zwei Jahre. Die Aufbewahrungsdauer der
            nutzerbezogenen Analytics-Daten beträgt 14 Monate.
          </p>
          {DPF_GOOGLE}
          <p>{WIDERRUF}</p>
          <p>
            Weitere Informationen finden Sie in der{' '}
            <Link href="https://policies.google.com/privacy?hl=de">Datenschutzerklärung von Google</Link>.
          </p>
        </>
      )}

      {ids.gads && (
        <>
          <h3 className={H3}>{nr('gads')} Google Ads Conversion-Tracking und Remarketing</h3>
          <p>
            Die Comms Connect GmbH verwendet Google Ads Conversion-Tracking und Remarketing
            ausschließlich, wenn Sie in der Kategorie &bdquo;Marketing&ldquo; eingewilligt haben. Anbieter
            ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
          </p>
          <p>
            Conversion-Tracking dient dazu, den Erfolg von Anzeigen zu messen. Remarketing ermöglicht die
            Ausspielung von Werbung an Personen, die diese Website bereits besucht haben. Dabei werden
            Cookies eingesetzt. Das Cookie &bdquo;_gcl_au&ldquo; hat eine Laufzeit von 90 Tagen. Weitere
            Angaben enthält Googles{' '}
            <Link href="https://business.safety.google/adscookies/">Übersicht der Werbe-Cookies</Link>.
          </p>
          <p>
            Beim eingesetzten Consent Mode werden die Google-Skripte für diese Funktionen erst nach Ihrer
            Einwilligung geladen.
          </p>
          {DPF_GOOGLE}
          <p>{WIDERRUF}</p>
          <p>
            Weitere Informationen finden Sie in der{' '}
            <Link href="https://policies.google.com/privacy?hl=de">Datenschutzerklärung von Google</Link>.
          </p>
        </>
      )}

      {ids.metaPixel && (
        <>
          <h3 className={H3}>{nr('meta')} Meta Pixel</h3>
          <p>
            Die Comms Connect GmbH verwendet das Meta Pixel ausschließlich, wenn Sie in der Kategorie
            &bdquo;Marketing&ldquo; eingewilligt haben. Anbieter ist Meta Platforms Ireland Limited,
            Merrion Road, Dublin 4, Irland.
          </p>
          <p>
            Das Meta Pixel dient der Messung des Anzeigenerfolgs und der Bildung von Zielgruppen für
            Werbung. Dabei werden Cookies eingesetzt. Das Cookie &bdquo;_fbp&ldquo; hat eine Laufzeit von
            90 Tagen.
          </p>
          <p>
            Für die Erhebung personenbezogener Daten durch das Meta Pixel und deren Übermittlung an Meta
            sind die Comms Connect GmbH und Meta Platforms Ireland Limited gemeinsam verantwortlich nach
            Art. 26 DSGVO. Die Aufgabenverteilung ist im{' '}
            <Link href="https://www.facebook.com/legal/controller_addendum">
              Zusatz für Verantwortliche von Meta
            </Link>{' '}
            geregelt. Ihre Betroffenenrechte können Sie gegenüber beiden gemeinsam Verantwortlichen
            geltend machen.
          </p>
          <p>
            Daten können an Meta Platforms Inc. in den USA übermittelt werden. Meta Platforms Inc. ist nach
            dem EU-US Data Privacy Framework zertifiziert. Übermittlungen an diesen zertifizierten
            Empfänger können auf den Angemessenheitsbeschluss der Europäischen Kommission nach Art. 45
            DSGVO gestützt werden. Weitere Angaben enthält Metas Information zum{' '}
            <Link href="https://www.facebook.com/privacy/policies/data_privacy_framework/">
              Data Privacy Framework
            </Link>
            .
          </p>
          <p>{WIDERRUF}</p>
          <p>
            Weitere Informationen finden Sie in der{' '}
            <Link href="https://www.facebook.com/privacy/policy/">Datenschutzerklärung von Meta</Link>.
          </p>
        </>
      )}

      {ids.linkedin && (
        <>
          <h3 className={H3}>{nr('linkedin')} LinkedIn Insight Tag</h3>
          <p>
            Die Comms Connect GmbH verwendet das LinkedIn Insight Tag ausschließlich, wenn Sie in der
            Kategorie &bdquo;Marketing&ldquo; eingewilligt haben. Anbieter ist LinkedIn Ireland Unlimited
            Company, Wilton Place, Dublin 2, Irland.
          </p>
          <p>
            Das LinkedIn Insight Tag dient der Messung des Kampagnenerfolgs, der erneuten werblichen
            Ansprache früherer Websitebesucher (Retargeting) und der demografischen Auswertung der
            Websitebesucher. Dabei werden Cookies eingesetzt. Das Cookie &bdquo;li_sugr&ldquo; hat eine
            Laufzeit von 90 Tagen, &bdquo;bcookie&ldquo; eine Laufzeit von einem Jahr. Weitere Angaben
            enthält die{' '}
            <Link href="https://www.linkedin.com/legal/l/cookie-table">Cookie-Übersicht von LinkedIn</Link>.
          </p>
          <p>
            Daten können an LinkedIn Corporation in den USA übermittelt werden. LinkedIn Corporation ist
            nach dem EU-US Data Privacy Framework zertifiziert. Übermittlungen an diesen zertifizierten
            Empfänger können auf den Angemessenheitsbeschluss der Europäischen Kommission nach Art. 45
            DSGVO gestützt werden. Weitere Angaben enthält LinkedIns Information zu{' '}
            <Link href="https://www.linkedin.com/help/linkedin/answer/a1343190/eu-eea-and-swiss-data-transfers">
              internationalen Datenübermittlungen
            </Link>
            .
          </p>
          <p>{WIDERRUF}</p>
          <p>
            Weitere Informationen finden Sie in der{' '}
            <Link href="https://www.linkedin.com/legal/privacy-policy">Datenschutzerklärung von LinkedIn</Link>.
          </p>
        </>
      )}
    </>
  );
}
