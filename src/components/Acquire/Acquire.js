import React from 'react';
import './Acquire.css'
const Acquire = () => {
    return (
        <div>

            <div className="hire-from">
                <div id="hire-from">
                    <h2>Acquire <span className='red-title'> top incise </span>
                        tech genius from <span className='green-title'> Geeks
                            of
                            Gurukul</span></h2>
                    <p>Our students are trained in Full stack Data Analytics, Full Stack Web Development and <br /> Engineering Programs
                        with 100% results</p>

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="wrapper_hire">

                                <form id="hireForm" >
                                    <div className="box-wrap">
                                        <div className="box-container">
                                            <div className="input-box">
                                                <input type="text" name="NAME" placeholder="Enter&nbsp;Your&nbsp;Name" required="" />
                                            </div>
                                            <div className="input-box">
                                                <input type="text" name="EMAIL" placeholder="Enter&nbsp;your&nbsp;Email" required="" />
                                            </div>
                                        </div>
                                        <div className="box-container">
                                            <div className="input-box">
                                                <input type="numbers" name="PHONE" placeholder="Phone&nbsp;Numer&nbsp;+91" required="" />
                                            </div>
                                            <div className="input-box">
                                                <input type="text" name="COMPANY NAME" placeholder="Company&nbsp;Name" required="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" name="LINKEDIN" placeholder="Linkedin&nbsp;Link" required="" />
                                    </div>



                                    <div className="policy">
                                        <input type="checkbox" required=""  id='ready' />
                                        <label htmlFor="ready">I accept all <a href="/terms&amp;conditions">Terms &amp;
                                            Conditions</a> </label>
                                    </div>
                                    <div className="input-box button">
                                        <input type="Submit" value="Apply Now" />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Acquire;