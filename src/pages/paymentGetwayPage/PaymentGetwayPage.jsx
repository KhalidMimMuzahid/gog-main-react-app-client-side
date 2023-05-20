import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";

// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
//console.log("Striprrrrrrrrrreeeeeeeeeeeeeeeee", stripePromise);

const PaymentGetwayPage = () => {
  // I assume
  const price = 199;
  const course = "Full-stack Web development";

  return (
    <div className="privacy-area mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="privacy-policy">
              <h3>Payment for {course}</h3>
              <h6>
                Please pay <strong>${price}</strong> for Enrole the courses
              </h6>
            </div>
            <div className="mt-3 py-4" style={{width: "28rem"}}>
              <Elements stripe={stripePromise}>
                <CheckoutForm 
                    price={price}
                    course={course}
                />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGetwayPage;
