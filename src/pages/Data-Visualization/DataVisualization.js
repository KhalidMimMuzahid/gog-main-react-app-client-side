import React from 'react';
import { BsClockFill,  BsPatchCheckFill } from "react-icons/bs";

import Hourglass from '../../assets/images/icon/Group 9115.svg'
import Computer from '../../assets/images/icon/Vector (2).svg'
import Certificate from '../../assets/images/icon/Vector (3).svg'
const DataVisualization = () => {
    return (
        <div>
                        <div className='course-area'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="up-card ">
                                <div className="up-card-head">
                                    <div className="up-card-rigth">
                                        <h3>Power BI or Tableau</h3>
                                        <p>Power BI is a business analytics service provided by Microsoft that can analyze and visualize data, extract insights, and share it across various departments within your organization. While Tableau is a powerful Business Intelligence tool that manages the data flow and turns data into actionable information.</p>
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
                                <h1>Are you a student looking to get ahead in the world of data analysis and visualization?</h1>
                                <p>
                                Tableau and Power BI are two of the most popular tools for data visualization in the industry, and mastering these tools can help you stand out in a competitive job market. <br />

                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default DataVisualization;