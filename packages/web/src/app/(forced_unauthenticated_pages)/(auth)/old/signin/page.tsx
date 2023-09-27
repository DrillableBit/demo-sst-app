'use client'


import {useEffect, useState} from 'react';
import {authenticateUser} from "./../../../../../_lib/cognito"
// import {toast} from "react-toastify";
import Link from "next/link";
import {redirect} from "next/navigation";
import {useAuth} from "./../../../../../_components/providers/AuthProvider";
import Navbar from '@/_components/_nav/Navbar';

const Page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loginState, setLoginState] = useState(''); //Fail, Success, Confirm
    const {setIsLoggedIn} = useAuth();

    useEffect(() => {
        switch (loginState) {
            case "Success":
                console.log("Success redirect")
                redirect("/");
                break;
            case "Confirm":
                console.log("Confirm redirect")
                redirect("/confirm");
                break;
            default:
                break;
        }
    });

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let state;

        authenticateUser(email, password, {
            onSuccess: () => {
                state = 'Success';
                // toast('Hey there, welcome back! Hope you\'re ready to pick up where we left off and enjoy the ride! 😊', {
                //     hideProgressBar: true,
                //     autoClose: 3000,
                //     type: 'success',
                //     position: 'top-right'
                // })
                console.log("success")
                setLoginState("Success");
                setIsLoggedIn(true);
            },
            onFailure: (err : { message?: string; code?: string }) => {
                if (err.code === 'UserNotConfirmedException') {
                    state = "Confirm";
              
                    setError("User is not confirmed")
                    // Redirect to the confirmation page
                    localStorage.setItem("email", email);
                    setIsLoggedIn(false);
                } else {
                    state = "Fail";
                    setMessageType('error');
                    console.log("err")
                    setMessage(err.message || JSON.stringify(err));
                    // setIsLoggedIn(false);
                }
            },
        });
    };

    return (
        <>
       
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <div className="relative">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="flex items-center">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                {error}
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Sign In
                </button>
            </form>
            <div className={`mt-4 text-center ${messageType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {message}
            </div>
            <div className="mt-4 text-center">
                <p>
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="text-blue-600 hover:text-blue-800">
                        Sign up
                    </Link>
                </p>
            </div>
        </>
    );
};

export default Page;