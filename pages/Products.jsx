import axios from "axios";
import "../pages_css/Products.css";
import Header from "./Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Products() {
  const [visibility, setVisibility] = useState({
    brands: false,
    models: false,
    size: false,
    colors: false,
  });
  const brands = ["AXXIS", "BRAND2", "BRAND3", "BRAND4", "BRAND5"];
  const models = ["Model1", "Model2", "Model3"];
  const size = ["Small", "Medium", "Large"];
  const colors = ["Red", "Blue", "Green"];

  const { category } = useParams();
  // console.log(category);

  useEffect(() => {
    const forCategory_ID = async (category_param) => {
      try {
        const result = await axios.post(
          `http://127.0.0.1:8000/dashboard/category/${category_param}`
        );
        const id = result.data.id;
        return id;
        // console.log(id, "Success");
      } catch (error) {
        console.error("Error fetching categorie ID:", error.message || error);
        alert("An error occurred while fetching categories.");
      }
    };

    const fetchData = async () => {
      if (category) {
        const id = await forCategory_ID(category);
        if (id) {
          const responseData = await data(id);
          if (responseData) {
            console.log(responseData);
            return responseData;
          }
        }
      }
    };

    fetchData();
  }, [category]);

  const data = async (id) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/collections/${id}`
      );
      const response_data = response.data;
      console.log(response_data.category.description);
      return response_data;
    } catch (erro) {
      console.error("Error fetching data:", error.message || error);
      alert("An error occurred while fetching data.");
    }
  };

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
          <div className="product_main_right_heading_outer">
            <div className="product_main_right_heading_inner">
              <h1>{responseData.category.name}</h1>
            </div>
          </div>
          <div className="product_main_right_description">
            <span>{responseData.category.description}</span>
          </div>
          {category === "helmets" && (
            <div className="product_main_right_helmets_sub">
              <div className="product_main_right_helmets_sub_first_container">
                <div className="product_main_right_helmets_sub_first_container_img">
                  <img
                    src="https://powersports.in/cdn/shop/collections/axxis-mobile.jpg?v=1677575261&width=540"
                    alt=""
                  />
                </div>
                <div className="product_main_right_helmets_sub_first_container_content">
                  <span>FULL-FACE</span>
                </div>
              </div>
              <div className="product_main_right_helmets_sub_first_container">
                <div className="product_main_right_helmets_sub_first_container_img">
                  <img
                    src="https://powersports.in/cdn/shop/collections/Mt-viale-helmet.jpg?v=1679484258&width=540"
                    alt=""
                  />
                </div>
                <div className="product_main_right_helmets_sub_first_container_content">
                  <span>OPEN-FACE</span>
                </div>
              </div>
              <div className="product_main_right_helmets_sub_first_container">
                <div className="product_main_right_helmets_sub_first_container_img">
                  <img
                    src="https://powersports.in/cdn/shop/collections/korda_discovery_mobile.jpg?v=1677575889&width=540"
                    alt=""
                  />
                </div>
                <div className="product_main_right_helmets_sub_first_container_content">
                  <span>MODULAR</span>
                </div>
              </div>
              <div className="product_main_right_helmets_sub_first_container">
                <div className="product_main_right_helmets_sub_first_container_img">
                  <img
                    src="https://powersports.in/cdn/shop/collections/DS..2.jpg?v=1682503533&width=540"
                    alt=""
                  />
                </div>
                <div className="product_main_right_helmets_sub_first_container_content">
                  <span>DUAL SPORT & MOTORCROSS</span>
                </div>
              </div>
            </div>
          )}
          <div className="product_main_right_product">
            {Array.from({ length: 5 }).map((_, i) => (
              <div className="product_main_right_product_cart" key={i}>
                <div className="product_main_right_product_cart_img">
                  <img
                    src="https://powersports.in/cdn/shop/collections/axxis-mobile.jpg?v=1677575261&width=540"
                    alt=""
                  />
                  <div className="product_main_right_product_cart_img_button">
                    <span>Quick view</span>
                  </div>
                </div>
                <div className="product_main_right_product_cart_content">
                  <div className="product_main_right_product_cart_content_name">
                    <span>SMK Typhoon Solid Gloss Black Helmet</span>
                  </div>
                  <div className="product_main_right_product_cart_content_price">
                    <span>Rs. 4,950.00</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
