import Header from "./header";
import Footer from "./footer";
import "../pages_css/home_body.css";
import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GoShieldCheck } from "react-icons/go";
import { FaRegThumbsUp } from "react-icons/fa";

function Home_body() {
  return (
    <>
      <Header />
      {/* <div className="slider_outer">
        <div className="slider_inner">
          <div className="slider_outer_first">
            <div className="slider_outer_first_img">
              <img src="/nkh_helmet.png" alt="helmet" />
            </div>
            <div className="slider_outer_first_txt">
              <div className="slider_outer_first_txt_heading">
                <h1>NHK HELMETS</h1>
              </div>
              <div className="slider_outer_first_txt_content">
                <span>Starts From Rs. 5,799</span>
              </div>
              <div className="slider_outer_first_txt_content_explore">
                <span>EXPLORE NOW</span>
              </div>
            </div>
          </div>
          <div className="slider_outer_second">
            <div className="slider_outer_second_img">
              <img src="/tourMaster.jpg" alt="Tour Master" />
            </div>
            <div className="slider_outer_second_txt">
              <span>SHOP NOW</span>
            </div>
          </div>
          <div className="slider_outer_third">
            <div className="slider_outer_third_img">
              <img src="/Lokui.png" alt="Lokui" />
            </div>
            <div className="slider_outer_third_txt">
              <div className="slider_outer_third_txt_heading">
                <h1>LOKUI K10</h1>
              </div>
              <div className="slider_outer_third_txt_content">
                <span>By Midland</span>
              </div>
              <div className="slider_outer_third_txt_shop">
                <span>SHOP NOW</span>
              </div>
            </div>
          </div>
          <div className="slider_outer_fourth">
            <div className="slider_outer_fourth_img">
              <img src="/Glavaro.png" alt="glavaro" />
            </div>
            <div className="slider_outer_fourth_txt">
              <div className="slider_outer_fourth_txt_intro">
                <span>INTRODUCING</span>
              </div>
              <div className="slider_outer_fourth_txt_heading">
                <h1>GLOVARO</h1>
              </div>
              <div className="slider_outer_fourth_txt_content">
                <span>Urban Gloves</span>
              </div>
              <div className="slider_outer_fourth_txt_shop">
                <span>SHOP NOW</span>
              </div>
            </div>
          </div>
          <div className="slider_outer_five">
            <div className="slider_outer_five_img">
              <img src="/Macna_Velocity_Jacket.png" alt="Tour Master" />
            </div>
            <div className="slider_outer_five_txt">
              <span>SHOP NOW</span>
            </div>
          </div>
        </div>
      </div> */}
      <div className="slider_outer">
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination]} //,Navigation => for enable arrow
          className="slider_inner"
        >
          <SwiperSlide>
            <div className="slider_outer_first">
              <div className="slider_outer_first_img">
                <img src="/nkh_helmet.png" alt="helmet" />
              </div>
              <div className="slider_outer_first_txt">
                <div className="slider_outer_first_txt_heading">
                  <h1>NHK HELMETS</h1>
                </div>
                <div className="slider_outer_first_txt_content">
                  <span>Starts From Rs. 5,799</span>
                </div>
                <div className="slider_outer_first_txt_content_explore">
                  <span>EXPLORE NOW</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider_outer_second">
              <div className="slider_outer_second_img">
                <img src="/tourMaster.jpg" alt="Tour Master" />
              </div>
              <div className="slider_outer_second_txt">
                <span>SHOP NOW</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider_outer_third">
              <div className="slider_outer_third_img">
                <img src="/Lokui.png" alt="Lokui" />
              </div>
              <div className="slider_outer_third_txt">
                <div className="slider_outer_third_txt_heading">
                  <h1>LOKUI K10</h1>
                </div>
                <div className="slider_outer_third_txt_content">
                  <span>By Midland</span>
                </div>
                <div className="slider_outer_third_txt_shop">
                  <span>SHOP NOW</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider_outer_fourth">
              <div className="slider_outer_fourth_img">
                <img src="/Glavaro.png" alt="glavaro" />
              </div>
              <div className="slider_outer_fourth_txt">
                <div className="slider_outer_fourth_txt_intro">
                  <span>INTRODUCING</span>
                </div>
                <div className="slider_outer_fourth_txt_heading">
                  <h1>GLOVARO</h1>
                </div>
                <div className="slider_outer_fourth_txt_content">
                  <span>Urban Gloves</span>
                </div>
                <div className="slider_outer_fourth_txt_shop">
                  <span>SHOP NOW</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider_outer_five">
              <div className="slider_outer_five_img">
                <img src="/Macna_Velocity_Jacket.png" alt="Tour Master" />
              </div>
              <div className="slider_outer_five_txt">
                <span>SHOP NOW</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="attributes_type">
        <div className="attributes_type_main_container">
          <div className="attributes_type_main_container_first_row">
            <div className="attributes_type_main_container_first">
              <div className="attributes_type_main_container_first_img">
                <img src="/helmets.png" alt="HELMETS" />
              </div>
              <div className="attributes_type_main_container_first_content">
                <h1>HELMETS</h1>
              </div>
            </div>
            <div className="attributes_type_main_container_second">
              <div className="attributes_type_main_container_second_img">
                <img src="/jackets.png" alt="JACKETS" />
              </div>
              <div className="attributes_type_main_container_second_content">
                <h1>JACKETS</h1>
              </div>
            </div>
          </div>
          <div className="attributes_type_main_container_second_row">
            <div className="attributes_type_main_container_first">
              <div className="attributes_type_main_container_first_img">
                <img src="/gloves.png" alt="GLOVES" />
              </div>
              <div className="attributes_type_main_container_first_content">
                <h1>GLOVES</h1>
              </div>
            </div>
            <div className="attributes_type_main_container_second">
              <div className="attributes_type_main_container_second_img">
                <img src="/pants.png" alt="PANTS" />
              </div>
              <div className="attributes_type_main_container_second_content">
                <h1>PANTS</h1>
              </div>
            </div>
          </div>
          <div className="attributes_type_main_container_third_row">
            <div className="attributes_type_main_container_first">
              <div className="attributes_type_main_container_first_img">
                <img src="/boots.png" alt="BOOTS" />
              </div>
              <div className="attributes_type_main_container_first_content">
                <h1>BOOTS</h1>
              </div>
            </div>
            <div className="attributes_type_main_container_second">
              <div className="attributes_type_main_container_second_img">
                <img src="/communication.png" alt="COMMUNICATION" />
              </div>
              <div className="attributes_type_main_container_second_content">
                <h1>COMMUNICATION</h1>
              </div>
            </div>
          </div>
          <div className="attributes_type_main_container_fourth_row">
            <div className="attributes_type_main_container_first">
              <div className="attributes_type_main_container_first_img">
                <img src="/luggage.png" alt="LUGGAGE" />
              </div>
              <div className="attributes_type_main_container_first_content">
                <h1>LUGGAGE</h1>
              </div>
            </div>
            <div className="attributes_type_main_container_second">
              <div className="attributes_type_main_container_second_img">
                <img src="/accessories.png" alt="ACCESSORIES" />
              </div>
              <div className="attributes_type_main_container_second_content">
                <h1>ACCESSORIES</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="new_arrival_heading">
        <div className="arrival">
          <h1>NEW ARRIVALS</h1>
        </div>
      </div>
      {/* <div className="new_arrival_slider_outer">
        <div className="new_arrival_slider_inner">
          <div className="new_arrival_slider_inner_first">
            <div className="new_arrival_slider_inner_first_img">
              <img src="/korda_jacket.png" alt="" />
            </div>
            <div className="new_arrival_slider_inner_first_txt">
              <div className="new_arrival_slider_inner_first_txt_company">
                <span>KORDA</span>
              </div>
              <div className="new_arrival_slider_inner_first_txt_heading">
                <h1>EDGE 2.0</h1>
              </div>
              <div className="new_arrival_slider_inner_first_txt_content">
                <span>Riding Jacket</span>
              </div>
              <div className="new_arrival_slider_inner_first_txt_shop">
                <span>SHOP NOW</span>
              </div>
            </div>
          </div>
          <div className="new_arrival_slider_inner_second">
            <div className="new_arrival_slider_inner_second_img">
              <img src="/motorcycle_helmet.png" alt="" />
            </div>
            <div className="new_arrival_slider_inner_second_txt">
              <div className="new_arrival_slider_inner_second_txt_heading">
                <h1>NHK</h1>
              </div>
              <div className="new_arrival_slider_inner_second_txt_content">
                <span>Motorcycle Helmets</span>
              </div>
              <div className="new_arrival_slider_inner_second_txt_shop">
                <span>SHOP NOW</span>
              </div>
            </div>
          </div>
          <div className="new_arrival_slider_inner_third">
            <div className="new_arrival_slider_inner_third_img">
              <img src="/tourMaster.png" alt="" />
            </div>
            <div className="new_arrival_slider_inner_third_txt">
              <div className="new_arrival_slider_inner_third_txt_company">
                <span>KORDA</span>
              </div>
              <div className="new_arrival_slider_inner_third_txt_heading">
                <h1>TOURMASTER</h1>
              </div>
              <div className="new_arrival_slider_inner_third_txt_content">
                <span>Riding Boots</span>
              </div>
              <div className="new_arrival_slider_inner_third_txt_shop">
                <span>SHOP NOW</span>
              </div>
            </div>
          </div>
          <div className="new_arrival_slider_inner_fourth">
            <div className="new_arrival_slider_inner_fourth_img">
              <img src="/street.png" alt="" />
            </div>
            <div className="new_arrival_slider_inner_fourth_txt">
              <div className="new_arrival_slider_inner_fourth_txt_company">
                <span>KORDA</span>
              </div>
              <div className="new_arrival_slider_inner_fourth_txt_heading">
                <h1>STREET 2.0 & AERO</h1>
              </div>
              <div className="new_arrival_slider_inner_fourth_txt_content">
                <span>Everyday Riding Gloves</span>
              </div>
              <div className="new_arrival_slider_inner_fourth_txt_shop">
                <span>SHOP NOW</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="new_arrival_slider_outer">
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination]} //,Navigation => for enable arrow
          className="new_arrival_slider_inner"
        >
          <SwiperSlide>
            <div className="new_arrival_slider_inner_first">
              <div className="new_arrival_slider_inner_first_img">
                <img src="/korda_jacket.png" alt="" />
              </div>
              <div className="new_arrival_slider_inner_first_txt">
                <div className="new_arrival_slider_inner_first_txt_company">
                  <span>KORDA</span>
                </div>
                <div className="new_arrival_slider_inner_first_txt_heading">
                  <h1>EDGE 2.0</h1>
                </div>
                <div className="new_arrival_slider_inner_first_txt_content">
                  <span>Riding Jacket</span>
                </div>
                <div className="new_arrival_slider_inner_first_txt_shop">
                  <span>SHOP NOW</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="new_arrival_slider_inner_second">
              <div className="new_arrival_slider_inner_second_img">
                <img src="/motorcycle_helmet.png" alt="" />
              </div>
              <div className="new_arrival_slider_inner_second_txt">
                <div className="new_arrival_slider_inner_second_txt_heading">
                  <h1>NHK</h1>
                </div>
                <div className="new_arrival_slider_inner_second_txt_content">
                  <span>Motorcycle Helmets</span>
                </div>
                <div className="new_arrival_slider_inner_second_txt_shop">
                  <span>SHOP NOW</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="new_arrival_slider_inner_third">
              <div className="new_arrival_slider_inner_third_img">
                <img src="/tourMaster.png" alt="" />
              </div>
              <div className="new_arrival_slider_inner_third_txt">
                <div className="new_arrival_slider_inner_third_txt_company">
                  <span>KORDA</span>
                </div>
                <div className="new_arrival_slider_inner_third_txt_heading">
                  <h1>TOURMASTER</h1>
                </div>
                <div className="new_arrival_slider_inner_third_txt_content">
                  <span>Riding Boots</span>
                </div>
                <div className="new_arrival_slider_inner_third_txt_shop">
                  <span>SHOP NOW</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="new_arrival_slider_inner_fourth">
              <div className="new_arrival_slider_inner_fourth_img">
                <img src="/street.png" alt="" />
              </div>
              <div className="new_arrival_slider_inner_fourth_txt">
                <div className="new_arrival_slider_inner_fourth_txt_company">
                  <span>KORDA</span>
                </div>
                <div className="new_arrival_slider_inner_fourth_txt_heading">
                  <h1>STREET 2.0 & AERO</h1>
                </div>
                <div className="new_arrival_slider_inner_fourth_txt_content">
                  <span>Everyday Riding Gloves</span>
                </div>
                <div className="new_arrival_slider_inner_fourth_txt_shop">
                  <span>SHOP NOW</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="extra_last_attribute">
        <div className="extra_last_attribute_inner">
          <div className="extra_last_attribute_inner_left_side">
            <div className="extra_last_attribute_inner_left_img">
              <img src="/tourMaster_last.png" alt="" />
              <div className="extra_last_attribute_inner_left_side_content_border_container">
                <div className="extra_last_attribute_inner_left_side_content_border_container_inner_content">
                  <div className="extra_last_attribute_inner_left_side_content_border_container_inner_content_first">
                    <span>KORDA</span>
                  </div>
                  <div className="extra_last_attribute_inner_left_side_content_border_container_inner_content_seccond">
                    <h1>TOURMASTER</h1>
                  </div>
                  <div className="extra_last_attribute_inner_left_side_content_border_container_inner_content_third">
                    <span>Just Launched</span>
                  </div>
                  <div className="extra_last_attribute_inner_left_side_content_border_container_inner_content_fourth">
                    <span>SHOP NOW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="extra_last_attribute_inner_right_side">
            <div className="extra_last_attribute_inner_right_img">
              <img src="/targo.png" alt="" />
              <div className="extra_last_attribute_inner_right_side_content_border_container">
                <div className="extra_last_attribute_inner_right_side_content_border_container_inner_content">
                  <div className="extra_last_attribute_inner_right_side_content_border_container_inner_content_first">
                    <span>MY TARGO</span>
                  </div>
                  <div className="extra_last_attribute_inner_right_side_content_border_container_inner_content_seccond">
                    <h1>WINTER SPECIAL OFFER</h1>
                  </div>
                  <div className="extra_last_attribute_inner_right_side_content_border_container_inner_content_third">
                    <span>Now available in just Rs. 3,999!</span>
                  </div>
                  <div className="extra_last_attribute_inner_right_side_content_border_container_inner_content_fourth">
                    <span>SHOP TARGO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="brands_main_outer_container">
        <div className="brands_main_inner_container_first">
          <div className="brands_main_inner_container_first_img">
            <img src="/mt_helmet.png" alt="" />
          </div>
          <div className="brands_main_inner_container_first_content">
            <div className="brands_main_inner_container_first_content_head_up">
              <span>ECE, DOT & ISI CERTFIED</span>
            </div>
            <div className="brands_main_inner_container_first_content_heading">
              <h1>MT HELMETS</h1>
            </div>
            <div className="brands_main_inner_container_first_content_head_down">
              <span>SHOP MT</span>
            </div>
          </div>
        </div>
        <div className="brands_main_inner_container_second">
          <div className="brands_main_inner_container_second_img">
            <img src="/motorcycle_lifestyle.png" alt="" />
          </div>
          <div className="brands_main_inner_container_second_content">
            <div className="brands_main_inner_container_second_content_head_up">
              <span>MOTORCYCLE LIFESTYLE</span>
            </div>
            <div className="brands_main_inner_container_second_content_heading">
              <h1>KORDA</h1>
            </div>
            <div className="brands_main_inner_container_second_content_head_down">
              <div className="brands_main_inner_container_second_content_head_down_first">
                <span>SHOP THIS</span>
              </div>
              <div className="brands_main_inner_container_second_content_head_down_second">
                <span>SHOP KORDA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="brands_main_inner_container_third">
          <div className="brands_main_inner_container_third_img">
            <img src="/nkh_helmet.png" alt="" />
          </div>
          <div className="brands_main_inner_container_third_content">
            <div className="brands_main_inner_container_third_content_heading">
              <h1>NKH HELMETS</h1>
            </div>
            <div className="brands_main_inner_container_third_content_head_down">
              <span>SHOP NHK</span>
            </div>
          </div>
        </div>
        <div className="brands_main_inner_container_fourth">
          <div className="brands_main_inner_container_fourth_img">
            <img src="/axxis_helmet.png" alt="" />
          </div>
          <div className="brands_main_inner_container_fourth_content">
            <div className="brands_main_inner_container_fourth_content_heading">
              <h1>AXXIS HELMETS</h1>
            </div>
            <div className="brands_main_inner_container_fourth_content_head_down">
              <span>SHOP AXXIS</span>
            </div>
          </div>
        </div>
        <div className="brands_main_inner_container_five">
          <div className="brands_main_inner_container_five_img">
            <img src="/midland.png" alt="" />
          </div>
          <div className="brands_main_inner_container_five_content">
            <div className="brands_main_inner_container_five_content_head_up">
              <span>DESIGNED IN EUROPE</span>
            </div>
            <div className="brands_main_inner_container_five_content_heading">
              <h1>MIDLAND</h1>
            </div>
            <div className="brands_main_inner_container_five_content_heading_extra">
              <span>Bluetooth Communication System</span>
            </div>
            <div className="brands_main_inner_container_five_content_head_down">
              <span>SHOP MIDLAND</span>
            </div>
          </div>
        </div>
        <div className="brands_main_inner_container_six">
          <div className="brands_main_inner_container_six_img">
            <img src="/macna.png" alt="" />
          </div>
          <div className="brands_main_inner_container_six_content">
            <div className="brands_main_inner_container_six_content_head_up">
              <span>TECHNICAL APPAREL</span>
            </div>
            <div className="brands_main_inner_container_six_content_heading">
              <h1>MACNA</h1>
            </div>
            <div className="brands_main_inner_container_six_content_heading_extra">
              <span>From Netherlands</span>
            </div>
            <div className="brands_main_inner_container_six_content_head_down">
              <span>SHOP MACNA</span>
            </div>
          </div>
        </div>
        <div className="brands_main_inner_container_seven">
          <div className="brands_main_inner_container_seven_img">
            <img src="/ryo_riding_boot.png" alt="" />
          </div>
          <div className="brands_main_inner_container_seven_content">
            <div className="brands_main_inner_container_seven_content_head_up">
              <h1>RYO</h1>
            </div>
            <div className="brands_main_inner_container_seven_content_heading">
              <span>Riding Boots</span>
            </div>
            <div className="brands_main_inner_container_seven_content_head_down">
              <div className="brands_main_inner_container_seven_content_head_down_first">
                <span>SHOP RYO</span>
              </div>
              <div className="brands_main_inner_container_seven_content_head_down_second">
                <span>SHOP ALL</span>
              </div>
            </div>
          </div>
        </div>
        <div className="brands_main_inner_container_eight">
          <div className="brands_main_inner_container_eight_img">
            <img src="/forma_performance_boot.png" alt="" />
          </div>
          <div className="brands_main_inner_container_eight_content">
            <div className="brands_main_inner_container_eight_content_head_up">
              <h1>FORMA</h1>
            </div>
            <div className="brands_main_inner_container_eight_content_heading">
              <span>Performance Boots</span>
            </div>
            <div className="brands_main_inner_container_eight_content_head_down">
              <span>SHOP FORMA</span>
            </div>
          </div>
        </div>
        <div className="brands_main_inner_container_nine">
          <div className="brands_main_inner_container_nine_img">
            <img src="/hjc_helmet.png" alt="" />
          </div>
          <div className="brands_main_inner_container_nine_content">
            <div className="brands_main_inner_container_nine_content_heading">
              <h1>HJC HELMETS</h1>
            </div>
            <div className="brands_main_inner_container_nine_content_head_down">
              <span>SHOP HJC</span>
            </div>
          </div>
        </div>
      </div>
      <div className="why_powersports">
        <div className="why_powersports_heading">
          <h1>WHY POWERSPORTS?</h1>
        </div>
        <div className="why_powersports_container">
          <div className="why_powersports_left">
            <div className="why_powersports_left_icon">
              <LiaShippingFastSolid fontSize="larger" />
            </div>
            <div className="why_powersports_left_head">
              <span>FREE SHIPPING</span>
            </div>
            <div className="why_powersports_left_content">
              <span>We offer free shipping across India on all orders.</span>
            </div>
          </div>
          <div className="why_powersports_middle">
            <div className="why_powersports_middle_icon">
              <GoShieldCheck />
            </div>
            <div className="why_powersports_middle_head">
              <span>GENUINE PRODUCTS</span>
            </div>
            <div className="why_powersports_middle_content">
              <span>
                We are the sole distributors in India for the brands we
                represent. So, all the products sold by us are genuine.
              </span>
            </div>
          </div>
          <div className="why_powersports_right">
            <div className="why_powersports_right_icon">
              <FaRegThumbsUp />
            </div>
            <div className="why_powersports_right_head">
              <span>WARRAANTY</span>
            </div>
            <div className="why_powersports_right_content">
              <span>All our products carry 6 months to 2-years warranty.</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home_body;
