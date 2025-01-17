import React from 'react';
import { Link } from 'react-router-dom';
import navLogo from '/favicon.png'
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiYoutube } from 'react-icons/si';
import { IoLogoFacebook } from 'react-icons/io';
import locationIcon from '../assets/location.json'
import phoneIcon from '../assets/phone.json'
import mailIcon from '../assets/mail.json'
import Lottie from 'lottie-react';
const Footer = () => {
    return (
        <div className='bg-footerBg bg-blend-overlay bg-[#3f3c3c] bg-no-repeat bg-cover'>
            <div className='w-11/12 mx-auto py-14 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12  text-center md:text-left'>
                <div className='space-y-5'>
                    <Link to='/'
                        className="flex items-center justify-center md:justify-start gap-1">
                        <span><img className='h-14 w-14'
                            src={navLogo} alt="" />
                        </span>
                        <span
                            className='font-aguDisplay text-white  text-5xl'>DineWise
                        </span>
                    </Link>
                    <p className='text-gray-100 font-semibold'>Serving exquisite flavors and unforgettable experiences. Visit us for a taste of perfection.</p>
                    <div className='flex justify-center md:justify-start gap-4'>
                    <Link to='https://www.facebook.com/prince.jihan.779' className='text-3xl text-white'><IoLogoFacebook  className=''/></Link>
                    <Link to='https://www.linkedin.com/in/habibullah-alquaderi-web' className='text-3xl text-white'><FaLinkedin /></Link>
                    <Link to='https://x.com/HAlquaderi34259' className='text-3xl text-white'><FaXTwitter /></Link>
                    <Link to='https://www.youtube.com' className='text-3xl text-white'><SiYoutube /></Link>
                    </div>
                </div>
                <div className='flex flex-col justify-center md:justify-start items-center md:items-start'>
                    <h2 className='text-2xl text-orange-500 mb-2'>Contact</h2>
                    <div className='flex items-center'>
                        <Lottie className='h-14 w-14' animationData={locationIcon} loop={true}></Lottie>
                        <span className='text-white'>444, Halisohor, Katalqong Abashik</span>
                    </div>
                    <div className='flex items-center'>
                        <Lottie className='h-10 w-10' animationData={phoneIcon} loop={true}></Lottie>
                        <span className='text-white'>01613516358, 01810278085</span>
                    </div>
                    <div className='flex items-center'>
                        <Lottie className='h-10 w-10' animationData={mailIcon} loop={true}></Lottie>
                        <span className='text-white'>habib2005@gmail.com</span>
                    </div>
                    
                </div>
                <div>
                <h2 className='text-2xl text-orange-500 mb-3'>Quick Link</h2>
                <nav className='text-white'>
                    <ul className='space-y-3'>
                        <li><Link to='/contactUs'>Contact us</Link></li>
                        <li><Link to='/gallery'>Gallery</Link></li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/all-foods'>All foods</Link></li>
                    </ul>
                </nav>
                </div>
                <div>
                <h2 className='text-2xl text-orange-500 mb-3'>Legal</h2>
                <nav className='text-white'>
                    <ul className='space-y-3'>
                        <li>Terms of use</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </nav>
                </div>
            </div>
            <p className='text-center text-gray-200 py-5 bg-gray-950'>Copyright © {new Date().getFullYear()} - All right reserved by DineWise Ltd</p>
        </div>
    );
};

export default Footer;