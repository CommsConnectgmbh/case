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
    features: string[];
    starlinkNote: string;
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
      versand: string;
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
    },
    problem: {
      headline:
        'Kein Netz ist keine Option. Nicht auf der Baustelle. Nicht beim Event. Nicht im Einsatz.',
      stats: [
        { value: 60, suffix: 's', label: 'Setup-Zeit' },
        { value: 500, suffix: 'm', label: 'Reichweite' },
        { value: 99.9, suffix: '%', label: 'Uptime' },
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
          title: 'Einsatz ohne Infrastruktur',
          description:
            'Katastrophengebiete, temporäre Standorte und Fernwartung erfordern sofort verfügbares Netz ohne Installationsaufwand.',
        },
      ],
    },
    productIntro: {
      overline: '5G CASE',
      headline: 'Enterprise-Konnektivität. Überall.',
      features: [
        'Plug & Play in <60s',
        'IP67 Schutzklasse',
        'Bis zu 500m Reichweite',
        'Multi-Carrier 5G/LTE',
      ],
    },
    shop: {
      headline: 'Das richtige Setup für Ihren Einsatz.',
      subline: 'Zwei Varianten. Ein Versprechen: Konnektivität überall.',
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
            'WLAN auswählen und sofort mit bis zu 500 m Reichweite online gehen.',
        },
      ],
    },
    useCases: {
      headline: 'Jedes Szenario. Eine Lösung.',
      subline: 'Von der Baustelle bis zum Katastrophengebiet.',
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
          title: 'Notfälle & Krisen',
          description:
            'Schnelle Lagekommunikation für Feuerwehr, THW und Rettungsdienste in Gebieten mit zerstörter Infrastruktur.',
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
        'Kein Vendor Lock-in. Kompatibel mit 18V Akkus von 7 Herstellern.',
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
      headline: 'Weltweit vernetzt. Ohne Kompromisse.',
      subline:
        'Kompatibel mit allen gängigen Mobilfunknetzen weltweit. Für besonders schwierige Standorte ohne Mobilfunkempfang kann Starlink via WAN-Port angeschlossen werden.',
      features: [
        '5G / LTE / 3G weltweit',
        'Alle gängigen Mobilfunknetze',
        'Starlink-kompatibel via WAN',
        'Multi-Carrier Failover',
      ],
      starlinkNote:
        'Starlink-Integration für Standorte ohne Mobilfunkabdeckung',
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
        versand: 'Versand & Zahlung',
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
    },
    problem: {
      headline:
        'No signal is not an option. Not on the construction site. Not at the event. Not in the field.',
      stats: [
        { value: 60, suffix: 's', label: 'Setup time' },
        { value: 500, suffix: 'm', label: 'Range' },
        { value: 99.9, suffix: '%', label: 'Uptime' },
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
          title: 'Operations without infrastructure',
          description:
            'Disaster zones, temporary sites and remote maintenance require instant connectivity without complex installation.',
        },
      ],
    },
    productIntro: {
      overline: '5G CASE',
      headline: 'Enterprise connectivity. Everywhere.',
      features: [
        'Plug & Play in <60s',
        'IP67 protection rating',
        'Up to 500m range',
        'Multi-carrier 5G/LTE',
      ],
    },
    shop: {
      headline: 'The right setup for your operation.',
      subline: 'Two variants. One promise: connectivity everywhere.',
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
            'Select the Wi-Fi network and go online instantly with up to 500 m range.',
        },
      ],
    },
    useCases: {
      headline: 'Every scenario. One solution.',
      subline: 'From construction sites to disaster zones.',
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
          title: 'Emergencies & Crises',
          description:
            'Rapid communication for first responders and rescue services in areas with destroyed infrastructure.',
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
        'No vendor lock-in. Compatible with 18V batteries from 7 manufacturers.',
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
      headline: 'Globally connected. No compromises.',
      subline:
        'Compatible with all major mobile networks worldwide. For particularly challenging sites without cellular reception, Starlink can be connected via the WAN port.',
      features: [
        '5G / LTE / 3G worldwide',
        'All major mobile networks',
        'Starlink-compatible via WAN',
        'Multi-carrier failover',
      ],
      starlinkNote:
        'Starlink integration for sites without cellular coverage',
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
        versand: 'Shipping & Payment',
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
    },
    problem: {
      headline:
        "Pas de réseau n'est pas une option. Pas sur le chantier. Pas lors d'un événement. Pas en mission.",
      stats: [
        { value: 60, suffix: 's', label: 'Installation' },
        { value: 500, suffix: 'm', label: 'Portée' },
        { value: 99.9, suffix: '%', label: 'Disponibilité' },
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
          title: 'Opérations sans infrastructure',
          description:
            'Zones sinistrées, sites temporaires et maintenance à distance nécessitent un réseau immédiat sans installation complexe.',
        },
      ],
    },
    productIntro: {
      overline: '5G CASE',
      headline: 'Connectivité professionnelle. Partout.',
      features: [
        'Plug & Play en <60s',
        'Indice de protection IP67',
        "Jusqu'à 500m de portée",
        'Multi-opérateur 5G/LTE',
      ],
    },
    shop: {
      headline: 'La bonne configuration pour votre mission.',
      subline: 'Deux variantes. Une promesse : connectivité partout.',
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
            "Sélectionnez le réseau Wi-Fi et connectez-vous instantanément avec jusqu'à 500 m de portée.",
        },
      ],
    },
    useCases: {
      headline: 'Chaque scénario. Une solution.',
      subline: 'Du chantier à la zone sinistrée.',
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
          title: 'Urgences & Crises',
          description:
            "Communication rapide pour les pompiers et secouristes dans les zones où l'infrastructure est détruite.",
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
        "Pas de verrouillage fabricant. Compatible avec les batteries 18V de 7 fabricants.",
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
      headline: 'Connecté partout. Sans compromis.',
      subline:
        'Compatible avec tous les principaux réseaux mobiles dans le monde. Pour les sites particulièrement difficiles sans réception cellulaire, Starlink peut être connecté via le port WAN.',
      features: [
        '5G / LTE / 3G mondial',
        'Tous les principaux réseaux mobiles',
        'Compatible Starlink via WAN',
        'Basculement multi-opérateur',
      ],
      starlinkNote:
        'Intégration Starlink pour les sites sans couverture cellulaire',
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
        versand: 'Livraison & Paiement',
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
    },
    problem: {
      headline:
        'Sin cobertura no es una opción. Ni en la obra. Ni en el evento. Ni en la operación.',
      stats: [
        { value: 60, suffix: 's', label: 'Instalación' },
        { value: 500, suffix: 'm', label: 'Alcance' },
        { value: 99.9, suffix: '%', label: 'Disponibilidad' },
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
          title: 'Operaciones sin infraestructura',
          description:
            'Zonas de desastre, ubicaciones temporales y mantenimiento remoto requieren red inmediata sin instalación compleja.',
        },
      ],
    },
    productIntro: {
      overline: '5G CASE',
      headline: 'Conectividad empresarial. En todas partes.',
      features: [
        'Plug & Play en <60s',
        'Protección IP67',
        'Hasta 500m de alcance',
        'Multi-operador 5G/LTE',
      ],
    },
    shop: {
      headline: 'La configuración adecuada para su operación.',
      subline: 'Dos variantes. Una promesa: conectividad en todas partes.',
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
            'Seleccione la red Wi-Fi y conéctese al instante con hasta 500 m de alcance.',
        },
      ],
    },
    useCases: {
      headline: 'Cada escenario. Una solución.',
      subline: 'Desde la obra hasta la zona de desastre.',
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
          title: 'Emergencias y crisis',
          description:
            'Comunicación rápida para bomberos y servicios de rescate en zonas con infraestructura destruida.',
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
        'Sin dependencia de fabricante. Compatible con baterías de 18V de 7 fabricantes.',
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
      headline: 'Conectado globalmente. Sin compromisos.',
      subline:
        'Compatible con todas las principales redes móviles del mundo. Para ubicaciones especialmente difíciles sin recepción celular, se puede conectar Starlink a través del puerto WAN.',
      features: [
        '5G / LTE / 3G mundial',
        'Todas las principales redes móviles',
        'Compatible con Starlink vía WAN',
        'Conmutación multi-operador',
      ],
      starlinkNote:
        'Integración Starlink para ubicaciones sin cobertura celular',
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
        versand: 'Envío y pago',
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
    },
    problem: {
      headline:
        "Nessun segnale non è un'opzione. Non in cantiere. Non all'evento. Non in missione.",
      stats: [
        { value: 60, suffix: 's', label: 'Installazione' },
        { value: 500, suffix: 'm', label: 'Portata' },
        { value: 99.9, suffix: '%', label: 'Disponibilità' },
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
          title: 'Operazioni senza infrastruttura',
          description:
            'Zone disastrate, siti temporanei e manutenzione remota richiedono rete immediata senza installazioni complesse.',
        },
      ],
    },
    productIntro: {
      overline: '5G CASE',
      headline: 'Connettività aziendale. Ovunque.',
      features: [
        'Plug & Play in <60s',
        'Grado di protezione IP67',
        'Fino a 500m di portata',
        'Multi-operatore 5G/LTE',
      ],
    },
    shop: {
      headline: 'La configurazione giusta per la vostra operazione.',
      subline: 'Due varianti. Una promessa: connettività ovunque.',
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
            'Selezionate la rete Wi-Fi e connettetevi istantaneamente con una portata fino a 500 m.',
        },
      ],
    },
    useCases: {
      headline: 'Ogni scenario. Una soluzione.',
      subline: 'Dal cantiere alla zona disastrata.',
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
          title: 'Emergenze e crisi',
          description:
            'Comunicazione rapida per vigili del fuoco e servizi di soccorso in zone con infrastruttura distrutta.',
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
        'Nessun vincolo al produttore. Compatibile con batterie 18V di 7 produttori.',
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
      headline: 'Connessi ovunque. Senza compromessi.',
      subline:
        'Compatibile con tutte le principali reti mobili del mondo. Per siti particolarmente difficili senza ricezione cellulare, Starlink può essere collegato tramite la porta WAN.',
      features: [
        '5G / LTE / 3G mondiale',
        'Tutte le principali reti mobili',
        'Compatibile Starlink via WAN',
        'Failover multi-operatore',
      ],
      starlinkNote:
        'Integrazione Starlink per siti senza copertura cellulare',
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
        versand: 'Spedizione e pagamento',
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
