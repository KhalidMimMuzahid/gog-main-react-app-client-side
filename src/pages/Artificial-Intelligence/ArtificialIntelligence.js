import React from 'react';
import { BsCheckLg, BsClock, BsHourglass } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { FaCertificate, FaProjectDiagram } from "react-icons/fa";
const ArtificialIntelligence = () => {
    return (
        <div>
                        <div className='course-area'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="up-card ">
                                <div className="up-card-head">
                                    <div className="up-card-rigth">
                                        <h3>Artificial Intelligence</h3>
                                        <p>Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.</p>
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
                                <h1>Are you a student looking to gain a competitive edge in today's job market?</h1>
                                <p>
                                Artificial Intelligence (AI) may be the solution you need. AI is revolutionizing industries such as healthcare, finance, and marketing, and learning AI can help you gain the skills you need to excel in a wide range of careers. <br />

                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ArtificialIntelligence;