import React, { useEffect, useState } from "react";
import IntegrationDetailPage from "../IntegrationDetailPage/IntegrationDetailPage";
import Footer from "../../Homepage/Footer/Footer";
import Footerend from "../../Homepage/Footerend/Footerend";
import Navbar from "../../Homepage/Navbar_homepage/Navbar";
import GetinTouch from "../../Homepage/GetinTouch/GetinTouch";

function IntegrationDetailMerge() {
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
    <div className="div_combine_whyus">
      <Navbar />
      <IntegrationDetailPage />
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

export default IntegrationDetailMerge;
