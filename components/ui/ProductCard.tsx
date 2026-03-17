'use client';

import Image from 'next/image';
import { useCartStore } from '@/lib/cart-store';
import { formatPrice } from '@/lib/products';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/i18n';

interface ProductCardProps {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  priceBrutto: number;
  priceNetto: number;
  image: string;
  features: readonly string[];
  highlighted?: boolean;
}

export default function ProductCard({
  id, name, subtitle, badge, priceBrutto, priceNetto, image, features, highlighted,
}: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const t = useTranslation();

  return (
    <div className={`group relative rounded-3xl p-8 flex flex-col bg-white/[0.03] border transition-all duration-500 hover:bg-white/[0.05] ${
      highlighted ? 'border-primary/30 hover:border-primary/50' : 'border-white/[0.06] hover:border-white/[0.12]'
    }`}>
      {highlighted && (
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
      )}

      <span className={`absolute top-6 right-6 px-3 py-1 text-[11px] font-medium rounded-full ${
        highlighted ? 'bg-cta/20 text-cta' : 'bg-white/[0.08] text-muted'
      }`}>
        {badge}
      </span>

      <div className="flex justify-center mb-8 mt-4">
        <Image src={image} alt={name} width={260} height={170} className="rounded-2xl" />
      </div>

      <h3 className="font-heading text-2xl font-bold mb-1">{name}</h3>
      <p className="text-muted text-sm mb-6">{subtitle}</p>

      <div className="mb-8">
        <span className="font-heading text-4xl font-bold tracking-tight">{formatPrice(priceBrutto)}</span>
        <span className="text-muted text-sm ml-2">inkl. MwSt.</span>
        <div className="text-muted text-xs mt-1">Netto: {formatPrice(priceNetto)}</div>
      </div>

      <ul className="space-y-2.5 mb-8 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[14px]">
            <Check size={15} className="text-primary flex-shrink-0 mt-0.5" />
            <span className="text-muted/90">{f}</span>
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => addItem({ productId: id, name, priceBrutto })}
        className="w-full py-3.5 font-medium rounded-full text-[15px] transition-all duration-300 bg-cta text-white hover:bg-cta/90"
      >
        {t.cart.addToCart}
      </motion.button>
    </div>
  );
}
