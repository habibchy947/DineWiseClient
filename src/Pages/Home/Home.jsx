import React from 'react';
import Banner from './Banner';
import Chef from './Chefs/Chef';
import WhyChooseUs from './WhyChoosUs/WhyChooseUs';
import TopFoods from './TopFoods/TopFoods';
import Slider from '../../Components/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TopFoods></TopFoods>
            <WhyChooseUs></WhyChooseUs>
            <Chef></Chef>
        </div>
    );
};

export default Home;