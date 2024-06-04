"use client";
import React, { useState } from "react";
import { FaArrowUp, FaCartPlus, FaDumpster } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { UseProductStore } from "../order/UseProductStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UseAuth } from "../Context/UseStore";
import { ProductItem } from "../type";
function getitems(arr: ProductItem[]) {
  let ans: number = 0;
  for (let i = 0; i < arr.length; i++) {
    ans = ans + arr[i].quantity;
  }
  return ans;
}
function getsum(arr: ProductItem[]) {
  let ans: number = 0;
  for (let i = 0; i < arr.length; i++) {
    ans = ans + arr[i].price;
  }
  return ans;
}

const Cart = () => {
  const { productitems, removeitems, increasequantity, emptyarr } =
    UseProductStore();
  const { user } = UseAuth();
  const [isVisible, setVisible] = useState<boolean>(false);
  const notify = () => {
    toast.success(
      `Order Successfull, thansk for purchasing ${user} come back again soon`,
      {
        toastId: "success1",
        theme: "dark",
      }
    );
    emptyarr();
  };
  return (
    <>
      <div
        onClick={() => {
          setVisible(!isVisible);
        }}
        className="duration-500 z-20 hover:bg-back-second hover:text-main  text-2xl text-back-second   flex items-center justify-center  cart min-w-[50px] min-h-[50px] bg-main text-center rounded-full  fixed  right-[50px] top-[82px]"
      >
        <div className=" p-3 flex justify-center items-center w-[5px] absolute h-[5px] bg-slate-600 rounded-full left-[40px] bottom-[30px] text-white text-sm ">
          {getitems(productitems)}
        </div>
        <FaCartPlus></FaCartPlus>
      </div>
      <div
        className={`absolute  md:left-0 md:right-0 bottom-0 top-0 shadow-2xl font-antipasto uppercase   flex flex-col z-10 bg-back-main  ${
          isVisible ? `block` : "hidden"
        }`}
      >
        <div className="text-sm md:text-lg font-semibold w-full text-center uppercase p-3">
          <h1>products</h1>
        </div>
        <div className="flex flex-col overflow-y-scroll p-3">
          {productitems.length === 0 && (
            <h1 className=" text-lg md:text-4xl font-black absolute top-[50%] right-0 left-0 text-center   text-gray-300 uppercase overflw ">
              no items selected
            </h1>
          )}
          {productitems.length > 0 && (
            <div className="">
              {productitems.map((item, index) => {
                return (
                  <div
                    className="w-full  rounded-2xl flex h-[200px]  p-3  shadow-lg "
                    key={item.productname}
                  >
                    <div className="w-[55%] p-2">
                      <img
                        src={item.img}
                        alt=""
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    <div className="flex flex-col  text-left  p-3 w-full text-lg font-semibold ">
                      <div className="flex items-center justify-between">
                        <h2>{item.productname}</h2>
                        <div
                          className="hover:text-main"
                          onClick={() => removeitems(item.productname)}
                        >
                          <FaRegTrashAlt></FaRegTrashAlt>
                        </div>
                      </div>
                      <div className="flex items-center justify-between h-full">
                        <div className="">
                          <h1>price</h1>
                          <h2>{item.price}</h2>
                        </div>

                        <div className=" flex flex-col items-center justify-center gap-3">
                          <div
                            className=""
                            onClick={() => increasequantity(item, true)}
                          >
                            <FaArrowUp></FaArrowUp>
                          </div>
                          <h2>{item.quantity}</h2>
                          <div
                            className=" rotate-180"
                            onClick={() => increasequantity(item, false)}
                          >
                            <FaArrowUp></FaArrowUp>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div
                id="final price"
                className="flex justify-between px-5  py-3 text-white bg-secondary uppercase text-lg font-bold"
              >
                <h1 className="">Price</h1>
                <h1>{getsum(productitems)}</h1>
              </div>
              <button
                onClick={notify}
                className=" hover:bg-main hover:text-back-main   my-5 rounded-3xl border-2  block border-main h-16 w-full font-extrabold tracking-widest text-2xl font-serif uppercase text-text-secondary "
              >
                Order
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
