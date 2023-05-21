import React from "react";

function RegisterBtn() {
  return (
    <div className="mb-5">
      <button
        type="button"
        className="registerBtn mt-5 rounded border-0 bg-success py-2 px-3"
      >
        Register now for ₹199 <s>₹999</s>
      </button>
      <p className="mt-2">Offer Ends in 02:20</p>
    </div>
  );
}

export default RegisterBtn;
