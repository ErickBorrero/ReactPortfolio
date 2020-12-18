import React from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroSocials,
  HeroA,
  HeroFbIcon,
  HeroIgIcon,
  HeroTwitterIcon,
  HeroGithubIcon,
  HeroLinkedInIcon,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="hero">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Erick Borrero | Full-Stack Developer</HeroH1>
        <HeroP>I am full-stack developer based in Central Florida.</HeroP>
        <HeroSocials>
          <HeroA href="https://www.facebook.com/erick.borrero.1" target="blank">
            <HeroFbIcon className="fa fa-facebook-square fa-3x" />
          </HeroA>
          <HeroA href="https://www.instagram.com/itstheflea_" target="blank">
            <HeroIgIcon className="fa fa-instagram fa-3x" />
          </HeroA>
          <HeroA href="https://twitter.com/its_the_flea" target="blank">
            <HeroTwitterIcon className="fa fa-twitter-square fa-3x" />
          </HeroA>
          <HeroA href="https://github.com/ErickBorrero" target="blank">
            <HeroGithubIcon className="fa fa-github-square fa-3x" />
          </HeroA>
          <HeroA href="https://linkedin.com/in/erick-borrero" target="blank">
            <HeroLinkedInIcon className="fa fa-linkedin-square fa-3x" />
          </HeroA>
        </HeroSocials>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
