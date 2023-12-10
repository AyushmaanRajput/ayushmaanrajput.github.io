import React from "react";
import Ticker from "framer-motion-ticker";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrop,
  faGlobe,
  faImage,
  faLayerGroup,
  faMobileScreenButton,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "./common/Reveal";

export function JobsTicker() {
  return (
    <>
      <JOBSTICKER>
        {/* 
          <h2>I can <i>*</i>do<i>*</i></h2>
        </Reveal> */}
        <Reveal>
          <Ticker duration={60} className="container">
            <JOBCARD>
              <FontAwesomeIcon
                icon={faGlobe}
                className="icon"
              ></FontAwesomeIcon>
              WEB DEVELOPMENT
            </JOBCARD>

            <JOBCARD>
              <FontAwesomeIcon icon={faCrop} className="icon"></FontAwesomeIcon>
              WEB DESIGN
            </JOBCARD>

            <JOBCARD>
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="icon"
              ></FontAwesomeIcon>
              PROTOTYPING
            </JOBCARD>

            <JOBCARD>
              <FontAwesomeIcon
                icon={faImage}
                className="icon"
              ></FontAwesomeIcon>
              WIREFRAMING
            </JOBCARD>

            <JOBCARD>
              <FontAwesomeIcon
                icon={faMobileScreenButton}
                className="icon"
              ></FontAwesomeIcon>
              RESPONSIVE DESIGN
            </JOBCARD>

            <JOBCARD>
              <FontAwesomeIcon
                icon={faWandMagicSparkles}
                className="icon"
              ></FontAwesomeIcon>
              USER EXPERIENCE
            </JOBCARD>
          </Ticker>
        </Reveal>
      </JOBSTICKER>
    </>
  );
}

const JOBSTICKER = styled.div`
  background-color: transparent !important;
  padding: 1rem 0;
  /* border-left: 1px solid var(--background-light);
  box-shadow: inset 10px 0 20px 40px var(--background); */
`;

const JOBCARD = styled.div`
  margin: 1rem;
  letter-spacing: 1px;
  opacity: 0.7;
  font-weight: light;
  border: 1px solid transparent;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  /* box-shadow: 0 0 6px var(--secondary); */
  transition: all 0.2s ease-in;
  &:hover {
    opacity: 1;
    color: var(--primary);
    border: 1px solid var(--primary);
    box-shadow: 0 1px 6px var(--primary), 0 2px 12px var(--primary);
  }
  @media screen and (max-width: 700px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 400px) {
    padding: 0.25rem 0.67rem;
  }
`;
