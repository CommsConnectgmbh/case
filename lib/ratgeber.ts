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
          'Der Mittelweg, der für die meisten Baustellen am besten passt: ein robuster Koffer mit Industrie-5G-Router, Hochleistungsantenne und Akku. In unter 60 Sekunden hochgefahren, spannt er per WLAN ein Netz über bis zu 500 Meter auf — für viele Geräte gleichzeitig. Multi-SIM heißt: fällt ein Mobilfunknetz aus, wird automatisch umgeschaltet.',
          'Kein Tiefbau, kein Techniker, keine Wartezeit. Genau dafür ist Case Connect gebaut — IP67-geschützt gegen Staub und Regen, akkubetrieben für Standorte ohne Strom.',
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
      { q: 'Wie schnell ist mobiles Internet auf der Baustelle einsatzbereit?', a: 'Mit einem 5G-Koffer in unter 60 Sekunden — aufstellen, einschalten, verbinden. Ein Festnetzanschluss braucht dagegen Wochen Vorlauf.' },
      { q: 'Wie viele Geräte kann ein 5G-Koffer versorgen?', a: 'Je nach Variante mehrere Dutzend gleichzeitig — genug für Bauleitung, Tablets zur Dokumentation, Kameras und Maschinensteuerung.' },
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
          'Case Connect ist als Kaufgerät ausgelegt — in zwei Varianten, sofort lieferbar, ohne Mindestlaufzeit. Wer wiederverkaufen oder selbst vermieten möchte, findet im Partnerprogramm passende Konditionen.',
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
          'Ein 5G-Koffer spannt per WLAN ein Netz über bis zu 500 Meter auf — für viele Setups reicht ein einziger Koffer als zentrale Quelle, von der aus per LAN weiterverteilt wird. Aufbau in Minuten, kein Techniker, kein Kabelgraben.',
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
    slug: '5g-einsatzkoffer-bos',
    keyword: '5G Koffer BOS',
    title: '5G-Einsatzkoffer für BOS: Konnektivität für Feuerwehr, THW & Rettungsdienst',
    metaTitle: '5G-Einsatzkoffer für BOS — Konnektivität an der Einsatzstelle',
    metaDescription:
      'Mobile Datenverbindung für Feuerwehr, THW, Rettungsdienst und Katastrophenschutz: Worauf es beim 5G-Einsatzkoffer ankommt — Multi-SIM, IP67, Akku.',
    datePublished: '2026-06-04',
    readingMinutes: 5,
    teaser: 'Lagekarten, Drohnenbilder, Dokumentation — wie BOS-Kräfte an der Einsatzstelle ohne Infrastruktur online bleiben.',
    lead: 'Bei BOS-Einsätzen zählt jede Sekunde, und genau dort fehlt oft die Infrastruktur: kein WLAN, überlastete Netze, abgelegene Lagen. Ein 5G-Einsatzkoffer bringt eine eigene Datenverbindung an die Einsatzstelle — diese Anforderungen sollte er erfüllen.',
    sections: [
      {
        h2: 'Ausfallsicherheit zuerst',
        p: [
          'Im Einsatz darf die Verbindung nicht von einem einzigen Netz abhängen. Multi-SIM mit automatischem Umschalten zwischen den Mobilfunkbetreibern ist Pflicht — fällt ein Netz aus oder ist es überlastet, läuft die Lagekommunikation über das nächste weiter.',
        ],
      },
      {
        h2: 'Robust & autark',
        p: [
          'Einsatzstellen sind kein Büro: Regen, Staub, Hitze, Kälte. Ein IP67-geschütztes Gehäuse und Akkubetrieb sind entscheidend, damit der Koffer auch im Feld, bei Unwetterlagen oder im Stromausfall arbeitet.',
        ],
        bullets: ['IP67 gegen Staub und Wasser', 'Akkubetrieb für Lagen ohne Strom', 'In unter 60 Sekunden einsatzbereit'],
      },
      {
        h2: 'Typische Anwendungen',
        p: [
          'Ein eigenes Netz an der Einsatzstelle trägt Lagekarten, Drohnen-Livebilder, digitale Einsatzdokumentation, Nachforderungen und die Anbindung des Führungsfahrzeugs oder Lagezentrums — alles, was sonst am fehlenden Netz scheitert.',
        ],
        bullets: ['Mobiles Lagezentrum / Einsatzleitung', 'Drohnen- und Kamerabilder in Echtzeit', 'Digitale Dokumentation und Nachforderung'],
      },
      {
        h2: 'Beschaffung über Fachhandel',
        p: [
          'BOS-Beschaffung läuft meist über spezialisierte Ausstatter. Case Connect ist mit Multi-SIM, IP67 und Akku auf genau diese Anforderungen ausgelegt und über Vertriebspartner im BOS-Bereich erhältlich.',
        ],
      },
    ],
    faq: [
      { q: 'Warum ist Multi-SIM für BOS wichtig?', a: 'Weil im Einsatz kein einzelnes Netz ausfallen darf. Multi-SIM nutzt mehrere Mobilfunknetze gleichzeitig und schaltet bei Ausfall oder Überlast automatisch um.' },
      { q: 'Funktioniert der Koffer ohne Stromanschluss?', a: 'Ja, akkubetrieben — wichtig für Einsatzstellen ohne Infrastruktur oder bei Stromausfall.' },
      { q: 'Ist der Koffer wetterfest?', a: 'Das IP67-Gehäuse schützt zuverlässig gegen Staub und Wasser, auch im Außeneinsatz bei Unwetter.' },
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
          'Auf den Gastzugang des Kunden zu hoffen, kostet Zeit und scheitert oft an Sicherheitsrichtlinien. Mit einem eigenen Netz bist du in Sekunden online — unabhängig davon, ob die Kunden-IT mitspielt.',
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
          'Für den Außendienst zählt: aufstellen, einschalten, arbeiten. Ein 5G-Koffer ist in unter 60 Sekunden online, läuft akkubetrieben und versorgt Laptop, Diagnosegerät und Tablet gleichzeitig — auch in Maschinenhalle, Keller oder auf dem Feld.',
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
        h2: 'Reichweite über das ganze Set',
        p: [
          'Video-Village, DIT-Station, Regie und Aufnahmeleitung sind über das Set verteilt. Statt jedem einen eigenen Hotspot zu geben, spannt ein Koffer ein gemeinsames Netz über bis zu 500 Meter — alle ziehen aus derselben stabilen Quelle.',
        ],
        bullets: ['DIT-Daten-Offload in die Cloud', 'Remote-Review mit Kunden/Producer', 'Streaming und Live-Monitoring'],
      },
      {
        h2: 'Robust für Outdoor-Drehs',
        p: [
          'Drehs finden bei Wind und Wetter statt. IP67-Schutz und Akkubetrieb sorgen dafür, dass der Koffer auch am Strand, im Wald oder auf dem Berg arbeitet — ohne Generator und Kabelsalat.',
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
          'Herzstück ist ein Industrie-Mobilfunkrouter (z. B. Teltonika RUTX50 oder Cradlepoint R980). Er nimmt das 5G-/LTE-Signal auf und stellt daraus ein WLAN- und LAN-Netz bereit, mit dem sich Laptops, Tablets, Kameras und Maschinen verbinden — genau wie zu Hause am Router.',
        ],
      },
      {
        h2: 'Antenne & Reichweite',
        p: [
          'Hochleistungsantennen holen auch dort noch Signal, wo ein Handy aufgibt. Verteilt wird das Netz per WLAN über bis zu 500 Meter; für feste Punkte gibt es zusätzlich LAN-Anschlüsse und ein langes Netzwerkkabel, um z. B. aus dem Keller nach oben zu kommen.',
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
          'Betrieben wird der Koffer per Netzteil oder integriertem/aufsteckbarem Akku. Akkubetrieb ist der Grund, warum er auch dort läuft, wo es keine Steckdose gibt — auf der Baustelle, im Feld, an der Einsatzstelle.',
        ],
      },
      {
        h2: 'In drei Schritten online',
        p: [
          'In der Praxis heißt das: Koffer hinstellen, einschalten, mit dem WLAN verbinden. In unter 60 Sekunden steht das Netz — ohne Techniker, ohne Konfiguration für den Nutzer.',
        ],
      },
    ],
    faq: [
      { q: 'Brauche ich technisches Wissen, um den Koffer zu nutzen?', a: 'Nein. Einschalten und mit dem WLAN verbinden — fertig. Die Konfiguration ist vorbereitet.' },
      { q: 'Welche SIM-Karte brauche ich?', a: 'Eine Daten-SIM eines Mobilfunkanbieters. Mit Multi-SIM lassen sich mehrere Anbieter parallel für Ausfallschutz nutzen.' },
      { q: 'Wie groß ist die Reichweite?', a: 'Per WLAN bis zu 500 Meter, je nach Umgebung; für feste Punkte zusätzlich über LAN-Kabel.' },
    ],
  },
  {
    slug: 'ip67-5g-koffer-outdoor',
    keyword: 'IP67 5G Router outdoor',
    title: 'IP67 & akkubetrieben: Worauf du beim Outdoor-5G-Koffer achten musst',
    metaTitle: 'Outdoor-5G-Koffer: Worauf bei IP67, Akku & Antenne achten',
    metaDescription:
      'Outdoor-tauglicher 5G-Koffer gesucht? Die Kaufkriterien: IP67-Schutz, Akkulaufzeit, Temperaturbereich, Antenne und Multi-SIM — verständlich erklärt.',
    datePublished: '2026-06-04',
    readingMinutes: 4,
    teaser: 'Die Kaufkriterien für den Außeneinsatz: Schutzklasse, Akku, Temperatur, Antenne.',
    lead: 'Soll der 5G-Koffer draußen arbeiten — auf Baustelle, Event oder im Einsatz — entscheiden ein paar Kennwerte über Erfolg oder Frust. Diese Kriterien solltest du vor dem Kauf prüfen.',
    sections: [
      {
        h2: 'Schutzklasse: was IP67 bedeutet',
        p: [
          'Die erste Ziffer (6) steht für vollständigen Schutz gegen Staub, die zweite (7) für Schutz beim zeitweisen Untertauchen. IP67 ist für den Außeneinsatz der sinnvolle Standard — Regen, Staub und Spritzwasser machen dem Gehäuse dann nichts aus.',
        ],
      },
      {
        h2: 'Akku & Stromversorgung',
        p: [
          'Ohne Steckdose zählt die Laufzeit. Achte darauf, ob der Koffer per Netzteil und Akku läuft und wie lange — und ob sich der Akku im Betrieb tauschen oder extern nachspeisen lässt.',
        ],
        bullets: ['Netz- und Akkubetrieb', 'Ausreichende Laufzeit für den Einsatztag', 'Nachspeisung im Betrieb möglich'],
      },
      {
        h2: 'Antenne & Reichweite',
        p: [
          'Eine Hochleistungsantenne entscheidet, ob im Funkloch noch Signal ankommt. Genauso wichtig: die WLAN-Reichweite, mit der das Netz vor Ort verteilt wird — bei Case Connect bis zu 500 Meter.',
        ],
      },
      {
        h2: 'Multi-SIM & Verwaltung',
        p: [
          'Für verlässlichen Betrieb sollte der Koffer mehrere Mobilfunknetze parallel nutzen können (Multi-SIM) und sich aus der Ferne verwalten lassen — so lässt sich der Status prüfen, ohne vor Ort zu sein.',
        ],
      },
    ],
    faq: [
      { q: 'Reicht IP54 oder braucht es IP67?', a: 'Für echten Außeneinsatz mit Regen und Staub ist IP67 die sichere Wahl. Niedrigere Klassen schützen nur eingeschränkt gegen Wasser.' },
      { q: 'Wie wichtig ist die Antenne?', a: 'Sehr — sie entscheidet, ob im Randbereich der Abdeckung überhaupt noch nutzbares Signal ankommt. Eine gute Antenne schlägt oft mehr Sendeleistung.' },
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
        bullets: ['In unter 60 Sekunden aufgebaut', 'Dutzende Geräte gleichzeitig: Kasse, Tablets, Displays', 'Über mehrere Mobilfunknetze abgesichert'],
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
      'Fällt die Firmenleitung aus, steht der Betrieb: keine Kasse, kein ERP, keine Telefonie. So überbrückst du einen Internet-Ausfall in Sekunden mit einem 5G-Koffer als Backup.',
    datePublished: '2026-07-02',
    readingMinutes: 5,
    teaser: 'Ein Bagger kappt das Glasfaserkabel, der Provider hat eine Störung — und die ganze Firma steht. Ein 5G-Koffer als Backup hält den Betrieb in Sekunden am Laufen.',
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
          'Ein 5G-Koffer steht griffbereit im Schrank und ist in unter einer Minute aktiv: einschalten, per LAN an den Firmenrouter oder Switch hängen — und der Betrieb ist über Mobilfunk wieder online. Weil der Koffer mehrere Netze nutzen kann, ist er auch dann verfügbar, wenn ein einzelnes Netz gestört ist.',
        ],
        bullets: ['In unter 60 Sekunden online', 'An Router/Switch angeschlossen — die ganze Firma nutzt es', 'Mehrere Mobilfunknetze als Absicherung'],
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
      { q: 'Wie schnell ist der Koffer im Ausfall einsatzbereit?', a: 'In unter 60 Sekunden: einschalten und per LAN an den Router hängen. Die Firmengeräte sind dann sofort wieder über Mobilfunk online — kein Technikertermin nötig.' },
      { q: 'Nutzt bei einem Ausfall die ganze Firma den Koffer oder nur ein Gerät?', a: 'Die ganze Firma. Am Router oder Switch angeschlossen versorgt der Koffer das komplette Netzwerk — Kassen, Rechner, Telefone und WLAN wie gewohnt.' },
      { q: 'Lohnt sich ein Koffer, wenn selten etwas ausfällt?', a: 'Gerade dann: Ein einziger vermiedener Ausfalltag kostet meist mehr als der Koffer. Wer nur die Störung überbrücken will, mietet ihn für die Ausfalldauer.' },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
