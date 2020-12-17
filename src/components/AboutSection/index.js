import React from "react";
import ProfileImg from "https://avatars3.githubusercontent.com/u/59777514?s=460&u=0594ae2c77c2041e3cdc6add5fe553967a990750&v=4";

const AboutSection = () => {
  return (
    <AboutContainer>
      <AboutWrapper>
        <AboutRow>
          <Column1>
            <AboutImg src={ProfileImg} />
          </Column1>
          <Column2>
            <AboutHeading>About Me</AboutHeading>
            <AboutText>
              I am full-stack developer based in Central Florida. I don't have
              quarrels with any part of the stack as it is the challenge of
              figuring out the logic to make things work that infinitely propels
              me to code. I perceive myself to be an open/great communicator,
              easy to coach as I consistently strive to be objective and
              realistic with my capabilities as a programmer; due to my
              understanding that tech is an "ever-growing field" so a "great"
              solution today may be an "ok" solution tomorrow. Outside the world
              of coding, I am a family man to my wife and 2 daughters; and a
              life-long lover of all things games and anime.
            </AboutText>
          </Column2>
        </AboutRow>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutSection;
