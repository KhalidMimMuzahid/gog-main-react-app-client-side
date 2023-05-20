import React from "react";
import { BsPatchCheckFill, BsClock, BsCalendar4 } from "react-icons/bs";

function Additional() {
  return (
    <div style={{ marginTop: "70px", background: "black" }} className="pb-5">
      <div className="m-5 pt-5 px-5 text-center fw-light">
        {/* Headings */}
        <div>
          <h3 style={{ color: "#F8E163" }}>The Next gen AI tools</h3>
          <h1 style={{ color: "#D1FFD0" }} className="fw-semibold">
            ChatGPT & Beyond
          </h1>
          <p className="text-white fw-normal my-5">
            Discover how ChatGPT can spark innovative ideas, streamline your
            process & provide deeper user insights!
          </p>
        </div>
        {/* Headings */}
        {/* Timings */}
        <div className="d-flex justify-content-center">
          <div
            className="border rounded d-flex align-items-center justify-content-between py-2 px-3 me-4"
            style={{ backgroundColor: "#213015", borderColor: "#96D666" }}
          >
            <BsCalendar4 className="me-2" />
            <p className="fw-light mb-0">24 May 2023</p>
          </div>
          <div
            className="border rounded d-flex align-items-center justify-content-between py-2 px-3 ms-4"
            style={{ backgroundColor: "#213015", borderColor: "#96D666" }}
          >
            <BsClock className="me-2" />
            <p className="fw-light mb-0">2:00 PM</p>
          </div>
        </div>
        {/* Timings */}
        {/* Pictures */}
        <div className="d-flex justify-content-between align-items-center mt-5 mx-5 px-5">
          <img
            src={require("../../assets/images/additional_images/chatgptLogo.png")}
            alt="chatGPT logo"
            height={150}
          />

          <img
            src={require("../../assets/images/additional_images/card.png")}
            alt="speaker image"
            height={250}
          />
          <img
            src={require("../../assets/images/additional_images/chatgptLogo.png")}
            alt="chatGPT logo"
            height={150}
          />
        </div>
        {/* Pictures */}
      </div>
    </div>
  );
}

export default Additional;
