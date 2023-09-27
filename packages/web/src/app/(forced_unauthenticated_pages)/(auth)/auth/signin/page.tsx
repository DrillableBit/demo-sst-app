"use client";
import React, { useState } from "react";
import Navbar from "../../../../../_components/_nav/Navbar";
import { signIn } from "next-auth/react";
import { useAuth } from "./../../../../../_components/providers/AuthProvider";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { status } = useAuth();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        username: username,
        password: password,
        redirect: false,
      }).then((response) => {
        console.log(response);
        if (response?.error === null) {
          window.location.href = "/";
        }
        else {
          setError(response?.error as string);
        }

      });
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
    <>
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
          {status?
            <div className="mb-4" >
            <p className="w-full px-4 py-2 text-center border border-green-500 rounded-md  ">
            {status}
         
            </p>
            </div> : null }
            
          
          <button
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            type="submit"
          >
            Login
          </button>
          {error}
          
        </form>
      </div>
    </>
  );
}

export default Signin;
