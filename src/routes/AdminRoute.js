import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthProvider';
import Loading from '../components/shared/Loading/Loading';
import useAdmin from '../UseHook/useAdmin';
import { useQuery } from '@tanstack/react-query';

const AdminRoute = ({ children }) => {
    // context 
    const { user, loading ,setadmin} = useContext(AuthContext);


    // admin route
    // const [isAdmin, isAdminLoading] = useAdmin(user?.email)

    // location
    const location = useLocation()

    // is Admin 

    const url = `http://localhost:5000/admin/${user?.email}`;
    const { data: adminUser = [], refetch, isLoading } = useQuery({
        queryKey: ['adminUser'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                }

            });
            const data = await res.json();
            return data
        }
    })

    console.log(adminUser);



    // loding
    if (loading ) {
        return <Loading></Loading>
    }

    

    if (user && adminUser) {
        setadmin(true)
        return children
    }

    return (
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    )
};

export default AdminRoute;