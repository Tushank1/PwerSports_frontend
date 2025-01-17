import React, { useState, useEffect } from "react";
import axios from "axios";
import "../pages_css/F.css";
import Header from "./Header";
import Footer from "./Footer";
import { RiMenuFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { RiInputCursorMove } from "react-icons/ri";
import { IoIosImages } from "react-icons/io";
import { VscSymbolColor } from "react-icons/vsc";
import { IoPricetags } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { SiZedindustries } from "react-icons/si";
import { IoCloseSharp } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { TbBrandAppleNews } from "react-icons/tb";
import { TbBoxModel2 } from "react-icons/tb";
import { FiMinus } from "react-icons/fi";

const F = () => {
  const [open, setOpen] = useState({
    category: false,
    brand: false,
    model: false,
    image: false,
    color: false,
    size: false,
  });
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [newBrand, setNewBrand] = useState("");
  const [brandDescription, setBrandDescription] = useState("");
  const [newModel, setNewModel] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [image, setImage] = useState([""]);

  const [imageInputs, setImageInputs] = useState([
    { id: Date.now(), name: "" },
  ]);
  const [colorInputs, setColorInputs] = useState([
    { id: Date.now(), color: "" },
  ]);
  const [sizeInputs, setSizeInputs] = useState([{ id: Date.now(), name: "" }]);

  const handleAddImage = () => {
    setImageInputs([...imageInputs, { id: Date.now(), name: "" }]);
  };

  const handleRemoveImage = (id) => {
    const updatedInputs = imageInputs.filter((input) => input.id !== id);
    setImageInputs(updatedInputs);

    // Close popup if the last input is removed
    if (updatedInputs.length === 0) {
      setOpen({ image: false });
    }
  };

  const handleInputChange = (id, value) => {
    setImageInputs(
      imageInputs.map((input) =>
        input.id === id ? { ...input, name: value } : input
      )
    );
  };

  const handleAddColor = () => {
    setColorInputs([...colorInputs, { id: Date.now(), color: "" }]);
  };

  const handleRemoveColor = (id) => {
    const updatedInputs = colorInputs.filter((input) => input.id !== id);
    setColorInputs(updatedInputs);

    // Optional: Handle any specific behavior when all colors are removed
    if (updatedInputs.length === 0) {
      setOpen({ color: false });
    }
  };

  const handleColorChange = (id, value) => {
    setColorInputs(
      colorInputs.map((input) =>
        input.id === id ? { ...input, color: value } : input
      )
    );
  };

  const handleAddSize = () => {
    setSizeInputs([...sizeInputs, { id: Date.now(), size: "" }]);
  };

  const handleRemoveSize = (id) => {
    const updatedInputs = sizeInputs.filter((input) => input.id !== id);
    setSizeInputs(updatedInputs);

    // Optional: Handle any specific behavior when all sizes are removed
    if (updatedInputs.length === 0) {
      setOpen({ size: false });
    }
  };

  const handleSizeChange = (id, value) => {
    setSizeInputs(
      sizeInputs.map((input) =>
        input.id === id ? { ...input, size: value } : input
      )
    );
  };

  const handleOpen = (key) => {
    setImageInputs((prevInputs) => {
      // Ensure at least one input exists when opening
      if (prevInputs.length === 0) {
        return [{ id: Date.now(), name: "" }];
      }
      return prevInputs;
    });

    setColorInputs((prevInputs) => {
      if (prevInputs.length === 0) {
        return [{ id: Date.now(), name: "" }];
      }
      return prevInputs;
    });

    setSizeInputs((prevInputs) => {
      if (prevInputs.length === 0) {
        return [{ id: Date.now(), name: "" }];
      }
      return prevInputs;
    });

    setOpen((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  const handleClose = (key) => {
    setOpen((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  // Fetch categories from API
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/dashboard/categories"
      );
      setCategory(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error.message || error);
      alert("An error occurred while fetching categories.");
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryChange = (e) => {
    const selectedId = e.target.value;
    setSelectedCategory(selectedId);
    if (selectedId === "none") {
      setSelectedBrand("");
      setSelectedModel("");
    } else {
      fetchBrands(selectedId);
    }
  };

  const fetchBrands = async (category_id) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/dashboard/brands?category_id=${category_id}`
      );
      setBrands(response.data);
    } catch (error) {
      console.error(
        "Error fetching brands:",
        error.response?.data || error.message || error
      );
      alert("An error occurred while fetching brands.");
    }
  };

  const handleBrandChange = (e) => {
    const selectedId = e.target.value;
    setSelectedBrand(selectedId);
    if (selectedId === "none") {
      setSelectedModel("");
    } else {
      fetchModels(selectedId);
    }
  };

  const fetchModels = async (brand_id) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/dashboard/models?brand_id=${brand_id}`
      );
      setModels(response.data);
    } catch (error) {
      console.error(
        "Error fetching models:",
        error.response?.data || error.message || error
      );
      alert("An error occurred while fetching models.");
    }
  };

  const handleModelChange = (e) => {
    const selectedId = e.target.value;
    setSelectedModel(selectedId);
  };

  const handleAddCategory = async () => {
    const category_data = {
      new_category: newCategory,
      category_description: categoryDescription,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/dashboard/categories",
        category_data
      );
      console.log("Category added successfully:", response.data);

      const category = response.data;
      setCategory((prevCategory) => [
        ...prevCategory,
        { id: category.id, name: category.name },
      ]);
      setNewCategory("");
      setCategoryDescription("");

      const categoryId = category.id;
      setSelectedCategory(categoryId);
      handleClose("category");
    } catch (error) {
      console.error("Error adding categories:", error.message || error);
      alert("An error occurred while adding categories.");
      throw error;
    }
  };

  const handleAddBrand = async (categoryId) => {
    if (!categoryId) {
      alert("Select a category.");
    }
    const brand_data = {
      new_brand: newBrand,
      brand_description: brandDescription,
      category_id: categoryId,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/dashboard/brands",
        brand_data
      );
      console.log("Brand added successfully:", response.data);
      const brand = response.data;
      setBrands((prevBrands) => [...prevBrands, brand]);
      setNewBrand("");
      setBrandDescription("");

      const brandId = brand.id;
      setSelectedBrand(brandId);
      handleClose("brand");

      return brandId;
    } catch (error) {
      console.error("Error adding brand:", error.message || error);
      alert("An error occurred while adding brand.");
      throw error;
    }
  };

  const handleAddModel = async (brandId) => {
    if (!brandId) {
      alert("Select a Brand.");
    }
    const model_data = {
      new_model: newModel,
      brand_id: brandId,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/dashboard/models",
        model_data
      );
      console.log("Model added :", response.data);
      const model = response.data[0];
      // setModels(response.data);
      setModels((prevModel) => [...prevModel, model]);
      setSelectedModel(model.id);
      handleClose("model");
      return;
    } catch (error) {
      console.error("Error adding model:", error.message || error);
      alert("An error occurred while adding model.");
      throw error;
    }
  };

  const handleImageChange = (index, value) => {
    const newImages = [...image];
    newImages[index] = value;
    setImage(newImage);
  };

  return (
    <>
      <Header />
      <div className="form_outer_container">
        <div className="form_inner_container">
          <div className="form_working_container">
            <div className="form_working_container_heading">
              <h1>ADD NEW PRODUCT</h1>
            </div>
            <div className="form_working_container_category">
              <div className="form_working_container_category_heading">
                <h4>Product Category</h4>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="form_working_container_category_select">
                <div className="form_working_container_category_select_icon_container">
                  <RiMenuFill />
                </div>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="none">Please Select</option>
                  {category.map((cat) => (
                    <option value={cat.id} key={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                <div className="form_working_container_category_select_plus_container">
                  <FaPlus
                    className="catgeory_icon"
                    onClick={() => handleOpen("category")}
                  />
                </div>
              </div>
            </div>
            {open.category && (
              <div className="form_working_container_category_new_product">
                <div className="form_working_container_category_new_product_close_icon">
                  <IoCloseSharp
                    className="product_close_icon"
                    onClick={() => handleClose("category")}
                  />
                </div>
                <div className="form_working_container_category_new_product_heading">
                  <h1>New Category</h1>
                </div>
                <div className="form_working_container_category_new_product_content">
                  <div className="form_working_container_category_new_product_content_heading">
                    <h4>Category Name</h4>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <div className="form_working_container_category_new_product_content_input">
                    <div className="form_working_container_category_new_product_content_input_icon_container">
                      <BiCategoryAlt />
                    </div>
                    <input
                      type="text"
                      placeholder="New Category Name"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form_working_container_category_new_product_content_description_heading">
                    <h4>Category Description</h4>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <div className="form_working_container_category_new_product_content_description_box">
                    <textarea
                      placeholder="write a description of the category"
                      value={categoryDescription}
                      onChange={(e) => setCategoryDescription(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div
                  className="form_working_container_category_new_product_heading_button"
                  onClick={handleAddCategory}
                >
                  <button>Submit</button>
                </div>
              </div>
            )}
            <div className="form_working_container_brand">
              <div className="form_working_container_brand_heading">
                <h4>Brand</h4>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="form_working_container_brand_select">
                <div className="form_working_container_brand_select_icon_container">
                  <RiMenuFill />
                </div>
                <select
                  id="brand"
                  value={selectedBrand}
                  onChange={handleBrandChange}
                >
                  <option value="none">Please Select</option>
                  {brands.length > 0 ? (
                    brands.map((brand) => (
                      <option key={brand.id} value={brand.id}>
                        {brand.brand_name}
                      </option>
                    ))
                  ) : (
                    <option disabled>No brands available</option>
                  )}
                </select>
                <div className="form_working_container_brand_select_plus_container">
                  <FaPlus
                    className="brand_icon"
                    onClick={() => handleOpen("brand")}
                  />
                </div>
              </div>
            </div>
            {open.brand && (
              <div className="form_working_container_category_new_brand">
                <div className="form_working_container_category_new_brand_close_icon">
                  <IoCloseSharp
                    className="brand_close_icon"
                    onClick={() => handleClose("brand")}
                  />
                </div>
                <div className="form_working_container_category_new_brand_heading">
                  <h1>New Brand</h1>
                </div>
                <div className="form_working_container_category_new_brand_content">
                  <div className="form_working_container_category_new_brand_content_heading">
                    <h4>Brand Name</h4>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <div className="form_working_container_category_new_brand_content_input">
                    <div className="form_working_container_category_new_brand_content_input_icon_container">
                      <TbBrandAppleNews />
                    </div>
                    <input
                      type="text"
                      placeholder="New Brand Name"
                      value={newBrand}
                      onChange={(e) => setNewBrand(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form_working_container_category_new_brand_content_description_heading">
                    <h4>Brand Description</h4>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <div className="form_working_container_category_new_brand_content_description_box">
                    <textarea
                      placeholder="write a brand description"
                      value={brandDescription}
                      onChange={(e) => setBrandDescription(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  className="form_working_container_category_new_brand_heading_button"
                  onClick={() => handleAddBrand(selectedCategory)}
                >
                  <button>Submit</button>
                </div>
              </div>
            )}
            <div className="form_working_container_model">
              <div className="form_working_container_model_heading">
                <h4>Model</h4>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="form_working_container_model_select">
                <div className="form_working_container_model_select_icon_container">
                  <RiMenuFill />
                </div>
                <select
                  id="models"
                  value={selectedModel}
                  onChange={handleModelChange}
                >
                  <option value="none">Please Select</option>
                  {models.length > 0 ? (
                    models.map((model) => (
                      <option key={model.id} value={model.id}>
                        {model.model}
                      </option>
                    ))
                  ) : (
                    <option disabled>No models available</option>
                  )}
                </select>
                <div className="form_working_container_model_select_plus_container">
                  <FaPlus
                    className="model_icon"
                    onClick={() => handleOpen("model")}
                  />
                </div>
              </div>
            </div>
            {open.model && (
              <div className="form_working_container_category_new_model">
                <div className="form_working_container_category_new_model_close_icon">
                  <IoCloseSharp
                    className="model_close_icon"
                    onClick={() => handleClose("model")}
                  />
                </div>
                <div className="form_working_container_category_new_model_heading">
                  <h1>New Model</h1>
                </div>
                <div className="form_working_container_category_new_model_content">
                  <div className="form_working_container_category_new_model_content_heading">
                    <h4>Model Name</h4>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <div className="form_working_container_category_new_model_content_input">
                    <div className="form_working_container_category_new_model_content_input_icon_container">
                      <TbBoxModel2 />
                    </div>
                    <input
                      type="text"
                      placeholder="New Model Name"
                      value={newModel}
                      onChange={(e) => setNewModel(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div
                  className="form_working_container_category_new_model_heading_button"
                  onClick={() => handleAddModel(selectedBrand)}
                >
                  <button>Submit</button>
                </div>
              </div>
            )}
            <div className="form_working_container_product_name">
              <div className="form_working_container_product_name_heading">
                <h4>Product Name</h4>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="form_working_container_product_name_input">
                <div className="form_working_container_product_name_input_icon_container">
                  <RiInputCursorMove />
                </div>
                <input
                  type="text"
                  placeholder="name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form_working_container_product_price">
              <div className="form_working_container_product_price_heading">
                <h4>Product Price</h4>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="form_working_container_product_price_input">
                <div className="form_working_container_product_price_icon_input_container">
                  <IoPricetags />
                </div>
                <input
                  type="number"
                  placeholder="price"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form_working_container_quantity">
              <div className="form_working_container_quantity_heading">
                <h4>Quantity</h4>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="form_working_container_quantity_select">
                <div className="form_working_container_quantity_select_icon_container">
                  <MdProductionQuantityLimits />
                </div>
                <input
                  type="number"
                  placeholder="Quantity must be greater than 1"
                  value={productQuantity}
                  onChange={setProductQuantity}
                />
              </div>
            </div>
            <div className="form_working_container_image">
              <div className="form_working_container_image_heading">
                <h4>Image</h4>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="form_working_container_image_select">
                <div className="form_working_container_image_select_icon_container">
                  <IoIosImages />
                </div>
                <input
                  type="url"
                  placeholder="Image URL"
                  value={image}
                  onChange={(e) => handleImageChange(index, e.target.value)}
                />
                <div className="form_working_container_image_select_plus_container">
                  <FaPlus
                    className="image_icon"
                    onClick={() => handleOpen("image")}
                  />
                </div>
              </div>
            </div>
            {open.image && (
              <div className="form_working_container_category_new_image">
                <div className="form_working_container_category_new_image_close_icon">
                  <IoCloseSharp
                    className="image_close_icon"
                    onClick={() => handleClose("image")}
                  />
                </div>
                <div className="form_working_container_category_new_image_heading">
                  <h1>New Image</h1>
                </div>
                <>
                  <div className="form_working_container_category_new_image_content">
                    <div className="form_working_container_category_new_image_content_heading">
                      <h4>Image</h4>
                      <span style={{ color: "red" }}>*</span>
                    </div>
                    {imageInputs.map((input) => (
                      <div
                        key={input.id}
                        className="form_working_container_category_new_image_content_input"
                      >
                        <div className="form_working_container_category_new_image_content_input_icon_container">
                          <IoIosImages />
                        </div>
                        <input
                          type="url"
                          placeholder="New image Name"
                          value={input.name}
                          onChange={(e) =>
                            handleInputChange(input.id, e.target.value)
                          }
                        />
                        <div className="form_working_container_category_new_image_content_input_remove_icon">
                          <FiMinus
                            className="image_remove_icon"
                            onClick={() => handleRemoveImage(input.id)}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="form_working_container_category_new_image_content_input_add_image_button">
                      <button onClick={handleAddImage}>Add Image</button>
                    </div>
                  </div>
                </>
                <div className="form_working_container_category_new_image_heading_button">
                  <button>Submit</button>
                </div>
              </div>
            )}
            <div className="form_working_container_color">
              <div className="form_working_container_color_heading">
                <h4>Color</h4>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="form_working_container_color_select">
                <div className="form_working_container_color_select_icon_container">
                  <VscSymbolColor />
                </div>
                <input
                  type="text"
                  placeholder="Enter a color like: Green, Red etc..."
                />
                <div className="form_working_container_color_select_plus_container">
                  <FaPlus
                    className="image_icon"
                    onClick={() => handleOpen("color")}
                  />
                </div>
              </div>
            </div>
            {open.color && (
              <div className="form_working_container_category_new_color">
                <div className="form_working_container_category_new_color_close_icon">
                  <IoCloseSharp
                    className="color_close_icon"
                    onClick={() => handleClose("color")}
                  />
                </div>
                <div className="form_working_container_category_new_color_heading">
                  <h1>New Color</h1>
                </div>
                <>
                  <div className="form_working_container_category_new_color_content">
                    <div className="form_working_container_category_new_color_content_heading">
                      <h4>Color</h4>
                      <span style={{ color: "red" }}>*</span>
                    </div>
                    {colorInputs.map((input) => (
                      <div
                        key={input.id}
                        className="form_working_container_category_new_color_content_input"
                      >
                        <div className="form_working_container_category_new_color_content_input_icon_container">
                          <VscSymbolColor />
                        </div>
                        <input
                          type="text"
                          placeholder="New color Name"
                          value={input.name}
                          onChange={(e) =>
                            handleColorChange(input.id, e.target.value)
                          }
                        />
                        <div className="form_working_container_category_new_color_content_input_remove_icon">
                          <FiMinus
                            className="color_remove_icon"
                            onClick={() => handleRemoveColor(input.id)}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="form_working_container_category_new_color_content_input_add_color_button">
                      <button onClick={handleAddColor}>Add Color</button>
                    </div>
                  </div>
                </>
                <div className="form_working_container_category_new_color_heading_button">
                  <button>Submit</button>
                </div>
              </div>
            )}
            <div className="form_working_container_size">
              <div className="form_working_container_size_heading">
                <h4>Size</h4>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="form_working_container_Size_select">
                <div className="form_working_container_size_select_icon_container">
                  <SiZedindustries />
                </div>
                <input
                  type="text"
                  placeholder="Enter a size like: S, M etc..."
                />
                <div className="form_working_container_size_select_plus_container">
                  <FaPlus
                    className="size_icon"
                    onClick={() => handleOpen("size")}
                  />
                </div>
              </div>
            </div>
            {open.size && (
              <div className="form_working_container_category_new_size">
                <div className="form_working_container_category_new_size_close_icon">
                  <IoCloseSharp
                    className="size_close_icon"
                    onClick={() => handleClose("size")}
                  />
                </div>
                <div className="form_working_container_category_new_size_heading">
                  <h1>New Size</h1>
                </div>
                <>
                  <div className="form_working_container_category_new_size_content">
                    <div className="form_working_container_category_new_size_content_heading">
                      <h4>Size</h4>
                      <span style={{ color: "red" }}>*</span>
                    </div>
                    {sizeInputs.map((input) => (
                      <div
                        key={input.id}
                        className="form_working_container_category_new_size_content_input"
                      >
                        <div className="form_working_container_category_new_size_content_input_icon_container">
                          <SiZedindustries />
                        </div>
                        <input
                          type="text"
                          placeholder="New size Name"
                          value={input.name}
                          onChange={(e) =>
                            handleSizeChange(input.id, e.target.value)
                          }
                        />
                        <div className="form_working_container_category_new_size_content_input_remove_icon">
                          <FiMinus
                            className="size_remove_icon"
                            onClick={() => handleRemoveSize(input.id)}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="form_working_container_category_new_size_content_input_add_size_button">
                      <button onClick={handleAddSize}>Add Size</button>
                    </div>
                  </div>
                </>
                <div className="form_working_container_category_new_size_heading_button">
                  <button>Submit</button>
                </div>
              </div>
            )}
            <div className="form_working_container_submit_button">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default F;
