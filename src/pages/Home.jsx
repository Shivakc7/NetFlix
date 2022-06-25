import React from "react";
import { Hero } from "../components/Hero";
import Slider from "../components/Slider";
import requests from "../Request";

const Home = () => {
  return (
    <div className="text-white">
      <Hero />
      <Slider sliderID='1' title="Now Playing" fetchURL={requests.nowPlaying} />
      <Slider sliderID='2' title="Upcoming" fetchURL={requests.upcoming} />
      <Slider sliderID='3' title="Popular" fetchURL={requests.popular} />
      <Slider sliderID='4' title="Trending" fetchURL={requests.trending} />
      <Slider sliderID='5' title="Top Rated" fetchURL={requests.topRated} />
    </div>
  );
};

export default Home;
