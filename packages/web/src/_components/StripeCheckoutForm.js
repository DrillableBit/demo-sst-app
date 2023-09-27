"use client";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import { useFormFields } from "./_hooks/useFormFields"; // Make sure this is imported correctly
import { useRouter } from "next/navigation";
import handleError from "@/_lib/handleError";
import { secure_request_post } from "@/_lib/secureFetchTools";

const stripePromise = loadStripe(process.env.STRIPE_KEY); // Prefixed with REACT_APP_

const StripeCheckout = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  function billUser(details) {
    return secure_request_post({
      path: `billing`,
      data: details,
    });
  }

  async function handleFormSubmit(storage, { token, error }) {
    // const nav = useRouter().push;
    if (error) {
      handleError(error);
      return;
    }

    setIsLoading(true);

    try {
      const response = await billUser({
        storage,
        source: token.id,
      });
      if(response.data.paymentSuccess === true) {
        alert (response.data.message);
        router.push("/");
      }
      else {
        alert(response.data.message);
      }
      // router.push("/");
    } catch (e) {
      handleError(e);
      setIsLoading(false);
    }
  }

  return (
    <Elements stripe={stripePromise}>
      <StripeCheckoutForm onSubmit={handleFormSubmit} isLoading={isLoading} />
    </Elements>
  );
};

const StripeCheckoutForm = ({ isLoading, onSubmit }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [isProcessing, setIsProcessing] = useState(false);
  const [isCardComplete, setIsCardComplete] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    name: "",
    storage: "",
  });

  const validateForm = () =>
    stripe &&
    elements &&
    fields.name !== "" &&
    fields.storage !== "" &&
    isCardComplete;

  const handleSubmitClick = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);
    const { token, error } = await stripe.createToken(cardElement);

    setIsProcessing(false);

    onSubmit(fields.storage, { token, error });
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmitClick} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="storage" className="text-lg font-semibold mb-1">Storage</label>
          <input
            id="storage"
            min="0"
            type="number"
            value={fields.storage}
            onChange={handleFieldChange}
            placeholder="Number of notes to store"
            className="p-2 border rounded"
          />
        </div>
        <hr className="my-4" />
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-semibold mb-1">{"Cardholder's Name"}</label>
          <input
            id="name"
            type="text"
            value={fields.name}
            onChange={handleFieldChange}
            placeholder="Name on the card"
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-1">Credit Card Info</label>
          <CardElement
            onChange={(e) => setIsCardComplete(e.complete)}
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#495057",
                  backgroundColor: "#fff",
                  lineHeight: "2.2",
                  
                  fontFamily: "'Open Sans', sans-serif",
                },
              },
            }}
            className=""
          />
        </div>
        <button type="submit" disabled={!validateForm()} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50">
          {isProcessing ? "Processing..." : "Purchase"}
        </button>
      </form>
      <button
        onClick={() => {
          console.log(process.env.NEXT_PUBLIC_STRIPE_KEY);
        }}
        className="mt-4 bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
      >
        Debug
      </button>
    </div>
  
  );
};

export default StripeCheckout;
