import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = () => {
    return (
        <div className='font-raleWay'>
            {/* navbar */}
                <div className='dark:bg-gray-950'>
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