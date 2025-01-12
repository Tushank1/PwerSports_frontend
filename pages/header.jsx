import { useNavigate } from "react-router-dom";
import "../pages_css/header.css";
import { IoSearch } from "react-icons/io5";
import { useState, useContext } from "react";
import CartContext from "./CartContext";

function Header() {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, incrementItem, decrementItem } = useContext(CartContext);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (isCartOpen) {
      document.body.classList.remove("cart-open");
    } else {
      document.body.classList.add("cart-open");
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
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
              <i
                className="fa-regular fa-user"
                onClick={() => navigate("/account/login")}
              ></i>
            </div>
            <div className="header_upper_right" onClick={toggleCart}>
              <i className="fa-solid fa-cart-shopping"></i>
              {cartItems.length > 0 && (
                <div className="style_cart">
                  <span>{cartItems.length}</span>
                </div>
              )}
            </div>
            {/* Cart overlay */}
            <div
              className={`cart-overlay ${isCartOpen ? "visible" : ""}`}
              onClick={toggleCart}
            ></div>

            {/* Cart */}
            <div className={`cart ${isCartOpen ? "open" : ""}`}>
              <div className="cart-header">
                <h3>CART</h3>
                <button onClick={toggleCart}>×</button>
              </div>
              <div className="cart-content">
                {cartItems.length === 0 ? (
                  <p>Your cart is currently empty.!</p>
                ) : (
                  cartItems.map((item) => (
                    <div className="cart_item_outer" key={item.id}>
                      <div className="cart_item_outer_left">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="cart_item_outer_right">
                        <div className="cart_item_outer_right_heading">
                          <h5>{item.name}</h5>
                        </div>
                        <div className="cart_item_outer_right_colors">
                          <div className="cart_item_outer_right_colors_head">
                            <h6>Color:</h6>
                          </div>
                          <div className="cart_item_outer_right_colors_content">
                            <span>{item.color.toUpperCase()}</span>
                          </div>
                        </div>
                        <div className="cart_item_outer_right_sizes">
                          <div className="cart_item_outer_right_sizes_head">
                            <h6>Size:</h6>
                          </div>
                          <div className="cart_item_outer_right_size_content">
                            <span>{item.size.toUpperCase()}</span>
                          </div>
                        </div>
                        <div className="cart_item_outer_right_down">
                          <div className="cart_item_outer_right_down_add_qty">
                            <div
                              className="cart_item_outer_right_down_add_qty_decrement"
                              onClick={() => decrementItem(item.id)}
                            >
                              <span>-</span>
                            </div>
                            <div className="cart_item_outer_right_down_add_qty_counter">
                              <span>{item.quantity}</span>
                            </div>
                            <div
                              className="cart_item_outer_right_down_add_qty_increment"
                              onClick={() => incrementItem(item.id)}
                            >
                              <span>+</span>
                            </div>
                          </div>
                          <div className="cart_item_outer_right_down_price">
                            <span>Rs. {item.price}.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              {cartItems.length > 0 && (
                <div className="cart_total">
                  <div className="cart_total_upper">
                    <div className="cart_total_upper_left">
                      <span>SUBTOTAL</span>
                    </div>
                    <div className="cart_total_upper_right">
                      <span>Rs. {calculateSubtotal()}.00</span>
                    </div>
                  </div>
                  <div className="cart_total_lower">
                    <button>CHECK OUT</button>
                  </div>
                </div>
              )}
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
              <span onClick={() => navigate("/apps/tracktor/track")}>
                Track Orders
              </span>
            </div>
            <div className="header_lower_inner_support">
              <span>Support</span>
              <i className="fa-solid fa-angle-down"></i>
              <div className="header_lower_inner_support_hover_content">
                <div className="header_lower_inner_support_hover_content_first">
                  <span onClick={() => navigate("/pages/contact-us")}>
                    Contact Us
                  </span>
                </div>
                <div className="header_lower_inner_support_hover_content_second">
                  <span onClick={() => navigate("/pages/shipping-policy")}>
                    Shipping Policy
                  </span>
                </div>
                <div className="header_lower_inner_support_hover_content_third">
                  <span>Exchange, Returns & Cancellation</span>
                </div>
                <div className="header_lower_inner_support_hover_content_fourth">
                  <span onClick={() => navigate("/pages/warranty")}>
                    Warranty Policy
                  </span>
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
