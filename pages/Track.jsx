import React from "react";
import "../pages_css/Track.css";
import Header from "./Header";
import Footer from "./Footer";

const Track = () => {
  return (
    <>
      <Header />
      <div className="track_main_conatiner">
        <div className="track_inner_conatiner">
          <div className="track_working_conatiner">
            <div className="track_working_conatiner_heading">
              <h1>TRACK YOUR ORDER</h1>
            </div>
            <div className="track_working_conatiner_order_num">
              <div className="track_working_conatiner_order_num_heading">
                <span>ORDER NUMBER</span>
              </div>
              <input type="text" />
            </div>
            <div className="track_working_conatiner_email">
              <div className="track_working_conatiner_email_heading">
                <span>EMAIL</span>
              </div>
              <input type="email" />
            </div>
            <div className="track_working_conatiner_track_button">
              <span>TRACK</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Track;
