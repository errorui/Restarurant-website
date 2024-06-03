import React from "react";
import Form from "../components/Form";
import Link from "next/link";
import './signin.css';
const page = () => {
  return (
    <div className=" min-h-[100vh] flex flex-col justify-center items-center relative">
      <Form text={"signup"}></Form>
      <Link
        href={"/login"}
        className=" text-black  hover:text-secondary font-semibold uppercase font-antipasto tracking-widest"
      >
        already a member?
      </Link>
      <img
        src="images/lotus.png "
        className="lotus   hidden lg:block absolute w-[250px] lg:w-[400px] left-[5rem] "
        alt="lotus"
      />
      <img
        src="images/lotus.png "
        style={{
          transform: "scaleX(-1)",
        }}
        className="lotus hidden lg:block absolute w-[250px] lg:w-[400px] right-[5rem]  "
        alt="lotus"
      />
    </div>
  );
};

export default page;
