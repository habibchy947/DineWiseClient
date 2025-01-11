import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery } from '@tanstack/react-query';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';

const Category = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const { data } = await axios.get('./categories.json')
            return data
        }
    })
    console.log(categories)
    return (
        <div className='w-11/12 mx-auto pt-20'>
            <h2 className='text-4xl font-bold text-center'><span className='text-orange-500'>Featured </span>Categories</h2>
            <div className='mt-14'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={false}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        500: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {
                        categories.map((category, idx) => (
                            <SwiperSlide key={idx}>
                                <div
                                    className="relative drop-shadow-xl border-2 md:w-64 h-64 hover:-translate-y-2 duration-300 overflow-hidden rounded-xl"
                                >
                                    <div
                                        className="absolute flex items-center justify-center  dark:text-white z-[1] opacity-90 rounded-xl inset-0.5"
                                    >
                                        <div className='p-10 space-y-3 flex group flex-col justify-center items-center '>
                                            <img className='w-44 object-cover' src={category.image} alt="" />
                                            <h4 className='text-2xl font-semibold group-hover:text-orange-400'>{category.category}</h4>
                                        </div>
                                    </div>
                                    <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
                                </div>

                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Category;