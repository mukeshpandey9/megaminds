import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

const CarouselCard = () => {
  return (
    <div className="w-full h-full max-w-[24rem] bg-orange-50 p-6 text-left">
      <h1 className="text-purple-800  text-xl font-semibold mb-5">
        Thesis Proposal Assistance
      </h1>
      <div className="flex flex-col gap-3 text-sm md:text-[1rem] list-disc pl-10">
        <li className="">
          Guidance in Developing a clear and compilling research proposal.
        </li>
        <li>
          Asistance in defining research objectives , questions and hypothesis.
        </li>
      </div>
    </div>
  );
};

export default function ResearchCarousel() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={30}
        // loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
