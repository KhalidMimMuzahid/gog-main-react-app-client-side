import React from 'react';
import './Courses.css'

import python from '../../assets/images/Crouse/python.jpg'
import SQL from '../../assets/images/Crouse/sql.jpg'
import Java  from '../../assets/images/Crouse/java.jpg'
import DSA from '../../assets/images/Crouse/DSA.png'
import Cyber  from '../../assets/images/Crouse/cyber-security.jpeg'
import Data  from '../../assets/images/Crouse/tableau.jpg'
import Learning from '../../assets/images/Crouse/machine learning.jpg'
import Artificial from '../../assets/images/Crouse/AI.jpg'
import NavBar from '../../components/shared/navbar/NavBar';
import { Link, Outlet } from 'react-router-dom';

const Courses = () => {
    return (
        <div className='all-course'>
            <NavBar></NavBar>
            <div className='menu-course'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="course-button">
                                        <Link to='/courses/python' className="active_button" >
                                            <img src={python} alt="" />
                                            <h1 className="active_h1">Python</h1>
                                        </Link>
                                        <Link to='/courses/sql' className="active_button" >
                                            <img src={SQL} alt="" />
                                            <h1 className="active_h1">SQL</h1>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6">
                                    <div className="course-button">
                                        <Link to='/courses/java' className="active_button" >
                                            <img src={Java} alt="" />
                                            <h1 className="active_h1">Java Programming</h1>
                                        </Link>
                                        <Link to='/courses/dsa' className="active_button" >
                                            <img src={DSA} alt="" />
                                            <h1 className="active_h1">DSA</h1>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="course-button">
                                        <Link to='/courses/cyber' className="active_button" >
                                            <img src={Cyber} alt="" />
                                            <h1 className="active_h1">Cyber Security</h1>
                                        </Link>
                                        <Link to='/courses/dataVisualization' className="active_button" >
                                            <img src={Data} alt="" />
                                            <h1 className="active_h1">Data Visualization</h1>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6">
                                    <div className="course-button">
                                        <Link to='/courses/machineLearning' className="active_button" >
                                            <img src={Learning} alt="" />
                                            <h1 className="active_h1">Machine Learning</h1>
                                        </Link>
                                        <Link to='/courses/ArtificialIntelligence' className="active_button" >
                                            <img src={Artificial} alt="" />
                                            <h1 className="active_h1">Artificial Intelligence</h1>
                                        </Link>
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