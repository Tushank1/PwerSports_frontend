import { useNavigate } from "react-router-dom";
import "../pages_css/header.css";
import { IoSearch } from "react-icons/io5";

function Header() {
  const navigate = useNavigate();
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
              <span onClick={() => navigate("/")}>Home</span>
            </div>
            <div className="header_lower_inner_product">
              <span>Products</span>
              <i className="fa-solid fa-angle-down"></i>
              <div className="header_lower_inner_product_hover_content">
                <div className="header_lower_inner_product_hover_content_column">
                  <div className="header_lower_inner_product_hover_content_first_column">
                    <div className="header_lower_inner_product_hover_content_first_column_heading">
                      <h6>HELMETS</h6>
                    </div>
                    <div className="header_lower_inner_product_hover_content_first_column_first_content">
                      <span>Full-Face</span>
                    </div>
                    <div className="header_lower_inner_product_hover_content_first_column_second_content">
                      <span>Open-Face</span>
                    </div>
                    <div className="header_lower_inner_product_hover_content_first_column_third_content">
                      <span>Modular</span>
                    </div>
                    <div className="header_lower_inner_product_hover_content_first_column_fourth_content">
                      <span>Dual Sport & Motocross</span>
                    </div>
                  </div>
                  <div className="header_lower_inner_product_hover_content_second_column">
                    <div className="header_lower_inner_product_hover_content_second_column_heading">
                      <h6>JACKETS</h6>
                    </div>
                    <div className="header_lower_inner_product_hover_content_second_column_first_content">
                      <span>Urban</span>
                    </div>
                    <div className="header_lower_inner_product_hover_content_second_column_second_content">
                      <span>Sports</span>
                    </div>
                    <div className="header_lower_inner_product_hover_content_second_column_third_content">
                      <span>Adventure/Touring</span>
                    </div>
                  </div>
                  <div className="header_lower_inner_product_hover_content_third_column">
                    <div className="header_lower_inner_product_hover_content_third_column_heading">
                      <h6>GLOVES</h6>
                    </div>
                    <div className="header_lower_inner_product_hover_content_third_column_heading">
                      <h6>PANTS</h6>
                    </div>
                    <div className="header_lower_inner_product_hover_content_third_column_heading">
                      <h6>BOOTS</h6>
                    </div>
                    <div className="header_lower_inner_product_hover_content_third_column_heading">
                      <h6>SUITS</h6>
                    </div>
                    <div className="header_lower_inner_product_hover_content_third_column_heading">
                      <h6>INTERCOM</h6>
                    </div>
                    <div className="header_lower_inner_product_hover_content_third_column_heading">
                      <h6>LUGGAGE</h6>
                    </div>
                    <div className="header_lower_inner_product_hover_content_third_column_heading">
                      <h6>ACCESSORIES</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header_lower_inner_brands">
              <span>Brands</span>
              <i className="fa-solid fa-angle-down"></i>
              <div className="header_lower_inner_brands_hover_content">
                <div className="header_lower_inner_brands_hover_content_first">
                  <span>MT</span>
                </div>
                <div className="header_lower_inner_brands_hover_content_second">
                  <span>Korda</span>
                </div>
                <div className="header_lower_inner_brands_hover_content_third">
                  <span>NHK</span>
                </div>
                <div className="header_lower_inner_brands_hover_content_fourth">
                  <span>Axxis</span>
                </div>
                <div className="header_lower_inner_brands_hover_content_five">
                  <span>HJC</span>
                </div>
                <div className="header_lower_inner_brands_hover_content_six">
                  <span>Macna</span>
                </div>
                <div className="header_lower_inner_brands_hover_content_seven">
                  <span>Forma</span>
                </div>
                <div className="header_lower_inner_brands_hover_content_eight">
                  <span>Ryo</span>
                </div>
                <div className="header_lower_inner_brands_hover_content_nine">
                  <span>Midland</span>
                </div>
                <div className="header_lower_inner_brands_hover_content_ten">
                  <span>Sena</span>
                </div>
                <div className="header_lower_inner_brands_hover_content_eleven">
                  <span>Viaterra</span>
                </div>
                <div className="header_lower_inner_brands_hover_content_twelve">
                  <span>Grand Pitstop</span>
                </div>
              </div>
            </div>
            <div className="header_lower_inner_sale">
              <span>Sale</span>
            </div>
            <div className="header_lower_inner_storeLocator">
              <span>Store Locator</span>
              <i className="fa-solid fa-angle-down"></i>
              <div className="header_lower_inner_storeLocator_hover_content">
                <div className="header_lower_inner_storeLocator_hover_content_first">
                  <span>PoweSports Stores</span>
                </div>
                <div className="header_lower_inner_storeLocator_hover_content_second">
                  <span>Authorized Dealers</span>
                </div>
                <div className="header_lower_inner_storeLocator_hover_content_third">
                  <span>Become our Dealer</span>
                </div>
              </div>
            </div>
            <div className="header_lower_inner_trackorders">
              <span>Track Orders</span>
            </div>
            <div className="header_lower_inner_support">
              <span>Support</span>
              <i className="fa-solid fa-angle-down"></i>
              <div className="header_lower_inner_support_hover_content">
                <div className="header_lower_inner_support_hover_content_first">
                  <span>Contact Us</span>
                </div>
                <div className="header_lower_inner_support_hover_content_second">
                  <span>Shipping Policy</span>
                </div>
                <div className="header_lower_inner_support_hover_content_third">
                  <span>Exchange, Returns & Cancellation</span>
                </div>
                <div className="header_lower_inner_support_hover_content_fourth">
                  <span>Warranty Policy</span>
                </div>
              </div>
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
