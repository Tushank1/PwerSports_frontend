import React, { useContext } from "react";
import "../pages_css/Cart.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { GrFormSubtract } from "react-icons/gr";
import { MdAdd } from "react-icons/md";
import CartContext from "./CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, decrementItem, incrementItem } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <div className="cart_outer_container">
        <div className="cart_outer_container_top">
          <div className="cart_outer_container_top_inner">
            <div className="cart_outer_container_top_inner_top">
              <span>CART</span>
            </div>
            <div className="cart_outer_container_top_inner_bottom">
              <span onClick={() => navigate("/")}>Continue shopping</span>
            </div>
          </div>
        </div>
        <div className="cart_outer_container_bottom">
          {cartItems.length > 0 ? (
            <>
              <div className="cart_outer_container_bottom_left_outer">
                {cartItems.map((item, index) => (
                  <div className="cart_outer_container_bottom_left" key={index}>
                    <div className="cart_outer_container_bottom_left_left">
                      <div className="cart_outer_container_bottom_left_left_inner">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                    <div className="cart_outer_container_bottom_left_right">
                      <div className="cart_outer_container_bottom_left_right_top">
                        <div className="cart_outer_container_bottom_left_right_top_name">
                          <span>{item.name}</span>
                        </div>
                        <div className="cart_outer_container_bottom_left_right_top_color">
                          <span>
                            Color:{" "}
                            <span className="cart_outer_container_bottom_left_right_top_color_content">
                              {item.color}
                            </span>
                          </span>
                        </div>
                        <div className="cart_outer_container_bottom_left_right_top_size">
                          <span>
                            Size:{" "}
                            <span className="cart_outer_container_bottom_left_right_top_size_content">
                              {item.size}
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="cart_outer_container_bottom_left_right_bottom">
                        <div className="cart_outer_container_bottom_left_right_bottom_left">
                          <div
                            className="cart_outer_container_bottom_left_right_bottom_left_left"
                            onClick={() =>
                              decrementItem(item.id, item.size, item.color)
                            }
                          >
                            <GrFormSubtract />
                          </div>
                          <div className="cart_outer_container_bottom_left_right_bottom_left_mid">
                            <span>{item.quantity}</span>
                          </div>
                          <div
                            className="cart_outer_container_bottom_left_right_bottom_left_right"
                            onClick={() =>
                              incrementItem(item.id, item.size, item.color)
                            }
                          >
                            <MdAdd />
                          </div>
                        </div>
                        <div className="cart_outer_container_bottom_left_right_bottom_right">
                          <span>
                            Rs.{" "}
                            <span>
                              {item.price.toLocaleString("en-IN", {
                                minimumFractionDigits: 2,
                              })}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart_outer_container_bottom_right">
                <div className="cart_outer_container_bottom_right_inner">
                  <div className="cart_outer_container_bottom_right_inner_first">
                    <div className="cart_outer_container_bottom_right_inner_first_left">
                      <span>Subtotal</span>
                    </div>
                    <div className="cart_outer_container_bottom_right_inner_first_right">
                      <span>
                        Rs.{" "}
                        {subtotal.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                  </div>
                  <div
                    className="cart_outer_container_bottom_right_inner_second"
                    onClick={() => navigate("/checkout")}
                  >
                    <span>Pay Rs.{subtotal.toLocaleString("en-IN")}</span>
                  </div>
                  <div
                    className="cart_outer_container_bottom_right_inner_third"
                    onClick={() => navigate("/checkout")}
                  >
                    <span>CHECK OUT</span>
                  </div>
                  <div className="cart_outer_container_bottom_right_inner_fourth">
                    <span>
                      Shipping, taxes, and discount codes calculated at
                      checkout.
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div
              style={{ textAlign: "center", width: "100%", padding: "2rem" }}
            >
              <p>Your cart is empty.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
