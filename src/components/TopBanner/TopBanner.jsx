import React from "react";
import chatGPT from "../../assets/iconsSVG/chatGPT.svg";
import style from "./TopBanner.module.css";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";

const TopBanner = ({ setShouldShowBanner }) => {
  const navigate = useNavigate();

  const handleBannerClick = () => {
    setShouldShowBanner(false);
    navigate("/additionals");
  };

 

  return (
    <div onClick={handleBannerClick} className={`${style.bannerBody}`}>
      <Marquee speed={50} autoFill={true}>
      <div className="d-flex align-items-center justify-content-around p-2">
        {/* content */}
        <img src={chatGPT} alt="" />
        
          <h3>The Next gen Artificial Intelligence ChatGPT & AI Bard</h3>
        
        {/* <img src={chatGPT} alt="" /> */}
        {/* content */}
        </div>
        </Marquee>
      <div>
      </div>
    </div>
  );
};

export default TopBanner;
