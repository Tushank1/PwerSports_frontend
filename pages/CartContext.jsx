import React, { createContext, useState } from "react";

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
      // Check if the product with the same id, size, and color is already in the cart
      const existingProduct = prevItems.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.color === product.color
      );

      if (existingProduct) {
        // Increment quantity if the exact product already exists
        const updatedItems = prevItems.map((item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.color === product.color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        updateCart(updatedItems);
        return updatedItems;
      }

      // Add new product with different configuration to the cart
      const updatedItems = [...prevItems, { ...product, quantity: 1 }];
      updateCart(updatedItems);
      return updatedItems;
    });
  };

  // Increment item quantity
  const incrementItem = (id, size, color) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === id && item.size === size && item.color === color) {
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
  const decrementItem = (id, size, color) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((item) => {
          if (item.id === id && item.size === size && item.color === color) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            }
            // If quantity is 1, the item will be removed in the filter step
            return null;
          }
          return item;
        })
        .filter((item) => item !== null); // Remove products with quantity 0
      updateCart(updatedItems);
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        incrementItem,
        decrementItem,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
