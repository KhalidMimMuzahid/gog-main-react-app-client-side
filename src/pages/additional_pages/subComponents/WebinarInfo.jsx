import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

function WebinarInfo({ webinarInfo, heading }) {
  return (
    <div className="webinarinfo rounded-4 text-start mx-auto">
      {heading && <h2 className="mb-4">{heading}</h2>}
      {webinarInfo.map((element, index) => (
        <div className="d-flex align-items-center mb-4" key={index}>
          <BsPatchCheckFill color="#11A344" size={20} className="me-3" />
          <p className="mb-0 text-wrap" style={{width: "100%"}}>{element}</p>
        </div>
      ))}
    </div>
  );
}

export default WebinarInfo;
