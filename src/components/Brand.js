import React from "react";
import logo from "../resources/logo.png";

export default function Brand() {
  return (
    <div className="flex lg:space-x-5 items-center -ml-2 text-neutral-800">
      <img className="w-16 h-16 md:h-20 md:w-20" src={logo} alt="Brand-logo" />
      <h1 className="font-bold text-xl md:text-3xl">
        <span className="flex-wrap text-green-500 text-2xl md:text-3xl">D</span>
        avinchi recycling
      </h1>
    </div>
  );
}
