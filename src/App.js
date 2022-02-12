import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import LandingPage from "./components/LandingPage";
import ServicesPage from "./components/ServicesPage";
import ContactUsPage from "./components/ContactUsPage";
import AboutPage from "./components/AboutPage";
import Error from "./components/Error";

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="font-davinci">
      <Wrapper showMenu={showMenu} setShowMenu={setShowMenu}>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/services" exact element={<ServicesPage />} />
          <Route path="/contact" exact element={<ContactUsPage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="*" exact element={<Error />} />
        </Routes>
      </Wrapper>
    </div>
  );
}
