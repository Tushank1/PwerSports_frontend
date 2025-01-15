import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../pages_css/Warranty_activation.css";
import { Link } from "react-router-dom";

const Warranty_activation = () => {
  document;
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) return;

    // Check file size (10MB limit)
    if (selectedFile.size > 10 * 1024 * 1024) {
      alert("File size exceeds 10MB. Please select a smaller file.");
      return;
    }

    // Add file to the list
    setFiles((prevFiles) => [...prevFiles, selectedFile]);
  };

  const handleRemoveFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };
  return (
    <>
      <Header />
      <div className="warranty_activation_main_container">
        <div className="warranty_activation_inner">
          <div className="warranty_activation_working">
            <div className="warranty_activation_working_heading">
              <h1>WARRANTY ACTIVATION</h1>
            </div>
            <div className="warranty_activation_working_content">
              <span>
                Kindly register our product that you have purchased for warranty
                using the below form. Please note accessories are not covered
                under warranty. For more information on our warranty policy,
                please check{" "}
                <Link to="/pages/warranty" className="warranty-link">
                  here
                </Link>
                .
              </span>
            </div>
            <div className="warranty_activation_working_form">
              <div className="warranty_activation_working_form_headinng">
                <h3>Warranty Activation Form</h3>
              </div>
              <div className="warranty_activation_working_form_detail">
                <div className="warranty_activation_working_form_detail_left">
                  <div className="warranty_activation_working_form_detail_left_upper">
                    <div className="warranty_activation_working_form_detail_left_upper_heading">
                      <h5>First Name</h5>
                    </div>
                    <div className="warranty_activation_working_form_detail_left_upper_input">
                      <input type="text" placeholder="John" />
                    </div>
                  </div>
                  <div className="warranty_activation_working_form_detail_left_down">
                    <div className="warranty_activation_working_form_detail_left_down_heading">
                      <h5>Phone Number</h5>
                    </div>
                    <div className="warranty_activation_working_form_detail_left_down_input">
                      <input type="number" placeholder="phone number..." />
                    </div>
                  </div>
                </div>
                <div className="warranty_activation_working_form_detail_right">
                  <div className="warranty_activation_working_form_detail_right_upper">
                    <div className="warranty_activation_working_form_detail_right_upper_heading">
                      <h5>Last Name</h5>
                    </div>
                    <div className="warranty_activation_working_form_detail_right_upper_input">
                      <input type="text" placeholder="Cina" />
                    </div>
                  </div>
                  <div className="warranty_activation_working_form_detail_right_down">
                    <div className="warranty_activation_working_form_detail_right_down_heading">
                      <h5>Email</h5>
                    </div>
                    <div className="warranty_activation_working_form_detail_right_down_input">
                      <input type="email" placeholder="john@gmail.com" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="warranty_activation_working_form_other">
                <div className="warranty_activation_working_form_other_product_type">
                  <div className="warranty_activation_working_form_other_product_type_heading">
                    <h5>Product Type</h5>
                  </div>
                  <div className="warranty_activation_working_form_other_product_type_input">
                    <select name="" id="">
                      <option style={{ color: "gray" }}>Please select</option>
                      <option value="">Helmets</option>
                      <option value="">Apparel</option>
                    </select>
                  </div>
                </div>
                <div className="warranty_activation_working_form_other_product_title">
                  <div className="warranty_activation_working_form_other_product_title_heading">
                    <h5>Product Title</h5>
                  </div>
                  <div className="warranty_activation_working_form_other_product_title_input">
                    <input type="text" />
                  </div>
                </div>
                <div className="warranty_activation_working_form_other_barcode_num">
                  <div className="warranty_activation_working_form_other_barcode_num_heading">
                    <h5>Barcode Number</h5>
                  </div>
                  <div className="warranty_activation_working_form_other_barcode_num_input">
                    <input type="number" />
                  </div>
                </div>
              </div>
              <div className="invoice_upload_container">
                <h3>Upload Invoice</h3>
                <p>The max file size is 10MB.</p>
                <label className="upload-btn">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf"
                    hidden
                  />
                  <span>📤 Upload File</span>
                </label>
                <div className="file-list">
                  {files.map((file, index) => (
                    <div key={index} className="file-item">
                      <div className="file-name">{file.name}</div>
                      <div
                        className="progress-bar"
                        style={{ width: "100%" }}
                      ></div>
                      <span
                        className="remove-btn"
                        onClick={() => handleRemoveFile(file.name)}
                      >
                        Remove from queue
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="warranty_activation_working_submit_button">
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Warranty_activation;
