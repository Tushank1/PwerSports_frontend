import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_body from "../pages/home_body";
import Helmets from "../pages/helmets";
import ProductForm from "../pages/product_form";
import Footer from "../pages/footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Product from "../pages/product_page";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home_body />} />
          <Route path="/helmets" element={<Helmets />} />
          <Route path="/dashboard" element={<ProductForm />} />
          <Route path="/product" element={<Product />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
