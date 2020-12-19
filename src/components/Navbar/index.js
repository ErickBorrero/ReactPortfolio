import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../images/ErickLogo.jpg";
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLogoImg,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

export const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <NavLogoImg src={Logo} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="techStack"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Tech Stack
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-105}
                activeClass="active"
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};
