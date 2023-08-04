"use client";
import React, { useState } from "react";
import Layout from "./layout";
import Navbar from "../../components/Navbar";
import { AWS, config } from "../../utils/aws-config";

function VerifyCodePage() {
  const [verificationCode, setVerificationCode] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  async function handleVerification(e: React.FormEvent) {
    e.preventDefault();

    try {
      const params = {
        ClientId: config.cognito.APP_CLIENT_ID as string,
        ConfirmationCode: verificationCode,
        Username: username,
      };
      const cognitoIdentityServiceProvider =
        new AWS.CognitoIdentityServiceProvider();
      await cognitoIdentityServiceProvider.confirmSignUp(params).promise();
      // If the confirmation is successful, you can redirect the user to the login page or another appropriate page.
      console.log("Verification successful!");
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred."); // Set a generic error message for unknown errors
      }
    }
  }

  return (
    <Layout>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center">Verify Your Email</h1>
        <form className="mt-4 mx-auto max-w-sm" onSubmit={handleVerification}>
          <div className="mb-4">
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Enter Verification Code"
            />
          </div>
          <button
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            type="submit"
          >
            Verify
          </button>
        </form>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </div>
    </Layout>
  );
}

export default VerifyCodePage;
