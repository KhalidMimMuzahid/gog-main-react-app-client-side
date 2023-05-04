import React, { useContext } from "react";
import { GrAnnounce } from "react-icons/gr";
import { AiFillCheckSquare } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import "./Super.css";
import elipimg from "../../assets/images/Ellipse 4.png";
import image from "../../assets/images/bannre/Group 9384WebDevelopment.svg";
import image2 from "../../assets/images/bannre/Group 9383DataAnalyst.png";
import vector from "../../assets/images/Vector.png";
import bannerSuper from "../../assets/images/bannre/hurr.svg";
import bannerSuper2 from "../../assets/images/bannre/harryupSVG 1.svg";
import banner from "../../assets/images/bannre/border.svg";
import road from "../../assets/images/bannre/road.svg";
import road1 from "../../assets/images/bannre/road1.svg";
import road2 from "../../assets/images/bannre/road2.svg";
import road3 from "../../assets/images/bannre/road3.svg";
import road4 from "../../assets/images/bannre/road4.svg";
import road5 from "../../assets/images/bannre/road5.svg";
import road6 from "../../assets/images/bannre/road6.svg";
import applyfreeSvg from "../../assets/images/bannre/applyfree.svg";
import callback from "../../assets/images/bannre/callback.svg";
import download from "../../assets/images/bannre/download.svg";
import arrowroad from "../../assets/images/bannre/arrowroad.svg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import superPDF from "../../assets/pdfdocs/Super 30 Program (2).pdf";
import callBackSent from "../../assets/images/bannre/callBackSent.svg";
import heroImgLogo from "../../assets/images/bannre/hero.png";

