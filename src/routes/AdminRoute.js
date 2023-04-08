import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthProvider';
import Loading from '../components/shared/Loading/Loading';
import useAdmin from '../UseHook/useAdmin';

const AdminRoute = ({ children }) => {
    // context 
    const { user, loading } = useContext(AuthContext);


    // admin route
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)

    // location
    const location = useLocation()
    // loding
    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    

    if (user && isAdmin) {
        return children
    }

    return (
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    )
};

export default AdminRoute;