"use client"

import React from "react";
import StripeCheckout from "@/_components/StripeCheckoutForm";


export default function Page() {



  return (
    <>
    
      <div className="text-l p-2 bg-gray-100 rounded">
  <h1 className="text-2xl font-semibold mb-4">Settings</h1>

  <div className="bg-white p-2 rounded shadow-lg">

    <div className="flex">
      
      <div className="bg-blue-100 p-2 rounded cursor-pointer hover:bg-blue-200">
      <p className="text-xl font-medium mb-2">Billing:</p>
      <StripeCheckout />
      </div>
    </div>
  </div>
</div>
    </>
  );
}
