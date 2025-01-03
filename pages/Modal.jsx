import React, { useState } from "react";
import "../pages_css/Modal.css";
import PropTypes from "prop-types";

const Modal = ({ canShow, updateModalState }) => {
  const [newCategory, setNewCategory] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  const handleCreate = () => {
    if (newCategory && categoryDescription) {
      console.log({ name: newCategory, description: categoryDescription });
      updateModalState(); // Close modal after submission
    } else {
      alert("Please fill all the fields");
    }
  };
  if (canShow) {
    return (
      <div
        // className={`outer ${canShow ? "hidden" : "visible"}`}
        className={"outer"}
        // aria-hidden={canShow}
        aria-modal="true"
        role="dialog"
      >
        <h2>ADD NEW CATEGORY</h2>
        <div className="inner_container">
          <div className="inner_container_heading">
            <h4>Category Name</h4>
            <div className="category-input">
              <input
                type="text"
                placeholder="Enter new category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
            </div>
          </div>
          <div className="inner_container_description">
            <div className="inner_container_description_heading">
              <h4>Description</h4>
            </div>
            <div className="inner_container_description_desc">
              <textarea
                id="description"
                value={categoryDescription}
                onChange={(e) => setCategoryDescription(e.target.value)}
                placeholder="Enter category description"
              ></textarea>
            </div>
          </div>
          <div className="inner_container_brand">
            <div className="inner_container_brand_heading">
              <h4>Brand</h4>
            </div>
            <div className="inner_container_brand_input">
              <input type="text" placeholder="Enter new brand" />
            </div>
          </div>
          <div className="inner_container_model">
            <div className="inner_container_model_heading">
              <h4>Model</h4>
            </div>
            <div className="inner_container_model_input">
              <input type="text" placeholder="Enter new model" />
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="hide" onClick={updateModalState}>
            Close
          </button>
          <button className="create" onClick={handleCreate}>
            Create
          </button>
        </div>
      </div>
    );
  }
};

Modal.propTypes = {
  canShow: PropTypes.bool.isRequired,
  updateModalState: PropTypes.func.isRequired,
};

export default Modal;
