import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import SlideCard from "../SlideCard/SlideCard";

const DisplaySilde = ({ heading, subHeading, data, hide }) => {
  return (
    <section className="flex flex-col justify-center sm:flex-row md:items-center md:h-full gap-5 p-5 my-10">
      <section className="border-2 border-black p-4 flex-col justify-center  md:flex md:h-[50%] md:w-[20%]">
        <section className="text-3xl mb-4">{heading}</section>
        <section className={`${hide}`}>{subHeading}</section>
        <button className={`mr-auto my-3 py-3 px-2  ${hide}`}>
          Discover the entire collection
        </button>
      </section>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {data.map((info, index) => (
          <SwiperSlide key={index}>
            <SlideCard imageURL={info.imageURL} text={info.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default DisplaySilde;
