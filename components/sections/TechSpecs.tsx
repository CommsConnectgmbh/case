'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const overviewRows = [
  { label: 'Router', standard: 'Teltonika RUTX50', professional: 'Cradlepoint R980 (Ericsson)' },
  { label: 'Mobilfunk', standard: '5G Sub-6 GHz · SA & NSA', professional: '5G Sub-6 GHz · SA & NSA' },
  { label: 'Max. Download', standard: '3,3 Gbps (4×4 MIMO)', professional: '3,4 Gbps (4×4 MIMO)' },
  { label: 'SIM', standard: '2× physisch + eSIM', professional: '1× physisch + eSIM embedded' },
  { label: 'WiFi', standard: 'WiFi 5 (802.11ac)', professional: 'WiFi 6 (802.11ax)' },
  { label: 'LAN', standard: '5× Gigabit Ethernet', professional: '2× Gigabit Ethernet' },
  { label: 'Antenne', standard: 'Poynting PANL-431 (8-in-1)', professional: 'Poynting PANL-431 (8-in-1)' },
  { label: 'Schutzklasse', standard: 'CE & IP67 (Gehäuse)', professional: 'CE & IP67 (Gehäuse)' },
  { label: 'Remote Mgmt', standard: 'Teltonika RMS (10 Jahre)', professional: 'Netcloud (5 Jahre)' },
  { label: 'Preis (netto)', standard: '1.999 €', professional: '2.499 €' },
];

interface DetailCategory {
  category: string;
  rows: { label: string; standard: string; professional: string; note: string; advantage?: 'standard' | 'professional' }[];
}

