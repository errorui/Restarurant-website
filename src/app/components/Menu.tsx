"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import useIsMobile from "../hook/isMobile";

const swipperitems = [
  { src: "images/about.jpg", name: "indian thali" },
  { src: "images/Barfi-Diwali_sweet.jpg", name: "barfi" },
  { src: "images/biryani.jpg", name: "biryani" },
  { src: "images/kheeer.jpg", name: "kheer" },
  { src: "images/Palakpaneer.jpg", name: "palak panner" },
  { src: "images/chicken.jpg", name: "chicken" },
];

const Menu_Section = () => {
  let ismobile: boolean = useIsMobile();

  return (
    <div className=" font-vonif bg-main flex flex-col items-center justify-center p-8 w-full relative">
      <h1 className="font-hindeng text-5xl text-back-second uppercase font-black text-center">
        Our Menu
      </h1>
      <div className=""></div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        slidesPerView={ismobile ? 1 : 3}
        effect="coverflow"
        loop={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="w-full h-full my-[3rem] md:p-4  "
      >
        {swipperitems.map((item, index) => (
          <SwiperSlide
            key={index}
            className="text-center font-[18px] bg-text-main flex  justify-center items-center py-5 md:px-6"
          >
            <div className="flex flex-col justify-center items-center ">
              <div className="w-full h-[560px] p-2 md:p-4 ">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-md origin-center center bg-center "
                />
              </div>
              <h2 className="text-xl text-back-main font-vonif mt-4 uppercase font-extrabold">
                {item.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Menu_Section;
