import React, { useState } from "react";
import "./OurProram.css";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Modal } from "react-bootstrap";

const OurProgram = () => {
  // for the apply modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        //toast.success("Successfully Applied!");
        setShow(false);
      });
  };


  return (
    <div className="program-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="program-title">
              <div id="school" class="styles_head__n8iVE">
                <p class="upcoming-p">OUR PROGRAM</p>
                <h1>
                  UPCOMING{" "}
                  <span class="yellow font-bold">
                    <bold> SCHOOL CHAMP</bold>{" "}
                  </span>{" "}
                  BATCHES
                </h1>
                <span class="span-typewriter">
                  We have courses for students from class 6th to 12th where they
                  will learn to code in flexible time.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-xl-5 offset-xl-1">
            <div class="up-card up-card-a">
              <div id="FSDA" class="up-card-head up-card-head-1">
                <div class="up-card-rigth">
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
                <li class="course-contnet">
                  <Icon icon="material-symbols:clock-loader-20" />
                  Class Timings : Flexible time as per student
                </li>
                <li class="course-contnet ">
                  <Icon icon="material-symbols:hourglass-top" />
                  Duration-36 weeks
                </li>
                <li class="course-contnet">
                  <Icon icon="mdi:books" />
                  Eligibity-School Students
                </li>
                <li class="course-contnet">
                  <Icon icon="codicon:organization" />
                  Led by Team of IITians
                </li>
              </ul>

              <div class="upcming_footer">
                <hr class="card_hr" />
                <div class=" upcomig_hurry_up">
                  <div class="up_card_foottx">
                    <img
                      src={require("../../assets/svgIcons/clock.svg").default}
                      alt="mySvgImage"
                    />
                    <p class="hurry_up">
                      Hurry up <br />
                      <span class="limited_seats">Limited Seats</span>
                    </p>
                  </div>

                  <div class="upcoming_footer_buttons">
                    <button
                      onClick={handleShow}
                      
                      class="stroke_button"
                      id="get-school-brochure-1"
                    >
                      Know Details
                    </button>
                    <button class="solid_button" onclick="openForm()">
                      {" "}
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-5 ">
            <div class="up-card up-card-b">
              <div id="FWD-school" class="up-card-head up-card-head-2">
                <div class="up-card-rigth">
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
                <li class="course-contnet">
                  <Icon icon="material-symbols:clock-loader-20" />
                  Class Timings : Flexible time as per student
                </li>
                <li class="course-contnet">
                  <Icon icon="material-symbols:hourglass-top" />
                  Duration-36 weeks
                </li>
                <li class="course-contnet">
                  <Icon icon="mdi:books" />
                  Eligibity-School Students
                </li>
                <li class="course-contnet">
                  <Icon icon="codicon:organization" />
                  Led by Team of IITians
                </li>
              </ul>

              <div class="upcming_footer">
                <hr class="card_hr" />
                <div
                  class="
                upcomig_hurry_up"
                >
                  <div class="up_card_foottx">
                    <img
                      src={require("../../assets/svgIcons/clock.svg").default}
                      alt="mySvgImage"
                    />
                    <p class="hurry_up">
                      Hurry up <br />
                      <span class="limited_seats">Limited Seats</span>
                    </p>
                  </div>

                  <div class="upcoming_footer_buttons">
                    <button
                      onclick="document.getElementById('popup-brochure-form2').style.display='block'"
                      class="stroke_button"
                      id="get-school-brochure-2"
                    >
                      Know Details
                    </button>
                    <button class="solid_button" onclick="openForm()">
                      Apply Now
                    </button>
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
              <div id="school" class="styles_head__n8iVE">
                <p class="upcoming-p">OUR PROGRAM</p>
                <h1>
                  UPCOMING{" "}
                  <span class="yellow font-bold">
                    <bold> CODING BEES </bold>{" "}
                  </span>{" "}
                  BATCHES
                </h1>
                <span class="span-typewriter">
                  We provide Job Assistance Tech courses for Graduates and Under
                  Graduates Student and Professionals.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-xl-5 offset-xl-1">
            <div class="up-card up-card-a">
              <div id="FSDA" class="up-card-head up-card-head-1">
                <div class="up-card-rigth">
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
                <li class="course-contnet">
                  <Icon icon="material-symbols:clock-loader-20" />
                  Class Timings : Flexible time as per student
                </li>
                <li class="course-contnet">
                  <Icon icon="material-symbols:hourglass-top" />
                  Duration - 35weeks
                </li>
                <li class="course-contnet">
                  <Icon icon="mdi:books" />
                  Eligibility - All degrees & branches
                </li>

                <li class="course-contnet">
                  <Icon icon="codicon:organization" />
                  Led by Team of IITians
                </li>
              </ul>

              <div class="upcming_footer">
                <hr class="card_hr" />
                <div class=" upcomig_hurry_up">
                  <div class="up_card_foottx">
                    <img
                      src={require("../../assets/svgIcons/clock.svg").default}
                      alt="mySvgImage"
                    />
                    <p class="hurry_up">
                      Hurry up <br />
                      <span class="limited_seats">Limited Seats</span>
                    </p>
                  </div>

                  <div class="upcoming_footer_buttons">
                    <button
                      onclick="document.getElementById('popup-brochure-form1').style.display='block'"
                      class="stroke_button"
                      id="get-school-brochure-1"
                    >
                      Know Details
                    </button>
                    <button class="solid_button" onclick="openForm()">
                      {" "}
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-5 ">
            <div class="up-card up-card-b">
              <div id="FWD-school" class="up-card-head up-card-head-2">
                <div class="up-card-rigth">
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
                <li class="course-contnet">
                  <Icon icon="material-symbols:clock-loader-20" />
                  Class Timings : Flexible time as per student
                </li>

                <li class="course-contnet">
                  <Icon icon="material-symbols:hourglass-top" />
                  Duration - 35weeks
                </li>
                <li class="course-contnet">
                  <Icon icon="mdi:books" />
                  Eligibility - All degrees & branches
                </li>
                <li class="course-contnet">
                  <Icon icon="codicon:organization" />
                  Led by Team of IITians
                </li>
              </ul>

              <div class="upcming_footer">
                <hr class="card_hr" />
                <div
                  class="
                upcomig_hurry_up"
                >
                  <div class="up_card_foottx">
                    <img
                      src={require("../../assets/svgIcons/clock.svg").default}
                      alt="mySvgImage"
                    />
                    <p class="hurry_up">
                      Hurry up <br />
                      <span class="limited_seats">Limited Seats</span>
                    </p>
                  </div>

                  <div class="upcoming_footer_buttons">
                    <button
                      onclick="document.getElementById('popup-brochure-form2').style.display='block'"
                      class="stroke_button"
                      id="get-school-brochure-2"
                    >
                      Know Details
                    </button>
                    <button class="solid_button" onclick="openForm()">
                      Apply Now
                    </button>
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
              <div id="school" class="styles_head__n8iVE">
                <p class="upcoming-p">OUR PROGRAM</p>
                <h1>
                  UPCOMING{" "}
                  <span class="yellow font-bold">
                    <bold> ENGINEERING NERDS</bold>{" "}
                  </span>{" "}
                  BATCHES
                </h1>
                <span class="span-typewriter">
                  We Provide Job Assistance Engineering Courses for Graduate and
                  Undergraduate, Engineering Folks.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-xl-5 offset-xl-1">
            <div class="up-card up-card-a">
              <div id="FSDA" class="up-card-head up-card-head-1">
                <div class="up-card-rigth">
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
                <li class="course-contnet">
                  <Icon icon="material-symbols:clock-loader-20" />
                  Class Timings : Flexible time as per student
                </li>
                <li class="course-contnet">
                  <Icon icon="mdi:books" />
                  Eligibility - Engineering branches
                </li>
                <li class="course-contnet">
                  <Icon icon="material-symbols:hourglass-top" />
                  Duration - 45weeks
                </li>
                <li class="course-contnet">
                  <Icon icon="codicon:organization" />
                  Led by Team of IITians
                </li>
              </ul>

              <div class="upcming_footer">
                <hr class="card_hr" />
                <div class=" upcomig_hurry_up">
                  <div class="up_card_foottx">
                    <img
                      src={require("../../assets/svgIcons/clock.svg").default}
                      alt="mySvgImage"
                    />
                    <p class="hurry_up">
                      Hurry up <br />
                      <span class="limited_seats">Limited Seats</span>
                    </p>
                  </div>

                  <div class="upcoming_footer_buttons">
                    <button
                      onclick="document.getElementById('popup-brochure-form1').style.display='block'"
                      class="stroke_button"
                      id="get-school-brochure-1"
                    >
                      Know Details
                    </button>
                    <button class="solid_button" onclick="openForm()">
                      {" "}
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-5 ">
            <div class="up-card up-card-b">
              <div id="FWD-school" class="up-card-head up-card-head-2">
                <div class="up-card-rigth">
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
                <li class="course-contnet">
                  <Icon icon="material-symbols:clock-loader-20" />
                  Class Timings : Flexible time as per student
                </li>
                <li class="course-contnet">
                  <Icon icon="mdi:books" />
                  Eligibility - Engineering branches
                </li>
                <li class="course-contnet">
                  <Icon icon="material-symbols:hourglass-top" />
                  Duration - 45weeks
                </li>
                <li class="course-contnet">
                  <Icon icon="codicon:organization" />
                  Led by Team of IITians
                </li>
              </ul>

              <div class="upcming_footer">
                <hr class="card_hr" />
                <div
                  class="
                upcomig_hurry_up"
                >
                  <div class="up_card_foottx">
                    <img
                      src={require("../../assets/svgIcons/clock.svg").default}
                      alt="mySvgImage"
                    />
                    <p class="hurry_up">
                      Hurry up <br />
                      <span class="limited_seats">Limited Seats</span>
                    </p>
                  </div>

                  <div class="upcoming_footer_buttons">
                    <button
                      onclick="document.getElementById('popup-brochure-form2').style.display='block'"
                      class="stroke_button"
                      id="get-school-brochure-2"
                    >
                      Know Details
                    </button>
                    <button class="solid_button" onclick="openForm()">
                      Apply Now
                    </button>
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
            <Modal.Title className="from-title">Please Register</Modal.Title>
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
                  
                  <input type="checkbox" required="" id='ready' />
                  <label for="ready">I accept all <a href="/terms&amp;conditions">Terms &amp;
                    Conditions</a> </label>
                
                </div>
                
                <button className="apply-btn" type="submit">
                  Apply Now
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