const detailCategories: DetailCategory[] = [
  {
    category: 'Mobilfunk / Konnektivität',
    rows: [
      { label: '5G-Standard', standard: 'Sub-6 GHz · SA & NSA', professional: 'Sub-6 GHz · SA & NSA', note: 'Gleichwertig' },
      { label: 'Max. Download', standard: '3,3 Gbps (4×4 MIMO)', professional: '3,4 Gbps (4×4 MIMO)', note: 'Praktisch identisch' },
      { label: 'Max. Upload', standard: '900 Mbps (SA) / 600 Mbps (NSA)', professional: 'k. A.', note: '–', advantage: 'standard' },
      { label: 'LTE Fallback', standard: 'Cat 20 · 2,0 Gbps DL', professional: 'Cat 19', note: 'RUTX50 Vorteil', advantage: 'standard' },
      { label: '3G-Unterstützung', standard: 'Ja · 42 Mbps DL', professional: 'Ja', note: 'Gleichwertig' },
      { label: 'SIM-Slots', standard: '2× physisch + eSIM-Variante', professional: '1× physisch (4FF) + eSIM embedded', note: 'RUTX50 flexibler', advantage: 'standard' },
      { label: 'SIM Auto-Failover', standard: '8 konfigurierbare Switch-Szenarien', professional: 'Ja', note: 'RUTX50 granularer', advantage: 'standard' },
      { label: '5G Network Slicing', standard: '—', professional: 'Ja (SA-ready)', note: 'Enterprise-Feature R980', advantage: 'professional' },
    ],
  },
  {
    category: 'WLAN',
    rows: [
      { label: 'WiFi-Standard', standard: '802.11ac Wave 2 (WiFi 5)', professional: '802.11ax (WiFi 6)', note: 'R980 Vorteil', advantage: 'professional' },
      { label: 'Max. WiFi-Durchsatz', standard: '867 Mbps', professional: 'bis ~2,4 Gbps', note: 'R980 Vorteil', advantage: 'professional' },
      { label: 'Frequenzband', standard: 'Dual Band (2,4 + 5 GHz)', professional: 'Dual Band (2,4 + 5 GHz)', note: 'Gleichwertig' },
      { label: 'MU-MIMO / WPA3', standard: 'Ja / Ja', professional: 'Ja / Ja', note: '–' },
      { label: 'Wireless Mesh (802.11s)', standard: 'Ja', professional: '—', note: 'RUTX50 Vorteil', advantage: 'standard' },
    ],
  },
  {
    category: 'Ethernet & Anschlüsse',
    rows: [
      { label: 'Ethernet-Ports', standard: '5× Gigabit RJ45 (LAN/WAN schaltbar)', professional: '2× Gigabit (1× LAN, 1× WAN)', note: 'RUTX50 deutlich besser', advantage: 'standard' },
      { label: 'Antennenanschlüsse', standard: '4× SMA (5G/LTE) · 2× RP-SMA (WiFi) · 1× SMA (GNSS)', professional: '4× SMA (5G) · 2× RP-SMA (WiFi) · 1× SMA (GPS)', note: 'Vergleichbar' },
      { label: 'USB', standard: '1× USB 2.0', professional: '1× USB 2.0', note: '–' },
      { label: 'Passives PoE', standard: 'Ja · 9–50 VDC via LAN1', professional: '—', note: 'RUTX50 Vorteil', advantage: 'standard' },
    ],
  },
  {
    category: 'GPS / Ortung',
    rows: [
      { label: 'GNSS-Systeme', standard: 'GPS · GLONASS · Galileo · BeiDou', professional: 'GPS · GLONASS · BeiDou · Galileo', note: 'Gleichwertig' },
      { label: 'Live-Tracking / Coverage Maps', standard: 'Basis via RMS', professional: 'Erweitert: Live-Tracking, Coverage Maps, Cellular Health Analytics', note: 'R980 Flotten-Feature', advantage: 'professional' },
    ],
  },
  {
    category: 'Hardware & Robustheit',
    rows: [
      { label: 'Betriebstemperatur', standard: '−40 °C bis +75 °C', professional: '−30 °C bis +70 °C', note: 'RUTX50 robuster', advantage: 'standard' },
      { label: 'Schutzklasse', standard: 'IP30', professional: 'Ruggedized Metal', note: 'R980 Außeneinsatz' },
      { label: 'DIN-Rail Montage', standard: 'Ja (Schrankeinbau)', professional: 'Fahrzeugmontage', note: 'Je nach Einsatz' },
      { label: 'Abmessungen', standard: '132 × 44 × 95 mm', professional: 'ca. 150 × 43 × 138 mm', note: 'RUTX50 kompakter', advantage: 'standard' },
      { label: 'Versorgungsspannung', standard: '9–30 VDC', professional: '9–36 VDC', note: 'Vergleichbar' },
      { label: 'Lieferumfang', standard: 'Router + 4× Mobilfunk + 2× WiFi + GPS + Kabel', professional: 'Router only (keine Antennen inkl.)', note: 'RUTX50 vollständig', advantage: 'standard' },
    ],
  },
  {
    category: 'Software, Management & Sicherheit',
    rows: [
      { label: 'Betriebssystem', standard: 'RutOS (OpenWRT-basiert)', professional: 'CradleOS + NetCloud', note: '–' },
      { label: 'Cloud-Management', standard: 'Teltonika RMS · API · Batch-Mgmt', professional: 'Ericsson NetCloud Manager', note: 'Beide vollwertig' },
      { label: 'VPN-Protokolle', standard: 'OpenVPN · WireGuard · IPsec · L2TP · Tailscale · GRE · DMVPN', professional: 'IPsec · OpenVPN · WireGuard', note: 'RUTX50 breiter', advantage: 'standard' },
      { label: 'Zero Trust / SASE / SD-WAN', standard: '—', professional: 'Ja (NetCloud nativ)', note: 'Enterprise-Feature R980', advantage: 'professional' },
      { label: 'IDS / IPS', standard: 'Basis Firewall', professional: 'Ja (Advanced Plan)', note: 'R980 Vorteil Security', advantage: 'professional' },
      { label: 'Edge Computing', standard: 'Begrenzt', professional: 'Container · SDK · API · Connectors', note: 'R980 Vorteil', advantage: 'professional' },
      { label: 'IoT-Protokolle', standard: 'Modbus TCP/RTU · MQTT · Azure IoT Hub · AWS IoT · CoAP · SNMP', professional: 'MQTT · REST API', note: 'RUTX50 breiter', advantage: 'standard' },
      { label: 'Captive Portal', standard: 'Ja · anpassbar', professional: '—', note: 'RUTX50 Vorteil', advantage: 'standard' },
      { label: 'Lizenzmodell', standard: 'Einmalkauf · kein Pflicht-Abo', professional: 'Hardware + Pflicht NetCloud-Abo', note: 'RUTX50 TCO günstiger', advantage: 'standard' },
      { label: 'Primärer Zielmarkt', standard: 'Industrie · IoT · SMB · Mobile', professional: 'Public Safety · Flotten · Enterprise', note: 'Verschiedene Segmente' },
    ],
  },
];

