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
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay
        // onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(e) => setActiveData(e.activeIndex + 1)}
        className="h-full"
      >
        {data.map((d) => (
          <SwiperSlide key={d.id}>
            <img
              className="w-full h-full p-5 backdrop-blur-sm bg-transparent  rounded-md "
              src={d.image}
              alt=""
            />
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </>
  );
};

export default Carousel;
