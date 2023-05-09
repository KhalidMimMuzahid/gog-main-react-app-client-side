import React from 'react';
import Accordions from '../../components/accordion/Accordions';
import Banner from '../../components/banner/Banner';
import Brands from '../../components/Brands/Brands';
import OurProgram from '../../components/ourProgram/OurProgram';
import Team from '../../components/Team/Team';
import ScrollToTop from 'react-scroll-to-top';
// import ChatFunctional from '../../components/chatFunctional/ChatFunctional';


// import WhatsAppMessage from '../../components/whatsApp/WhatsAppMessage';

const Home = () => {
    return (
        <div className='home-page'>
            <Banner/>
            
            <OurProgram/>
            <Brands></Brands>
            <Team></Team>
            <Accordions></Accordions>
            <ScrollToTop color='#4CA358' style={{borderRadius: "50%", left:"40px", marginBottom: "-20px", fontWeight:"bold", zIndex:"12", marginTop: "15vh"}}/>
            {/* <WhatsAppMessage/> */}
            {/* <ChatBot/> */}

            {/* for google dialog flow */}
            {/* <ChatFunctional/>    */}
            {/* <iframe height="430" width="350" src="https://bot.dialogflow.com/8820470b-f252-4b4a-a811-0b82340c12d9"></iframe> */}
           
        </div>
    );
};

export default Home;