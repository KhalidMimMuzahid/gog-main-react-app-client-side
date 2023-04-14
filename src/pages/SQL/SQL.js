import React from 'react';
import { MdComputer } from "react-icons/md";
import { BsCheckLg, BsClock, BsClockFill, BsHourglass, BsPatchCheckFill } from "react-icons/bs";
import { FaCertificate, FaProjectDiagram } from "react-icons/fa";

import Hourglass from '../../assets/images/icon/Group 9115.svg'
import Computer from '../../assets/images/icon/Vector (2).svg'
import Certificate from '../../assets/images/icon/Vector (3).svg'
const SQL = () => {
    return (
        <div>
            <div className='course-area'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="up-card ">
                                <div className="up-card-head">
                                    <div className="up-card-rigth">
                                        <h3>SQL Programming</h3>
                                        <p>Structured query language (SQL) is a programming language for storing and processing information in a relational database. A relational database stores information in tabular form, with rows and columns representing different data attributes and the various relationships between the data values.</p>
                                    </div>

                                </div>

                                <ul>
                                    <li className="course-contnet">
                                        <BsPatchCheckFill></BsPatchCheckFill>
                                        Eligibility - All degrees & branches
                                    </li>
                                    <li className="course-contnet">
                                        <img className='img-icon' src={Hourglass} alt="" />
                                        Duration - 1 Month
                                    </li>

                                    <li className="course-contnet">
                                        <img className='img-icon' src={Computer} alt="" />
                                        Class Timings : Flexible time as per student
                                    </li>

                                    <li className="course-contnet">
                                        <img className='img-icon' src={Certificate} alt="" />
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
                                <h1>Are you struggling to make sense of the data businesses generates?</h1>
                                <p>
                                    Do you want to improve decision-making and gain a competitive edge? SQL (Structured Query Language) may be the solution you need.
                                    SQL is a powerful programming language that helps businesses manage and manipulate large sets of data.<br />

                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SQL;