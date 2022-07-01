import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const { user, LogOut } = UserAuth();
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await LogOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null);
  }
  console.log(isScrolled)
  
  return (
    <div className={`w-full fixed px-4 py-2 z-[999]  top-0 flex items-center justify-between ${isScrolled ? 'bg-black/70' : 'bg-transparent'}`}>
      <Link to="/">
        <h1 className="text-red-700 text-3xl font-bold cursor-pointer">
          Netflix
        </h1>
      </Link>
      {user?.email ? (
        <div className="text-white flex items-center ">
          <Link to="/account">
            <button className=" rounded mr-6  text-sm uppercase cursor-pointer">
              <AiOutlineUser  size={30} />
            </button>
          </Link>

          <button
            onClick={handleLogOut}
            className="bg-red-600 rounded py-2 px-2 text-sm uppercase cursor-pointer"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="text-white space-x-6">
          {/* <Link to="/login">
            <button className="bg-red-600 rounded py-2 px-2 text-sm uppercase cursor-pointer">
              sign in
            </button>
          </Link> */}
          <Link to="/signup">
            <button className="bg-red-600 rounded py-2 px-2 text-sm uppercase cursor-pointer">
              sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
