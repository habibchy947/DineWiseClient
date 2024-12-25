import React from 'react';
import { Link } from 'react-router-dom';

const Slide = ({ image, title, description }) => {
    return (
        <div className='bg-blend-overlay bg-gray-700/70 bg-no-repeat bg-cover md:h-[30rem] lg:h-[28rem] h-[28rem]'
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className='w-11/12 md:w-6/12 lg:w-7/12 mx-auto text-center space-y-7 py-12 md:py-24'>
                <h2 className='text-4xl md:text-5xl leading-tight text-white font-bold '>{title}</h2>
                <p className='text-gray-200 text-lg font-semibold'>{description}</p>
                <Link to='/all-foods'><button className='btn bg-orange-500 border-none mt-5 text-white font-bold px-6'>All Foods</button></Link>
            </div>
        </div>
    );
};

export default Slide;