import "../pages_css/footer.css";

function Footer() {
  return (
    <>
      <div className="footer_main_container">
        <div className="footer_main_container_left">
          <ul className="no-dots">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Warranty Policy</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer_main_container_right">
          <div className="footer_main_container_right_head">
            <span>SIGN UP AND SAVE</span>
          </div>
          <div className="footer_main_container_right_descrption">
            <span>
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
