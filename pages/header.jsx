import "../pages_css/header.css";
import { IoSearch } from "react-icons/io5";

function Header() {
  return (
    <div className="header">
      <div className="header_main">
        <div className="header_upper">
          <div className="header_upper_start">
            <input type="text" placeholder="Search..." />
            <a href="#">
              <IoSearch className="fas fa-search"></IoSearch>
            </a>
          </div>
          <div className="header_upper_center">
            <img src="/web_img.png" alt="Web Img" />
          </div>
          <div className="header_upper_end">
            <div className="header_uppper_left">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="header_upper_right">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
        <div className="header_lower">
          <div className="header_lower_inner">
            <div className="header_lower_inner_home">
              <span>Home</span>
            </div>
            <div className="header_lower_inner_product">
              <span>Products</span>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="header_lower_inner_brands">
              <span>Brands</span>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="header_lower_inner_sale">
              <span>Sale</span>
            </div>
            <div className="header_lower_inner_storeLocator">
              <span>Store Locator</span>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="header_lower_inner_trackorders">
              <span>Track Orders</span>
            </div>
            <div className="header_lower_inner_support">
              <span>Support</span>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="header_lower_inner_warranty">
              <span>Warranty Activation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
