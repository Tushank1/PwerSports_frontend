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
        </Routes>
      </Router>
    </>
  );
}

export default App;
