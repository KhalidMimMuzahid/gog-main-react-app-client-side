import React from "react";

function MentorSection() {
  return (
    <div style={{width: "80%"}} className="mx-auto">
      <div className="row align-items-center gap-md-5 gap-lg-0">
        <div className="col-lg-5 col-sm-12">
          <img
            src={require("../../../assets/images/additional_images/card2.png")}
            alt="speaker card"
            height={350}
            className="mentor-img"
          />
        </div>
        <div className="col-lg-7 col-sm-12 text-start">
          <p>
            Katana Sri Ajay is a tech enthusiast with over 5 years of experience
            in the industry. He is the co-founder and CTO of Geeks of Gurukul, a
            company that provides online learning solutions for students. He has
            also worked at Adobe and Microsoft, where he gained experience in
            developing and deploying large-scale software systems. <br />
            <br /> Ajay is a passionate mentor who is committed to helping
            students learn and grow. He is a strong advocate for using
            technology to improve education, and he is excited to share his
            knowledge and experience with others. <br />
            <br />
            Ajay is a graduate of IIT Guwahati, one of the top engineering
            colleges in India. He is a highly skilled engineer with a deep
            understanding of computer science and software engineering. He is
            also a creative thinker and problem solver who is always looking for
            new ways to improve the way things work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MentorSection;
