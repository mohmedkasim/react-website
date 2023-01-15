import React from "react";
import Typed from "react-typed";

function Hero() {
  return (
    <div className="text-white ">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="p-2 font-bold text-center text-green-700 ">
          GROWING WITH DATA ANALYICS
        </p>
        <h1 className="text-4xl font-bold text-center md:text-7xl sm:text-6xl md:py-6">
          Grow with data.
        </h1>
        <div className="flex items-center justify-center animate-bounce">
          <p className="py-4 text-xl font-bold md:text-5xl sm:text-4xl">
            Fast, flexible financing for
          </p>
          <Typed
            className="pl-2 text-xl font-bold md:text-5xl sm:text-4xl"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <div>
          <p className="text-xl font-bold text-center text-gray-500 md:text-2xl md:pl-4 ">
            Monitor your data analytics to increase revenue for BTB, BTC,& SASS
            platforms.
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black justify-center transition duration-500 hover:scale-110">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
