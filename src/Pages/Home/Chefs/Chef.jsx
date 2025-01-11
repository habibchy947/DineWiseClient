import React from 'react';
import chef1 from '../../../assets/chef1.jpg'
import chef2 from '../../../assets/chef2.jpg'
import chef3 from '../../../assets/cheff3.jpeg'
import { IoLogoFacebook } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiYoutube } from 'react-icons/si';
const Chef = () => {
    return (
        <div className='w-11/12 mx-auto pt-20'>
            <h2 className='text-xl text-center font-semibold text-orange-500'>Meet Our</h2>
            <h1 className='text-center text-4xl mt-4 font-bold'>Culinary Mastermind</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 pt-12'>
                {/* chef 1 */}
                <div className='h-96 relative md:h-80 w-full overflow-hidden'>
                    <img className='object-cover h-full w-full transform transition-transform duration-300 inset-0 hover:scale-110' src={chef1} alt="" />
                    <div className='absolute  inset-0 bg-opacity-60  flex flex-col items-end justify-end opacity-0 hover:opacity-100 transition-opacity duration-300'>
                        <div className='p-4 bg-white mt-20 text-orange-500'>
                            <h2 className='text-3xl'>Hart Hagerty</h2>
                            <p className='text-black'>United States</p>
                            <div className='flex justify-center md:justify-start gap-4 mt-2'>
                                <span className='text-xl'><IoLogoFacebook className='' /></span>
                                <span className='text-xl'><FaLinkedin /></span>
                                <span className='text-xl'><FaXTwitter /></span>
                                <span className='text-xl'><SiYoutube /></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* chef-2 */}
                <div className='h-96 relative md:h-80 w-full overflow-hidden'>
                    <img className='object-cover h-full w-full transform transition-transform duration-300 hover:scale-110' src={chef2} alt="" />
                    <div className='absolute  inset-0 bg-opacity-60  flex flex-col items-end justify-end opacity-0 hover:opacity-100 transition-opacity duration-300'>
                        <div className='p-4 bg-white mt-20 text-orange-500'>
                            <h2 className='text-3xl'>Nobak Jaqubiz</h2>
                            <p className='text-black'>United Kingdom</p>
                            <div className='flex justify-center md:justify-start gap-4 mt-2'>
                                <span className='text-xl'><IoLogoFacebook className='' /></span>
                                <span className='text-xl'><FaLinkedin /></span>
                                <span className='text-xl'><FaXTwitter /></span>
                                <span className='text-xl'><SiYoutube /></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* chef-3 */}
                <div className='h-96 relative md:h-80 w-full overflow-hidden'>
                    <img className='object-cover  h-full w-full transform transition-transform duration-300 hover:scale-110' src={chef3} alt="" />
                    <div className='absolute  inset-0 bg-opacity-60  flex flex-col items-end justify-end opacity-0 hover:opacity-100 transition-opacity duration-300'>
                        <div className='p-4 bg-white mt-20 text-orange-500'>
                            <h2 className='text-3xl'>Mariya Ferncz</h2>
                            <p className='text-black'>Australia</p>
                            <div className='flex justify-center md:justify-start gap-4 mt-2'>
                                <span className='text-xl'><IoLogoFacebook className='' /></span>
                                <span className='text-xl'><FaLinkedin /></span>
                                <span className='text-xl'><FaXTwitter /></span>
                                <span className='text-xl'><SiYoutube /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;