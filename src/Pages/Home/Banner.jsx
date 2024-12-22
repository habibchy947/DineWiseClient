import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Link } from 'react-router-dom';
import img1 from '../../assets/ban1.png'
import img2 from '../../assets/ban2.png'
import img3 from '../../assets/ban3.png'
const Banner = () => {
    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='bg-slide2  bg-no-repeat bg-cover h-[650px]  md:h-[500px]'>
                        <div className='w-11/12 mx-auto py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-between'>
                            <div className='space-y-4 md:w-11/12 md:text-left  text-center'>
                                <h2 className='text-4xl md:text-5xl leading-tight text-white font-bold '>Empowering Excellence in Hospitality Management</h2>
                                <p className='text-gray-200 text-lg font-semibold'>Effortlessly manage reservations, staff, and menus
                                    while delivering exceptional dining experiences
                                    with our restaurant management system</p>
                                    <Link to='/all-foods'><button className='btn bg-orange-500 border-none mt-5 text-white font-bold px-6'>All Foods</button></Link>
                            </div>
                            <div>
                                <img src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-slide1  bg-no-repeat bg-cover h-[650px]  md:h-[500px]'>
                        <div className='w-11/12 mx-auto py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-between'>
                            <div className='space-y-4 md:w-11/12 md:text-left  text-center'>
                                <h2 className='text-4xl md:text-5xl leading-tight text-white font-bold  '>Driving Success in Hospitality, One Solution at a Time</h2>
                                <p className='text-gray-200 text-lg font-semibold'>Discover a world of culinary delights,
                                     where every dish tells a story of passion and flavor</p>
                                    <Link to='/all-foods'><button className='btn bg-orange-500 border-none mt-5 text-white font-bold px-6'>All Foods</button></Link>
                            </div>
                            <div className='flex justify-center'>
                                <img className=' h-64 md:h-80' src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-slide3  bg-no-repeat bg-cover h-[650px] md:h-[500px]'>
                        <div className='w-11/12 mx-auto py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 items-center'>
                            <div className='space-y-4 md:w-11/12 md:text-left  text-center'>
                                <h2 className='text-4xl md:text-5xl leading-tight text-white font-bold  '>Where Flavor Meets Excellence – Your Ultimate Dining Destination</h2>
                                <p className='text-gray-200 text-lg font-semibold'>Where every bite is a celebration
                                     of taste and every visit feels like home.</p>
                                    <Link to='/all-foods'><button className='btn bg-orange-500 border-none mt-5 text-white font-bold px-6'>All Foods</button></Link>
                            </div>
                            <div>
                                <img className=' h-72 md:h-80' src={img3} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;