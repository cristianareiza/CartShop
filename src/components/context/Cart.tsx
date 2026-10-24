import { createContext, useState, type ReactNode } from 'react';
import type { CartItem, Product } from '../../types';

export interface CartContextValue {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
  removeFromCart: (product: Product) => void;
}

export const cartContext = createContext<CartContextValue | undefined>(
  undefined
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find((item) => item.id === product.id);
      if (productInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const clearCart = () => setCart([]);
  const removeFromCart = (product: Product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  return (
    <cartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </cartContext.Provider>
  );
}
