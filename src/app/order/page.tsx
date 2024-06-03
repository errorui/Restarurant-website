"use client";
import React, { useEffect, useState } from "react";
import { UseProductStore } from "./UseProductStore";
import { UseAuth } from "../Context/UseStore";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
type ProductItem = {
  productname: string;
  quantity: number;
  price: number;
  img: string;
};
const items: ProductItem[] = [
  {
    img: "images/about.jpg",
    productname: "indian thali",
    quantity: 1,
    price: 450,
  },
  {
    img: "images/Barfi-Diwali_sweet.jpg",
    productname: "barfi",
    quantity: 1,
    price: 150,
  },
  {
    img: "images/biryani.jpg",
    productname: "biryani",
    quantity: 1,
    price: 300,
  },
  { img: "images/kheeer.jpg", productname: "kheer", quantity: 1, price: 75 },
  {
    img: "images/Palakpaneer.jpg",
    productname: "palak panner",
    quantity: 1,
    price: 100,
  },
  {
    img: "images/chicken.jpg",
    productname: "chicken",
    quantity: 1,
    price: 250,
  },
];
const page = () => {
  const { additems } = UseProductStore();

  const { user, loading } = UseAuth();

  const router = useRouter();
  return (
    <>
      {loading ? (
        <div className="h-[100vh] w-full grid place-items-center">
          <div className="loader"></div>
        </div>
      ) : user ? (
        <div className=" p-3 md:p-7">
          <h1 className="text-xl text-center md:text-5xl my-8 font-black tracking-wider font-hindeng">
            Menu
          </h1>

          <div
            className="w-full min-h-[100vh] px-4 md:px-8 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            // style={{
            //   display: "grid",
            //   gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   gap: "15px",
            // }}
          >
            {items.map((i) => {
              return (
                <div className="bg-back-second flex flex-col justify-center  md:p-2 rounded-xl px-3 md:px-6 h-[500px] font-antipasto  ">
                  <div className=" w-full  overflow-hidden  md:rounded-t-3xl p-2 md:p-3">
                    <img
                      src={i.img}
                      alt=""
                      className="w-full h-[300px] object-cover inset-0"
                    />
                  </div>
                  <div className="flex flex-col px-2 mb-0  justify-end">
                    <div className=" h-full  flex      justify-between items-center md:p-3 w-full md:text-lg font-semibold uppercase">
                      <div className=" text-orange-900 ">{i.productname}</div>
                      <div className="">{i.price}</div>
                    </div>
                    <button
                      onClick={() => additems(i)}
                      className="duration-700   w-full bg-main md:px-3 py-3 rounded-xl font-extrabold uppercase md:text-lg text-back-main hover:bg-back-main hover:text-main "
                    >
                      add
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[100vh] font-semibold">
          <div className=" w-[150px]    ">
            <img src="images/namasteguy1.png" alt="" />
          </div>

          <h1 className="text-2xl text-center uppercase font-antipasto my-4 ">
            sign in to see this page
          </h1>
          <button
            onClick={() => router.push("/signin")}
            className="font-hindeng uppercase bg-main hover:bg-text-main text-white text-4xl px-8 py-2 rounded-md  transition duration-300  
          hover:shadow-2xl
          
          "
          >
            sign in
          </button>
        </div>
      )}
    </>
  );
};

export default page;
