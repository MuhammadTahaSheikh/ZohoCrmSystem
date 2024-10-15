import React from "react";
import "./../LogoTransition/LogoTransition.css";
import Slider from "react-slick";
import logono1 from "./../../Assets/Facebook-Logo 2.png";
import logono2 from "./../../Assets/HP_logo_630x630.png";
import logono3 from "./../../Assets/KPMG_logo 2.png";
import logono4 from "./../../Assets/amazon-logo-s3f 2.png";
import logono5 from "./../../Assets/Logonetflix.png";
function LogoTransition() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
     <div className="main_div_logo_transition">
      <div className="row p-0 m-0">
        <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
        <div className="col-lg-10 col-md-10 col-sm-10 col-10">
          <Slider {...settings}>
            <div>
              <img
                className="d-flex justify-content-center"
                src={logono1}
                alt="transitionlogo"
              />
            </div>
            <div>
              <img
                 className="d-flex justify-content-center"
                src={logono2}
                alt="transitionlogo"
              />
            </div>
            <div>
              <img
            className="d-flex justify-content-center"
                src={logono3}
                alt="transitionlogo"
              />
            </div>
            <div>
              <img
            className="d-flex justify-content-center"
                src={logono4}
                alt="transitionlogo"
              />
            </div>
            <div>
              <img
                 className="d-flex justify-content-center"
                src={logono5}
                alt="transitionlogo"
              />
            </div>

            <div>
              <img
                 className="d-flex justify-content-center"
                src={logono1}
                alt="transitionlogo"
              />
            </div>
            <div>
              <img
                 className="d-flex justify-content-center"
                src={logono2}
                alt="transitionlogo"
              />
            </div>
            <div>
              <img
                 className="d-flex justify-content-center"
                src={logono3}
                alt="transitionlogo"
              />
            </div>
            <div>
              <img
                 className="d-flex justify-content-center"
                src={logono4}
                alt="transitionlogo"
              />
            </div>
            <div>
              <img
                 className="d-flex justify-content-center"
                src={logono5}
                alt="transitionlogo"
              />
            </div>
          </Slider>
        </div>
      </div>
      <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
    </div>



    <div className="main_div_blue"></div>
    </>
   
  );
}

export default LogoTransition;
