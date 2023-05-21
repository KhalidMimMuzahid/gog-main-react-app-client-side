import React from "react";
import InfoCard from "./InfoCard";
import { whyData } from "../../data";
import StatsSection from "./StatsSection";

function WhySection() {
  return (
    <div className="mx-auto why-section">
      <div className="row align-items-center">
        {/* Info Cards section */}
        <div className="col-lg-8 col-sm-12">
          <div className="d-flex flex-column">
            {whyData.map((item, index) => (
              <InfoCard item={item} key={index} />
            ))}
          </div>
        </div>
        {/* Info Cards section */}
        {/* Stats */}
        <div className="col-lg-4 col-sm-12">
          <StatsSection />
        </div>
        {/* Stats */}
      </div>
    </div>
  );
}

export default WhySection;
