import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import navLogo from '/favicon.png'
import useAuth from '../Context/AuthContext/useAuth';
const Navbar = () => {
    const links = <>
        <NavLink to='/' className={({isActive})=> `${isActive && 'bg-orange-400 text-white font-semibold'} px-4 py-1 rounded-sm`}>Home</NavLink>
        <NavLink to='/all-foods' className={({isActive})=> `${isActive && 'bg-orange-400 text-white font-semibold'} px-4 py-1 rounded-sm`}>All Foods</NavLink>
        <NavLink to='/gallery' className={({isActive})=> `${isActive && 'bg-orange-400 text-white font-semibold'} px-4 py-1 rounded-sm`}>Gallery</NavLink>
    </>
    const location = useLocation()
    const [toggle, setToggle] = useState(false)
    const { user, logOut } = useAuth()
    const userTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    const themeCheck = () => {
        if (userTheme === "dark" || (!userTheme && systemTheme)) {
            document.documentElement.classList.add("dark")
            return
        }
    }
    const themeSwitch = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            return
        }
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
    }
    themeCheck()
    return (
        <div className={`navbar py-3 px-3  md:px-5 mx-auto`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                    onClick={() => setToggle(!toggle)}
                    tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className={`${!toggle && 'hidden'} menu menu-sm dropdown-content bg-white dark:text-black rounded-md z-[20] mt-3 w-52 p-2 shadow`}>
                        {links}
                    </ul>
                </div>
                <Link to='/' className="flex items-center gap-1"><span><img className='h-10 w-10' src={navLogo} alt="" /></span><span className='font-satisfy text-3xl md:text-4xl'>DineWise</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-3 text-lg px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="synthwave" />

                    {/* sun icon */}
                    <svg
                        className="swap-off h-10 w-10 fill-current"
                        onClick={() => themeSwitch()}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                        className="swap-on h-10 w-10 fill-current"
                        onClick={() => themeSwitch()}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
                <div>
                    {user ?
                    <div className='flex items-center'>
                        <button className='px-2 py-1 md:px-5 md:py-2 rounded-sm font-semibold text-black bg-gray-300' onClick={logOut}>LogOut</button>
                        {/* profile */}
                        <div className="dropdown dropdown-end z-50">
                            <div onClick={() => setToggle(!toggle)} tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                    referrerPolicy='no-referrer'
                                        alt={user?.displayName}
                                        src={user && user?.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className={`${!toggle && 'hidden'}  menu menu-sm dropdown-content text-black bg-white rounded-md z-[1] mt-2 w-52 p-2 shadow`}>
                                <li><NavLink to="/my-foods" className={({ isActive }) => `${isActive ? 'bg-orange-500 text-white' : ""}`}>My Foods</NavLink></li>
                                <li><NavLink to="/add-food" className={({ isActive }) => `${isActive ? 'bg-orange-500 text-white' : ""}`}>Add Food</NavLink></li>
                                <li><NavLink to="/my-orders" className={({ isActive }) => `${isActive ? 'bg-orange-500 text-white' : ""}`}>My Orders</NavLink></li>
                            </ul>
                        </div>
                    </div>
                        
                        :
                        // login
                        <Link to='/login' className="btn bg-orange-400 text-white border-none rounded-md">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;