const antennaSpecs = [
  { label: 'Konfiguration', value: '8-in-1 (4× Mobilfunk · 3× WiFi · 1× GNSS)' },
  { label: 'Mobilfunk Frequenz', value: '410 – 6.000 MHz' },
  { label: 'WiFi Frequenz', value: '2,4 GHz · 5 GHz · 6 GHz (Tri-Band)' },
  { label: 'WiFi-Standard', value: 'WiFi 6E / WiFi 7 ready' },
  { label: 'GNSS', value: 'Dual-Band L1 + L5' },
  { label: 'MIMO Mobilfunk', value: '4×4 (kreuzpolarisiert)' },
  { label: 'MIMO WiFi', value: '3×3' },
  { label: 'Kabellänge', value: '0,5 m (geringer Signalverlust)' },
  { label: 'Steckverbinder', value: 'SMA (Mobil/GNSS) · RP-SMA (WiFi)' },
  { label: 'Schutzklasse', value: 'IP65' },
  { label: 'Montage', value: 'Velcro (Klettverschluss) · Saugnäpfe' },
  { label: 'Bauform', value: 'Flach / Low-Profile Panel' },
  { label: 'Kompatibel mit', value: 'Teltonika RUTX50 · RUTC50 · Cradlepoint R980' },
];

const productLinks = [
  { name: 'Teltonika RUTX50', url: 'https://teltonika-networks.com/products/routers/rutx50' },
  { name: 'Teltonika RMS', url: 'https://teltonika-networks.com/products/remote-management/rms' },
  { name: 'Cradlepoint R980', url: 'https://cradlepoint.com/product/endpoints/r980/' },
  { name: 'Ericsson NetCloud', url: 'https://cradlepoint.com/netcloud/' },
  { name: 'Poynting PANL-431', url: 'https://poyntinggroup.com/antennas/panl-431/' },
];

