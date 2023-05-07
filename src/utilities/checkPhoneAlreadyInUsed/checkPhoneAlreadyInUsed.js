
import React, { useContext } from "react";

const checkPhoneAlreadyInUsed = (number) => {
    console.log("numbervavavavaaa: ",number)
  return fetch(
    `http://localhost:5000/checkphonealreadyinused/${number}`
  );
};

export default checkPhoneAlreadyInUsed;
