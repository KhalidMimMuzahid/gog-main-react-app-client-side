import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/shared/footer/Footer";
import NavBar from "../../components/shared/navbar/NavBar";
import Loader from "./Loader/Loader";
import { useContext, useState} from "react";
import { AuthContext } from "../../context/AuthProvider";

const Main = () => {
  const [shouldShowBanner, setShouldShowBanner] = useState(true);
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
      <NavBar shouldShowBanner={ shouldShowBanner} setShouldShowBanner={setShouldShowBanner}/>
      <div 

      style={{marginTop: shouldShowBanner? "60px":"0px"}}
      ><Outlet /></div>
      <Footer />
    </div>
  );
};

export default Main;
