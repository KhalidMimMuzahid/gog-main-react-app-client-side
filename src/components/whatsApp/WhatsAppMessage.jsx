import React, { useState } from 'react';
import './WhatsAppMessage.css'
import { AiFillCloseCircle, AiOutlineWhatsApp } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const WhatsAppMessage = () => {

    const [displayShow, setDisplayShow] = useState(false)

    const whatsHandler = () =>{
        setDisplayShow(!displayShow)
    }

    console.log(displayShow);

    return (
        <div className='Whats-app' title='Chart With WhatsApp'>
            <div className="member" style={{display: displayShow ?  "block" : 'none'}}>
                
                    <div style={{padding: "5px 10px"}}>
                        <p>Hi there! Click one of our representatives below and we will get back to you as soon as possible.</p>
                    </div>
				
                <a href="https://api.whatsapp.com/send?phone=%2B8801716204599&text&app_absent=0"  className="cleverwa-account cleverwa-clearfix"  target="_blank">
                    <div className="cleverwa-face">
                        <img src="https://anon.wp1.zootemplate.com/wp-content/uploads/2020/01/h5-testimonial-1.jpg" onerror="this.style.display='none'" alt="" /></div>
                    <div className="cleverwa-info">
                        <span className="cleverwa-title">Technical support</span>
                        <span className="cleverwa-name">Jean Doe</span>
                    </div>
                    <AiOutlineWhatsApp></AiOutlineWhatsApp>
                </a>
                <a href="https://api.whatsapp.com/send?phone=%2B919182382284&text&app_absent=0"  className="cleverwa-account cleverwa-clearfix"  target="_blank">
                    <div className="cleverwa-face">
                        <img src="https://anon.wp1.zootemplate.com/wp-content/uploads/2020/01/h5-testimonial-3.jpg" onerror="this.style.display='none'" alt="" /></div>
                    <div className="cleverwa-info">
                        <span className="cleverwa-title">Technical support</span>
                        <span className="cleverwa-name">Jean Doe</span>
                    </div>
                    <AiOutlineWhatsApp></AiOutlineWhatsApp>
                </a>
            </div>
            <div  className="social-midi" onClick={whatsHandler}>
                {
                    displayShow ?   <AiFillCloseCircle></AiFillCloseCircle> :<AiOutlineWhatsApp></AiOutlineWhatsApp>
                }
                
            </div>
        </div>
    );
};

export default WhatsAppMessage;