import React from "react";
import "./../Navbar_homepage/Navbar.css";
import zoho from "./../../Assets/zoho logo.png";
import { NavLink } from "react-router-dom";
function Navbar() {
  const handleClick = () => {
    localStorage.removeItem("selected_services");
    localStorage.removeItem("integration_id");
  };

  return (
    <div className="row p-0 m-0">
      <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
      <div className="col-lg-10 col-md-10 col-sm-10 col-10 m-0 p-0">
        <nav class="navbar navbar-expand-lg navbar">
          <NavLink to="/" class="navbar-brand">
            <img src={zoho} className="zoho_logo_style"  onClick={handleClick}/>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
            <form class="form-inline my-2 my-lg-0">
              <NavLink to="/">
                <p className="navbar_items "  onClick={handleClick}>Home</p>
              </NavLink>

              <NavLink to="/aboutus">
                <p className="navbar_items "  onClick={handleClick}>About us</p>
              </NavLink>

              <NavLink to="/blogs">
                <p className="navbar_items " onClick={handleClick}>Blogs</p>
              </NavLink>

              <NavLink to="/integrations">
                <p className="navbar_items " onClick={handleClick}>Integrations</p>
              </NavLink>

              <NavLink to="/whyus">
                <button class="btn_signup" type="submit"  onClick={handleClick}>
                  Why us
                </button>
              </NavLink>
            </form>
          </div>
        </nav>
     
      </div>
      <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
    </div>
  );
}

export default Navbar;
