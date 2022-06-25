import React from "react";
import { useState, useEffect } from "react";
import requests from "../Request";
import axios from "axios";

export const Hero = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieData = async () => {
      const response = await axios.get(requests.popular);
      const movie = await response.data.results;
      setMovies(movie);
    };

    movieData();
  }, []);

  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  const limitText = (str, num) => {
    if(str?.length > num){
        return str.slice(0, num) + '...'
    }else{
        return str
    }
  }
  // console.log(randomMovie);

  return (
    <div className="w-full h-[100vh] text-white">
      <div className="h-full">
      <div className="absolute w-full h-full bg-gradient-to-r from-black "></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
          className="w-full h-full object-cover "
          alt={randomMovie?.original_title}
        />
        <div className="absolute left-12 top-[200px] w-[40%] ">
          <span className="font-bold text-4xl">
            {randomMovie?.original_title}
          </span>
          <div className="space-x-6 py-4">
            <button className="text-xl text-black bg-white px-5 py-2 rounded-md">
              Play
            </button>
            <button className="bg-transparent text-gray-200 border-gray-300 border-2 px-5 py-2 rounded">
              Watch Later
            </button>
          </div>
          <div className="space-y-4">
            <p>Released {randomMovie?.release_date}</p>
            <p>{limitText(randomMovie?.overview, 200)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
