import React from "react";
import "../pages_css/Contact.css";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="header_main_conatiner">
        <div className="header_inner_conatiner">
          <div className="header_working_conatiner">
            <div className="header_working_conatiner_heading">
              <h1>CONTACT US</h1>
            </div>
            <div className="header_working_conatiner_content">
              <span>
                We are happy to clarify any queries you might have regarding our
                products.
              </span>
              <span>Customer Care: +91 76699 66611</span>
              <span>(Monday - Saturday : 10:00am to 5:30pm)</span>
              <span>Email Id: contact@powersports.in </span>
              <h4>Our Head Office:</h4>
              <span>PowerSports International</span>
              <span>3/184, Times Square, D block,</span>
              <span>Uthandi, East coast road,</span>
              <span>Chennai - 600119</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
