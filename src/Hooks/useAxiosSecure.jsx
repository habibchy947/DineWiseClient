import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from '../Context/AuthContext/useAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL:'https://dine-wise-server-pi.vercel.app',
    withCredentials:true
})
const useAxiosSecure = () => {
    const {logOut} = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        axiosInstance.interceptors.response.use(response=> {

            return response
        } , error => {
            if(error.status === 401 || error.status === 403){
                // console.log('need to logout the users')
                logOut()
                .then(()=> {
                    navigate('/login')
                    return toast.error(error.response.data.message)
                })
                .catch(err => {
                    // console.error(err.message)
                })
            }
            return Promise.reject(error)
        })
    }, [])
    return axiosInstance
};

export default useAxiosSecure;