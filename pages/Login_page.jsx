import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../pages_css/Login.css";
import { useNavigate } from "react-router-dom";

const Login_page = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="login_main_container">
        <div className="login_main_container_inner">
          <div className="login_working_container">
            <div className="login_working_container_heading">
              <h1>LOGIN</h1>
            </div>
            <div className="login_working_container_email">
              <div className="login_working_container_email_heading">
                <span>EMAIL</span>
              </div>
              <input type="email" placeholder="walker@gmail.com" />
            </div>
            <div className="login_working_container_password">
              <div className="login_working_container_password_heading">
                <div className="login_working_container_password_heading_left">
                  <span>PASSWORD</span>
                </div>
                <div className="login_working_container_password_heading_right">
                  <span>Forgot password?</span>
                </div>
              </div>
              <input type="password" placeholder="password" />
            </div>
            <div className="login_working_container_sign_button">
              <span>SIGN IN</span>
            </div>
            <div className="login_working_container_account">
              <span onClick={() => navigate("/account/register")}>
                Create account
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login_page;
