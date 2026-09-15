// FAQ-Inhalte, bewusst ohne 'use client'.
//
// Die Daten werden an zwei Stellen gebraucht: in der Client-Komponente FAQ.tsx
// (Accordion) und im FAQPage-JSON-LD in app/layout.tsx, das serverseitig
// gerendert wird. Importiert eine Server Component aus einem 'use client'-Modul,
// ersetzt Next den Import durch eine Client-Referenz: Komponenten passieren die
// Grenze, ein Array nicht. Aus `FAQS` wurde dabei ein Proxy-Objekt, und der
// Prerender brach mit `FAQS.map is not a function` ab. Deshalb liegen die Daten
// hier in einem eigenen, server-seitig lesbaren Modul.

export type FaqEntry = { q: string; a: string };

export const FAQS: FaqEntry[] = [
  {
    q: 'Was ist ein 5G-Koffer?',
    a: 'Ein 5G-Koffer ist ein mobiles Netzwerk-System in einem Koffer. Im 5G Case von Case-Connect steckt ein Teltonika RUTX50 (5G mit Rückfall auf 4G LTE, Dual-SIM, Dual-Band-WLAN, 5 × Gigabit-Ethernet) mit einer Poynting 5G-Panelantenne im Kofferdeckel, eingebaut in einen robusten PARAT-Systemkoffer. Alle vier Mobilfunkpfade des Routers liegen auf dieser Panelantenne (4×4 MIMO), dazu kommt eine integrierte GNSS-Antenne. Er wird vorkonfiguriert geliefert, läuft an Netz, Werkzeugakku oder 12-V-Kfz-Buchse und schafft bis 3,3 Gbit/s Download (Herstellerangabe, real abhängig von Netz und Standort).',
  },
  {
    q: 'Wofür wird ein 5G-Koffer eingesetzt?',
    a: 'Standorte ohne Festnetz oder mit zu langsamem DSL: Baustellen, Außendienst-Stützpunkte, Events, Container-Büros, mobile Werkstätten, Notfall-Internet bei Carrier-Ausfall. Ebenso für Industrie-IoT, Maschinen-Monitoring, Pop-up-Stores oder Filmcrew-Logistik vor Ort.',
  },
  {
    q: 'Welche Reichweite hat der 5G-Koffer?',
    a: 'Die WLAN-Reichweite hängt stark von Umgebung, Bebauung und Endgeräten ab, deshalb nennen wir keine pauschale Meterzahl. Für weiter entfernte Geräte, Maschinen, Kameras oder andere Etagen liegt ein 30 m langes Cat6-Netzwerkkabel bei, der Router hat 5 × Gigabit-Ethernet. Zusätzlich liegt ein Cudy RE3000 Wi-Fi-6-Mesh-Repeater bei: Er verlängert das WLAN drahtlos oder hängt per Netzwerkkabel am Koffer und spannt am Zielort ein eigenes Wi-Fi-6-Netz auf. Er braucht dort eine Steckdose.',
  },
  {
    q: 'Wie schnell ist das Internet aus dem 5G-Koffer?',
    a: 'Bis 3,3 Gbit/s Download (Herstellerangabe des Teltonika RUTX50). Das tatsächliche Tempo hängt von Netz und Standort ab. Ist kein 5G verfügbar, fällt der Router auf 4G LTE zurück.',
  },
  {
    q: 'Welche Mobilfunkanbieter werden unterstützt?',
    a: 'Der Koffer nimmt zwei SIM-Karten auf, so lassen sich zwei Mobilfunkanbieter kombinieren. Dual-SIM mit automatischem Failover: fällt ein Netz aus, wechselt der Router auf die zweite SIM.',
  },
  {
    q: 'Was kostet ein 5G-Koffer und gibt es Miete?',
    a: 'Kauf: 1.999 € netto (5G Case Standard mit Teltonika RUTX50). Miete startet bei 49 € pro Tag bzw. 690 € pro Monat, inkl. Multi-Carrier-SIMs und Versand. Mietpreise sinken ab 4 Wochen Mietdauer deutlich; Kauf nach Miete ist anrechenbar.',
  },
  {
    q: 'Kann der Koffer draußen oder bei Regen betrieben werden?',
    a: 'Der 5G Case ist ein robuster PARAT-Systemkoffer, ausgelegt für den Betrieb in trockener Umgebung bei 0 bis 35 °C. Bei Regen oder in feuchter Umgebung darf er nicht betrieben werden. Im Betrieb bleiben Deckel und Staufach geöffnet (Wärmeabfuhr). Bei Transport den Akku entnehmen.',
  },
  {
    q: 'Brauche ich technisches Wissen zum Aufbau?',
    a: 'Grundkenntnisse genügen. Der Router kommt von Comms Connect vorkonfiguriert. Strom anschließen (Netz, Akku oder Kfz), Drehwahlschalter auf die Quelle stellen, die Status-LED zeigt die Versorgung an, dann per WLAN oder LAN-Kabel verbinden. Auf Wunsch managen wir den Koffer remote über Teltonika RMS (Firmware-Updates, Monitoring, Geräte-Sperre bei Diebstahl).',
  },
];
