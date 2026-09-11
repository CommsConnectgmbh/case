// Ratgeber-Content für case-connect.de — SEO-Hub rund um den 5G-Koffer.
// Jeder Artikel zielt auf ein Such-Keyword und verlinkt zurück auf den Shop.

export type FAQ = { q: string; a: string };
export type Section = { h2: string; p: string[]; bullets?: string[] };
export type Article = {
  slug: string;
  keyword: string;
  title: string; // H1
  metaTitle: string;
  metaDescription: string;
  datePublished: string;
  readingMinutes: number;
  teaser: string;
  lead: string;
  sections: Section[];
  faq: FAQ[];
};

export const articles: Article[] = [
  {
    slug: 'mobiles-internet-baustelle',
    keyword: 'mobiles Internet Baustelle',
    title: 'Mobiles Internet auf der Baustelle: Die Optionen im Vergleich',
    metaTitle: 'Mobiles Internet auf der Baustelle — 5 Lösungen im Vergleich',
    metaDescription:
      'Baustelle ohne Netz? Wir vergleichen Festnetz, Campus-Netz, LTE-Stick, Satellit und 5G-Koffer — und zeigen, wann welche Lösung am schnellsten online ist.',
    datePublished: '2026-06-04',
    readingMinutes: 6,
    teaser: 'Festnetz, Campus-Netz, LTE-Stick, Satellit oder 5G-Koffer — welche Lösung bringt die Baustelle am schnellsten und zuverlässigsten online?',
    lead: 'Auf einer frischen Baustelle gibt es selten einen Festnetzanschluss — aber Baudokumentation, Maschinensteuerung, Cloud-Pläne und Video-Calls brauchen ein stabiles Netz ab dem ersten Tag. Hier sind die fünf praxistauglichen Optionen und wann sich welche lohnt.',
    sections: [
      {
        h2: '1. Festnetz / DSL-Baustromanschluss',
        p: [
          'Der klassische Weg: ein temporärer DSL- oder Glasfaseranschluss über den Bauträger. Technisch stabil, aber in der Praxis oft der langsamste Weg — Vorlaufzeiten von Wochen bis Monaten sind die Regel, und auf abgelegenen oder kurzlebigen Baustellen lohnt sich der Aufwand nicht.',
        ],
        bullets: ['Gut für: lange Projekte mit fester Bauleitung', 'Schwäche: lange Vorlaufzeit, an einen Ort gebunden'],
      },
      {
        h2: '2. LTE-Stick oder Handy-Hotspot',
        p: [
          'Die schnellste Notlösung, aber selten eine echte: Ein einzelner Surfstick oder das Smartphone als Hotspot versorgt ein, zwei Geräte über ein paar Meter. Sobald mehrere Leute, Tablets zur Bauabnahme oder eine Kamera dranhängen, bricht es zusammen. Reichweite und gleichzeitige Verbindungen sind das Limit.',
        ],
        bullets: ['Gut für: Einzelperson, kurzer Einsatz', 'Schwäche: keine Reichweite, wenige Geräte, kein Ausfallschutz'],
      },
      {
        h2: '3. Privates 5G-Campus-Netz',
        p: [
          'Für Großbaustellen und Industrieareale eine starke, aber schwergewichtige Lösung: ein dediziertes 5G-Netz mit eigener Frequenz. Hohe Leistung und Abdeckung — dafür Planung, Hardware-Investition und Genehmigung. Für die meisten Baustellen überdimensioniert.',
        ],
        bullets: ['Gut für: dauerhafte Großareale', 'Schwäche: teuer, planungsintensiv, nicht mobil'],
      },
      {
        h2: '4. Satelliten-Internet',
        p: [
          'Dort, wo gar kein Mobilfunk ankommt (Tunnel-Vorfeld, abgelegene Trassen), ist Satellit oft die einzige Option. Mittlerweile schnell und in Minuten aufgebaut — aber abhängig von freier Sicht zum Himmel, wetteranfällig und mit höheren laufenden Kosten als Mobilfunk.',
        ],
        bullets: ['Gut für: echte Funklöcher ohne Mobilfunk', 'Schwäche: braucht freie Sicht, teurer im Betrieb'],
      },
      {
        h2: '5. Mobiler 5G-Koffer',
        p: [
          'Der Mittelweg, der für die meisten Baustellen am besten passt: ein robuster Koffer mit Industrie-5G-Router, Panelantenne und Stromversorgung aus Netz, Werkzeugakku oder Kfz. Er kommt vorkonfiguriert und verteilt das Netz per WLAN und über fünf Gigabit-Ports samt 25-m-Netzwerkkabel an viele Geräte gleichzeitig. Dual-SIM heißt: fällt ein Mobilfunknetz aus, wird automatisch umgeschaltet.',
          'Kein Tiefbau, kein Techniker, keine Wartezeit. Genau dafür ist Case Connect gebaut: ein robuster PARAT-Systemkoffer, akkubetrieben für Standorte ohne Strom. Betrieben wird er in trockener Umgebung, etwa im Baucontainer oder im Rohbau unter Dach, nicht im Regen.',
        ],
        bullets: ['Gut für: nahezu jede Baustelle, sofort und mobil', 'Schwäche: braucht Mobilfunkempfang (sonst Satellit ergänzen)'],
      },
      {
        h2: 'Fazit: Was passt wann?',
        p: [
          'Für die typische Baustelle ohne Festanschluss ist der 5G-Koffer die schnellste verlässliche Lösung: sofort online, mobil, mehrgeräte-tauglich und mit Ausfallschutz. Festnetz lohnt nur bei langen Projekten, Campus-Netze nur bei Großarealen, Satellit nur im echten Funkloch.',
        ],
      },
    ],
    faq: [
      { q: 'Wie schnell ist mobiles Internet auf der Baustelle einsatzbereit?', a: 'Mit einem 5G-Koffer ohne Vorlauf: aufstellen, Strom anschließen, einschalten, verbinden. Der Router kommt vorkonfiguriert. Ein Festnetzanschluss braucht dagegen Wochen Vorlauf.' },
      { q: 'Wie viele Geräte kann ein 5G-Koffer versorgen?', a: 'Viele gleichzeitig, per WLAN und über 5 × Gigabit-Ethernet: genug für Bauleitung, Tablets zur Dokumentation, Kameras und Maschinensteuerung.' },
      { q: 'Funktioniert das auch ohne Stromanschluss?', a: 'Ja. Case Connect lässt sich akkubetrieben einsetzen, auch dort, wo noch kein Baustrom liegt.' },
    ],
  },
  {
    slug: '5g-koffer-mieten-oder-kaufen',
    keyword: '5G Koffer mieten',
    title: '5G-Koffer mieten oder kaufen? Wann sich was rechnet',
    metaTitle: '5G-Koffer mieten oder kaufen — wann sich was lohnt',
    metaDescription:
      'Lohnt sich ein 5G-Koffer zur Miete oder zum Kauf? Wir vergleichen beide Wege nach Einsatzdauer, Häufigkeit und Kosten — mit klarer Entscheidungshilfe.',
    datePublished: '2026-06-04',
    readingMinutes: 5,
    teaser: 'Kurzer Einsatz oder Dauerbedarf? Die Faustregel, ab wann sich Kauf gegenüber Miete lohnt.',
    lead: 'Ob sich Mieten oder Kaufen eines 5G-Koffers lohnt, hängt an drei Fragen: Wie oft brauchst du ihn, wie lange jeweils, und willst du ihn an Kunden weitergeben? Hier ist die Entscheidungshilfe.',
    sections: [
      {
        h2: 'Wann Mieten sinnvoll ist',
        p: [
          'Miete passt, wenn der Bedarf punktuell ist: ein einzelnes Event, eine kurze Bauphase, ein einmaliger Dreh. Du zahlst nur für den Zeitraum und musst dich nicht um Lagerung, Updates oder SIM-Verträge kümmern.',
        ],
        bullets: ['Einmalige oder seltene Einsätze', 'Projekte mit klarem Anfang und Ende', 'Test, bevor man sich für den Kauf entscheidet'],
      },
      {
        h2: 'Wann Kaufen sich rechnet',
        p: [
          'Sobald der Koffer mehrmals im Jahr im Einsatz ist, kippt die Rechnung schnell zugunsten des Kaufs — Mietkosten summieren sich, ein gekauftes Gerät steht jederzeit bereit. Für Betriebe mit wiederkehrendem Bedarf (Servicetechnik, Eventtechnik, mehrere Baustellen) ist Kauf meist die günstigere und flexiblere Wahl.',
        ],
        bullets: ['Mehrfacher Einsatz pro Jahr', 'Sofortige Verfügbarkeit ohne Buchung', 'Volle Kontrolle über SIM, Konfiguration und Einsatzort'],
      },
      {
        h2: 'Der dritte Weg: weitervermieten',
        p: [
          'Für IT-Systemhäuser, Eventausstatter und Geräte-Vermieter ist der Koffer selbst ein Produkt: einmal kaufen, mehrfach an Endkunden vermieten. Dann amortisiert sich der Kauf über die Mieteinnahmen — und du baust ein wiederkehrendes Geschäft auf.',
        ],
      },
      {
        h2: 'Case Connect: kaufen ab Lager',
        p: [
          'Case Connect ist als Kaufgerät ausgelegt: der 5G Case Standard, sofort lieferbar, ohne Mindestlaufzeit. Wer wiederverkaufen oder selbst vermieten möchte, findet im Partnerprogramm passende Konditionen.',
        ],
      },
    ],
    faq: [
      { q: 'Ab wann lohnt sich der Kauf gegenüber der Miete?', a: 'Als Faustregel: sobald der Koffer mehr als zwei- bis dreimal im Jahr gebraucht wird, ist Kauf in der Regel günstiger als wiederholte Miete.' },
      { q: 'Kann ich einen gekauften Koffer selbst weitervermieten?', a: 'Ja — das ist ein gängiges Modell für Systemhäuser und Vermieter. Über das Partnerprogramm gibt es dafür eigene Konditionen.' },
      { q: 'Gibt es eine Mindestlaufzeit beim Kauf?', a: 'Nein. Der Koffer wird gekauft und gehört dir — ohne Vertragsbindung oder laufende Gebühren für das Gerät.' },
    ],
  },
  {
    slug: 'wlan-fuer-events',
    keyword: 'WLAN für Events',
    title: 'WLAN für Events ohne Festanschluss: in Minuten ein stabiles Gäste-Netz',
    metaTitle: 'WLAN für Events — stabiles Gäste-Netz ohne Festanschluss',
    metaDescription:
      'WLAN für Messe, Konferenz oder Open-Air ohne Festanschluss aufbauen: So planst du Kapazität, Reichweite und Ausfallschutz mit einem mobilen 5G-Koffer.',
    datePublished: '2026-06-04',
    readingMinutes: 5,
    teaser: 'Gäste-WLAN, Ticketing, Kartenzahlung, Livestream — wie du ein Event-Netz aufsetzt, das auch bei voller Halle hält.',
    lead: 'Auf Events entscheidet das Netz über Ticketing, Kartenzahlung, Gäste-WLAN und Livestream — und genau dann ist das öffentliche Mobilfunknetz oft überlastet. So baust du ein eigenes, stabiles Netz ohne Festanschluss auf.',
    sections: [
      {
        h2: 'Das Problem: geteiltes Netz bricht zusammen',
        p: [
          'Bei einer vollen Halle hängen hunderte Besucher am selben Mobilfunkmast. Genau in dem Moment soll dein Kassensystem buchen und der Stream laufen. Ein eigenes Netz entkoppelt deine kritischen Anwendungen vom überlasteten Publikumsnetz.',
        ],
      },
      {
        h2: 'Kapazität richtig planen',
        p: [
          'Trenne, was wirklich Bandbreite braucht (Streaming, Uploads) von dem, was nur stabil sein muss (Kasse, Ticket-Scan). Plane lieber einen Koffer als zentrale Insel für die Kernsysteme und ein separates Gäste-WLAN, statt alles in einen Topf zu werfen.',
        ],
        bullets: ['Kernsysteme (Kasse, Ticketing) zuerst absichern', 'Gäste-WLAN getrennt halten', 'Bei großen Flächen mehrere Koffer als Zellen verteilen'],
      },
      {
        h2: 'Reichweite & Aufbau',
        p: [
          'Ein 5G-Koffer liefert Dual-Band-WLAN direkt am Standort. Wie weit das WLAN reicht, hängt von Halle, Bebauung und Publikum ab. Für viele Setups reicht ein einziger Koffer als zentrale Quelle, von der aus per LAN weiterverteilt wird: Der 5G Case hat 5 × Gigabit-Ethernet und ein 25 m langes Netzwerkkabel im Lieferumfang. Kein Techniker, kein Kabelgraben.',
        ],
      },
      {
        h2: 'Ausfallschutz per Multi-SIM',
        p: [
          'Auf einem Event gibt es keinen zweiten Versuch. Ein Koffer mit Multi-SIM nutzt mehrere Mobilfunknetze gleichzeitig — fällt eines aus oder ist überlastet, läuft es über das andere weiter. Genau das macht den Unterschied zwischen „lief" und „stand still".',
        ],
      },
    ],
    faq: [
      { q: 'Reicht ein Koffer für ein ganzes Event?', a: 'Für viele kleine bis mittlere Events ja — ein Koffer als zentrale Quelle, von dort per LAN/WLAN verteilt. Bei großen Flächen verteilt man mehrere Koffer als Zellen.' },
      { q: 'Wie schütze ich Kasse und Ticketing vor Ausfall?', a: 'Über Multi-SIM: Der Koffer nutzt mehrere Netze gleichzeitig und schaltet bei Ausfall automatisch um. Kernsysteme sollten in einem eigenen Netz vom Gäste-WLAN getrennt laufen.' },
      { q: 'Brauche ich für das Event-WLAN einen Festanschluss?', a: 'Nein. Der 5G-Koffer ist die Internetquelle selbst — er braucht nur Mobilfunkempfang und Strom oder Akku.' },
    ],
  },
  {
    slug: 'mobiles-wlan-servicetechniker',
    keyword: 'mobiles Internet Servicetechniker',
    title: 'Mobiles WLAN für Servicetechniker: Diagnose & Fernzugriff ohne Kundennetz',
    metaTitle: 'Mobiles WLAN für Servicetechniker — unabhängig vom Kundennetz',
    metaDescription:
      'Servicetechniker brauchen vor Ort Internet, das nicht vom Kundennetz abhängt. So sichern Sie Fernwartung, Diagnose und Cloud-Zugriff mit einem mobilen 5G-Koffer.',
    datePublished: '2026-06-04',
    readingMinutes: 4,
    teaser: 'Warum eigenes Netz im Außendienst schneller und sicherer ist als das WLAN des Kunden.',
    lead: 'Servicetechniker stehen oft vor verschlossenen Kundennetzen: kein Gastzugang, Firewall, IT nicht erreichbar. Ein eigenes mobiles Netz macht den Außendienst unabhängig — für Diagnose, Fernwartung und Cloud-Zugriff direkt an der Maschine.',
    sections: [
      {
        h2: 'Das Kundennetz ist kein verlässlicher Partner',
        p: [
          'Auf den Gastzugang des Kunden zu hoffen, kostet Zeit und scheitert oft an Sicherheitsrichtlinien. Mit einem eigenen Netz bist du schnell online, unabhängig davon, ob die Kunden-IT mitspielt.',
        ],
      },
      {
        h2: 'Sicher per VPN & Fernwartung',
        p: [
          'Ein eigenes Netz trennt deine Geräte sauber vom Kundennetz und erlaubt sichere VPN-Verbindungen ins eigene Backend. Fernwartung, Software-Updates und Zugriff auf Wartungsportale laufen über deine kontrollierte Verbindung.',
        ],
        bullets: ['Unabhängig von Kunden-Firewall und Gast-WLAN', 'Saubere Trennung vom Kundennetz', 'VPN/Fernzugriff ins eigene System'],
      },
      {
        h2: 'Klein, schnell, akkubetrieben',
        p: [
          'Für den Außendienst zählt: aufstellen, einschalten, arbeiten. Ein 5G-Koffer kommt vorkonfiguriert, läuft an Netz, Werkzeugakku oder Kfz-Buchse und versorgt Laptop, Diagnosegerät und Tablet gleichzeitig, auch in Maschinenhalle oder Keller.',
        ],
      },
    ],
    faq: [
      { q: 'Warum nicht einfach den Handy-Hotspot nutzen?', a: 'Für eine einzelne Verbindung reicht das, aber Diagnosegerät, Laptop und Tablet zusammen plus stabile VPN-Verbindung überfordern den Hotspot schnell. Ein Koffer liefert Reichweite, mehrere Geräte und Ausfallschutz.' },
      { q: 'Komme ich damit an Maschinen in Kellern oder Hallen?', a: 'Mit einer Hochleistungsantenne und Akkubetrieb funktioniert das auch dort, wo das Handy längst keinen Empfang mehr hat — und das Signal wird per WLAN über die Halle verteilt.' },
    ],
  },
  {
    slug: 'internet-am-filmset',
    keyword: 'Internet Filmset',
    title: 'Internet am Filmset & bei Outdoor-Produktionen',
    metaTitle: 'Internet am Filmset — stabiler Upload bei Outdoor-Produktionen',
    metaDescription:
      'Dailies hochladen, remote review, Cloud-Workflows: So sichern Sie am Set und bei Outdoor-Drehs eine stabile Internetverbindung mit einem mobilen 5G-Koffer.',
    datePublished: '2026-06-04',
    readingMinutes: 4,
    teaser: 'Daten-Offload, Remote-Review und Streaming vom Set — auch dort, wo keine Leitung liegt.',
    lead: 'Moderne Filmproduktion ist datenintensiv: Dailies hochladen, Remote-Review mit Kunden, Cloud-Backup direkt vom Set. Genau dort, wo gedreht wird, gibt es aber selten eine Leitung. So bleibt die Produktion auch im Nirgendwo angebunden.',
    sections: [
      {
        h2: 'Upload ist König',
        p: [
          'Am Set geht es weniger um Download als um stabilen Upload großer Datenmengen. Ein Koffer mit Multi-SIM bündelt mehrere Mobilfunknetze und hält den Upload auch dann stabil, wenn ein einzelnes Netz schwächelt.',
        ],
      },
      {
        h2: 'Ein Netz für das ganze Team',
        p: [
          'Video-Village, DIT-Station, Regie und Aufnahmeleitung sind über das Set verteilt. Statt jedem einen eigenen Hotspot zu geben, spannt ein Koffer ein gemeinsames Netz auf, per Dual-Band-WLAN und bei Bedarf per LAN-Kabel (25 m im Lieferumfang). Alle ziehen aus derselben stabilen Quelle.',
        ],
        bullets: ['DIT-Daten-Offload in die Cloud', 'Remote-Review mit Kunden/Producer', 'Streaming und Live-Monitoring'],
      },
      {
        h2: 'Strom und Aufstellung bei Außendrehs',
        p: [
          'Drehs finden oft fernab jeder Steckdose statt. Der 5G Case läuft an Werkzeugakku oder an der 12-V-Kfz-Buchse des Produktionsfahrzeugs, ganz ohne Generator. Aufgestellt wird er trocken und geschützt, etwa im Fahrzeug oder an der DIT-Station: Betrieb mit geöffnetem Deckel bei 0 bis 35 °C, nicht bei Regen. Für den Transport den Akku entnehmen.',
        ],
      },
    ],
    faq: [
      { q: 'Reicht die Bandbreite für Dailies-Upload?', a: 'Über gebündelte Mobilfunknetze (Multi-SIM) lässt sich auch außerhalb der Stadt ein stabiler Upload erreichen. In echten Funklöchern lässt sich Satellit ergänzen.' },
      { q: 'Kann das ganze Team ein Netz nutzen?', a: 'Ja, der Koffer verteilt ein gemeinsames WLAN über das Set, sodass Video-Village, DIT und Regie aus einer Quelle arbeiten.' },
    ],
  },
  {
    slug: 'wie-funktioniert-ein-5g-internetkoffer',
    keyword: 'wie funktioniert Internetkoffer',
    title: 'Wie funktioniert ein 5G-Internetkoffer? Technik, Akku, SIM & Reichweite',
    metaTitle: 'Wie funktioniert ein 5G-Internetkoffer? Einfach erklärt',
    metaDescription:
      'Was steckt in einem 5G-Internetkoffer und wie kommt das Internet ins Gerät? Router, Antenne, SIM, Akku und Reichweite verständlich erklärt.',
    datePublished: '2026-06-04',
    readingMinutes: 5,
    teaser: 'Router, Antenne, SIM, Akku — was im Koffer steckt und wie aus Mobilfunk ein stabiles WLAN wird.',
    lead: 'Ein 5G-Internetkoffer klingt komplex, ist im Kern aber einfach: Er empfängt Mobilfunk und verteilt ihn als WLAN und LAN weiter — wie ein WLAN-Router, nur mobil, robust und ohne festen Anschluss. So funktioniert er Schritt für Schritt.',
    sections: [
      {
        h2: 'Der Router im Inneren',
        p: [
          'Herzstück ist ein Industrie-Mobilfunkrouter (im 5G Case ein Teltonika RUTX50). Er nimmt das 5G-/LTE-Signal auf und stellt daraus ein WLAN- und LAN-Netz bereit, mit dem sich Laptops, Tablets, Kameras und Maschinen verbinden, genau wie zu Hause am Router.',
        ],
      },
      {
        h2: 'Antenne & Reichweite',
        p: [
          'Hochleistungsantennen holen auch dort noch Signal, wo ein Handy aufgibt. Im 5G Case sitzt eine Poynting 5G-Panelantenne im Kofferdeckel. Verteilt wird das Netz per Dual-Band-WLAN, dessen Reichweite von Umgebung und Bebauung abhängt. Für feste Punkte gibt es zusätzlich 5 × Gigabit-Ethernet und ein 25 m langes Netzwerkkabel, um z. B. aus dem Keller nach oben zu kommen.',
        ],
      },
      {
        h2: 'SIM & Multi-Carrier',
        p: [
          'Der Koffer nimmt SIM-Karten der Mobilfunkbetreiber auf. Mit Multi-SIM laufen mehrere Netze gleichzeitig: Ist eines überlastet oder ausgefallen, schaltet der Router automatisch um — der Nutzer merkt davon nichts.',
        ],
        bullets: ['Physische SIM mehrerer Anbieter', 'Automatisches Umschalten bei Ausfall', 'Fernverwaltung der Konfiguration möglich'],
      },
      {
        h2: 'Strom & Akku',
        p: [
          'Betrieben wird der Koffer per Netz, Akku oder Fahrzeug. Der 5G Case nimmt Netzstrom (100 bis 240 V), Werkzeugakkus von 18 bis 36 V über einen Akku-Adapter oder die 12-V-Kfz-Steckdose. Akkubetrieb ist der Grund, warum er auch dort läuft, wo es keine Steckdose gibt, etwa auf der Baustelle.',
        ],
      },
      {
        h2: 'So läuft die Inbetriebnahme',
        p: [
          'In der Praxis heißt das: Koffer öffnen, Strom anschließen, Drehwahlschalter auf die Stromquelle stellen und mit dem WLAN oder per LAN-Kabel verbinden. Der Router kommt vorkonfiguriert, ein Techniker ist nicht nötig.',
        ],
      },
    ],
    faq: [
      { q: 'Brauche ich technisches Wissen, um den Koffer zu nutzen?', a: 'Grundkenntnisse genügen: Strom anschließen, Stromquelle wählen, mit dem WLAN verbinden. Der Router wird vorkonfiguriert geliefert.' },
      { q: 'Welche SIM-Karte brauche ich?', a: 'Eine Daten-SIM eines Mobilfunkanbieters. Mit Multi-SIM lassen sich mehrere Anbieter parallel für Ausfallschutz nutzen.' },
      { q: 'Wie groß ist die Reichweite?', a: 'Die WLAN-Reichweite hängt von Umgebung, Bebauung und Endgeräten ab, eine pauschale Meterzahl nennen wir deshalb nicht. Für feste Punkte gibt es zusätzlich LAN, mit 25 m Netzwerkkabel im Lieferumfang.' },
    ],
  },
  {
    slug: 'ip67-5g-koffer-outdoor',
    keyword: 'Outdoor 5G Koffer',
    title: 'Outdoor-5G-Koffer: Kaufkriterien für mobiles Baustellen-Internet',
    metaTitle: 'Outdoor-5G-Koffer: Kaufkriterien für Baustelle und Außeneinsatz',
    metaDescription:
      'Mobiles Internet für Baustelle und Außeneinsatz: Schutzarten verständlich erklärt, dazu Stromversorgung, Temperaturbereich, Antenne und Dual-SIM als Kaufkriterien.',
    datePublished: '2026-06-04',
    readingMinutes: 5,
    teaser: 'Die Kaufkriterien für mobiles Internet auf Baustelle und Außenstelle: Schutzart, Strom, Temperatur, Antenne.',
    lead: 'Soll der 5G-Koffer auf der Baustelle, auf dem Event-Gelände oder an einer Außenstelle Netz liefern, entscheiden ein paar Kennwerte über Erfolg oder Frust. Diese Kriterien solltest du vor dem Kauf prüfen, und so ordnet sich der 5G Case von Case Connect ein.',
    sections: [
      {
        h2: 'Schutzarten: was die IP-Kennziffern bedeuten',
        p: [
          'Die IP-Schutzart nach DIN EN 60529 besteht aus zwei Ziffern. Die erste beschreibt den Schutz gegen Fremdkörper und Staub, die zweite den Schutz gegen Wasser. IP54 steht etwa für Staubschutz und Schutz gegen Spritzwasser, IP65 für Staubdichtheit und Schutz gegen Strahlwasser, IP67 für Staubdichtheit und Schutz beim zeitweiligen Untertauchen.',
          'Wichtig: Eine Schutzart gilt nur für den Zustand, in dem sie geprüft wurde, meist mit geschlossenem Gehäuse. Ein Koffer, der im Betrieb geöffnet sein muss, damit Wärme abziehen kann, ist im Betrieb nicht gegen Regen geschützt. Frag deshalb immer nach den Betriebsbedingungen des Herstellers, nicht nur nach der Kennziffer.',
        ],
      },
      {
        h2: 'Betriebsbedingungen beim 5G Case',
        p: [
          'Der 5G Case steckt in einem robusten PARAT-Systemkoffer, gefertigt von PARAT in Waldkirchen. Ausgelegt ist er für den Betrieb mit geöffnetem Deckel und geöffnetem Staufach in trockener Umgebung bei 0 bis 35 °C. Bei Regen oder in feuchter Umgebung darf er nicht betrieben werden. Auf der Baustelle heißt das: aufstellen im Baucontainer, im Rohbau unter Dach oder im Fahrzeug und von dort per WLAN oder LAN-Kabel verteilen.',
        ],
        bullets: [
          'Betrieb mit geöffnetem Deckel und Staufach (Wärmeabfuhr)',
          'Umgebungstemperatur 0 bis 35 °C',
          'Nicht bei Regen oder in feuchter Umgebung betreiben',
          'Akku bei Transport entnehmen',
        ],
      },
      {
        h2: 'Akku & Stromversorgung',
        p: [
          'Ohne Steckdose zählt die Stromversorgung. Achte darauf, welche Quellen der Koffer akzeptiert und ob er mit Akkus läuft, die im Betrieb ohnehin vorhanden sind. Wie lange ein Akku reicht, hängt von Akkugröße und Last ab; eine pauschale Laufzeit ist deshalb wenig aussagekräftig.',
          'Der 5G Case läuft an drei Quellen: Netz (100 bis 240 V), Werkzeugakkus von 18 bis 36 V über den Brennenstuhl MULTI Battery Adapter (Adapter für neun Akkusysteme, z. B. Makita, Milwaukee oder DeWalt) und die 12-V-Kfz-Steckdose. Der Akku wird nicht im Koffer geladen, sondern mit dem Originalladegerät.',
        ],
        bullets: ['Mehrere Stromquellen: Netz, Akku, Fahrzeug', 'Akkusystem, das im Betrieb schon vorhanden ist', 'Ersatzakkus für lange Tage einplanen'],
      },
      {
        h2: 'Antenne & Verteilung vor Ort',
        p: [
          'Eine gute Antenne entscheidet, ob am Rand der Abdeckung noch nutzbares Signal ankommt. Im 5G Case sitzt eine Poynting 5G-Panelantenne (A-PANL-0431) im Kofferdeckel. Vor Ort verteilt der Teltonika RUTX50 das Netz per Dual-Band-WLAN; wie weit das reicht, hängt von Umgebung und Bebauung ab. Für Maschinen, Kameras oder andere Etagen gibt es 5 × Gigabit-Ethernet und ein 25 m langes Cat6-Kabel im Lieferumfang.',
        ],
      },
      {
        h2: 'Dual-SIM & Verwaltung',
        p: [
          'Für verlässlichen Betrieb sollte der Koffer zwei SIM-Karten aufnehmen, bei Ausfall automatisch umschalten (Dual-SIM mit Failover) und sich aus der Ferne verwalten lassen. Beim 5G Case übernimmt das Teltonika RMS, die 10-Jahres-Lizenz ist inklusive. So lässt sich der Status prüfen, ohne vor Ort zu sein.',
        ],
      },
    ],
    faq: [
      { q: 'Was bedeutet IP67?', a: 'IP67 steht für staubdicht (6) und Schutz beim zeitweiligen Untertauchen (7). Die Angabe gilt für das geprüfte, in der Regel geschlossene Gehäuse. Für den Betrieb zählen die Betriebsbedingungen des Herstellers.' },
      { q: 'Kann der 5G Case im Regen betrieben werden?', a: 'Nein. Der 5G Case ist für den Betrieb mit geöffnetem Deckel in trockener Umgebung bei 0 bis 35 °C ausgelegt. Bei Regen oder in feuchter Umgebung darf er nicht betrieben werden. Stell ihn geschützt auf, etwa im Baucontainer oder im Fahrzeug, und verteile das Netz per WLAN oder LAN-Kabel.' },
      { q: 'Wie lange läuft der Koffer mit Akku?', a: 'Das hängt von Akkugröße und Last ab, deshalb nennen wir keine pauschale Laufzeit. Für lange Einsätze empfiehlt sich Netz- oder Kfz-Betrieb oder ein Ersatzakku.' },
      { q: 'Wie wichtig ist die Antenne?', a: 'Sehr, denn sie entscheidet, ob im Randbereich der Abdeckung überhaupt noch nutzbares Signal ankommt. Eine gute Antenne schlägt oft mehr Sendeleistung.' },
    ],
  },
  {
    slug: 'internet-fuer-messestand',
    keyword: 'Internet für Messestand',
    title: 'Internet für den Messestand: eigenes Netz statt teurem Hallen-WLAN',
    metaTitle: 'Internet für Messestand — eigenes 5G-Netz statt teurem Hallen-WLAN',
    metaDescription:
      'Messe-WLAN vom Veranstalter ist teuer, gedrosselt und unzuverlässig. So bringst du deinen Messestand mit einem eigenen 5G-Netz stabil online — für Demos, Kasse und Streaming.',
    datePublished: '2026-07-02',
    readingMinutes: 5,
    teaser: 'Das offizielle Hallen-WLAN ist teuer und bricht am Messetag zusammen, wenn Tausende gleichzeitig funken. Ein eigenes 5G-Netz am Stand macht dich unabhängig.',
    lead: 'Auf dem Messestand hängt fast alles am Netz: Produkt-Demos, Kartenzahlung, Lead-Erfassung, Video-Wall und der Live-Stream in die Zentrale. Das offizielle Messe-WLAN kostet oft mehrere Hundert Euro pro Tag, ist auf wenige Geräte begrenzt und wird genau dann langsam, wenn die Halle voll ist. Ein eigener 5G-Koffer löst das — ein Netz, das nur dir gehört.',
    sections: [
      {
        h2: 'Warum das offizielle Messe-WLAN so oft enttäuscht',
        p: [
          'Das WLAN des Veranstalters teilen sich Tausende Aussteller und Besucher. Es wird pro Gerät und pro Tag abgerechnet, häufig gedrosselt und ist in Stoßzeiten überlastet. Wer darauf seine Kartenzahlung oder eine Live-Demo aufbaut, riskiert genau im entscheidenden Moment einen Aussetzer.',
        ],
        bullets: ['Teuer: Tagespauschalen pro Gerät', 'Gedrosselt und in Spitzenzeiten überlastet', 'Kein Einfluss auf Stabilität oder Priorisierung'],
      },
      {
        h2: 'Ein eigenes 5G-Netz am Stand',
        p: [
          'Ein 5G-Koffer bringt eine eigene, private Verbindung mit: aufstellen, einschalten, alle Standgeräte verbinden sich per WLAN oder LAN. Das Netz gehört nur deinem Stand — keine Konkurrenz um Bandbreite, keine Tageslimits, keine Gerätezahl-Grenze vom Veranstalter.',
        ],
        bullets: ['Vorkonfiguriert geliefert, schnell aufgebaut', 'Dutzende Geräte gleichzeitig: Kasse, Tablets, Displays', 'Über mehrere Mobilfunknetze abgesichert'],
      },
      {
        h2: 'Was am Stand damit zuverlässig läuft',
        p: [
          'Kartenzahlung und Lead-Scanner brauchen wenig Bandbreite, aber absolute Zuverlässigkeit — genau das liefert ein dediziertes Netz. Für Video-Wall, Cloud-Demos und den Stream in die Zentrale zählt stabiler Upload, den ein 5G-Koffer mit guter Antenne auch in der Messehalle hält.',
        ],
      },
      {
        h2: 'Mieten für die Messewoche oder kaufen',
        p: [
          'Wer ein paar Messen im Jahr fährt, mietet den Koffer für die Standtage. Wer regelmäßig ausstellt oder mehrere Teams ausstattet, kauft — dann steht das eigene Messe-Netz jederzeit bereit, ganz ohne wiederkehrende WLAN-Gebühren des Veranstalters.',
        ],
      },
    ],
    faq: [
      { q: 'Funktioniert 5G überhaupt zuverlässig in einer vollen Messehalle?', a: 'Ja — ein Koffer mit guter Antenne und Multi-Netz-Fähigkeit wählt das beste verfügbare Netz. Anders als das geteilte Hallen-WLAN wird deine Bandbreite nicht von Tausenden Nachbarn aufgebraucht.' },
      { q: 'Reicht ein Koffer für einen kompletten Messestand?', a: 'Für die allermeisten Stände ja: Kasse, Tablets, Lead-Scanner, Displays und Stream laufen gleichzeitig über einen Koffer. Bei sehr großen Ständen verteilt man zwei Koffer als Zellen.' },
      { q: 'Was kostet das im Vergleich zum Veranstalter-WLAN?', a: 'Die Tagespauschalen des Veranstalters summieren sich über mehrere Geräte und Messetage schnell. Ein gemieteter Koffer deckt den ganzen Stand mit einem Gerät ab — meist deutlich günstiger und ohne Limits.' },
    ],
  },
  {
    slug: 'internet-ausfall-ueberbruecken',
    keyword: 'Internet-Ausfall überbrücken',
    title: 'Internet-Ausfall überbrücken: so bleibt der Betrieb online',
    metaTitle: 'Internet-Ausfall überbrücken — Backup-Leitung per 5G-Koffer',
    metaDescription:
      'Fällt die Firmenleitung aus, steht der Betrieb: keine Kasse, kein ERP, keine Telefonie. So überbrückst du einen Internet-Ausfall schnell mit einem 5G-Koffer als Backup.',
    datePublished: '2026-07-02',
    readingMinutes: 5,
    teaser: 'Ein Bagger kappt das Glasfaserkabel, der Provider hat eine Störung, und die ganze Firma steht. Ein 5G-Koffer als Backup bringt den Betrieb schnell wieder online.',
    lead: 'Moderne Betriebe hängen komplett am Netz: Warenwirtschaft, Kasse, Cloud-Software, VoIP-Telefonie und Kartenzahlung. Fällt die Hauptleitung aus — Bauarbeiten, Provider-Störung, defekter Router — kostet jede Stunde bares Geld. Ein 5G-Koffer als vorbereitetes Backup überbrückt den Ausfall sofort, ohne Technikertermin.',
    sections: [
      {
        h2: 'Was ein Internet-Ausfall wirklich kostet',
        p: [
          'Steht die Leitung, steht meist der ganze Betrieb: Die Kasse nimmt keine Kartenzahlung mehr an, das Cloud-ERP ist nicht erreichbar, VoIP-Telefone sind tot und Mitarbeiter im Homeoffice oder Servicetechniker sind abgeschnitten. Provider-Entstörungen dauern oft Stunden bis Tage — Zeit, die sich kaum ein Betrieb leisten kann.',
        ],
        bullets: ['Kasse & Kartenzahlung fallen aus', 'Cloud-Software und ERP nicht erreichbar', 'VoIP-Telefonie tot', 'Entstörung dauert Stunden bis Tage'],
      },
      {
        h2: 'Der 5G-Koffer als sofortiges Backup',
        p: [
          'Ein 5G-Koffer steht griffbereit im Schrank und ist schnell aktiv: Strom anschließen, einschalten, per LAN an den Firmenrouter oder Switch hängen, und der Betrieb ist über Mobilfunk wieder online. Weil der Koffer mehrere Netze nutzen kann, ist er auch dann verfügbar, wenn ein einzelnes Netz gestört ist.',
        ],
        bullets: ['Vorkonfiguriert geliefert', 'An Router/Switch angeschlossen: die ganze Firma nutzt es', 'Mehrere Mobilfunknetze als Absicherung'],
      },
      {
        h2: 'Automatisches Failover vs. Koffer im Schrank',
        p: [
          'Große Standorte binden ein Backup fest als automatisches Failover ein — fällt die Hauptleitung, schaltet der Router selbsttätig auf Mobilfunk um. Für kleinere Betriebe und Filialen reicht oft der Koffer im Schrank, der im Ernstfall in Minuten eingesteckt wird. Beides ist mit einem 5G-Koffer möglich.',
        ],
      },
      {
        h2: 'Vorbereitet statt überrascht',
        p: [
          'Der Unterschied zwischen einem teuren Stillstand und einer kurzen Störung ist Vorbereitung. Ein Koffer, der bereit liegt und dessen Bedienung das Team kennt, macht aus einem Ausfall eine Randnotiz. Wer nur selten ein Backup braucht, mietet für die Störungsdauer — wer Ausfallsicherheit dauerhaft will, kauft.',
        ],
      },
    ],
    faq: [
      { q: 'Wie schnell ist der Koffer im Ausfall einsatzbereit?', a: 'Schnell und ohne Technikertermin: Strom anschließen, einschalten und per LAN an den Router hängen. Der Router im Koffer kommt vorkonfiguriert, die Firmengeräte sind dann wieder über Mobilfunk online.' },
      { q: 'Nutzt bei einem Ausfall die ganze Firma den Koffer oder nur ein Gerät?', a: 'Die ganze Firma. Am Router oder Switch angeschlossen versorgt der Koffer das komplette Netzwerk — Kassen, Rechner, Telefone und WLAN wie gewohnt.' },
      { q: 'Lohnt sich ein Koffer, wenn selten etwas ausfällt?', a: 'Gerade dann: Ein einziger vermiedener Ausfalltag kostet meist mehr als der Koffer. Wer nur die Störung überbrücken will, mietet ihn für die Ausfalldauer.' },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
