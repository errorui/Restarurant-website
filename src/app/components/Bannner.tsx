import React from "react";

const Bannner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden font-antipasto ">
      <div className="absolute inset-0 z-[-1]">
        <img
          className="w-full h-full object-cover filter blur-sm"
          src="images/illustration-of-indian-national-food-view-from-above-generative-ai-photo.jpg"
          alt="Indian National Food"
        />
      </div>
      <div className="relative flex flex-col items-center justify-center h-full text-center p-4">
        <h1 className="text-4xl font-bold text-white mb-4 uppercase ">
          welcome to
          <br />
          <span className="font-hindeng text-8xl "> Raja's Realm</span>
        </h1>
        <p className="text-3xl text-white text-opacity-75 ">
          A king like dine experience
        </p>
      </div>
    </div>
  );
};

export default Bannner;
