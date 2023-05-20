import React, { useContext, useState } from "react";
import "./OurProram.css";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// svg icon for cards componsts
import Vector from "../../assets/iconsSVG/Vector.svg";
import calassTime from "../../assets/iconsSVG/classTime.svg";
import hourGlass from "../../assets/iconsSVG/hourglass.png";
import teamLeads from "../../assets/iconsSVG/teamLeads.svg";
import timeHerryUp from "../../assets/iconsSVG/timeHerryUp.svg";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../context/AuthProvider";

const OurProgram = () => {
  const { user } = useContext(AuthContext);
  // for the apply modal

  // for set the pdf url

  // for modal submit fuction
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // ract hook from
  //const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  // getting data form React hook form
  const knowDetails = (url) => {
    if (user?.email) {
      window.open(
        `https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/pdfdocs/${url}.pdf`,
        "_blank"
      );
    } else {
      navigate(`/view-pdf/${url}`);
    }
  };

  return (
    <div className="program-area">
      <Helmet>
        <title>Geeks of Gurukul</title>
        <meta
          name="keywords"
          content="Coding camps for students,Coding classes for kids,Coding projects for beginners,Full stack web development,Full stack Data analytics,Database management systems,Web development technologies,Artificial intelligence and machine learning
              "
        />
        <meta
          name="description"
          content="India’s Best Gurukul Provides Fundamentals of Coding by IIT and IIM Experts. We improve problem-solving and critical thinking skills to stand in our technology world.  "
        />
        <meta name="robots" content="index, follow"></meta>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="program-title">
              <div id="school" className="styles_head__n8iVE">
                <p className="upcoming-p">OUR PROGRAM</p>
                <h1>
                  UPCOMING{" "}
                  <span className="yellow font-bold">
                    <bold> SCHOOL CHAMP</bold>{" "}
                  </span>{" "}
                  BATCHES
                </h1>
                <span className="span-typewriter">
                  We have courses for students from class 6th to 12th where they
                  will learn to code in flexible time.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-xl-5 offset-xl-1">
            <div className="up-card up-card-a">
              <div id="FSDA" className="up-card-head up-card-head-1">
                <div className="up-card-rigth">
                  <h3>
                    Champs of Basic Coding
                    <p className="text-black fw-semibold">₹1999/month</p>
                  </h3>

                  <p>
                    BASIC (Beginners' All-purpose Symbolic Instruction Code) is
                    a family of general-purpose, high-level programming
                    languages designed for ease of use.Computer Programming
                    Including Programming Concepts, Programming Languages.
                  </p>
                </div>
              </div>

              <ul>
                <li className="course-contnet">
                  <img src={calassTime} alt="" />
                  Class Timings : Flexible time as per student
                </li>
                <li className="course-contnet ">
                  <img src={hourGlass} alt="" />
                  Duration- 24 weeks
                </li>
                <li className="course-contnet">
                  <img src={Vector} alt="" />
                  Eligibity-School Students
                </li>
                <li className="course-contnet">
                  <img src={teamLeads} alt="" />
                  Led by Team of IITians
                </li>
              </ul>

              <div className="upcming_footer">
                <hr className="card_hr" />
                <div className=" upcomig_hurry_up">
                  <div className="up_card_foottx">
                    <img src={timeHerryUp} alt="" />
                    <p className="hurry_up">
                      Hurry up <br />
                      <span className="limited_seats">Limited Seats</span>
                    </p>
                  </div>

                  <div className="upcoming_footer_buttons">
                    <button
                      onClick={() => knowDetails("SchoolChamps")}
                      className="stroke_button"
                      id="get-school-brochure-1"
                    >
                      Know Details
                    </button>
                    <Link to="/admissionForm">
                      <span>
                        <button className="solid_button">Apply Now</button>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-5 ">
            <div className="up-card up-card-b">
              <div id="FWD-school" className="up-card-head up-card-head-2">
                <div className="up-card-rigth">
                  <h3>
                    Champs of Advance Coding
                    <p className="text-black fw-semibold">₹1999/month</p>
                  </h3>
                  <p>
                    Students learn the fundamentals of programming through
                    creating interactive stories, designing animations, and
                    creating advance-games,mobile apps.Computer Programming
                    Including Programming Concepts, Programming Languages.
                  </p>
                </div>
              </div>

              <ul>
                <li className="course-contnet">
                  <img src={calassTime} alt="" />
                  Class Timings : Flexible time as per student
                </li>
                <li className="course-contnet">
                  <img src={hourGlass} alt="" />
                  Duration- 24 weeks
                </li>
                <li className="course-contnet">
                  <img src={Vector} alt="" />
                  Eligibity-School Students
                </li>
                <li className="course-contnet">
                  <img src={teamLeads} alt="" />
                  Led by Team of IITians
                </li>
              </ul>

              <div className="upcming_footer">
                <hr className="card_hr" />
                <div
                  className="
                upcomig_hurry_up"
                >
                  <div className="up_card_foottx">
                    <img src={timeHerryUp} alt="" />
                    <p className="hurry_up">
                      Hurry up <br />
                      <span className="limited_seats">Limited Seats</span>
                    </p>
                  </div>

                  <div className="upcoming_footer_buttons">
                    <button
                      onClick={() => knowDetails("SchoolChamps")}
                      className="stroke_button"
                      id="get-school-brochure-2"
                    >
                      Know Details
                    </button>
                    <Link to="/admissionForm">
                      <span>
                        <button className="solid_button">Apply Now</button>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="bees-program" className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="program-title">
              <div id="school" className="styles_head__n8iVE">
                <p className="upcoming-p">OUR PROGRAM</p>
                <h1>
                  UPCOMING{" "}
                  <span className="yellow font-bold">
                    <bold> CODING BEES </bold>{" "}
                  </span>{" "}
                  BATCHES
                </h1>
                <span className="span-typewriter">
                  We provide Job Assistance Tech courses for Graduates and Under
                  Graduates Student and Professionals.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-xl-5 offset-xl-1">
            <div className="up-card up-card-a">
              <div id="FSDA" className="up-card-head up-card-head-1">
                <div className="up-card-rigth">
                  <h3>
                    Full Stack Data Analytics
                    <p className="text-black fw-semibold">₹3999/month</p>
                  </h3>
                  <p>
                    Data analytics is the process of examining, interpreting,
                    and transforming data into useful insights and information
                    that can be used to inform business decisions. It involves
                    using statistical and computational methods to identify
                    patterns.
                  </p>
                </div>
              </div>

              <ul>
                <li className="course-contnet">
                  <img src={calassTime} alt="" />
                  100 % Job Assistance
                </li>
                <li className="course-contnet">
                  <img src={hourGlass} alt="" />
                  Duration - 24 weeks
                </li>
                <li className="course-contnet">
                  <img src={Vector} alt="" />
                  Eligibility - All degrees & branches
                </li>

                <li className="course-contnet">
                  <img src={teamLeads} alt="" />
                  Led by Team of IITians
                </li>
              </ul>

              <div className="upcming_footer">
                <hr className="card_hr" />
                <div className=" upcomig_hurry_up">
                  <div className="up_card_foottx">
                    <img src={timeHerryUp} alt="" />
                    <p className="hurry_up">
                      Hurry up <br />
                      <span className="limited_seats">Limited Seats</span>
                    </p>
                  </div>

                  <div className="upcoming_footer_buttons">
                    <button
                      onClick={() => knowDetails("Coding-Bees-Program")}
                      className="stroke_button"
                      id="get-school-brochure-1"
                    >
                      Know Details
                    </button>
                    <Link to="/admissionForm">
                      <span>
                        <button className="solid_button">Apply Now</button>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-5 ">
            <div className="up-card up-card-b">
              <div id="FWD-school" className="up-card-head up-card-head-2">
                <div className="up-card-rigth">
                  <h3>
                    Full Stack Web Development
                    <p className="text-black fw-semibold">₹3999/month</p>
                  </h3>
                  <p>
                    Full stack web development refers to the process of
                    designing, developing, and deploying a complete web
                    application or website, from the front-end,back-end
                    server-side logic database integration. Creating both the
                    client and server side.
                  </p>
                </div>
              </div>

              <ul>
                <li className="course-contnet">
                  <img src={calassTime} alt="" />
                  100 % Job Assistance
                </li>

                <li className="course-contnet">
                  <img src={hourGlass} alt="" />
                  Duration - 24 weeks
                </li>
                <li className="course-contnet">
                  <img src={Vector} alt="" />
                  Eligibility - All degrees & branches
                </li>
                <li className="course-contnet">
                  <img src={teamLeads} alt="" />
                  Led by Team of IITians
                </li>
              </ul>

              <div className="upcming_footer">
                <hr className="card_hr" />
                <div
                  className="
                upcomig_hurry_up"
                >
                  <div className="up_card_foottx">
                    <img src={timeHerryUp} alt="" />
                    <p className="hurry_up">
                      Hurry up <br />
                      <span className="limited_seats">Limited Seats</span>
                    </p>
                  </div>

                  <div className="upcoming_footer_buttons">
                    <button
                      onClick={() => knowDetails("Coding-Bees-Program")}
                      className="stroke_button"
                      id="get-school-brochure-2"
                    >
                      Know Details
                    </button>
                    <Link to="/admissionForm">
                      <span>
                        <button className="solid_button">Apply Now</button>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="engineering-program" className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="program-title">
              <div id="school" className="styles_head__n8iVE">
                <p className="upcoming-p">OUR PROGRAM</p>
                <h1>
                  UPCOMING{" "}
                  <span className="yellow font-bold">
                    <bold> ENGINEERING NERDS</bold>{" "}
                  </span>{" "}
                  BATCHES
                </h1>
                <span className="span-typewriter">
                  We Provide Job Assistance Engineering Courses for Graduate and
                  Undergraduate, Engineering Folks.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-xl-5 offset-xl-1">
            <div className="up-card up-card-a">
              <div id="FSDA" className="up-card-head up-card-head-1">
                <div className="up-card-rigth">
                  <h3>
                    Electrical Engineering
                    <p className="text-black fw-semibold">₹3999/month</p>
                  </h3>
                  <p>
                    Electrical engineering is a field of engineering that deals
                    with the study and application of electricity,
                    electronics,and electromagnetism. Electrical engineers work
                    in a very wide range of industries and the skills required
                    are likewise variable.
                  </p>
                </div>
              </div>

              <ul>
                <li className="course-contnet">
                  <img src={calassTime} alt="" />
                  100 % Job Assistance
                </li>
                <li className="course-contnet">
                  <img src={Vector} alt="" />
                  Eligibility - Engineering branches
                </li>
                <li className="course-contnet">
                  <img src={hourGlass} alt="" />
                  Duration - 36 weeks
                </li>
                <li className="course-contnet">
                  <img src={teamLeads} alt="" />
                  Led by Team of IITians
                </li>
              </ul>

              <div className="upcming_footer">
                <hr className="card_hr" />
                <div className=" upcomig_hurry_up">
                  <div className="up_card_foottx">
                    <img src={timeHerryUp} alt="" />
                    <p className="hurry_up">
                      Hurry up <br />
                      <span className="limited_seats">Limited Seats</span>
                    </p>
                  </div>

                  <div className="upcoming_footer_buttons">
                    <button
                      onClick={() => knowDetails("Engineering+nerds+program")}
                      className="stroke_button"
                      id="get-school-brochure-1"
                    >
                      Know Details
                    </button>
                    <Link to="/admissionForm">
                      <span>
                        <button className="solid_button">Apply Now</button>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-5 ">
            <div className="up-card up-card-b">
              <div id="FWD-school" className="up-card-head up-card-head-2">
                <div className="up-card-rigth">
                  <h3>
                    Mechanical Engineering
                    <p className="text-black fw-semibold">₹3999/month</p>
                  </h3>
                  <p>
                    Mechanical engineering is a branch of engineering that deals
                    with the design, manufacturing, and maintenance of
                    mechanical systems.Using principles motion,energy,force
                    ensuring designs safely,efficiently,and reliably.
                  </p>
                </div>
              </div>

              <ul>
                <li className="course-contnet">
                  <img src={calassTime} alt="" />
                  100 % Job Assistance
                </li>
                <li className="course-contnet">
                  <img src={Vector} alt="" />
                  Eligibility - Engineering branches
                </li>
                <li className="course-contnet">
                  <img src={hourGlass} alt="" />
                  Duration - 36 weeks
                </li>
                <li className="course-contnet">
                  <img src={teamLeads} alt="" />
                  Led by Team of IITians
                </li>
              </ul>

              <div className="upcming_footer">
                <hr className="card_hr" />
                <div
                  className="
                upcomig_hurry_up"
                >
                  <div className="up_card_foottx">
                    <img src={timeHerryUp} alt="" />
                    <p className="hurry_up">
                      Hurry up <br />
                      <span className="limited_seats">Limited Seats</span>
                    </p>
                  </div>

                  <div className="upcoming_footer_buttons">
                    <button
                      onClick={() => knowDetails("Engineering+nerds+program")}
                      className="stroke_button"
                      id="get-school-brochure-2"
                    >
                      Know Details
                    </button>
                    <Link to="/admissionForm">
                      <span>
                        <button className="solid_button">Apply Now</button>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*s---------------- for Modal------------------------ */}

      {/* -----------------end-modal----------------      */}
    </div>
  );
};

export default OurProgram;
