"use client";
import React, { useState } from "react";
import Layout from "./layout";
import Navbar from "../../components/Navbar";
import { AWS, config } from "../../utils/aws-config";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    try {
      const params: AWS.CognitoIdentityServiceProvider.SignUpRequest = {
        ClientId: config.cognito.APP_CLIENT_ID as string,
        Username: username,
        Password: password,
      };
      const cognitoIdentityServiceProvider =
        new AWS.CognitoIdentityServiceProvider();
      await cognitoIdentityServiceProvider.signUp(params).promise();
      // Handle the successful registration (e.g., redirect user to a confirmation screen)
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
        <h1 className="text-4xl font-bold text-center">Register</h1>
        <form className="mt-4 mx-auto max-w-sm" onSubmit={handleRegister}>
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
            className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            type="submit"
          >
            Register
          </button>    
          {error}
        </form>
      </div>
    </Layout>
  );
}

export default Register;
