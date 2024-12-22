import React from 'react';
import Banner from './Banner';
import Chef from './Chefs/Chef';
import WhyChooseUs from './WhyChoosUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <Chef></Chef>
        </div>
    );
};

export default Home;