import { create } from 'zustand';

const CART_TIMEOUT_MS = 15 * 60 * 1000; // 15 minutes

export interface CartItem {
  productId: string;
  name: string;
  priceNetto: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  lastActivity: number;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

function isExpired(lastActivity: number): boolean {
  return Date.now() - lastActivity > CART_TIMEOUT_MS;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  lastActivity: Date.now(),
  addItem: (item) =>
    set((state) => {
      const items = isExpired(state.lastActivity) ? [] : state.items;
      const existing = items.find((i) => i.productId === item.productId);
      if (existing) {
        return {
          items: items.map((i) =>
            i.productId === item.productId ? { ...i, quantity: i.quantity + 1 } : i
          ),
          isOpen: true,
          lastActivity: Date.now(),
        };
      }
      return { items: [...items, { ...item, quantity: 1 }], isOpen: true, lastActivity: Date.now() };
    }),
  removeItem: (productId) =>
    set((state) => ({
      items: isExpired(state.lastActivity) ? [] : state.items.filter((i) => i.productId !== productId),
      lastActivity: Date.now(),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => {
      if (isExpired(state.lastActivity)) return { items: [], lastActivity: Date.now() };
      return {
        items: quantity <= 0
          ? state.items.filter((i) => i.productId !== productId)
          : state.items.map((i) => (i.productId === productId ? { ...i, quantity } : i)),
        lastActivity: Date.now(),
      };
    }),
  clearCart: () => set({ items: [], lastActivity: Date.now() }),
  openCart: () =>
    set((state) => {
      if (isExpired(state.lastActivity)) return { items: [], isOpen: true, lastActivity: Date.now() };
      return { isOpen: true };
    }),
  closeCart: () => set({ isOpen: false }),
}));

export function getCartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.priceNetto * item.quantity, 0);
}
