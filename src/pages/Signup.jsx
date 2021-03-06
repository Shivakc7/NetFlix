import React from "react";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user , CreateUser} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      await CreateUser(email,password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  console.log(email,password, user)
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/87d697de-421a-49ff-b354-cf23f8e874be/NP-en-20220620-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="fixed bg-black/60 top-0 left-0 w-full h-screen"></div>
        <div className="fixed top-20 left-10 lg:left-1/4 right-10 lg:w-1/2 h-3/4  bg-black/75">
          <div className="text-white sm:p-10 space-y-4">
            <h1 className=" capitalize text-3xl font-bold ">Sign Up</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 ">
              <input
                className="bg-gray-600 py-2 px-2 rounded text-lg"
                type="email"
                placeholder="Email or phone number"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="bg-gray-600 py-2 px-2 rounded text-lg"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="bg-red-600  rounded py-2 text-lg">
                Sign Up
              </button>
            </form>
            <div className="flex items-center justify-between pb-6 text-gray-600 cursor-pointer">
              <p>
                <input className="mr-2" type="checkbox" />
                Remember me
              </p>
              <p className="cursor-pointer">Need Help?</p>
            </div>
            <p className="py-3">
              <span className="text-gray-600 text-base">Already subscribed to Netflix? </span>
              <Link to='/login'>

              Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
