import React from "react";
import student from "../assets/student.png";
import personal from "../assets/personal.png";
import bussiness from "../assets/bussiness.png";

const Prices = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <CardItem
          icon={student}
          text="Student"
          price="Free"
          storageSize="2 GB"
          grantedUser="1"
          emailSize="2 GB"
        />
        <CardItem
          icon={personal}
          text="Personal"
          price="$25"
          storageSize="10 GB"
          grantedUser="3"
          emailSize="5 GB"
          middle="true"
        />
        <CardItem
          icon={bussiness}
          text="Bussiness"
          price="$100"
          storageSize="unlimited GB"
          grantedUser="10"
          emailSize="unlimited GB"
        />
      </div>
    </div>
  );
};

const CardItem = ({
  icon,
  text = "name 💡",
  price,
  storageSize,
  grantedUser,
  emailSize,
  middle = "false",
}) => (
  <div
    className={
      "flex flex-col w-full p-4 my-4 duration-300 rounded-lg shadow-xl hover:scale-105 " +
      (middle === "true" ? "md:my-0 bg-slate-200" : "")
    }
  >
    <img
      src={icon}
      className={
        "w-20 mx-auto mt-[-3rem] " +
        (middle === "true" ? "bg-transparent" : "bg-white")
      }
      alt="/"
    />
    <h2 className="py-8 text-2xl font-bold text-center">{text}</h2>
    <p className="text-4xl font-bold text-center">{price}</p>
    <div className="font-medium text-center">
      <p className="py-2 mx-8 mt-8 border-b">{storageSize} Storage</p>
      <p className="py-2 mx-8 border-b">{grantedUser} Granted User</p>
      <p className="py-2 mx-8 border-b">Send up to {emailSize}</p>
    </div>
    <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black justify-center transition duration-500 hover:scale-110">
      Start Now
    </button>
  </div>
);
export default Prices;
