import React from 'react';
import './Courses.css'

import python from '../../assets/images/Crouse/python.jpg'
import SQL from '../../assets/images/Crouse/sql.jpg'
import Java  from '../../assets/images/Crouse/Java (1).png'
import DSA from '../../assets/images/Crouse/DSA.png'
import Cyber  from '../../assets/images/Crouse/Cyber Security.png'
import Data  from '../../assets/images/Crouse/tableau.jpg'
import Learning from '../../assets/images/Crouse/machine learning.jpg'
import Artificial from '../../assets/images/Crouse/AI.jpg'
import NavBar from '../../components/shared/navbar/NavBar';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Footer from '../../components/shared/footer/Footer';

import { Helmet } from "react-helmet";


const Courses = () => {
    return (
        <div className='all-course'>
        {/* this is fro SEO */}
        <Helmet>
            <title>Industrial Courses</title>
            <meta
            name="keywords"
            content="Data structures and algorithms,Computer networks and security,Software engineering principles,Database management systems,Web development technologies,Artificial intelligence and machine learning,Internet of things (IoT),Cloud computing and virtualization
            "
            />
            <meta
            name="description"
            content="India's Best Gurukul Provides Best Industrial Courses by IIT and IIM Experts. This Program is Specially for students who want to learn new Technologies."
            />
            <meta name="robots" content="index, follow"></meta>
        </Helmet>

            <div className='menu-course'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="course-button">
                                        <NavLink to='/courses/python' className={({ isActive }) =>
                                    isActive ? 'active active_button' : 'active_button'
                                } >
                                            <img src={python} alt="" />
                                            <h1 className="active_h1">Python</h1>
                                        </NavLink>
                                        <NavLink to='/courses/sql' className="active_button" >
                                            <img src={SQL} alt="" />
                                            <h1 className="active_h1">SQL</h1>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6">
                                    <div className="course-button">
                                        <NavLink to='/courses/java' className="active_button" >
                                            <img src={Java} alt="" />
                                            <h1 className="active_h1">Java Programming</h1>
                                        </NavLink>
                                        <NavLink to='/courses/dsa' className="active_button" >
                                            <img src={DSA} alt="" />
                                            <h1 className="active_h1">DSA</h1>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="course-button">
                                        <NavLink to='/courses/cyber' className="active_button" >
                                            <img src={Cyber} alt="" />
                                            <h1 className="active_h1">Cyber Security</h1>
                                        </NavLink>
                                        <NavLink to='/courses/dataVisualization' className="active_button" >
                                            <img src={Data} alt="" />
                                            <h1 className="active_h1">Data Visualization</h1>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6">
                                    <div className="course-button">
                                        <NavLink to='/courses/machineLearning' className="active_button" >
                                            <img src={Learning} alt="" />
                                            <h1 className="active_h1">Machine Learning</h1>
                                        </NavLink>
                                        <NavLink to='/courses/ArtificialIntelligence' className="active_button" >
                                            <img src={Artificial} alt="" />
                                            <h1 className="active_h1">Artificial Intelligence</h1>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                        
                        
                    </div>

                </div>

            </div>
            <Outlet></Outlet>
           
        </div>
        
    );
};

export default Courses;
