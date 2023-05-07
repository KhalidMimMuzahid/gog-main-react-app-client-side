import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    // context 
    const { user, loading } = useContext(AuthContext);

    // location
    const location = useLocation()

    // loding
    if (loading) {
        return (
            <div style={{marginTop: "800px"}} className="text-center ">

                <div className="spinner-grow text-center " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (user) {
        return children
    }

    return (
        <div>
            <Navigate to='/login' state={{ from: location }} replace></Navigate>

        </div>
    );
};

export default PrivateRoute;