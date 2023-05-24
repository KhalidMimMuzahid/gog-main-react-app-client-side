import React from 'react';
import { BsCheckLg, BsClock, BsClockFill, BsHourglass, BsPatchCheckFill } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { FaCertificate, FaProjectDiagram } from "react-icons/fa";

const Hourglass = 'https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/icon/Group 9115.svg'
const Computer = 'https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/icon/Vector (2).svg'
const Certificate = 'https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/icon/Vector (3).svg'

const Python = () => {
    return (
        <div>
            
            <div className='course-area'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="up-card ">
                                <div className="up-card-head">
                                    <div className="up-card-rigth">
                                        <h3>Python Programming</h3>
                                        <p>Python is an interpreted, interactive, object-oriented programming language. It incorporates modules, exceptions, dynamic typing, very high level dynamic data types, and classes. It supports multiple programming paradigms beyond object-oriented programming, such as procedural and functional programming.</p>
                                    </div>

                                </div>

                                <ul>
                                    <li className="course-contnet">
                                        <BsPatchCheckFill></BsPatchCheckFill>
                                        Eligibility - All degrees & branches
                                    </li>
                                    <li className="course-contnet">
                                        <img className='img-icon'  src={Hourglass} alt="" />
                                        Duration - 1 Month
                                    </li>
                                    
                                    <li className="course-contnet">
                                        <img className='img-icon' src={Computer} alt="" />
                                        Class Timings : Flexible time as per student
                                    </li>

                                    <li className="course-contnet">
                                        <img className='img-icon'  src={Certificate} alt="" />
                                        Course Completion Certificate
                                    </li>
                                    <li className="course-contnet">
                                        <BsClockFill></BsClockFill>
                                        Course Completion Certificate
                                    </li>
                                </ul>
                                <hr className="card_hr" />
                                <div className="upcming_footer">
                                    <div className="upcomig_hurry_up">
                                        <div className="up_card_foottx">
                                            <BsClockFill></BsClockFill>
                                            <p className="hurry_up">Hurry up <br /><span className="limited_seats">Limited
                                                Seats</span> </p>
                                        </div>

                                        <div className="upcoming_footer_buttons">
                                            <button className="stroke_button"> Know
                                                More</button>
                                            <button className="solid_button" > Apply
                                                Now</button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="courseinfo">
                                <h1>Are you a student looking to enhance your technical skills and
                                    stand out in a competitive job market?</h1>
                                <p>
                                    Python may be the
                                    solution you need. Python is a versatile programming language
                                    that is widely used across various industries, including
                                    finance, healthcare, and technology. It is an essential tool for
                                    data analysis, web development, and automation. <br />

                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Python;