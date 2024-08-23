import React from "react";
import SlideCard from "../SlideCard/SlideCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slider = ({ content }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {content.map((data) => {
        <SwiperSlide>
          <SlideCard imageURL={data.imageURL} text={data.text} />
        </SwiperSlide>;
      })}
    </Swiper>
  );
};

export default Slider;
