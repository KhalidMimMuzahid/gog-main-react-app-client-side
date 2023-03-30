import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3" >
                            <div className="footer-col">
                                <h4>Geeks of Gurukul</h4>
                                <ul>
                                    <li><Link to="/about" target='_blank'>About Us</Link></li>
                                    <li><Link to="/courses/python" target='_blank'>Our Courses</Link></li>
                                    <li><Link to="/hire"  target='_blank'>Hire From Us</Link></li>
                                    <li><Link to="/courses/python" target='_blank'>Industrial Courses</Link></li>
                                    <li><Link to="/">Blog</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3" >
                            <div className="footer-col">
                                <h4>Geeks of Gurukul</h4>
                                <ul>
                                    <li><Link to="/#faq">FAQ</Link></li>
                                    <li><Link to="/privacy" target='_blank'>Privacy Policy</Link></li>
                                    <li><Link to="/conditon" target='_blank'>Terms & Conditons</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3" >
                            <div className="footer-col">
                                <h4>Geeks of Gurukul</h4>
                                <ul className='emails'>
                                    
                                    <li><Link to="mailto:support@geeksofgurulkul.com">support@geeksofgurulkul.com</Link></li>
                                    <li><Link to="mailto:admission@geeksofgurukul.com">admission@geeksofgurukul.com</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3" >
                            <div class="footer-col">
                                <h4>follow us</h4>
                                <div class="social-links">
                                    
                                        <Link to="https://www.facebook.com/people/Geeks-of-Gurukul/100090832062663/" target="_blank"><FaFacebookF></FaFacebookF></Link>
                                        <Link to="https://twitter.com/geeksofgurukul" target="_blank"><FaTwitter></FaTwitter></Link>
                                        <Link to="https://www.instagram.com/geeks_of_gurukul/" target="_blank"><FaInstagram></FaInstagram></Link>
                                        <Link to="https://www.linkedin.com/company/geeks-of-gurukul/" target="_blank"><FaLinkedinIn></FaLinkedinIn></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;