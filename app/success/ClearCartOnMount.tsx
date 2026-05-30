'use client';

import { useEffect } from 'react';
import { useCartStore } from '@/lib/cart-store';

/**
 * Empties the cart exactly once when the success page mounts.
 * Prevents the customer from re-ordering an already-purchased cart
 * after being redirected back from Stripe Checkout.
 */
export default function ClearCartOnMount() {
  useEffect(() => {
    useCartStore.getState().clearCart();
  }, []);

  return null;
}
