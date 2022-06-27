import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Slider = ({ title, fetchURL, sliderID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(fetchURL);
      const movie = await response.data.results;
      setMovies(movie);
    };
    fetchMovie();
  }, [fetchURL]);

  const leftSlider = () => {
    var slider = document.getElementById("slider" + sliderID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const rightSlider = () => {
    var slider = document.getElementById("slider" + sliderID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };   
  return (
    <>
      <h2 className="md:text-xl font-bold p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={leftSlider}
          className="absolute left-0 bg-white rounded-full opacity-50 hover:opacity-100 text-black cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + sliderID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} id={id} />
          ))}
        </div>
        <MdChevronRight
        onClick={rightSlider}
          className="absolute right-0 bg-white rounded-full opacity-50 hover:opacity-100 text-black cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Slider;
