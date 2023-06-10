"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import PersonCard from "./PersonCard";

const Team = () => {
 return (
  <section>
   <Swiper
    slidesPerView={1}
    pagination={{ clickable: true }}
    breakpoints={{
     480: {
       slidesPerView: 1,
       spaceBetween: 20,
     },
     568: {
       slidesPerView: 2,
       spaceBetween: 20,
     },
     1024: {
       slidesPerView: 3,
       spaceBetween: 10,
     },
   }}
    modules={[Pagination]}
    className="mySwiper py-[40px]"
   >
    <SwiperSlide>
     <PersonCard />
    </SwiperSlide>
    <SwiperSlide>
     <PersonCard />
    </SwiperSlide>
    <SwiperSlide>
     <PersonCard />
    </SwiperSlide>
    <SwiperSlide>
     <PersonCard />
    </SwiperSlide>
    <SwiperSlide>
     <PersonCard />
    </SwiperSlide>
   </Swiper>
  </section>
 );
};

export default Team;
