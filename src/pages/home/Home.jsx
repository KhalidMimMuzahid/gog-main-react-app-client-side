import React from 'react';
import Accordions from '../../components/accordion/Accordions';
import Banner from '../../components/banner/Banner';
import Brands from '../../components/Brands/Brands';
import Master from '../../components/Master/Master';
import OurProgram from '../../components/ourProgram/OurProgram';
import Team from '../../components/Team/Team';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Master></Master>
            <OurProgram/>
            <Brands></Brands>
            <Team></Team>
            <Accordions></Accordions>
        </div>
    );
};

export default Home;