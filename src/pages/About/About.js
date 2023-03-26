import React from 'react';
import './About.css'
import { GrPersonalComputer, IconName } from "react-icons/gr";

const About = () => {
    return (
        <div className='about-area'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div class="about">
                            <h1 class="txt_about_us">About Us</h1>
                            <p class="txt_about_content">Geeks of Gurukul is a leading skill building school where we upskill you and provide
                                the
                                opportunity to work directly with industry experts on latest projects. It has been founded with a
                                mission to solve the problem of learning outcome. We allow you to develop your abilities and get
                                employed in top tech and non tech companies.we are an organisation that offers programs in both IT
                                and
                                Non-IT domains providing equal opportunity to everyone. At Geeks of Gurukul learners focus towards the skill
                                that
                                are needed by the real employers.
                                Our commitment is to make education accessible and affordable to all. Geeks of Gurukul is working to
                                democratize
                                the higher education in true sense. Geeks of Gurukul as the name suggests is a digital Gurukul
                                offering
                                various technical programs with guaranteed job opportunities.
                            </p>
                        </div>
                        <div class="messageceo">
                            <h1 class="txt_about_us">Message From CEO</h1>
                            <p class="txt_about_content">
                                At Geeks of Gurukul, we strive to provide our students with the skills and knowledge they need to succeed in today's fast-paced world. Our comprehensive training programs cover a wide range of technologies, including SQL, Machine Learning, Python, Artificial Intelligence, Cybersecurity, Data Structures and Algorithms, and Tableau/Power BI.

                                Our expert instructors and cutting-edge curriculum are designed to help you understand the fundamentals of each technology and apply your learning to your future career. We provide hands-on training using real-world scenarios to help you gain practical experience and prepare for the challenges of the modern workplace.

                                Whether you're a student looking to enhance your technical skills or a professional seeking to stay ahead of the curve, we have a program that can help you achieve your goals. Enroll in one of our training programs today and take the first step towards a successful future!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 offset-md-1">
                        <div class="abt-card1">
                            <p class="abt_bold">2021</p>
                            <p class="abt_subtext">We Started Our Journey</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div class="abt-card2">
                            <p class="abt_bold">450+</p>
                            <p class="abt_subtext">Students Currently Enrolled</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4" >
                        <div class="abt-card3">
                            {/* <GrPersonalComputer></GrPersonalComputer> */}
                            <p class="abt_bold2"> 30+</p>
                            <p class="abt_bold3">Total Batches</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4" >
                        <div class="abt-card4">
                            
                            <p class="abt_bold2"> 96%</p>
                            <p class="abt_bold3">Placemnt Rate</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4" >
                        <div class="abt-card5">
                            
                            <p class="abt_bold2"> 200+</p>
                            <p class="abt_bold3">Hiring Partners</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;