import React from 'react';
import './Master.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation,Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import python from '../../assets/images/Crouse/py1.png'
import machine from '../../assets/images/Crouse/machine learning.jpg'
import microsoft from '../../assets/images/microsoft.png'
import Analyst from '../../assets/images/cognizant.png'
import arrowimg from '../../assets/images/Crouse/white-arrow.png'

const Master = () => {



    return (
        <div>
            <div className='master-area'>

                <div className="Register_masterclass">
                    <p>Hey Learners!!! Let’s </p>
                    <h1>Register <span className='green-title'>Master Class </span>at <span className='red-title'>₹ 0/-</span></h1>
                </div>
                <div className="arrow-img">
                    <img src={arrowimg} alt="" />
                </div>
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-xl-7">
                            <div className="left_card">

                                <div className="content">
                                    <h2>Upcoming Master Class</h2>
                                    <h6>
                                        Register for upcoming master classes to get domain knowledge from
                                        industry experts
                                    </h6>
                                </div>
                                <Swiper navigation={true} modules={[Navigation,Pagination]} pagination={{
                                    clickable: true,
                                }} className="mySwiper">
                                    <SwiperSlide>
                                        <section className="webinar">
                                            <div className="text_a">
                                                <h2>Python : Master Class</h2>

                                                <div className="webinar_dates">
                                                    <div className="cover_icon">
                                                        <FaCalendarAlt></FaCalendarAlt>
                                                        <span> 16-04-23</span>

                                                    </div>
                                                    <div className="cover_icon">
                                                        <FaClock></FaClock><span> 10AM-11AM</span>
                                                    </div>
                                                </div>

                                                <h3>Anjali Agarwal</h3>
                                                <h6>
                                                    lead Instructor <br /><span className="instructorName-logo">Data Analyst-<img className="upcoming_master_class_logo" src={Analyst} alt="" /> </span>


                                                </h6>
                                            </div>
                                            <div className="img_a">
                                                <img className="im" src={python} alt="pythion img"/>

                                            </div>
                                        </section>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="webinar">
                                            <div className="text_a">
                                                <h2>ML: Master Class</h2>

                                                <div className="webinar_dates">
                                                    <div className="cover_icon">
                                                        <FaCalendarAlt></FaCalendarAlt>
                                                        <span> 16-04-23</span>

                                                    </div>
                                                    <div className="cover_icon">
                                                        <FaClock></FaClock><span> 10AM-11AM</span>
                                                    </div>
                                                </div>

                                                <h3>Praveen</h3>
                                                <h6>
                                                    lead Instructor <br /><span className="instructorName-logo">Data Analyst-<img className="upcoming_master_class_logo" src={microsoft} alt="" /> </span>


                                                </h6>
                                            </div>
                                            <div className="img_a">
                                                <img className="im" src={machine} alt="Machine img"/>

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-xl-5">





                            <div className="form-width">
                                <div className="live-title">
                                    <p className="styles_form_title">Register</p>
                                    <p className="styles_form_title">Master class for <span className='red-title'>Free!</span></p>
                                </div>
                                <form id="register-form">
                                    <div className="form-group">
                                        <label htmlFor="full-name">Full Name</label>
                                        <input type="text" id="name" name="name" required="" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" id="email" name="email" required="" />
                                        <label htmlFor="email">Email ID</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" id="ph_no" name="ph_no" required="" />
                                        <label htmlFor="mobile-number">Mobile Number</label>
                                    </div>
                                    <div className="form-group1">
                                        <input type="checkbox" checked id="terms-and-conditions" name="terms-and-conditions" required="" />
                                        <label htmlFor="terms-and-conditions">  I agree to Geeks of Gurukul's<a href="/terms&amp;conditions"> <span className='green-title'> Terms and Conditions</span></a></label>
                                    </div>
                                    <div className="form-group">
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