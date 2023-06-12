import React from "react";
import Banner from "./Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const BannerSlider = () => {
 return (
  <div className="xs:w-full sm:w-[70%] lg:w-[80%]">
   <Swiper
    slidesPerView={1}
    autoplay={{delay:3500}}
    pagination={{ clickable: true }}
    modules={[Pagination, Autoplay]}
    className="mySwiper"
   >
    <SwiperSlide>
     <Banner />
    </SwiperSlide>
    <SwiperSlide>
     <Banner />
    </SwiperSlide>
    <SwiperSlide>
     <Banner />
    </SwiperSlide>
   </Swiper>
  </div>
 );
};

export default BannerSlider;
