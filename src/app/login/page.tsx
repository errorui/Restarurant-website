import React from "react";
import Form from "../components/Form";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-center items-center">
      <Form text={"login in"}></Form>
      <Link
        href={"/signin"}
        className="text-black  hover:text-secondary uppercase font-antipasto font-semibold tracking-widest"
      >
        not a member?
      </Link>
    </div>
  );
};

export default page;
