import "../pages_css/helmets.css";
import Header from "./header";
import { useState } from "react";

function Helmets() {
  const [visibility, setVisibility] = useState({
    brands: false,
    models: false,
  });
  const brands = ["AXXIS", "BRAND2", "BRAND3", "BRAND4", "BRAND5"];
  const models = ["Model1", "Model2", "Model3"];
  const size = ["Small", "Medium", "Large"];
  const colors = ["Red", "Blue", "Green"];

  const toggleVisibility = (section) => {
    setVisibility((prev) => ({
      ...prev,
      [section]: !prev[section], // Toggle the visibility of the specified section
    }));
  };
  return (
    <>
      <Header />
      <div className="product_main">
        <div className="product_main_left">
          <div className="product_main_left_inner">
            <div className="product_main_left_inner_brand">
              <div
                className="product_main_left_inner_brand_heading"
                onClick={() => toggleVisibility("brands")}
              >
                <span>Brand</span>
                <i
                  className={`fa-solid ${
                    visibility.brands ? "fa-angle-up" : "fa-angle-down"
                  }`}
                ></i>
              </div>
              {visibility.brands && // Conditionally render the checkboxes
                brands.map((brand, index) => (
                  <div
                    className="product_main_left_inner_brand_subparts"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      id={`brand${index}`}
                      name={`brand${index}`}
                      value={brand}
                    />
                    <label htmlFor={`brand${index}`}>{brand}</label>
                  </div>
                ))}
            </div>
            <div className="product_main_left_inner_model">
              <div
                className="product_main_left_inner_model_heading"
                onClick={() => toggleVisibility("models")}
              >
                <span>Model</span>
                <i
                  className={`fa-solid ${
                    visibility.models ? "fa-angle-up" : "fa-angle-down"
                  }`}
                ></i>
              </div>
              {visibility.models && // Conditionally render the checkboxes
                models.map((model, index) => (
                  <div
                    className="product_main_left_inner_model_subparts"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      id={`model${index}`}
                      name={`model${index}`}
                      value={model}
                    />
                    <label htmlFor={`model${index}`}>{model}</label>
                  </div>
                ))}
            </div>
            <div className="product_main_left_inner_size">
              <div
                className="product_main_left_inner_size_heading"
                onClick={() => toggleVisibility("size")}
              >
                <span>Size</span>
                <i
                  className={`fa-solid ${
                    visibility.size ? "fa-angle-up" : "fa-angle-down"
                  }`}
                ></i>
              </div>
              {visibility.size && // Conditionally render the checkboxes
                size.map((size, index) => (
                  <div
                    className="product_main_left_inner_size_subparts"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      id={`size${index}`}
                      name={`size${index}`}
                      value={size}
                    />
                    <label htmlFor={`size${index}`}>{size}</label>
                  </div>
                ))}
            </div>
            <div className="product_main_left_inner_color">
              <div
                className="product_main_left_inner_color_heading"
                onClick={() => toggleVisibility("colors")}
              >
                <span>Colors</span>
                <i
                  className={`fa-solid ${
                    visibility.colors ? "fa-angle-up" : "fa-angle-down"
                  }`}
                ></i>
              </div>
              {visibility.colors && // Conditionally render the checkboxes
                colors.map((color, index) => (
                  <div
                    className="product_main_left_inner_color_subparts"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      id={`color${index}`}
                      name={`color${index}`}
                      value={color}
                    />
                    <label htmlFor={`color${index}`}>{color}</label>
                  </div>
                ))}
            </div>
            {/* <div className="product_main_left_inner_model">
              <span>Model</span>
            </div> */}
          </div>
        </div>
        <div className="product_main_right">
          <span>right</span>
        </div>
      </div>
    </>
  );
}

export default Helmets;
