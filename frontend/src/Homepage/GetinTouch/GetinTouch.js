import React, { useState } from "react";
import axios from "axios";
import "./../GetinTouch/GetinTouch.css";
import icon1 from "./../../Assets/location.png";
import icon2 from "./../../Assets/phone co.png";
import icon3 from "./../../Assets/mail co.png";
import icon4 from "./../../Assets/time co.png";
import Loader from "../../Loader/Loader";
import NotificationDisplay from "../../NotificationDisplay/NotificationDisplay";

function GetinTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [loading, setLoading] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/api/contact-us", formData)
      .then((response) => {
        setLoading(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          website: "",
          message: "",
        });
        setNotificationMessage(response.data.message);
        console.log(response.data); // handle success, e.g. show success message
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
      })
      .catch((error) => {
        setLoading(false);
        setNotificationMessage("error");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
        console.error("Error:", error); // handle error, e.g. show error message
      });
  };

  return (
    <>
      {" "}
      {notificationMessage && (
        <NotificationDisplay message={notificationMessage} />
      )}
      <div className="main_div_GetinTouch">
        <div className="row m-0 p-0">
          <div className="col-lg-2 col-md-2 col-sm-2 col-12"></div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-12">
            <div className="row m-0 p-0">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="main_div_form_getintouch">
                  <p className="heading_getintouch">Get In Touch</p>
                  <form onSubmit={handleSubmit}>
                    <div className="row m-0 p-0">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <input
                          className="input_style_getintouch"
                          placeholder="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <input
                          className="input_style_getintouch"
                          placeholder="Email Address"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="row m-0 p-0">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <input
                          className="input_style_getintouch"
                          placeholder="Phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <input
                          className="input_style_getintouch"
                          placeholder="Website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row m-0 p-0">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <textarea
                          className="textarea_style_getintouch"
                          placeholder="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="row m-0 p-0">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <button type="submit" className="btn_getintouch">
                          {loading ? <Loader /> : "Free Consultant"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-1 col-md-12 col-sm-12 col-12"></div>
              <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                <div className="main_div_companydetails">
                  <div className="d-flex flex-row">
                    <img
                      src={icon1}
                      className="companydetailicons"
                      alt="location"
                    />
                    <div>
                      <p className="heading_company">Company Location</p>
                      <p className="para_company">16 Stonefield Drive</p>
                      <p className="para_company">Waterbury, CT 06705, USA</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <img
                      src={icon2}
                      className="companydetailicons"
                      alt="phone"
                    />
                    <div>
                      <p className="heading_company">Telephone Number</p>
                      <p className="para_company">(959) 666-9597,</p>
                      <p className="para_company">(959) 666-9597,</p>
                    </div>
                  </div>

                  <div className="d-flex flex-row">
                    <img
                      src={icon3}
                      className="companydetailicons"
                      alt="email"
                    />
                    <div>
                      <p className="heading_company">Our Email Address</p>
                      <p className="para_company">yourmail@gmail.com</p>
                      <p className="para_company">yourmail@gmail.com</p>
                    </div>
                  </div>

                  <div className="d-flex flex-row">
                    <img
                      src={icon4}
                      className="companydetailicons"
                      alt="time"
                    />
                    <div>
                      <p className="heading_company">Office Time</p>
                      <p className="para_company">Mon - Fri</p>
                      <p className="para_company">(9AM - 5PM EST )</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-12"></div>
        </div>
      </div>
      <div className="white_div_getintouch"></div>
    </>
  );
}

export default GetinTouch;
