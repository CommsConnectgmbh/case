// FAQ-Inhalte, bewusst ohne 'use client'.
//
// Die Daten werden an zwei Stellen gebraucht: in der Client-Komponente FAQ.tsx
// (Accordion) und im FAQPage-JSON-LD in app/layout.tsx, das serverseitig
// gerendert wird. Importiert eine Server Component aus einem 'use client'-Modul,
// ersetzt Next den Import durch eine Client-Referenz — Komponenten passieren die
// Grenze, ein Array nicht. Aus `FAQS` wurde dabei ein Proxy-Objekt, und der
// Prerender brach mit `FAQS.map is not a function` ab. Deshalb liegen die Daten
// hier in einem eigenen, server-seitig lesbaren Modul.

export type FaqEntry = { q: string; a: string };

export const FAQS: FaqEntry[] = [
  {
    q: 'Was ist ein 5G-Koffer?',
    a: 'Ein 5G-Koffer ist ein vorkonfiguriertes mobiles Netzwerk-System in einem IP67-geschützten Trolley. Er enthält Multi-Carrier-5G-Router, externe MIMO-Antenne, optional Power-Bank und WLAN-Access-Points. Der Koffer wird aufgestellt, eingeschaltet und liefert in unter 60 Sekunden Enterprise-grade-Internet — typisch bis 3,3 Gbit/s Download, Reichweite bis 500 m im freien Gelände.',
  },
  {
    q: 'Wofür wird ein 5G-Koffer eingesetzt?',
    a: 'Standorte ohne Festnetz oder mit zu langsamem DSL: Baustellen, Außendienst-Stützpunkte, Events, Container-Büros, Krisensituationen, mobile Werkstätten, Notfall-Internet bei Carrier-Ausfall. Ebenso für Industrie-IoT, Maschinen-Monitoring, Pop-up-Stores oder Filmcrew-Logistik vor Ort.',
  },
  {
    q: 'Welche Reichweite hat der 5G-Koffer?',
    a: 'Bis zu 500 Meter im freien Gelände bei optimaler Carrier-Abdeckung. In Gebäuden bzw. auf bebauten Flächen rechnen wir mit 80 bis 150 Metern pro Access-Point. Für größere Areale kombinieren wir den Koffer mit Mesh-fähigen Repeatern.',
  },
  {
    q: 'Wie schnell ist das Internet aus dem 5G-Koffer?',
    a: 'Bis zu 3,3 Gbit/s Download und 900 Mbit/s Upload im 5G-Standalone-Modus (4×4 MIMO). In der Praxis hängt das Tempo von der Carrier-Abdeckung am Standort ab. Bei schwachem 5G-Netz wechselt der Koffer automatisch auf LTE-Cat-20 (bis 2 Gbit/s).',
  },
  {
    q: 'Welche Mobilfunkanbieter werden unterstützt?',
    a: 'Multi-Carrier: Deutsche Telekom, Vodafone, O2 (Telefónica), 1&1 — und alle EU-Roaming-Partner via eSIM. Der Koffer prüft alle vier Netze parallel und wählt automatisch das stärkste. Bei Bedarf kommt jedes Gerät auch mit Business-SIM-Karte aus unserem Bestand.',
  },
  {
    q: 'Was kostet ein 5G-Koffer und gibt es Miete?',
    a: 'Kauf ab 1.999 € (Case-Connect Standard mit Teltonika RUTX50) bzw. 2.499 € (Professional mit Cradlepoint R980). Miete startet bei 49 € pro Tag bzw. 690 € pro Monat — inkl. Multi-Carrier-SIMs und Versand. Mietpreise sinken ab 4 Wochen Mietdauer deutlich; Kauf nach Miete ist anrechenbar.',
  },
  {
    q: 'Ist der Koffer wetterfest?',
    a: 'Ja. Gehäuse nach IP67 (staubdicht, kurzzeitig wassergeschützt). Die Antenne ist outdoor-fest gemäß IP65. Betriebstemperatur −20 °C bis +60 °C. Für dauerhafte Outdoor-Installation empfehlen wir die Wallmount-Halterung mit Sonnen- und Frostschutz.',
  },
  {
    q: 'Brauche ich technisches Wissen zum Aufbau?',
    a: 'Nein. Der Koffer ist Plug & Play. Stecker rein, Schalter an, fertig — Konfiguration läuft beim ersten Start automatisch. Auf Wunsch managen wir den Koffer remote über Teltonika RMS bzw. Cradlepoint Netcloud (Firmware-Updates, Monitoring, Geräte-Sperre bei Diebstahl).',
  },
];
