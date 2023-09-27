"use client";

import { useEffect, useState } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";
import { userPool } from "./../../../../_lib/cognito";
import { redirect } from "next/navigation";
import { useAuth } from "./../../../../_components/providers/AuthProvider";

export default function ConfirmationForm() {
  const [confirmationCode, setConfirmationCode] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [userConfirmed, setConfirmed] = useState(false);
  const { setStatus } = useAuth();

  useEffect(() => {
    if (userConfirmed) {
      setStatus("Your account has been verified, you can now log in.");
      redirect("/");
    }
  });

  useEffect(() => {
    if (!localStorage.getItem("email")) {
      redirect("/signup");
    }
  });

  const handleConfirmation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cognitoUser = new CognitoUser({
      Username: localStorage.getItem("email") as string,
      Pool: userPool,
    });

    cognitoUser.confirmRegistration(confirmationCode, true, (err, result) => {
      if (err) {
        setMessageType("error");
        setMessage(err.message || JSON.stringify(err));
      } else {
        setConfirmed(true);
      }
    });
  };

  const handleResendCode = () => {
    const cognitoUser = new CognitoUser({
      Username: localStorage.getItem("email") as string,
      Pool: userPool,
    });

    cognitoUser.resendConfirmationCode((err, result) => {
      if (err) {
        setMessageType("error");
        setMessage(err.message || JSON.stringify(err));
      } else {
        setMessageType("success");
        setMessage("A new confirmation code has been sent to your email.");
      }
    });
  };

  return (
    <>
      <form onSubmit={handleConfirmation} className="space-y-6">
        <div>
          <label
            htmlFor="code"
            className="block text-sm font-medium text-gray-700"
          >
            Confirmation Code
          </label>
          <input
            type="text"
            id="code"
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
            required
            placeholder="123456"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Confirm
        </button>
      </form>
      <button
        onClick={handleResendCode}
        className="w-full p-2 mt-4 bg-gray-300 text-black font-semibold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        Resend Confirmation Code
      </button>
      <div
        className={`mt-4 text-center ${
          messageType === "success" ? "text-green-600" : "text-red-600"
        }`}
      >
        {message}
      </div>
    </>
  );
}
