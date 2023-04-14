import React from "react";
import Hireimg from "../../assets/images/people.png";
import Acquire from "../../components/Acquire/Acquire";
import Brands from "../../components/Brands/Brands";
import "./Hire.css";
import { Helmet } from "react-helmet";

const Hire = () => {
  return (
    <div>
      <Helmet>
        <title>Hire From Us</title>
        <meta
          name="keywords"
          content="Job openings,Employment opportunities,Careers,Recruitment services,Talent acquisition,Staffing solutions,Human resources,Job search "
        />
        <meta
          name="description"
          content="Discover exciting career opportunities with our leading staffing solutions and recruitment services. Join our team and take the next step in your career journey. "
        />
        <meta name="robots" content="index, follow"></meta>
      </Helmet>
      <div className="hire-from-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="hire-left">
                <h1>
                  Hire Top Talent that <br /> Deliver
                  <span className="red-title"> 100% Result</span>
                </h1>
                <p>
                  Intensify your Data &amp; Engineering Team with industry ready
                  top skilled tech talent.{" "}
                </p>
                <a href="#hire-from">
                  <button className="apply-now-hire">Hire Now</button>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hire-right">
                <img className="hire-img" src={Hireimg} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
        <Acquire></Acquire>
        <Brands></Brands>
      </div>
    </div>
  );
};

export default Hire;
