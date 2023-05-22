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

  const handleButtonCloseClick = (event) => {
    event.stopPropagation();
    setShouldShowBanner(false);
  };

  return (
    <div onClick={handleBannerClick} className={`${style.bannerBody}`}>
      <div className="d-flex align-items-center justify-content-around p-2">
        {/* content */}
        <img src={chatGPT} alt="" />
        <Marquee>
          <h3>The Next gen Artificial Intelligence ChatGPT & AI Bard</h3>
        </Marquee>
        <img src={chatGPT} alt="" />
        {/* content */}
      </div>
      <div>
        {/* Button */}
        <button onClick={handleButtonCloseClick} className={`${style?.bannerClose}`}>
          X
        </button>
        {/* Button */}
      </div>
    </div>
  );
};

export default TopBanner;
