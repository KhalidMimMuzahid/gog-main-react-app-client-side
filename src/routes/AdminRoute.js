import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../context/AuthProvider';

const AdminRoute = ({ children }) => {
    // context 
    const { user, loading, setAdminPart } = useContext(AuthContext);



    // location
    const location = useLocation()

    // is Admin 

    const url = `https://geeks-of-gurukul-server-side.vercel.app/users`;
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



    // loding
    if (loading || isLoading) {
        return (
            <div className="text-center mt-5 ">

                <div className="spinner-grow text-center mt-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

   

    const admiral = adminUser?.filter(rollin => rollin?.roll === "admin")
    const checkEmail = admiral?.filter(emailcheck => emailcheck?.email === user?.email)

    console.log(checkEmail);
    console.log(admiral, user.email);

    if ( checkEmail.length === 1) {
        
        return children
    }

    return (
        <div>
            <Navigate to='/login' state={{ from: location }} replace></Navigate>

        </div>
    );
};

export default AdminRoute;