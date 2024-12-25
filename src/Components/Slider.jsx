import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import bgImg1 from '../assets/slid2.jpg'
import bgImg2 from '../assets/slid3.avif'
import bgImg3 from '../assets/banNew.jpg'
import Slide from './Slide';
const Slider = () => {
    return (
        <div className=''>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide
                        image={bgImg1}
                        title='Elevating the Art of Exceptional Dining'
                        description="Effortlessly manage reservations, and menus
                                    while delivering dining experiences
                                    with our restaurant management system"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgImg2}
                        title='Driving Success in Hospitality, One Solution at a Time'
                        description="Embark on a journey of exquisite tastes,
                         where every dish reflects a story of passion, creativity,
                          and unforgettable flavor"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgImg3}
                        title='Where flavor and excellence come together'
                        description="Every meal is a celebration of flavor,
                         and every visit feels like coming home. Join us for
                          unforgettable tastes and heartfelt hospitality."
                    />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;