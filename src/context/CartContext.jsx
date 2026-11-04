import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pizza) => {
    setCartItems((prevItems) => [...prevItems, pizza]);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const value = {
    cartItems,
    addToCart,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de  CartProvider");
  }
  return context;
}


