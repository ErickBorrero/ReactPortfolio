import React from "react";
import {
  TechStackContainer,
  TechStackHeader,
  TechStackLogos,
  LogoIcon,
} from "./TechStackElements";

const TechStackSection = () => {
  return (
    <TechStackContainer className="row" id="techStack">
      <TechStackHeader className="col-md-12 text-center">
        Tech Stack
      </TechStackHeader>
      <TechStackLogos className="col-md-12 d-flex justify-content-around">
        <LogoIcon className="devicon-html5-plain-wordmark colored" />
        <LogoIcon className="devicon-css3-plain-wordmark colored" />
        <LogoIcon className="devicon-javascript-plain colored" />
        <LogoIcon className="devicon-react-original colored" />
      </TechStackLogos>
      <TechStackLogos className="col-md-12 d-flex justify-content-around">
        <LogoIcon className="devicon-bootstrap-plain-wordmark colored" />
        <LogoIcon className="devicon-csharp-plain colored" />
        <LogoIcon className="devicon-dot-net-plain-wordmark colored" />
        <LogoIcon className="devicon-python-plain-wordmark colored" />
      </TechStackLogos>
      <TechStackLogos className="col-md-12 d-flex justify-content-around">
        <LogoIcon className="devicon-mysql-plain colored" />
        <LogoIcon className="devicon-nodejs-plain colored" />
        <LogoIcon className="devicon-docker-plain-wordmark colored" />
        <LogoIcon className="devicon-github-original-wordmark" />
      </TechStackLogos>
    </TechStackContainer>
  );
};

export default TechStackSection;
