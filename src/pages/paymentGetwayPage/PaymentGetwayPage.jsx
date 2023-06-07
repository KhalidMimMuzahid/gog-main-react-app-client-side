import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";

// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
//console.log("Striprrrrrrrrrreeeeeeeeeeeeeeeee", process.env.REACT_APP_STRIPE_PK);

const PaymentGetwayPage = () => {

  const coursePurchaseDetails= useLoaderData()
  //console.log("coserpersepsdetailsssssssssss", coursePurchaseDetails);

  const price = coursePurchaseDetails?.appliedPrice;
  const courseName = coursePurchaseDetails?.course?.courseName;
  const batch = coursePurchaseDetails?.batch?.batchName;
  

  return (
    <div className="privacy-area mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="privacy-policy">
              <h3>Payment for {courseName}<br/> <span style={{fontSize: "20px"}}>Batch {batch}</span> </h3>
              <h6>
                Please pay <strong>${price}</strong> for Enrole the courses
              </h6>
            </div>
            <div className="mt-3 py-4" style={{width: "28rem"}}>
              <Elements stripe={stripePromise}>
                <CheckoutForm 
                    price={price}
                    coursePurchaseDetails={coursePurchaseDetails}
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
