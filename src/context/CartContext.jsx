import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext(null);
const CART_KEY = 'bakery_cart';

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const c = localStorage.getItem(CART_KEY);
    if (c) setItems(JSON.parse(c));
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems((prev) => {
      const key = `${item.id}-${item.topping || ''}`;
      const existing = prev.find((p) => p.key === key);
      if (existing) {
        return prev.map((p) => (p.key === key ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...item, key, qty: 1 }];
    });
  };

  const updateQty = (key, delta) => {
    setItems((prev) =>
      prev
        .map((p) => (p.key === key ? { ...p, qty: p.qty + delta } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const removeItem = (key) => setItems((prev) => prev.filter((p) => p.key !== key));
  const clearCart = () => setItems([]);

  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <CartContext.Provider value={{ items, addItem, updateQty, removeItem, clearCart, count, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
