import React, { useEffect, useState } from "react";
import "./../ZohoServicesShow/ZohoServicesShow.css";
import axios from "axios";
import creditpay from "./../../Assets/creditpay.png";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_live_51PWHp7I0Wr8FZubbsshXcAS6mWOcrhYsAtXvcDkAQ3c50MFw6y1jQnpNoctRycb3hUC8mETNpsb7P7HE1OSBwd7s00fWhTUW53"
);

function ZohoServicesShow() {
  const [salesforceServices, setSalesforceServices] = useState([]);
  const [checkedServices, setCheckedServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedIntegrationId = JSON.parse(
      localStorage.getItem("integration_id")
    );
    if (savedIntegrationId) {
      setCheckedServices([savedIntegrationId]);
    }
    getsalesforceServicesData();
  }, []);

  useEffect(() => {
    // Calculate total price whenever checkedServices changes
    const price = checkedServices.reduce((acc, serviceId) => {
      const service = salesforceServices.find((s) => s.id === serviceId);
      return acc + (service ? parseFloat(service.price) : 0);
    }, 0);
    setTotalPrice(price);

    // Store the names of selected services in localStorage
    const serviceNames = checkedServices.map((serviceId) => {
      const service = salesforceServices.find((s) => s.id === serviceId);
      return service ? service.name : "";
    });
    localStorage.setItem("selected_services", JSON.stringify(serviceNames));
  }, [checkedServices, salesforceServices]);

  const getsalesforceServicesData = () => {
    axios
      .get(`api/integrations`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
          // Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setSalesforceServices(res.data);
      })
      .catch((error) => {
        console.error("Error fetching services data:", error);
      });
  };

  const handleCheckboxChange = (id) => {
    if (checkedServices.includes(id)) {
      setCheckedServices(
        checkedServices.filter((serviceId) => serviceId !== id)
      );
    } else {
      setCheckedServices([...checkedServices, id]);
    }
  };

  const handlePayment = async () => {
    const name = localStorage.getItem("selected_services");
    const payload = {
      price: totalPrice,
      name: name,
    };

    try {
      const response = await axios.post(
        "/api/create-checkout-session",
        payload
      );
      const sessionId = response.data.id;

      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error("Error redirecting to checkout:", error);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <div>
      <div className="main_div_table_astable">
        <div className="container">
          <div className="main_div_tablestriped_astable">
            <div className="d-flex justify-content-between">
              <p className="heading_table_striped_astable">ZOHO Integrations</p>
              <p className="price_standardplan_astable">
                Total: ${totalPrice}
              </p>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">No.</th>
                  <th scope="col">Integration</th>
                  <th scope="col">Price</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {salesforceServices.map((data, index) => (
                  <tr key={index}>
                    <td></td>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>${data.price}</td>
                    <td>
                      <input
                        type="checkbox"
                        id={`service_${index}`}
                        name="standardservicescharges"
                        value={data.price}
                        className="styled-checkbox"
                        checked={checkedServices.includes(data.id)}
                        onChange={() => handleCheckboxChange(data.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="container">
          <div className="d-flex justify-content-end">
            <button className="totalpaystyle" onClick={handlePayment}>
              <img
                src={creditpay}
                className="creditpaystyleicon"
                alt="paylogo"
              />
              Pay ${totalPrice}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZohoServicesShow;
