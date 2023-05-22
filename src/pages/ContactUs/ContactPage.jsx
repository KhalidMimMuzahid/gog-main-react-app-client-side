import React from "react";
import { BsEnvelope, BsCheckCircleFill } from "react-icons/bs";
import "./contactUs.css";
import { contactData } from "./contactData";
import { BsTelephoneForward } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { FaUniversity } from "react-icons/fa";

function ContactPage() {
  return (
    <div style={{ marginTop: "70px", background: "#EDFBE9" }} className="pb-5">
      <div className="pt-5">
        <div className="d-flex align-items-center top-section mt-2 mx-auto">
          <BsEnvelope size={20} />
          <p className="ms-3  mb-0 fs-5">Contact Us</p>
        </div>
      </div>
      <div className="row contact-row mx-auto">
        <div className="col-md-12 mt-3  col-lg-6">
          <h1 className="fw-bold">Get in touch with us</h1>
          <div className="mt-3">
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
        <div className="col-md-12 col-lg-6 bg-white rounded-2 border">
          <div className="p-3">
            <p>
              <strong>
                {" "}
                <BsTelephoneForward />{" "}
              </strong>{" "}
              <a
                target="_blnak"
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginLeft: "10px",
                }}
                href="tel:+918822791391"
              >
                {" "}
                +91 8822791391
              </a>{" "}
            </p>
            <p>
              <strong>
                <AiOutlineMail />{" "}
              </strong>{" "}
              <a
                target="_blnak"
                style={{ textDecoration: "none", color: "black",  marginLeft: "10px", }}
                href="mailto:support@geeksofgurulkul.com"
              >
                support@geeksofgurukul.com
              </a>{" "}
            </p>
            <p>
              {" "}
              <AiOutlineMail />{" "}
              <a
                target="_blnak"
                style={{ textDecoration: "none", color: "black",  marginLeft: "10px", }}
                href="mailto:admission@geeksofgurukul.com"
              >
                admission@geeksofgurukul.com
              </a>{" "}
            </p>
            <p>
            {" "}
              <FaUniversity />{" "}
              <a
                target="_blnak"
                style={{ textDecoration: "none", color: "black" ,  marginLeft: "10px",}}
                href="https://goo.gl/maps/agBCEHEkwoZXGAvd8"
              >
                394/1,1st B Cross Road,7th Block,Koramangla,Bengaluru-560030
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
