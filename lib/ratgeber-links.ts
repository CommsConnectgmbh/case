// Kurze Linktexte fuer die Ratgeber-Reihe im Footer. Eigenes Modul, damit die
// Client-Komponente Footer nicht alle Artikeltexte aus lib/ratgeber.ts ins
// Browser-Bundle zieht. tests/unit/ratgeber-links.test.ts prueft, dass die
// Liste genau die Artikel aus lib/ratgeber.ts abdeckt, in derselben Reihenfolge.
export const ratgeberLinks: { slug: string; label: string }[] = [
  { slug: 'mobiles-internet-baustelle', label: 'Mobiles Internet auf der Baustelle' },
  { slug: '5g-koffer-mieten-oder-kaufen', label: '5G-Koffer mieten oder kaufen?' },
  { slug: 'wlan-fuer-events', label: 'WLAN für Events ohne Festanschluss' },
  { slug: 'mobiles-wlan-servicetechniker', label: 'Mobiles WLAN für Servicetechniker' },
  { slug: 'internet-am-filmset', label: 'Internet am Filmset' },
  { slug: 'wie-funktioniert-ein-5g-internetkoffer', label: 'Wie funktioniert ein 5G-Internetkoffer?' },
  { slug: 'outdoor-5g-koffer', label: 'Outdoor-5G-Koffer: Kaufkriterien' },
  { slug: 'internet-fuer-messestand', label: 'Internet für den Messestand' },
  { slug: 'internet-ausfall-ueberbruecken', label: 'Internet-Ausfall überbrücken' },
];
