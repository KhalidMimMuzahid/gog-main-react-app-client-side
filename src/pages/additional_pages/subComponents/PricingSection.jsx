import React from "react";
import PricingCard from "./PricingComponents/PricingCard";
import PricingBenifits from "./PricingComponents/PricingBenifits";

function PricingSection() {
  return (
    <div>
      <div className="row text-start mx-auto align-items-center pricing-section" >
        <PricingCard />
        <PricingBenifits />
      </div>
    </div>
  );
}

export default PricingSection;
