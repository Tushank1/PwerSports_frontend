import React, { useState } from "react";
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
  });

  const [imageInputs, setImageInputs] = useState([
    { id: Date.now(), name: "" },
  ]);

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

  const handleOpen = (key) => {
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
              </div>
              <div className="form_working_container_category_select">
                <div className="form_working_container_category_select_icon_container">
                  <RiMenuFill />
                </div>
                <select name="" id="">
                  <option value="">Please Select</option>
                  <option value="">Helmets</option>
                  <option value="">Jackets</option>
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
                  </div>
                  <div className="form_working_container_category_new_product_content_input">
                    <div className="form_working_container_category_new_product_content_input_icon_container">
                      <BiCategoryAlt />
                    </div>
                    <input type="text" placeholder="New Category Name" />
                  </div>
                  <div className="form_working_container_category_new_product_content_description_heading">
                    <h4>Category Description</h4>
                  </div>
                  <div className="form_working_container_category_new_product_content_description_box">
                    <textarea />
                  </div>
                </div>
                <div className="form_working_container_category_new_product_heading_button">
                  <button>Submit</button>
                </div>
              </div>
            )}
            <div className="form_working_container_brand">
              <div className="form_working_container_brand_heading">
                <h4>Brand</h4>
              </div>
              <div className="form_working_container_brand_select">
                <div className="form_working_container_brand_select_icon_container">
                  <RiMenuFill />
                </div>
                <select name="" id="">
                  <option value="">Please Select</option>
                  <option value="">Helmets</option>
                  <option value="">Jackets</option>
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
                  </div>
                  <div className="form_working_container_category_new_brand_content_input">
                    <div className="form_working_container_category_new_brand_content_input_icon_container">
                      <TbBrandAppleNews />
                    </div>
                    <input type="text" placeholder="New Brand Name" />
                  </div>
                  <div className="form_working_container_category_new_brand_content_description_heading">
                    <h4>Brand Description</h4>
                  </div>
                  <div className="form_working_container_category_new_brand_content_description_box">
                    <textarea />
                  </div>
                </div>
                <div className="form_working_container_category_new_brand_heading_button">
                  <button>Submit</button>
                </div>
              </div>
            )}
            <div className="form_working_container_model">
              <div className="form_working_container_model_heading">
                <h4>Model</h4>
              </div>
              <div className="form_working_container_model_select">
                <div className="form_working_container_model_select_icon_container">
                  <RiMenuFill />
                </div>
                <select name="" id="">
                  <option value="">Please Select</option>
                  <option value="">Helmets</option>
                  <option value="">Jackets</option>
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
                  </div>
                  <div className="form_working_container_category_new_model_content_input">
                    <div className="form_working_container_category_new_model_content_input_icon_container">
                      <TbBoxModel2 />
                    </div>
                    <input type="text" placeholder="New Model Name" />
                  </div>
                </div>
                <div className="form_working_container_category_new_model_heading_button">
                  <button>Submit</button>
                </div>
              </div>
            )}
            <div className="form_working_container_product_name">
              <div className="form_working_container_product_name_heading">
                <h4>Product Name</h4>
              </div>
              <div className="form_working_container_product_name_input">
                <div className="form_working_container_product_name_input_icon_container">
                  <RiInputCursorMove />
                </div>
                <input type="text" placeholder="name" />
              </div>
            </div>
            <div className="form_working_container_product_price">
              <div className="form_working_container_product_price_heading">
                <h4>Product Price</h4>
              </div>
              <div className="form_working_container_product_price_input">
                <div className="form_working_container_product_price_icon_input_container">
                  <IoPricetags />
                </div>
                <input type="number" placeholder="price" />
              </div>
            </div>
            <div className="form_working_container_quantity">
              <div className="form_working_container_quantity_heading">
                <h4>Quantity</h4>
              </div>
              <div className="form_working_container_quantity_select">
                <div className="form_working_container_quantity_select_icon_container">
                  <MdProductionQuantityLimits />
                </div>
                <input
                  type="number"
                  placeholder="Quantity must be greater than 1"
                />
              </div>
            </div>
            <div className="form_working_container_image">
              <div className="form_working_container_image_heading">
                <h4>Image</h4>
              </div>
              <div className="form_working_container_image_select">
                <div className="form_working_container_image_select_icon_container">
                  <IoIosImages />
                </div>
                <input type="email" placeholder="Image URL" />
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
                      <h4>Image Name</h4>
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
                          type="text"
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
                  <FaPlus />
                </div>
              </div>
            </div>
            <div className="form_working_container_size">
              <div className="form_working_container_size_heading">
                <h4>Size</h4>
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
                  <FaPlus />
                </div>
              </div>
            </div>
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
