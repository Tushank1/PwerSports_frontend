import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import { CartProvider } from "../pages/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <CartProvider>
    <App />
  </CartProvider>
  // </React.StrictMode>
);
