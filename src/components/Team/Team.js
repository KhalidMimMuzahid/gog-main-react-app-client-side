import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Team.css'
// import required modules
import { EffectCoverflow, Autoplay } from "swiper";

import team1 from '../../assets/images/teams/1.jpg'
import team2 from '../../assets/images/teams/2.jpg'
import team3 from '../../assets/images/teams/sandeep.jpeg'
import team4 from '../../assets/images/teams/4.jpg'
import team5 from '../../assets/images/teams/5.jpg'
import team6 from '../../assets/images/teams/6.jpg'
import team7 from '../../assets/images/teams/7.jpg'
import team8 from '../../assets/images/teams/8.jpg'
import team9 from '../../assets/images/teams/9.jpg'
import team10 from '../../assets/images/teams/10.jpg'

const Team = () => {
    return (
        <div className="slider-area">
            <div className="team-title container">
                <h4>OUR TEAM</h4>
                <h2>MEET OUR Team</h2>
                <p>"A Team Of IITians to Boost your Tech Career to New Heights. The Curriculum Team is an experienced group of data analyst instructors"</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={"auto"}
                            spaceBetween={70}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 3,

                                slideShadows: true,
                            }}

                            breakpoints={{
                                640: {
                                    modifier: 1,
                                },
                                768: {
                                    modifier: 2,
                                },
                                1024: {
                                    modifier: 3,
                                },
                            }}
                            modules={[EffectCoverflow, Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide className="single-card">
                                <div className="single-member">
                                    <div className="team-img">
                                        <img src={team1} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <p className="team-name">Subhod khullar</p>
                                        <p className="team-title">Lead Instructor</p>
                                        <p className="team-education">Mtech-IIT Roorkee | Phd-IIT Roorkee</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-card">
                                <div className="single-member">
                                    <div className="team-img">
                                        <img src={team2} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <p className="team-name">Rohit Sahu</p>
                                        <p className="team-title">Lead Curriculum Engineer</p>
                                        <p className="team-education">Mtech-IIT Roorkee | Phd-IIT Roorkee</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-card">
                                <div className="single-member">
                                    <div className="team-img">
                                        <img src={team3} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <p className="team-name">Sandeep kumar</p>
                                        <p className="team-title">Lead Instructor</p>
                                        <p className="team-education">Mtech-Thapar University | Phd-IIT Roorkee</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-card">
                                <div className="single-member">
                                    <div className="team-img">
                                        <img src={team4} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <p className="team-name">Rohit rana</p>
                                        <p className="team-title">Associate Director - Curriculum</p>
                                        <p className="team-education">Mtech-IIT Kharagpur | Phd-IIT Roorkee</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-card">
                                <div className="single-member">
                                    <div className="team-img">
                                        <img src={team5} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <p className="team-name">Rajiv Rana</p>
                                        <p className="team-title">Lead Student Experience</p>
                                        <p className="team-education">Mtech-IIT Kharagpur | Phd-IIT Roorkee</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-card">
                                <div className="single-member">
                                    <div className="team-img">
                                        <img src={team6} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <p className="team-name">Praveen Sai Teella</p>
                                        <p className="team-title">Lead Instructor</p>
                                        <p className="team-education">Btech-IIT Guwahati</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-card">
                                <div className="single-member">
                                    <div className="team-img">
                                        <img src={team7} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <p className="team-name">Manish d pepal</p>
                                        <p className="team-title">Lead Instructor</p>
                                        <p className="team-education">Mtech-IIT Kharagpur | Phd-IIT Roorkee</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-card">
                                <div className="single-member">
                                    <div className="team-img">
                                        <img src={team8} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <p className="team-name">Deepika Yadav</p>
                                        <p className="team-title">Lead Student Experience</p>
                                        <p className="team-education">Mtech-IIT Madras | Phd-IIT Roorkee</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-card">
                                <div className="single-member">
                                    <div className="team-img">
                                        <img src={team9} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <p className="team-name">Arun chauhan </p>
                                        <p className="team-title">Associate Director - Curriculum</p>
                                        <p className="team-education">Mtech-IIT Kharagpur | Phd-IIT Roorkee</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-card">
                                <div className="single-member">
                                    <div className="team-img">
                                        <img src={team10} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <p className="team-name">Ajay Kumar</p>
                                        <p className="team-title">Associate Director - Curriculum</p>
                                        <p className="team-education">Mtech-IIT Kharagpur | Phd-IIT Roorkee</p>

                                    </div>
                                </div>
                            </SwiperSlide>



                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;