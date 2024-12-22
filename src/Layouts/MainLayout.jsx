import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const MainLayout = () => {
    return (
        <div className='font-raleWay'>
            {/* navbar */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* footer */}
        </div>
    );
};

export default MainLayout;