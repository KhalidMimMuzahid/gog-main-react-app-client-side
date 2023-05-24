import React from "react";
// import defaultLooader = "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/gif/Gj7X.gif";
// import defaultLooader2 = "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/gif/HDoX.gif";
// import defaultLooader3 = "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/gif/IVvP.gif";
// import defaultLooader4 = "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/gif/JM9R.gif";
import defaultLooader5 from "../../../assets/gif/giphy (1).gif";
const Loader = ({ type = "default" }) => {
  return (
    <div className="">
      <div
        className="d-flex mx-auto justify-content-center align-items-center"
        style={{ width: "100vh", height: "100vh" }}
      >
        {/* <img className="w-screen h-screen" src={defaultLooader} alt="" /> */}
        {/* <img className='w-screen h-screen' src={defaultLooader2} alt='' /> */}
        {/* <img className='w-screen h-screen' src={defaultLooader3} alt='' /> */}
        {/* <img className='w-screen h-screen' src={defaultLooader4} alt='' /> */}
        <img src={defaultLooader5} alt="" />
      </div>
    </div>
  );
};

export default Loader;
