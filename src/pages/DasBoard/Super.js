import React from 'react';
import { GrAnnounce } from "react-icons/gr";
import { AiFillCheckSquare } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import './Super.css'
import elipimg from '../../assets/images/Ellipse 4.png'
import image from '../../assets/images/bannre/Group 9384WebDevelopment.svg'
import image2 from '../../assets/images/bannre/Group 9383DataAnalyst.png'
import vector from '../../assets/images/Vector.png'
import bannerSuper from '../../assets/images/bannre/hurr.svg'
import banner from '../../assets/images/bannre/border.svg'
import road from '../../assets/images/bannre/road.svg'
import road1 from '../../assets/images/bannre/road1.svg'
import road2 from '../../assets/images/bannre/road2.svg'
import road3 from '../../assets/images/bannre/road3.svg'
import road4 from '../../assets/images/bannre/road4.svg'
import road5 from '../../assets/images/bannre/road5.svg'
import road6 from '../../assets/images/bannre/road6.svg'
import arrowroad from '../../assets/images/bannre/arrowroad.svg'
const Super = () => {
    return (
        <div>
            <div className="banner-super">
                <div className="container">
                    <div className="sloop">
                        <div className="sm">
                            <div className="super-banner">
                                <img src={bannerSuper} alt="" />
                            </div>
                        </div>
                        <div className="sm">
                            <div className="super-text">
                                <h1> <span>Enrollment for</span>   SUPER-30 </h1>
                                <p>Job Guarantee Batch</p>
                                <button>Reserve Pre Course Seat</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="super-course-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 col-lg-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className='super-area'>

                                        <div className="super-part">
                                            <div className="super-title">
                                                <h2>SUPER-30 <span>Job Guarantee Batch</span></h2>
                                                <p>Get Placed as a  <span>Full Stack Web Developer</span> </p>
                                            </div>
                                            <div className="super-title dis">
                                                <h2>SUPER-30 </h2>
                                                <h2><span>Job Guarantee Batch</span></h2>
                                                <p>Get Placed as a   </p>
                                                <p><span>Full Stack Web Developer</span></p>
                                            </div>
                                            <p className="update">
                                                <img src={vector} alt="" />
                                                To get seat in SUPER-30 batch eligibility are :
                                            </p>
                                            <ul>
                                                <li className='green-check'><AiFillCheckSquare></AiFillCheckSquare>Attend 5 days Free Pre-Course</li>
                                                <li className='green-check'>

                                                    <AiFillCheckSquare></AiFillCheckSquare>
                                                    AClear “Super-30 Entrance Exam” after Pre-Course</li>
                                            </ul>
                                            <p className='note-text'>Note : Only Students who clear Super-30 Entrance Exam will get seat   </p>
                                            <h2 className="subtitle">
                                                Benefits of SUPER-30 students
                                            </h2>
                                            <ul>
                                                <li className='black-check'><AiFillCheckSquare></AiFillCheckSquare>100% Job Guarantee for Super-30 Graduate Student</li>
                                                <li className='black-check'><AiFillCheckSquare></AiFillCheckSquare>Internship Certificate provided by Geeks of Gurukul</li>
                                                <li className='black-check'><AiFillCheckSquare></AiFillCheckSquare>Course completion certificate power by Skill India</li>
                                                <li className='black-check'><AiFillCheckSquare></AiFillCheckSquare>Latter of recommendation provided by Geeks of Gurukul</li>
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
                                            <div className="apply-free">
                                                <button>Apply for Free Pre-Course <BsArrowRight></BsArrowRight></button>

                                            </div>
                                            <div className="super-img">
                                                <img src={image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className='super-area secant-part'>

                                        <div className="super-part">
                                            <div className="super-title secant-part">
                                                <h2>SUPER-30 <span>Job Guarantee Batch</span></h2>
                                                <p>Get Placed as a  <span>Full Stack Data Scientist</span> </p>
                                            </div>
                                            <div className="super-title dis secant-part">
                                                <h2>SUPER-30 </h2>
                                                <h2><span>Job Guarantee Batch</span></h2>
                                                <p>Get Placed as a   </p>
                                                <p><span>Full Stack Data Scientist </span></p>
                                            </div>
                                            <p className="update">
                                                <img src={vector} alt="" />
                                                To get seat in SUPER-30 batch eligibility are :
                                            </p>
                                            <ul>
                                                <li className='green-check secant-part'><AiFillCheckSquare></AiFillCheckSquare>Attend 5 days Free Pre-Course</li>
                                                <li className='green-check secant-part'><AiFillCheckSquare></AiFillCheckSquare>AClear “Super-30 Entrance Exam” after Pre-Course</li>
                                            </ul>
                                            <p className='note-text'>Note : Only Students who clear Super-30 Entrance Exam will get seat   </p>
                                            <h2 className="subtitle">
                                                Benefits of SUPER-30 students
                                            </h2>
                                            <ul>
                                                <li className='black-check'><AiFillCheckSquare></AiFillCheckSquare>100% Job Guarantee for Super-30 Graduate Student</li>
                                                <li className='black-check'><AiFillCheckSquare></AiFillCheckSquare>Internship Certificate provided by Geeks-Of-Gurukul</li>
                                                <li className='black-check'><AiFillCheckSquare></AiFillCheckSquare>Course Completion Certificate power by Skill India</li>
                                                <li className='black-check'><AiFillCheckSquare></AiFillCheckSquare>Letter Of Recommendation provided by Geeks of Gurukul</li>
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
                                            <div className="apply-free">
                                                <button>Apply for Free Pre-Course <BsArrowRight></BsArrowRight></button>

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
                            <div className="road-map">
                                <div className="road-title">
                                    <h1>ROAD MAP</h1>
                                </div>
                                <p className='free-apply'>
                                    Apply for free Pre-course
                                </p>
                                <div className="road-btu">
                                    <img className='arrowimg' src={arrowroad} alt="" />
                                    <div className="single-btu">
                                        <img src={road} alt="" />
                                        <p>Attend 5 Day <br />
                                            Free Pre Course</p>
                                    </div>
                                    <img className='arrowimg' src={arrowroad} alt="" />
                                    <div className="single-btu">
                                        <img src={road1} alt="" />
                                        <p> Clear Super 30 <br />
                                            Entrance Exam</p>
                                    </div>
                                    <img className='arrowimg' src={arrowroad} alt="" />
                                    <div className="single-btu">
                                        <img src={road2} alt="" />
                                        <p>Get Selected <br />
                                            in Super 30</p>
                                    </div>
                                    <img className='arrowimg' src={arrowroad} alt="" />
                                    <div className="single-btu">
                                        <img src={road3} alt="" />
                                        <p>Pay Fees <br /> <span>Know Details</span></p>
                                    </div>
                                    <img className='arrowimg' src={arrowroad} alt="" />
                                    <div className="single-btu yellow">
                                        <img src={road4} alt="" />
                                        <p>6 Months  <span className='yellow'>Coding <br />
                                            Commando Training</span></p>
                                    </div>
                                    <div className="winner">
                                        <div className="left-winer">
                                            <img className='arrowimg' src={arrowroad} alt="" />
                                            <div className="single-btu yellow">
                                                <img src={road5} alt="" />
                                                <p>Get Placed </p>
                                            </div>
                                        </div>
                                        <div className="right-winer">
                                            <img className='arrowimg' src={arrowroad} alt="" />
                                            <div className="single-btu yellow">
                                                <img src={road6} alt="" />
                                                <p>If not Placed, <br />
                                                    100% Fee Refund*</p>
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
                                <p>A Full Stack Data Science Program is a comprehensive training program that covers all the essential skills and knowledge required for a data scientist to work effectively in a modern data-driven organization. It typically includes training in programming, statistics, data visualization, data engineering, machine learning, and deep learning.

                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="super-about">
                                <h2>About Full Stack Web Development Program</h2>
                                <p>A Full Stack Web Development Program is a comprehensive training program that covers all the essential skills and knowledge required for a web developer to work effectively in a modern web development organization. It typically includes training in both front-end and back-end web development.
                                    Front-end web development involves creating the user-

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Super;