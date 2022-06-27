import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {IoMdClose} from 'react-icons/io'
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import {updateDoc, doc, onSnapshot} from "firebase/firestore"

const LikedShow = () => {
  const [movies, setMovies] = useState([])
  const { user } = UserAuth();

  const leftSlider = () => {
    var slider = document.getElementById("slider" );
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const rightSlider = () => {
    var slider = document.getElementById("slider" );
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedMovies)
        })
  }, [user?.email])

  const movieRef = doc(db, 'users', `${user?.email}`)

  const deleteShow = async(passID) => {
    try {
      const deleteResult = movies.filter((item) => item.id !== passID)
      await updateDoc(movieRef, {
        savedMovies: deleteResult
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
      <h2 className="md:text-xl text-white font-bold p-4">Favourite Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={leftSlider}
          className="absolute left-0 bg-white rounded-full opacity-50 hover:opacity-100 text-black cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item, id) => (
            <div
              key={id}
              className="lg:w-56 inline-block cursor-pointer relative p-2 "
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
                className=""
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-60  ">
                <p className="flex justify-center items-center h-full font-bold md:text-base whitespace-normal text-center text-white px-2">
                  {item?.title}
                </p>
                <p onClick={(e) => deleteShow(item?.id)} className="absolute top-3 right-3"><IoMdClose  fill="white" /></p>
              </div>
            </div>
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

export default LikedShow;
