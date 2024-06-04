"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { UseAuth } from "../Context/UseStore";
import { FaBars, FaTimes } from "react-icons/fa";
import useIsMobile from "../hook/isMobile";

import { navitems } from "../data";

const Navbar = () => {
  let ismobile: boolean = useIsMobile();
  const { signout, user, loading } = UseAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="  duration-300 flex py-3 font-vonif  bg-back-main-500 text-text-main items-center justify-between w-full relative z-10 px-2 ">
      <div className="logo w-[80px] h-[80px] font-extrabold uppercase overflow-hidden object-fill">
        <Link onClick={() => setIsMenuOpen(!isMenuOpen)} href="/">
          <img
            src="images/logo3.png"
            alt=""
            className="w-full h-auto object-cover "
          />
        </Link>
      </div>

      <div className="md:hidden absolute right-5 hover:text-secondary duration-400">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div className="">
        <ul
          className={`${isMenuOpen ? "block" : "hidden"}
          
          md:flex items-center gap-x-5 text-lg uppercase absolute  md:0 left-0  right-0
        w-full h-full bg-back-main-500  md:relative 
        md:h-auto  md:p-0 p-2  top-[90px]    md:top-0 `}
        >
          {loading ? null : user ? (
            <>
              <div
                className={`${ismobile && "bg-slate-200"} bg-back-main  p-2`}
              >
                <button
                  className="hover:border-black hover:bg-black hover:text-white  border-[3px] border-main text-secondary rounded-full px-4 py-2 font-medium font-hindeng "
                  onClick={signout}
                >
                  sign out
                </button>
              </div>
              <div
                className={`${
                  ismobile && "bg-slate-200"
                } bg-back-main  p-2 hover:text-main`}
              >
                <h1>hi {user}</h1>
              </div>
            </>
          ) : (
            <>
              <li
                className={`${
                  ismobile && "bg-slate-200"
                } bg-back-main -mb-1  p-2 font-bold  hover:text-main`}
              >
                <Link href="/login">login</Link>
              </li>
              <li
                className={`${
                  ismobile && "bg-slate-200  "
                } bg-back-main  p-2 font-bold  hover:text-main`}
              >
                <Link href="/signin">sign up</Link>
              </li>
            </>
          )}
          {navitems.map((i) => (
            <li
              key={i.pathname}
              className={`${
                ismobile && "bg-slate-200 -mb-1"
              } bg-back-main  p-2 font-bold hover:text-main`}
            >
              <Link href={i.pathname}>{i.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
