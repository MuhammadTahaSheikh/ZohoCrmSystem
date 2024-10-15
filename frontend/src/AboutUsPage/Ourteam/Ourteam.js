import React from "react";
import "./../Ourteam/Ourteam.css";
import icon1 from "./../../Assets/red.png";
import icon2 from "./../../Assets/green.png";
import icon3 from "./../../Assets/yellow.png";
import icon4 from "./../../Assets/blue.png";
function Ourteam() {
  return (
    <div className="main_div_Ourteam">
      <div className="row p-0 m-0">
        <div className="col-lg-2 col-md-1 col-sm-1 col-1"></div>
        <div className="col-lg-8 col-md-10 col-sm-10 col-10">
          <p className="ourteam_heading">Our TEAM</p>

          <div className="row p-0 m-0">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <img src={icon1} className="img_ourteam_Style" />
              <p className="red_heading_ourteam">Name</p>
              <p className="red_para_ourteam">Designation</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <img src={icon2} className="img_ourteam_Style" />
              <p className="green_heading_ourteam">Name</p>
              <p className="red_para_ourteam">Designation</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <img src={icon4} className="img_ourteam_Style" />
              <p className="blue_heading_ourteam">Name</p>
              <p className="red_para_ourteam">Designation</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <img src={icon3} className="img_ourteam_Style" />
              <p className="yellow_heading_ourteam">Name</p>
              <p className="red_para_ourteam">Designation</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-1 col-sm-1 col-1"></div>
      </div>
    </div>
  );
}

export default Ourteam;
