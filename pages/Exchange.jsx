import React, { useState } from "react";
import Header from "./Header";
import "../pages_css/Exchange.css";
import Footer from "./Footer";
import { RiMenuFill } from "react-icons/ri";
import { TbSelector } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";

const Exchange = () => {
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
      <div className="exchange_outer_container">
        <div className="exchange_outer_container_inner_container">
          <div className="exchange_working_container">
            <div className="exchange_working_container_heading">
              <h1>EXCHANGE, RETURNS, REFUND & CANCELLATION POLICY</h1>
            </div>
            <div className="exchange_working_container_data_container">
              <div className="exchange_working_container_data_container_first">
                <div className="exchange_working_container_data_container_first_heading">
                  <h5>Exchange Policy:</h5>
                </div>
                <div className="exchange_working_container_data_container_first_content">
                  <span>
                    Your favorite gear purchased from us doesn't fit well? No
                    problem, we are happy to exchange it for the right size.
                  </span>
                  <ul>
                    <li>
                      Please note products purchased can be exchanged for size
                      only. Product must be unused with all the tags and packing
                      material must be intact. Products sent without proper
                      packaging and without the helmet box and tags will be
                      returned to the customer as is.
                    </li>
                    <li>
                      Customer must fill the form below and then ship the
                      product within 48hrs of receiving the product.
                    </li>
                    <li>
                      Please ship the product to the address mentioned in the
                      invoice received with the product.
                    </li>
                    <li>
                      The cost of sending the product will be compensated to the
                      customer in the form of store credit only at actuals but
                      upto a maximum of Rs. 500. No cash compensation will be
                      made.
                    </li>
                    <li>PSI will send the replacement free of cost.</li>
                  </ul>
                  <span className="color_span">
                    * Please note products that are on sale or purchased using a
                    discount, luggage and all accessories cannot be exchanged.*
                  </span>
                  <span className="color_span">
                    * The Store credit issued to the customer must be used
                    within 30 days. The credit won't be reissued once it is
                    expired.
                  </span>
                  <span className="color_span">
                    * The store credit for the shipping cost will be issued
                    after the exchanged item is shipped. It is the customer's
                    responsibility to send the shipping invoice to us with in 7
                    days of exchange in order to get the store credit. Store
                    credit will not be issued if we do not get the shipping
                    invoice within 7 days from the exchange.
                  </span>
                </div>
              </div>
              <div className="exchange_working_container_data_container_second">
                <div className="exchange_working_container_data_container_second_heading">
                  <h5>Returns & Refund Policy:</h5>
                </div>
                <div className="exchange_working_container_data_container_second_content">
                  <span>
                    Products once purchased can only be exchanged. They cannot
                    be returned claiming for a refund. If the replacement
                    product is not available in the requested size, customer
                    must choose another model. If that is also not available,
                    then a refund will be made only in the form of store credit
                    which will be valid for 30 days only. Company will not make
                    a cash refund under any circumstances.
                  </span>
                </div>
              </div>
              <div className="exchange_working_container_data_container_third">
                <div className="exchange_working_container_data_container_third_heading">
                  <h5>Cancellation Policy:</h5>
                </div>
                <div className="exchange_working_container_data_container_third_content">
                  <span>
                    We start processing the orders soon after receiving them.
                    Hence, orders once placed cannot be cancelled.
                  </span>
                </div>
              </div>
            </div>
            <div className="exchange_working_container_form">
              <div className="exchange_working_container_form_heading">
                <h1>Product Exchange Request Form</h1>
              </div>
              <div className="exchange_working_container_form_detail">
                <div className="exchange_working_container_form_detail_left">
                  <div className="exchange_working_container_form_detail_left_first">
                    <div className="exchange_working_container_form_detail_left_first_heading">
                      <h5>Full Name</h5>
                      <span style={{ color: "red" }}>*</span>
                    </div>
                    <div className="exchange_working_container_form_detail_left_first_input">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="exchange_working_container_form_detail_left_second">
                    <div className="exchange_working_container_form_detail_left_second_heading">
                      <h5>Phone Number</h5>
                      <span style={{ color: "red" }}>*</span>
                    </div>
                    <div className="exchange_working_container_form_detail_left_second_input">
                      <input type="number" />
                    </div>
                  </div>
                  <div className="exchange_working_container_form_detail_left_third">
                    <div className="exchange_working_container_form_detail_left_third_heading">
                      <h5>Product Type</h5>
                      <span style={{ color: "red" }}>*</span>
                    </div>
                    <div className="exchange_working_container_form_detail_left_third_input">
                      <div className="exchange_working_container_form_detail_left_third_input_icon_conatiner">
                        <RiMenuFill className="exchange_working_container_form_detail_left_third_input_icon" />
                      </div>
                      <select>
                        <option value="none" selected>
                          Please Select
                        </option>
                        <option value="">Helmet</option>
                        <option value="">Jacket</option>
                        <option value="">Glove</option>
                        <option value="">Pant</option>
                        <option value="">Boot</option>
                        <option value="">Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="exchange_working_container_form_detail_left_fourth">
                    <div className="exchange_working_container_form_detail_left_fourth_heading">
                      <h5>Product Color</h5>
                      <span style={{ color: "red" }}>*</span>
                    </div>
                    <div className="exchange_working_container_form_detail_left_fourth_input">
                      <div className="exchange_working_container_form_detail_left_fourth_input_icon_conatiner">
                        <TbSelector className="exchange_working_container_form_detail_left_fourth_input_icon" />
                      </div>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div className="exchange_working_container_form_detail_right">
                  <div className="exchange_working_container_form_detail_right_first">
                    <div className="exchange_working_container_form_detail_right_first_heading">
                      <h5>Email</h5>
                      <span style={{ color: "red" }}>*</span>
                    </div>
                    <div className="exchange_working_container_form_detail_right_first_input">
                      <div className="exchange_working_container_form_detail_right_first_input_icon_conatiner">
                        <IoIosMail className="exchange_working_container_form_detail_right_first_input_icon" />
                      </div>
                      <input type="email" />
                    </div>
                  </div>
                  <div className="exchange_working_container_form_detail_right_second">
                    <div className="exchange_working_container_form_detail_right_second_heading">
                      <h5>Order Number</h5>
                      <span style={{ color: "red" }}>*</span>
                    </div>
                    <div className="exchange_working_container_form_detail_right_second_input">
                      <input type="number" />
                    </div>
                  </div>
                  <div className="exchange_working_container_form_detail_right_third">
                    <div className="exchange_working_container_form_detail_right_third_heading">
                      <h5>Original Product Ordered</h5>
                      <span style={{ color: "red" }}>*</span>
                    </div>
                    <div className="exchange_working_container_form_detail_right_third_input">
                      <div className="exchange_working_container_form_detail_right_third_input_icon_conatiner">
                        <TbSelector className="exchange_working_container_form_detail_right_third_input_icon" />
                      </div>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="exchange_working_container_form_detail_right_fourth">
                    <div className="exchange_working_container_form_detail_right_fourth_heading">
                      <h5>Size Ordered</h5>
                      <span style={{ color: "red" }}>*</span>
                    </div>
                    <div className="exchange_working_container_form_detail_right_fourth_input">
                      <div className="exchange_working_container_form_detail_right_fourth_input_icon_conatiner">
                        <TbSelector className="exchange_working_container_form_detail_right_fourth_input_icon" />
                      </div>
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="exchange_working_container_form_other">
                <div className="exchange_working_container_form_other_upper">
                  <div className="exchange_working_container_form_other_upper_heading">
                    <h5>Size Needed in Exchange</h5>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <div className="exchange_working_container_form_other_upper_input">
                    <div className="exchange_working_container_form_other_upper_input_icon_conatiner">
                      <TbSelector className="exchange_working_container_form_other_upper_input_icon" />
                    </div>
                    <input type="text" />
                  </div>
                </div>
                <div className="exchange_working_container_form_other_down">
                  <div className="exchange_working_container_form_other_down_heading">
                    <h5>Alternate Product</h5>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <div className="exchange_working_container_form_other_down_content">
                    <span>
                      If the original product is not available in the required
                      size, customers are requested to select another graphic or
                      color from any other available product.
                    </span>
                  </div>
                  <div className="exchange_working_container_form_other_down_input">
                    <div className="exchange_working_container_form_other_down_input_icon_conatiner">
                      <TbSelector className="exchange_working_container_form_other_down_input_icon" />
                    </div>
                    <input type="text" placeholder="Option 1" />
                  </div>
                  <div className="exchange_working_container_form_other_down_input">
                    <div className="exchange_working_container_form_other_down_input_icon_conatiner">
                      <TbSelector className="exchange_working_container_form_other_down_input_icon" />
                    </div>
                    <input type="text" placeholder="Option 2" />
                  </div>
                  <div className="exchange_working_container_form_other_down_input">
                    <div className="exchange_working_container_form_other_down_input_icon_conatiner">
                      <TbSelector className="exchange_working_container_form_other_down_input_icon" />
                    </div>
                    <input type="text" placeholder="Option 3" />
                  </div>
                </div>
                <div className="invoice_upload_container">
                  <h3>Invoice</h3>
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
              </div>
              <div className="exchange_working_container_button">
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

export default Exchange;
