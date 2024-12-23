import React from 'react';
import lottieAuth from '../../../assets/register1.json'
import Lottie from 'lottie-react';
import navLogo from '/favicon.png'
import { FcGoogle } from 'react-icons/fc';
const Register = () => {
    return (
        <div className='w-9/12 mx-auto my-16 grid grid-cols-1  md:grid-cols-2 items-center p-3 gap-5 shadow-xl'>
            <div className=''>
                <Lottie animationData={lottieAuth} loop={true}></Lottie>
            </div>
            <div className='px-8'>
                <div className='flex justify-center'>
                    <img src={navLogo} alt="" />
                </div>
                <h3 className='text-center text-xl font-semibold mt-3'>Welcome Back! Register Now</h3>
                <div className='flex justify-center  pt-3'>
                <button className='flex items-center dark:bg-neutral dark:text-white justify-center gap-4 btn btn-sm w-full rounded-none'>
                    <FcGoogle></FcGoogle>
                    <h3 className='font-semibold'>Sign Up With Google</h3>
                </button>
                </div>
                <div className='divider text'>Or</div>
                <div className="card w-full shrink-0 ">
                    <form className="card-body px-0 pt-0">
                        {/* name field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="enter your name" className="input dark:bg-neutral input-bordered rounded-sm" required />
                        </div>
                        {/* email field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="enter your email" className="input dark:bg-neutral input-bordered rounded-sm" required />
                        </div>
                        {/* photo URL field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Photo URL</span>
                            </label>
                            <input type="url" name='photo' placeholder="enter photo url" className="input dark:bg-neutral input-bordered rounded-sm" required />
                        </div>
                        {/* password field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="enter your password" className="input dark:bg-neutral input-bordered rounded-sm" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-500 text-white font-semibold rounded-sm border-none">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;