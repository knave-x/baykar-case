import React from "react";
import Ellipses from "../assets/Ellipses.svg";
import World from "../assets/World.svg";
import Shoes from "../assets/Shoes.svg";

const Section7 = () => {
  return (
    <div className="flex items-center justify-center bg-amber-900 relative h-[717px]">
      <div className="flex flex-col relative z-40  items-center text-white justify-center  ">
        <div className="font-extrabold text-5xl lg:text-8xl">11,658,467</div>
        <div className="font-bold text-[2rem]  lg:text-[3.5rem] lg:font-extrabold ">
          Shoes Collected
        </div>
      </div>
      <img className="absolute z-0" src={World} alt="world"/>
      <img className="absolute z-10" src={Ellipses} alt="ellipses" />
      <img
        className="absolute z-20 lg:-translate-x-[380px] -translate-y-48"
        src={Shoes}
        alt="shoes"
      />
    </div>
  );
};

export default Section7;
