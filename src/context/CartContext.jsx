import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const pizzaInCart = prevCart.find((item) => item.id === pizza.id);
      if (pizzaInCart) {
        return prevCart.map((item) =>
          item.id === pizza.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...pizza, cantidad: 1 }];
      }
    });
  };

  const removeFromCart = (pizzaId) => {
    setCart((prevCart) => {
      const pizzaInCart = prevCart.find((item) => item.id === pizzaId);
      if (pizzaInCart && pizzaInCart.cantidad > 1) {
        return prevCart.map((item) =>
          item.id === pizzaId
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        );
      } else {
        return prevCart.filter((item) => item.id !== pizzaId);
      }
    });
  };

  const calculateTotal = () => {
    const total = cart.reduce((total, item) => total + item.price * item.cantidad, 0);
        return total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
  };
  

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};
