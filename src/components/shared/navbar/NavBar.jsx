import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './NavBar.css'

import logo from '../../../assets/images/latestlogo.jpg'


const NavBar = () => {
    // state for the nav items show 
    const [showDropdown, setShowDropdown] = useState(false);
    
    return (
      <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="white" sticky="top" expand={expand} className="shadow-sm mb-custom px-5">
          <Container fluid>
            <Navbar.Brand href="#"> <img className='brand' style={{width: "9rem"}} src={logo}  alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header className='mb-custom2 ' closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img className='brand' style={{width: "8rem"}} src={logo}  alt="logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  <Nav.Link><Link className='text-decoration-none text-dark ' to='/'>Home</Link></Nav.Link>
                  <NavDropdown
                    title={
                      <span className='text-dark'>Courses</span>
                    }
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}
                    show={showDropdown}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  
                  <Nav.Link><Link className='text-dark text-decoration-none'>Hire From Us</Link></Nav.Link>
                </Nav>
                
                  <Button variant="btn btn-danger me-3" className='nav-apply-now'>Apply Now</Button>
                  <Link to='signup'><span><Button variant="outline-dark ">Sign Up</Button></span></Link>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>      
    );
};

export default NavBar;