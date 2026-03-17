'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/i18n';

const rows = [
  { label: 'Router', standard: 'Teltonika RUTX50', professional: 'Cradlepoint R980' },
  { label: 'Mobilfunk', standard: '5G Sub-6 GHz', professional: '5G Sub-6 GHz' },
  { label: 'SIM', standard: 'Dual-SIM (physisch)', professional: 'Embedded eSIM' },
  { label: 'WiFi', standard: 'WiFi 6 (802.11ax)', professional: 'Via TAP200 Access Point' },
  { label: 'LAN', standard: '4x Gigabit Ethernet', professional: '2x Gigabit Ethernet' },
  { label: 'Schutzklasse', standard: 'CE & IP67', professional: 'CE & IP67' },
  { label: 'Stromversorgung', standard: '230V / 18V Akku', professional: '230V / 18V Akku' },
  { label: 'LAN-Kabel', standard: '25 m Cat6', professional: '25 m Cat6' },
  { label: 'Remote Mgmt', standard: 'Teltonika RMS (10 Jahre)', professional: 'Netcloud (5 Jahre)' },
  { label: 'Preis', standard: '1.999,99 €', professional: '2.299,00 €' },
];

export default function TechSpecs() {
  const t = useTranslation();
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl md:text-6xl font-bold text-center mb-20"
        >
          {t.techSpecs.headline}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.06]"
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
                {rows.map((row, i) => (
                  <tr key={i} className={`${i < rows.length - 1 ? 'border-b border-white/[0.04]' : ''} hover:bg-white/[0.02] transition-colors duration-300`}>
                    <td className="p-5 text-muted text-sm">{row.label}</td>
                    <td className="p-5">{row.standard}</td>
                    <td className="p-5">{row.professional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
