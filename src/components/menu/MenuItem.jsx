import Image from "next/image";
import React from "react";

const MenuItem = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-2xl cursor-pointer transition-all">
        <div className="text-center">

      <img src="/pizza.png" className="max-h-auto max-h-24 block mx-auto" alt="pizza" />
        </div>
      <h4 className="font-semi-bold text-xl my-3">Pepperoni Pizz</h4>
      <p className="text-gray-500 text-sm my-4">
        Lorem ipsum dolor sit amet, cosecteur adipisicing elit
      </p>
      <button className=" bg-primary text-white rounded-full px-8 py-2">
        Add to cart $12
      </button>
    </div>
  );
};

export default MenuItem;
