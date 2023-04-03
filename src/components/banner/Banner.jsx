import React from "react";
import LottieAnimation from "../shared/lottieAnimation/LottieAnimation";
import TypeWriterEffect from 'react-typewriter-effect';
import "./Banner.css";
const Banner = () => {

  return (
    <div className="hero-Area-Ancor-Fixed">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-6 col-xl-7">
            <div className="hero-left">
              <div className="heading-div">

                <div>
                  <div className="main-heading">
                    <TypeWriterEffect
                      startDelay={100}
                      cursorColor="transparent"
                      text="Build Your Career with"
                      typeSpeed={100}
                    />

                  </div>
                </div>
                <div>
                  <div className="main-heading" style={{ color: "#4ba25d" }}>
                    <TypeWriterEffect
                      startDelay={3000}
                      cursorColor="transparent"
                      text={`India's Best Gurukul`}
                      typeSpeed={100}
                    />

                  </div>
                </div>

              </div>

              <p className="section-text">
                Get trained for top tech jobs by industry experts and (IIT/IIM
                Alumni)
              </p>

              <button className="apply-now">Apply Now</button>
            </div>
            <LottieAnimation />
          </div>
          <div className="col-lg-6 col-md-12 col-xl-5">
            <div className="new_hero">
              <div className="new-text-hero">
                <div className="hero-h1">
                  <TypeWriterEffect
                    startDelay={100}
                    cursorColor="transparent"
                    text={`if(Your Choice == "Geeks of Gurukul")`}
                    typeSpeed={100}
                  />
                  
                </div>
              </div>

              <div className="hero-inner">
                <div className="left-part">
                  <div className="top-curly-brace">&#123;</div>
                  <div className="course-box-container">
                    <div className="course course1" >
                      <div className="course-inner">
                        <a href="#school">
                          <h1>SCHOOL CHAMPS</h1>
                          <div className="program-content">
                            <p>
                              {" "}
                              Champs of Basic coding <br />
                              Champs of Advance coding
                            </p>
                          </div>
                        </a>
                        <div className="program">
                          <a href="/">
                            <button>Program</button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="course course2">
                      <div className="course-inner">
                        <a href="#bees-program">
                          <h1>CODING BEES</h1>
                          <div className="program-content">
                            <p>
                              Full Stack Data Analytics <br />
                              Full Stack Web Development
                            </p>
                          </div>
                        </a>
                        <div className="program">
                          <a href="#bees-program">
                            <button>Program</button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="course course3">
                      <div className="course-inner">
                        <a href="#engineering-program">
                          <h1 style={{ colo: "black" }}>ENGINEERING NERDS</h1>
                          <div className="program-content">
                            <p>
                              Electrical Engineering
                              <br />
                              Mechanical Engineering
                            </p>
                          </div>
                        </a>
                        <div className="program">
                          <a href="#engineering-program">
                            <button>Program</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-curly-brace">&#125;</div>
                </div>
                <div className="both">
                  <div className="equal">=</div>
                  <div className="ourcoursec-btn-div">
                    <a href="/">
                      <button className="our_course our-button">
                        Our Courses
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
