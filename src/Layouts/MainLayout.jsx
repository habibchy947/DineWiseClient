import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = () => {
    return (
        <div className='font-raleWay max-w-screen-2xl mx-auto bg-slate-50 dark:bg-gray-900'>
            {/* navbar */}
                <div className='dark:bg-gray-900 dark:drop-shadow-2xl sticky top-0 z-20 backdrop:blur-xl bg-transparent bg-opacity-95 bg-white'>
                <Navbar></Navbar>
                </div>
            <div className='min-h-[calc(100vh-306px)]'>
                <Outlet></Outlet>
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;