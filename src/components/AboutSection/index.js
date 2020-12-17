import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  AboutImg,
  Column2,
  AboutHeading,
  AboutText,
} from "./AboutElements";

const AboutSection = ({
  id,
  lightBg,
  lightText,
  headline,
  description,
  imgStart,
  img,
  alt,
  darkText,
}) => {
  return (
    <AboutContainer lightBg={lightBg} id={id}>
      <AboutWrapper>
        <AboutRow imgStart={imgStart}>
          <Column1>
            <AboutImg src={img} alt={alt} />
          </Column1>
          <Column2>
            <AboutHeading lightText={lightText}>{headline}</AboutHeading>
            <AboutText darkText={darkText}>{description}</AboutText>
          </Column2>
          {/* <Column3>
            <ResumeButton></ResumeButton>
          </Column3> */}
          <div className="columns download">
            <p>
              <a href="" className="button">
                <i className="fa fa-download"></i>Download Resume
              </a>
            </p>
          </div>
        </AboutRow>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutSection;
