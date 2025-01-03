import React, { useState, useEffect } from "react";
import "../pages_css/product_form.css";
import axios from "axios";
import { FaPlus } from "react-icons/fa6";
import Modal from "./Modal";

function Form() {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // For selected category
  const [newCategory, setNewCategory] = useState(""); // For new category input
  const [isNewCategory, setIsNewCategory] = useState(false); // For new category flag
  const [categoryDescription, setCategoryDescription] = useState("");
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(""); // For selected brand
  const [newBrand, setNewBrand] = useState(""); // For new category input
  const [isNewBrand, setIsNewBrand] = useState(false);
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [newModel, setNewModel] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [images, setImages] = useState([""]);
  const [colors, setColors] = useState([""]);
  const [sizes, setSizes] = useState([""]);
  const [showModal, setShowModal] = useState(false);

  const colors_name = [
    "Beige",
    "Black",
    "Blue",
    "Bronze",
    "Burgundy",
    "Charcoal",
    "Copper",
    "Crimson",
    "Emerald",
    "Gold",
    "Gray",
    "Green",
    "Ivory",
    "Lavender",
    "Lemon",
    "Lime",
    "Maroon",
    "Mint",
    "Mustard",
    "Navy",
    "Olive",
    "Orange",
    "Peach",
    "Pink",
    "Purple",
    "Red",
    "Scarlet",
    "Silver",
    "Sky Blue",
    "Teal",
    "Turquoise",
    "White",
    "Yellow",
  ];

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
    if (selectedId === "add-new") {
      setIsNewCategory(true); // Show description box if adding a new category
      setBrands([]);
    } else {
      setIsNewCategory(false); // Hide description box if an existing category is selected
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
    if (selectedId === "add-new") {
      setIsNewBrand(true);
      setSelectedModel("");
      setModels([]);
      setNewModel("");
    } else {
      setIsNewBrand(false);
      setSelectedModel("");
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

  const handleImageChange = (index, value) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  const handleColorChange = (index, value) => {
    const newColors = [...colors];
    newColors[index] = value;
    setColors(newColors);
  };

  const handleSizeChange = (index, value) => {
    const newSizes = [...sizes];
    newSizes[index] = value;
    setSizes(newSizes);
  };

  const addField = (setter) => {
    setter((prev) => [...prev, ""]);
  };

  const removeField = (index, setter) => {
    setter((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddCategory = async () => {
    // Prepare category data
    const category_data = {
      new_category: selectedCategory === "add-new" ? newCategory : undefined,
      category_description: isNewCategory ? categoryDescription : undefined,
    };

    // If the selected category is 'add-new', send a POST request to create the category
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/dashboard/categories",
        category_data
      );
      console.log("Category added successfully:", response.data);

      const categoryId = response.data.id;

      // Now, use categoryId for adding a new brand
      //handleAddBrand(categoryId); // Call the brand creation function and pass the categoryId
      // console.log("start");
      return categoryId;
    } catch (error) {
      console.error("Error adding categories:", error.message || error);
      alert("An error occurred while adding categories.");
      throw error;
    }
  };

  const handleAddBrand = async (categoryId) => {
    // console.log(categoryId, "selcted_bvrnad iskmknjnn");
    const brand_data = {
      new_brand: selectedBrand === "add-new" || newBrand ? newBrand : undefined,
      category_id: categoryId,
    };
    // console.log(newBrand, "jhgggggggggggg");

    if (selectedBrand === "add-new" || selectedCategory === "add-new") {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/dashboard/brands",
          brand_data
        );
        console.log("Brand added successfully:", response.data);
        const brandId = response.data.id;
        return brandId;
      } catch (error) {
        console.error("Error adding brand:", error.message || error);
        alert("An error occurred while adding brand.");
        throw error;
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("newModel before submitting:", newModel);

    try {
      let categoryId = selectedCategory;
      if (selectedCategory === "add-new") {
        categoryId = await handleAddCategory();
      }

      let brandId = selectedBrand;
      if (
        (selectedBrand === "add-new" && categoryId) ||
        selectedCategory === "add-new"
      ) {
        brandId = await handleAddBrand(categoryId);
      }

      const form_data = {
        category_id: parseInt(categoryId),
        brand_id: parseInt(brandId),
        model_id: parseInt(
          selectedModel !== "add-new" && selectedModel
            ? selectedModel
            : undefined
        ),
        new_model:
          (selectedModel === "add-new" ||
            selectedCategory === "add-new" ||
            selectedBrand === "add-new") &&
          newModel
            ? newModel
            : undefined,
        images: images.filter((image) => image !== ""),
        price: parseFloat(price.replace(",", "")),
        name,
        colors: colors.filter((color) => color !== ""),
        sizes: sizes.filter((size) => size !== ""),
        stock_qty: parseInt(quantity, 10),
      };

      console.log("Submitting form data:", form_data);

      const response = await axios.post(
        "http://127.0.0.1:8000/dashboard",
        form_data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        alert("Form submitted successfully!");
        // Reset input states
        setSelectedCategory("");
        setNewCategory("");
        setIsNewCategory(false);
        setCategoryDescription("");

        setSelectedBrand("");
        setNewBrand("");
        setIsNewBrand(false);

        setSelectedModel("");
        setNewModel("");

        setName("");
        setPrice("");
        setQuantity("");
        setImages([""]);
        setColors([""]);
        setSizes([""]);

        // Fetch updated data for dropdowns
        fetchCategories();
      }
    } catch (error) {
      console.error("Error:", error.message || error);
      alert("An error occurred while submitting the form.");
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="outer_container">
          <div className="outer_inner">
            {!showModal && (
              <select
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                {category.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
                <option value="add-new">Add New Category</option>
              </select>
            )}
            {(selectedCategory === "add-new" || showModal) && (
              <div className="new-category-input">
                <input
                  type="text"
                  placeholder="Enter new category"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  required
                />
              </div>
            )}
          </div>
          <div className="plus">
            <FaPlus onClick={toggleModal} />
            <Modal canShow={showModal} updateModalState={toggleModal} />
          </div>
        </div>
      </div>
      {(isNewCategory || showModal) && (
        <div className="form-group">
          <label htmlFor="description">Category Description</label>
          <textarea
            id="description"
            value={categoryDescription}
            onChange={(e) => setCategoryDescription(e.target.value)}
            placeholder="Enter category description"
            rows="4" // Adjust rows for height
            cols="50" // Adjust cols for width or use CSS for better control
          ></textarea>
        </div>
      )}
      <div className="form-group">
        <label htmlFor="brand">Brand</label>
        <div className="outer_container">
          <div className="outer_inner">
            {!isNewCategory && !showModal && (
              <>
                <select
                  id="brand"
                  value={selectedBrand}
                  onChange={handleBrandChange}
                  required
                  disabled={brands.length === 0}
                >
                  <option value="" disabled>
                    Select a brand
                  </option>
                  {brands.length > 0 ? (
                    brands.map((brand) => (
                      <option key={brand.id} value={brand.id}>
                        {brand.brand_name}
                      </option>
                    ))
                  ) : (
                    <option disabled>No brands available</option>
                  )}
                  <option value="add-new">Add New Brand</option>
                </select>
              </>
            )}
            {(selectedBrand === "add-new" || showModal || isNewCategory) && (
              <div className="new-Brand-input">
                <input
                  type="text"
                  placeholder="Enter new brand"
                  value={newBrand}
                  onChange={(e) => setNewBrand(e.target.value)}
                  required
                />
              </div>
            )}
          </div>
          {!showModal && (
            <div className="plus">
              <FaPlus />
            </div>
          )}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="model">Model</label>
        <div className="outer_container">
          <div className="outer_inner">
            {!isNewCategory && selectedBrand !== "add-new" && !showModal && (
              <>
                <select
                  id="model"
                  type="text"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  placeholder="Enter model name"
                  disabled={brands.length === 0}
                  required
                >
                  <option value="" disabled>
                    Select a model
                  </option>
                  {models.length > 0 ? (
                    models.map((model) => (
                      <option key={model.id} value={model.id}>
                        {model.model}
                      </option>
                    ))
                  ) : (
                    <option disabled>No models available</option>
                  )}
                  <option value="add-new">Add New Model</option>
                </select>
              </>
            )}
            {(selectedModel === "add-new" ||
              showModal ||
              isNewCategory ||
              selectedBrand === "add-new") && (
              <div className="new-Model-input">
                <input
                  type="text"
                  placeholder="Enter new model"
                  value={newModel}
                  onChange={(e) => setNewModel(e.target.value)}
                  required
                />
              </div>
            )}
          </div>
          {!showModal && (
            <div className="plus">
              <FaPlus />
            </div>
          )}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="name">Product Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter product name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Product Price</label>
        <input
          id="Price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter product price"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="stock_qty">Quantity</label>
        <input
          id="stock_qty"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter Quantity greater than 1"
          min="1"
          required
        />
      </div>
      <div className="form-group">
        <label>Images</label>
        {images.map((image, index) => (
          <div key={index} className="input-group">
            <input
              type="url"
              value={image}
              onChange={(e) => handleImageChange(index, e.target.value)}
              placeholder="Enter image URL"
              required
            />
            {index > 0 && (
              <button
                type="button"
                onClick={() => removeField(index, setImages)}
                className="remove-btn"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => addField(setImages)}
          className="add-btn"
        >
          Add Image
        </button>
      </div>

      <div className="form-group">
        <label>Colors</label>
        {colors.map((color, index) => (
          <div key={index} className="input-group">
            <select
              id={`color-${index}`}
              type="text"
              value={color}
              onChange={(e) => handleColorChange(index, e.target.value)}
              required
            >
              <option value="" disabled>
                Select a color :
              </option>
              {colors_name.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
            {index > 0 && (
              <button
                type="button"
                onClick={() => removeField(index, setColors)}
                className="remove-btn"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => addField(setColors)}
          className="add-btn"
        >
          Add Color
        </button>
      </div>
      <div className="form-group">
        <label>Sizes</label>
        {sizes.map((size, index) => (
          <div key={index} className="input-group">
            <select
              id={`size-${index}`}
              type="text"
              value={size}
              onChange={(e) => handleSizeChange(index, e.target.value)}
              placeholder="Select Size"
              required
            >
              <option value="" disabled>
                Select a Size :
              </option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="XXXL">XXXL</option>
            </select>
            {index > 0 && (
              <button
                type="button"
                onClick={() => removeField(index, setSizes)}
                className="remove-btn"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => addField(setSizes)}
          className="add-btn"
        >
          Add Size
        </button>
      </div>
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}

export default Form;
