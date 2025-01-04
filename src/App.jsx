import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_body from "../pages/Home_body";
import Products from "../pages/Products";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Product_item from "../pages/Product_page";
import Form from "../pages/Form";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home_body />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/collections/:category" element={<Products />} />
          <Route path="/product_item" element={<Product_item />} />
          <Route
            path="/collections/:category/products/:productIDName"
            element={<Product_item />}
          />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
