import React, { useState, useEffect } from "react";
import { BsClock, BsCalendar4 } from "react-icons/bs";
import "./Additionals.css";
import { webinarInfo1, webinarInfo2 } from "./data";
import RegisterBtn from "./subComponents/RegisterBtn";
import WebinarInfo from "./subComponents/WebinarInfo";
import WhySection from "./subComponents/whyGOGSection/WhySection";
import MentorSection from "./subComponents/MentorSection";
import PricingSection from "./subComponents/PricingSection";
import Faq from "./subComponents/Faq";
import CertificationSection from "./subComponents/CertificationSection";
import moment from "moment";
import { Link } from "react-router-dom";

// console.log("styles: ", styles);

function Additional() {
  const [remainingTime, setRemainingTime] = useState("");
  const [remainingTimeMobile, setRemainingTimeMobile] = useState("");

  useEffect(() => {
    const calculateRemainingTime = () => {
      const now = moment();
      const targetDate = moment()
        .endOf("day")
        .add(1, "day")
        .set({ hour: 0, minute: 0, second: 0 });
      const duration = moment.duration(targetDate.diff(now));

      if (duration.asMilliseconds() <= 0 || targetDate.isAfter("2023-06-06")) {
        setRemainingTime("Offer expired");
        setRemainingTimeMobile("Offer expired");
        return;
      }

      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      setRemainingTime(`${hours} hrs ${minutes} mins ${seconds} s`);
      setRemainingTimeMobile(`${hours}:${minutes}:${seconds}`);
    };

    calculateRemainingTime();

    const interval = setInterval(calculateRemainingTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginTop: "70px", background: "black" }} className="pb-5">
      <div className="mobile-price-box p-4 text-white">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p className="fs-2 mb-0 animated-text">
              ₹99 <s className="fs-5">₹999</s>
            </p>
            <p className="mb-0">
              {remainingTimeMobile !== "Offer expired" && "Offer Ends in "}
              <strong className="fs-5">{remainingTimeMobile}</strong>
            </p>
          </div>
          <div>
            <Link target="_blank" to="https://forms.gle/y7uqvSjpy7fS8P9g9">
              <button
                type="button"
                className="text-dark px-3 py-2 border-0 rounded fw-semibold"
                style={{ backgroundColor: "#A6EF67" }}
              >
                Register now!
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="m-5 pt-5 text-center fw-light">
        {/* Headings */}
        <div>
          <h3 style={{ color: "#F8E163" }}>The Next gen AI tools</h3>
          <h1 style={{ color: "#D1FFD0" }} className="fw-semibold">
            ChatGPT & AI Bard
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
            className="dt-box rounded d-flex align-items-center justify-content-between py-2 px-3 me-4"
            style={{ backgroundColor: "#213015", border: "1px solid #96D666" }}
          >
            <BsCalendar4 className="me-2" />
            <p className="fw-light mb-0">20 June 2023</p>
          </div>
          <div
            className="dt-box rounded d-flex align-items-center justify-content-between py-2 px-3 ms-4"
            style={{ backgroundColor: "#213015", border: "1px solid #96D666" }}
          >
            <BsClock className="me-2" />
            <p className="fw-light mb-0">6:00 PM</p>
          </div>
        </div>
        {/* Timings */}
        {/* Pictures */}
        <div className="d-flex justify-content-center align-items-center mt-5">
          <img
            src={require("../../assets/images/additional_images/chatgptLogo.png")}
            alt="chatGPT logo"
            className="d-none d-sm-block"
            height={150}
          />

          <img
            src={require("../../assets/images/additional_images/card.png")}
            alt="speaker image"
            height={250}
            className="mx-5 px-5"
          />
          <img
            src={require("../../assets/images/additional_images/chatgptLogo.png")}
            alt="chatGPT logo"
            height={150}
            className="d-none d-sm-block"
          />
        </div>
        {/* Pictures */}
        {/* Register button */}
        <RegisterBtn remainingTime={remainingTime} />
        {/* Register button */}
        <h2 className="fw-semibold my-5 py-5">
          Here's how it works over the
          <span style={{ color: "#A6EF67" }}> 2 hours</span>
        </h2>
        {/* Webinar Info */}
        <WebinarInfo webinarInfo={webinarInfo1} heading={"2 Hour Webinar"} />
        {/* Webinar Info */}
        {/* Register button */}
        <RegisterBtn remainingTime={remainingTime} />
        {/* Register button */}
        <h2 className="fw-semibold my-5 py-5">
          WHY Should you attend the
          <span style={{ color: "#A6EF67" }}> Workshop?</span>
        </h2>
        {/* Webinar Info */}
        <WebinarInfo webinarInfo={webinarInfo2} />
        {/* Webinar Info */}
        <h2 className="fw-semibold my-5 py-5">Who is this Webinar for?</h2>
        {/* Webinar for */}
        <div className="text-start mx-auto webinar-for">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="d-flex align-items-center">
                <img
                  src={require("../../assets/images/additional_images/mascot1.png")}
                  alt="mascot image"
                  className="d-none d-sm-block"
                />
                <div className="d-flex flex-column">
                  <h3 className="fw-semibold mb-4">Students</h3>
                  <p className="infoPara">
                    Individuals aiming for a career in Tech, who want to acquire
                    the latest skills in AI and differentiate themselves in the
                    job market.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="d-flex align-items-center">
                <img
                  src={require("../../assets/images/additional_images/mascot2.png")}
                  alt="mascot image"
                  className="d-none d-sm-block"
                />
                <div className="d-flex flex-column">
                  <h3 className="fw-semibold mb-4">Techies</h3>
                  <p className="">
                    This webinar is perfect for anyone who wants to learn more
                    about the latest AI tools and how they can be used to
                    improve their lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Webinar for */}
        {/* Register button */}
        <RegisterBtn remainingTime={remainingTime} />
        {/* Register button */}
        <h2 className="fw-semibold my-5 py-5">Why Geeks of Gurukul?</h2>
        {/* Why GOG section */}
        <WhySection />
        {/* Why GOG section */}
        <h2 className="fw-semibold my-5 py-5">
          Meet your
          <span style={{ color: "#A6EF67" }}> Mentor</span>
        </h2>
        {/* Mentor description section */}
        <MentorSection />
        {/* Mentor description section */}
        <h2 className="fw-semibold my-5 py-5" style={{ color: "#A6EF67" }}>
          Certification
        </h2>
        {/* Certificatio section */}
        <CertificationSection />
        {/* Certificatio section */}
        <h2 className="fw-semibold my-5 py-5">Enroll Now</h2>
        {/* Pricing section */}
        <PricingSection />
        {/* Pricing section */}
        <h2 className="fw-semibold my-5 py-5">Frequently Asked Questions</h2>
        {/* FAQ section */}
        <Faq />
        {/* FAQ section */}
      </div>
    </div>
  );
}

export default Additional;
