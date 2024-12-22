import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const MainLayout = () => {
    return (
        <div className='font-raleWay min-h-screen'>
            {/* navbar */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* footer */}
        </div>
    );
};

export default MainLayout;