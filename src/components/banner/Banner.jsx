import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import "./Banner.css";
import arrow from '../../assets/images/Arrow 6.png'
const Banner = () => {

  return (
    <div id="lift-up" className="hero-Area-Ancor-Fixed">
      <div className="container">
        <div className="row hero-area">
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
              <div className="apply-now-btu">
              <button className="apply-now">Apply Now</button>
<img src={arrow} alt="" />
              </div>

            </div>

          </div>
        </div>
      </div>
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
              <div className="row">
                <div className="col-md-6">
                  <div className="course course1" >
                    <span className="topCotton">“</span>
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
                </div>
                <div className="col-md-6">
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
                </div>
                <div className="col-md-6">
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
                <div className="col-md-6"> 
                  <div className="course course4">
                    <div className="course-inner">
                      <a href="#super-program">
                        <h1 style={{ colo: "black" }}>SUPER 30</h1>
                        <div className="program-content">
                          <p>
                            Full Stack Data Analysis
                            <br />
                            Full Stack Web Development
                          </p>
                        </div>
                      </a>
                      <div className="program">
                        <a href="#engineering-program">
                          <button>Program</button>
                        </a>
                      </div>
                    </div>
                    <span className="cohesion">“</span>
                  </div>
                  
                </div>
                <div className="col-md-12">
                  <div className="retune-area">
                    <h2>return 0;</h2>
                  </div>
                </div>
              </div>



            </div>
            <div className="bottom-curly-brace">&#125;</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
