<div className='menu-gr'>
{["sm"].map((expand) => (
  <Navbar
    key={expand}
    bg="white"
    sticky="top"
    expand={expand}
    className="shadow-sm mb-custom px-5"
  >
    <div className="container">
      <Navbar.Brand>
        <Link to={'/'}>
          <img
            className="brand"
            style={{ width: "9rem" }}
            src={logo}
            alt="logo"
          />
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
            {
              user?.email === 'amitpaultl@gmail.com' &&
              <Nav.Link>
                <Link className="text-decoration-none text-dark " to="/admin">
                  Admin
                </Link>
              </Nav.Link>
            }

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
                  <NavDropdown.Item href={'/#school'}>
                    <a className="menu-color" > Champs of Basic Coding</a>
                  </NavDropdown.Item>
                  <NavDropdown.Item href={'/#school'}> <Link className="menu-color">  Champs of Advance Coding</Link>
                  </NavDropdown.Item>
                </div>
                <div className="single-menu">
                  <p>Code Bees Courses</p>
                  <NavDropdown.Item href={'/#bees-program'}>
                    <a className="menu-color" > Full Stack Data
                      Analytics</a>
                  </NavDropdown.Item>
                  <NavDropdown.Item href={'/#bees-program'}>
                    <a className="menu-color" >Full
                      Stack Web
                      Development</a>
                  </NavDropdown.Item>

                </div>
                <div className="single-menu">
                  <p>Engineering Nerds Courses</p>
                  <NavDropdown.Item href={'/#engineering-program'}>
                    <a className="menu-color" >Electrical
                      Engineering</a>
                  </NavDropdown.Item>

                  <NavDropdown.Item href={'/#engineering-program'}>
                    <a className="menu-color" >Mechanical
                      Engineering</a>
                  </NavDropdown.Item>
                </div>
                <div className="single-menu">
                  <p>
                    <Link to={'/courses/python'} className="menu-color" >Industrial
                      Courses</Link>

                  </p>
                  <div className="menu-sub">
                    <Link to={'/courses/python'} className="menu-color" >Python</Link>
                  </div>
                  <div className="menu-sub">

                    <Link to={'/courses/sql'} className="menu-color" >SQL</Link>
                  </div>
                  <div>

                    <Link to={'/courses/java'} className="menu-color" >Java Programming</Link>
                  </div>
                  <div className="menu-sub">

                    <Link to={'/courses/dsa'} className="menu-color" >DSA</Link>
                  </div>
                  <div className="menu-sub">

                    <Link to={'/courses/cyber'} className="menu-color" >Cyber Security</Link>
                  </div>
                  <div className="menu-sub">

                    <Link to={'/courses/machineLearning'} className="menu-color" >Data Visualization</Link>
                  </div>
                  <div className="menu-sub">

                    <Link to={'/courses/machineLearning'} className="menu-color" >Machine Learning</Link>
                  </div>
                  <div className="menu-sub">

                    <Link to={'/courses/ArtificialIntelligence'} className="menu-color" >Artificial Intelligence</Link>
                  </div>



                </div>
              </div>

            </NavDropdown>

            <Nav.Link>
              <Link
                className="text-dark text-decoration-none"
                to={"/"}
              >
                Hire From Us
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                className="text-dark text-decoration-none free"
                to={"/hire"}
              >
                Free Assessment Test
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                className="text-dark text-decoration-none supper"
                to={"/super"}
              >
                Super 30 Details
              </Link>
            </Nav.Link>
          </Nav>

          <span>
            <Button href="/admissionForm"
              variant="btn btn-danger me-3"

              className="nav-apply-now"
            >
              Apply Now
            </Button>
          </span>

          {user?.uid ? (
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
          )}
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