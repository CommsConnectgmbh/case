export const PRODUCTS = {
  standard: {
    id: 'case-standard',
    name: '5G Case Standard',
    subtitle: 'Mit Teltonika RUTX50',
    badge: 'Bestseller',
    priceBrutto: 1999.99,
    priceNetto: 1680.66,
    image: '/images/koffer-hero.png',
    description: 'Mobiles 5G-Koffersystem mit Teltonika RUTX50 Router (Dual-SIM, WiFi 6, 4x LAN), Teltonika RMS 10-Year Management Service, Poynting PANL431 5G/LTE-Außenantenne, 25 m Cat6-Netzwerkkabel, CE & IP67-zertifiziertes PARAT-Gehäuse. Akkubetrieb möglich – Akku und Markenadapter nicht im Lieferumfang enthalten.',
    features: [
      'Teltonika RUTX50 5G-Router (Dual-SIM)',
      'Teltonika RMS 10-Year Management Service',
      'WiFi 6 & 4x LAN-Ports',
      'Poynting PANL431 5G/LTE-Außenantenne',
      '25 m Cat6-Netzwerkkabel',
      'CE & IP67 zertifiziert',
      'PARAT-Gehäuse – Plug & Play',
      'Akkubetrieb möglich (Akku separat)',
    ],
  },
  professional: {
    id: 'case-professional',
    name: '5G Case Professional',
    subtitle: 'Mit Cradlepoint R980 (Ericsson)',
    badge: 'Enterprise',
    priceBrutto: 2299.0,
    priceNetto: 1931.93,
    image: '/images/koffer-hero.png',
    description: 'Mobiles 5G-Koffersystem Enterprise-Klasse mit Cradlepoint R980 Router (embedded eSIM, 5-Jahres-Netcloud-Plan), Teltonika TAP200 WLAN Access Point, Teltonika PoE Injector, Poynting PANL431 5G/LTE-Außenantenne, 25 m Cat6-Netzwerkkabel, CE & IP67-zertifiziertes PARAT-Gehäuse. Akkubetrieb möglich – Akku und Markenadapter nicht im Lieferumfang enthalten.',
    features: [
      'Cradlepoint R980 Router (embedded eSIM)',
      '5-Jahres Netcloud Enterprise Plan',
      'Teltonika TAP200 WLAN Access Point',
      'Teltonika PoE Injector',
      'Poynting PANL431 5G/LTE-Außenantenne',
      '25 m Cat6-Netzwerkkabel',
      'CE & IP67 zertifiziert',
      'Remote Management inklusive',
      'DSGVO-konform, EU-Server',
      'Akkubetrieb möglich (Akku separat)',
    ],
  },
} as const;

export const ADDONS = {
  einhellKit: {
    id: 'addon-einhell-kit',
    name: 'Einhell Power X-Change Starter-Kit 18V 4Ah',
    priceBrutto: 49.99,
    image: '/images/einhell-starterkit.webp',
    description: '18V Akku (4Ah) + Ladegerät für den autarken Betrieb des 5G Case. Passender Brennenstuhl Markenadapter (Einhell-kompatibel) separat erforderlich.',
  },
  adapters: [
    { id: 'adapter-bosch', name: 'Brennenstuhl Adapter – Bosch Professional', priceBrutto: 19.99, image: '/images/Bosch.jpg', description: 'Adapter für Bosch Professional 18V Akkus. Akku nicht enthalten.' },
    { id: 'adapter-dewalt', name: 'Brennenstuhl Adapter – Dewalt / Milwaukee', priceBrutto: 19.99, image: '/images/MILWAUKEE-und-Dewalt.jpg', description: 'Adapter für Dewalt oder Milwaukee 18V Akkus. Akku nicht enthalten.' },
    { id: 'adapter-festool', name: 'Brennenstuhl Adapter – Festool', priceBrutto: 19.99, image: '/images/Festool.jpg', description: 'Adapter für Festool 18V Akkus. Akku nicht enthalten.' },
    { id: 'adapter-makita', name: 'Brennenstuhl Adapter – Makita', priceBrutto: 19.99, image: '/images/MAKITA.jpg', description: 'Adapter für Makita 18V Akkus. Akku nicht enthalten.' },
    { id: 'adapter-metabo', name: 'Brennenstuhl Adapter – Metabo CAS', priceBrutto: 19.99, image: '/images/Metabo.jpg', description: 'Adapter für Metabo CAS 18V Akkus. Akku nicht enthalten.' },
    { id: 'adapter-einhell', name: 'Brennenstuhl Adapter – Einhell / Fein / Hikoki', priceBrutto: 19.99, image: '/images/einhell.jpg', description: 'Adapter für Einhell, Fein oder Hikoki 18V Akkus. Akku nicht enthalten.' },
    { id: 'adapter-flex', name: 'Brennenstuhl Adapter – Flex', priceBrutto: 19.99, image: '/images/flex.jpg', description: 'Adapter für Flex 18V Akkus. Akku nicht enthalten.' },
  ],
} as const;

export function formatPrice(price: number): string {
  return price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
}
