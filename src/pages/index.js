import React, { useState } from "react";
import AboutSection from "../components/AboutSection";
import { aboutObj } from "../components/AboutSection/Data";
import HeroSection from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import TechStackSection from "../components/TechStackSection.js";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutSection {...aboutObj} />
      <TechStackSection />
    </>
  );
};

export default Home;
