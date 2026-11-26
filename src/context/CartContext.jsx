import { createContext, useContext, useEffect, useState } from 'react';

const CART_KEY = 'loopstudios-cart';

function loadCart() {
  try {
    const saved = localStorage.getItem(CART_KEY);
    const items = saved ? JSON.parse(saved) : [];
    // carts saved before items had an id are dropped, they cannot be matched to a product
    return items.filter((item) => item.id);
  } catch (error) {
    return [];
  }
}

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(loadCart);

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (error) {
      // storage is blocked: the website still works, it just cannot remember
    }
  }, [cart]);

  // Keep several open tabs in sync: when another tab changes the saved cart, reload it here
  useEffect(() => {
    function handleStorage() {
      setCart(loadCart());
    }
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  function getQuantity(id) {
    const item = cart.find((entry) => entry.id === id);
    return item ? item.quantity : 0;
  }

  function changeQuantity(product, change) {
    setCart((current) => {
      const item = current.find((entry) => entry.id === product.id);

      if (!item) {
        if (change < 0) {
          return current;
        }
        return [
          ...current,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            thumbnail: product.image.thumbnail,
          },
        ];
      }

      const newQuantity = item.quantity + change;
      if (newQuantity <= 0) {
        return current.filter((entry) => entry.id !== product.id);
      }
      return current.map((entry) =>
        entry.id === product.id ? { ...entry, quantity: newQuantity } : entry
      );
    });
  }

  function removeItem(id) {
    setCart((current) => current.filter((entry) => entry.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const value = { cart, count, total, getQuantity, changeQuantity, removeItem, clearCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used inside <CartProvider>');
  }
  return context;
}
