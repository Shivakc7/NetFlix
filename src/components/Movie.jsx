import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";


const Movie = ({item, id}) => {
  const [like, setLike] = useState(true);

  return (
    <div
              key={id}
              className="lg:w-56 inline-block cursor-pointer relative p-2 "
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                alt={item?.title}
                className=""
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-60  ">
                <p className="flex justify-center items-center h-full font-bold md:text-base whitespace-normal text-center text-white px-2">
                  {item?.title}
                </p>
                <p>
                  {like ? (
                    <FaHeart className="absolute top-4 left-4 text-grya-300" />
                  ) : (
                    <FaRegHeart className="absolute top-4 left-4 text-grya-300" />
                  )}
                </p>
              </div>
            </div>
  )
}

export default Movie