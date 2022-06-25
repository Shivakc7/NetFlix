import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full px-4 py-2 z-[100] absolute top-2 flex items-center justify-between">
      <Link to="/">
        <h1 className="text-red-700 text-3xl font-bold cursor-pointer">
          Netflix
        </h1>
      </Link>
      <div className="text-white space-x-6">
        <Link to="/login">
          <button className="bg-red-600 rounded py-2 px-2 text-sm uppercase cursor-pointer">
            sign in
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 rounded py-2 px-2 text-sm uppercase cursor-pointer">
            sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
