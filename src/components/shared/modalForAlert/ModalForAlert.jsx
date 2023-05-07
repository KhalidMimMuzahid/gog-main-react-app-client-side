import React from "react";
import Modal from "react-modal";
import './ModalForAlert.css'
import { Link, useNavigate } from "react-router-dom";

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

const ModalForAlert = ({
  alertMessage = "",
  modalIsOpenTemp = false,
  isForEmailVerification = false,
  setModalForAlertCom,
  link= ""
}) => {
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
const navigate= useNavigate()
  return (
    <div>
      <Modal
        isOpen={modalIsOpenTemp}
        onAfterOpen={afterOpenModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className=" ">
          <h2 style={{display:"none"}} className="hidden" ref={(_subtitle) => (subtitle = _subtitle)}>
            Hello
          </h2>
          <h1 className="fs-5 font-semibold">{alertMessage}</h1>
          {isForEmailVerification ? (
            <div className="justify-content-end w-100">
              <button
              style={{textDecoration: "none", border:"none", background: "white"}}
                className=" w-100 d-flex justify-content-end"
                onClick={() => {
                  setModalForAlertCom(null);
                }}
              >
                <a style={{textDecoration: "none", color: "white"}}
                onClick={()=>{
                  link && navigate(link)
                }}
                
                  className="emailVerificaionAlertMessageBoxCSS  "
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                >
                  Open Email
                </a>
              </button>
            </div>
          ) : (
            <div className="fs-5 d-flex justify-content-end w-100">
              <Link style={{textDecoration: "none", color: "white"}}
              to={link}
                className="emailVerificaionAlertMessageBoxCSS"
                onClick={() => {
                  setModalForAlertCom(null);
                }}
              >
                Ok
              </Link>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ModalForAlert;