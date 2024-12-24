import React from 'react';
import Banner from './Banner';
import Chef from './Chefs/Chef';
import WhyChooseUs from './WhyChoosUs/WhyChooseUs';
import TopFoods from './TopFoods/TopFoods';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopFoods></TopFoods>
            <WhyChooseUs></WhyChooseUs>
            <Chef></Chef>
        </div>
    );
};

export default Home;