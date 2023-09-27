'use client';


import { useState } from 'react';
import { initiateForgotPassword, confirmPassword } from "./../../../../_lib/cognito";
import Link from "next/link";
import Navbar from '@/_components/_nav/Navbar';

const  Page = () => {
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [stage, setStage] = useState('request');  // 'request' or 'confirm'
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleRequestReset = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("initiated")
        initiateForgotPassword(email, {
            inputVerificationCode: () => {
                setMessage("Verification code sent to your email. Please check and proceed.");
                setStage('confirm');
            },
            
            // onSuccess: () => {
            //     console.log("suces  ")
            //     setMessage("Verification code sent to your email. Please check and proceed.");
            //     setStage('confirm');
            // },
            onFailure: (err : Error) => {
                console.log("err")
                setError(err.message || JSON.stringify(err));
            }
        });
    };

    const handleConfirmReset = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        confirmPassword(email, verificationCode, newPassword, {
            onSuccess: () => {
                setMessage("Password reset successful! You can now login with your new password.");
            },
            onFailure: (err : Error) => {
                setError(err.message || JSON.stringify(err));
            }
        });
    };

    return (
        <>
            
            {stage === 'request' ? (
                <form onSubmit={handleRequestReset} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                    <button
                        type="submit"
                        className="w-full p-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Request Password Reset
                    </button>
                </form>
            ) : (
                <form onSubmit={handleConfirmReset} className="space-y-6">
                    <div>
                        <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700">
                            Verification Code
                        </label>
                        <input
                            type="text"
                            id="verificationCode"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            required
                            placeholder="Enter your verification code"
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                            New Password
                        </label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            placeholder="Enter your new password"
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Confirm Password Reset
                    </button>
                </form>
            )}
            {error && <div className="mt-4 text-center text-red-600">{error}</div>}
            {message && <div className="mt-4 text-center text-green-600">{message}</div>}
            <div className="mt-4 text-center">
                <p>
                    Remember your password?{" "}
                    <Link href="/login" className="text-blue-600 hover:text-blue-800">
                        Log in
                    </Link>
                </p>
            </div>
        </>
    );
};

export default Page;