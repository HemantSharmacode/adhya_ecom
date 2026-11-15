import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],

            addToCart: (product) => {
                const currentCart = get().cart;
                const existingItem = currentCart.find((item) => item.id === product.id);
                if (existingItem) {
                    set({
                        cart: currentCart.map((item) =>
                            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                        ),
                    });
                } else {
                    set({ cart: [...currentCart, { ...product, quantity: 1 }] });
                }
            },

            updateQuantity: (productId, delta) => {
                const currentCart = get().cart;
                set({
                    cart: currentCart.map((item) => {
                        if (item.id === productId) {
                            const newQty = item.quantity + delta;
                            return newQty > 0 ? { ...item, quantity: newQty } : null;
                        }
                        return item;
                    }).filter(Boolean),
                });
            },

            removeFromCart: (productId) => {
                set({ cart: get().cart.filter((item) => item.id !== productId) });
            },

            clearCart: () => set({ cart: [] }),
        }),
        { name: 'adhya-cart-storage' }
    )
);