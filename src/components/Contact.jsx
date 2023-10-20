import {
  faGithub,
  faGithubAlt,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

export const Contact = () => {
  return (
    <CONTACT id="contact">
      <a
        href="https://github.com/AyushmaanRajput"
        target="_blank"
        id="contact-github"
        title="Github Profile"
      >
        <FontAwesomeIcon icon={faGithub} className="contact-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/ayushmaan-rajput-8ba7ab279/"
        target="_blank"
        id="contact-linkedin"
        title="LinkedIn Profile"

      >
        <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
      </a>
      <div id="contact-phone" title="Copy Phone Number">
        <FontAwesomeIcon icon={faPhone} className="contact-icon" />
      </div>

      <a
        id="contact-email"
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ayushmaanrajput25feb@gmail.com"
        target="_blank"
        title="Email At"
      >
        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
      </a>
      <div className="vl"></div>
    </CONTACT>
  );
};

const CONTACT = styled.div`
  position: fixed;
  bottom: 0;
  left: 5%;
  width: 4rem;
  /* height: 10vh; */
  /* background-color: red; */
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  .contact-icon {
    margin-bottom:0.75rem;
    color: var(--secondary);
    font-size: 1.5rem;
    cursor: pointer;
    /* stroke-width:1px; */
    transition: color 0.2s ease-in;
    &:hover{
      color:var(--primary);
    }
  }
  .vl {
    height: 15vh;
    width: 1px;
    background-color: var(--secondary);
    opacity: 0.6;
    margin-top: 0.5rem;
  }
`;
