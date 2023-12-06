import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Reveal } from "./common/Reveal";

export const Contact = () => {
  return (
    <CONTACT id="contact">
      <Reveal>
        <h2>Find Me Here</h2>
      </Reveal>
      <Reveal>
        <div className="contact-container">
          <a
            href="https://github.com/AyushmaanRajput"
            target="_blank"
            id="contact-github"
          >
            <FontAwesomeIcon icon={faGithub} className="contact-icon" />
            <div className="tooltip">Github</div>
          </a>
          <a
            href="https://www.linkedin.com/in/ayushmaan-rajput-8ba7ab279/"
            target="_blank"
            id="contact-linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
            <div className="tooltip">LinkedIn</div>
          </a>
          <a id="contact-phone">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <div className="tooltip">Contact</div>
          </a>
          <a
            id="contact-email"
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ayushmaanrajput25feb@gmail.com"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <div className="tooltip">Gmail</div>
          </a>
        </div>
        <div className="vl"></div>
      </Reveal>
      {/* <Reveal>
        <input type="text" placeholder="Enter your email here" />
      </Reveal> */}
    </CONTACT>
  );
};

const CONTACT = styled.div`
  padding-top: 5rem;
  padding-inline: 1rem;
  .contact-container {
    padding-block: 3rem;
    display: flex;
    gap: 4rem;
    justify-content: center;
    align-items: center;
  }
  .contact-icon {
    font-size: 2rem;
  }
  input {
    padding: 0.65rem 1rem;
    border-radius: 50px;
    background-color: transparent;
    border: 2px solid var(--text);
    width: min(20rem, 100%);
    color: var(--text);
  }
  @media screen and (max-width: 1100px) {
    padding-top: 3rem;

    .contact-container {
      padding-block: 2rem;
      gap: 2rem;
    }
    .contact-icon {
      font-size: 1.75rem;
    }
  }
  @media screen and (max-width: 700px) {
    padding-top: 2rem;
    .contact-container {
      padding-block: 1rem;
      gap: 1rem;
    }
    .contact-icon {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 700px) {
    .contact-icon {
      font-size: 1rem;
    }
  }
`;
