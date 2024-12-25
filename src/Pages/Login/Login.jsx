import Lottie from 'lottie-react';
import React, { useState } from 'react';
import lottieAuth from '../../assets/register1.json'
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import useAuth from '../../Context/AuthContext/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import navLogo from '/favicon.png'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { setUser, googleSignIn, signInUser } = useAuth()
    const [eye, setEye] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    // google sign in
    const handleGoogle = (e) => {
        e.preventDefault()
        googleSignIn()
            .then(() => {
                toast.success('Account created successfully')
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                toast.error(err)
            })
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }
        // console.log(user)
        // sign in user 
        signInUser(email, password)
        .then(result => {
            // console.log(result.user)
            toast.success("you are logged in successfully")
            setUser(result.user)
            form.reset()
            navigate(location?.state ? location.state : '/')
        })
        .catch(err => {
            toast.error("your password or email is not valid")
            // console.log(err)
        })

    }
    return (
        <div className='w-10/12 md:w-9/12 mx-auto my-16 grid grid-cols-1  md:grid-cols-2 items-center p-1 lg:p-3 gap-3 lg:gap-5 shadow-xl'>
            <div className=''>
                <Lottie animationData={lottieAuth} loop={true}></Lottie>
            </div>
            <div className='md:px-8 px-4'>
                <div className='flex justify-center'>
                    <img src={navLogo} alt="" />
                </div>
                <h3 className='text-center text-xl font-semibold mt-3'>Welcome Back! Login Now</h3>
                <div className='flex justify-center  pt-3'>
                    <button onClick={handleGoogle} className='flex items-center dark:bg-neutral dark:text-white justify-center gap-4 btn btn-sm w-full rounded-none'>
                        <FcGoogle></FcGoogle>
                        <h3 className='font-semibold'>Sign In With Google</h3>
                    </button>
                </div>
                <div className='divider'>Or</div>
                <div className="card w-full shrink-0 ">
                    <form onSubmit={handleSignIn} className="card-body px-0 pt-0">
                        {/* email field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="enter your email" className="input input-sm md:input-md dark:bg-neutral input-bordered rounded-sm" required />
                        </div>
                        {/* password field */}
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text dark:text-white">Password</span>
                            </label>
                            <input type={eye ? "text" : "password"} name='password' placeholder="enter your password" className="input input-sm md:input-md dark:bg-neutral input-bordered rounded-sm" required />
                            <span onClick={() => setEye(!eye)} className='absolute right-3 bottom-4'>{eye ? <FaRegEyeSlash /> : <FaRegEye />}</span>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-sm md:btn-md bg-orange-500 text-white font-semibold rounded-sm border-none">Sign In</button>
                        </div>
                        <div className='text-center pt-2 text-lg'>
                            New to this website ? please
                            <Link to='/register' className='font-semibold text-orange-500'> Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;