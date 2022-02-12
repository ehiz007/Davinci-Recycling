import React from "react";
import { Link } from "react-router-dom";
import Brand from "./Brand";

export default function Header({ showMenu, setShowMenu }) {
  return (
    <header className="sticky top-0 z-20 px-5 md:px-10 transition ease-in-out text-stone-600 font-medium bg-white shadow-md">
      <div className="flex justify-between max-w-5xl sm:max-w-6xl mx-auto">
        <Link to="/">
          <Brand />
        </Link>

        <div className="hidden md:flex items-center space-x-4 lg:space-x-10 mt-2 text-lg  px-2">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 hover:scale-110 hover:text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <Link to="/services">
            <p className="focus:border-b-2 hover:scale-110 hover:text-green-500 border-green-500 transform transition  hover:duration-200 pb-1 ease-in-out">
              Services
            </p>
          </Link>
          <Link to="/about">
            <p
              className="focus:border-b-2 hover:scale-110 hover:text-green-500 border-green-500 transform transition  hover:duration-200 pb-1 ease-in-out"
              href="/about"
            >
              About
            </p>
          </Link>
          <Link to="/contact">
            <p
              className="focus:border-b-2 hover:scale-110 hover:text-green-500 border-green-500 transform transition  hover:duration-200 pb-1 ease-in-out"
              href="/contact"
            >
              Contact us
            </p>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="shadow-lg bg-gray-200 focus:ring-2 focus:ring-gray-300 rounded-full p-1 outline-none transform trasition hover:duration-100 hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
