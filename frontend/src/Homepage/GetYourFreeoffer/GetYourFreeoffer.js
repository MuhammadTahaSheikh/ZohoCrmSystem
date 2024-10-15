import React from "react";
import "./../GetYourFreeoffer/GetYourFreeoffer.css";
import hr_line from "./../../Assets/hr_line.PNG";
import call_icon from "./../../Assets/i.bi-telephone-inbound.png";
import reviewimg from "./../../Assets/reviewimg.png";
import uparrow from "./../../Assets/up_arrow.png";
import downarrow from "./../../Assets/down_arrow.png";
function GetYourFreeoffer() {
  return (
    <div className="main_div_getfreeoffer">
      <div className="d-flex justify-content-center">
        <div className="free_bussiness_consultant_div">
          <div className="row p-0 m-0">
            <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-3">
              <p className="get_your_free_business_para">Get your Free</p>
              <p className="get_your_free_business_para1">Business</p>
              <p className="get_your_free_business_para1">Consultation</p>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-1">
              <img src={hr_line} className="hr_line_style" alt="HR Line" />
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-2">
              <img
                src={call_icon}
                className="call_icon_style"
                alt="Call Icon"
              />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-5 col-5">
              <p className="phone_number_para">(959) 666-9597</p>
              <p className="gmail_para">example@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-0 m-0">
        <div className="col-lg-2 col-md-3 col-sm-2 col-2"></div>
        <div className="col-lg-4 col-md-6 col-sm-8 col-8">
          <div className="d-flex flex-row">
            <img src={reviewimg} className="review_img_style" alt="Review" />
            <div>
              <p className="heading_review">Paul Grimes</p>
              <p className="para_review">
                Chief Operating Officer, Lubrication Engineers
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-1 col-1">
              <img src={downarrow} className="downarrow_style" />
            </div>
            <div className="col-lg-8 col-md-10 col-sm-10 col-8">
              <p className="comment_review">
                Lorem ipsum dolor sit amet consectetur adipiscing elit etiam
                nisl, litora hac fusce nuncse denim id proin mi, vivamus
                dictumst odio porta curae tortor condimentum primis convallis
                habitant tellus ultricies enim dictum, porta gravida blandit
                euismod auctor iaculis
              </p>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-1">
              <img src={uparrow} className="uparrow_style" />
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
          <p className="all_inonesuite_heading">All-in-one suite</p>
          <p className="all_inonesuite_heading1">ZOHO CRM Systems</p>
          <p className="all_inonesuite_heading2">
            The operating system for business
          </p>
          <p className="all_inonesuite_para">
            Run your entire business on Zoho CRM Systems with our unified cloud
            software, designed to help you break down silos between departments
            and increase organizational efficiency.
          </p>
        </div>
        <div className="col-lg-2 col-md-12 col-sm-12 col-12"></div>
      </div>
    </div>
  );
}

export default GetYourFreeoffer;
