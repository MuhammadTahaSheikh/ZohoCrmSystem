import React, { useState, useEffect } from "react";
import "./../SignInPage/SignIn.css";
import email_icon from "./../Assets/email_icon.png";
import password_icon from "./../Assets/password_icon.png";
import eye_icon from "./../Assets/eye_icon.png";
import non_seen_eye_icon from "./../Assets/non_seen_eye_icon.png";
import { Link, useNavigate } from "react-router-dom";

import NotificationDisplay from "../NotificationDisplay/NotificationDisplay";
import Navbar from "../Homepage/Navbar_homepage/Navbar";
import Loader from "../Loader/Loader";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Set loading to true when the form is being submitted
    setLoading(true);

    try {
      if (
        email === "blog-admin@zohocrmsystems.com" &&
        password === "Password12@"
      ) {
        const token = "abcdefghijklmnopqrstuvwxyz";
        localStorage.setItem("token", token);
        navigate("/dashboard");
        setEmail("");
        setPassword("");
        setLoading(false);
      } else {
        setLoading(false);
        setNotificationMessage("invalid email or password");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
      }
    } catch (error) {
      setLoading(false);
      setNotificationMessage("invalid email or password");
      setTimeout(() => {
        setNotificationMessage("");
      }, 4000);
    } finally {
      setLoading(false);
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <Navbar />
      <div className="service_back">
      </div>
      <div className="container">
        <div className="main_div_signin">
          <div className="row">
            <div className="col-lg-2 col-md-12 col-12"></div>
            <div className="col-lg-8 col-md-12 col-12">
              <div className="main_div_form_signin">
                <div className="form_main_div_sign_in">
                  <form onSubmit={handleLogin}>
                    <div className="padding_div_form_signin">
                      <p className="heading_in_form_sign_in">Login</p>

                      <div className="input_style_firstname_signin mt-5">
                        <div className="d-flex flex-row">
                          <img
                            src={email_icon}
                            className=""
                            alt="signininputlogo"
                          />
                          <input
                            className="input_firstname_style_signin"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email"
                          />
                        </div>
                      </div>

                      <div className="input_style_firstname_signin mt-5">
                        <div className="d-flex flex-row">
                          <img
                            src={password_icon}
                            className=""
                            alt="signininputlogo"
                          />
                          <input
                            type={passwordVisible ? "text" : "password"}
                            className="input_firstname_style_signin"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <img
                            src={passwordVisible ? non_seen_eye_icon : eye_icon}
                            className="eye_style_signin"
                            onClick={handleTogglePassword}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row-reverse"></div>
                    </div>

                    <div className="main_div_buttons_signin mt-5">
                      <button
                        className="orange_button_signin"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? <Loader /> : "Login"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-12 col-12"></div>
          </div>
        </div>

      
      </div>
      <NotificationDisplay message={notificationMessage} />
    </div>
  );
}

export default SignIn;
