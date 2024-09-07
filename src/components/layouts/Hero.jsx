import Image from "next/image";
import React from "react";
import Right from "../icons/Right";

const Hero = () => {
  return (
    <section className="hero mt-8">
      <div className="py-12">
        <h1 className="text-5xl text-gray-800 font-semibold leading-[3.7rem]">
          Everything <br /> is better  <br />with a  <span className="text-primary">Pizza</span> 
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is a missing piece that makes everyday complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex justify-center text-sm font-semibold">
            <button className="bg-primary flex justify-center gap-2 border-none text-white px-1 py-2 rounded-full">
                Order now
                <Right />
            </button>
            <button className="flex justify-center border-none text-gray-600 gap-2 px-4 py-2 rounded-full">
                Learn more
                <Right />
            </button>
        </div>
      </div>

      <div className="relative">
        <Image className="" objectFit="contain" layout="fill" src={"/pizza.png"} alt="pizza-image" />
      </div>
    </section>
  );
};

export default Hero;
