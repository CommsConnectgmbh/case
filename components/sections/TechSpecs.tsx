'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const overviewRows = [
  { label: 'Router', value: 'Teltonika RUTX50' },
  { label: 'Mobilfunk', value: '5G (SA und NSA), Rückfall auf 4G LTE' },
  { label: 'Max. Download', value: 'bis 3,3 Gbit/s (Herstellerangabe, real abhängig von Netz und Standort)' },
  { label: 'SIM', value: 'Dual-SIM mit automatischem Failover' },
  { label: 'WLAN', value: 'Dual-Band-WLAN am Router, zusätzlich Wi-Fi 6 über den mitgelieferten Mesh-Repeater' },
  { label: 'LAN', value: '5 × Gigabit-Ethernet' },
  { label: 'Antenne (inkl.)', value: 'Poynting 5G-Panelantenne (A-PANL-0431), im Kofferdeckel verbaut' },
  { label: 'Repeater (inkl.)', value: 'Cudy RE3000 Wi-Fi-6-Mesh-Repeater (AX3000), als Repeater oder Access Point nutzbar' },
  { label: 'Gehäuse', value: 'PARAT-Systemkoffer mit Tragegriff, gefertigt von PARAT in Waldkirchen' },
  { label: 'Remote Mgmt', value: 'Teltonika RMS, 10-Jahres-Lizenz inklusive' },
];

interface DetailCategory {
  category: string;
  rows: { label: string; value: string }[];
}

const detailCategories: DetailCategory[] = [
  {
    category: 'Anschlüsse außen am Koffer',
    rows: [
      { label: 'RJ45 LAN', value: 'Netzwerkanschluss für Endgeräte, Maschinen oder Kameras' },
      { label: 'RJ45 WAN', value: 'Durchgangsbuchse zum WAN-Port des Routers, z. B. für Festnetz- oder Satelliten-Uplink' },
      { label: '12-V-Kfz-Buchse', value: 'Versorgung über Kfz-Steckdose' },
      { label: '230-V-Netzbuchse', value: 'Versorgung über das Stromnetz' },
    ],
  },
  {
    category: 'Stromversorgung: drei Quellen',
    rows: [
      { label: 'Netz', value: '100 bis 240 V AC, 50/60 Hz' },
      { label: 'Akku', value: 'Werkzeugakkus 18 bis 36 V über Brennenstuhl MULTI Battery Adapter (Akku und Adapter nicht im Lieferumfang)' },
      { label: 'Fahrzeug', value: '12 V über Kfz-Steckdose (12 bis 13,5 V DC)' },
      { label: 'Hinweis', value: 'Der Akku wird im Koffer nicht geladen. Laden mit dem Originalladegerät.' },
    ],
  },
  {
    category: 'Bedienfeld',
    rows: [
      { label: 'Drehwahlschalter', value: 'Stromquelle wählen: 0 Aus, 1 Netz 230 V, 2 Akku, 3 Kfz 12 V' },
      { label: 'Status-LED', value: 'Leuchtet, wenn der Router versorgt wird' },
      { label: 'Netzschalter', value: 'Grüner Schalter für das 230-V-Netzteil' },
      { label: 'Absicherung', value: 'Sicherungen je Stromquelle' },
    ],
  },
  {
    category: 'Lieferumfang',
    rows: [
      { label: 'Koffer', value: '5G Case mit Teltonika RUTX50 und Poynting 5G-Panelantenne, vorkonfiguriert' },
      { label: 'Repeater', value: 'Cudy RE3000 Wi-Fi-6-Mesh-Repeater (AX3000), Steckernetzteil, 1 × Gigabit-Ethernet' },
      { label: 'Kabel', value: '30 m Cat6-Netzwerkkabel (S/FTP, LSZH, halogenfrei), 230-V-Anschlusskabel, 12-V-Kfz-Anschlusskabel' },
      { label: 'Staufach', value: 'Im Koffer, für Kabel und Akku' },
    ],
  },
  {
    category: 'WLAN erweitern: Cudy RE3000 (im Lieferumfang)',
    rows: [
      { label: 'Standard', value: 'Wi-Fi 6 (802.11ax), Dual-Band AX3000: bis 2.402 Mbit/s auf 5 GHz und 574 Mbit/s auf 2,4 GHz (Herstellerangaben)' },
      { label: 'Betriebsart 1', value: 'Repeater: verlängert das WLAN des Koffers drahtlos, z. B. um eine Etage oder Hallenhälfte' },
      { label: 'Betriebsart 2', value: 'Access Point: per Netzwerkkabel an den Koffer angebunden und spannt am Zielort ein eigenes WLAN auf' },
      { label: 'Anschluss', value: '1 × Gigabit-Ethernet, passend zum 30 m Cat6-Kabel im Lieferumfang' },
      { label: 'Stromversorgung', value: 'Steckernetzteil 100 bis 240 V. Der Repeater braucht am Einsatzort eine eigene Steckdose und läuft nicht über den Werkzeugakku des Koffers.' },
    ],
  },
  {
    category: 'Betriebshinweise',
    rows: [
      { label: 'Aufstellung', value: 'Betrieb mit geöffnetem Deckel und geöffnetem Staufach (Wärmeabfuhr)' },
      { label: 'Umgebungstemperatur', value: '0 bis 35 °C' },
      { label: 'Umgebung', value: 'Nicht bei Regen oder in feuchter Umgebung betreiben' },
      { label: 'Transport', value: 'Akku bei Transport entnehmen' },
      { label: 'Zielgruppe', value: 'Für gewerbliche Anwender und geschultes Personal (B2B)' },
    ],
  },
];

