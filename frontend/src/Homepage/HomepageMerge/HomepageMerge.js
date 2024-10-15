import React, { useEffect, useState } from "react";
import Navbar from "../Navbar_homepage/Navbar";
import WorkLife from "../WorkLife/WorkLife";
import GetYourFreeoffer from "../GetYourFreeoffer/GetYourFreeoffer";
import LogoTransition from "../LogoTransition/LogoTransition";
import Usersglobally from "../Usersglobally/Usersglobally";
import Privacy from "../PrivacyResponsibility/Privacy";
import CorevaluesandPrinciple from "../CorevaluesandPrinciple/CorevaluesandPrinciple";
import GetinTouch from "../GetinTouch/GetinTouch";
import Footer from "../Footer/Footer";
import Footerend from "../Footerend/Footerend";

function HomepageMerge() {
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
      <WorkLife />
      <GetYourFreeoffer />
      <LogoTransition />
      <Usersglobally />
      <Privacy />
      <CorevaluesandPrinciple />
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

export default HomepageMerge;
