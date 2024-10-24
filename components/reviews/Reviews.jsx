import React from "react";
import ReviewCard from "./ReviewCard";
import { MdStars } from "react-icons/md";
import ReviewSlides from "./ReviewSlides";

const Reviews = () => {
  return (
    <div className="items-center min-h-96 mt-24 mb-16 flex flex-col overflow-hidden space-y-5">
      <div className="flex items-center space-x-5 mb-8 shadow-lg shadow-purple-200 px-3 py-3 bg-gray-100 rounded-full">
        <MdStars size={50} className="text-purple-600" />
        <p className="text-[1.5rem]">
          Rated{" "}
          <span className="font-bold ">
            <span className="text-purple-600 ">4.8</span>/5
          </span>{" "}
          by over <span className="font-bold">100K</span> users.
        </p>
      </div>
      <h1 className="w-[600px] text-[1.75rem] font-bold text-center grid place-content-center flex-wrap">
        Praises from our satisfied users about the impact we have brought.
      </h1>

      <div className="w-full relative flex flex-col justify-center">
        <div className="absolute h-full w-full z-50 flex justify-between">
          <div className=" bg-gradient-to-r from-white to-transparent w-[100px] h-full m-0 "></div>
          <div className=" bg-gradient-to-l from-white to-transparent w-[100px] h-full m-0 "></div>
        </div>
        <ReviewSlides direction="animate-scroll" />
        <ReviewSlides direction="animate-reversedScroll" />
      </div>
    </div>
  );
};

export default Reviews;
