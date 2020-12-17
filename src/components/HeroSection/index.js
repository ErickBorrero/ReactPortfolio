import React from "react";
import backgroundImg from "../../images/sand.jpg";
import { HeroContainer, HeroBg, ImgBg } from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImgBg src={backgroundImg} />
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
