import React from "react";
import { BsXLg } from "react-icons/bs";

import style from "./TopBanner.module.css";
import { useNavigate } from "react-router-dom";

const TopBanner = ({ setShouldShowBanner }) => {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    setShouldShowBanner(false);
    navigate("/additionals");
  };

  const handleButtonCloseClick = () => {
    setShouldShowBanner(false);
  };

  return (
    <div
      className={`${style.bannerBody} px-5 py-3 d-flex flex-wrap gap-2 gap-lg-5 justify-content-center align-items-center`}
    >
      <p className="mb-0 text-center text-black fw-normal">
        Live Seminar on Artificial Intelligence ChatGPT & AI Bard
      </p>
      <button type="button" onClick={handleBtnClick} className={`${style.bannerBtn} py-2 px-4 rounded`}>
        Know more
      </button>

      <BsXLg onClick={handleButtonCloseClick} className={` ${style.bannerClosebtn}`} />
    </div>
  );
};

export default TopBanner;
