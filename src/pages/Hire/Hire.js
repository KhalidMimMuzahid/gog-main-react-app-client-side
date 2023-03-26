import React from 'react';
import Hireimg from '../../assets/images/people.png' 
import Acquire from '../../components/Acquire/Acquire';
import Brands from '../../components/Brands/Brands';
import './Hire.css'

const Hire = () => {
    return (
        <div>
            <div className="hire-from-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div class="hire-left">
                                <h1>Hire Top Talent that <br /> Deliver
                                    <span className='red-title'> 100% Result</span></h1>
                                <p>Intensify your Data &amp; Engineering Team with industry ready top
                                    skilled tech talent. </p>
                                <a href="#hire-from"><button class="apply-now-hire">Hire Now</button></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="hire-right">
                                <img class="hire-img" src={Hireimg} alt="" srcset=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <Acquire></Acquire>
                <Brands></Brands>

            </div>

        </div>
    );
};

export default Hire;