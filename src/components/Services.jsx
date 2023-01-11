import React from "react";

const Services = () => {
  return (
    <div className="w-full p-16 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="my-4 lg:col-span-2">
          <h1 className="py-2 pl-2 text-2xl font-bold md:text-4xl sm:text-3xl">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our website to get new services.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col items-center justify-between w-full sm:flex-row">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex w-full p-3 mx-2 text-black rounded-md"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black justify-center ">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our
            <span className="text-[#00df9a]"> Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
