import React from "react";
import "../pages_css/Shipping.css";
import Header from "./Header";
import Footer from "./Footer";

const Shipping = () => {
  return (
    <>
      <Header />
      <div className="shipping_main_container">
        <div className="shiiping_inner_container">
          <div className="shipping_working_conatiner">
            <div className="shipping_working_conatiner_heading">
              <h1>SHIPPING POLICY</h1>
            </div>
            <div className="shipping_working_conatiner_context">
              <span>
                PSI offers free domestic shipping on all orders. International
                shipping will be levied at actuals. Domestic buyers please note
                that your order will be shipped within 3 working days of orders
                placed through registered domestic courier companies or speed
                post only. PSI cannot be held responsible for any delivery
                delays caused by the courier company. PSI only guarantees to
                handover the order to the courier company or postal office
                within 3 working days from the date of the order.{" "}
              </span>
              <span>
                PSI isn't liable if any damage is caused to the product during
                transit. Customers are advised not to accept the order if the
                package is damaged or has been tampered with.{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shipping;
