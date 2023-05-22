import React from "react";
import { pricingBenifits } from "../../data";
import { BsPatchCheckFill } from "react-icons/bs";

function PricingBenifits() {
  return (
    <div className="col-lg-7 col-md-12">
      <div
        className="pricing-benifits-container text-start"
      >
      <h4 className="mb-4">What you get</h4>
        {pricingBenifits.map((element, index) => (
          <div className="d-flex align-items-center mb-4" key={index}>
            <BsPatchCheckFill color="#11A344" size={20} className="me-3" />
            <p className="mb-0 text-wrap" style={{width: "100%"}}>{element}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingBenifits;
