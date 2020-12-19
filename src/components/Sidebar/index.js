import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
            onClick={toggle}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="techStack"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
            onClick={toggle}
          >
            Tech Stack
          </SidebarLink>
          <SidebarLink
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
            onClick={toggle}
          >
            Projects
          </SidebarLink>
          <SidebarLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
            onClick={toggle}
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
