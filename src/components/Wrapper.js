import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

export default function Wrapper({ children, showMenu, setShowMenu }) {
  return (
    <>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      {children}
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      <Footer />
    </>
  );
}
