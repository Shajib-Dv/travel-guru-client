/** @format */

import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel = ({ data, setActiveData }) => {
  //   console.log(setActiveData);
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(e) => setActiveData(e.activeIndex + 1)}
        className="h-3/5 md:h-64 rounded-md border-2 border-yellow-400"
      >
        {data.map((d) => (
          <SwiperSlide>
            <img className="w-full" src={d.image} alt="" />
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </>
  );
};

export default Carousel;
