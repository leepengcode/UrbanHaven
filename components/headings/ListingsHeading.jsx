import React from "react";
import Arrow_right from "../icons/Arrow_right";

const SectionHeading = ({ title, location, additional }) => {
  return (
    <div className="flex justify-between items-center mb-5">
      <h1 className="font-bold text-[1.5rem]">
        {title} <span className="font-normal text-gray-500">({location})</span>
      </h1>
      <div className="group h-full min-w-[220px] flex cursor-pointer justify-start text-gray-500 hover:text-purple-600 transition-all ease-in-out duration-300">
        <a href="rent" className="text-[1.25rem]">
          View all {additional && additional} in {location}
        </a>
        <div className="ml-2 flex items-center transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 ease-in-out">
          <Arrow_right />
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
