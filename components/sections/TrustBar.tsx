'use client';

import { motion } from 'framer-motion';

const partners = [
  { name: 'PARAT', url: 'https://www.parat.de/', role: 'Gehäuse' },
  { name: 'Teltonika', url: 'https://teltonika-networks.com/', role: 'Router' },
  { name: 'Ericsson', url: 'https://cradlepoint.com/', role: 'Enterprise' },
  { name: 'Poynting', url: 'https://poynting.tech/', role: 'Antenne' },
  { name: 'Sector27', url: 'https://www.sector27.de/', role: 'Service' },
  { name: 'Gautzsch', url: 'https://www.gautzsch-gruppe.de/', role: 'Distribution' },
];

export default function TrustBar() {
  return (
    <section className="py-16 px-6 border-y border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-muted/50 text-xs uppercase tracking-[0.2em] text-center mb-10"
        >
          Technologiepartner & Distribution
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16"
        >
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 transition-opacity duration-300 opacity-40 hover:opacity-90"
            >
              <span className="font-heading text-lg md:text-xl font-bold tracking-tight text-white/80 group-hover:text-white transition-colors">
                {partner.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted/40 group-hover:text-muted/70 transition-colors">
                {partner.role}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
