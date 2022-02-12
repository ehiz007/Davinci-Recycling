import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Brand from "./Brand";

export default function MobileMenu({ showMenu, setShowMenu }) {
  return (
    <>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden top-0 left-0 w-2/3 h-screen z-30 fixed transition bg-white border rounded-tr-xl rounded-br-xl shadow-xl"
          >
            <div className="border-b">
              <Brand />
            </div>
            <div className="mt-2">
              <div
                onClick={() => setShowMenu(false)}
                className="flex justify-between items-center px-3 py-3"
              >
                <Link to="/services">
                  <p className="focus:border-b-2 hover:scale-125 hover:text-green-500 border-green-500 transform transition  hover:duration-200 pb-1 ease-in-out">
                    Services
                  </p>
                </Link>
              </div>
              <div
                onClick={() => setShowMenu(false)}
                className="flex justify-between items-center px-3 py-3"
              >
                <Link to="/about">
                  <p className="focus:border-b-2 hover:scale-125 hover:text-green-500 border-green-500 transform transition  hover:duration-200 pb-1 ease-in-out">
                    About
                  </p>
                </Link>
              </div>
              <div
                onClick={() => setShowMenu(false)}
                className="flex justify-between items-center px-3 py-3"
              >
                <Link to="/contact">
                  <p className="focus:border-b-2 hover:scale-125 hover:text-green-500 border-green-500 transform transition  hover:duration-200 pb-1 ease-in-out">
                    Contact us
                  </p>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const variants = {
  hidden: { x: -300 },
  exit: {
    x: -300,
    transition: { type: "spring", stiffness: 100 },
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};
