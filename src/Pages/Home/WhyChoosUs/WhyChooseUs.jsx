import React from 'react';

import chooseUsImg from '../../../assets/why-chose-us.jpg'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
const WhyChooseUs = () => {
    return (
        <section className=" pt-20">
            <div className='w-8/12 mx-auto text-center hidden sm:block lg:hidden'>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                    Why Choose Us
                </h2>
                <p className="text-gray-600 dark:text-gray-100 text-sm sm:text-base leading-relaxed mb-8">
                    At DineWise, we prioritize quality, flavor, and customer satisfaction.
                    With expertly crafted dishes and fresh ingredients, we create
                    unforgettable dining experiences tailored to your taste. Choose us for a
                    blend of passion, perfection, and exceptional service.
                </p>
            </div>
            <div className="w-11/12 mx-auto flex flex-col sm:flex-row gap-10 items-center">
                <div className="w-full md:w-1/2 mb-10 md:mb-0">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6 sm:hidden lg:block">
                        Why Choose Us
                    </h2>
                    <p className="text-gray-600 dark:text-gray-50 text-sm sm:text-base leading-relaxed mb-8 sm:hidden lg:block">
                        At DineWise, we prioritize quality, flavor, and customer satisfaction.
                        With expertly crafted dishes and fresh ingredients, we create
                        unforgettable dining experiences tailored to your taste. Choose us for a
                        blend of passion, perfection, and exceptional service.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        {/* Feature 1 */}
                        <div className="flex items-center gap-4">
                            <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 10h11M9 21V3m6 6h6M9 14H3m6 4h6"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 dark:text-gray-50">Best Quality Ingredients</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-100">
                                    We use only the freshest, natural ingredients.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center gap-4">
                            <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-4-4m0 0l7-7-7 7z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 dark:text-gray-50">Innovative Dishes</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-100">
                                    Creative, expertly crafted culinary delights.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-center gap-4">
                            <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 10h11M9 21V3m6 6h6M9 14H3m6 4h6"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 dark:text-gray-50">Real-Time Order Tracking</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-100">
                                    Track your order in real-time with ease.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link to='/all-foods'><button className='h-fit mt-10 border-none text-white w-fit px-[1em] py-[0.25em] border-[1px] rounded-md bg-orange-400 flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]'><p>Explore our menu </p><FaArrowRight /></button></Link>
                </div>

                <div className="w-full md:w-1/2 h-fit sm:object-cover flex justify-center">
                    <img
                        src={chooseUsImg}
                        alt="Chef presenting a dish"
                        className="rounded-lg shadow-lg object-cover h-[300px] md:h-fit w-full md:w-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;