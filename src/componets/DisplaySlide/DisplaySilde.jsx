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
    <section className="h-full flex flex-col justify-center my-20 md: ">
      <section className="p-5 sm:w-[50%] h-[50%]">
        <h2 className="my-5">{heading}</h2>

        <section className={`text-3xl my-5${hide} h-fit`}>{subHeading}</section>
        <button className={`p-3  ${hide}`}>
          Discover the entire collection
        </button>
      </section>
      <section className="border-2h-full md:h-screen">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {data.map((info, index) => (
            <SwiperSlide key={index}>
              <SlideCard imageURL={info.imageURL} text={info.text} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default DisplaySilde;
