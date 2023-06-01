import React from "react";

function CertificationSection() {
  return (
    <div className="mx-auto certificate-section">
      <div className="row align-items-center gap-md-5 gap-lg-0">
        <div className="col-lg-6 col-md-12">
          <img
            src={require("../../../assets/images/additional_images/certificate.png")}
            alt="certificate image"
            className="certificate-img"
          />
        </div>
        <div className="text-start col-lg-6 col-md-12">
          <div>
            <h1 style={{ color: "#D1FFD0" }}>Student</h1>
            <p>
              Receive an official certificate signed by your mentor vouching
              that you've completed the workshop and validate your learning with
              shareable proof.
            </p>
          </div>
          <div className="mt-5">
            <h1 style={{ color: "#D1FFD0" }}>Show it off!</h1>
            <p>
              Flaunt your Geeks of Gurukul Certificate on your CV or your
              LinkedIn and wow prospective employers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificationSection;
