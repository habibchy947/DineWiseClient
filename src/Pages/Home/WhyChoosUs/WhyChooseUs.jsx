import React from 'react';
import chooseLottie from '../../../assets/choose.json'
import productIcon from '../../../assets/product1.png'
import burgerIcon from '../../../assets/burger1.png'
import orderIcon from '../../../assets/order.png'
import Lottie from 'lottie-react';
const WhyChooseUs = () => {
    return (
        <div className='w-11/12 mx-auto grid flex-col-reverse md:grid-cols-2 py-7 items-center gap-5'>
            <div className=''>
                <div className='text-center md:text-left space-y-4'>
                <h2 className='text-5xl font-bold '>Why Choose Us</h2>
                <p>Discover what sets us apart! At DineWise,
                    we prioritize quality, flavor, and customer
                    satisfaction. With expertly crafted dishes,
                    fresh ingredients,
                    we create unforgettable dining experiences tailored
                    to your taste. Choose us for a blend of passion,
                    perfection, and exceptional service
                </p>
                </div>
                <div className='grid grid-cols-3 gap-3 pt-5'>
                    <div className='p-5 flex flex-col text-center justify-center items-center space-y-2 bg-gradient-to-b from-gray-50 to-slate-100'>
                        <img className='h-14 w-14' src={productIcon} alt="" />
                        <h4>The use of natural best quality products</h4>
                    </div>
                    <div className='p-5 flex flex-col text-center justify-center items-center space-y-2 bg-gradient-to-b from-slate-100 to-gray-50'>
                        <img className='h-14 w-14' src={burgerIcon} alt="" />
                        <h4>A new look on the right food</h4>
                    </div>
                    <div className='p-5 flex flex-col text-center justify-center items-center space-y-2 bg-gradient-to-b from-gray-50 to-slate-100'>
                        <img className='h-14 w-14' src={orderIcon} alt="" />
                        <h4>Track Your Order in Real-Time</h4>
                    </div>
                </div>
            </div>
            <div>
                <Lottie className='md:h-[380px] h-80' animationData={chooseLottie} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default WhyChooseUs;