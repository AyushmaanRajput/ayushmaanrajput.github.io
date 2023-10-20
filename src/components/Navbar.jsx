import React from "react";
import { Logo } from "./Logo";
import styled from "styled-components";
import { Button } from "./common/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCode,
  faDownload,
  faHouse,
  faLaptopFile,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <NAV id="nav-menu">
      <Logo></Logo>
      <ul>
        <li>
          <a href="#home" className="nav-link home">
            <FontAwesomeIcon icon={faHouse} className="icon"></FontAwesomeIcon>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="nav-link about">
            <FontAwesomeIcon icon={faAddressCard} className="icon" />
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-link skills">
            <FontAwesomeIcon icon={faCode} className="icon" />
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link projects">
            <FontAwesomeIcon icon={faLaptopFile} className="icon" />
            Projects
          </a>
        </li>
        <li style={{ display: "none" }}>
          <a href="#contact" className="nav-link contact">
            <FontAwesomeIcon icon={faPhoneVolume} className="icon" />
            Contact
          </a>
        </li>
        <li>
          <Button
            href="/Resume.pdf"
            className="nav-link resume"
            id="resume-button-1"
            download
            title="Download Resume"
          >
            <FontAwesomeIcon icon={faDownload} className="icon" />
            Resume
          </Button>
        </li>
      </ul>
    </NAV>
  );
};

const NAV = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    li {
      /* overflow: hidden; */
    }
  }
`;
