import React, { useEffect } from "react";
import "../pages_css/order_successfully.css";
import { useNavigate } from "react-router-dom";

const Order_successfully = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="order_successfully_outer_container">
      <div className="order_successfully_outer_container_inner">
        <img
          src="https://www.sendx.io/hubfs/Email-Messages-for-Order-Confirmation-Page-v3.png"
          alt="Order Successful"
        />
      </div>
    </div>
  );
};

export default Order_successfully;
