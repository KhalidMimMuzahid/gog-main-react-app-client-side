import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import logo from "../../../assets/images/logo (1).png";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-hot-toast";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
// import useAdmin from "../../../UseHook/useAdmin";
import Loading from "../Loading/Loading";
import { Dropdown, DropdownButton, NavItem } from "react-bootstrap";
// import AdmissionForm from "../../../pages/AdmissionForm/AdmissionForm";

import { FaUser } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";

const NavBar = () => {
  // state for the nav items show
  const [showDropdown, setShowDropdown] = useState(false);
  // for the current user and auth log out
  const { user, logOut, adminPart } = useContext(AuthContext);
  // is Admin
  // const [isAdmin] = useAdmin(user?.email)

  // console.log(adminPart);

  // for the apply modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

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
    // console.log(applyData);

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
        toast.success("Successfully Applied!");
        setShow(false);
      });
  };

  // for log out
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged out");
      })
      .catch((err) => console.log(err));
  };

  // console.log(coupon );

  // if(isLoading){
  //   return <Loading></Loading>
  // }

  return (
    <div className="menu-gr shadow-sm">
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          bg="white"
          sticky="top"
          expand={expand}
          className=" m-0 mb-custom px-5"
        >
          <div className="container">
            <Navbar.Brand>
              <Link to={"/"}>
                <img className="brand" src={logo} alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header className="mb-custom2 " closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    className="brand"
                    style={{ width: "8rem" }}
                    src={logo}
                    alt="logo"
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  <Nav.Link>
                    <Link className="text-decoration-none text-dark " to="/">
                      Home
                    </Link>
                  </Nav.Link>
                  {user?.email === "amitpaultl@gmail.com" && (
                    <Nav.Link>
                      <Link
                        className="text-decoration-none text-dark "
                        to="/admin"
                      >
                        Admin
                      </Link>
                    </Nav.Link>
                  )}

                  <NavDropdown
                    title={<span className="text-dark">Courses</span>}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                    show={showDropdown}
                  >
                    <div className="top-menu">
                      <div className="single-menu">
                        <p>School Champs Courses</p>
                        {/* <a className="menu-color"  href={'/#temnn'} > Coding</a> */}
                        <NavDropdown.Item href={"/#school"}>
                          <a className="menu-color"> Champs of Basic Coding</a>
                        </NavDropdown.Item>
                        <NavDropdown.Item href={"/#school"}>
                          {" "}
                          <Link className="menu-color">
                            {" "}
                            Champs of Advance Coding
                          </Link>
                        </NavDropdown.Item>
                      </div>
                      <div className="single-menu">
                        <p>Code Bees Courses</p>
                        <NavDropdown.Item href={"/#bees-program"}>
                          <a className="menu-color">
                            {" "}
                            Full Stack Data Analytics
                          </a>
                        </NavDropdown.Item>
                        <NavDropdown.Item href={"/#bees-program"}>
                          <a className="menu-color">
                            Full Stack Web Development
                          </a>
                        </NavDropdown.Item>
                      </div>
                      <div className="single-menu">
                        <p>Engineering Nerds Courses</p>
                        <NavDropdown.Item href={"/#engineering-program"}>
                          <a className="menu-color">Electrical Engineering</a>
                        </NavDropdown.Item>

                        <NavDropdown.Item href={"/#engineering-program"}>
                          <a className="menu-color">Mechanical Engineering</a>
                        </NavDropdown.Item>
                      </div>
                      <div className="single-menu">
                        <p>
                          <Link to={"/courses/python"} className="menu-color">
                            Industrial Courses
                          </Link>
                        </p>
                        <div className="menu-sub">
                          <Link to={"/courses/python"} className="menu-color">
                            Python
                          </Link>
                        </div>
                        <div className="menu-sub">
                          <Link to={"/courses/sql"} className="menu-color">
                            SQL
                          </Link>
                        </div>
                        <div>
                          <Link to={"/courses/java"} className="menu-color">
                            Java Programming
                          </Link>
                        </div>
                        <div className="menu-sub">
                          <Link to={"/courses/dsa"} className="menu-color">
                            DSA
                          </Link>
                        </div>
                        <div className="menu-sub">
                          <Link to={"/courses/cyber"} className="menu-color">
                            Cyber Security
                          </Link>
                        </div>
                        <div className="menu-sub">
                          <Link
                            to={"/courses/machineLearning"}
                            className="menu-color"
                          >
                            Data Visualization
                          </Link>
                        </div>
                        <div className="menu-sub">
                          <Link
                            to={"/courses/machineLearning"}
                            className="menu-color"
                          >
                            Machine Learning
                          </Link>
                        </div>
                        <div className="menu-sub">
                          <Link
                            to={"/courses/ArtificialIntelligence"}
                            className="menu-color"
                          >
                            Artificial Intelligence
                          </Link>
                        </div>
                      </div>
                    </div>
                  </NavDropdown>

                  <Nav.Link>
                    <Link
                      className="text-dark text-decoration-none"
                      to={"/hire"}
                    >
                      Hire From Us
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link
                      className="text-dark text-decoration-none free "
                      to={"/super"}
                    >
                      SUPER 30 Details
                    </Link>
                  </Nav.Link>

                  <Nav.Link
                    href="https://gog-lms.netlify.app/dashboard/assessment"
                    target="_blank"
                  >
                    <Link
                      className="text-dark text-decoration-none supper position-relative"
                      to="https://gog-lms.netlify.app/dashboard/assessment"
                      target="_blank"
                    >
                      Assesment Test
                      <span
                        style={{ top: "0px", right: "-30px" }}
                        class="position-absolute translate-middle badge rounded-pill bg-danger"
                      >
                        Free
                      </span>
                    </Link>
                  </Nav.Link>
                </Nav>

                <span>
                  <Button
                    onClick={() => navigate("/admissionForm")}
                    variant="btn btn-danger me-3"
                    className="nav-apply-now"
                  >
                    Apply Now
                  </Button>
                </span>

                {/* Progfile icon start  */}

                {user?.email && (
                  <Dropdown className="userProfileIcon">
                    <Dropdown.Toggle id="dropdown-basic">
                      {/* <FaUser/> */}

                      <img
                        style={{ borderRadius: "50%", width: "30px" }}
                        src={
                          user?.photoURL
                            ? user?.photoURL
                            : "https://i.ibb.co/jkbWws1/blank-profile-picture-973460-340.png"
                        }
                        alt=""
                      />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown className="droupdownlogout2">
                        <FaUser /> User Profile
                      </Dropdown>
                      <Dropdown.Divider />
                      <Dropdown className="droupdownlogout">
                        {user?.email ? (
                          <>
                            <Button onClick={handleLogOut}>
                              <FiLogOut />
                              Log Out
                            </Button>
                          </>
                        ) : (
                          <Link to="signup">
                            <span>
                              <span
                                className={{ style: "text-decoration-none" }}
                              >
                                {" "}
                                <FiLogIn /> Sign Up
                              </span>
                            </span>
                          </Link>
                        )}
                      </Dropdown>
                    </Dropdown.Menu>
                  </Dropdown>
                )}

                {/* {user?.uid ? (
                  <>
                    <Button onClick={handleLogOut} variant="outline-dark ">
                      Log Out
                    </Button>
                  </>
                ) : (
                  <Link to="signup">
                    <span>
                      <Button variant="outline-dark ">Sign Up</Button>
                    </span>
                  </Link>
                )} */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Navbar>
      ))}

      {/* for Modal */}
      <div className="form-model">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="from-title">Please Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* // start form  --------------------------------------------- */}
            {/* <div className="form-box">
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

              <input type="checkbox" required="" id='ready' checked />
              <label htmlFor="ready">I accept all <a href="/terms&amp;conditions">Terms &amp;
                Conditions</a> </label>

            </div>

            <button className="apply-btn" type="submit">
              Apply Now
            </button>
            {signUpError && <p className="text-red-600">{signUpError}</p>}
          </form>
        </div> */}
            {/* <AdmissionForm></AdmissionForm> */}

            {/* //-------------------- end form  --------------------------------------------- */}
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="outline-secondary" onClick={handleClose}>
        Close
    </Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default NavBar;
