import { createContext, useContext, useEffect, useState } from 'react';

// The name of the "drawer" in the browser's local storage where the cart is kept
const CART_KEY = 'loopstudios-cart';

// Read the saved cart from local storage (an empty cart if nothing is saved)
function loadCart() {
  try {
    const saved = localStorage.getItem(CART_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
}

// A context is a shared box. Any component can open it and use what is inside.
const CartContext = createContext(null);

// CartProvider holds the cart and wraps the whole website (see main.jsx)
export function CartProvider({ children }) {
  const [cart, setCart] = useState(loadCart);

  // Every time the cart changes, save it to local storage
  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (error) {
      // storage is blocked: the website still works, it just cannot remember
    }
  }, [cart]);

  // If the cart changes in another browser tab, read it again here
  useEffect(() => {
    function handleStorage() {
      setCart(loadCart());
    }
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // How many of this dessert are in the cart?
  function getQuantity(name) {
    const item = cart.find((entry) => entry.name === name);
    return item ? item.quantity : 0;
  }

  // Add one (change = 1) or take one away (change = -1)
  function changeQuantity(product, change) {
    setCart((current) => {
      const item = current.find((entry) => entry.name === product.name);

      // not in the cart yet: add it
      if (!item) {
        if (change < 0) {
          return current;
        }
        return [
          ...current,
          {
            name: product.name,
            price: product.price,
            quantity: 1,
            thumbnail: product.image.thumbnail,
          },
        ];
      }

      // already in the cart: change the quantity, or remove it at 0
      const newQuantity = item.quantity + change;
      if (newQuantity <= 0) {
        return current.filter((entry) => entry.name !== product.name);
      }
      return current.map((entry) =>
        entry.name === product.name ? { ...entry, quantity: newQuantity } : entry
      );
    });
  }

  // Remove a dessert completely, whatever its quantity
  function removeItem(name) {
    setCart((current) => current.filter((entry) => entry.name !== name));
  }

  // Empty the cart
  function clearCart() {
    setCart([]);
  }

  // The sums
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Everything other components are allowed to use
  const value = { cart, count, total, getQuantity, changeQuantity, removeItem, clearCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// A short way for any component to open the box: const { count } = useCart();
export function useCart() {
  return useContext(CartContext);
}
