import React from "react";
import { LuSearch } from "react-icons/lu";

const RentPage = () => {
  return (
    <div className="w-full h-auto min-h-[100vh]">
      <div className="w-full relative flex flex-col items-center">
        <div
          className="w-full h-80 bg-red-400"
          // style={{
          //   backgroundImage: "url(/images/skyline.jpg)",
          //   backgroundRepeat: "none",
          //   backgroundSize: "cover",
          //   backgroundPosition: "bottom",
          // }}
        ></div>
        <div className="w-[30%]  h-16 rounded-lg absolute top-[72%] flex place-items-center p-5 shadow-xl bg-white">
          <LuSearch size={20} className="mr-3" />
          <input
            type="text"
            className="w-[80%] outline-none"
            placeholder="Search..."
          />
        </div>
        <div className="w-full h-20 bg-white"></div>
      </div>
    </div>
  );
};

export default RentPage;
