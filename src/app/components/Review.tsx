"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { CiUser } from "react-icons/ci";

import { reviewitems } from "../data";

const Review_Section = () => {
  return (
    <div className="font-cant bg-back-second flex flex-col items-center justify-center p-2 md:p-8 w-full relative  min-h-[95vh] ">
      <h1 className=" font-hindeng text-[3rem] text-secondary uppercase font-light text-center ">
        what people say about us
      </h1>
      <div className="font-[18px] bg-back-second  md:flex  justify-center items-center p-8  text-left w-full gap-4 gap-y-3">
        {reviewitems.map((review, index) => (
          <div
            key={index}
            className="  flex flex-col justify-center items-center -400 p-6 rounded-lg bg-main my-2 "
          >
            <div className="user  flex justify-between items-center  w-full py-4 ">
              <div className="flex place-items-center ">
                <div className="font-[82px] bg-slate-400 text-white p-2 mr-2 rounded-full">
                  <CiUser size={25}></CiUser>
                </div>

                <div className="text-[20px]  font-semibold uppercase text-back-main">
                  {review.name}
                </div>
              </div>
              <div className="font-light text-xl"> {review.stars}/5</div>
            </div>
            <div className="text-left w-full  my-3 uppercase font-medium ">
              {review.date}
            </div>
            <p className="text-lg"> {review.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review_Section;
