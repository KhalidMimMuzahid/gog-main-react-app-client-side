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
                                    <li><a href="/about">About Us</a></li>
                                    <li><a href="/#school">Our Courses</a></li>
                                    <li><a href="hire_us">Hire From Us</a></li>
                                    <li><a href="industrial_courses">Industrial Courses</a></li>
                                    <li><a href="/">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3" >
                            <div className="footer-col">
                                <h4>Geeks of Gurukul</h4>
                                <ul>
                                    <li><a href="/about_us">FAQ</a></li>
                                    <li><a href="/#school">Privacy Policy</a></li>
                                    <li><a href="/#school">Terms & Conditons</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3" >
                            <div className="footer-col">
                                <h4>Geeks of Gurukul</h4>
                                <ul>
                                    <li><a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwPkcPGDNbtThMdTLFLpstBcKnbgkfQQZpVjmhSRdJjZwFGnCfDgmDsZWJxSnRwMVgQGdnF">support@geeksofgurulkul.com</a></li>
                                    <li><a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwPkcPGDNbtThMdTLFLpstBcKnbgkfQQZpVjmhSRdJjZwFGnCfDgmDsZWJxSnRwMVgQGdnF">admission@geeksofgurukul.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3" >
                            <div class="footer-col">
                                <h4>follow us</h4>
                                <div class="social-links">
                                    
                                        <Link href="https://www.facebook.com/people/Geeks-of-Gurukul/100090832062663/" target="_blank"><FaFacebookF></FaFacebookF></Link>
                                        <Link href="https://twitter.com/geeksofgurukul" target="_blank"><FaTwitter></FaTwitter></Link>
                                        <Link href="https://www.instagram.com/geeks_of_gurukul/" target="_blank"><FaInstagram></FaInstagram></Link>
                                        <Link href="https://www.linkedin.com/company/geeks-of-gurukul/" target="_blank"><FaLinkedinIn></FaLinkedinIn></Link>
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