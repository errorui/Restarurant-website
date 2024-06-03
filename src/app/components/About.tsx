import React from "react";
import Link from "next/link";

const About_Section = () => {
  return (
    <div className="font-vonif min-h-[100vh] flex flex-col items-center justify-center p-6 bg-text-main text-back-second">
      <h1 className="  text-center text-2xl sm:text-xl md:text-6xl font-extralight leading-tight sm:leading-snug md:leading-none tracking-wider my-8 sm:my-10 md:my-12 p-4 sm:p-6 md:p-9">
        Inspired by traditional flavors, Raja's Realm offers a fresh, creative
        and respectful interpretation of Indian culture and its variety of food
        ranging from chili spicy to sweet.
      </h1>

      <button
        className="mb-8 sm:mb-6 md:mb-[50px] border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg 
      transition-all duration-500 hover:-translate-y-3
      uppercase border-back-second md:text-4xl text-xl font-hindeng hover:text-text-secondary hover:bg-back-main"
      >
        <Link href="/order">Order Now</Link>
      </button>

      <div className=" sm:w-[400px] sm:h-[400px] md:w-[550px]   md:h-[550px] my-10 ">
        <img
          className="w-full h-full object-cover rounded-lg "
          src="images/logo3.png"
          alt="About"
        />
      </div>
    </div>
  );
};

export default About_Section;