import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
import { Icon } from "@iconify/react";
const Super = () => {
  const { user } = useContext(AuthContext);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [showbtn, setShowbtn] = useState(true);

  // call backhandler functiion
  const callbackHandler = () => {
    alert(
      "We have received your message and one of our representatives will get back to you."
    );
    setShowbtn(false);
  };

  // to join the whatsApp group FSWD
  const joinGroup = () => {
    window.open("https://chat.whatsapp.com/CmDnBtPhXMBAMYJZtEIsJg", "_blank");
  };
  // to join the whatsApp group FSDA
  const joinGroup2 = () => {
    window.open("https://chat.whatsapp.com/Fkc6v6bvvrxBB3p9W3Gs8q", "_blank");
  };

  // SMTL config
  const config = {
    SecureToken: "3fc2ed9a-48ea-4440-a61e-f4daa1ac735e",
    To: "them@website.com",
    From: "mdsojibmandol@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  };

  const emailSendHandler = () => {
    const config = {
      SecureToken: "3fc2ed9a-48ea-4440-a61e-f4daa1ac735e",
      To: user?.email,
      From: "mdsojibmandol@gmail.com",
      Subject: `Hello ${user?.displayName}, Invitation to Attend Pre-Course for Super 30`,
      Body: `<p> We are excited to announce the launch of Super 30 - a comprehensive program designed to teach full-stack web development. We invite you to attend the free Pre-Course to get a seat in the upcoming Super 30 batch.
            </p>
        
            <p>
            To be eligible for the Super 30 batch, you need to attend the 5-day free Pre-Course and clear the "Super-30 Job Entrance Exam (S-30 JEE)" after completing it. The Pre-Course will provide you with the foundation you need to be successful in the program.

            </p>
        
            <p>As a Super 30 student, you'll enjoy a range of benefits, including a 100% job guarantee for Super-30 graduate students, an internship certificate provided by Geeks of Gurukul, a course completion certificate powered by Skill India, and a letter of recommendation provided by Geeks of Gurukul.
            </p>
        
            <p>
            To apply for the Pre-Course, click the button below [insert the button/link], and provide us with your details. We will get back to you with further instructions on how to proceed.

            </p>
        
            <p>We are looking forward to seeing you at the Pre-Course.
            </p>
        
            <p>Best regards,
            </p>
        
            <p>Geeks of Gurukul.</p>
            `,
    };
    if (window.Email) {
      window.Email.send(config);
      alert(
        "Successfully applied, Please check your mail, to join Full Stack Web Developer Pre-Course for Super 30 whatsApp group! And join the Whats'App group"
      );
      addSupe30tag(user?.email);
      joinGroup();
    }
  };
  const emailSendHandler2 = () => {
    const config = {
      SecureToken: "3fc2ed9a-48ea-4440-a61e-f4daa1ac735e",
      To: user?.email,
      From: "mdsojibmandol@gmail.com",
      Subject: `Hello ${user?.displayName}, Invitation to Attend Pre-Course for Super 30`,
      Body: `<p> We are excited to announce the launch of Super 30 - a comprehensive program designed to teach Full Stack Data Scientist. We invite you to attend the free Pre-Course to get a seat in the upcoming Super 30 batch.
            </p>
            <p>
            To be eligible for the Super 30 batch, you need to attend the 5-day free Pre-Course and clear the "Super-30 Job Entrance Exam (S-30 JEE)" after completing it. The Pre-Course will provide you with the foundation you need to be successful in the program.

            </p>
            <p>As a Super 30 student, you'll enjoy a range of benefits, including a 100% job guarantee for Super-30 graduate students, an internship certificate provided by Geeks of Gurukul, a course completion certificate powered by Skill India, and a letter of recommendation provided by Geeks of Gurukul.
            </p>
            <p>
            To apply for the Pre-Course, click the button below [insert the button/link], and provide us with your details. We will get back to you with further instructions on how to proceed.
            </p>
            <p>We are looking forward to seeing you at the Pre-Course.
            </p>
        
            <p>Best regards,
            </p>
        
            <p>Geeks of Gurukul.</p>
            `,
    };
    if (window.Email) {
      window.Email.send(config);
      alert(
        "Successfully applied, Please check your mail, to join Full Stack Data Scientist Pre-Course for Super 30 whatsApp group! And join the Whats'App group"
      );
      addSupe30tag(user?.email);
      joinGroup2();
    }
  };

  // add super 30 tag  user?.email
  const addSupe30tag = (email) => {
    const user = { email };
    fetch("https://geeks-of-gurukul-server-side.vercel.app/users-s30", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log("save user", data);
        //navigate('/');
      });
  };

  return (
    <div>
      <div className="banner-super">
        <div className="container"></div>
      </div>
      <div className="super-course-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8 col-lg-12">
              <div className="row">   
                <div className="col-md-12">
                  <div className="sloop">
                    <div className="sm col-md-6">
                      <div className="super-banner">
                        <img src={heroImgLogo} alt="" />
                      </div>
                    </div>
                    <div className="sm col-md-6">
                      <div className="super-text">
                        <h1>Enrollment for SUPER-30 </h1>
                        <p>Job Guarantee Batch</p>
                        <div className="reserve_pre_cources_button">
                          <div>
                            <a href="#full-stack-web">
                              <span>
                                <button>Full Stack Web Development</button>
                              </span>
                            </a>
                          </div>
                          <div>
                            <a href="#full-stack-data">
                              <span>
                                <button>Full Stack Data Science</button>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="full-stack-web" className="col-md-12">
                  <div className="super-area">
                    <div className="super-part">
                      <div className="super-title">
                        <h2>
                          SUPER-30 <span>Job Guarantee Batch</span>
                        </h2>
                        <p>
                          Get Placed as a <span>Full Stack Web Developer</span>{" "}
                        </p>
                      </div>
                      <div className="super-title dis">
                        <h2>SUPER-30 </h2>
                        <h2>
                          <span>Job Guarantee Batch</span>
                        </h2>
                        <p>Get Placed as a </p>
                        <p>
                          <span>Full Stack Web Developer</span>
                        </p>
                      </div>
                      <div className="apply-free">
                        <button onClick={emailSendHandler}>
                          Apply for Free Pre-Course{" "}
                          <BsArrowRight></BsArrowRight>
                        </button>
                      </div>
                      <p className="update">
                        {/* <img src={vector} alt="" />
                                                <GrAnnounce/> */}
                        <Icon icon="mingcute:announcement-line" color="white" />
                        <span
                          style={{ marginTop: "100px" }}
                          className="update-text"
                        >
                          {" "}
                          To get seat in SUPER-30 batch eligibility are :
                        </span>
                      </p>
                      {/* <div className="update">
                                                <p> <GrAnnounce/> To get seat in SUPER-30 batch eligibility are </p>
                                            </div> */}
                      <ul>
                        <li className="green-check">
                          <AiFillCheckSquare></AiFillCheckSquare>Attend 5 days
                          Free Pre-Course
                        </li>
                        <li className="green-check">
                          <AiFillCheckSquare></AiFillCheckSquare>
                          Clear “Super-30 Job Entrance Exam (S-30 JEE)” after
                          Pre-Course
                        </li>
                      </ul>
                      <p className="note-text">
                        Note : Only Students who clear Super-30 Job Entrance
                        Exam will get seat{" "}
                      </p>
                      <h2 className="subtitle">
                        Benefits of SUPER-30 students
                      </h2>
                      <ul>
                        <li className="black-check">
                          <AiFillCheckSquare></AiFillCheckSquare>100% Job
                          Guarantee for Super-30 Graduate Student
                        </li>
                        <li className="black-check">
                          <AiFillCheckSquare></AiFillCheckSquare>Internship
                          Certificate provided by Geeks of Gurukul
                        </li>
                        <li className="black-check">
                          <AiFillCheckSquare></AiFillCheckSquare>Course
                          completion certificate power by Skill India
                        </li>
                        <li className="black-check">
                          <AiFillCheckSquare></AiFillCheckSquare>Letter of
                          Recommendation provided by Geeks of Gurukul
                        </li>
                      </ul>
                      <p className="upcomeing">
                        Upon Course Completion, You’ll Become :
                      </p>
                      <div className="course-all">
                        <span>Full stack Developer</span>
                        <span>React Developer</span>
                        <span>MERN stack Developer</span>
                        <span>Frontend Developer</span>
                        <span>Backend Developer</span>
                      </div>

                      <div className="super-img">
                        <img src={image} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="full-stack-data" className="col-md-12">
                  <div className="super-area secant-part">
                    <div className="super-part">
                      <div className="super-title secant-part">
                        <h2>
                          SUPER-30 <span>Job Guarantee Batch</span>
                        </h2>
                        <p>
                          Get Placed as a <span>Full Stack Data Scientist</span>{" "}
                        </p>
                      </div>
                      <div className="super-title dis secant-part">
                        <h2>SUPER-30 </h2>
                        <h2>
                          <span>Job Guarantee Batch</span>
                        </h2>
                        <p>Get Placed as a </p>
                        <p>
                          <span>Full Stack Data Scientist </span>
                        </p>
                      </div>
                      <div className="apply-free">
                        <button onClick={emailSendHandler2}>
                          Apply for Free Pre-Course{" "}
                          <BsArrowRight></BsArrowRight>
                        </button>
                      </div>
                      <p className="update">
                        <Icon icon="mingcute:announcement-line" color="white" />
                        To get seat in SUPER-30 batch eligibility are :
                      </p>
                      <ul>
                        <li className="green-check secant-part">
                          <AiFillCheckSquare></AiFillCheckSquare>Attend 5 days
                          Free Pre-Course
                        </li>
                        <li className="green-check secant-part">
                          <AiFillCheckSquare></AiFillCheckSquare>Clear “Super-30
                          Job Entrance Exam (S-30 JEE)” after Pre-Course
                        </li>
                      </ul>
                      <p className="note-text">
                        Note : Only Students who clear Super-30 Job Entrance
                        Exam will get seat{" "}
                      </p>
                      <h2 className="subtitle">
                        Benefits of SUPER-30 students
                      </h2>
                      <ul>
                        <li className="black-check">
                          <AiFillCheckSquare></AiFillCheckSquare>100% Job
                          Guarantee for Super-30 Graduate Student
                        </li>
                        <li className="black-check">
                          <AiFillCheckSquare></AiFillCheckSquare>Internship
                          Certificate provided by Geeks-Of-Gurukul
                        </li>
                        <li className="black-check">
                          <AiFillCheckSquare></AiFillCheckSquare>Course
                          Completion Certificate powered by Skill India
                        </li>
                        <li className="black-check">
                          <AiFillCheckSquare></AiFillCheckSquare>Letter Of
                          Recommendation provided by Geeks of Gurukul
                        </li>
                      </ul>
                      <p className="upcomeing">
                        Upon Course Completion, You’ll Become :
                      </p>
                      <div className="course-all secant-part">
                        <span>Data Scientist</span>
                        <span>Data Analyst</span>
                        <span>Data Engineer</span>
                        <span>Product Analyst</span>
                        <span>Business Analyst</span>
                      </div>

                      <div className="super-img img-2">
                        <img src={image2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12">
              <div className="top-div">
                <div className="question-area text-center ">
                  <div className="road-title">
                    <h1>DOWNLOAD</h1>
                  </div>
                  <button
                    onClick={() => window.open(superPDF, "_blank")}
                    className="super-text Super30Brochere"
                  >
                    {" "}
                    <img
                      src={download}
                      style={{
                        color: "#4BA25D",
                        marginRight: "10px",
                        width: "23px",
                      }}
                      alt="phone"
                    />{" "}
                    SUPER 30 Brochure
                  </button>
                </div>
                <div className="question-area ">
                  <div className="road-title">
                    <h1>ANY QUESTION ?</h1>
                  </div>
                  <button
                    style={{ display: showbtn ? "inline-block" : "none" }}
                    onClick={callbackHandler}
                  >
                    {" "}
                    <img
                      src={callback}
                      style={{
                        color: "#4BA25D",
                        marginRight: "10px",
                        width: "23px",
                      }}
                      alt="phone"
                    />{" "}
                    Request Callback
                  </button>
                  {!showbtn && (
                    <button style={{ cursor: "none" }}>
                      {" "}
                      <img
                        src={callBackSent}
                        style={{
                          color: "#4BA25D",
                          marginRight: "10px",
                          width: "23px",
                        }}
                        alt="phone"
                      />{" "}
                      Request Sent
                    </button>
                  )}
                </div>
              </div>
              <div className="road-map">
                <div className="road-title road-map-paddeing-bottom">
                  <h1>ROAD MAP</h1>
                </div>
                {/* <p className='free-apply'>
                                    Apply for free Pre-course
                                </p> */}
                <div className="single-btu">
                  <img
                    style={{ color: "white", width: "32px" }}
                    src={applyfreeSvg}
                    alt=""
                  />
                  <p>
                    Apply for free
                    <br />
                    Pre-course
                  </p>
                </div>
                <div className="road-btu">
                  <img className="arrowimg" src={arrowroad} alt="" />
                  <div className="single-btu">
                    <img src={road} alt="" />
                    <p>
                      Attend 5 Day <br />
                      Free Pre Course
                    </p>
                  </div>
                  <img className="arrowimg" src={arrowroad} alt="" />
                  <div className="single-btu">
                    <img src={road1} alt="" />
                    <p>
                      {" "}
                      Clear Super 30 <br />
                      Job Entrance Exam
                    </p>
                  </div>
                  <img className="arrowimg" src={arrowroad} alt="" />
                  <div className="single-btu">
                    <img src={road2} alt="" />
                    <p>
                      Get Selected <br />
                      in Super 30
                    </p>
                  </div>
                  <img className="arrowimg" src={arrowroad} alt="" />
                  <div className="single-btu">
                    <img src={road3} alt="" />
                    <p>
                      Pay Fees <br />{" "}
                      <span onClick={handleShow}>Know Details</span>
                    </p>
                  </div>
                  <img className="arrowimg" src={arrowroad} alt="" />
                  <div className="single-btu yellow">
                    <img src={road4} alt="" />
                    <p>
                      6 Months{" "}
                      <span className="yellow">
                        Coding <br />
                        Commando Training
                      </span>
                    </p>
                  </div>
                  <div className="winner">
                    <div className="left-winer">
                      <img className="arrowimg" src={arrowroad} alt="" />
                      <div className="single-btu yellow">
                        <img src={road5} alt="" />
                        <p>Get Placed </p>
                      </div>
                    </div>
                    <div className="right-winer">
                      <img className="arrowimg" src={arrowroad} alt="" />
                      <div className="single-btu yellow">
                        <img src={road6} alt="" />
                        <p>
                          If not Placed, <br />
                          100% Fee Refund*
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="super-about-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="super-about">
                <h2>About the Full Stack Data Science Pragram</h2>
                <p>
                  A Full Stack Data Science Program is a comprehensive training
                  program that covers all the essential skills and knowledge
                  required for a data scientist to work effectively in a modern
                  data-driven organization. It typically includes training in
                  programming, statistics, data visualization, data engineering,
                  machine learning, and deep learning.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="super-about">
                <h2>About Full Stack Web Development Program</h2>
                <p>
                  A Full Stack Web Development Program is a comprehensive
                  training program that covers all the essential skills and
                  knowledge required for a web developer to work effectively in
                  a modern web development organization. It typically includes
                  training in both front-end and back-end web development.
                  Front-end web development involves creating the user-
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      <div>
        <Modal className="modal-pay" show={show} onHide={handleClose}>
          <Modal.Body>
            <div className="pay-area">
              <h4 className="modal-title">
                <span className="green">SUPER-30</span> Job Guarantee Batch{" "}
                <span className="red">Payment Structure</span>
              </h4>
              <p>
                Pay in One time : <span className="green"> 60,000</span>{" "}
              </p>
              <h1>OR</h1>
              <h2>EMI option/Month:</h2>
              <div className="list-option">
                <div className="single-list rede">
                  <span className="rede1">1. First Month </span>
                  <span className="right rede2">₹ 11000</span>
                </div>
                <div className="single-list">
                  <span>2. Second Month </span>
                  <span className="right">₹ 11000</span>
                </div>
                <div className="single-list">
                  <span>3. Third Month </span>
                  <span className="right">₹ 11000</span>
                </div>
                <div className="single-list">
                  <span>4. Fourth Month </span>
                  <span className="right">₹ 11000</span>
                </div>
                <div className="single-list">
                  <span>5. Fifth Month </span>
                  <span className="right">₹ 11000</span>
                </div>
                <div className="single-list ">
                  <span className="lest1">6.Sixth Month </span>
                  <span className="right lest2">₹ 11000</span>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Super;
