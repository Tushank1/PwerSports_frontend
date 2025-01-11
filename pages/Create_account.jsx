import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../pages_css/Create_account.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create_account = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  const handleCreate = async (event) => {
    event.preventDefault();

    if (!firstName) {
      alert("First Name is compulsory");
      return;
    } else if (!lastName) {
      alert("Last Name is compulsory");
      return;
    } else if (!email) {
      alert("Email is compulsory");
      return;
    } else if (!password) {
      alert("Password is compulsory");
      return;
    }

    if (password.length < 6) {
      alert("Password Must be equal or greater than length 6");
      return;
    }

    try {
      const formDetail = {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/register",
        formDetail,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        alert("Registration successful! Redirecting to login...");
        navigate("/account/login");
      } else {
        console.log(error.response.data.detail);
        alert(`Error: ${error.response.data.detail || "Something went wrong"}`);
      }
    } catch (error) {
      if (error.response) {
        // Check if the backend response contains validation errors
        if (error.response.data && error.response.data.detail) {
          // Extract the first error message from the 'detail' array
          const errorMessage = error.response.data.detail[0].msg;
          alert(
            errorMessage ||
              error.response.data.detail ||
              "An unknown error occurred."
          );
        } else {
          // Handle other error cases
          alert("An error occurred. Please try again.");
        }
      } else {
        // Handle case where there's no response from the server
        alert(
          "No response received from server. Please check your connection."
        );
      }
    }
  };

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
              <input
                type="text"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="account_working_container_last_name">
              <div className="account_working_container_last_name_heading">
                <span>LAST NAME</span>
              </div>
              <input
                type="text"
                placeholder="Walker"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="account_working_container_email">
              <div className="account_working_container_email_heading">
                <span>EMAIL</span>
              </div>
              <input
                type="email"
                placeholder="walker@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="account_working_container_password">
              <div className="account_working_container_password_heading">
                <div className="account_working_container_password_heading_left">
                  <span>PASSWORD</span>
                </div>
              </div>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
              />
            </div>
            <div
              className="account_working_container_account"
              onClick={handleCreate}
            >
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
