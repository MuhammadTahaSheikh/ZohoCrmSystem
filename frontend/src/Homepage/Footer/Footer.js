import React, { useState } from "react";
import axios from "axios";
import "./../Footer/Footer.css";
import icon1 from "./../../Assets/Link.png";
import icon2 from "./../../Assets/twitter Link.png";
import icon3 from "./../../Assets/insta Link.png";
import icon4 from "./../../Assets/linkedin Link.png";
import arrow from "./../../Assets/arrow email.png";
import { Link } from "react-router-dom";
import NotificationDisplay from "../../NotificationDisplay/NotificationDisplay";

function Footer() {
  const [email, setEmail] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const handleClick = () => {
    localStorage.removeItem("selected_services");
    localStorage.removeItem("integration_id");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailSubmit = async () => {
    try {
      const response = await axios.post("/api/subscription-emails", { email });
      setNotificationMessage(response.data.message);
      setTimeout(() => {
        setNotificationMessage("");
      }, 4000);
      setEmail("");
    } catch (error) {
      setNotificationMessage("Error creating subscription email");
      setTimeout(() => {
        setNotificationMessage("");
      }, 4000);
    }
  };

  return (
    <>
      <>
        {notificationMessage && (
          <NotificationDisplay message={notificationMessage} />
        )}
      </>
      <div className="main_div_footer">
        <div className="row p-0 m-0">
          <div className="col-lg-2 col-md-2 col-sm-1 col-1"></div>

          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="row m-0 p-0">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <p className="heading_overview">Overview</p>
                <p className="para_overview">
                  Business Consulting optimizes standing manufactured products
                  and installation synergy. Professionally predominate why
                  professional business
                </p>
                <div className="d-flex flex-row">
                  <img
                    src={icon1}
                    className="icon_social_links"
                    alt="Social Icon"
                  />
                  <img
                    src={icon2}
                    className="icon_social_links"
                    alt="Social Icon"
                  />
                  <img
                    src={icon3}
                    className="icon_social_links"
                    alt="Social Icon"
                  />
                  <img
                    src={icon4}
                    className="icon_social_links"
                    alt="Social Icon"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <p className="heading_overview">Overview</p>
                <Link to="/">
                  <p className="para_overview" onClick={handleClick}>
                    Home
                  </p>
                </Link>
                <Link to="/aboutus">
                  <p className="para_overview" onClick={handleClick}>
                    About Us
                  </p>
                </Link>
                <Link to="/blogs">
                  <p className="para_overview" onClick={handleClick}>
                    Blogs
                  </p>
                </Link>
                <Link to="/integrations">
                  <p className="para_overview" onClick={handleClick}>
                    Integrations
                  </p>
                </Link>

                <p className="para_overview" onClick={handleClick}>
                  Privacy Policy
                </p>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <p className="heading_overview">Our Support</p>
                <p className="para_overview">Contact Us</p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <p className="heading_overview">Newsletter</p>
                <p className="para_overview">
                  Subscribe Our Newsletter & Get More
                </p>
                <input
                  className="input_style_email_footer"
                  placeholder="info@gmail.com"
                  value={email}
                  onChange={handleEmailChange}
                />
                <div className="d-flex flex-row" onClick={handleEmailSubmit}>
                  <p className="para_subscribe" >
                    Subscribe Now
                  </p>
                  <img
                    src={arrow}
                    className="arrow_subscribe"
                    alt="Subscribe Arrow"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-1 col-1"></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
