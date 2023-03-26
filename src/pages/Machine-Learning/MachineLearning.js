import React from 'react';
import { BsCheckLg, BsClock, BsHourglass } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { FaCertificate, FaProjectDiagram } from "react-icons/fa";
const MachineLearning = () => {
    return (
        <div>
                        <div className='course-area'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="up-card ">
                                <div className="up-card-head">
                                    <div className="up-card-rigth">
                                        <h3>Machine Learning</h3>
                                        <p>Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. Machine learning algorithms use historical data as input to predict new output values.</p>
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
                                <h1>Are you a student looking to stay ahead of the curve in the rapidly evolving field of technology?</h1>
                                <p>
                                Machine Learning (ML) may be the solution you need. ML is a subfield of Artificial Intelligence (AI) that is revolutionizing industries such as healthcare, finance, and marketing. Learning ML can help you gain the skills you need to excel in a wide range of careers. <br />

                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default MachineLearning;