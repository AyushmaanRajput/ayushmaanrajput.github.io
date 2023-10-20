import React from "react";
import styled from "styled-components";
import { Reveal } from "./common/Reveal";
import { motion } from "framer-motion";
import { Skills } from "./Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export const About = () => {
  return (
    <ABOUT id="about" className="about section">
      <Reveal>
        <h2>
          Some Things <i>*</i>
          <span>About</span>
          <i>*</i> Me
        </h2>
      </Reveal>
      <Reveal>
        <div className="about-content">
          <div className="about-card">
            <div className="about-avatar">
              <img src="/ProfilePhoto.png" alt="Profile Avatar Image" />
            </div>
            <div>
              <h3>Ayushmaan Rajput</h3>
              <p id="user-detail-intro">
                I'm a web developer specializing in building ( & occasionally
                designing ) robust web applicatoins. I'm focused on delivering,
                exceptional online experiences.
                <br />
                Let's collaborate to build exceptional web experiences and drive
                innovation in the digital realm.
              </p>
            </div>
          </div>
          <div class="about-xp">
            <div className="xp-card">
              <h4>Achievements</h4>
              <p>
                Created <span>3 Construct Week</span> winning projects at Masai
                School.
              </p>
            </div>
            <div className="xp-card">
              <h4>Certification</h4>
              <p>
                Completed <span>2 Full Courses</span> on FreeCodeCamp.org
              </p>
            </div>
          </div>
          <div className="about-socials">
            <motion.div
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="social-card"
            >
              <FontAwesomeIcon
                className="icon"
                icon={faInstagram}
              ></FontAwesomeIcon>
              <p>Instagram</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: 2.2 }}
              className="social-card"
            >
              <FontAwesomeIcon
                className="icon"
                icon={faGithub}
              ></FontAwesomeIcon>
              <p>Github</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              className="social-card"
            >
              <FontAwesomeIcon
                className="icon"
                icon={faDribbble}
              ></FontAwesomeIcon>
              <p>Dribbble</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: 2.6 }}
              className="social-card"
            >
              <FontAwesomeIcon
                className="icon"
                icon={faLinkedinIn}
              ></FontAwesomeIcon>
              <p>LinkedIn</p>
            </motion.div>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <Skills></Skills>
      </Reveal>
    </ABOUT>
  );
};

const ABOUT = styled.section`
  padding-block: 5rem;
  h2 {
    margin-bottom: 4rem;
  }
  .about-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "about about socials"
      "xp xp socials"
      "skills skills skills";
    gap: 2rem;
    .about-card {
      grid-area: about;
      display: flex;
      gap: 2rem;
      align-items: flex-start;
      justify-content: center;
      background-color: var(--primary);
      color: var(--background);
      padding: 2.5rem 1rem;
      border-radius: 0.5rem;
      /* width: 70%; */
      position: relative;
      #user-detail-intro {
        max-width: 80%;
      }
      .about-avatar {
        /* width: 50%; */
        width: 25%;
        overflow: hidden;
        img {
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
          object-fit: cover;
          object-position: top;
          background-color: var(--background);
          box-shadow: 0 -5px 5px var(--primary), 0 -10px 10px var(--primary);
          padding: 0.5rem;
        }
      }
      & > div:nth-of-type(2) {
        /* flex-grow: 1; */
        text-align: left;
      }
      &::after {
        content: "*";
        position: absolute;
        width: 10%;
        height: 10%;
        top: -0rem;
        right: 1rem;
        font-size: 7rem;
        z-index: 100;
        font-style: italic;
        opacity: 0.5;
        line-height: 1.1;
        font-weight: 600;
        color: var(--text);
        /* background-color: red; */
      }
    }
  }
  .about-xp {
    grid-area: xp;
    display: flex;
    gap: 1rem;
    align-items: stretch;
    justify-content: flex-start;
    .xp-card {
      border: 2px solid var(--secondary);
      background-color: var(--background);
      color: var(--secondary);
      padding: 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 0 2px var(--background), 0 0 5px var(--background);
      p {
        color: var(--text);
        max-width: 80%;
        margin-inline: auto;
        margin-top: 0.5rem;
      }
    }
  }
  .about-socials {
    grid-area: socials;
    border: 2px solid var(--secondary);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    padding: 1rem;
    > * {
      flex-grow: 1;
    }
    .social-card {
      display: flex;
      gap: 1rem;
      align-items: center;
      p {
        letter-spacing: 2px;
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: lighter;
      }
      .icon {
        font-size: 2rem;
        padding: 1rem;
        border: 1px solid var(--secondary);
        border-radius: 0.25rem;
        color: var(--secondary);
      }
    }
  }
`;
