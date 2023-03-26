import React from 'react';
import Marquee from "react-fast-marquee";
import './Brands.css'

import adimage from '../../assets/images/brand/aixs-bank.png'
import adimage2 from '../../assets/images/brand/amex.png'
import adimage3 from '../../assets/images/brand/binance.jpg'
import adimage4 from '../../assets/images/brand/citi.png'
import adimage5 from '../../assets/images/brand/coinbin.png'
import adimage6 from '../../assets/images/brand/coindcx.png'
import adimage7 from '../../assets/images/brand/Datamotive.jpg'
import adimage8 from '../../assets/images/brand/dell.png'
import adimage9 from '../../assets/images/brand/Dream11.png'
import adimage10 from '../../assets/images/brand/exl.png'
import adimage11 from '../../assets/images/brand/exl.png'
import adimage12 from '../../assets/images/brand/global-player.png'
import adimage13 from '../../assets/images/brand/hcl.png'
import adimage14 from '../../assets/images/brand/hotstar.jpg'
import adimage15 from '../../assets/images/brand/hsbc.png'
import adimage16 from '../../assets/images/brand/HUL.jpg'
import adimage17 from '../../assets/images/brand/icici.png'
import adimage18 from '../../assets/images/brand/interio-labs-1.jpg'
import adimage19 from '../../assets/images/brand/ITC.png'
import adimage20 from '../../assets/images/brand/Ketto.png'


const Brands = () => {
    return (
        <div className='brands-area'>
            <div className="brands-title">
                <h4>OUR HIRING PARTNERS</h4>
                <h2>FEW OF OUR HIRING PARTNERS</h2>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="brands-slider">
                            <Marquee>
                                <img src={adimage} alt="" />
                                <img src={adimage2} alt="" />
                                <img src={adimage3} alt="" />
                                <img src={adimage4} alt="" />
                                <img src={adimage5} alt="" />
                                <img src={adimage6} alt="" />
                                <img src={adimage7} alt="" />
                                <img src={adimage8} alt="" />
                                <img src={adimage9} alt="" />
                                <img src={adimage10} alt="" />
                                <img src={adimage11} alt="" />
                                <img src={adimage12} alt="" />
                                <img src={adimage13} alt="" />
                                <img src={adimage14} alt="" />
                                <img src={adimage15} alt="" />
                                <img src={adimage16} alt="" />
                                <img src={adimage17} alt="" />
                                <img src={adimage18} alt="" />
                                <img src={adimage19} alt="" />
                                <img src={adimage20} alt="" />
                                
                            </Marquee>
                            <Marquee>
                                <img src={adimage} alt="" />
                                <img src={adimage2} alt="" />
                                <img src={adimage3} alt="" />
                                <img src={adimage4} alt="" />
                                <img src={adimage5} alt="" />
                                <img src={adimage6} alt="" />
                                <img src={adimage7} alt="" />
                                <img src={adimage8} alt="" />
                                <img src={adimage9} alt="" />
                                <img src={adimage10} alt="" />
                                <img src={adimage11} alt="" />
                                <img src={adimage12} alt="" />
                                <img src={adimage13} alt="" />
                                <img src={adimage14} alt="" />
                                <img src={adimage15} alt="" />
                                <img src={adimage16} alt="" />
                                <img src={adimage17} alt="" />
                                <img src={adimage18} alt="" />
                                <img src={adimage19} alt="" />
                                <img src={adimage20} alt="" />
                                
                            </Marquee>
                    
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Brands;