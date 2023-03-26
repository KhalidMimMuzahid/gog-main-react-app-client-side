import React from "react";
import Lottie from "lottie-web";
import { Container, Row, Col } from "react-bootstrap";

const LottieAnimation = () => {
  React.useEffect(() => {
    const lottiePlayer = Lottie.loadAnimation({
      container: document.querySelector(".lottie-player1"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets1.lottiefiles.com/packages/lf20_JQ0bqPxiN9.json",
    });
    return () => {
      lottiePlayer.destroy();
    };
  }, []);

  return (
      
        <div>
          <div className="lottie-player1" />
        </div>
      

  );
};

export default LottieAnimation;
