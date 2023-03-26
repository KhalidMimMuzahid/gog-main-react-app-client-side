import React from 'react';
import { BsCheckLg, BsClock, BsHourglass } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { FaCertificate, FaProjectDiagram } from "react-icons/fa";


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
                                        <BsCheckLg></BsCheckLg>
                                        Eligibility - All degrees &amp; branches
                                    </li>
                                    <li className="course-contnet">
                                        <BsHourglass></BsHourglass>
                                        Duration - 1 Month
                                    </li>
                                    <li className="course-contnet">
                                        <BsClock></BsClock>
                                        Class Timings: Flexible time as per
                                        student
                                    </li>
                                    <li className="course-contnet">
                                        <MdComputer></MdComputer>
                                        Class Type: Live Lecture Classes
                                    </li>

                                    <li className="course-contnet">
                                        <FaCertificate></FaCertificate>
                                        Course Completion Certificate
                                    </li>
                                    <li className="course-contnet">
                                        <FaProjectDiagram></FaProjectDiagram>
                                        Industry-Based Projects
                                    </li>
                                </ul>
                                <hr className="card_hr" />
                                <div className="upcming_footer">
                                    <div className="upcomig_hurry_up">
                                        <div className="up_card_foottx">
                                            <BsClock></BsClock>
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