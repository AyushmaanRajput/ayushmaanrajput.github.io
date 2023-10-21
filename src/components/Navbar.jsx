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
        <li>
          <a href="#contact" className="nav-link contact">
            <FontAwesomeIcon icon={faPhoneVolume} className="icon" />
            Contact
          </a>
        </li>
      </ul>
      <div>
        <ul>
          <li>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </li>
          <li>
            <a
              href="/Resume.pdf
          "
              className="nav-link resume"
              title="Download Resume"
              download
              id="resume-button-1"
            >
              <Button>
                <FontAwesomeIcon icon={faDownload} className="icon" />
                Resume
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </NAV>
  );
};

const NAV = styled.nav`
  width: 80%;
  margin-inline: auto;
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