export default function TechSpecs() {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslation();

  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">Technischer Produktvergleich · 5G Industrial Router</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">{t.techSpecs.headline}</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Zwei Varianten im Detail – Teltonika RUTX50 vs. Ericsson Cradlepoint R980.
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
                  <th className="text-left p-5 font-heading font-bold">
                    Standard
                    <span className="ml-2 text-[10px] bg-cta/80 text-white px-2 py-0.5 rounded-full font-medium">Bestseller</span>
                  </th>
                  <th className="text-left p-5 font-heading font-bold">
                    Professional
                    <span className="ml-2 text-[10px] bg-primary/80 text-black px-2 py-0.5 rounded-full font-medium">Enterprise</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {overviewRows.map((row, i) => (
                  <tr key={i} className={`${i < overviewRows.length - 1 ? 'border-b border-white/[0.04]' : ''} hover:bg-white/[0.02] transition-colors duration-300`}>
                    <td className="p-5 text-muted text-sm">{row.label}</td>
                    <td className="p-5">{row.standard}</td>
                    <td className="p-5">{row.professional}</td>
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
                            <th colSpan={4} className="text-left p-4 font-heading font-bold text-sm text-primary/90">{cat.category}</th>
                          </tr>
                          <tr className="border-b border-white/[0.06]">
                            <th className="text-left px-4 py-2.5 text-muted font-normal text-xs w-[18%]">Eigenschaft</th>
                            <th className="text-left px-4 py-2.5 text-muted font-normal text-xs w-[28%]">RUTX50 (Standard)</th>
                            <th className="text-left px-4 py-2.5 text-muted font-normal text-xs w-[28%]">R980 (Professional)</th>
                            <th className="text-left px-4 py-2.5 text-muted font-normal text-xs w-[26%]">Einordnung</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cat.rows.map((row, ri) => (
                            <tr key={ri} className={`${ri < cat.rows.length - 1 ? 'border-b border-white/[0.04]' : ''} hover:bg-white/[0.02] transition-colors`}>
                              <td className="px-4 py-3 text-muted text-[13px]">{row.label}</td>
                              <td className={`px-4 py-3 ${row.advantage === 'standard' ? 'text-primary/90' : ''}`}>{row.standard}</td>
                              <td className={`px-4 py-3 ${row.advantage === 'professional' ? 'text-primary/90' : ''}`}>{row.professional}</td>
                              <td className="px-4 py-3 text-muted text-[13px]">{row.note}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>

              {/* Verdict */}
              <div className="mt-8 rounded-2xl bg-primary/[0.05] border border-primary/[0.15] p-6 md:p-8">
                <h3 className="font-heading font-bold text-lg mb-3">Fazit</h3>
                <p className="text-muted text-[15px] leading-relaxed">
                  Für die Mehrzahl der B2B-Anwendungen – Büro, Lager, mobile Arbeitsplätze, IoT-Steuerung –
                  bietet der <strong className="text-white">RUTX50 die effizientere Gesamtlösung</strong>: gleichwertiger 5G-Durchsatz,
                  fünf Gigabit-Ports, industrielle IoT-Protokolle und kein Pflicht-Abo. Der <strong className="text-white">R980</strong> punktet
                  bei spezifischen Enterprise-Anforderungen: Zero Trust Security, WiFi 6, 5G Network Slicing
                  und erweiterter Flottentelemetrie – Features, die im klassischen B2B-Betrieb selten benötigt werden.
                </p>
              </div>

              {/* Antenna Section */}
              <div className="mt-12">
                <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">Empfohlenes Zubehör</p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">Poynting PANL-431</h3>
                <p className="text-muted text-[15px] mb-6 max-w-2xl">
                  8-in-1 Kombiantenne für 5G, WiFi 6E/7 und präzises GNSS –
                  ideal für mobile Deployments und den 5G Case.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Antenna Description */}
                  <div className="space-y-4 text-muted text-[14px] leading-relaxed">
                    <p>
                      Die Poynting PANL-431 ist eine <strong className="text-white">8-in-1 Multifunktions-Panelantenne</strong> für kritische,
                      mobile Konnektivitätsanforderungen. Sie vereint vier 4G/5G-Antennen, drei Tri-Band-WiFi-Antennen
                      und eine Dual-Band-GNSS/GPS-Antenne in einem einzigen, flachen Gehäuse.
                    </p>
                    <p>
                      Der Frequenzbereich von <strong className="text-white">410 MHz bis 6.000 MHz</strong> deckt alle gängigen
                      4G LTE- und 5G-Bänder ab und unterstützt parallel Tri-Band-WiFi für <strong className="text-white">WiFi 6E und WiFi 7</strong>.
                      Das kreuzpolarisierte 4×4 MIMO für Mobilfunk und 3×3 MIMO für WiFi sorgen für maximalen Durchsatz.
                    </p>
                    <p>
                      Dank <strong className="text-white">Velcro-Montage und kurzen 0,5-m-Kabeln</strong> lässt sich die Antenne schnell
                      und ohne Bohren installieren – ideal für den 5G Case, Fahrzeugeinsatz und temporäre Deployments.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {['8-in-1', '5G Sub-6', 'WiFi 6E / 7', 'IP65', 'Dual-Band GNSS'].map((tag) => (
                        <span key={tag} className="px-3 py-1 text-[11px] font-medium rounded-full bg-white/[0.06] text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Antenna Specs Table */}
                  <div className="rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06]">
                    <table className="w-full text-[13px]">
                      <tbody>
                        {antennaSpecs.map((spec, i) => (
                          <tr key={i} className={`${i < antennaSpecs.length - 1 ? 'border-b border-white/[0.04]' : ''} hover:bg-white/[0.02] transition-colors`}>
                            <th scope="row" className="text-left px-4 py-2.5 text-muted font-normal w-[40%]">{spec.label}</th>
                            <td className="px-4 py-2.5">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
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
