import React from 'react';
import Accordions from '../../components/accordion/Accordions';
import Banner from '../../components/banner/Banner';
import Brands from '../../components/Brands/Brands';
import OurProgram from '../../components/ourProgram/OurProgram';
import Team from '../../components/Team/Team';
import ScrollToTop from 'react-scroll-to-top';


// import WhatsAppMessage from '../../components/whatsApp/WhatsAppMessage';

const Home = () => {
    return (
        <div className='home-page'>
            <Banner/>
            
            <OurProgram/>
            <Brands></Brands>
            <Team></Team>
            <Accordions></Accordions>
            <ScrollToTop color='#4CA358' style={{borderRadius: "50%", left:"40px", fontWeight:"bold", zIndex:"12", marginTop: "15vh"}}/>
            {/* <WhatsAppMessage/> */}
            {/* <ChatBot/> */}
           
        </div>
    );
};

export default Home;