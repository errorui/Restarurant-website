import React from "react";
import { workers_data } from "../data";
const page = () => {
  return (
    <div className="   p-6  bg-back-main text-text-main flex flex-col items-center justify-center ">
      <h1 className="text-3xl md:text-6xl font-bold mb-8 font-hindeng">
        About Us
      </h1>
      <div>
        {workers_data.map((worker, index) => {
          return (
            <div
              key={worker.name}
              className="md:flex items-center justify-center my-10  font-antipasto "
            >
              <div className="w-full  md:w-[50%] p-4 flex flex-col justify-center items-center">
                <img
                  src={worker.profimg}
                  alt={worker.prof}
                  className="w-full  lg:w-[75%] h-[50%] rounded-full "
                />
              </div>
              <div className="w-full  p-4 flex flex-col justify-center items-start">
                <h2 className="  text-4xl font-semibold mb-4 text-main text-left font-hindeng">
                  Our {worker.prof}
                </h2>
                <p className="text-lg ">
                  <span className="font-bold ">Name:</span> {worker.name}
                  <br />
                  <span className="font-bold ">Background:</span>
                  {worker.background}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