const productLinks = [
  { name: 'Teltonika RUTX50', url: 'https://teltonika-networks.com/products/routers/rutx50' },
  { name: 'Teltonika RMS', url: 'https://www.teltonika-networks.com/de/newsroom/rms-connect-your-expert-remote-management-tool' },
  { name: 'Poynting A-PANL-0431', url: 'https://poynting.tech/antennas/panl-431/' },
  { name: 'Cudy RE3000', url: 'https://www.cudy.com/products/re3000-1-0' },
];

export default function TechSpecs() {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslation();

  return (
    <section id="technik" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">5G Case Standard · Teltonika RUTX50</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">{t.techSpecs.headline}</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Alle Angaben zum 5G Case Standard im Überblick.
          </p>
        </motion.div>

        {/* Compact Overview Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.06] mb-4"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-[15px]">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left p-5 text-muted font-normal text-sm">Feature</th>
                  <th className="text-left p-5 font-heading font-bold">5G Case Standard</th>
                </tr>
              </thead>
              <tbody>
                {overviewRows.map((row, i) => (
                  <tr key={i} className={`${i < overviewRows.length - 1 ? 'border-b border-white/[0.04]' : ''} hover:bg-white/[0.02] transition-colors duration-300`}>
                    <td className="p-5 text-muted text-sm">{row.label}</td>
                    <td className="p-5">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Expand / Collapse Button */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 py-4 text-primary hover:text-primary/80 transition-colors duration-300 text-[15px] font-medium group"
        >
          <span>{isExpanded ? 'Weniger anzeigen' : 'Alle technischen Details anzeigen'}</span>
          <ChevronDown
            size={18}
            className={`transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''} group-hover:translate-y-0.5`}
          />
        </motion.button>

        {/* Expandable Detail Section */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              {/* Detail Categories */}
              <div className="space-y-6 mt-4">
                {detailCategories.map((cat, ci) => (
                  <div key={ci} className="rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06]">
                    <div className="overflow-x-auto">
                      <table className="w-full text-[14px]">
                        <thead>
                          <tr className="border-b border-white/[0.08] bg-white/[0.03]">
                            <th colSpan={2} className="text-left p-4 font-heading font-bold text-sm text-primary/90">{cat.category}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cat.rows.map((row, ri) => (
                            <tr key={ri} className={`${ri < cat.rows.length - 1 ? 'border-b border-white/[0.04]' : ''} hover:bg-white/[0.02] transition-colors`}>
                              <td className="px-4 py-3 text-muted text-[13px] w-[30%]">{row.label}</td>
                              <td className="px-4 py-3">{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>

              {/* Antenna Section */}
              <div className="mt-12">
                <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">Inkludierte Antenne</p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">Poynting 5G-Panelantenne</h3>
                <p className="text-muted text-[15px] mb-6 max-w-2xl">
                  Poynting A-PANL-0431, im Kofferdeckel verbaut und in jedem 5G Case enthalten.
                </p>
              </div>

              {/* Product Links */}
              <div className="mt-12 pt-8 border-t border-white/[0.06]">
                <p className="text-muted text-sm mb-4">Herstellerseiten & Plattformen</p>
                <div className="flex flex-wrap gap-3">
                  {productLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] rounded-full bg-white/[0.04] border border-white/[0.08] text-muted hover:text-white hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-300"
                    >
                      {link.name}
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Footnote */}
              <p className="text-muted/60 text-xs mt-8">
                Alle technischen Angaben nach Herstellerdokumentation (Stand 2025/2026).
                Änderungen vorbehalten – bitte aktuelle Datenblätter der Hersteller beachten.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
