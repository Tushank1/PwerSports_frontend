import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifytoken = async () => {
      const token = localStorage.getItem("token");
      console.log("Token:", token);

      if (!token) {
        navigate("/account/login"); // Redirect to login if no token is found
        return;
      }

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/verify-token", // Correct endpoint
          {}, // Empty body
          {
            headers: {
              Authorization: `Bearer ${token}`, // Token passed in Authorization header
            },
          }
        );

        if (response.status === 200) {
          console.log("Token is valid:", response.data);
          navigate("/");
          // Handle successful token verification here
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        localStorage.removeItem("token"); // Remove invalid token
        navigate("/account/login"); // Redirect to login
      }
    };

    verifytoken();
  }, [navigate]);

  // return <div>Protected</div>;
};

export default Protected;
