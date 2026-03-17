'use client';

import { ShoppingCart } from 'lucide-react';
import { useCartStore, getCartTotal } from '@/lib/cart-store';
import { formatPrice } from '@/lib/products';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/lib/i18n';

export default function FloatingCart() {
  const t = useTranslation();
  void t; // imported for i18n readiness
  const { items, openCart } = useCartStore();
  const total = getCartTotal(items);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <AnimatePresence>
      {itemCount > 0 && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          onClick={openCart}
          className="fixed bottom-6 right-6 z-40 bg-cta text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 hover:bg-cta/90 transition-colors"
        >
          <ShoppingCart size={20} />
          <span className="font-bold">{itemCount}</span>
          <span className="text-sm">{formatPrice(total)}</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
