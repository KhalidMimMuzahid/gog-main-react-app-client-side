import React from 'react';
import { BsClockFill, BsPatchCheckFill } from "react-icons/bs";

import Hourglass from '../../assets/images/icon/Group 9115.svg'
import Computer from '../../assets/images/icon/Vector (2).svg'
import Certificate from '../../assets/images/icon/Vector (3).svg'
const Cyber = () => {
    return (
        <div>
            <div className='course-area'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="up-card ">
                                <div className="up-card-head">
                                    <div className="up-card-rigth">
                                        <h3>Cyber Security</h3>
                                        <p>Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security.</p>
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
                                <h1>Are you a student looking to stay safe online and protect your personal information?
                                </h1>
                                <p>
                                    Cybersecurity may be the solution you need. With the increasing prevalence of cyber attacks, it is more important than ever to understand how to keep yourself and your data secure.
                                    Geeks of Gurukul is here to help. We provide hands-on training using real-world scenarios to help you apply your learning to your daily life.<br />

                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Cyber;