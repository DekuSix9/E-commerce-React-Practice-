/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";

const cartContext = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add to Cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove from Cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <cartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount: cart.length }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContext;
export const useCart = () => useContext(cartContext);
