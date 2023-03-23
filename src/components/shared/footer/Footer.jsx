import React from 'react';
import './footer.css'

const Footer = () => {
    return (
       <footer>
            <div className="container">
                <div className="row">
                    <div className='col-md-3'>
                        <h4>Geeks of Gurukul</h4>
                        <ul>
                            <li><a href="/about_us">About Us</a></li>
                            <li><a href="/#school">Our Courses</a></li>
                            <li><a href="hire_us">Hire From Us</a></li>
                            <li><a href="industrial_courses">Industrial Courses</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    
                    </div>
                    <div className='col-md-3'>

                    </div>
                    <div className='col-md-3'>

                    </div>
                    <div className='col-md-3'>

                    </div>
                    
                </div>
            </div>
       </footer>
    );
};

export default Footer;