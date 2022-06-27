import React from "react";
import LikedShow from "../components/LikedShow";

const Account = () => {
  return (
    <>
    <div className="w-full text-white">
      <img
        className=" w-full h-[400px] object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/87d697de-421a-49ff-b354-cf23f8e874be/NP-en-20220620-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className="bg-black/50 fixed top-0 left-0 w-full h-[550px]"></div>
    </div>
    <LikedShow />
    </>
  );
};

export default Account;
