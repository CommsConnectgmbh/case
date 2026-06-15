'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export type FaqEntry = { q: string; a: string };

export const FAQS: FaqEntry[] = [
  {
    q: 'Was ist ein 5G-Koffer?',
    a: 'Ein 5G-Koffer ist ein vorkonfiguriertes mobiles Netzwerk-System in einem IP67-geschützten Trolley. Er enthält Multi-Carrier-5G-Router, externe MIMO-Antenne, optional Power-Bank und WLAN-Access-Points. Der Koffer wird aufgestellt, eingeschaltet und liefert in unter 60 Sekunden Enterprise-grade-Internet — typisch bis 3,3 Gbit/s Download, Reichweite bis 500 m im freien Gelände.',
  },
  {
    q: 'Wofür wird ein 5G-Koffer eingesetzt?',
    a: 'Standorte ohne Festnetz oder mit zu langsamem DSL: Baustellen, Außendienst-Stützpunkte, Events, Container-Büros, Krisensituationen, mobile Werkstätten, Notfall-Internet bei Carrier-Ausfall. Ebenso für Industrie-IoT, Maschinen-Monitoring, Pop-up-Stores oder Filmcrew-Logistik vor Ort.',
  },
  {
    q: 'Welche Reichweite hat der 5G-Koffer?',
    a: 'Bis zu 500 Meter im freien Gelände bei optimaler Carrier-Abdeckung. In Gebäuden bzw. auf bebauten Flächen rechnen wir mit 80 bis 150 Metern pro Access-Point. Für größere Areale kombinieren wir den Koffer mit Mesh-fähigen Repeatern.',
  },
  {
    q: 'Wie schnell ist das Internet aus dem 5G-Koffer?',
    a: 'Bis zu 3,3 Gbit/s Download und 900 Mbit/s Upload im 5G-Standalone-Modus (4×4 MIMO). In der Praxis hängt das Tempo von der Carrier-Abdeckung am Standort ab. Bei schwachem 5G-Netz wechselt der Koffer automatisch auf LTE-Cat-20 (bis 2 Gbit/s).',
  },
  {
    q: 'Welche Mobilfunkanbieter werden unterstützt?',
    a: 'Multi-Carrier: Deutsche Telekom, Vodafone, O2 (Telefónica), 1&1 — und alle EU-Roaming-Partner via eSIM. Der Koffer prüft alle vier Netze parallel und wählt automatisch das stärkste. Bei Bedarf kommt jedes Gerät auch mit Business-SIM-Karte aus unserem Bestand.',
  },
  {
    q: 'Was kostet ein 5G-Koffer und gibt es Miete?',
    a: 'Kauf ab 1.999 € (Case-Connect Standard mit Teltonika RUTX50) bzw. 2.499 € (Professional mit Cradlepoint R980). Miete startet bei 49 € pro Tag bzw. 690 € pro Monat — inkl. Multi-Carrier-SIMs und Versand. Mietpreise sinken ab 4 Wochen Mietdauer deutlich; Kauf nach Miete ist anrechenbar.',
  },
  {
    q: 'Ist der Koffer wetterfest?',
    a: 'Ja. Gehäuse nach IP67 (staubdicht, kurzzeitig wassergeschützt). Die Antenne ist outdoor-fest gemäß IP65. Betriebstemperatur −20 °C bis +60 °C. Für dauerhafte Outdoor-Installation empfehlen wir die Wallmount-Halterung mit Sonnen- und Frostschutz.',
  },
  {
    q: 'Brauche ich technisches Wissen zum Aufbau?',
    a: 'Nein. Der Koffer ist Plug & Play. Stecker rein, Schalter an, fertig — Konfiguration läuft beim ersten Start automatisch. Auf Wunsch managen wir den Koffer remote über Teltonika RMS bzw. Cradlepoint Netcloud (Firmware-Updates, Monitoring, Geräte-Sperre bei Diebstahl).',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-bg py-24 sm:py-32 px-6 border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-medium tracking-[0.18em] uppercase text-primary mb-3">
          Häufige Fragen
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Was Kunden vor dem Kauf wissen wollen.
        </h2>
        <p className="text-muted/80 leading-relaxed mb-12">
          Acht typische Fragen zum 5G-Koffer von Case-Connect — Multi-Carrier, IP67, Plug &
          Play in unter 60 Sekunden. Mehr Details auf Anfrage über{' '}
          <a href="mailto:info@case-connect.de" className="text-primary underline">
            info@case-connect.de
          </a>
          .
        </p>

        <ul className="space-y-1">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <li
                key={f.q}
                className="border-b border-white/[0.08] first:border-t first:border-white/[0.08]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  className="w-full text-left flex items-start justify-between gap-4 py-5 hover:text-primary transition-colors"
                >
                  <span className="font-heading text-lg font-semibold tracking-tight">
                    {f.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`mt-1 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary' : 'text-muted/60'
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-8 text-muted/85 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
