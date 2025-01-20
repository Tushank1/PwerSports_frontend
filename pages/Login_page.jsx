import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../pages_css/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login_page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already authenticated (token present)
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true); // If token exists, user is authenticated
    }
  }, []);

  const validateForm = () => {
    if (!email || !password) {
      // setError("Email and Password are required");
      alert("Email and Password are required");
      return false;
    }
    // setError("");
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      const formDetail = { email, password };

      const response = await axios.post(
        "http://127.0.0.1:8000/token",
        formDetail,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setLoading(false);

      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem("token", data.access_token);
        navigate("/protected");
      } else {
        // setError(response.data.detail || "Authentication Failed");
        alert(response.data.detail || "Authentication Failed");
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        // setError(error.response.data.detail || "Authentication Failed");
        alert(error.response.data.detail || "Authentication Failed");
      } else if (error.request) {
        // setError("No response from server. Please try again later.");
        alert("No response from server. Please try again later.");
      } else {
        // setError("An error occurred. Please try again.");
        alert("An error occurred. Please try again.");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token on logout
    setIsAuthenticated(false); // Update state to show login page
    navigate("/account/login"); // Redirect to login page
  };

  return (
    <>
      <Header />
      <div className="login_main_container">
        <div className="login_main_container_inner">
          <div className="login_working_container">
            <div className="login_working_container_heading">
              <h1>{isAuthenticated ? "Welcome Back!" : "LOGIN"}</h1>
            </div>
            {isAuthenticated ? (
              <div className="logout_container">
                <button onClick={handleLogout}>LOGOUT</button>
              </div>
            ) : (
              <>
                <div className="login_working_container_email">
                  <div className="login_working_container_email_heading">
                    <span>EMAIL</span>
                  </div>
                  <input
                    type="email"
                    placeholder="walker@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
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
                  <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  className="login_working_container_sign_button"
                  disabled={loading}
                  type="submit"
                  onClick={handleSubmit}
                >
                  {loading ? "Loading..." : "SIGN IN"}
                </button>
                <div className="login_working_container_account">
                  <span onClick={() => navigate("/account/register")}>
                    Create account
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login_page;
