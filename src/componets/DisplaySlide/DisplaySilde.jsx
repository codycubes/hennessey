import React from "react";
import Slider from "../Slider/Slider";

const DisplaySilde = ({ heading, subHeading, data, hide }) => {
  return (
    <section className="flex flex-col justify-center sm:flex-row md:items-center md:h-full gap-5 p-5">
      <section className="border-2 border-black p-4 flex-col justify-center  md:flex md:h-[50%] md:w-[20%]">
        <section className="mb-4">{heading}</section>
        <section className={`text-2xl ${hide}`}>{subHeading}</section>
        <button className={`mr-auto my-3 py-3 px-2  ${hide}`}>
          Discover the entire collection
        </button>
      </section>
      <Slider content={data} />
    </section>
  );
};

export default DisplaySilde;
