import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 bg-green-600 text-gray-50">
      <div className="max-w-4xl mx-auto sm:flex justify-between items-center px-10 mb-3 space-y-2">
        <div>
          <p className="text-center">
            <span className="text-lg"> &copy;</span> {new Date().getFullYear}{" "}
            Davinchi recycling Inc. All rights reserved.
          </p>
        </div>
        <a
          href="https://ng.linkedin.com/in/davinchi-recycling-42a788213"
          target="_blank"
          className="cursor-pointer hover transform ease-in-out hover:text-blue-600"
        >
          <div className="text-center items-center justify-center flex">
            <span>Follow us on LinkedIn</span>
            <span>
              <svg
                className="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
            </span>
          </div>
        </a>
        <div className=" text-stone-200 text-center hover:text-blue-600">
          <a
            className="transform hover:text-blue-40 transition ease-in-out hover:scale-125"
            href="https://www.twitter.com/ehiz_briel"
            target="_blank"
          >
            <span className="">Designed by ehiz_briel</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
