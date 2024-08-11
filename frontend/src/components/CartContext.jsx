import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage if it exists
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (book) => {
    setCart(prevCart => {
      const existingBook = prevCart.find(item => item._id === book._id);
      if (existingBook) {
        return prevCart.map(item =>
          item._id === book._id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        return [...prevCart, { ...book, amount: 1 }];
      }
    });
  };

  const handleChange = (item, d) => {
    setCart(prevCart => {
      return prevCart.map(cartItem => {
        if (cartItem._id === item._id) {
          const newAmount = cartItem.amount + d;
          return { ...cartItem, amount: newAmount > 0 ? newAmount : 1 };
        }
        return cartItem;
      });
    });
  };

  const removeFromCart = (bookId) => {
    setCart(prevCart => prevCart.filter(book => book._id !== bookId));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, handleChange, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
