import React from "react";

function PricingCard() {
  return (
    <div className="col-lg-5 col-md-12">
      <div
        style={{ border: "1px solid #96D666", backgroundColor: "#213015" }}
        className="px-3 py-5 rounded-2"
      >
        <h4>ChatGPT Workshop Launch Offer {"(Save 900)"}</h4>
        <h1 className="my-4">
          ₹199 <s className="fs-4">₹999</s>
        </h1>
        <p>
          Take advantage of the discounted price of 499 and save a total of INR
          1,500
        </p>
        <p>The launch offer expires on midnight of: May 20, 2023</p>
        <button
          type="button"
          className="rounded-2 border-0 p-2 mt-4 mb-3 pricingBtn"
          style={{backgroundColor: "#A6EF67", width: "100%"}}
        >
          Enroll Now
        </button>
        <p style={{ color: "#848484" }}>
          Note: No exceptions will be made beyond the offer expiry date. Prices
          will increase and no free bonuses will be available.
        </p>
      </div>
    </div>
  );
}

export default PricingCard;