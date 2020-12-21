import React from "react";
import {
  ProjectContainer,
  ProjectWrapper,
  ProjectRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  BtnLink,
  Button,
  Column2,
  ImgWrap,
  Img,
  SkillsWrapper,
  SkillsHeading,
  SkillsHighlight,
} from "./ProjectSectionElements";

const ProjectSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel1,
  buttonLabel2,
  img,
  alt,
  codeLink,
  liveLink,
  highlight1,
  highlight2,
  highlight3,
}) => {
  return (
    <>
      <ProjectContainer lightBg={lightBg} id={id}>
        <ProjectWrapper>
          <ProjectRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <BtnLink href={codeLink} target="blank">
                    <Button>{buttonLabel1}</Button>
                  </BtnLink>
                  <BtnLink href={liveLink} target="blank">
                    <Button>{buttonLabel2}</Button>
                  </BtnLink>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </ProjectRow>
          <SkillsWrapper>
            <SkillsHeading lightText={lightText}>
              Skills Highlight
            </SkillsHeading>
            <SkillsHighlight darkText={darkText}>{highlight1}</SkillsHighlight>
            <SkillsHighlight darkText={darkText}>{highlight2}</SkillsHighlight>
            <SkillsHighlight darkText={darkText}>{highlight3}</SkillsHighlight>
          </SkillsWrapper>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default ProjectSection;
