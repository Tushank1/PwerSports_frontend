import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../pages_css/Create_account.css";

const Create_account = () => {
  return (
    <>
      <Header />
      <div className="account_main_container">
        <div className="account_main_container_inner">
          <div className="account_working_container">
            <div className="account_working_container_heading">
              <h1>CREATE ACCOUNT</h1>
            </div>
            <div className="account_working_container_first_name">
              <div className="account_working_container_first_name_heading">
                <span>FIRST NAME</span>
              </div>
              <input type="text" placeholder="John" />
            </div>
            <div className="account_working_container_last_name">
              <div className="account_working_container_last_name_heading">
                <span>LAST NAME</span>
              </div>
              <input type="text" placeholder="Walker" />
            </div>
            <div className="account_working_container_email">
              <div className="account_working_container_email_heading">
                <span>EMAIL</span>
              </div>
              <input type="email" placeholder="walker@gmail.com" />
            </div>
            <div className="account_working_container_password">
              <div className="account_working_container_password_heading">
                <div className="account_working_container_password_heading_left">
                  <span>PASSWORD</span>
                </div>
              </div>
              <input type="password" placeholder="password" />
            </div>
            <div className="account_working_container_account">
              <span>CREATE</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Create_account;
