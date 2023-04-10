import React from 'react';
import { GrAnnounce } from "react-icons/gr";
import { AiFillCheckSquare } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import './DasBoard.css'
import elipimg from '../../assets/images/Ellipse 4.png'
import image from '../../assets/images/Group 9343su.png'
import vector from '../../assets/images/Vector.png'
const DasBoard = () => {
    return (
        <div className='super-area'>
                <div className="eliii-img">
                    <img src={elipimg} alt="" />
                </div>
            <div className="super-part">
                <div className="super-title">
                    <h2>SUPER-30 <span>Job Guarantee Batch</span></h2>
                    <p>Get Placed as a  <span>Full Stack Web Developer</span> </p>
                </div>
                <p className="update">
                    <img src={vector} alt="" />
                    To get seat in SUPER-30 batch eligibility are :
                </p>
                <ul>
                    <li className='green-check'><AiFillCheckSquare></AiFillCheckSquare>Attend 5 days Free Pre-Course</li>
                    <li className='green-check'><AiFillCheckSquare></AiFillCheckSquare>AClear “Super-30 Entrance Exam” after Pre-Course</li>
                </ul>
                <p className='note-text'>Note : Only Students who clear Super-30 Entrance Exam will get seat   </p>
                <h2 className="subtitle">
                    Benefits of SUPER-30 students
                </h2>
                <ul>
                    <li className='black-check'><AiFillCheckSquare></AiFillCheckSquare>100% Job Guarantee for Super-30 Graduate Student</li>
                    <li className='black-check'><AiFillCheckSquare></AiFillCheckSquare>Internship Certificate powered by Geeks-Of-Gurukul</li>
                    <li className='black-check'><AiFillCheckSquare></AiFillCheckSquare>Course Completion Certificate powered by Geeks of Gurukul</li>
                    <li className='black-check'><AiFillCheckSquare></AiFillCheckSquare>Letter Of Recommendation powered by Geeks of Gurukul</li>
                </ul>
                <p className="upcomeing">
                Upon Course Completion, You’ll Become :
                </p>
                <div className="course-all">
                    <span>Full stack Developer</span>
                    <span>React Developer</span>
                    <span>MERN stack Developer</span>
                    <span>Frontend Developer</span>
                    <span>Backend Developer</span>
                </div>
                <div className="apply-free">
                    <button>Apply for Free Pre-Course <BsArrowRight></BsArrowRight></button>
                    
                </div>
                <div className="super-img">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default DasBoard;