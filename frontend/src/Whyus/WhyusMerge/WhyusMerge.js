import React, { useEffect, useState } from "react";
import Navbar from "../../Homepage/Navbar_homepage/Navbar";
import WhyusNavbar from "../WhyusNavbar/WhyusNavbar";
import Footerend from "../../Homepage/Footerend/Footerend";
import Footer from "../../Homepage/Footer/Footer";
import GetinTouch from "../../Homepage/GetinTouch/GetinTouch";
import LogoTransition from "../../Homepage/LogoTransition/LogoTransition";
import GetYourFreeoffer from "../../Homepage/GetYourFreeoffer/GetYourFreeoffer";
import WhiteDiv from "../WhiteDiv/WhiteDiv";

function WhyusMerge() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
      scrollToTop();
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }, []);
  return (
    <div>
      <Navbar />
      <WhyusNavbar />
      <WhiteDiv />
      <GetYourFreeoffer />
      <LogoTransition />
      <GetinTouch />
      <Footer />
      <Footerend />
    
      <>
        {isVisible && (
          <button onClick={scrollToTop} className="scroll-to-top-button">
            <span>&uarr;</span>
          </button>
        )}
      </>
    </div>
  );
}

export default WhyusMerge;
