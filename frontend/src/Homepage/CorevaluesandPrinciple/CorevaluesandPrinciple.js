import React from "react";
import "./../CorevaluesandPrinciple/CorevaluesandPrinciple.css";
import icon from "./../../Assets/coreprincipleicon.svg";
function CorevaluesandPrinciple() {
  return (
    <div className="main_div_CorevaluesandPrinciple">
      <p className="heading_corevalues">
        The core values and principles that drive us
      </p>
      <div className="row m-0 p-0">
        <div className="col-lg-2 col-md-2 col-sm-1 col-1"></div>
        <div className="col-lg-8 col-md-8 col-sm-10 col-10">
          <div className="row m-0 p-0">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <p className="heading_longterm">Long-term commitment</p>
              <p className="para_longterm">
                25+ years of running a profitable organization gives us a good
                sense of challenges that a growing business faces. We take pride
                in running a sustainable business that’s powered by you, our
                customer.
              </p>
              <p className="heading_longterm">
                Focus on research & development
              </p>
              <p className="para_longterm">
                Software is our craft and we back it up with our relentless
                investments in R&D. So much so that we prefer to own the entire
                technology stack, including running our data centers globally.
              </p>
              <p className="heading_longterm">Customer-first philosophy</p>
              <p className="para_longterm">
                In all these years, it's our customers' trust and goodwill that
                has helped us establish a strong position in the market. No
                matter the size of your business, we're here to help you grow.In
                all these years, it's our customers' trust and goodwill that has
                helped us establish a strong position in the market. No matter
                the size of your business, we're here to help you grow.
              </p>
            </div>
            <div className="col-lg-1 col-md-12 col-sm-12 col-12"></div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="d-flex justify-content-end">
                <img src={icon} className="icon_style_core" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-1 col-1"></div>
      </div>
    </div>
  );
}

export default CorevaluesandPrinciple;
