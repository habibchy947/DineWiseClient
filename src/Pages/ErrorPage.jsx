import Lottie from 'lottie-react';
import React from 'react';
import ErrorLottie from '../assets/404.json'
import { useNavigate } from 'react-router-dom';
const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className='grid grid-cols-1 font-raleWay md:grid-cols-2 w-11/12 md:w-9/12 lg:w-8/12 mx-auto items-center min-h-screen gap-2'>
            <div className='space-y-3 text-center md:text-left'>
                <h2 className='text-5xl font-bold lg:w-2/3 leading-tight'>OOPS! PAGE NOT FOUND</h2>
                <p className='lg:w-3/4'>You must have picked the wrong door because i haven't been able to lay my eye on the page you've been searching for.</p>
                <div className='flex gap-4 justify-center md:justify-start'>
                <button onClick={()=>navigate(-1)} className='btn rounded-3xl px-10 text-lg font-semibold  text-white bg-[#fbe4a6]'>Go Back</button>
                <button onClick={()=>navigate('/')} className='btn rounded-3xl px-10 text-lg font-semibold  text-white bg-neutral'>Home Page</button>
                </div>
            </div>
            <div className='w-96 text-left  md:text-center'>
                <Lottie className='object-cover' animationData={ErrorLottie} loop={true} />
            </div>
        </div>
    );
};

export default ErrorPage;