import React from "react";
import { BsEnvelope, BsCheckCircleFill } from "react-icons/bs";
import "./contactUs.css";
import { contactData } from "./contactData";

function ContactPage() {
  return (
    <div style={{ marginTop: "70px", background: "#EDFBE9" }} className="pb-5">
      <div className="pt-5">
        <div className="d-flex align-items-center top-section mx-auto">
          <BsEnvelope size={20} />
          <p className="ms-3 mb-0 fs-5">Contact Us</p>
        </div>
      </div>
      <div className="row contact-row mx-auto">
        <div className="col-md-12 col-lg-6">
          <h1 className="fw-bold">Get in touch with us</h1>
          <div>
            {contactData.map((data, index) => (
              <div className="d-flex align-items-center mb-4" key={index}>
                <BsCheckCircleFill color="#11A344" size={20} className="me-3" />
                <p className="mb-0 text-wrap" style={{ width: "100%" }}>
                  {data}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-12 col-lg-6">dads</div>
      </div>
    </div>
  );
}

export default ContactPage;
