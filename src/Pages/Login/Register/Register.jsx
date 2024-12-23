import React, { useState } from 'react';
import lottieAuth from '../../../assets/register1.json'
import Lottie from 'lottie-react';
import navLogo from '/favicon.png'
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../Context/AuthContext/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';
import auth from '../../../Firebase/firebase.init';

const Register = () => {
    const { createUser, setUser, googleSignIn } = useAuth()
    const [eye, setEye] = useState(false)
    const navigate = useNavigate()

    // google sign in
    const handleGoogle = (e) => {
        e.preventDefault()
        googleSignIn()
            .then(() => {
                toast.success('Account created successfully')
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    // manual sign in
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        const user = { name, email, photo, password }
        console.log(user)
        // password validation
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!regex.test(password)) {
            return toast.error('password must have an upperCase and lowerCase letter and must be at least 6 character')
        }
        // profile
        const profile = {
            displayName: name,
            photoURL: photo
        }
        // sign up
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                toast.success('Account created successfully')
                // update profile
                updateProfile(auth.currentUser, profile)
                    .then(() => {
                        console.log("updated profile")
                        navigate('/')
                    })
                    .catch(err => {
                        toast.error(err)
                    })
            })
            .catch(err => {
                console.log(err)
                toast.error('Your password or email is not valid')
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
                <h3 className='text-center text-xl font-semibold mt-3'>Welcome Back! Register Now</h3>
                <div className='flex justify-center  pt-3'>
                    <button onClick={handleGoogle} className='flex items-center dark:bg-neutral dark:text-white justify-center gap-4 btn btn-sm w-full rounded-none'>
                        <FcGoogle></FcGoogle>
                        <h3 className='font-semibold'>Sign Up With Google</h3>
                    </button>
                </div>
                <div className='divider'>Or</div>
                <div className="card w-full shrink-0 ">
                    <form onSubmit={handleSignUp} className="card-body px-0 pt-0">
                        {/* name field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="enter your name" className="input input-sm md:input-md dark:bg-neutral input-bordered rounded-sm" required />
                        </div>
                        {/* email field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="enter your email" className="input input-sm md:input-md dark:bg-neutral input-bordered rounded-sm" required />
                        </div>
                        {/* photo URL field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Photo URL</span>
                            </label>
                            <input type="url" name='photo' placeholder="enter photo url" className="input input-sm md:input-md dark:bg-neutral input-bordered rounded-sm" required />
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
                            <button className="btn btn-sm md:btn-md bg-orange-500 text-white font-semibold rounded-sm border-none">Sign Up</button>
                        </div>
                        <div className='text-center pt-2 text-lg'>
                            Already have an account ? please
                            <Link to='/login' className='font-semibold text-orange-500'> Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;