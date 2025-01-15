import axios from "axios";
import "../pages_css/Products.css";
import Header from "./Header";
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Product_popup from "./Product_popup";

function Products() {
  const [visibility, setVisibility] = useState({
    brands: false,
    models: false,
    size: false,
    price: false,
  });

  const [categoryData, setCategoryData] = useState(null);
  const { category } = useParams();
  const location = useLocation();
  const categoryID = location.state?.categoryID;
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [price, setPrice] = useState(50000);
  const [selectedPrice, setSelectedPrice] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 50;
  const [selectedProductID, setSelectedProductID] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  // console.log("Category:", category);
  // console.log("Category ID:", categoryID);

  let navigate = useNavigate();

  const routeChange = async (productIDName, ID) => {
    let path = `/collections/${category}/products/${productIDName}`;

    navigate(path, { state: { productID: ID, category: category } });
  };

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/collection/${id}`
        );
        const response_data = response.data;
        // console.log(response_data.category.description);
        setCategoryData(response_data);
        // console.log("First:", categoryData);
        return response_data;
      } catch (error) {
        console.error("Error fetching data:", error.message || error);
        alert("An error occurred while fetching data.");
      }
    };
    fetchData(categoryID);
  }, [categoryID]);

  // console.log("Second:", categoryData);

  // Log updated categoryData
  useEffect(() => {
    if (categoryData) {
      console.log("Updated categoryData:", categoryData);
    }
  }, [categoryData]);

  // Render based on the data
  if (!categoryData) {
    return (
      <>
        {/* Loading spinner */}
        <div className="loader"></div>
      </>
    );
  }

  const toggleVisibility = (section) => {
    setVisibility((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Handle brand selection
  const handleBrandSelection = (brandId) => {
    setSelectedBrands(
      (prev) =>
        prev.includes(brandId) // checks if a specific value exists in the array.
          ? prev.filter((id) => id !== brandId) // Remove if already selected
          : [...prev, brandId] // Add if not selected
    );
  };

  // Handle model selection
  const handleModelSelection = (modelId) => {
    setSelectedModels(
      (prev) =>
        prev.includes(modelId)
          ? prev.filter((id) => id !== modelId) // Remove if already selected
          : [...prev, modelId] // Add if not selected
    );
  };

  // Handle size selection
  const handleSizeSelection = (sizeSizes) => {
    setSelectedSizes((prev) =>
      prev.includes(sizeSizes)
        ? prev.filter((id) => id !== sizeSizes)
        : [...prev, sizeSizes]
    );
  };

  // Filter products based on selected brands or models and sizes
  const filteredProducts = categoryData.products.filter(
    (product) =>
      // product.price <= price &&
      (selectedBrands.length === 0 ||
        selectedBrands.includes(product.brand_id)) &&
      (selectedModels.length === 0 ||
        selectedModels.includes(product.model_id)) &&
      (selectedSizes.length === 0 ||
        categoryData.sizes
          .filter((size) => selectedSizes.includes(size.sizes))
          .some((size) => size.products_id === product.id)) &&
      (selectedPrice ? product.price <= price : true)
  );

  // Filter brands based on selected models and sizes
  const filterBrands =
    selectedModels.length > 0
      ? categoryData.models
          .filter((model) => selectedModels.includes(model.id))
          .map((model) => model.brand_id)
      : (selectedSizes.length > 0 || selectedPrice) &&
        filteredProducts.length > 0
      ? categoryData.brands
          .filter((brand) =>
            filteredProducts.some((product) => product.brand_id === brand.id)
          )
          .map((brand) => brand.id)
      : categoryData.brands.map((brand) => brand.id);

  // Filter models based on selected brands and size
  const filteredModels =
    selectedBrands.length > 0
      ? categoryData.models.filter((model) =>
          selectedBrands.includes(model.brand_id)
        )
      : (selectedSizes.length > 0 || selectedPrice) &&
        filteredProducts.length > 0
      ? categoryData.models.filter((model) =>
          filteredProducts.some((product) => product.model_id === model.id)
        )
      : categoryData.models;

  // Filter sizes based on selected models or brands
  const filterSizes =
    filteredProducts.length > 0
      ? categoryData.sizes.filter((size) =>
          filteredProducts.some((product) => product.id === size.products_id)
        )
      : categoryData.sizes;

  const handleSliderChange = (event) => {
    setPrice(Number(event.target.value));
    setSelectedPrice(true); // Update state with the slider value
  };

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get current products for the page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const openQuickView = (productID) => {
    setSelectedProductID(productID);
    setIsQuickViewOpen(true);
    document.body.classList.add("popup-open");
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
    setSelectedProductID(null);
    document.body.classList.remove("popup-open");
  };

  return (
    <>
      <Header />
      <div className="product_main">
        <div className="product_main_left">
          <div className="product_main_left_inner">
            {categoryData.brands && (
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
                {visibility.brands && // Ensure brands are visible before rendering
                  categoryData.brands
                    .filter((brand) => filterBrands.includes(brand.id))
                    .map((brand) => (
                      <div
                        className="product_main_left_inner_brand_subparts"
                        key={brand.id}
                      >
                        <input
                          type="checkbox"
                          id={`brand${brand.id}`}
                          name={`brand${brand.id}`}
                          value={brand.id}
                          checked={selectedBrands.includes(brand.id)} // Check if selected
                          onChange={() => handleBrandSelection(brand.id)}
                        />
                        <label htmlFor={`brand${brand.id}`}>
                          {brand.brand_name.toUpperCase()}
                        </label>
                      </div>
                    ))}
              </div>
            )}
            {categoryData.models && (
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
                  filteredModels.map((model) => (
                    <div
                      className="product_main_left_inner_model_subparts"
                      key={model.id}
                    >
                      <input
                        type="checkbox"
                        id={`model${model.id}`}
                        name={`model${model.id}`}
                        value={model.id}
                        checked={selectedModels.includes(model.id)} // Check if selected
                        onChange={() => handleModelSelection(model.id)}
                      />
                      <label htmlFor={`model${model.id}`}>
                        {model.model_name.toUpperCase()}
                      </label>
                    </div>
                  ))}
              </div>
            )}
            {categoryData.sizes && (
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
                  [
                    ...new Map(
                      filterSizes.map((size) => [size.sizes, size])
                    ).values(),
                  ].map((size) => (
                    <div
                      className="product_main_left_inner_size_subparts"
                      key={size.id}
                    >
                      <input
                        type="checkbox"
                        id={`size${size.id}`}
                        name={`size${size.id}`}
                        value={size.id}
                        onChange={() => handleSizeSelection(size.sizes)}
                      />
                      <label htmlFor={`size${size.id}`}>
                        {size.sizes.toUpperCase()}
                      </label>
                    </div>
                  ))}
              </div>
            )}
            <div className="product_main_left_inner_price">
              <div
                className="product_main_left_inner_price_heading"
                onClick={() => toggleVisibility("price")}
              >
                <span>Price</span>
                <i
                  className={`fa-solid ${
                    visibility.price ? "fa-angle-up" : "fa-angle-down"
                  }`}
                ></i>
              </div>
              {visibility.price && (
                <>
                  <div className="product_main_left_inner_price_slidercontainer">
                    <input
                      type="range"
                      min="1"
                      max="50000"
                      value={price}
                      className="slider"
                      id="myRange"
                      onChange={handleSliderChange}
                    />
                  </div>
                  <div className="slider-value">Selected Price: ₹ {price}</div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="product_main_right">
          <div className="product_main_right_heading_outer">
            <div className="product_main_right_heading_inner">
              <h1>{categoryData.category.name.toUpperCase()}</h1>
            </div>
          </div>
          <div className="product_main_right_description">
            <span>{categoryData.category.description}</span>
          </div>
          {category === "HELMETS" && (
            <div className="product_main_right_helmets_sub">
              <div className="product_main_right_helmets_sub_first_container">
                <div className="product_main_right_helmets_sub_first_container_img">
                  <img
                    src="https://powersports.in/cdn/shop/collections/axxis-mobile.jpg"
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
                    src="https://powersports.in/cdn/shop/collections/Mt-viale-helmet.jpg"
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
                    src="https://powersports.in/cdn/shop/collections/korda_discovery_mobile.jpg"
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
          {category === "riding-jackets" && (
            <div className="product_main_right_jackets_sub">
              <div className="product_main_right_jackets_sub_first_container">
                <div className="product_main_right_jackets_sub_first_container_img">
                  <img
                    src="https://powersports.in/cdn/shop/collections/Korda_cosmo_riding_jacket-black_12.jpg"
                    alt=""
                  />
                </div>
                <div className="product_main_right_jackets_sub_first_container_content">
                  <span>URBAN</span>
                </div>
              </div>
              <div className="product_main_right_jackets_sub_first_container">
                <div className="product_main_right_jackets_sub_first_container_img">
                  <img
                    src="https://powersports.in/cdn/shop/collections/KORDA_EDGE_RIDING_JACKET_9.jpg"
                    alt=""
                  />
                </div>
                <div className="product_main_right_jackets_sub_first_container_content">
                  <span>SPORTS</span>
                </div>
              </div>
              <div className="product_main_right_jackets_sub_first_container">
                <div className="product_main_right_jackets_sub_first_container_img">
                  <img
                    src="https://powersports.in/cdn/shop/collections/KORDA_SUMMIT_RIDING_JACKET_GREY_7_2.jpg"
                    alt=""
                  />
                </div>
                <div className="product_main_right_jackets_sub_first_container_content">
                  <span>ADVENTURE/TOURING</span>
                </div>
              </div>
            </div>
          )}
          <>
            <div className="product_main_right_product">
              {currentProducts.map((product) => {
                // Filter images for each product by product_id
                const product_image = categoryData.img.filter(
                  (image) => image.product_id === product.id
                );

                // Get the first image from the filtered list
                const firstImage =
                  product_image.length > 0 ? product_image[0].image_url : null;

                const secondImage =
                  product_image.length > 1
                    ? product_image[1].image_url
                    : firstImage;
                return (
                  <div
                    className="product_main_right_product_cart"
                    key={product.id}
                  >
                    <div className="product_main_right_product_cart_img">
                      <img
                        src={firstImage}
                        alt={`Image of ${product.name}`}
                        onMouseEnter={(e) =>
                          (e.currentTarget.src = secondImage)
                        }
                        onMouseLeave={(e) => (e.currentTarget.src = firstImage)}
                        onClick={() =>
                          routeChange(
                            product.name.replace(/ /g, "-").toLowerCase(),
                            product.id
                          )
                        }
                      />
                      <div
                        className="product_main_right_product_cart_img_button"
                        onClick={() => openQuickView(product.id)}
                      >
                        <span>Quick view</span>
                      </div>
                    </div>
                    <div
                      className="product_main_right_product_cart_content"
                      onClick={() =>
                        routeChange(
                          product.name.replace(/ /g, "-").toLowerCase(),
                          product.id
                        )
                      }
                    >
                      <div className="product_main_right_product_cart_content_name">
                        <span>{product.name}</span>
                      </div>
                      <div className="product_main_right_product_cart_content_price">
                        <span>Rs. {product.price}.00</span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Quick View Popup */}
              {isQuickViewOpen && (
                <div className="quick-view-popup">
                  <div className="quick-view-content">
                    <button className="close-popup" onClick={closeQuickView}>
                      ×
                    </button>
                    <Product_popup productID={selectedProductID} />
                  </div>
                </div>
              )}
            </div>
          </>
          {/* Pagination Controls */}
          <div className="pagination">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="pagination_button"
            >
              Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="pagination_button"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
