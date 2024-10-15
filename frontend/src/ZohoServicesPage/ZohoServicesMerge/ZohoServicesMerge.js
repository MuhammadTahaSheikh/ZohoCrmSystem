import React, { useEffect, useState } from "react";
import NavbarServices from "../NavbarServices/NavbarServices";
import ZohoServicesShow from "../ZohoServicesShow/ZohoServicesShow";
import GetinTouch from "../../Homepage/GetinTouch/GetinTouch";
import Footer from "../../Homepage/Footer/Footer";
import Footerend from "../../Homepage/Footerend/Footerend";
import Navbar from "../../Homepage/Navbar_homepage/Navbar";

function ZohoServicesMerge() {
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
      <NavbarServices />
      <ZohoServicesShow />
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

export default ZohoServicesMerge;
