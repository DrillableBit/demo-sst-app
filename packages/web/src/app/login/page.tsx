"use client";
import React, { useState } from 'react';
import Layout from './layout';
import Navbar from '../../components/Navbar';
import { AWS, config } from '../../utils/aws-config';
import { signIn } from 'next-auth/react';

function Login() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ error, setError ] = useState('');

  async function handleLogin() {
    try {
      const result = await signIn("cognito", {
        username,
        password,
        redirect: true,
        // callbackUrl: `${window.location.origin}`,
        callbackUrl: "/verify"
        }).then((response) => {
          console.log(response)
        })
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred.'); // Set a generic error message for unknown errors
      }
    }
  }

  // async function handleLogin(e: React.FormEvent) {
  //   e.preventDefault();

  //   try {
  //     const params = {
  //       AuthFlow: 'USER_PASSWORD_AUTH',
  //       ClientId: config.cognito.APP_CLIENT_ID as string,
  //       AuthParameters: {
  //         USERNAME: username,
  //         PASSWORD: password,
  //       },
  //     };
  //     const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();
  //     const response = await cognitoIdentityServiceProvider.initiateAuth(params).promise();
  //     // Handle the successful login response (e.g., store tokens, redirect user, etc.)
  //     console.log(response)
  //   } catch (error) {
  //     console.log(error);
  //     if (error instanceof Error) {
  //       setError(error.message);
  //     } else {
  //       setError('An unknown error occurred.'); // Set a generic error message for unknown errors
  //     }
  //   }
  // };

  return (
    <Layout>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center">Login</h1>
        <form className="mt-4 mx-auto max-w-sm" onSubmit={handleLogin}>
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            type="submit"
          >
            Login
          </button>
          {error}
        </form>
      </div>
    </Layout>
  );
}

export default Login;