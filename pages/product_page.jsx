import "../pages_css/product_page.css";
import Header from "./header";
import { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  //   // Fetch images from the database
  //   useEffect(() => {
  //     const fetchImages = async () => {
  //       try {
  //         const response = await axios.get("/api/images"); // Replace with your API endpoint
  //         setImages(response.data.images);
  //         if (response.data.length > 0) {
  //           setSelectedImage(response.data[0]); // Set the first image as default
  //         }
  //       } catch (error) {
  //         console.error("Error fetching images:", error);
  //       }
  //     };

  //     fetchImages();
  //   }, []);

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
      <div className="product_right_container">green</div>
    </>
  );
}

export default Product;
