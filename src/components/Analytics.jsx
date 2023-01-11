import React from "react";
import Laptop from "../assets/analysis.png";

export const Analytics = () => {
  return (
    <div className="w-full px-4 py-1 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYICS DASHBOARD</p>
          <h1 className="py-2 text-2xl font-bold md:text-4xl sm:text-3xl">
            Manage DataAnalytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 md:mx-0 mx-auto py-3 self-start">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
