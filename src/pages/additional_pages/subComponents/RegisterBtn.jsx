import React from "react";
import { Link } from "react-router-dom";

function RegisterBtn({remainingTime}) {
  return (
    <div className="mb-5">
      <Link target="_blank" to='https://forms.gle/y7uqvSjpy7fS8P9g9'>
        <span>
          <button
            type="button"
            className="registerBtn mt-5 rounded border-0 bg-success py-2 px-3"
          >
            Register now for ₹99 <s>₹999</s>
          </button>
        </span>
      </Link>
      <p className="mt-2 animated-text">Offer Ends in {remainingTime}</p>
    </div>
  );
}

export default RegisterBtn;
