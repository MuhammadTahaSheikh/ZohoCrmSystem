import React from "react";
import "./../Usersglobally/Usersglobally.css";
import logo1 from "./../../Assets/Group 4536.png";
import logo2 from "./../../Assets/Group 4541.png";
import logo3 from "./../../Assets/Group 4542.png";
import logo4 from "./../../Assets/Group 4543.png";
import logo5 from "./../../Assets/Group 4540.png";
function Usersglobally() {
  return (
    <div className="main_div_userglobally">
      <div className="row m-0 p-0">
        <div className="col-lg-2 col-md-2 col-sm-2 col-2"></div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
          <div className="row">
            <div className="col">
              <div className="d-flex justify-content-center">
                <img src={logo1} className="img_style_userglobally" />
              </div>

              <p className="userglobally_heading">Users Globally</p>
              <p className="userglobally_heading_number">100M+</p>
            </div>

            <div className="col">
              <div className="d-flex justify-content-center">
                <img src={logo2} className="img_style_userglobally" />
              </div>
              <p className="userglobally_heading">Employees Worldwide</p>
              <p className="userglobally_heading_number">15K+</p>
            </div>

            <div className="col">
              <div className="d-flex justify-content-center">
                <img src={logo3} className="img_style_userglobally" />
              </div>
              <p className="userglobally_heading">Countries Served</p>
              <p className="userglobally_heading_number">150+</p>
            </div>

            <div className="col">
              <div className="d-flex justify-content-center">
                <img src={logo4} className="img_style_userglobally" />
              </div>
              <p className="userglobally_heading">Years in Business</p>
              <p className="userglobally_heading_number">25+</p>
            </div>

            <div className="col">
              <div className="d-flex justify-content-center">
                <img src={logo5} className="img_style_userglobally" />
              </div>
              <p className="userglobally_heading">Products</p>
              <p className="userglobally_heading_number">55+</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-2"></div>
      </div>
    </div>
  );
}

export default Usersglobally;
