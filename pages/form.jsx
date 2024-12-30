import React, { useState, useEffect } from "react";
import "../pages_css/product_form.css";
import axios from "axios";

function Form() {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // For selected category
  const [newCategory, setNewCategory] = useState(""); // For new category input
  const [isNewCategory, setIsNewCategory] = useState(false); // For new category flag
  const [categoryDescription, setCategoryDescription] = useState("");
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(""); // For selected brand
  const [newBrand, setNewBrand] = useState(""); // For new category input
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [newModel, setNewModel] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [images, setImages] = useState([""]);
  const [colors, setColors] = useState([""]);
  const [sizes, setSizes] = useState([""]);

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/dashboard/categories"
        ); // Update with your endpoint
        setCategory(response.data); // Set categories directly from the response
      } catch (error) {
        console.error("Error fetching categories:", error.message || error);
        alert("An error occurred while fetching categories.");
      }
    };

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
    const selectedId = e.target.value; // Get the selected brand_id
    setSelectedBrand(selectedId); // Set selected brand_id to state
    fetchModels(selectedId); // Fetch models based on brand_id
  };

  const fetchModels = async (brand_id) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/dashboard/models?brand_id=${brand_id}`
      );
      console.log(response.data);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedCategory) {
      alert("Please select a category.");
      return;
    }

    // if (!selectedBrand) {
    //   alert("Please select a brand.");
    //   return;
    // }

    const data = {
      name: selectedCategory === "add-new" ? newCategory : selectedCategory,
      brand: selectedBrand === "add-new" ? newBrand : selectedBrand,
      category_description: isNewCategory ? categoryDescription : undefined,
    };

    if (newCategory) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/dashboard/categories",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          alert("Form submitted successfully!");
          setSelectedCategory("");
          setIsNewCategory(false);
        }
      } catch (error) {
        console.error("Error adding new category:", error.message || error);
        alert("An error occurred while adding the new category.");
      }
    } else {
      try {
        // Prepare the data to be submitted (including new category if added)

        const response = await axios.post(
          "http://127.0.0.1:8000/dashboard",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          alert("Form submitted successfully!");
          setSelectedCategory("");
          setSelectedBrand("");
          setIsNewCategory(false);
        }
      } catch (error) {
        console.error("Error:", error.message || error);
        alert("An error occurred while submitting the form.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          required
        >
          <option value="">Select a category</option>
          {category.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
          <option value="add-new">Add New Category</option>
        </select>

        {selectedCategory === "add-new" && (
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
      {isNewCategory && (
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
        {!isNewCategory && (
          <>
            <select
              id="brand"
              value={selectedBrand}
              onChange={handleBrandChange}
              required
              disabled={brands.length === 0}
            >
              <option value="">Select a brand</option>
              {brands.length > 0 ? (
                brands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))
              ) : (
                <option disabled>No brands available</option>
              )}
              <option value="add-new">Add New Brand</option>
            </select>
          </>
        )}
        {(selectedBrand === "add-new" || isNewCategory) && (
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
      <div className="form-group">
        <label htmlFor="model">Model</label>
        {!isNewCategory && (
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
              <option value="">Select a model</option>
              {/* {models.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.model}
                </option>
              ))} */}
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
        {(selectedModel === "add-new" || isNewCategory) && (
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
          placeholder="Enter Quantity of the product"
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
            <input
              type="text"
              value={color}
              onChange={(e) => handleColorChange(index, e.target.value)}
              placeholder="Enter color"
              required
            />
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
            <input
              type="text"
              value={size}
              onChange={(e) => handleSizeChange(index, e.target.value)}
              placeholder="Enter size"
              required
            />
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
