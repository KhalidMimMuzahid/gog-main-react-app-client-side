import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import "./Banner.css";
import arrow from '../../assets/images/brand/Vector.svg'
import { Link } from "react-router-dom";
import LottieAnimation from "../shared/lottieAnimation/LottieAnimation";
<<<<<<< HEAD
import { Helmet } from "react-helmet";
const Banner = () => {

  return (
    <div  className="hero-Area-Ancor-Fixed">
      <Helmet>
        <title>Geeks Of Gurukul</title>
        
        <meta
        name="keywords"
        content="Coding camps for students,Coding classes for kids,Coding projects for beginners,Full stack web development,Full stack Data Science,Database management systems,Web development technologies,Artificial intelligence and machine learning
              "
        />
        <meta
          name="description"
          content="India’s Best Gurukul Provides Fundamentals of Coding by IIT and IIM Experts. We improve problem-solving and critical thinking skills to stand in our technology world.  " />
        <meta name="robots" content="index, follow"></meta>

      </Helmet>
=======
import arrowimg from '../../assets/images/Arrow 6 (1).png'
const Banner = () => {

  return (
    <div className="hero-Area-Ancor-Fixed">
>>>>>>> c9cec0983aba1f85dd3d73056bcab7d1052a2a9c
      <div className="container">
        <div className="row hero-area">
          <div className="col-md-12 col-lg-12 col-xl-7">
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
                <button className="apply-now">Our Courses</button>


                <div className="arrow-img">
                  <img src={arrowimg} alt="" />
                </div>

              </div>

            </div>
            <LottieAnimation></LottieAnimation>

            <div className="down-arrow">
              <div class="arrow">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>



          </div>
        </div>
      </div>
      <div className="new_hero">
        <div className="new-text-hero">
          <div className="hero-h1">
            <img src={arrow} alt="" />
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
              <div className="cou">
                <div className="md-6 md-1">
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
                <div className="md-6">
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
                <div className="md-6 md-1">
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
                <div className="md-6">
                  <div className="course course4">
                    <div className="course-inner">
                      <Link target="_blank" to={'/super'} >
                        <h1 style={{ colo: "black" }}>SUPER 30</h1>
                        <div className="program-content">
                          <p>
                            Full Stack Data Analysis
                            <br />
                            Full Stack Web Development
                          </p>
                        </div>
                      </Link>
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
