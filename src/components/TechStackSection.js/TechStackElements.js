import styled from "styled-components";

export const TechStackContainer = styled.div`
  background: #0c0c0c;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 862px;
  position: relative;
  z-index: 1;
`;

export const TechStackWrapper = styled.div``;

export const TechStackHeader = styled.h1`
  color: #fff;
  font-size: 60px;
  border-bottom: 2px solid #fff;

  @media screen and (max-width: 480px) {
    font-size: 48px;
  }
`;

export const TechStackLogos = styled.div``;

export const LogoIcon = styled.i`
  font-size: 6vw;
  border-radius: 50%;
  &:hover {
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    -webkit-box-shadow: 0px 5px 40px -10px #fff;
    -moz-box-shadow: 0px 5px 40px -10px #fff;
    transition: all 0.05s ease-in-out 0.05s;
  }
`;
