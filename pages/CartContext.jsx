import React, { createContext, useState, useEffect } from "react";

// Create the CartContext
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialize cartItems from localStorage, or an empty array if none exist
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Function to update the cart and store it in localStorage
  const updateCart = (newCartItems) => {
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  // Function to add item to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the product is already in the cart
      const existingProduct = prevItems.find((item) => item.id === product.id);
      if (existingProduct) {
        // Increment quantity if already exists
        const updatedItems = prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        updateCart(updatedItems);
        return updatedItems;
      }
      // Add new product to the cart
      const updatedItems = [...prevItems, { ...product, quantity: 1 }];
      updateCart(updatedItems);
      return updatedItems;
    });
  };

  // Increment item quantity
  const incrementItem = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === id) {
          if (item.qty > item.quantity) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            alert(`Maximum available quantity is ${item.qty}`);
            return item;
          }
        }
        return item;
      });
      updateCart(updatedItems);
      return updatedItems;
    });
  };

  // Decrement item quantity or remove from cart if quantity is 0
  const decrementItem = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((item) => {
          // If the item is the one being decremented and its quantity > 1, decrement
          if (item.id === id && item.quantity > 0) {
            return { ...item, quantity: item.quantity - 1 };
          }
          // If the item has quantity 1, remove it from the cart
          return item;
        })
        .filter((item) => item.quantity > 0); // Remove products with 0 quantity from the cart
      updateCart(updatedItems);
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, incrementItem, decrementItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
