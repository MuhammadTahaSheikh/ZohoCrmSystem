import React, { useEffect, useState } from "react";
import "./../Integration/Integration.css";
import ticksymbol from "./../../Assets/tickSymbol.png";
import ticksymbol1 from "./../../Assets/ticksymbol2.png";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../Homepage/Navbar_homepage/Navbar";
import Footer from "../../Homepage/Footer/Footer";
import Footerend from "../../Homepage/Footerend/Footerend";
import GetinTouch from "../../Homepage/GetinTouch/GetinTouch";

function Integration() {
  const [integrations, setIntegrations] = useState([]);

  useEffect(() => {
    getIntegrationData();
    localStorage.removeItem("selected_services");
    localStorage.removeItem("integration_id");
  }, []);

  const getIntegrationData = () => {
    axios
      .get(`api/integrations`)
      .then((res) => {
        console.log(res, "integration");
        setIntegrations(res?.data);
      })
      .catch((error) => {
        console.error("Error fetching category posts:", error);
      });
  };

  return (
    <div className="div_combine_whyus">
      <Navbar />
      <>
        <div className="main_div_contactusheader">
          <p className="headercontactus_para">INTEGRATIONS</p>
        </div>
      </>

      <div className="main_div_integration mb-5">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-1 col-1"></div>
          <div className="col-lg-8 col-md-8 col-sm-10 col-10">
            <p className="para_integration">
              What ZOHO and its integrations has to offer?
            </p>

            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                {integrations
                  .slice(0, Math.ceil(integrations.length / 2))
                  .map((data, index) => (
                    <div className="link_main_div" key={index}>
                      <Link
                        to={`/integrations/${data.id}`}
                        className="integration-link"
                      >
                        <div className="d-flex bd-highlight">
                          <div className="">
                            <img
                              src={ticksymbol}
                              alt="tick"
                              className="symboltickstyle"
                            />
                          </div>
                          <div className="">
                            <p className="int_link_para">{data.name}</p>
                          </div>
                          <div className="ms-auto">
                            <img
                              src={ticksymbol1}
                              alt="tick"
                              className="symboltickstyle"
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                {integrations
                  .slice(Math.ceil(integrations.length / 2))
                  .map((data, index) => (
                    <div className="link_main_div" key={index}>
                      <Link
                        to={`/integrations/${data.id}`}
                        className="integration-link"
                      >
                        <div className="d-flex bd-highlight">
                          <div className="">
                            <img
                              src={ticksymbol}
                              alt="tick"
                              className="symboltickstyle"
                            />
                          </div>
                          <div className="">
                            <p className="int_link_para">{data.name}</p>
                          </div>
                          <div className="ms-auto">
                            <img
                              src={ticksymbol1}
                              alt="tick"
                              className="symboltickstyle"
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-1 col-1"></div>
        </div>
      </div>

      <GetinTouch />
      <Footer />
      <Footerend />
    </div>
  );
}

export default Integration;
