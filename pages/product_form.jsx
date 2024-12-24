import React, { useState } from "react";
import "../pages_css/product_form.css";
import axios from "axios";

function ProductForm() {
  const [images, setImages] = useState([""]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [colors, setColors] = useState([""]);
  const [sizes, setSizes] = useState([""]);

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
    if (quantity < 1) {
      alert("Quantity must be greater than 0.");
      return;
    }

    // Prepare the form data
    const formData = {
      images: images.filter((image) => image !== ""), // Remove empty image URLs
      name,
      price: parseFloat(price), // Ensure price is a float
      category,
      category_description: categoryDescription,
      brand,
      model,
      colors: colors.filter((color) => color !== ""), // Remove empty colors
      sizes: sizes.filter((size) => size !== ""), // Remove empty sizes
      stock_qty: parseInt(quantity, 10), // Ensure stock_qty is an integer
    };

    // Log the prepared form data for debugging
    console.log("Prepared Form Data:", formData);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/dashboard",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Log the entire response object for better debugging
      console.log("Full Response:", response);

      if (response.status === 200) {
        console.log("Form submitted successfully", response.data);
        alert("Form submitted successfully!");

        // Reset form fields after successful submission
        setName("");
        setPrice("");
        setCategory("");
        setCategoryDescription("");
        setQuantity("");
        setBrand("");
        setModel("");
        setImages([""]);
        setColors([""]);
        setSizes([""]);
      } else {
        console.error("Error submitting the form", response.statusText);
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error.message || error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category name"
          required
        ></input>
      </div>

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

      <div className="form-group">
        <label htmlFor="brand">Brand</label>
        <input
          id="brand"
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Enter brand name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="model">Model</label>
        <input
          id="model"
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Enter model name"
          required
        />
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

export default ProductForm;
