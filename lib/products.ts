export const PRODUCTS = {
  standard: {
    id: 'case-standard',
    name: '5G Case Standard',
    subtitle: 'Mit Teltonika RUTX50',
    badge: 'Bestseller',
    priceNetto: 1999,
    image: '/images/case-geschlossen.jpg',
    description: 'Mobiles 5G-Koffersystem mit Teltonika RUTX50 Router (Dual-SIM, Dual-Band-WLAN, 5 × Gigabit-Ethernet), Teltonika RMS mit 10-Jahres-Lizenz, Poynting 5G-Panelantenne (A-PANL-0431) im Kofferdeckel, Cudy RE3000 Wi-Fi-6-Mesh-Repeater, 30 m Cat6-Netzwerkkabel, robuster PARAT-Systemkoffer, gefertigt von PARAT in Waldkirchen. Akkubetrieb möglich, Akku und Markenadapter nicht im Lieferumfang enthalten.',
    features: [
      'Teltonika RUTX50 5G-Router (Dual-SIM)',
      'Teltonika RMS 10-Year Management Service',
      'Dual-Band-WLAN & 5 × Gigabit-Ethernet',
      'Poynting 5G-Panelantenne im Kofferdeckel',
      'Cudy RE3000 Wi-Fi-6-Mesh-Repeater (AX3000) inklusive',
      '30 m Cat6-Netzwerkkabel (S/FTP, LSZH)',
      'Stromquellen: Netz, Akku oder 12 V Kfz',
      'Robuster PARAT-Systemkoffer, vorkonfiguriert',
      'Akkubetrieb möglich (Akku separat)',
    ],
  },
} as const;

export const ADDONS = {
  einhellKit: {
    id: 'addon-einhell-kit',
    name: 'Einhell Power X-Change Starter-Kit 18V 4Ah',
    priceNetto: 42.01,
    image: '/images/einhell-starterkit.webp',
    description: '18V Akku (4Ah) + Ladegerät für den autarken Betrieb des 5G Case. Passender Brennenstuhl Markenadapter (Einhell-kompatibel) separat erforderlich.',
  },
  adapters: [
    { id: 'adapter-bosch', name: 'Brennenstuhl Adapter – Bosch Professional', priceNetto: 16.80, image: '/images/Bosch.jpg', description: 'Adapter für Bosch Professional 18V Akkus. Akku nicht enthalten.' },
    { id: 'adapter-dewalt', name: 'Brennenstuhl Adapter – Dewalt', priceNetto: 16.80, image: '/images/MILWAUKEE-und-Dewalt.jpg', description: 'Adapter für Dewalt 18V Akkus. Akku nicht enthalten.' },
    { id: 'adapter-milwaukee', name: 'Brennenstuhl Adapter – Milwaukee', priceNetto: 16.80, image: '/images/MILWAUKEE-und-Dewalt.jpg', description: 'Adapter für Milwaukee 18V Akkus. Akku nicht enthalten.' },
    { id: 'adapter-makita', name: 'Brennenstuhl Adapter – Makita', priceNetto: 16.80, image: '/images/MAKITA.jpg', description: 'Adapter für Makita 18V Akkus. Akku nicht enthalten.' },
    { id: 'adapter-festool', name: 'Brennenstuhl Adapter – Festool', priceNetto: 16.80, image: '/images/Festool.jpg', description: 'Adapter für Festool 18V Akkus. Akku nicht enthalten.' },
    { id: 'adapter-metabo', name: 'Brennenstuhl Adapter – Metabo CAS', priceNetto: 16.80, image: '/images/Metabo.jpg', description: 'Adapter für Metabo CAS 18V Akkus. Akku nicht enthalten.' },
    { id: 'adapter-einhell', name: 'Brennenstuhl Adapter – Einhell', priceNetto: 16.80, image: '/images/einhell.jpg', description: 'Adapter für Einhell 18V Akkus. Akku nicht enthalten.' },
    { id: 'adapter-hikoki', name: 'Brennenstuhl Adapter – Hikoki', priceNetto: 16.80, image: '/images/einhell.jpg', description: 'Adapter für Hikoki 18V Akkus. Akku nicht enthalten.' },
    { id: 'adapter-fein', name: 'Brennenstuhl Adapter – Fein', priceNetto: 16.80, image: '/images/einhell.jpg', description: 'Adapter für Fein 18V Akkus. Akku nicht enthalten.' },
  ],
} as const;

export function formatPrice(price: number): string {
  return price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
}
