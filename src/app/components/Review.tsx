"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { CiUser } from "react-icons/ci";

type review = {
  name: string;
  stars: number;
  date: string;
  description: string;
};
const reviewitems: review[] = [
  {
    name: "john",
    stars: 4.5,
    date: "14 Feb 2024",
    description:
      "The flavors here are absolutely amazing! The butter chicken was creamy and rich, and the naan was perfectly baked. The ambience is warm and inviting, making it a great spot for a family dinner. I was particularly impressed with the attentive service.",
  },
  {
    name: "rohit",
    stars: 5,
    date: "1 Jan 2024",
    description:
      "Absolutely fantastic dining experience! The biryani was flavorful and aromatic, and the service was top-notch. I highly recommend trying their mango lassi and the paneer tikka. Will definitely come back again!",
  },
  {
    name: "virat",
    stars: 4.5,
    date: "4 May 2024",
    description:
      "A delightful experience with a wide variety of dishes to choose from. The tandoori chicken was flavorful, and the dal makhani had a rich, creamy texture. The staff was friendly and the restaurant had a cozy atmosphere.",
  },
];

const Review_Section = () => {
  return (
    <div className="font-cant bg-back-second flex flex-col items-center justify-center p-2 md:p-8 w-full relative  min-h-[95vh] ">
      <h1 className=" font-hindeng text-6xl text-secondary uppercase font-light text-center">
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
