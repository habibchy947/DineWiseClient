import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = () => {
    return (
        <div className='font-raleWay'>
            {/* navbar */}
            <Navbar></Navbar>
            <div className='min-h-screen'>
            <Outlet></Outlet>
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;