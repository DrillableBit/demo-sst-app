"use client";
import React, { useState } from 'react';
import Layout from './layout';
import Navbar from '../../components/Navbar';
import { AWS, config } from '../../utils/aws-config';

function ForgotCredentials() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
 
  async function handleForgotCredentials(e: React.FormEvent) {
    e.preventDefault();

    try {
      const params = {
        ClientId: config.cognito.APP_CLIENT_ID as string,
        Username: username,
      };
      const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();
      await cognitoIdentityServiceProvider.forgotPassword(params).promise();
      // Handle the successful forgot password request (e.g., redirect user to a reset password screen)
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred.'); // Set a generic error message for unknown errors
      }
    }
  };

  return (
    <Layout>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center">Forgot Credentials</h1>
        <form className="mt-4 mx-auto max-w-sm" onSubmit={handleForgotCredentials}>
          <div className="mb-4">
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <button
            className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            type="submit"
          >
            Reset Password
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default ForgotCredentials;