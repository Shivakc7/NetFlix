import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ item, id }) => {
  const { user } = UserAuth();
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);

  const movieId = doc(db, "users", `${user?.email}`);

  const savedMovie = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieId, {
        savedMovies: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.poster_path,
        }),
      });
    } else {
      alert("Please log in to save movie");
    }
  };

  return (
    <div key={id} className=" w-40 lg:w-56 inline-block cursor-pointer relative p-2 ">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
        alt={item?.title}
        className=""
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-60  ">
        <p className="flex justify-center items-center h-full font-bold md:text-base whitespace-normal text-center text-white px-2">
          {item?.title}
        </p>
        <p onClick={savedMovie}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" fill="red" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-red-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
