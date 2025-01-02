import React from "react";
import "../pages_css/Modal.css";

const Modal = ({ canShow, updateModalState }) => {
  if (canShow) {
    return (
      <div className="outer">
        <h2>ADD NEW CATEGORY</h2>
        <div className="inner_container">
          <div className="inner_container_heading">
            <h4>Category Name</h4>
            <div className="category-input">
              <input
                type="text"
                placeholder="Enter new category"
                // value={newBrand}
                // onChange={(e) => setNewBrand(e.target.value)}
                required
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
                // value={categoryDescription}
                // onChange={(e) => setCategoryDescription(e.target.value)}
                placeholder="Enter category description"
                //rows="4" // Adjust rows for height
                //cols="50" // Adjust cols for width or use CSS for better control
              ></textarea>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="hide" onClick={updateModalState}>
            Hide Me
          </button>
          <button className="create">Create</button>
        </div>
      </div>
    );
  }

  return null;
};

export default Modal;
