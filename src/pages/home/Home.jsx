import React from 'react';
import Accordions from '../../components/accordion/Accordions';
import Banner from '../../components/banner/Banner';
import Brands from '../../components/Brands/Brands';
import Master from '../../components/Master/Master';
import OurProgram from '../../components/ourProgram/OurProgram';
import Team from '../../components/Team/Team';
import ScrollToTop from 'react-scroll-to-top';
import WhatsAppMessage from '../../components/whatsApp/WhatsAppMessage';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Master></Master>
            <OurProgram/>
            <Brands></Brands>
            <Team></Team>
            <Accordions></Accordions>
            <ScrollToTop color='#4CA358' style={{borderRadius: "50%", fontWeight:"bold"}}/>
            <WhatsAppMessage/>
        </div>
    );
};

export default Home;