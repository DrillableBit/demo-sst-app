"use client";


import { useEffect, useState } from "react";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { userPool } from "./../../../../_lib/cognito";
import Link from "next/link";
import { redirect } from "next/navigation";
import Navbar from "@/_components/_nav/Navbar";

type PasswordStrength = 0 | 1 | 2 | 3 | 4;

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageType, setMessageType] = useState("");
  const [message, setMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>(0);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignedUp, setSignedUp] = useState(false);

  const getPasswordStrength = (password: string): PasswordStrength => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    let strength: PasswordStrength = 0;

    if (hasUpperCase) strength += 1;
    if (hasLowerCase) strength += 1;
    if (hasNumber) strength += 1;
    if (password.length >= 8) strength += 1;

    return strength as PasswordStrength;
  };

  function debounce<F extends (...args: any[]) => any>(
    func: F,
    wait: number
  ): (...funcArgs: Parameters<F>) => void {
    let timeout: NodeJS.Timeout | null = null;

    return (...args: Parameters<F>) => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => func(...args), wait);
    };
  }

  const passwordValidation = (password: string): boolean => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    return password.length >= 8 && hasUpperCase && hasLowerCase && hasNumber;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!passwordValidation(password)) {
      setMessageType("error");
      setMessage(
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }

    if (password !== confirmPassword) {
      setMessageType("error");
      setMessage("Passwords do not match.");
      return;
    }

    const attributeList = [
      new CognitoUserAttribute({
        Name: "email",
        Value: email,
      }),
    ];
    // changed null to []
    userPool.signUp(email, password, attributeList, [], (err, result) => {
      if (err) {
        setMessageType("error");
        setMessage(`${err.message || JSON.stringify(err)}`);
        setSignedUp(false);
        return;
      }
      localStorage.setItem("email", email);
      setSignedUp(true);
    });
  };

  useEffect(() => {
    if (isSignedUp) {
      redirect("/confirm");
    }
  }, [isSignedUp]);

  return (
    <>
     
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="example@example.com"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                debounce(
                  () =>
                    setPasswordStrength(getPasswordStrength(e.target.value)),
                  300
                )();
              }}
              required
              placeholder="P@ssw0rd1"
              aria-describedby="passwordHint"
              className="mt-1 flex-grow p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="ml-2 text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <p id="passwordHint" className="text-xs text-gray-500 mt-2">
            Password must be at least 8 characters long and include at least one
            uppercase letter, one lowercase letter, and one number.
          </p>
        </div>
        <div className="flex items-center">
          <div
            className="w-1/4 h-2 rounded bg-red-500"
            style={{ opacity: passwordStrength > 0 ? 1 : 0.2 }}
          ></div>
          <div
            className="w-1/4 h-2 rounded bg-yellow-500 mx-1"
            style={{ opacity: passwordStrength > 1 ? 1 : 0.2 }}
          ></div>
          <div
            className="w-1/4 h-2 rounded bg-yellow-300"
            style={{ opacity: passwordStrength > 2 ? 1 : 0.2 }}
          ></div>
          <div
            className="w-1/4 h-2 rounded bg-green-500"
            style={{ opacity: passwordStrength > 3 ? 1 : 0.2 }}
          ></div>
        </div>
        <div className="relative">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="P@ssw0rd1"
              className="mt-1 flex-grow p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="ml-2 text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign Up
        </button>
      </form>
      <div
        className={`mt-4 text-center ${
          messageType === "success" ? "text-green-600" : "text-red-600"
        }`}
      >
        {message}
      </div>
      <div className="mt-4 text-center">
        <p>
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-600 hover:text-blue-800">
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
}
