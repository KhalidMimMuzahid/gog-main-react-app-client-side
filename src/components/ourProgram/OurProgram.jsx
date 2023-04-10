import React, { useState } from "react";
import "./OurProram.css";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Modal } from "react-bootstrap";
import schoolChamps from "../../assets/pdfdocs/SchoolChamps.pdf"
import codingBeesProgram from "../../assets/pdfdocs/Coding-Bees-Program.pdf"
import engineeringNerds from "../../assets/pdfdocs/Engineering nerds program.pdf"
import { Link } from "react-router-dom";
// svg icon for cards componsts 
import Vector from "../../assets/iconsSVG/Vector.svg"
import calassTime from "../../assets/iconsSVG/classTime.svg"
import hourGlass from "../../assets/iconsSVG/hourglass.png"
import teamLeads from "../../assets/iconsSVG/teamLeads.svg"
import timeHerryUp from "../../assets/iconsSVG/timeHerryUp.svg"
import { Helmet } from "react-helmet";


const OurProgram = () => {
  // for the apply modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // for set the pdf url
  const [pdfUrl, setPdfUrl] = useState("");

  // for modal submit fuction
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // ract hook from
  //const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");

  // getting data form React hook form
  const handleFormData = (applyData) => {
    console.log(applyData);
    setSignUPError("");

    fetch("https://geeks-of-gurukul-server-side.vercel.app/apply-data", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save user", data);
        //navigate('/');
        toast.success("Thank you, We are pleased to know you");
        // Display PDF in new tab
        window.open(pdfUrl, "_blank");
        setShow(false); // cloase modal 
      });
  };


  return (
    <div className="program-area">
      <Helmet>
        <title>OUR PROGRAM</title>
        <meta
        name="keywords"
        content="Coding camps for students,Coding classes for kids,Coding projects for beginners,Full stack web development,Full stack Data analytics,Database management systems,Web development technologies,Artificial intelligence and machine learning
              "
        />
        <meta
          name="description"
          content="India’s Best Gurukul Provides Fundamentals of Coding by IIT and IIM Experts. We improve problem-solving and critical thinking skills to stand in our technology world.  " />
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
                  <h3>Champs of Basic Coding</h3>
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
                  Duration-36 weeks
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
                      onClick={() => {setShow(true); setPdfUrl(schoolChamps)}}
                      className="stroke_button"
                      id="get-school-brochure-1"
                    >
                      Know Details
                    </button>
                    <Link to="/admissionForm">
                      <span>
                        <button className="solid_button">
                          Apply Now
                        </button>
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
                  <h3>Champs of Advance Coding</h3>
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
                  Duration-36 weeks
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
                      onClick={() => {setShow(true); setPdfUrl(schoolChamps)}}
                      className="stroke_button"
                      id="get-school-brochure-2"
                    >
                      Know Details
                    </button>
                    <Link to="/admissionForm">
                      <span>
                        <button className="solid_button">
                          Apply Now
                        </button>
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
                  <h3>Full Stack Data Analytics</h3>
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
                  Duration - 35weeks
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
                      onClick={() => {setShow(true); setPdfUrl(codingBeesProgram)}}
                      className="stroke_button"
                      id="get-school-brochure-1"
                    >
                      Know Details
                    </button>
                    <Link to="/admissionForm">
                      <span>
                        <button className="solid_button" >
                          Apply Now
                        </button>
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
                  <h3>Full Stack Web Development</h3>
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
                  Duration - 35weeks
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
                      onClick={() => {setShow(true); setPdfUrl(codingBeesProgram)}}
                      className="stroke_button"
                      id="get-school-brochure-2"
                    >
                      Know Details
                    </button>
                    <Link to="/admissionForm">
                      <span>
                        <button className="solid_button" >
                          Apply Now
                        </button>
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
                  <h3>Electrical Engineering</h3>
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
                  Duration - 45weeks
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
                      onClick={() => {setShow(true); setPdfUrl(engineeringNerds)}}
                      className="stroke_button"
                      id="get-school-brochure-1"
                    >
                    Know Details
                    </button>
                    <Link to="/admissionForm">
                      <span>
                        <button className="solid_button">
                          Apply Now
                        </button>
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
                  <h3>Mechanical Engineering</h3>
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
                  Duration - 45weeks
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
                      onClick={() => {setShow(true); setPdfUrl(engineeringNerds)}}
                      className="stroke_button"
                      id="get-school-brochure-2"
                    >
                      Know Details
                    </button>
                    <Link to="/admissionForm">
                      <span>
                        <button className="solid_button">
                          Apply Now
                        </button>
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
       <div className="form-model">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="from-title">Register here to Know the Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* // start form  --------------------------------------------- */}
            <div className="form-box">
              <form onSubmit={handleSubmit(handleFormData)}>
                <div className="modal-form">
                  
                  <input
                    className="border "
                    type="text"
                    name="name"
                    {...register("name", {
                      required: "Name is Required",
                    })}
                    placeholder="Full Name"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div className="modal-form">
                
                  
                  <input
                    className="border "
                    type="email"
                    name="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is Requried",
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="modal-form">
              
                  <input
                    // type="number"
                    className="border "
                    name="phone"
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "Phone number is required",
                      maxLength: {
                        value: 12,
                        message: "Phone number must be uneder 12 characters",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-500">{errors.phone.message}</p>
                  )}


                </div>
                <div className="modal-form check">
                  
                  <input type="checkbox" checked required="" id='ready' />
                  <label htmlFor="ready">I accept all <a href="/terms&amp;conditions">Terms &amp;
                    Conditions</a> </label>
                
                </div>
                
                <button  className="apply-btn" type="submit">
                  Submit
                </button>
                {signUpError && <p className="text-red-600">{signUpError}</p>}
              </form>
            </div>

            {/* //-------------------- end form  --------------------------------------------- */}
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="outline-secondary" onClick={handleClose}>
            Close
        </Button> */}
          </Modal.Footer>
        </Modal>
      </div>

 {/* -----------------end-modal----------------      */}



    </div>
  );
};

export default OurProgram;
