'use client';

import Image from 'next/image';
import { useCartStore } from '@/lib/cart-store';
import { formatPrice } from '@/lib/products';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/i18n';

interface AddonCardProps {
  id: string;
  name: string;
  priceNetto: number;
  image: string;
  description: string;
}

export default function AddonCard({ id, name, priceNetto, image, description }: AddonCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const t = useTranslation();

  return (
    <div className="group rounded-2xl p-4 flex items-center gap-4 bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-400">
      <Image src={image} alt={name} width={72} height={72} className="rounded-xl object-cover w-[72px] h-[72px]" />
      <div className="flex-1 min-w-0">
        <h4 className="font-heading font-bold text-sm truncate">{name}</h4>
        <p className="text-muted text-xs mt-1 line-clamp-1">{description}</p>
        <span className="text-primary font-bold text-sm">{formatPrice(priceNetto)} <span className="text-muted font-normal text-xs">zzgl. MwSt.</span></span>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => addItem({ productId: id, name, priceNetto })}
        className="flex-shrink-0 w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.08] hover:bg-primary/10 hover:border-primary/30 flex items-center justify-center transition-all duration-300"
        aria-label={`${t.cart.addToCart} – ${name}`}
      >
        <Plus size={16} className="text-muted group-hover:text-primary transition-colors duration-300" />
      </motion.button>
    </div>
  );
}
