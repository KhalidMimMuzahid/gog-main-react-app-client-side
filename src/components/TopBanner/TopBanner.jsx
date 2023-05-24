import React from "react";

import style from "./TopBanner.module.css";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";

const chatGPT = "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/iconsSVG/chatGPT.svg";

const TopBanner = ({ setShouldShowBanner }) => {
  const navigate = useNavigate();

  const handleBannerClick = () => {
    setShouldShowBanner(false);
    navigate("/additionals");
  };

  const handleButtonCloseClick = (event) => {
    event.stopPropagation();
    setShouldShowBanner(false);
  };

 

  return (
    <div onClick={handleBannerClick} className={`${style.bannerBody}`}>
      <Marquee speed={50} autoFill={true}>
      <div className="d-flex align-items-center justify-content-center p-2">
        {/* content */}
        <img src={chatGPT} alt="" />
        
          <h3 className={`${style?.content}`}>The Next gen Artificial Intelligence ChatGPT & AI Bard</h3>
        
        {/* <img src={chatGPT} alt="" /> */}
        {/* content */}
        </div>
      </Marquee>
      <button onClick={handleButtonCloseClick} className={`${style?.bannerClose}`}>
          X
        </button>
      <div>
      </div>
      
    </div>
  );
};

export default TopBanner;
