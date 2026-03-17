'use client';

import { motion } from 'framer-motion';
import ProductCard from '@/components/ui/ProductCard';
import AddonCard from '@/components/ui/AddonCard';
import { PRODUCTS, ADDONS } from '@/lib/products';
import { useTranslation } from '@/lib/i18n';

export default function Shop() {
  const t = useTranslation();
  return (
    <section id="shop" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl md:text-6xl font-bold text-center mb-4"
        >
          {t.shop.headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted text-center mb-20 max-w-lg mx-auto text-lg"
        >
          {t.shop.subline}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <ProductCard {...PRODUCTS.standard} highlighted />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <ProductCard {...PRODUCTS.professional} />
          </motion.div>
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl font-bold mb-8"
        >
          {t.shop.addonsTitle}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <AddonCard {...ADDONS.einhellKit} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ADDONS.adapters.map((adapter, i) => (
            <motion.div
              key={adapter.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <AddonCard {...adapter} />
            </motion.div>
          ))}
        </div>

        <p className="text-muted text-xs text-center mt-10">
          Akkubetrieb möglich – Akku und Markenadapter nicht im Lieferumfang enthalten.
        </p>
      </div>
    </section>
  );
}
