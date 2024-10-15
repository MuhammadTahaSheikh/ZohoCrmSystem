import React from "react";
import "./../Footerend/Footerend.css";
import logo from "./../../Assets/zoho logo.png";
function Footerend() {
  return (
    <div className="main_div_end_footer">
      <div className="row m-0 p-0">
        <div className="col-lg-2 col-md-2 col-sm-12 col-12"></div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
          <div className="d-flex justify-content-between p-0 m-0">
            <img src={logo} className="logo_zoho_footer" />
            <div className="d-flex flex-row">
              <p className="black_para_footer">© 2023</p>
              <p className="red_para_footer">ZOHO CRM Systems </p>
              <p className="black_para_footer">all rights reserved. </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12 col-12"></div>
      </div>
    </div>
  );
}

export default Footerend;
