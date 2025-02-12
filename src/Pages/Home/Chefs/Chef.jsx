import React from 'react';
import chef1 from '../../../assets/chef1.jpg'
// import chef2 from '../../../assets/chef2.jpg'
import chef3 from '../../../assets/cheff3.jpeg'
import chef4 from '../../../assets/mark-towen.avif'
import chef2 from '../../../assets/chef0new.avif'
import { IoLogoFacebook } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiYoutube } from 'react-icons/si';
import { Link } from 'react-router-dom';
const Chef = () => {
    return (
        <div className='w-11/12 mx-auto py-20'>
            <h2 className='text-xl text-center font-semibold text-orange-500'>Meet Our</h2>
            <h1 className='text-center text-4xl mt-4 font-bold'>Culinary Mastermind</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12'>
                {/* chef 1 */}
                <div className='h-96 relative md:h-80 w-full overflow-hidden'>
                    <img className='object-cover h-full w-full transform transition-transform duration-300 inset-0 hover:scale-110' src={chef1} alt="" />
                    <div className='absolute  inset-0 bg-opacity-60  flex flex-col items-end justify-end opacity-0 hover:opacity-100 transition-opacity duration-300'>
                        <div className='p-4 bg-white mt-20 text-orange-500'>
                            <h2 className='text-3xl'>Hart Hagerty</h2>
                            <p className='text-black'>United States</p>
                            <div className='flex justify-center md:justify-start gap-4 mt-2'>
                                <Link to='https://www.facebook.com/prince.jihan.779' className='text-xl'><IoLogoFacebook className='' /></Link>
                                <Link to='https://www.linkedin.com/in/habibullah-alquaderi-web' className='text-xl'><FaLinkedin /></Link>
                                <Link to='https://x.com/HAlquaderi34259' className='text-xl'><FaXTwitter /></Link>
                                <Link to='https://www.youtube.com' className='text-xl'><SiYoutube /></Link>
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
                                <Link to='https://www.facebook.com/prince.jihan.779' className='text-xl'><IoLogoFacebook className='' /></Link>
                                <Link to='https://www.linkedin.com/in/habibullah-alquaderi-web' className='text-xl'><FaLinkedin /></Link>
                                <Link to='https://x.com/HAlquaderi34259' className='text-xl'><FaXTwitter /></Link>
                                <Link to='https://www.youtube.com' className='text-xl'><SiYoutube /></Link>
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
                                <Link to='https://www.facebook.com/prince.jihan.779' className='text-xl'><IoLogoFacebook className='' /></Link>
                                <Link to='https://www.linkedin.com/in/habibullah-alquaderi-web' className='text-xl'><FaLinkedin /></Link>
                                <Link to='https://x.com/HAlquaderi34259' className='text-xl'><FaXTwitter /></Link>
                                <Link to='https://www.youtube.com' className='text-xl'><SiYoutube /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* chef-4 */}
                <div className='h-96 relative md:h-80 w-full overflow-hidden'>
                    <img className='object-cover  h-full w-full transform transition-transform duration-300 hover:scale-110' src={chef4} alt="" />
                    <div className='absolute  inset-0 bg-opacity-60  flex flex-col items-end justify-end opacity-0 hover:opacity-100 transition-opacity duration-300'>
                        <div className='p-4 bg-white mt-20 text-orange-500'>
                            <h2 className='text-3xl'>Mark Towen</h2>
                            <p className='text-black'>Thiland</p>
                            <div className='flex justify-center md:justify-start gap-4 mt-2'>
                                <Link to='https://www.facebook.com/prince.jihan.779' className='text-xl'><IoLogoFacebook className='' /></Link>
                                <Link to='https://www.linkedin.com/in/habibullah-alquaderi-web' className='text-xl'><FaLinkedin /></Link>
                                <Link to='https://x.com/HAlquaderi34259' className='text-xl'><FaXTwitter /></Link>
                                <Link to='https://www.youtube.com' className='text-xl'><SiYoutube /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;