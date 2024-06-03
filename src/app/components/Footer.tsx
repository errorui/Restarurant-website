"use client";

import React from "react";
import { ReactElement } from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
type social_connection = {
  link: string;
  icon: ReactElement<any, any>;
};
const connections: social_connection[] = [
  {
    link: "intstagram",
    icon: <FaInstagram />,
  },
  {
    link: "facebook",
    icon: <FaFacebook />,
  },
  {
    link: "youtube",
    icon: <FaYoutube />,
  },
];
const Footer = () => {
  return (
    <div className="bg-slate-200  font-antipasto md:flex justify-center items-center gap-x-10  gap-y-4 min-h-[35vh] p-5 mt-auto shadow-lg shadow-slate-400 ">
      <div className="my-3 socials flex flex-col items-center justify-center w-full">
        <h1 className="font-semibold text-3xl mb-9 font-hindeng text-main">
          Socials
        </h1>
        <div className="text-[2.5rem] text-text-main flex gap-x-6 items-center justify-center">
          {connections.map((connect, index) => {
            return (
              <div className="" key={connect.link}>
                {" "}
                {connect.icon}
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-3 addresss flex flex-col items-center justify-center w-full text-lg font-light">
        <h1 className="font-semibold text-3xl mb-9 font-hindeng text-main">
          Address
        </h1>
        <h2>Jaipur,sector-34,near ambience mall.</h2>
      </div>
      <div className="my-3 open flex flex-col items-center justify-center w-full text-lg font-light">
        <h1 className="font-semibold text-3xl mb-9 font-hindeng text-main">
          Opening hours
        </h1>
        8:00am-9:30pm
      </div>
    </div>
  );
};

export default Footer;
