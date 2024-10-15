import React from "react";
import "./../WorkLife/WorkLife.css";
import worklife_pic from "./../../Assets/worklife_pic.png";
function WorkLife() {
  return (
    <div className="main_div_work_life">
      <div className="row p-0 m-0">
        <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
        <div className="col-lg-5 col-md-5 col-sm-10 col-10 ">
          <p className="you_life_para">Your life's</p>
          <p className="work_para">work</p>
          <p className="powered_by_life_para">powered by our life's work</p>
          <p className="para_below_heading_work">
            A unique and powerful software suite to transform the way you work.
            Designed for businesses of all sizes, built by a company that values
            your privacy
          </p>
          <button className="btn_get_start_free">Get Started for FREE</button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0 m-0">
          <img className="worklife_style_pic" src={worklife_pic} />
        </div>
      </div>
    </div>
  );
}

export default WorkLife;
