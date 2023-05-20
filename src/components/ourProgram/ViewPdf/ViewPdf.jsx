import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ViewPdf = () => {
  const fileName = useLoaderData();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  const xxx = () => {
    window.open(
      `https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/pdfdocs/${fileName}.pdf`,
      "_blank"
    );
    navigate("/");
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <Modal
        isOpen={true}
        onAfterOpen={afterOpenModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className=" ">
          <h2
            style={{ display: "none" }}
            className="hidden"
            ref={(_subtitle) => (subtitle = _subtitle)}
          >
            Hello
          </h2>
          <h1 onClick={xxx} className="fs-5 font-semibold">
            View PDF ?
          </h1>
        </div>
      </Modal>
    </div>
  );
};

export default ViewPdf;
