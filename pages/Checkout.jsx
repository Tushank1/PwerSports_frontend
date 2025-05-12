import React, { useState, useContext } from "react";
import "../pages_css/Checkout.css";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoStorefrontOutline } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";
import CartContext from "./CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState("ship");
  const [selectedStoreLocation, setSelectedStoreLocation] = useState("lalbagh");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  const [formData, setFormData] = useState({
    country: "",
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone_no: "",
    user_id: userId,
  });

  const { cartItems, setCartItems } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const res = await axios.post(
        "http://localhost:8000/checkout_Billing",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Success:", res.data);

      const billing_address_id = res.data.id;

      await storeOrders(billing_address_id);

      // alert("Billing address submitted successfully");
      // Clear form fields
      setFormData({
        country: "",
        first_name: "",
        last_name: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        phone_no: "",
        user_id: userId,
      });

      // setCartItems([]); // clear the cart
      navigate("/order-successfully");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Submission Failed");
    }
  };

  const storeOrders = async (billing_address_id) => {
    try {
      for (const item of cartItems) {
        const payload = {
          img_link: item.image,
          qty: item.quantity,
          name: item.name,
          color: item.color,
          size: item.size,
          price: item.price,
          user_id: userId,
          billing_address_id,
        };

        await axios.post("http://localhost:8000/add_order", payload);
      }

      // alert("Order stored successfully!");
    } catch (error) {
      console.error(
        "Error storing orders:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <>
      <div className="checkout_outer_container">
        <div className="checkout_header">
          <div className="checkout_header_img">
            <img src="/web_img.png" alt="Web Img" />
          </div>
          <div
            className="checkout_header_cart"
            onClick={() => navigate("/cart")}
          >
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
                <div
                  className={`checkout_left_container_inner_container_user_details_ship_and_pickup_upper ${
                    selectedOption === "ship" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedOption("ship")}
                >
                  <div className="checkout_left_container_inner_container_user_details_ship_and_pickup_upper_left">
                    <div
                      className={`checkout_left_container_inner_container_user_details_ship_and_pickup_upper_left_left ${
                        selectedOption === "ship" ? "selected" : ""
                      }`}
                    >
                      <div
                        className={`checkout_left_container_inner_container_user_details_ship_and_pickup_upper_left_left_inner ${
                          selectedOption === "ship" ? "visible" : "hidden"
                        }`}
                      ></div>
                    </div>
                    <span>Ship</span>
                  </div>
                  <div className="checkout_left_container_inner_container_user_details_ship_and_pickup_upper_right">
                    <LiaShippingFastSolid className="checkout_left_container_inner_container_user_details_ship_and_pickup_upper_right_icon" />
                  </div>
                </div>
                <div
                  className={`checkout_left_container_inner_container_user_details_ship_and_pickup_lower ${
                    selectedOption === "pickup" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedOption("pickup")}
                >
                  <div className="checkout_left_container_inner_container_user_details_ship_and_pickup_lower_left">
                    <div
                      className={`checkout_left_container_inner_container_user_details_ship_and_pickup_lower_left_left ${
                        selectedOption === "pickup" ? "selected" : ""
                      }`}
                    >
                      <div
                        className={`checkout_left_container_inner_container_user_details_ship_and_pickup_lower_left_left_inner ${
                          selectedOption === "pickup" ? "visible" : "hidden"
                        }`}
                      ></div>
                    </div>
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
                    <input
                      type="text"
                      name="country"
                      placeholder="Country/Region"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="checkout_left_container_inner_container_billing_container_detail_form_container_name">
                    <div className="checkout_left_container_inner_container_billing_container_detail_form_container_name_first">
                      <input
                        type="text"
                        placeholder="First name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="checkout_left_container_inner_container_billing_container_detail_form_container_name_last">
                      <input
                        type="text"
                        placeholder="Last name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="checkout_left_container_inner_container_billing_container_detail_form_container_address">
                    <input
                      type="text"
                      placeholder="Address"
                      name="address"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="checkout_left_container_inner_container_billing_container_detail_form_container_critical">
                    <div className="checkout_left_container_inner_container_billing_container_detail_form_container_critical_city">
                      <input
                        type="text"
                        placeholder="City"
                        name="city"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="checkout_left_container_inner_container_billing_container_detail_form_container_critical_state">
                      <input
                        type="text"
                        placeholder="State"
                        name="state"
                        value={formData.state}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="checkout_left_container_inner_container_billing_container_detail_form_container_critical_pincode">
                      <input
                        type="number"
                        placeholder="Pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="checkout_left_container_inner_container_billing_container_detail_form_container__phone">
                    <input
                      type="number"
                      placeholder="Phone"
                      name="phone_no"
                      value={formData.phone_no}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                </form>
              </div>
            </div>
            <div
              className={`checkout_left_container_inner_container_store_location_container ${
                selectedOption === "pickup" ? "visible" : "hidden"
              }`}
            >
              <div className="checkout_left_container_inner_container_store_location_container_heading">
                <h3>Store locations</h3>
              </div>
              <div className="checkout_left_container_inner_container_store_location_container_location_main_container">
                <div
                  className={`checkout_left_container_inner_container_store_location_container_location_main_container_first ${
                    selectedStoreLocation === "lalbagh" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedStoreLocation("lalbagh")}
                >
                  <div className="checkout_left_container_inner_container_store_location_container_location_main_container_first_inner">
                    <div className="checkout_left_container_inner_container_store_location_container_location_main_container_first_inner_top">
                      <div className="checkout_left_container_inner_container_store_location_container_location_main_container_first_inner_top_left">
                        <div
                          className={`checkout_left_container_inner_container_store_location_container_location_main_container_first_inner_top_left_left ${
                            selectedStoreLocation === "lalbagh"
                              ? "selected"
                              : ""
                          }`}
                        >
                          <div
                            className={`checkout_left_container_inner_container_store_location_container_location_main_container_first_inner_top_left_left_inner ${
                              selectedStoreLocation === "lalbagh"
                                ? "visible"
                                : "hidden"
                            }`}
                          ></div>
                        </div>
                        <span>Bengaluru - Lalbagh (1,746.1 km)</span>
                      </div>
                      <div className="checkout_left_container_inner_container_store_location_container_location_main_container_first_inner_top_right">
                        <h4>FREE</h4>
                      </div>
                    </div>
                    <div className="checkout_left_container_inner_container_store_location_container_location_main_container_first_inner_bottom">
                      <div className="checkout_left_container_inner_container_store_location_container_location_main_container_first_inner_bottom_left">
                        <span>
                          No. 84, Lalbagh Road, Next to Megha Enterprises,
                          opposite MTR Hotel, Bengaluru KA
                        </span>
                      </div>
                      <div className="checkout_left_container_inner_container_store_location_container_location_main_container_first_inner_bottom_right">
                        <span>Usually ready in 24 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`checkout_left_container_inner_container_store_location_container_location_main_container_second ${
                    selectedStoreLocation === "jaynagar" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedStoreLocation("jaynagar")}
                >
                  <div className="checkout_left_container_inner_container_store_location_container_location_main_container_second_inner">
                    <div className="checkout_left_container_inner_container_store_location_container_location_main_container_second_inner_top">
                      <div className="checkout_left_container_inner_container_store_location_container_location_main_container_second_inner_top_left">
                        <div
                          className={`checkout_left_container_inner_container_store_location_container_location_main_container_second_inner_top_left_left ${
                            selectedStoreLocation === "jaynagar"
                              ? "selected"
                              : ""
                          }`}
                        >
                          <div
                            className={`checkout_left_container_inner_container_store_location_container_location_main_container_second_inner_top_left_left_inner ${
                              selectedStoreLocation === "jaynagar"
                                ? "visible"
                                : "hidden"
                            }`}
                          ></div>
                        </div>
                        <span>Bengaluru - Jayanagar (1,750.6 km)</span>
                      </div>
                      <div className="checkout_left_container_inner_container_store_location_container_location_main_container_second_inner_top_right">
                        <h4>FREE</h4>
                      </div>
                    </div>
                    <div className="checkout_left_container_inner_container_store_location_container_location_main_container_second_inner_bottom">
                      <div className="checkout_left_container_inner_container_store_location_container_location_main_container_second_inner_bottom_left">
                        <span>
                          144/159, 5th Main, East End Circle, near Jayanagar, J.
                          P. Nagar, Bengaluru KA
                        </span>
                      </div>
                      <div className="checkout_left_container_inner_container_store_location_container_location_main_container_second_inner_bottom_right">
                        <span>Usually ready in 24 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`checkout_left_container_inner_container_store_location_container_location_main_container_third ${
                    selectedStoreLocation === "lights" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedStoreLocation("lights")}
                >
                  <div className="checkout_left_container_inner_container_store_location_container_location_main_container_third_inner">
                    <div className="checkout_left_container_inner_container_store_location_container_location_main_container_third_inner_top">
                      <div className="checkout_left_container_inner_container_store_location_container_location_main_container_third_inner_top_left">
                        <div
                          className={`checkout_left_container_inner_container_store_location_container_location_main_container_third_inner_top_left_left ${
                            selectedStoreLocation === "lights" ? "selected" : ""
                          }`}
                        >
                          <div
                            className={`checkout_left_container_inner_container_store_location_container_location_main_container_third_inner_top_left_left_inner ${
                              selectedStoreLocation === "lights"
                                ? "visible"
                                : "hidden"
                            }`}
                          ></div>
                        </div>
                        <span>Thousand Lights - Chennai (1,762.4 km)</span>
                      </div>
                      <div className="checkout_left_container_inner_container_store_location_container_location_main_container_third_inner_top_right">
                        <h4>FREE</h4>
                      </div>
                    </div>
                    <div className="checkout_left_container_inner_container_store_location_container_location_main_container_third_inner_bottom">
                      <div className="checkout_left_container_inner_container_store_location_container_location_main_container_third_inner_bottom_left">
                        <span>
                          No.644, Anna Salai, Thousand Lights, Chennai TN
                        </span>
                      </div>
                      <div className="checkout_left_container_inner_container_store_location_container_location_main_container_third_inner_bottom_right">
                        <span>Usually ready in 4 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`checkout_left_container_inner_container_store_location_container_location_main_container_fourth ${
                    selectedStoreLocation === "ecr" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedStoreLocation("ecr")}
                >
                  <div className="checkout_left_container_inner_container_store_location_container_location_main_container_fourth_inner">
                    <div className="checkout_left_container_inner_container_store_location_container_location_main_container_fourth_inner_top">
                      <div className="checkout_left_container_inner_container_store_location_container_location_main_container_fourth_inner_top_left">
                        <div
                          className={`checkout_left_container_inner_container_store_location_container_location_main_container_fourth_inner_top_left_left ${
                            selectedStoreLocation === "ecr" ? "selected" : ""
                          }`}
                        >
                          <div
                            className={`checkout_left_container_inner_container_store_location_container_location_main_container_fourth_inner_top_left_left_inner ${
                              selectedStoreLocation === "ecr"
                                ? "visible"
                                : "hidden"
                            }`}
                          ></div>
                        </div>
                        <span>ECR Store (1,780.8 km)</span>
                      </div>
                      <div className="checkout_left_container_inner_container_store_location_container_location_main_container_fourth_inner_top_right">
                        <h4>FREE</h4>
                      </div>
                    </div>
                    <div className="checkout_left_container_inner_container_store_location_container_location_main_container_fourth_inner_bottom">
                      <div className="checkout_left_container_inner_container_store_location_container_location_main_container_fourth_inner_bottom_left">
                        <span>
                          3/184, Times Square, D block, first floor, Uthandi,
                          East coast road, Chennai TN
                        </span>
                      </div>
                      <div className="checkout_left_container_inner_container_store_location_container_location_main_container_fourth_inner_bottom_right">
                        <span>Usually ready in 4 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`checkout_left_container_inner_container_store_location_container_location_main_container_five ${
                    selectedStoreLocation === "omr" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedStoreLocation("omr")}
                >
                  <div className="checkout_left_container_inner_container_store_location_container_location_main_container_five_inner">
                    <div className="checkout_left_container_inner_container_store_location_container_location_main_container_five_inner_top">
                      <div className="checkout_left_container_inner_container_store_location_container_location_main_container_five_inner_top_left">
                        <div
                          className={`checkout_left_container_inner_container_store_location_container_location_main_container_five_inner_top_left_left ${
                            selectedStoreLocation === "omr" ? "selected" : ""
                          }`}
                        >
                          <div
                            className={`checkout_left_container_inner_container_store_location_container_location_main_container_five_inner_top_left_left_inner ${
                              selectedStoreLocation === "omr"
                                ? "visible"
                                : "hidden"
                            }`}
                          ></div>
                        </div>
                        <span>Chennai - OMR (1,786.2 km)</span>
                      </div>
                      <div className="checkout_left_container_inner_container_store_location_container_location_main_container_five_inner_top_right">
                        <h4>FREE</h4>
                      </div>
                    </div>
                    <div className="checkout_left_container_inner_container_store_location_container_location_main_container_five_inner_bottom">
                      <div className="checkout_left_container_inner_container_store_location_container_location_main_container_five_inner_bottom_left">
                        <span>
                          1st Floor, No. 24, Kandanchavadi, 1 & 25, Old
                          Mahabalipuram Road, near Perungudi Signal, Opp.
                          Decathlon, Chennai TN
                        </span>
                      </div>
                      <div className="checkout_left_container_inner_container_store_location_container_location_main_container_five_inner_bottom_right">
                        <span>Usually ready in 24 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout_left_container_inner_container_payment_container">
              <div className="checkout_left_container_inner_container_payment_container_heading">
                <h3>Payment</h3>
              </div>
              <div className="checkout_left_container_inner_container_payment_container_mode_container">
                <div className="checkout_left_container_inner_container_payment_container_mode_container_left">
                  <div className="checkout_left_container_inner_container_payment_container_mode_container_left_left">
                    <div className="checkout_left_container_inner_container_payment_container_mode_container_left_left_inner"></div>
                  </div>
                  <span>Cash on Delivery</span>
                </div>
                <div className="checkout_left_container_inner_container_payment_container_mode_container_right">
                  <BsCashCoin className="checkout_left_container_inner_container_payment_container_mode_container_right_icon" />
                </div>
              </div>
            </div>
            <div
              className="checkout_left_container_inner_container_button"
              onClick={handleSubmit}
            >
              <span>Pay now</span>
            </div>
          </div>
        </div>
        <div className="checkout_right_container">
          <div className="checkout_right_container_inner">
            {cartItems.map((item, index) => (
              <div
                className="checkout_right_container_inner_product"
                key={index}
              >
                <div className="checkout_right_container_inner_product_image">
                  <img src={item.image} alt={item.name} />
                  <div className="checkout_right_container_inner_product_image_count">
                    <span>{item.quantity}</span>
                  </div>
                </div>
                <div className="checkout_right_container_inner_product_details">
                  <div className="checkout_right_container_inner_product_details_name">
                    <span>{item.name}</span>
                  </div>
                  <div className="checkout_right_container_inner_product_details_size_and_color">
                    <span>
                      {item.color} / {item.size}
                    </span>
                  </div>
                </div>
                <div className="checkout_right_container_inner_product_price">
                  <span>
                    ₹
                    {(item.price * item.quantity).toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>
            ))}
            <div className="checkout_right_container_inner_down">
              <div className="checkout_right_container_inner_down_subtotal_container">
                <span>Subtotal</span>
                <span>
                  ₹
                  {subtotal.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>
              <div className="checkout_right_container_inner_down_shipping_container">
                <span>Shippping</span>
                <span>FREE</span>
              </div>
              <div className="checkout_right_container_inner_down_total_container">
                <h1>Total</h1>
                <div className="checkout_right_container_inner_down_total_container_inr">
                  <span>INR</span>
                  <h1>
                    ₹
                    {subtotal.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                    })}
                  </h1>
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
