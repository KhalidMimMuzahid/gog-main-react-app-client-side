import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useState } from "react";

const CheckoutForm = ({ course, price }) => {
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
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
          className="mt-3 btn btn-primary"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      <p style={{ color: "red" }}>{cardError}</p>
    </>
  );
};

export default CheckoutForm;
