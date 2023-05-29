import React from "react";
// Import Swiper React components
//import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Team.css'
// import required modules
//import { EffectCoverflow, Autoplay } from "swiper";

// import team1 = 'https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/teams/1-removebg-preview.png'
// import team2 = 'https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/teams/2-removebg-preview.png'

import { Helmet } from "react-helmet";


// import education4 = 'https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/teams/sandeep.jpeg'
// import education5 = 'https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/teams/Thapar.png'

const team3 = 'https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/teams/sandeep-removebg-preview.png'
const team4 = 'https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/teams/4-removebg-preview.png'
const team5 = 'https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/teams/5-removebg-preview.png'
const team6 = 'https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/teams/6-removebg-preview.png'
const team7 = 'https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/teams/7-removebg-preview.png'
const team8 = 'https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/teams/8-removebg-preview.png'
const team9 = 'https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/teams/9-removebg-preview.png'
const team10 = 'https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/teams/10-removebg-preview.png'
const education = 'https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/teams/Guwahati.png'
const education1 = 'https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/teams/Kharagpur.png'
//const education2 = 'https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/teams/Madras .png'
const education3 = 'https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/teams/Roorkee .png'

const Team = () => {
    return (
        <div className="slider-area" id="temnn">
            <Helmet>
                <title>Geeks of Gurukul</title>
                <meta name="keywords" content="Curriculum design,Education standards,Learning objectives,Assessment strategies,,Student engagement,Teacher professional development,Instructional technology,Classroom management"/>
                    <meta
                    name="description"
                    content="Get to know our expert curriculum team dedicated to providing top-quality education standards, innovative approaches, and student engagement strategies. " />
                    <meta name="robots" content="index, follow"></meta>
            </Helmet>
            <div className="team-title container">
                <h3>OUR TEAM</h3>
                <h2>MEET OUR Team</h2>
                <p>"A Team Of IITians to Boost your Tech Career to New Heights. The Curriculum Team is an experienced group of data analyst instructors"</p>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-lg-3">
                        <div className="single-member">

                            <div className="team-img">
                                <img src={team3} alt="" />
                            </div>
                            <div className="team-text">
                                <p className="team-name">Sandeep kumar</p>
                                <p className="team-title">Lead Instructor</p>

                                <p className="education">
                                    Mtech - IIT Roorkee , Phd - IIT Roorkee
                                </p>
                                <div className="team-education">

                                    <img title="Phd-IIT Roorkee" src={education3} alt="" />
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="single-member">

                            <div className="team-img">
                                <img src={team10} alt="" />
                            </div>
                            <div className="team-text">
                                <p className="team-name">Ajay Kumar</p>
                                <p className="team-title">Director - Curriculum</p>
                                <p className="education">
                                    Mtech - IIT Kharagpur
                                </p>
                                <div className="team-education">
                                    <img title="Mtech-IIT Roorkee" src={education1} alt="" />

                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="single-member">

                            <div className="team-img">
                                <img src={team9} alt="" />
                            </div>
                            <div className="team-text">
                                <p className="team-name">Arun chauhan </p>
                                <p className="team-title">Associate Director - Curriculum</p>
                                <p className="education">Mtech - IIT Roorkee , Phd - IIT Roorkee</p>
                                <div className="team-education">
                                    <img title="Mtech-IIT Roorkee" src={education3} alt="" />

                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="single-member">

                            <div className="team-img">
                                <img src={team8} alt="" />
                            </div>
                            <div className="team-text">
                                <p className="team-name">Deepika Yadav</p>
                                <p className="team-title">Lead Student Experience</p>
                                <p className="education">
                                    Mtech - IIT Roorkee , Phd - IIT Roorkee
                                </p>
                                <div className="team-education">
                                    <img title="Mtech-IIT Roorkee" src={education3} alt="" />

                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="single-member">

                            <div className="team-img">
                                <img src={team7} alt="" />
                            </div>
                            <div className="team-text">
                                <p className="team-name">Manish d pepal</p>
                                <p className="team-title">Lead Instructor</p>

                                <p className="education">Mtech - IIT Kharagpur  , Phd - IIT Roorkee</p>
                                <div className="team-education">
                                    <img title="Mtech-IIT Kharagpur " src={education1} alt="" />
                                    <img title="Phd-IIT Roorkee" src={education3} alt="" />
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="single-member">

                            <div className="team-img">
                                <img src={team6} alt="" />
                            </div>
                            <div className="team-text">
                                <p className="team-name">Praveen Sai Teella</p>
                                <p className="team-title">Lead Instructor</p>
                                <p className="education">Btech - IIT Guwahati </p>
                                <div className="team-education">
                                    <img title="Btech-IIT Guwahati" src={education} alt="" />
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="single-member">

                            <div className="team-img">
                                <img src={team5} alt="" />
                            </div>
                            <div className="team-text">
                                <p className="team-name">Rajiv Rana</p>
                                <p className="team-title">Lead Student Experience</p>
                                <p className="education">Mtech - IIT Kharagpur  , Phd - IIT Roorkee</p>
                                <div className="team-education">
                                    <img title="Mtech-IIT Kharagpur" src={education1} alt="" />
                                    <img title="Phd-IIT Roorkee" src={education3} alt="" />
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="single-member">

                            <div className="team-img">
                                <img src={team4} alt="" />
                            </div>
                            <div className="team-text">
                                <p className="team-name">Rohit rana</p>
                                <p className="team-title">Associate Director - Operations</p>
                                <p className="education">Mtech - IIT Kharagpur  , Phd - IIT Roorkee</p>
                                <div className="team-education">
                                    <img title="Mtech-IIT Kharagpur " src={education1} alt="" />
                                    <img title="Phd-IIT Roorkee" src={education3} alt="" />
                                </div>

                            </div>

                        </div>
                    </div>







                </div>
            </div>
        </div>
    );
};

export default Team;