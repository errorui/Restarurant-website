"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { UseAuth } from "../Context/UseStore";

const LoginForm = ({ signup }: { signup: boolean }) => {
  const { signemail_pass, signingoogle } = UseAuth();
  const handleSubmit = (e: any) => {
    e.preventDefault();

    let a = e.target;

    signemail_pass(a.email.value, a.password.value, signup);
  };

  return (
    <div
      style={{
        border: "32px solid white ",
        borderImage: 'url("border/borderimage3.jpg")',
        borderImageSlice: "100 106 103 100",
        borderImageRepeat: "round",
        borderRadius: "1rem",
      }}
      className=" w-full bg-white shadow-2xl p-4 mx-auto"
    >
      <h2 className=" text-3xl font-bold mb-6 text-text-main uppercase font-hindeng">
        {signup ? "signup" : "login"}
      </h2>
      <form onSubmit={handleSubmit} className="">
        <div className="space-y-4 mb-4">
          <div className="flex gap-3 justify-center items-center space-x-4">
            <input
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="flex gap-3 justify-center items-center">
            <input
              placeholder="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              type="password"
              id="password"
              name="password"
              minLength={4}
              required
            />
          </div>
        </div>
        <div className="btns space-y-2">
          <button
            id="form-subtmit-btn"
            className=" uppercase w-full bg-main text-white hover:shadow-xl duration-500 font-bold py-2 px-4 rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
            type="submit"
          >
            Submit
          </button>

          <button
            id="google-btn"
            onClick={signingoogle}
            className="w-full font-n bg-main text-white font-bold uppercase py-2 px-4 rounded-md hover:bg-secondary transition duration-300  
         hover:shadow-2xl
         
         "
          >
            {signup ? "sign up with google" : "login in with google"}
          </button>
        </div>
      </form>
    </div>
  );
};
const Form = ({ text }: { text: string }) => {
  const { user, signout, signingoogle, loading } = UseAuth();
  const router = useRouter();
  return (
    <div className=" text-text-main p-5 rounded-md max-w-md mx-auto text-center h-full font-vonif w-full">
      {loading ? (
        <div className="h-[100vh] w-full grid place-items-center">
          <div className="loader"></div>
        </div>
      ) : user ? (
        <div>
          <div className="text-4xl mb-4 w-full">Welcome, {user}!</div>

          <button
            id="order-btn"
            onClick={() => router.push("/order")}
            className="font-hindeng border-main border-2 rounded-3xl my-8 text-text-main hover:text-back-main text-2xl py-2 px-4  hover:bg-main transition duration-300 w-[250px] h-[50px] 
            hover:shadow-2xl"
          >
            order now
          </button>
          <button
            id="signout-btn"
            onClick={signout}
            className="font-hindeng  bg-main text-white text-2xl py-2 px-4 rounded-md hover:bg-text-main transition duration-300 w-[250px] h-[50px] 
            hover:shadow-2xl"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <LoginForm signup={text === "signup"}></LoginForm>
      )}
    </div>
  );
};

export default Form;
