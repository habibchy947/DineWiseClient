import React from 'react';
import Chef from './Chefs/Chef';
import WhyChooseUs from './WhyChoosUs/WhyChooseUs';
import TopFoods from './TopFoods/TopFoods';
import Slider from '../../Components/Slider';
import Category from './Category/Category';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <TopFoods></TopFoods>
            <WhyChooseUs></WhyChooseUs>
            <Chef></Chef>
        </div>
    );
};

export default Home;