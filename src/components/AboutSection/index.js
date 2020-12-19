import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  Column1,
  AboutImg,
  Column2,
  AboutHeading,
  AboutText,
  ResumeButton,
  ResumeLink,
  DownloadIcon,
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
    <AboutContainer
      lightBg={lightBg}
      id={id}
      className="card mb-3 align-items-center"
    >
      <AboutWrapper className="row">
        <Column1 className="col-md-5 d-flex justify-content-center align-self-center">
          <AboutImg src={img} alt={alt} />
        </Column1>
        <Column2 className="col-md-7 align-self-center">
          <AboutHeading lightText={lightText}>{headline}</AboutHeading>
          <AboutText>{description}</AboutText>
          <ResumeLink
            href="https://www2.slideshare.net/ErickBorrero/ericks-resume-239852013"
            target="blank"
          >
            <ResumeButton>
              <DownloadIcon className="fa fa-download" /> Download Resume
            </ResumeButton>
          </ResumeLink>
        </Column2>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutSection;
