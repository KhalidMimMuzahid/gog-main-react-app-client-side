import React from "react";

function InfoCard({ item }) {
  return (
    <div
      className="p-3 rounded-3 mb-3"
      style={{ border: "1px solid #96D666", backgroundColor: "#213015" }}
    >
      <p className="mb-0 text-start fw-normal">{item}</p>
    </div>
  );
}

export default InfoCard;
