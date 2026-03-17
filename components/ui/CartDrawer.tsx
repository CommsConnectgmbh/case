'use client';

import { useCartStore, getCartTotal } from '@/lib/cart-store';
import { formatPrice } from '@/lib/products';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from '@/lib/i18n';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity } = useCartStore();
  const total = getCartTotal(items);
  const [loading, setLoading] = useState(false);
  const t = useTranslation();

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((i) => ({ productId: i.productId, quantity: i.quantity })),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Fehler beim Checkout. Bitte versuchen Sie es erneut.');
        return;
      }
      if (data.url) window.location.href = data.url;
    } catch {
      alert('Fehler beim Checkout. Bitte versuchen Sie es erneut.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 z-50"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-surface z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="font-heading text-xl font-bold">{t.cart.cartTitle}</h3>
              <button onClick={closeCart} className="p-1 hover:text-muted transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-4">
              {items.length === 0 ? (
                <p className="text-muted text-center py-8">{t.cart.empty}</p>
              ) : (
                items.map((item) => (
                  <div key={item.productId} className="glass rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-sm pr-4">{item.name}</h4>
                      <button onClick={() => removeItem(item.productId)} className="text-muted hover:text-red-400">
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center hover:bg-white/10"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center hover:bg-white/10"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-bold text-sm">{formatPrice(item.priceNetto * item.quantity)}</span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-white/10">
                <div className="flex justify-between mb-4">
                  <span className="text-muted">Gesamt (zzgl. MwSt.)</span>
                  <span className="font-heading text-xl font-bold">{formatPrice(total)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className="w-full py-3 bg-cta text-white font-semibold rounded-lg hover:bg-cta/90 transition-colors disabled:opacity-50"
                >
                  {loading ? '...' : t.cart.checkout}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
