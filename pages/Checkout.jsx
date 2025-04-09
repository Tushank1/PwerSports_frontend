import React from "react";
import Footer from "./Footer";
import "../pages_css/Checkout.css";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoStorefrontOutline } from "react-icons/io5";

const Checkout = () => {
  return (
    <>
      <div className="checkout_outer_container">
        <div className="checkout_header">
          <div className="checkout_header_img">
            <img src="/web_img.png" alt="Web Img" />
          </div>
          <div className="checkout_header_cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
        <div className="checkout_left_container">
          <div className="checkout_left_container_inner_container">
            <div className="checkout_left_container_inner_container_user_details">
              <div className="checkout_left_container_inner_container_user_details_delivery_heading">
                <h1>Delivery</h1>
              </div>
              <div className="checkout_left_container_inner_container_user_details_ship_and_pickup">
                <div className="checkout_left_container_inner_container_user_details_ship_and_pickup_upper">
                  <div className="checkout_left_container_inner_container_user_details_ship_and_pickup_upper_left">
                    <div className="checkout_left_container_inner_container_user_details_ship_and_pickup_upper_left_left"></div>
                    <span>Ship</span>
                  </div>
                  <div className="checkout_left_container_inner_container_user_details_ship_and_pickup_upper_right">
                    <LiaShippingFastSolid className="checkout_left_container_inner_container_user_details_ship_and_pickup_upper_right_icon" />
                  </div>
                </div>
                <div className="checkout_left_container_inner_container_user_details_ship_and_pickup_lower">
                  <div className="checkout_left_container_inner_container_user_details_ship_and_pickup_lower_left">
                    <div className="checkout_left_container_inner_container_user_details_ship_and_pickup_lower_left_left"></div>
                    <span>Pickup in store</span>
                  </div>
                  <div className="checkout_left_container_inner_container_user_details_ship_and_pickup_lower_right">
                    <IoStorefrontOutline className="checkout_left_container_inner_container_user_details_ship_and_pickup_lower_right_icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout_left_container_inner_container_billing_container">
              <div className="checkout_left_container_inner_container_billing_container_heading">
                <h3>Billing address</h3>
              </div>
              <div className="checkout_left_container_inner_container_billing_container_detail_form_container">
                <form action="">
                  <div className="checkout_left_container_inner_container_billing_container_detail_form_container_country">
                    <input type="text" placeholder="Country/Region" />
                  </div>
                  <div className="checkout_left_container_inner_container_billing_container_detail_form_container_name">
                    <div className="checkout_left_container_inner_container_billing_container_detail_form_container_name_first">
                      <input type="text" placeholder="First name" />
                    </div>
                    <div className="checkout_left_container_inner_container_billing_container_detail_form_container_name_last">
                      <input type="text" placeholder="Last name" />
                    </div>
                  </div>
                  <div className="checkout_left_container_inner_container_billing_container_detail_form_container_address">
                    <input type="text" placeholder="Address" />
                  </div>
                  <div className="checkout_left_container_inner_container_billing_container_detail_form_container_critical">
                    <div className="checkout_left_container_inner_container_billing_container_detail_form_container_critical_city">
                      <input type="text" placeholder="City" />
                    </div>
                    <div className="checkout_left_container_inner_container_billing_container_detail_form_container_critical_state">
                      <input type="text" placeholder="State" />
                    </div>
                    <div className="checkout_left_container_inner_container_billing_container_detail_form_container_critical_pincode">
                      <input type="number" placeholder="Pincode" />
                    </div>
                  </div>
                  <div className="checkout_left_container_inner_container_billing_container_detail_form_container__phone">
                    <input type="number" placeholder="Phone" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout_right_container">
          <div className="checkout_right_container_inner">
            <div className="checkout_right_container_inner_product">
              <div className="checkout_right_container_inner_product_image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0578/7287/5696/files/MTTargoTorviGlossflourYellowHelmet02_0b6b9211-85fc-4c6d-8c3b-5577a6bdfc5d_64x64.jpg?v=1730798035"
                  alt=""
                />
                <div className="checkout_right_container_inner_product_image_count">
                  <span>1</span>
                </div>
              </div>
              <div className="checkout_right_container_inner_product_details">
                <div className="checkout_right_container_inner_product_details_name">
                  <span>MT Targo Torvi Helmet</span>
                </div>
                <div className="checkout_right_container_inner_product_details_size_and_color">
                  <span>color / S</span>
                </div>
              </div>
              <div className="checkout_right_container_inner_product_price">
                <span>₹3,999.00</span>
              </div>
            </div>
            <div className="checkout_right_container_inner_down">
              <div className="checkout_right_container_inner_down_subtotal_container">
                <span>Subtotal</span>
                <span>₹3,999.00</span>
              </div>
              <div className="checkout_right_container_inner_down_shipping_container">
                <span>Shippping</span>
                <span>FREE</span>
              </div>
              <div className="checkout_right_container_inner_down_total_container">
                <h1>Total</h1>
                <div className="checkout_right_container_inner_down_total_container_inr">
                  <span>INR</span>
                  <h1>₹3,999.00</h1>
                </div>
              </div>
              <div className="checkout_right_container_inner_down_taxes_container">
                <span>Including ₹0.00 in taxes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
