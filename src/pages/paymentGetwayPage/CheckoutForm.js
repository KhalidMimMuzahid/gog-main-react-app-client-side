import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";

const CheckoutForm = ({ price, coursePurchaseDetails }) => {
  // context
  const { user } = useContext(AuthContext);

  //console.log("course price", price,  course)
  const [paymentError, setPaymentError] = useState("");
  const [isPaying, setIsPaying] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [paymentId, setPaymentId] = useState(null);
  const [payingStatus, setPayingStatus] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://api.geeksofgurukul.com/api/v1/payments/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("ready to pay:  ", data);
        setClientSecret(data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPayingStatus("");
    setPaymentError("");
    
    if (!stripe || !elements) {
      console.log("xxxxxxxxxxxxxxxxxxxxxxxx");
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      console.log("xxxxxxxxxxxxxxxxxxxxxxxx");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setPaymentError(error.message);
      return;
    } else {
      console.log("xxxxxxxxxxxxxxxxxxxxxxxx2");
      setPaymentError("");
    }

    const {
      paymentIntent,
      error: confirmError,
    } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user.email,
        },
      },
    });

    if (confirmError) {
      setIsPaying(false);
      setPaymentError(confirmError.message);
      return;
    }else{
      setPaymentError("");
    }
    if (paymentIntent?.status === "succeeded") {
      
      setPaymentId(paymentIntent?.id);
      console.log("successfully paid: intent Id: ", paymentIntent);
      // TODO: update database for change payment status  post_id paymentIntent?.id
      // course
      setIsPaying(true) 
      fetch(
        `https://api.geeksofgurukul.com/api/v1/payments/setpaymentstatus?_id=${coursePurchaseDetails?._id}&paymentId=${paymentIntent?.id}`,
        { method: "POST" }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("data: ", data);

          if (data?.success) {
            toast.success(data?.success?.message);
            setPayingStatus("success");
          } else {
            toast.error(data?.success?.error);
            setPayingStatus("danger");
            setPaymentError(data?.success?.error);
          }
          setIsPaying(false);

          //setPaymentError("something went wrong, please try again");
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        
        <button
          className={`mt-3 btn btn-primary ${(!stripe || !clientSecret || payingStatus==="success") && "bg-secondary"}`}
          type="submit"
          disabled={!stripe || !clientSecret || isPaying || payingStatus==="success"}
        >
          {isPaying ? "Paying" : payingStatus==="success" ? "Paid" : "Pay"}
        </button>
      </form>
      {/* <p style={{ color: "red" }}>{paymentError}</p> */}
      {payingStatus === "success" && (
        <div>
          <h6>You have successfully paid for this course</h6>
          <h6>PaymentId: <input readOnly value={paymentId} type="text"></input> </h6>
        </div>
      )}
      {paymentError && (
        <div>
          <h6 style={{ color: "red" }}>{paymentError}</h6>
          {payingStatus === "danger" && paymentId && (
            <h6> PaymentId: <input readOnly value={paymentId} type="text"> </input> </h6>
          )}
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
