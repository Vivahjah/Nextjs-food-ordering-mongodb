import Image from "next/image";
import React from "react";
import Right from "../icons/Right";

const Hero = () => {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-5xl font-semibold leading-[3.7rem]">
          Everything <br /> is better  <br />with a  <span className="text-primary">Pizza</span> 
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is a missing piece that makes everyday complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 text-sm font-semibold">
            <button className="bg-primary flex gap-2 text-white px-4 py-2 rounded-full">
                Order now
                <Right />
            </button>
            <button className="flex text-gray-600 gap-2 px-4 py-2 rounded-full">
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
