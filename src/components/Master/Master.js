import React from 'react';
import './Master.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { FaCalendarAlt, FaClock, IconName } from "react-icons/fa";
import python from '../../assets/images/Crouse/python.jpg'
import machine from '../../assets/images/Crouse/machine learning.jpg'
import microsoft  from '../../assets/images/microsoft.png'
import Analyst from '../../assets/images/cognizant.png'

const Master = () => {



    return (
        <div>
            <div className='master-area'>
                <div class="Register_masterclass">
                    <p>Hey Learners!!! Let’s </p>
                    <h1>Register <span className='green-title'>Master Class </span>at <span className='red-title'>₹ 0/-</span></h1>
                </div>
                <div className="container">

                    <div className="row">
                        <div className="col-md-7">
                            <div className="left_card">
                                <div className="content">
                                    <h2>Upcoming Master Class</h2>
                                    <h6>
                                        Register for upcoming master classes to get domain knowledge from
                                        industry experts
                                    </h6>
                                </div>
                                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                    <SwiperSlide>
                                        <section class="webinar">
                                            <div class="text_a">
                                                <h2>Python : Master Class</h2>
                                      
                                                <div class="webinar_dates">
                                                    <div class="cover_icon">
                                                        <FaCalendarAlt></FaCalendarAlt>
                                                        <span> 01-04-23</span>
                                                        
                                                    </div>
                                                    <div class="cover_icon">
                                                        <FaClock></FaClock><span> 10AM-11AM</span>
                                                    </div>
                                                </div>

                                                <h3>Anjali Agarwal</h3>
                                                <h6>
                                                    lead Instructor <br/><span class="instructorName-logo">Data Analyst-<img class="upcoming_master_class_logo" src={Analyst} alt=""/> </span>


                                                </h6>
                                            </div>
                                            <div class="img_a">
                                                <img class="im" src={python}/>
                                                    
                                            </div>
                                        </section>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <section class="webinar">
                                            <div class="text_a">
                                                <h2>ML: Master Class</h2>
                                      
                                                <div class="webinar_dates">
                                                    <div class="cover_icon">
                                                        <FaCalendarAlt></FaCalendarAlt>
                                                        <span> 01-04-23</span>
                                                        
                                                    </div>
                                                    <div class="cover_icon">
                                                        <FaClock></FaClock><span> 10AM-11AM</span>
                                                    </div>
                                                </div>

                                                <h3>Praveen</h3>
                                                <h6>
                                                    lead Instructor <br/><span class="instructorName-logo">Data Analyst-<img class="upcoming_master_class_logo" src={microsoft} alt=""/> </span>


                                                </h6>
                                            </div>
                                            <div class="img_a">
                                                <img class="im" src={machine}/>
                                                    
                                            </div>
                                        </section>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className="col-md-5">





                            <div class="form-width">
                                <div class="live-title">
                                    <p class="styles_form_title">Register</p>
                                    <p class="styles_form_title">Master class for <span className='red-title'>Free!</span></p>
                                </div>
                                <form id="register-form">
                                    <div class="form-group">
                                        <input type="text" id="name" name="name" required="" autocomplete="on" />
                                        <label for="full-name">Full Name</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" id="email" name="email" required="" />
                                        <label for="email">Email ID</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="tel" id="ph_no" name="ph_no" required="" />
                                        <label for="mobile-number">Mobile Number</label>
                                    </div>
                                    <div class="form-group1">
                                        <input type="checkbox" id="terms-and-conditions" name="terms-and-conditions" required="" />
                                        <label> I agree to Geeks of Gurukul's<a href="/terms&amp;conditions"> <span className='green-title'> Terms and Conditions</span></a></label>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" id="register-button">Register Now</button>
                                    </div>
                                </form>
                            </div>






                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Master;