import React from "react";
import CountUp from 'react-countup';

function StatsSection() {
  return (
    <div className="m-5">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <p className="fw-normal fs-6">Here are some mind blowing Stats</p>
        <div className="d-flex flex-column align-items-center my-3">
            <h2 style={{color: "#4BA25D"}} className="fw-semibold fs-1">200+</h2>
            <p className="fw-semibold fs-5">Total Students</p>
        </div>
        <div className="d-flex flex-column align-items-center">
            <h2 style={{color: "#4BA25D"}} className="fw-semibold fs-1">4.7/5</h2>
            <p className="fw-semibold fs-5">Total Rating</p>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
