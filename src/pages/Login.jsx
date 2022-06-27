import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { LoginUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      await LoginUser(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
      // setTimeout(() => {

      // }, 6000);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/87d697de-421a-49ff-b354-cf23f8e874be/NP-en-20220620-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="fixed bg-black/60 top-0 left-0 w-full h-screen"></div>
        <div className="fixed top-14 left-1/4 w-1/2 h-3/4  bg-black/75">
          <div className="text-white sm:p-10 space-y-4">
            <h1 className=" capitalize text-3xl font-bold ">Sign In</h1>
            {errorMsg ? <p className="py-3 text-red-600 ">{errorMsg}</p> : null}
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
                Log In
              </button>
            </form>
            <div className="flex items-center justify-between pb-6 text-gray-600">
              <p>
                <input className="mr-2" type="checkbox" />
                Remember me
              </p>
              <p className="cursor-pointer">Need Help?</p>
            </div>
            <p className="py-3">
              <span className="text-gray-600 text-base">
              Ready to watch Netflix? 
              </span>
              <Link to="/signup"> Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
