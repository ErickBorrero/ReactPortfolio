import styled from "styled-components";

export const AboutContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AboutWrapper = styled.div`
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1520px;
  padding: 0 24px;
`;

export const AboutRow = styled.div`
  @media screen and (max-width: 768px) {
  }
`;

export const CardWrapper = styled.div``;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  align-self: start;
`;

export const AboutImg = styled.img`
  border-radius: 50%;
  height: 30vw;
  width: 25vw;

  @media screen and (max-width: 768px) {
    height: 50vw;
    width: 50vw;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const AboutHeading = styled.h3`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const AboutText = styled.p`
  color: #909090;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export const ResumeButton = styled.button`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    border: 3px solid #01bf71;
  }
`;

export const DownloadIcon = styled.i`
  font-size: 20px;
`;
