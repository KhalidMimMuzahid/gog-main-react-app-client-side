import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/shared/footer/Footer';
import NavBar from '../../components/shared/navbar/NavBar';
import Loader from './Loader/Loader';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';


const Main = () => {
    const { loading } = useContext(AuthContext);
  
  
 
  

    if (loading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;