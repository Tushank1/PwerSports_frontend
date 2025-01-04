import "../pages_css/product_page.css";
import Header from "./Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { LuStar } from "react-icons/lu";
import { LiaTapeSolid } from "react-icons/lia";
import { FiTruck } from "react-icons/fi";
import { useLocation } from "react-router-dom";

function Product_item() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [productData, setProductData] = useState([]);

  const location = useLocation();
  const productID = location.state?.productID;

  console.log("Loaction:", location);
  console.log("ID:", productID);

  // Fetch images from the database
  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/collections/${id}`
        );
        const response_data = response.data;
        setProductData(response_data);
        console.log(response_data);
        return response_data;
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData(productID);
  }, [productID]);

  if (!productData) {
    <div>...Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="product_left_container">
        <div className="product_left_container_left_img">
          {images.map((image, index) => (
            <div
              className="product_left_container_left_img_sub"
              key={index}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="product_left_container_right_img">
          {selectedImage ? (
            <img src={selectedImage} alt="1" />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div className="product_right_container">
        <div className="product_right_container_name">
          <h2>SMK TYPHOON SOLID GLOSS BLACK HELMET</h2>
        </div>
        <div className="product_right_container_review_price">
          <div className="product_right_container_review">
            <div className="product_right_container_review_star">
              {Array.from({ length: 5 }).map((_, i) => (
                <LuStar key={i} />
              ))}
            </div>
            <div className="product_right_container_review_content">
              <span>No reviews</span>
            </div>
          </div>
          <div className="product_right_container_price">
            <span>Rs. 4,950.00</span>
          </div>
          <div className="product_right_container_review_price_content">
            <span>MRP is inclusive of all taxes.</span>
          </div>
        </div>
        <div className="product_right_container_other_stuff">
          <div className="product_right_container_other_stuff_color">
            <div className="product_right_container_other_stuff_color_heading">
              <h5>COLOR</h5>
            </div>
            <div className="product_right_container_other_stuff_color_different">
              <div className="product_right_container_other_stuff_color_box">
                <span>PURPLE</span>
              </div>
            </div>
          </div>
          <div className="product_right_container_other_stuff_size">
            <div className="product_right_container_other_stuff_size_heading">
              <h5>SIZE</h5>
            </div>
            <div className="product_right_container_other_stuff_size_different">
              <div className="product_right_container_other_stuff_size_box">
                <span>S</span>
              </div>
              <div className="product_right_container_other_stuff_size_box">
                <span>M</span>
              </div>
              <div className="product_right_container_other_stuff_size_box">
                <span>L</span>
              </div>
              <div className="product_right_container_other_stuff_size_box">
                <span>XL</span>
              </div>
            </div>
          </div>
          <div
            className="product_right_container_other_stuff_size_chart"
            onClick={openModal}
          >
            <div className="product_right_container_other_stuff_size_chart_txt">
              <span>SIZE CHART</span>
            </div>
            <div className="product_right_container_other_stuff_size_chart_icon">
              <LiaTapeSolid />
            </div>
          </div>
          {/* Modal */}
          {isOpen && (
            <div className="modal">
              <div className="modal-content">
                <button className="close-button" onClick={closeModal}>
                  ×
                </button>
                <img
                  src="./size_chart.png" // Replace with your size chart image URL
                  alt="Size Chart"
                />
              </div>
            </div>
          )}
          <div className="product_right_container_other_stuff_size_shipping">
            <div className="product_right_container_other_stuff_size_shipping_icon">
              <FiTruck />
            </div>
            <div className="product_right_container_other_stuff_size_shipping_txt">
              <span>Free Shipping Across India</span>
            </div>
          </div>
          <div className="product_right_container_other_stuff_button">
            <div className="product_right_container_other_stuff_button_cart">
              <span>ADD TO CART</span>
            </div>
            <div className="product_right_container_other_stuff_button_buy">
              <span>BUY IT NOW</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product_item;
