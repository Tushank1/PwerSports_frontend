import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_body from "../pages/Home_body";
import Products from "../pages/Products";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Product_item from "../pages/Product_page";
import Form from "../pages/Form";
import Login_page from "../pages/Login_page";
import Create_account from "../pages/Create_account";
import Track from "../pages/Track";
import Contact from "../pages/contact";
import Shipping from "../pages/Shipping";
import Warranty from "../pages/Warranty";
import Protected from "../pages/Protected";
import Warranty_activation from "../pages/Warranty_activation";
import Exchange from "../pages/Exchange";
import F from "../pages/F";
import Checkout from "../pages/Checkout";
import Cart from "../pages/Cart";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home_body />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/collections/:category" element={<Products />} />
          {/* <Route path="/product_item" element={<Product_item />} /> */}
          <Route
            path="/collections/:category/products/:productIDName"
            element={<Product_item />}
          />
          <Route path="/form" element={<Form />} />
          <Route path="/account/login" element={<Login_page />} />
          <Route path="/account/register" element={<Create_account />} />
          <Route path="/apps/tracktor/track" element={<Track />} />
          <Route path="/pages/contact-us" element={<Contact />} />
          <Route path="/pages/shipping-policy" element={<Shipping />} />
          <Route path="/pages/warranty" element={<Warranty />} />
          <Route path="/protected" element={<Protected />} />
          <Route
            path="/pages/warranty-activation"
            element={<Warranty_activation />}
          />
          <Route
            path="/pages/exchange-returns-refund-cancellation-policy"
            element={<Exchange />}
          />
          <Route path="/f" element={<F />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
