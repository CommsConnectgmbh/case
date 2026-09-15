export type Language = 'de' | 'en' | 'fr' | 'es' | 'it';

export interface Translations {
  nav: {
    links: {
      produkte: string;
      features: string;
      anwendungen: string;
      kontakt: string;
    };
    buyButton: string;
  };
  hero: {
    headlineLine1: string;
    headlineLine2: string;
    subline: string;
    ctaBuy: string;
    ctaMore: string;
    eyebrow?: string;
    subhead?: string;
    ctaDemo?: string;
    ctaDatasheet?: string;
    statPower?: string;
    statPowerLabel?: string;
    statRms?: string;
    statRmsLabel?: string;
    statCable?: string;
    statCableLabel?: string;
  };
  problem: {
    headline: string;
    stats: {
      value: number;
      suffix: string;
      label: string;
    }[];
    cards: {
      title: string;
      description: string;
    }[];
  };
  productIntro: {
    overline: string;
    headline: string;
    features: string[];
  };
  shop: {
    headline: string;
    subline: string;
    addonsTitle: string;
  };
  howItWorks: {
    headline: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  useCases: {
    headline: string;
    subline: string;
    cases: {
      title: string;
      description: string;
    }[];
  };
  batteryCompat: {
    headline: string;
    subline: string;
    note: string;
    ctaButton: string;
  };
  techSpecs: {
    headline: string;
    headers: {
      spec: string;
      value: string;
    };
    labels: {
      connectivity: string;
      wifi: string;
      range: string;
      battery: string;
      protection: string;
      weight: string;
      dimensions: string;
      setupTime: string;
      ports: string;
      temperature: string;
    };
  };
  remoteManagement: {
    headline: string;
    subline: string;
    features: {
      title: string;
      description: string;
    }[];
  };
  connectivity: {
    headline: string;
    subline: string;
    features: {
      title: string;
      text: string;
    }[];
  };
  footer: {
    sections: {
      produkte: string;
      rechtliches: string;
      kontakt: string;
    };
    legalLinks: {
      impressum: string;
      datenschutz: string;
      agb: string;
      widerruf: string;
      widerrufFunktion: string;
      versand: string;
      barrierefreiheit: string;
      cookieEinstellungen: string;
    };
    copyright: string;
    trademark: string;
  };
  cart: {
    cartTitle: string;
    checkout: string;
    empty: string;
    addToCart: string;
    remove: string;
  };
  success: {
    headline: string;
    message: string;
  };
  contact: {
    headline: string;
    subline: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    send: string;
    success: string;
    error: string;
  };
}

export const translations: Record<Language, Translations> = {
  // ─── GERMAN (DEFAULT) ─────────────────────────────────────────────
  de: {
    nav: {
      links: {
        produkte: 'Produkte',
        features: 'Features',
        anwendungen: 'Anwendungen',
        kontakt: 'Kontakt',
      },
      buyButton: 'Kaufen',
    },
    hero: {
      headlineLine1: 'Kein Netz?',
      headlineLine2: 'Unser Problem.',
      subline:
        'Das portable Enterprise-5G-Netzwerk. Einstecken. Einschalten. Online.',
      ctaBuy: 'Jetzt kaufen',
      ctaMore: 'Mehr erfahren',
      eyebrow: '5G Industrie-Konnektivität · Plug & Play',
      subhead:
        'Industrial-Internet im robusten PARAT-Systemkoffer. 5G mit LTE-Rückfall, Dual-SIM und drei Stromquellen. Vorkonfiguriert geliefert.',
      ctaDemo: 'Live-Demo anfragen',
      ctaDatasheet: 'Datenblatt',
      statPower: '3',
      statPowerLabel: 'Stromquellen',
      statRms: '10 Jahre',
      statRmsLabel: 'RMS-Fernverwaltung inklusive',
      statCable: '30 m',
      statCableLabel: 'LAN-Kabel',
    },
    problem: {
      headline:
        'Kein Netz ist keine Option. Nicht auf der Baustelle. Nicht beim Event. Nicht im Einsatz.',
      stats: [
        { value: 3, suffix: '', label: 'Stromquellen' },
        { value: 30, suffix: ' m', label: 'LAN-Kabel inklusive' },
        { value: 10, suffix: ' Jahre', label: 'RMS-Fernverwaltung inklusive' },
      ],
      cards: [
        {
          title: 'Kein Empfang auf der Baustelle',
          description:
            'Funklöcher kosten Zeit, Geld und Nerven. Dokumentation, Maschinen­steuerung und Kommunikation stehen still.',
        },
        {
          title: 'Events ohne WLAN',
          description:
            'Kassensysteme, Ticketing und Live-Streaming brauchen stabile Konnektivität – das öffentliche Netz reicht nicht.',
        },
        {
          title: 'Standorte ohne Infrastruktur',
          description:
            'Temporäre Standorte, Außenstellen und Fernwartung erfordern sofort verfügbares Netz ohne Installationsaufwand.',
        },
      ],
    },
    productIntro: {
      overline: '5G CASE',
      headline: 'Enterprise-Konnektivität. Wo Mobilfunk verfügbar ist.',
      features: [
        'Vorkonfiguriert geliefert',
        '3 Stromquellen: Netz, Akku, Kfz',
        'Dual-Band-WLAN, 5 × Gigabit-Ethernet',
        'Dual-SIM 5G/LTE mit Failover',
      ],
    },
    shop: {
      headline: 'Das richtige Setup für Ihren Einsatz.',
      subline: 'Der 5G Case Standard. Konnektivität überall dort, wo Mobilfunk verfügbar ist, Leistung abhängig von Netz und Standort.',
      addonsTitle: 'Zubehör & Adapter',
    },
    howItWorks: {
      headline: 'In drei Schritten online.',
      steps: [
        {
          title: 'Aufstellen',
          description:
            'Koffer an den gewünschten Standort bringen und aufklappen.',
        },
        {
          title: 'Einschalten',
          description:
            'Akku einsetzen oder Stromkabel anschließen und einschalten.',
        },
        {
          title: 'Verbinden',
          description:
            'WLAN auswählen oder Geräte per LAN-Kabel anschließen und online gehen.',
        },
      ],
    },
    useCases: {
      headline: 'Jedes Szenario. Eine Lösung.',
      subline: 'Von der Baustelle bis zum Messestand.',
      cases: [
        {
          title: 'Baustellen',
          description:
            'Sofortige Konnektivität für Dokumentation, BIM-Modelle und Maschinensteuerung – auch ohne feste Infrastruktur.',
        },
        {
          title: 'Events & Messen',
          description:
            'Zuverlässiges WLAN für Kassensysteme, Ticketing, Live-Streaming und Gäste-Hotspot an jedem Veranstaltungsort.',
        },
        {
          title: 'Wartung & Service',
          description:
            'Fernwartung und Datenübertragung bei Außeneinsätzen – ohne Abhängigkeit vom lokalen Mobilfunknetz.',
        },
        {
          title: 'Backup bei Leitungsausfall',
          description:
            'Fällt der Festnetzanschluss am Standort aus, überbrückt der Koffer per 5G oder LTE, bis die Leitung wieder steht.',
        },
        {
          title: 'Temporäre Standorte',
          description:
            'Pop-up-Stores, Filmsets und Feldlager – Enterprise-WLAN ohne Baumaßnahmen oder lange Vorlaufzeiten.',
        },
        {
          title: 'Smart Infrastructure',
          description:
            'IoT-Sensoren, Überwachungskameras und Datenlogger über 5G anbinden – auch an entlegenen Standorten.',
        },
      ],
    },
    batteryCompat: {
      headline: 'Ihre Werkzeuge. Ihre Akkus.',
      subline:
        'Kein Vendor Lock-in. Kompatibel mit 18V Akkus von 9 Herstellern.',
      note: 'Adapter separat erforderlich – Akku nicht im Lieferumfang',
      ctaButton: 'Adapter jetzt dazubuchen',
    },
    techSpecs: {
      headline: 'Technische Daten',
      headers: { spec: 'Spezifikation', value: 'Wert' },
      labels: {
        connectivity: 'Mobilfunk',
        wifi: 'WLAN',
        range: 'Reichweite',
        battery: 'Akku',
        protection: 'Schutzklasse',
        weight: 'Gewicht',
        dimensions: 'Abmessungen',
        setupTime: 'Setup-Zeit',
        ports: 'Anschlüsse',
        temperature: 'Betriebstemperatur',
      },
    },
    remoteManagement: {
      headline: 'Volle Kontrolle. Von überall.',
      subline:
        'Verwalten Sie alle Geräte zentral über das Cloud-Dashboard – Firmware-Updates, Konfiguration und Monitoring in Echtzeit.',
      features: [
        {
          title: 'Cloud-Dashboard',
          description:
            'Alle Geräte auf einen Blick – Status, Standort und Auslastung in Echtzeit überwachen.',
        },
        {
          title: 'Firmware Over-the-Air',
          description:
            'Updates und Patches zentral und automatisch auf alle Geräte ausrollen.',
        },
        {
          title: 'Multi-Standort-Management',
          description:
            'Geräte an verschiedenen Einsatzorten gruppieren und individuell konfigurieren.',
        },
        {
          title: 'Alarmierung & Reporting',
          description:
            'Automatische Benachrichtigungen bei Störungen und detaillierte Nutzungsberichte.',
        },
      ],
    },
    connectivity: {
      headline: 'Mehrere Wege ins Netz.',
      subline:
        '5G (SA und NSA) mit Rückfall auf 4G LTE. Dual-SIM mit automatischem Failover. Über den WAN-Port lässt sich ein Festnetz- oder Satelliten-Uplink anschließen.',
      features: [
        {
          title: '5G und LTE',
          text: '5G (SA und NSA) mit Rückfall auf 4G LTE. Dual-SIM, SIM-Karten frei wählbar.',
        },
        {
          title: 'Dual-SIM-Failover',
          text: 'Fällt ein Netz aus, wechselt der Router automatisch auf die zweite SIM. Kein manuelles Umschalten.',
        },
        {
          title: 'Starlink-kompatibel',
          text: 'Für Standorte ohne Mobilfunkempfang am Aufstellort: Starlink über den WAN-Port anschließen.',
        },
        {
          title: 'Anschlüsse vor Ort',
          text: '5 × Gigabit-Ethernet und Dual-Band-WLAN für die Geräte am Einsatzort.',
        },
      ],
    },
    footer: {
      sections: {
        produkte: 'Produkte',
        rechtliches: 'Rechtliches',
        kontakt: 'Kontakt',
      },
      legalLinks: {
        impressum: 'Impressum',
        datenschutz: 'Datenschutz',
        agb: 'AGB',
        widerruf: 'Widerrufsbelehrung',
        widerrufFunktion: 'Widerruf',
        versand: 'Versand & Zahlung',
        barrierefreiheit: 'Barrierefreiheit',
        cookieEinstellungen: 'Cookie-Einstellungen',
      },
      copyright: '© 2026 Comms Connect GmbH. Alle Rechte vorbehalten.',
      trademark: 'Case Connect ist eine Marke der Comms Connect GmbH.',
    },
    cart: {
      cartTitle: 'Warenkorb',
      checkout: 'Zur Kasse',
      empty: 'Ihr Warenkorb ist leer',
      addToCart: 'In den Warenkorb',
      remove: 'Entfernen',
    },
    success: {
      headline: 'Vielen Dank für Ihre Bestellung!',
      message:
        'Ihre Bestellung wurde erfolgreich aufgegeben. Sie erhalten in Kürze eine Bestätigung per E-Mail.',
    },
    contact: {
      headline: 'Anfrage senden',
      subline: 'Sie haben Fragen oder wünschen eine individuelle Beratung? Schreiben Sie uns.',
      name: 'Name *',
      email: 'E-Mail *',
      phone: 'Telefon (optional)',
      message: 'Ihre Nachricht *',
      send: 'Nachricht senden',
      success: 'Vielen Dank! Wir melden uns in Kürze bei Ihnen.',
      error: 'Fehler beim Senden. Bitte versuchen Sie es erneut.',
    },
  },

  // ─── ENGLISH ───────────────────────────────────────────────────────
  en: {
    nav: {
      links: {
        produkte: 'Products',
        features: 'Features',
        anwendungen: 'Use Cases',
        kontakt: 'Contact',
      },
      buyButton: 'Buy',
    },
    hero: {
      headlineLine1: 'No Signal?',
      headlineLine2: 'Our Problem.',
      subline:
        'The portable enterprise 5G network. Plug in. Power on. Online.',
      ctaBuy: 'Buy now',
      ctaMore: 'Learn more',
      eyebrow: '5G Industrial Connectivity · Plug & Play',
      subhead:
        'Industrial internet in a rugged PARAT system case. 5G with LTE fallback, dual SIM and three power sources. Delivered pre-configured.',
      ctaDemo: 'Request live demo',
      ctaDatasheet: 'Datasheet',
      statPower: '3',
      statPowerLabel: 'Power sources',
      statRms: '10 years',
      statRmsLabel: 'RMS remote management included',
      statCable: '30 m',
      statCableLabel: 'LAN cable',
    },
    problem: {
      headline:
        'No signal is not an option. Not on the construction site. Not at the event. Not in the field.',
      stats: [
        { value: 3, suffix: '', label: 'Power sources' },
        { value: 30, suffix: ' m', label: 'LAN cable included' },
        { value: 10, suffix: ' years', label: 'RMS remote management included' },
      ],
      cards: [
        {
          title: 'No reception on the construction site',
          description:
            'Dead zones cost time, money and nerves. Documentation, machine control and communication grind to a halt.',
        },
        {
          title: 'Events without Wi-Fi',
          description:
            'POS systems, ticketing and live streaming need stable connectivity – public networks are not enough.',
        },
        {
          title: 'Sites without infrastructure',
          description:
            'Temporary sites, branch locations and remote maintenance require instant connectivity without complex installation.',
        },
      ],
    },
    productIntro: {
      overline: '5G CASE',
      headline: 'Enterprise connectivity. Wherever cellular coverage is available.',
      features: [
        'Delivered pre-configured',
        '3 power sources: mains, battery, vehicle',
        'Dual-band Wi-Fi, 5 × Gigabit Ethernet',
        'Dual-SIM 5G/LTE with failover',
      ],
    },
    shop: {
      headline: 'The right setup for your operation.',
      subline: 'The 5G Case Standard. Connectivity wherever cellular coverage is available, performance depends on network and location.',
      addonsTitle: 'Accessories & Adapters',
    },
    howItWorks: {
      headline: 'Online in three steps.',
      steps: [
        {
          title: 'Set up',
          description:
            'Bring the case to your desired location and open it.',
        },
        {
          title: 'Power on',
          description:
            'Insert the battery or connect the power cable and switch on.',
        },
        {
          title: 'Connect',
          description:
            'Select the Wi-Fi network or connect devices via LAN cable and go online.',
        },
      ],
    },
    useCases: {
      headline: 'Every scenario. One solution.',
      subline: 'From construction sites to trade show booths.',
      cases: [
        {
          title: 'Construction',
          description:
            'Instant connectivity for documentation, BIM models and machine control – even without fixed infrastructure.',
        },
        {
          title: 'Events & Trade Shows',
          description:
            'Reliable Wi-Fi for POS systems, ticketing, live streaming and guest hotspots at any venue.',
        },
        {
          title: 'Maintenance & Service',
          description:
            'Remote maintenance and data transfer in the field – without relying on local mobile networks.',
        },
        {
          title: 'Backup during line outages',
          description:
            'If the fixed-line connection on site fails, the case bridges the gap via 5G or LTE until the line is restored.',
        },
        {
          title: 'Temporary Sites',
          description:
            'Pop-up stores, film sets and field camps – enterprise Wi-Fi without construction or long lead times.',
        },
        {
          title: 'Smart Infrastructure',
          description:
            'Connect IoT sensors, surveillance cameras and data loggers via 5G – even at remote locations.',
        },
      ],
    },
    batteryCompat: {
      headline: 'Your tools. Your batteries.',
      subline:
        'No vendor lock-in. Compatible with 18V batteries from 9 manufacturers.',
      note: 'Adapter required separately – battery not included',
      ctaButton: 'Add adapter now',
    },
    techSpecs: {
      headline: 'Technical Specifications',
      headers: { spec: 'Specification', value: 'Value' },
      labels: {
        connectivity: 'Cellular',
        wifi: 'Wi-Fi',
        range: 'Range',
        battery: 'Battery',
        protection: 'Protection rating',
        weight: 'Weight',
        dimensions: 'Dimensions',
        setupTime: 'Setup time',
        ports: 'Ports',
        temperature: 'Operating temperature',
      },
    },
    remoteManagement: {
      headline: 'Full control. From anywhere.',
      subline:
        'Manage all devices centrally via the cloud dashboard – firmware updates, configuration and real-time monitoring.',
      features: [
        {
          title: 'Cloud Dashboard',
          description:
            'All devices at a glance – monitor status, location and utilisation in real time.',
        },
        {
          title: 'Firmware Over-the-Air',
          description:
            'Roll out updates and patches centrally and automatically to all devices.',
        },
        {
          title: 'Multi-Site Management',
          description:
            'Group devices at different locations and configure them individually.',
        },
        {
          title: 'Alerts & Reporting',
          description:
            'Automatic notifications for outages and detailed usage reports.',
        },
      ],
    },
    connectivity: {
      headline: 'More than one way online.',
      subline:
        '5G (SA and NSA) with fallback to 4G LTE. Dual-SIM with automatic failover. A fixed-line or satellite uplink can be connected via the WAN port.',
      features: [
        {
          title: '5G and LTE',
          text: '5G (SA and NSA) with fallback to 4G LTE. Dual-SIM, SIM cards of your choice.',
        },
        {
          title: 'Dual-SIM failover',
          text: 'If one network fails, the router switches to the second SIM automatically. No manual switching.',
        },
        {
          title: 'Starlink-compatible',
          text: 'For sites without cellular reception at the location: connect Starlink via the WAN port.',
        },
        {
          title: 'Connections on site',
          text: '5 × Gigabit Ethernet and dual-band Wi-Fi for the devices at the site.',
        },
      ],
    },
    footer: {
      sections: {
        produkte: 'Products',
        rechtliches: 'Legal',
        kontakt: 'Contact',
      },
      legalLinks: {
        impressum: 'Imprint',
        datenschutz: 'Privacy Policy',
        agb: 'Terms & Conditions',
        widerruf: 'Cancellation Policy',
        widerrufFunktion: 'Cancel Contract',
        versand: 'Shipping & Payment',
        barrierefreiheit: 'Accessibility',
        cookieEinstellungen: 'Cookie Settings',
      },
      copyright: '© 2026 Comms Connect GmbH. All rights reserved.',
      trademark: 'Case Connect is a brand of Comms Connect GmbH.',
    },
    cart: {
      cartTitle: 'Cart',
      checkout: 'Checkout',
      empty: 'Your cart is empty',
      addToCart: 'Add to cart',
      remove: 'Remove',
    },
    success: {
      headline: 'Thank you for your order!',
      message:
        'Your order has been placed successfully. You will receive a confirmation email shortly.',
    },
    contact: {
      headline: 'Send Inquiry',
      subline: 'Have questions or need personalized advice? Get in touch with us.',
      name: 'Name *',
      email: 'Email *',
      phone: 'Phone (optional)',
      message: 'Your message *',
      send: 'Send message',
      success: 'Thank you! We will get back to you shortly.',
      error: 'Error sending message. Please try again.',
    },
  },

  // ─── FRENCH ────────────────────────────────────────────────────────
  fr: {
    nav: {
      links: {
        produkte: 'Produits',
        features: 'Fonctionnalités',
        anwendungen: 'Applications',
        kontakt: 'Contact',
      },
      buyButton: 'Acheter',
    },
    hero: {
      headlineLine1: 'Pas de réseau ?',
      headlineLine2: 'Notre problème.',
      subline:
        'Le réseau 5G portable professionnel. Brancher. Allumer. En ligne.',
      ctaBuy: 'Acheter maintenant',
      ctaMore: 'En savoir plus',
      eyebrow: 'Connectivité 5G industrielle · Plug & Play',
      subhead:
        "Internet industriel dans une valise système PARAT robuste. 5G avec repli LTE, double SIM et trois sources d'alimentation. Livré préconfiguré.",
      ctaDemo: 'Demander une démo',
      ctaDatasheet: 'Fiche technique',
      statPower: '3',
      statPowerLabel: "Sources d'alimentation",
      statRms: '10 ans',
      statRmsLabel: 'Gestion à distance RMS incluse',
      statCable: '30 m',
      statCableLabel: 'Câble LAN',
    },
    problem: {
      headline:
        "Pas de réseau n'est pas une option. Pas sur le chantier. Pas lors d'un événement. Pas en mission.",
      stats: [
        { value: 3, suffix: '', label: "Sources d'alimentation" },
        { value: 30, suffix: ' m', label: 'Câble LAN inclus' },
        { value: 10, suffix: ' ans', label: 'Gestion à distance RMS incluse' },
      ],
      cards: [
        {
          title: 'Pas de réception sur le chantier',
          description:
            "Les zones blanches coûtent du temps, de l'argent et de l'énergie. Documentation, contrôle des machines et communication sont paralysés.",
        },
        {
          title: 'Événements sans Wi-Fi',
          description:
            'Les caisses, la billetterie et le streaming en direct nécessitent une connectivité stable – le réseau public ne suffit pas.',
        },
        {
          title: 'Sites sans infrastructure',
          description:
            'Sites temporaires, sites distants et maintenance à distance nécessitent un réseau immédiat sans installation complexe.',
        },
      ],
    },
    productIntro: {
      overline: '5G CASE',
      headline: 'Connectivité professionnelle. Là où le réseau mobile est disponible.',
      features: [
        'Livré préconfiguré',
        "3 sources d'alimentation : secteur, batterie, véhicule",
        'Wi-Fi double bande, 5 × Gigabit Ethernet',
        'Double SIM 5G/LTE avec basculement',
      ],
    },
    shop: {
      headline: 'La bonne configuration pour votre mission.',
      subline: 'Le 5G Case Standard. Connectivité là où le réseau mobile est disponible, performances selon le réseau et le site.',
      addonsTitle: 'Accessoires & Adaptateurs',
    },
    howItWorks: {
      headline: 'En ligne en trois étapes.',
      steps: [
        {
          title: 'Installer',
          description:
            "Amenez la valise à l'emplacement souhaité et ouvrez-la.",
        },
        {
          title: 'Allumer',
          description:
            "Insérez la batterie ou branchez le câble d'alimentation et allumez.",
        },
        {
          title: 'Connecter',
          description:
            'Sélectionnez le réseau Wi-Fi ou branchez vos appareils par câble LAN et connectez-vous.',
        },
      ],
    },
    useCases: {
      headline: 'Chaque scénario. Une solution.',
      subline: 'Du chantier au stand de salon.',
      cases: [
        {
          title: 'Chantiers',
          description:
            'Connectivité instantanée pour la documentation, les modèles BIM et le pilotage de machines – même sans infrastructure fixe.',
        },
        {
          title: 'Événements & Salons',
          description:
            'Wi-Fi fiable pour les caisses, la billetterie, le streaming en direct et le hotspot invités sur tout site événementiel.',
        },
        {
          title: 'Maintenance & Service',
          description:
            'Télémaintenance et transfert de données en extérieur – sans dépendre du réseau mobile local.',
        },
        {
          title: 'Secours en cas de panne de ligne',
          description:
            "Si la connexion fixe du site tombe en panne, la valise prend le relais en 5G ou LTE jusqu'au rétablissement de la ligne.",
        },
        {
          title: 'Sites temporaires',
          description:
            'Pop-up stores, plateaux de tournage et camps de terrain – Wi-Fi professionnel sans travaux ni délais.',
        },
        {
          title: 'Infrastructure connectée',
          description:
            'Connectez capteurs IoT, caméras de surveillance et enregistreurs de données via la 5G – même sur des sites isolés.',
        },
      ],
    },
    batteryCompat: {
      headline: 'Vos outils. Vos batteries.',
      subline:
        "Pas de verrouillage fabricant. Compatible avec les batteries 18V de 9 fabricants.",
      note: 'Adaptateur vendu séparément – batterie non incluse',
      ctaButton: 'Ajouter un adaptateur',
    },
    techSpecs: {
      headline: 'Caractéristiques techniques',
      headers: { spec: 'Spécification', value: 'Valeur' },
      labels: {
        connectivity: 'Cellulaire',
        wifi: 'Wi-Fi',
        range: 'Portée',
        battery: 'Batterie',
        protection: 'Indice de protection',
        weight: 'Poids',
        dimensions: 'Dimensions',
        setupTime: "Temps d'installation",
        ports: 'Ports',
        temperature: 'Température de fonctionnement',
      },
    },
    remoteManagement: {
      headline: "Contrôle total. Depuis n'importe où.",
      subline:
        'Gérez tous les appareils de manière centralisée via le tableau de bord cloud – mises à jour firmware, configuration et monitoring en temps réel.',
      features: [
        {
          title: 'Tableau de bord cloud',
          description:
            "Tous les appareils en un coup d'œil – surveillez l'état, la localisation et l'utilisation en temps réel.",
        },
        {
          title: 'Firmware Over-the-Air',
          description:
            'Déployez les mises à jour et correctifs de manière centralisée et automatique sur tous les appareils.',
        },
        {
          title: 'Gestion multi-sites',
          description:
            'Regroupez les appareils sur différents sites et configurez-les individuellement.',
        },
        {
          title: 'Alertes & Rapports',
          description:
            "Notifications automatiques en cas de panne et rapports d'utilisation détaillés.",
        },
      ],
    },
    connectivity: {
      headline: 'Plusieurs chemins vers le réseau.',
      subline:
        '5G (SA et NSA) avec repli sur la 4G LTE. Double SIM avec bascule automatique. Un lien fixe ou satellite peut être raccordé au port WAN.',
      features: [
        {
          title: '5G et LTE',
          text: '5G (SA et NSA) avec repli sur la 4G LTE. Double SIM, cartes SIM au choix.',
        },
        {
          title: 'Bascule double SIM',
          text: 'Si un réseau tombe, le routeur passe automatiquement sur la seconde SIM. Aucune manipulation.',
        },
        {
          title: 'Compatible Starlink',
          text: 'Pour les sites sans réception cellulaire sur place : raccorder Starlink au port WAN.',
        },
        {
          title: 'Connexions sur site',
          text: '5 × Gigabit Ethernet et Wi-Fi bibande pour les appareils sur place.',
        },
      ],
    },
    footer: {
      sections: {
        produkte: 'Produits',
        rechtliches: 'Mentions légales',
        kontakt: 'Contact',
      },
      legalLinks: {
        impressum: 'Mentions légales',
        datenschutz: 'Politique de confidentialité',
        agb: 'Conditions générales',
        widerruf: 'Droit de rétractation',
        widerrufFunktion: 'Rétractation',
        versand: 'Livraison & Paiement',
        barrierefreiheit: 'Accessibilité',
        cookieEinstellungen: 'Paramètres des cookies',
      },
      copyright: '© 2026 Comms Connect GmbH. Tous droits réservés.',
      trademark: 'Case Connect est une marque de Comms Connect GmbH.',
    },
    cart: {
      cartTitle: 'Panier',
      checkout: 'Passer à la caisse',
      empty: 'Votre panier est vide',
      addToCart: 'Ajouter au panier',
      remove: 'Supprimer',
    },
    success: {
      headline: 'Merci pour votre commande !',
      message:
        'Votre commande a été passée avec succès. Vous recevrez un e-mail de confirmation sous peu.',
    },
    contact: {
      headline: 'Envoyer une demande',
      subline: 'Vous avez des questions ou souhaitez un conseil personnalisé ? Contactez-nous.',
      name: 'Nom *',
      email: 'E-mail *',
      phone: 'Téléphone (facultatif)',
      message: 'Votre message *',
      send: 'Envoyer le message',
      success: 'Merci ! Nous vous recontacterons sous peu.',
      error: "Erreur lors de l'envoi. Veuillez réessayer.",
    },
  },

  // ─── SPANISH ───────────────────────────────────────────────────────
  es: {
    nav: {
      links: {
        produkte: 'Productos',
        features: 'Características',
        anwendungen: 'Aplicaciones',
        kontakt: 'Contacto',
      },
      buyButton: 'Comprar',
    },
    hero: {
      headlineLine1: '¿Sin cobertura?',
      headlineLine2: 'Nuestro problema.',
      subline:
        'La red 5G portátil empresarial. Enchufar. Encender. En línea.',
      ctaBuy: 'Comprar ahora',
      ctaMore: 'Más información',
      eyebrow: 'Conectividad 5G industrial · Plug & Play',
      subhead:
        'Internet industrial en un robusto maletín de sistema PARAT. 5G con respaldo LTE, doble SIM y tres fuentes de alimentación. Se entrega preconfigurado.',
      ctaDemo: 'Solicitar demo',
      ctaDatasheet: 'Ficha técnica',
      statPower: '3',
      statPowerLabel: 'Fuentes de alimentación',
      statRms: '10 años',
      statRmsLabel: 'Gestión remota RMS incluida',
      statCable: '30 m',
      statCableLabel: 'Cable LAN',
    },
    problem: {
      headline:
        'Sin cobertura no es una opción. Ni en la obra. Ni en el evento. Ni en la operación.',
      stats: [
        { value: 3, suffix: '', label: 'Fuentes de alimentación' },
        { value: 30, suffix: ' m', label: 'Cable LAN incluido' },
        { value: 10, suffix: ' años', label: 'Gestión remota RMS incluida' },
      ],
      cards: [
        {
          title: 'Sin recepción en la obra',
          description:
            'Las zonas sin cobertura cuestan tiempo, dinero y nervios. Documentación, control de maquinaria y comunicación se paralizan.',
        },
        {
          title: 'Eventos sin Wi-Fi',
          description:
            'Sistemas de cobro, ticketing y streaming en vivo necesitan conectividad estable – la red pública no es suficiente.',
        },
        {
          title: 'Ubicaciones sin infraestructura',
          description:
            'Ubicaciones temporales, sedes externas y mantenimiento remoto requieren red inmediata sin instalación compleja.',
        },
      ],
    },
    productIntro: {
      overline: '5G CASE',
      headline: 'Conectividad empresarial. Donde haya cobertura móvil.',
      features: [
        'Entregado preconfigurado',
        '3 fuentes de alimentación: red, batería, vehículo',
        'Wi-Fi de doble banda, 5 × Gigabit Ethernet',
        'Doble SIM 5G/LTE con failover',
      ],
    },
    shop: {
      headline: 'La configuración adecuada para su operación.',
      subline: 'El 5G Case Standard. Conectividad donde haya cobertura móvil, rendimiento según la red y la ubicación.',
      addonsTitle: 'Accesorios y adaptadores',
    },
    howItWorks: {
      headline: 'En línea en tres pasos.',
      steps: [
        {
          title: 'Colocar',
          description:
            'Lleve el maletín a la ubicación deseada y ábralo.',
        },
        {
          title: 'Encender',
          description:
            'Inserte la batería o conecte el cable de alimentación y encienda.',
        },
        {
          title: 'Conectar',
          description:
            'Seleccione la red Wi-Fi o conecte los equipos por cable LAN y conéctese.',
        },
      ],
    },
    useCases: {
      headline: 'Cada escenario. Una solución.',
      subline: 'Desde la obra hasta el stand de feria.',
      cases: [
        {
          title: 'Obras',
          description:
            'Conectividad instantánea para documentación, modelos BIM y control de maquinaria – incluso sin infraestructura fija.',
        },
        {
          title: 'Eventos y ferias',
          description:
            'Wi-Fi fiable para sistemas de cobro, ticketing, streaming en vivo y hotspot para invitados en cualquier sede.',
        },
        {
          title: 'Mantenimiento y servicio',
          description:
            'Mantenimiento remoto y transferencia de datos en exteriores – sin depender de la red móvil local.',
        },
        {
          title: 'Respaldo ante caídas de línea',
          description:
            'Si falla la conexión fija del lugar, el maletín cubre el hueco vía 5G o LTE hasta que se restablezca la línea.',
        },
        {
          title: 'Ubicaciones temporales',
          description:
            'Tiendas emergentes, sets de filmación y campamentos – Wi-Fi empresarial sin obras ni largos plazos.',
        },
        {
          title: 'Infraestructura inteligente',
          description:
            'Conecte sensores IoT, cámaras de vigilancia y registradores de datos vía 5G – incluso en ubicaciones remotas.',
        },
      ],
    },
    batteryCompat: {
      headline: 'Sus herramientas. Sus baterías.',
      subline:
        'Sin dependencia de fabricante. Compatible con baterías de 18V de 9 fabricantes.',
      note: 'Adaptador necesario por separado – batería no incluida',
      ctaButton: 'Añadir adaptador ahora',
    },
    techSpecs: {
      headline: 'Especificaciones técnicas',
      headers: { spec: 'Especificación', value: 'Valor' },
      labels: {
        connectivity: 'Red móvil',
        wifi: 'Wi-Fi',
        range: 'Alcance',
        battery: 'Batería',
        protection: 'Grado de protección',
        weight: 'Peso',
        dimensions: 'Dimensiones',
        setupTime: 'Tiempo de instalación',
        ports: 'Puertos',
        temperature: 'Temperatura de operación',
      },
    },
    remoteManagement: {
      headline: 'Control total. Desde cualquier lugar.',
      subline:
        'Gestione todos los dispositivos de forma centralizada a través del panel en la nube – actualizaciones de firmware, configuración y monitoreo en tiempo real.',
      features: [
        {
          title: 'Panel en la nube',
          description:
            'Todos los dispositivos de un vistazo – supervise estado, ubicación y utilización en tiempo real.',
        },
        {
          title: 'Firmware Over-the-Air',
          description:
            'Despliegue actualizaciones y parches de forma centralizada y automática en todos los dispositivos.',
        },
        {
          title: 'Gestión multi-sitio',
          description:
            'Agrupe dispositivos en diferentes ubicaciones y configúrelos individualmente.',
        },
        {
          title: 'Alertas e informes',
          description:
            'Notificaciones automáticas ante fallos e informes detallados de uso.',
        },
      ],
    },
    connectivity: {
      headline: 'Más de una vía a la red.',
      subline:
        '5G (SA y NSA) con retorno a 4G LTE. SIM doble con conmutación automática. Por el puerto WAN puede conectarse un enlace fijo o por satélite.',
      features: [
        {
          title: '5G y LTE',
          text: '5G (SA y NSA) con retorno a 4G LTE. SIM doble, tarjetas SIM a elección.',
        },
        {
          title: 'Conmutación doble SIM',
          text: 'Si una red falla, el router cambia automáticamente a la segunda SIM. Sin conmutación manual.',
        },
        {
          title: 'Compatible con Starlink',
          text: 'Para ubicaciones sin cobertura móvil en el emplazamiento: conectar Starlink al puerto WAN.',
        },
        {
          title: 'Conexiones in situ',
          text: '5 × Gigabit Ethernet y wifi de doble banda para los equipos del lugar.',
        },
      ],
    },
    footer: {
      sections: {
        produkte: 'Productos',
        rechtliches: 'Legal',
        kontakt: 'Contacto',
      },
      legalLinks: {
        impressum: 'Aviso legal',
        datenschutz: 'Política de privacidad',
        agb: 'Condiciones generales',
        widerruf: 'Derecho de desistimiento',
        widerrufFunktion: 'Desistimiento',
        versand: 'Envío y pago',
        barrierefreiheit: 'Accesibilidad',
        cookieEinstellungen: 'Configuración de cookies',
      },
      copyright: '© 2026 Comms Connect GmbH. Todos los derechos reservados.',
      trademark: 'Case Connect es una marca de Comms Connect GmbH.',
    },
    cart: {
      cartTitle: 'Carrito',
      checkout: 'Finalizar compra',
      empty: 'Su carrito está vacío',
      addToCart: 'Añadir al carrito',
      remove: 'Eliminar',
    },
    success: {
      headline: '¡Gracias por su pedido!',
      message:
        'Su pedido se ha realizado correctamente. Recibirá un correo electrónico de confirmación en breve.',
    },
    contact: {
      headline: 'Enviar consulta',
      subline: '¿Tiene preguntas o desea asesoramiento personalizado? Escríbanos.',
      name: 'Nombre *',
      email: 'Correo electrónico *',
      phone: 'Teléfono (opcional)',
      message: 'Su mensaje *',
      send: 'Enviar mensaje',
      success: '¡Gracias! Nos pondremos en contacto con usted en breve.',
      error: 'Error al enviar. Por favor, inténtelo de nuevo.',
    },
  },

  // ─── ITALIAN ───────────────────────────────────────────────────────
  it: {
    nav: {
      links: {
        produkte: 'Prodotti',
        features: 'Funzionalità',
        anwendungen: 'Applicazioni',
        kontakt: 'Contatto',
      },
      buyButton: 'Acquista',
    },
    hero: {
      headlineLine1: 'Nessun segnale?',
      headlineLine2: 'Problema nostro.',
      subline:
        'La rete 5G portatile aziendale. Collegare. Accendere. Online.',
      ctaBuy: 'Acquista ora',
      ctaMore: 'Scopri di più',
      eyebrow: 'Connettività 5G industriale · Plug & Play',
      subhead:
        'Internet industriale in una robusta valigia di sistema PARAT. 5G con fallback LTE, doppia SIM e tre fonti di alimentazione. Consegnato preconfigurato.',
      ctaDemo: 'Richiedi demo',
      ctaDatasheet: 'Scheda tecnica',
      statPower: '3',
      statPowerLabel: 'Fonti di alimentazione',
      statRms: '10 anni',
      statRmsLabel: 'Gestione remota RMS inclusa',
      statCable: '30 m',
      statCableLabel: 'Cavo LAN',
    },
    problem: {
      headline:
        "Nessun segnale non è un'opzione. Non in cantiere. Non all'evento. Non in missione.",
      stats: [
        { value: 3, suffix: '', label: 'Fonti di alimentazione' },
        { value: 30, suffix: ' m', label: 'Cavo LAN incluso' },
        { value: 10, suffix: ' anni', label: 'Gestione remota RMS inclusa' },
      ],
      cards: [
        {
          title: 'Nessuna ricezione in cantiere',
          description:
            'Le zone senza copertura costano tempo, denaro e stress. Documentazione, controllo macchine e comunicazione si bloccano.',
        },
        {
          title: 'Eventi senza Wi-Fi',
          description:
            'Sistemi POS, biglietteria e streaming live richiedono connettività stabile – la rete pubblica non basta.',
        },
        {
          title: 'Siti senza infrastruttura',
          description:
            'Siti temporanei, sedi distaccate e manutenzione remota richiedono rete immediata senza installazioni complesse.',
        },
      ],
    },
    productIntro: {
      overline: '5G CASE',
      headline: 'Connettività aziendale. Dove è disponibile la rete mobile.',
      features: [
        'Consegnato preconfigurato',
        '3 fonti di alimentazione: rete, batteria, veicolo',
        'Wi-Fi dual band, 5 × Gigabit Ethernet',
        'Doppia SIM 5G/LTE con failover',
      ],
    },
    shop: {
      headline: 'La configurazione giusta per la vostra operazione.',
      subline: 'Il 5G Case Standard. Connettività dove è disponibile la rete mobile, prestazioni in base a rete e sito.',
      addonsTitle: 'Accessori e adattatori',
    },
    howItWorks: {
      headline: 'Online in tre passaggi.',
      steps: [
        {
          title: 'Posizionare',
          description:
            'Portate la valigetta nella posizione desiderata e apritela.',
        },
        {
          title: 'Accendere',
          description:
            "Inserite la batteria o collegate il cavo di alimentazione e accendete.",
        },
        {
          title: 'Connettere',
          description:
            'Selezionate la rete Wi-Fi o collegate i dispositivi via cavo LAN e andate online.',
        },
      ],
    },
    useCases: {
      headline: 'Ogni scenario. Una soluzione.',
      subline: 'Dal cantiere allo stand fieristico.',
      cases: [
        {
          title: 'Cantieri',
          description:
            'Connettività istantanea per documentazione, modelli BIM e controllo macchine – anche senza infrastruttura fissa.',
        },
        {
          title: 'Eventi e fiere',
          description:
            'Wi-Fi affidabile per sistemi POS, biglietteria, streaming live e hotspot ospiti in qualsiasi sede.',
        },
        {
          title: 'Manutenzione e assistenza',
          description:
            'Manutenzione remota e trasferimento dati in esterno – senza dipendere dalla rete mobile locale.',
        },
        {
          title: 'Backup in caso di guasto della linea',
          description:
            'Se la connessione fissa del sito si interrompe, la valigia colma il vuoto via 5G o LTE fino al ripristino della linea.',
        },
        {
          title: 'Siti temporanei',
          description:
            'Pop-up store, set cinematografici e campi base – Wi-Fi aziendale senza lavori edilizi o lunghi tempi di attesa.',
        },
        {
          title: 'Infrastruttura intelligente',
          description:
            'Collegate sensori IoT, telecamere di sorveglianza e data logger tramite 5G – anche in siti remoti.',
        },
      ],
    },
    batteryCompat: {
      headline: 'I vostri attrezzi. Le vostre batterie.',
      subline:
        'Nessun vincolo al produttore. Compatibile con batterie 18V di 9 produttori.',
      note: 'Adattatore venduto separatamente – batteria non inclusa',
      ctaButton: 'Aggiungi adattatore ora',
    },
    techSpecs: {
      headline: 'Dati tecnici',
      headers: { spec: 'Specifica', value: 'Valore' },
      labels: {
        connectivity: 'Rete mobile',
        wifi: 'Wi-Fi',
        range: 'Portata',
        battery: 'Batteria',
        protection: 'Grado di protezione',
        weight: 'Peso',
        dimensions: 'Dimensioni',
        setupTime: 'Tempo di installazione',
        ports: 'Porte',
        temperature: 'Temperatura di esercizio',
      },
    },
    remoteManagement: {
      headline: 'Controllo totale. Da qualsiasi luogo.',
      subline:
        'Gestite tutti i dispositivi centralmente tramite la dashboard cloud – aggiornamenti firmware, configurazione e monitoraggio in tempo reale.',
      features: [
        {
          title: 'Dashboard cloud',
          description:
            "Tutti i dispositivi a colpo d'occhio – monitorate stato, posizione e utilizzo in tempo reale.",
        },
        {
          title: 'Firmware Over-the-Air',
          description:
            'Distribuite aggiornamenti e patch in modo centralizzato e automatico su tutti i dispositivi.',
        },
        {
          title: 'Gestione multi-sito',
          description:
            'Raggruppate i dispositivi in diverse sedi e configurateli singolarmente.',
        },
        {
          title: 'Avvisi e report',
          description:
            "Notifiche automatiche in caso di guasto e report dettagliati sull'utilizzo.",
        },
      ],
    },
    connectivity: {
      headline: 'Più di una strada verso la rete.',
      subline:
        '5G (SA e NSA) con ritorno a 4G LTE. Doppia SIM con failover automatico. Tramite la porta WAN è possibile collegare un uplink fisso o satellitare.',
      features: [
        {
          title: '5G e LTE',
          text: '5G (SA e NSA) con ritorno a 4G LTE. Doppia SIM, schede SIM a scelta.',
        },
        {
          title: 'Failover doppia SIM',
          text: 'Se una rete cade, il router passa automaticamente alla seconda SIM. Nessun intervento manuale.',
        },
        {
          title: 'Compatibile Starlink',
          text: 'Per siti senza copertura cellulare in loco: collegare Starlink alla porta WAN.',
        },
        {
          title: 'Collegamenti in loco',
          text: '5 × Gigabit Ethernet e Wi-Fi dual band per i dispositivi sul posto.',
        },
      ],
    },
    footer: {
      sections: {
        produkte: 'Prodotti',
        rechtliches: 'Note legali',
        kontakt: 'Contatto',
      },
      legalLinks: {
        impressum: 'Informazioni legali',
        datenschutz: 'Informativa sulla privacy',
        agb: 'Condizioni generali',
        widerruf: 'Diritto di recesso',
        widerrufFunktion: 'Recesso',
        versand: 'Spedizione e pagamento',
        barrierefreiheit: 'Accessibilità',
        cookieEinstellungen: 'Impostazioni cookie',
      },
      copyright: '© 2026 Comms Connect GmbH. Tutti i diritti riservati.',
      trademark: 'Case Connect è un marchio di Comms Connect GmbH.',
    },
    cart: {
      cartTitle: 'Carrello',
      checkout: 'Vai alla cassa',
      empty: 'Il carrello è vuoto',
      addToCart: 'Aggiungi al carrello',
      remove: 'Rimuovi',
    },
    success: {
      headline: 'Grazie per il vostro ordine!',
      message:
        "Il vostro ordine è stato effettuato con successo. Riceverete a breve un'e-mail di conferma.",
    },
    contact: {
      headline: 'Invia richiesta',
      subline: 'Avete domande o desiderate una consulenza personalizzata? Scriveteci.',
      name: 'Nome *',
      email: 'E-mail *',
      phone: 'Telefono (facoltativo)',
      message: 'Il vostro messaggio *',
      send: 'Invia messaggio',
      success: 'Grazie! Vi ricontatteremo a breve.',
      error: "Errore nell'invio. Si prega di riprovare.",
    },
  },
};
