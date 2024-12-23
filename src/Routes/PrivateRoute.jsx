import React from 'react';
import useAuth from '../Context/AuthContext/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return (
        <Navigate to='/login' state={location.pathname}></Navigate>
    );
};

export default PrivateRoute;