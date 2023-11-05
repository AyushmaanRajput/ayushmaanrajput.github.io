import React from "react";
import { Button } from "./common/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faGlobe,
  faLaptopFile,
} from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "./common/Reveal";
import styled from "styled-components";

export const Home = () => {
  return (
    <Reveal>
      <HOME id="home">
        <div className="home-content">
          <Reveal>
            <span className="status">
              <FontAwesomeIcon
                icon={faGlobe}
                className="icon"
              ></FontAwesomeIcon>
              Available For Work
            </span>
          </Reveal>
          <Reveal>
            <h1>
              I am <span id="user-detail-name">Ayushmaan</span> Rajput<i>.</i> I
              Build things for the Web<i>.</i>
            </h1>
          </Reveal>
          <Reveal>
            <p id="user-detail-intro">
              I'm a web developer specializing in building ( & occasionally
              designing ) robust web applicatoins. I'm focused on delivering,
              exceptional online experiences.
            </p>
          </Reveal>
          <Reveal>
            <div className="buttons-container">
              <a
                href="/Resume.pdf"
                title="Download Resume"
                id="resume-link-2"
                download
              >
                <Button id="resume-button-2">
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="icon"
                  ></FontAwesomeIcon>
                  Resume
                </Button>
              </a>
              <a
                href="#projects
              "
              >
                <Button color="var(--secondary)">
                  <FontAwesomeIcon icon={faLaptopFile} className="icon" />
                  Projects
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="home-img-container">
            <img
              src="./ProfilePhoto.png"
              alt="Profile Image"
              // width={200}
              className="home-img"
            />
            <div className="backdrop"></div>
          </div>
        </Reveal>
      </HOME>
    </Reveal>
  );
};

const HOME = styled.section`
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  /* border: 1px solid red; */
  gap: 1rem;

  .home-content {
    width: 60%;
    text-align: left;
    .status {
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--primary);
      opacity: 0.8;
      margin-bottom: 2rem;
    }
    h1 {
      /* background-color:red; */
      line-height: 1.1;
      font-weight: lighter;
      margin-bottom: 1rem;
      span {
        color: var(--primary);
      }
    }
    p {
      opacity: 0.9;
      max-width: 500px;
      line-height: 1.6;
      letter-spacing: 1px;
      margin-bottom: 4rem;
    }
    .buttons-container {
      display: flex;
      gap: 1rem;
    }
  }
  .home-img-container {
    margin-top: -5rem;
    display: flex;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    /* border: 1px solid red; */
    z-index: 0;
    .home-img {
      margin-top: -2rem;
      width: 80%;
      border-radius: 1rem;
      /* border: 4px solid var(--primary); */
      overflow: hidden;
      object-fit: cover;
      position: relative;
      /* top: -10%; */
      z-index: 10;
    }
    .backdrop {
      position: absolute;
      width: 80%;
      height: 80%;
      bottom: 0;
      background-color: var(--primary);
      z-index: 8;
      border-radius: 1rem;
      box-shadow: 0 1px 5px var(--primary);
    }
    .backdrop::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 10%;
      left: 10%;
      border: 2px solid var(--primary);
      z-index: 3;
      border-radius: 1rem;
    }
  }
  &::after {
    font-family: "Montserrat", serif;
    letter-spacing: 4px;
    content: "Ayushmaan";
    position: absolute;
    top: 60%;
    right: -50%;
    opacity: 0.3;
    transform: translateY(-50%) rotate(90deg);
    /* background-color: red; */
    color: #3f3f3f !important;
    /* -webkit-text-stroke: 2px var(--secondary); */
    font-weight: 900;
    /* text-stroke: 2px var(--secondary); */
    font-size: 6.5rem;
    background-blend-mode: hard-light;
  }
`;
